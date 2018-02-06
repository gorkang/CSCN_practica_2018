/**
 * jspsych-bret
 * a jspsych plugin for The Bomb Risk Elicitation Task by Paolo Crosetto and Antonio Fillipin.
 *
 * Implemented in jsPsych by Alejandro Cofre Garcia.
 *
 */
jsPsych.plugins['bret'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'bret',
    description: '',
    parameters: {
      dimensions: {
        type: jsPsych.plugins.parameterType.COMPLEX,
        array: false,
        pretty_name: 'Dimensions',
        default: {
          x: 10,
          y: 10
        },
        nested: {
          x: {
            type: jsPsych.plugins.parameterType.INTEGER,
            pretty_name: 'X',
            default: 10,
            description: 'Width of the table.'
          },
          y: {
            type: jsPsych.plugins.parameterType.INTEGER,
            pretty_name: 'Y',
            array: true,
            default: 10,
            description: 'Height of the table.'
          }
        }
      },
      bombs_position: {
        type: jsPsych.plugins.parameterType.COMPLEX,
        array: true,
        pretty_name: 'Bombs positions will be random if blank',
        default: [],
        nested: {
          x: {
            type: jsPsych.plugins.parameterType.INTEGER,
            pretty_name: 'X',
            default: undefined,
            description: 'X position of a bomb.'
          },
          y: {
            type: jsPsych.plugins.parameterType.INTEGER,
            pretty_name: 'Y',
            array: true,
            default: undefined,
            description: 'Y position of a bomb.'
          }
        }
      },
      starting_credit: {
        type: jsPsych.plugins.parameterType.INTEGER,
        pretty_name: 'Starting credit',
        default: 0,
        description: 'Ammount of money the subject start with.'
      },
      playing_cost: {
        type: jsPsych.plugins.parameterType.INTEGER,
        pretty_name: 'Playing cost',
        default: 0,
        description: 'Cost of starting the game.'
      },
      winnings_by_box: {
        type: jsPsych.plugins.parameterType.FLOAT,
        pretty_name: 'Winnings by box',
        default: 0.1,
        description: 'Ammount of credits won for opening a box.'
      },
      auto_advance_time: {
        type: jsPsych.plugins.parameterType.INTEGER,
        pretty_name: 'Auto advance time',
        default: 0,
        description: 'Time before a box is opened automatically, 0 means never.'
      },
      allow_clicking: {
        type: jsPsych.plugins.parameterType.BOOLEAN,
        pretty_name: 'Allow clicking',
        default: true,
        description: 'Wether or not the boxes can be open manually.'
      },
      reveal_bombs: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Reveal bombs',
        default: 'at_end',
        description: 'When to reveal that a bomb has been clicked, it can be either at_end or at_click.'
      },
      credit_name: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Credit name',
        default: 'Euros',
        description: 'The name of the currency.'
      },
      box_name: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Box name',
        default: 'Boxes',
        description: 'The name of the boxes.'
      },
      button_start: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button start',
        default: 'Start',
        description: 'The text in the button to start if in auto mode.'
      },
      button_stop: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button stop',
        default: 'Stop',
        description: 'The text in the button to stop if in auto mode.'
      },
      button_finish: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button finish',
        default: 'Finish',
        description: 'The text in the button to end the trial'
      },
      button_solve: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button solve',
        default: 'Solve',
        description: 'The text in the button to solve the trial'
      }
    }
  }

  plugin.trial = function(display_element, trial) {
    function update_score() {
      var trial = jsPsych.currentTrial();
      document.getElementById('trial_score').innerHTML = trial.data.score.toFixed(2);
      document.getElementById('trial_picked').innerHTML = parseInt(document.getElementById('trial_picked').innerHTML) + 1;
      document.getElementById('trial_remaining').innerHTML = parseInt(document.getElementById('trial_remaining').innerHTML) - 1;
      trial.data.clicked_boxes = parseInt(document.getElementById('trial_picked').innerHTML);
    }

    function lose() {
      var trial = jsPsych.currentTrial();
      trial.data.score = 0;
      clearTimeout(timeout);
    }

    function win() {
      var trial = jsPsych.currentTrial();
      trial.data.score += trial.winnings_by_box;
    }

    function open_box(event) {
      var trial = jsPsych.currentTrial();
      var is_bomb = false;
      trial.bombs_position.forEach(function(bomb) {
        if ((trial.dimensions.x * bomb.y + bomb.x) == parseInt(event.target.id) && trial.reveal_bombs == "at_click") {
          event.target.outerHTML = "<input type='image' class='jspsych-btn' id=" + event.target.id + " src='jsPsych-6/plugins/images/bomb.svg' width='32' height='32' style='border: 1px solid black; background-color: salmon' disabled>";
          lose();
        } else {
          event.target.outerHTML = "<input type='image' class='jspsych-btn' id=" + event.target.id + " src='jsPsych-6/plugins/images/money.svg' width='32' height='32' style='border: 1px solid black; background-color: lightgreen' disabled>";
          win();
        }
        update_score();
      })
    }

    function advance_trial() {
      var trial = jsPsych.currentTrial();
      trial.data.lastPickedBox += 1;
      if (trial.data.lastPickedBox < trial.dimensions.x * trial.dimensions.y) {
        document.getElementById(trial.data.lastPickedBox).click();
        timeout = setTimeout(advance_trial, trial.auto_advance_time * 1000);
      }
    }

    function start_timer(event) {
      event.target.disabled = true;
      var trial = jsPsych.currentTrial();
      trial.data.lastPickedBox = -1;
      timeout = setTimeout(advance_trial, trial.auto_advance_time * 1000)

    }

    function end_timer(event) {
      event.target.disabled = true;
      clearTimeout(timeout);
    }

    function finish_trial(event) {
      event.target.disabled = true;
      document.getElementById("end").hidden = false;
      var trial = jsPsych.currentTrial();
      var is_bomb = false;
      trial.bombs_position.forEach(function(bomb) {
        bomb_input = document.getElementById(trial.dimensions.x * bomb.y + bomb.x);
        if (bomb_input.disabled && trial.reveal_bombs == "at_end") {
          bomb_input.outerHTML = "<input type='image' class='jspsych-btn' src='jsPsych-6/plugins/images/bomb.svg' width='32' height='32' style='border: 1px solid black; background-color: salmon' disabled>";
          lose();
        }
        update_score();
      })
    }

    trial.data.score = trial.starting_credit;
    if (trial.bombs_position.length == 0) {
      trial.bombs_position = [{
        x: Math.floor(Math.random() * trial.dimensions.x),
        y: Math.floor(Math.random() * trial.dimensions.y)
      }]
    }
    var html = '';
    html += "<table style='margin: auto'><tbody><td><table style='margin: auto'><tbody>";
    for (var i = 0; i < trial.dimensions.y; i++) {
      html += "<tr>";
      for (var j = 0; j < trial.dimensions.x; j++) {
        if (trial.allow_clicking) {
          html += "<td><input type='image' class='jspsych-btn' id=" + (trial.dimensions.x * i + j) + " src='jsPsych-6/plugins/images/empty.svg' width='32' height='32' style='border:1px solid black'></td>";
        } else {
          html += "<td><input type='image' class='jspsych-btn' id=" + (trial.dimensions.x * i + j) + " src='jsPsych-6/plugins/images/empty.svg' width='32' height='32' style='border:1px solid black' disabled></td>";
        }
      }
    }
    html += "</tbody></table></td>"
    html += "<td><table style='margin: auto'><tbody>"
    html += "<tr><td style='white-space:nowrap'>" + trial.credit_name + ":</td><td id='trial_score' style='text-align: right;'>" + trial.starting_credit + "</td></tr>";
    html += "<tr><td style='white-space:nowrap'>Picked " + trial.box_name + ":</td><td id='trial_picked' style='text-align: right;'>0</td></tr>";
    html += "<tr><td style='white-space:nowrap'>Remaining " + trial.box_name + ":</td><td id='trial_remaining' style='text-align: right;'>" + trial.dimensions.x * trial.dimensions.y + "</td></tr>"
    if (trial.auto_advance_time != 0) {
      html += "<tr><td><button style='background-color:green' id='start'>" + trial.button_start + "</button></td></tr>"
      html += "<tr><td><button style='background-color:red' id='stop'>" + trial.button_stop + "</button></td></tr>"
    }
    html += "<tr><td><button style='background-color:blue' id='finish'>" + trial.button_solve + "</button></td></tr>"
    html += "<tr><td><button id='end' style='background-color:white' hidden>" + trial.button_finish + "</button></td></tr>";
    html += "</tbody></table></td></tbody></table>";

    display_element.innerHTML = html;

    document.getElementById("start").addEventListener('click', start_timer);
    document.getElementById("stop").addEventListener('click', end_timer);
    document.getElementById("finish").addEventListener('click', end_timer);
    document.getElementById("finish").addEventListener('click', finish_trial);
    document.getElementById("end").addEventListener('click', endtrial);
    for (var i = 0; i < trial.dimensions.y; i++) {
      for (var j = 0; j < trial.dimensions.x; j++) {
        document.getElementById(trial.dimensions.x * i + j).addEventListener('click', open_box)
      }
    }

    function endtrial() {
      // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // save data
      var trialdata = {
        "rt": response_time,
      };

      display_element.innerHTML = '';

      // next trial
      jsPsych.finishTrial(trialdata);
    };

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
