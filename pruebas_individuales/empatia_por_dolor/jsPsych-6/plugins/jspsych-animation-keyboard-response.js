/**
 * jspsych-animation-keyboard-response
 * Josh de Leeuw
 *
 * plugin for displaying a stimulus and getting a keyboard response
 *
 * documentation: docs.jspsych.org
 *
 *  Modified to display animations.
 *
 **/


jsPsych.plugins["animation-keyboard-response"] = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('animation-keyboard-response', 'stimulus', 'image');

  plugin.info = {
    name: 'animation-keyboard-response',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.IMAGE,
        pretty_name: 'Stimulus',
        array: true,
        default: undefined,
        description: 'The images to be displayed'
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Choices',
        default: jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed below the stimulus.'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        array: true,
        default: null,
        description: 'How long to hide the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show trial before it ends.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, trial will end when subject makes a response.'
      },
    }
  }

  plugin.trial = function(display_element, trial) {

    new_html = '';

    image_index = 0;
    new_html += "<p style='position:absolute;top:auto;left:20%;width: 60%;'>"
    trial.stimulus.forEach(function(image) {
      new_html += '<img src="' + image + '" id="jspsych-animation-keyboard-response-stimulus-' + image_index + '" style="position:absolute;z-index:' + (trial.stimulus.length - image_index) + '"></img>';
      image_index += 1;
    })
    new_html += "</p>"

    // add prompt
    if (trial.prompt !== null) {
      new_html += trial.prompt;
    }

    // draw
    display_element.innerHTML = new_html;

    document.getElementById("jspsych-animation-keyboard-response-stimulus-0").hidden = false;

    image_index = 0;
    trial.stimulus.forEach(function(stimulus_image) {
      image = document.getElementById("jspsych-animation-keyboard-response-stimulus-" + image_index);
      image.onload = function(event) {
        event.target.style.top = Math.floor(-(event.target.parentElement.offsetWidth / event.target.width * event.target.height / 2)) + "px";
      }
      image_index += 1;
    })
    // store response
    var response = {
      rt: null,
      key: null
    };

    // function to end trial when it is time
    var end_trial = function() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // kill keyboard listeners
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }

      // gather the data to store for the trial
      var trial_data = {
        "rt": response.rt,
        "key_press": response.key,
        stimulus: trial.stimulus[2]
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // function to handle responses by the subject
    var after_response = function(info) {

      if (trial.response_ends_trial) {
        end_trial();
      }
    };

    // start the response listener
    var start_response_listener = function() {
      if (trial.choices != jsPsych.NO_KEYS) {
        var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
          callback_function: after_response,
          valid_responses: trial.choices,
          rt_method: 'date',
          persist: false,
          allow_held_key: false
        });
      }
    }


    var current_image = 0;
    jsPsych.pluginAPI.preloadImages(trial.stimulus, function() {
      // hide stimulus if stimulus_duration is set
      if (trial.stimulus_duration !== null) {
        var acumulated_duration = 0;
        trial.stimulus_duration.forEach(function(duration) {
          jsPsych.pluginAPI.setTimeout(function() {
            document.getElementById("jspsych-animation-keyboard-response-stimulus-" + current_image).hidden = true;
            if (current_image + 1 == trial.stimulus_duration.length) {
              start_response_listener();
            }
            current_image += 1;
          }, duration + acumulated_duration);
          acumulated_duration = duration;
        })
      }
    })

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

  };

  return plugin;
})();
