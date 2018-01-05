/**
 * jspsych-survey-tbv
 * a jspsych plugin for free response survey questions
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */

function isNumeric(n) {
  alert(n);
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var focused_box
jsPsych.plugins['survey-tbv'] = (function() {

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
    
    //***************************************************************modificacion*********************************************************
    display_element.append($('<br /><p><br />'));
    //***************************************************************modificacion*********************************************************
    
    // show preamble text
    display_element.append($('<div>', {
      "id": 'jspsych-survey-tbv-preamble',
      "class": 'jspsych-survey-tbv-preamble'
    }));

    $('#jspsych-survey-tbv-preamble').html(trial.preamble);

    // add questions
    //for (var i = 0; i < trial.questions.length; i++) {
      // create div
      /*
      display_element.append($('<div>', {
        "id": 'jspsych-survey-tbv-' + i,
        "class": 'jspsych-survey-tbv-question'
      }));
      
      
      // add question text
      $("#jspsych-survey-tbv-" + i).append('<p class="jspsych-survey-tbv">' + trial.questions[i] + '</p>');

      // add text box
      //$("#jspsych-survey-tbv-" + i).append('<textarea name="#jspsych-survey-tbv-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '"></textarea>'); //original
      focused_box = $("#jspsych-survey-tbv-" + i).append('<textarea name="#jspsych-survey-tbv-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '"></textarea>');
      */
    //}
    
    /* INICIO MODIFICACIONES EXTRA */
    //v1
    /*
    display_element.append('<textarea class="bayes1" name="#jspsych-survey-tbv-response-0"></textarea>');
    display_element.append('<p class="bayes2">' + "de cada" + '</p>');
    display_element.append('<textarea class="bayes3" name="#jspsych-survey-tbv-response-2"></textarea>');
    */
    //v2
    display_element.append('<div class="bayesdiv1"><textarea name="#jspsych-survey-tbv-response-0"></textarea></div>');
    display_element.append('<div class="bayesdiv2"><p>' + "de cada" + '</p></div>');
    display_element.append('<div class="bayesdiv3"><textarea name="#jspsych-survey-tbv-response-2"></textarea></div>');
    
    /* FIN MODIFICACIONES EXTRA */
    
    //***************************************************************modificacion*********************************************************
    display_element.append($('<p>'));
    //***************************************************************modificacion*********************************************************
    // add submit button
    display_element.append($('<button>', {
      'id': 'jspsych-survey-tbv-next',
      'class': 'bayesbutton'
    }));
    $("#jspsych-survey-tbv-next").html('Guardar Respuestas');
    
    /*
    display_element.append($('<button>', {
      'id': 'jspsych-survey-tbv-next',
      'class': 'jspsych-btn jspsych-survey-tbv'
    }));
    $("#jspsych-survey-tbv-next").html('Guardar Respuestas');
    */
    
    //***************************************************************modificacion*********************************************************
    display_element.append($('<br /><p><br />'));
    //***************************************************************modificacion*********************************************************
    $("#jspsych-survey-tbv-next").click(function() {

        // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // create object to hold responses
      var question_data = {};
      
      var obje;
      $("div.jspsych-survey-tbv-question").each(function(index) {
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

      // next trial
      jsPsych.finishTrial(trialdata);     
    });   

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
