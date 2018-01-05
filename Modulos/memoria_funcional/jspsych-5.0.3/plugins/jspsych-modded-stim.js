/**
 * jspsych-modded-stim
 * a jspsych plugin for free response survey questions
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */

var focused_box
jsPsych.plugins['modded-stim'] = (function() {

  var plugin = {};

  plugin.trial = function(display_element, trial) {
    
    /* ****************************** PLUGIN INCRUSTADO *************************************************** */
    
    // set default values for the parameters
    trial.choices = trial.choices || [];
    trial.response_ends_trial = (typeof trial.response_ends_trial == 'undefined') ? true : trial.response_ends_trial;
    trial.timing_stim = trial.timing_stim || -1;
    trial.timing_response = trial.timing_response || -1;
    trial.is_html = (typeof trial.is_html == 'undefined') ? false : trial.is_html;
    trial.prompt = trial.prompt || "";

    // this array holds handlers from setTimeout calls
    // that need to be cleared if the trial ends early
    var setTimeoutHandlers = [];

    // display stimulus
    if (!trial.is_html) {
      display_element.append($('<img>', {
        src: trial.stimulus,
        id: 'jspsych-single-stim-stimulus'
      }));
    } else {
      display_element.append($('<div>', {
        html: trial.stimulus,
        id: 'jspsych-single-stim-stimulus'
      }));
    }

    //show prompt if there is one
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

      // kill keyboard listeners
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }

      // gather the data to store for the trial
      var trial_data = {
        "rt": response.rt,
        "stimulus": trial.stimulus,
        "key_press": response.key
      };

      //jsPsych.data.write(trial_data);

      // clear the display
      display_element.html('');

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // function to handle responses by the subject
    var after_response = function(info) {

      // after a valid response, the stimulus will have the CSS class 'responded'
      // which can be used to provide visual feedback that a response was recorded
      $("#jspsych-single-stim-stimulus").addClass('responded');

      // only record the first response
      if (response.key == -1) {
        response = info;
      }

      if (trial.response_ends_trial) {
        end_trial();
      }
    };

    // start the response listener
    if (JSON.stringify(trial.choices) != JSON.stringify(["none"])) {
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: 'date',
        persist: false,
        allow_held_key: false
      });
    }

    // hide image if timing is set
    if (trial.timing_stim > 0) {
      var t1 = setTimeout(function() {
        $('#jspsych-single-stim-stimulus').css('visibility', 'hidden');
      }, trial.timing_stim);
      setTimeoutHandlers.push(t1);
    }

    // end trial if time limit is set
    if (trial.timing_response > 0) {
      var t2 = setTimeout(function() {
        end_trial();
      }, trial.timing_response);
      setTimeoutHandlers.push(t2);
    }

  };
    
    /* ****************************** FIN PLUGIN INCRUSTADO *************************************************** */
    
    trial.preamble = typeof trial.preamble == 'undefined' ? "" : trial.preamble;
    if (typeof trial.rows == 'undefined') {
      trial.rows = [];
      for (var i = 0; i < trial.questions.length; i++) {
        trial.rows.push(1);
      }
    }
    if (typeof trial.columns == 'undefined') {
      trial.columns = [];
      for (var i = 0; i < trial.questions.length; i++) {
        trial.columns.push(40);
      }
    }

    // if any trial variables are functions
    // this evaluates the function and replaces
    // it with the output of the function
    trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);
    
    //***************************************************************modificacion*********************************************************
    display_element.append($('<br /><p><br />'));
    //***************************************************************modificacion*********************************************************
    
    // show preamble text
    display_element.append($('<div>', {
      "id": 'jspsych-modded-stim-preamble',
      "class": 'jspsych-modded-stim-preamble'
    }));

    $('#jspsych-modded-stim-preamble').html(trial.preamble);

    // add questions
    for (var i = 0; i < trial.questions.length; i++) {
      // create div
      display_element.append($('<div>', {
        "id": 'jspsych-modded-stim-' + i,
        "class": 'jspsych-modded-stim-question'
      }));

      // add question text
      $("#jspsych-modded-stim-" + i).append('<p class="jspsych-modded-stim">' + trial.questions[i] + '</p>');

      // add text box
      //$("#jspsych-modded-stim-" + i).append('<textarea name="#jspsych-modded-stim-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '"></textarea>'); //original
      focused_box = $("#jspsych-modded-stim-" + i).append('<textarea name="#jspsych-modded-stim-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '"></textarea>');
      
    }
    //***************************************************************modificacion*********************************************************
    display_element.append($('<p>'));
    //***************************************************************modificacion*********************************************************
    // add submit button
    
    display_element.append($('<button>', {
      'id': 'jspsych-modded-stim-next',
      'class': 'jspsych-btn jspsych-modded-stim'
    }));
    $("#jspsych-modded-stim-next").html('Guardar Respuestas');
    //***************************************************************modificacion*********************************************************
    display_element.append($('<br /><p><br />'));
    //***************************************************************modificacion*********************************************************
    $("#jspsych-modded-stim-next").click(function() {
        // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // create object to hold responses
      var question_data = {};
      
      var obje;
      $("div.jspsych-modded-stim-question").each(function(index) {
        var id = "Q" + index;
        var val = $(this).children('textarea').val();
        console.log('val is:   '+val);
        var obje = {};
        obje[id] = val;
        console.log('obje is:   '+val);
        $.extend(question_data, obje);
      });
      var trialdata = {
        "rt": response_time,
        "responses": JSON.stringify(question_data)
      };

      display_element.html('');

      //console.log(question_data);
      // next trial
      jsPsych.finishTrial(trialdata);     
    });   

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
