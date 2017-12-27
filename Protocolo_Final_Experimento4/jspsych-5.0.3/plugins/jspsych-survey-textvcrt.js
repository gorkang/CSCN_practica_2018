/**
 * jspsych-survey-textvcrt
 * a jspsych plugin for free response survey questions
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */


jsPsych.plugins['survey-textvcrt'] = (function() {

  var plugin = {};

  plugin.trial = function(display_element, trial) {

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

    // show preamble text
    display_element.append($('<div>', {
      "id": 'jspsych-survey-textvcrt-preamble',
      "class": 'jspsych-survey-textvcrt-preamble'
    }));

    $('#jspsych-survey-textvcrt-preamble').html(trial.preamble);

    // add questions
    for (var i = 0; i < trial.questions.length; i++) {
      // create div
      display_element.append($('<div>', {
        "id": 'jspsych-survey-textvcrt-' + i,
        "class": 'jspsych-survey-textvcrt-question'
      }));

      // add question text
      $("#jspsych-survey-textvcrt-" + i).append('<p class="jspsych-survey-textvcrt">' + trial.questions[i] + '</p>');

      // add text box
      $("#jspsych-survey-textvcrt-" + i).append('<textarea onkeypress="advance_vcrt(event)" name="#jspsych-survey-textvcrt-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '"></textarea>');
      $("#jspsych-survey-textvcrt-" + i +" textarea").focus();
    }

    // add submit button
    display_element.append($('<button>', {
      'id': 'jspsych-survey-textvcrt-next',
      'class': 'jspsych-btn jspsych-survey-textvcrt'
    }));
    $("#jspsych-survey-textvcrt-next").html('Guardar Respuestas');
    $("#jspsych-survey-textvcrt-next").click(function() {
      // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // create object to hold responses
      var question_data = {};
      $("div.jspsych-survey-textvcrt-question").each(function(index) {
        var id = "Q" + index;
        var val = $(this).children('textarea').val();
        var obje = {};
        obje[id] = val;
        $.extend(question_data, obje);
      });

      // save data
      var trialdata = {
        "rt": response_time,
        "responses": JSON.stringify(question_data)
      };

      display_element.html('');

      // next trial
      jsPsych.finishTrial(trialdata);
    });

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
