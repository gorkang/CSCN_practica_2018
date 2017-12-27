/**
 * jspsych-survey-texthafinal
 * a jspsych plugin for free response survey questions
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */


jsPsych.plugins['survey-texthafinal'] = (function() {

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
      "id": 'jspsych-survey-texthafinal-preamble',
      "class": 'jspsych-survey-texthafinal-preamble'
    }));

    $('#jspsych-survey-texthafinal-preamble').html(trial.preamble);

    // add questions
    for (var i = 0; i < trial.questions.length; i++) {
      // create div
      display_element.append($('<div>', {
        "id": 'jspsych-survey-texthafinal-' + i,
        "class": 'jspsych-survey-texthafinal-question'
      }));

      // add question text
      $("#jspsych-survey-texthafinal-" + i).append('<p class="jspsych-survey-texthafinal">' + trial.questions[i] + '</p>');

      // add text box
      //$("#jspsych-survey-texthafinal-" + i).append('<center><textarea class="mrmargintb" name="#jspsych-survey-texthafinal-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '"></textarea></center>');
      //$("#jspsych-survey-texthafinal-" + i).append('<textarea onfocus="advance_ha(event)" class="mrmargintb" name="#jspsych-survey-texthafinal-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '"></textarea>');
      $("#jspsych-survey-texthafinal-" + i).append('<textarea onkeypress="advance_ha(event)" class="mrmargintb" name="#jspsych-survey-texthafinal-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '"></textarea>');
      $("#jspsych-survey-texthafinal-" + i +" textarea").focus();
    }

    // add submit button
    display_element.append($('<button>', {
      'id': 'jspsych-survey-texthafinal-next',
      //'class': 'jspsych-btn jspsych-survey-texthafinal'
      'class': 'mrmarginbttn'
    }));
    $("#jspsych-survey-texthafinal-next").html('Guardar Respuestas');
    $("#jspsych-survey-texthafinal-next").click(function() {
      var validation;
      // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // create object to hold responses
      var question_data = {};
      $("div.jspsych-survey-texthafinal-question").each(function(index) {
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
      
      $.isNumeric();
      if ($.isNumeric(validation) === true) {
      //if ((validation >= 12 && validation <= 14) || (validation >= 21 && validation <= 24) || (validation >= 31 && validation <= 34) || (validation >= 41 && validation <= 43) &&  validation != 22 && validation != 33 ) {
            console.log("bien",validation);
            display_element.html('');  
            jsPsych.finishTrial(trialdata);
        }else{
            sweetAlert({title: "Por favor ingresa un n\&uacute;mero v\&aacute;lido", html: true});
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
