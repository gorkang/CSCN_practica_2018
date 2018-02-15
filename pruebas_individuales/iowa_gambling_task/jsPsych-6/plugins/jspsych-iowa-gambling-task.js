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
    trial.decks.forEach(function(deck){
      html += '<input type="image" id="' + deck.name + '" class="jspsych-btn" name="' + deck.name + '" src="blue-back.png" style="width:25%;border:none;"></input>'
      deck.clicks = 0;
    })
    html += '</div>';

    function click_deck(event){
      deck_name = event.target.name;
      trial.decks.forEach(function(deck){
        if(deck.name == deck_name){
          selected_deck.push(deck.name);
          total_penalty += deck.cards[deck.clicks % deck.cards.length];
          net_gain += deck.win_by_card + deck.cards[deck.clicks % deck.cards.length];
          document.getElementById('total_penalty').innerHTML = "Penalty acumulado: " + total_penalty;
          document.getElementById('net_gain').innerHTML = "Ganancia neta: " + net_gain;
          document.getElementById('progress').value = trial.starting_cash + net_gain;
          deck.clicks += 1;
          total_clicks += 1;
        }
      })
      if(total_clicks > trial.max_clicks){
        // data saving
        var trial_data = {
          selected_deck: selected_deck,
          final_cash: trial.starting_cash + net_gain
        };
        // next trial
        jsPsych.finishTrial(trial_data);
      }
    }

    html += '<progress id="progress" max="' + trial.max_cash + '" value="' + trial.starting_cash + '"></progress>'
    html += '<div id="total_penalty" >Penalty acumulado: 0</div>';
    html += '<div id="net_gain" >Ganancia neta: 0</div>';
    display_element.innerHTML = html;

    trial.decks.forEach(function(deck){
      document.getElementById(deck.name).addEventListener('click', click_deck);
    })
  };

  return plugin;
})();
