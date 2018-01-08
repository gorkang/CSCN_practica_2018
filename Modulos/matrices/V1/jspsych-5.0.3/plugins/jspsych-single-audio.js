/**
 * jspsych-single-audio
 * Josh de Leeuw
 *
 * plugin for playing an audio file and getting a keyboard response
 *
 * documentation: docs.jspsych.org
 *
 **/

jsPsych.plugins["single-audio"] = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('single-audio', 'stimulus', 'audio');
/*
  plugin.info = {
    name: 'single-audio',
    description: '',
    parameters: {
      stimulus: {
        type: [jsPsych.plugins.parameterType.STRING],
        default: undefined,
        no_function: false,
        description: ''
      },
      choices: {
        type: [jsPsych.plugins.parameterType.KEYCODE],
        array: true,
        default: [],
        no_function: false,
        description: ''
      },
      prompt: {
        type: [jsPsych.plugins.parameterType.STRING],
        default: '',
        no_function: false,
        description: ''
      },
      timing_response: {
        type: [jsPsych.plugins.parameterType.INT],
        default: -1,
        no_function: false,
        description: ''
      },
      response_ends_trial: {
        type: [jsPsych.plugins.parameterType.BOOL],
        default: true,
        no_function: false,
        description: ''
      },
      trial_ends_after_audio: {
        type: [jsPsych.plugins.parameterType.BOOL],
        default: false,
        no_function: false,
        description: ''
      },
    }
  };
*/
  plugin.trial = function(display_element, trial) {

    // default parameters
    trial.choices = trial.choices || [];
    trial.response_ends_trial = (typeof trial.response_ends_trial === 'undefined') ? true : trial.response_ends_trial;
    trial.trial_ends_after_audio = (typeof trial.trial_ends_after_audio === 'undefined') ? false : trial.trial_ends_after_audio;
    trial.timing_response = trial.timing_response || -1; // if -1, then wait for response forever
    trial.prompt = (typeof trial.prompt === 'undefined') ? "" : trial.prompt;

    // if any trial variables are functions
    // this evaluates the function and replaces
    // it with the output of the function
    trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);

    // this array holds handlers from setTimeout calls
    // that need to be cleared if the trial ends early
    var setTimeoutHandlers = [];

    // play stimulus
    var context = jsPsych.pluginAPI.audioContext();
    var source = context.createBufferSource();
    source.buffer = jsPsych.pluginAPI.getAudioBuffer(trial.stimulus);
    source.connect(context.destination);
    startTime = context.currentTime + 0.1;
    source.start(startTime);

    // set up end event if trial needs it
    if(trial.trial_ends_after_audio){
      source.onended = function() {
        end_trial();
      };
    }

    // show prompt if there is one
    if (trial.prompt !== "") {
      display_element.append(trial.prompt);
    }

    // store response
    var response = {
      rt: -1,
      key: -1
    };

    // function to end trial when it is time
    var end_trial = function() {

      // kill any remaining setTimeout handlers
      for (var i = 0; i < setTimeoutHandlers.length; i++) {
        clearTimeout(setTimeoutHandlers[i]);
      }

      // stop the audio file if it is playing
      source.stop();

      // kill keyboard listeners
      jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);

      // gather the data to store for the trial
      var trial_data = {
        "rt": response.rt * 1000,
        "stimulus": trial.stimulus,
        "key_press": response.key
      };

      // clear the display
      display_element.html('');

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // function to handle responses by the subject
    var after_response = function(info) {

      // only record the first response
      if (response.key == -1) {
        response = info;
      }

      if (trial.response_ends_trial) {
        end_trial();
      }
    };

    // start the response listener
    var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
      callback_function: after_response,
      //valid_responses: trial.choices,
      rt_method: 'audio',
      persist: false,
      allow_held_key: false,
      audio_context: context,
      audio_context_start_time: startTime
    });
    // end trial if time limit is set
    if (trial.timing_response > 0) {
      var t2 = setTimeout(function() {
        end_trial();
      }, trial.timing_response);
      setTimeoutHandlers.push(t2);
    }

  };

  return plugin;
})();