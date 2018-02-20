/*
 * Example plugin template
 */

jsPsych.plugins["iowa-gambling-task"] = (function() {

  var plugin = {};

  plugin.info = {
    name: "iowa-gambling-task",
    parameters: {
      decks: {
        type: jsPsych.plugins.parameterType.COMPLEX, // INT, IMAGE, KEYCODE, STRING, FUNCTION, FLOAT
        array: true,
        pretty_name: 'Decks',
        default: [{
            name: 'deckA',
            win_by_card: 100,
            cards: [0, 0, -150, 0, -300, 0, -200, 0, -250, -350, 0, -350, 0, -250, -200, 0, -300, -150, 0, 0, 0, -300, 0, -350, 0, -200, -250, -150, 0, 0, -350, -200, -250, 0, 0, 0, -150, -300, 0, 0]
          },
          {
            name: 'deckB',
            win_by_card: 100,
            cards: [0, 0, 0, 0, 0, 0, 0, 0, -1250, 0, 0, 0, 0, -1250, 0, 0, 0, 0, 0, 0, -1250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1250, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: 'deckC',
            win_by_card: 50,
            cards: [0, 0, -50, 0, -50, 0, -50, 0, -50, -50, 0, -25, -75, 0, 0, 0, -25, -75, 0, -50, 0, 0, 0, -50, -25, -50, 0, 0, -75, -50, 0, 0, 0, -25, -25, 0, -75, 0, -50, -75]
          },
          {
            name: 'deckD',
            win_by_card: 50,
            cards: [0, 0, 0, 0, 0, 0, 0, 0, 0, -250, 0, 0, 0, 0, 0, 0, 0, 0, 0, -250, 0, 0, 0, 0, 0, 0, 0, 0, -250, 0, 0, 0, 0, 0, -250, 0, 0, 0, 0, 0]
          }
        ]
      },
      starting_cash: {
        type: jsPsych.plugins.parameterType.INT,
        array: false,
        pretty_name: 'Starting cash',
        default: 2000
      },
      max_cash: {
        type: jsPsych.plugins.parameterType.INT,
        array: false,
        pretty_name: 'Maximum cash',
        default: 6000
      },
      max_clicks: {
        type: jsPsych.plugins.parameterType.INT,
        array: false,
        pretty_name: 'Maximum of clicks',
        default: 100
      },
      previusly_won: {
        type: jsPsych.plugins.parameterType.INT,
        array: false,
        pretty_name: 'Ammount won on previus trial',
        default: 0
      },
      previusly_lost: {
        type: jsPsych.plugins.parameterType.INT,
        array: false,
        pretty_name: 'Ammount loss on previus trial',
        default: 0
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    var selected_deck = [];
    var total_clicks = 0;
    var total_penalty = 0;
    var net_gain = 0;
    var html = '';

    html += '<div id="jspsych-html-button-response-btngroup" style="width:80%;">';
    trial.decks.forEach(function(deck) {
      html += '<input type="image" id="' + deck.name + '" class="jspsych-btn" name="' + deck.name + '" src="blue-back.png" style="width:25%;border:none;"></input>'
      if (deck.clicks == undefined) {
        deck.clicks = 0;
      };
    })
    html += '</div>';

    function click_deck(event) {
      deck_name = event.target.name;
      trial.decks.forEach(function(deck) {
        if (deck.name == deck_name) {
          selected_deck.push(deck.name);
          total_penalty += deck.cards[deck.clicks % deck.cards.length];
          net_gain += deck.win_by_card + deck.cards[deck.clicks % deck.cards.length];
          document.getElementById('won').innerHTML = "Tu ganaste: " + deck.win_by_card;
          document.getElementById('lost').innerHTML = "Tu perdiste: " + deck.cards[deck.clicks % deck.cards.length];
          document.getElementById('total_penalty').innerHTML = "Ganancia/Perdida neta: " + (deck.win_by_card + deck.cards[deck.clicks % deck.cards.length]);
          document.getElementById('total').innerHTML = "Total: " + (trial.starting_cash + net_gain);
          if ((deck.win_by_card + deck.cards[deck.clicks % deck.cards.length]) >= 0) {
            document.getElementById('text').style.color = "blue";
          } else {
            document.getElementById('text').style.color = "red";
          }
          document.getElementById('progress').value = trial.starting_cash + net_gain;
          deck.clicks += 1;
          total_clicks += 1;
        }
      })

      if (total_clicks >= trial.max_clicks) {
        endtrial();
      }
    }
    html += '<progress id="progress" max="' + trial.max_cash + '" value="' + trial.starting_cash + '"></progress>'
    html += '<div id="text">'
    html += '<p id="won" >Tu ganaste: ' + trial.previusly_won + '</p>';
    html += '<p id="lost" >Tu perdiste : ' + trial.previusly_lost + '</p>';
    html += '<p id="total_penalty" >Ganancia Neta: ' + (trial.previusly_won + trial.previusly_lost) + '</p>';
    html += '<p id="total" >Total: ' + trial.starting_cash + '</p>';
    html += '</div>'
    display_element.innerHTML = html;

document.getElementById('progress').style.width = document.getElementById(trial.decks[0].name).offsetWidth * trial.decks.length + "px";
    window.setTimeout(function() {
      document.getElementById('progress').style.width = document.getElementById(trial.decks[0].name).offsetWidth * trial.decks.length + "px";
    }, 10);
    window.setTimeout(function() {
      document.getElementById('progress').style.width = document.getElementById(trial.decks[0].name).offsetWidth * trial.decks.length + "px";
    }, 100);
    window.setTimeout(function() {
      document.getElementById('progress').style.width = document.getElementById(trial.decks[0].name).offsetWidth * trial.decks.length + "px";
    }, 1000);
    window.onresize = function() {
      document.getElementById('progress').style.width = document.getElementById(trial.decks[0].name).offsetWidth * trial.decks.length + "px";
    }

    if (trial.previusly_won + trial.previusly_lost > 0) {
      document.getElementById('text').style.color = "blue";
    } else if (trial.previusly_won + trial.previusly_lost < 0) {
      document.getElementById('text').style.color = "red";
    }

    trial.decks.forEach(function(deck) {
      document.getElementById(deck.name).addEventListener('click', click_deck);
    })

    function endtrial() {
      // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // save data
      var trialdata = {
        selected_deck: selected_deck,
        final_cash: trial.starting_cash + net_gain,
        won: net_gain - total_penalty,
        lost: total_penalty,
        rt: response_time,
      };

      display_element.innerHTML = '';

      // next trial
      jsPsych.finishTrial(trialdata);
    };

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
