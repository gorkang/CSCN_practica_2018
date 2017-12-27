/**
 * jspsych-survey-textmrfinal
 * a jspsych plugin for free response survey questions
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */


jsPsych.plugins['survey-textmrfinal'] = (function() {

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
      "id": 'jspsych-survey-textmrfinal-preamble',
      "class": 'jspsych-survey-textmrfinal-preamble'
    }));

    $('#jspsych-survey-textmrfinal-preamble').html(trial.preamble);

    // add questions
    for (var i = 0; i < trial.questions.length; i++) {
      // create div
      display_element.append($('<div>', {
        "id": 'jspsych-survey-textmrfinal-' + i,
        "class": 'jspsych-survey-textmrfinal-question'
      }));

      // add question text
      $("#jspsych-survey-textmrfinal-" + i).append('<p class="jspsych-survey-textmrfinal">' + trial.questions[i] + '</p>');

      // add text box
      //$("#jspsych-survey-textmrfinal-" + i).append('<center><textarea class="mrmargintb" name="#jspsych-survey-textmrfinal-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '"></textarea></center>');
      //$("#jspsych-survey-textmrfinal-" + i).append('<textarea class="mrmargintb" name="#jspsych-survey-textmrfinal-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '"></textarea>');
      //$("#jspsych-survey-textmrfinal-" + i).append('<textarea class="mrmargintb" name="#jspsych-survey-textmrfinal-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '" maxlength="2"></textarea>');
      $("#jspsych-survey-textmrfinal-" + i).append('<textarea onkeypress="advance_mr(event)" class="mrmargintb" name="#jspsych-survey-textmrfinal-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '" maxlength="2"></textarea>');
      $("#jspsych-survey-textmrfinal-" + i +" textarea").focus();
    }

    // add submit button
    display_element.append($('<button>', {
      'id': 'jspsych-survey-textmrfinal-next',
      //'class': 'jspsych-btn jspsych-survey-textmrfinal'
      'class': 'mrmarginbttn'
    }));
    $("#jspsych-survey-textmrfinal-next").html('Guardar Respuestas');
    $("#jspsych-survey-textmrfinal-next").click(function() {
      var validation;
      // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // create object to hold responses
      var question_data = {};
      $("div.jspsych-survey-textmrfinal-question").each(function(index) {
        var id = "Q" + index;
        var val = $(this).children('textarea').val();
        console.log("val is: ",val);
        var obje = {};
        obje[id] = val;
        $.extend(question_data, obje);
        
        validation = val;
      });

      // save data
      var trialdata = {
        "rt": response_time,
        "responses": JSON.stringify(question_data)
      };
      
      //$.isNumeric();
      //if (validation >= 12 && validation <= 43 && validation != 22 && validation != 33 ) {
        if ((validation >= 12 && validation <= 14 &&  validation != 22 && validation != 33) || (validation >= 21 && validation <= 24 &&  validation != 22 && validation != 33) || (validation >= 31 && validation <= 34 &&  validation != 22 && validation != 33) || (validation >= 41 && validation <= 43 &&  validation != 22 && validation != 33) ) {
            console.log("bien",validation);
            display_element.html('');  
            jsPsych.finishTrial(trialdata);
        }else{
            sweetAlert({title: "Por favor ingresa dos n\&uacute;meros v\&aacute;lidos", html: true});
            console.log("mal",validation);
            event.stopPropagation();
           if (event.stopPropagation) {
            event.stopPropagation();
            } else{
              event.cancelBubble = true;
            } 
        }

      //display_element.html('');

      // next trial
      //jsPsych.finishTrial(trialdata);
    });

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
