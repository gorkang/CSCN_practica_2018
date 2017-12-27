/**
 * jspsych-survey-likert-eyes
 * a jspsych plugin for measuring items on a likert scale
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */

jsPsych.plugins['survey-likert-eyes'] = (function() {

  var plugin = {};

  plugin.trial = function(display_element, trial) {

    // default parameters for the trial
    trial.preamble = typeof trial.preamble === 'undefined' ? "" : trial.preamble;

    // if any trial variables are functions
    // this evaluates the function and replaces
    // it with the output of the function
    trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);

    // show preamble text
    display_element.append($('<div>', {
      "id": 'jspsych-survey-likert-eyes-preamble',
      "class": 'jspsych-survey-likert-eyes-preamble'
    }));

    $('#jspsych-survey-likert-eyes-preamble').html(trial.preamble);

    display_element.append('<form id="jspsych-survey-likert-eyes-form">');
    // add likert scale questions
    for (var i = 0; i < trial.questions.length; i++) {
      form_element = $('#jspsych-survey-likert-eyes-form');
      // add question
      form_element.append('<label class="jspsych-survey-likert-eyes-statement">' + trial.questions[i] + '</label>');
      // add options
      var width = 100 / trial.labels[i].length;
      options_string = '<ul class="jspsych-survey-likert-eyes-opts" data-radio-group="Q' + i + '">';
      for (var j = 0; j < trial.labels[i].length; j++) {
        options_string += '<li class="eye_op'+j+'" style="width:' + width + '%" ><input id="op' + j +'" type="radio" name="Q' + i + '" value="' + j + '" onclick="lk_advance_eyes()"><label class="jspsych-survey-likert-eyes-opt-label">' + trial.labels[i][j] + '</label></li>';
        //options_string += '<li class="eye_op'+j+'" style="width:' + width + '%"><input id="op' + j +'" onclick="lk_advance_eyes()" type="radio" name="Q' + i + '" value="' + j + '"><label class="jspsych-survey-likert-eyes-opt-label">' + trial.labels[i][j] + '</label></li>';
      }
      
      options_string += '</ul>';
      form_element.append(options_string);
    }
    
    

    // add submit button
    display_element.append($('<button>', {
      'id': 'jspsych-survey-likert-eyes-next',
      'class': 'jspsych-survey-likert-eyes likertbutton'
      //'class': 'jspsych-survey-likert-eyes jspsych-btn'
    }));
    $("#jspsych-survey-likert-eyes-next").html('Submit Answers');
    $("#jspsych-survey-likert-eyes-next").click(function() {
      // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // create object to hold responses
      var question_data = {};
      $("#jspsych-survey-likert-eyes-form .jspsych-survey-likert-eyes-opts").each(function(index) {
        var id = $(this).data('radio-group');
        var response = $('input[name="' + id + '"]:checked').val();
        if (typeof response == 'undefined') {
          response = -1;
        }
        var obje = {};
        obje[id] = response;
        $.extend(question_data, obje);
      });

      // save data
      var trial_data = {
        "rt": response_time,
        "responses": JSON.stringify(question_data)
      };

      display_element.html('');

      // next trial
      jsPsych.finishTrial(trial_data);
    });

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
