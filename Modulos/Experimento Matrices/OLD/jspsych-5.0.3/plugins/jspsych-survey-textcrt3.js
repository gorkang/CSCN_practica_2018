/**
 * jspsych-survey-textcrt3
 * a jspsych plugin for free response survey questions
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */

var focused_box
jsPsych.plugins['survey-textcrt3'] = (function() {

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
      "id": 'jspsych-survey-textcrt3-preamble',
      "class": 'jspsych-survey-textcrt3-preamble'
    }));

    $('#jspsych-survey-textcrt3-preamble').html(trial.preamble);

    // add questions
    for (var i = 0; i < trial.questions.length; i++) {
      // create div
      display_element.append($('<div>', {
        "id": 'jspsych-survey-textcrt3-' + i,
        "class": 'jspsych-survey-textcrt3-question'
      }));

      // add question text
      $("#jspsych-survey-textcrt3-" + i).append('<p class="jspsych-survey-text">' + trial.questions[i] + '</p>');

      // add text box
      //$("#jspsych-survey-textcrt3-" + i).append('<textarea name="#jspsych-survey-textcrt3-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '"></textarea>'); //original
      focused_box = $("#jspsych-survey-textcrt3-" + i).append('<textarea name="#jspsych-survey-textcrt3-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '"></textarea>');
      $("#jspsych-survey-textcrt3-" + i +" textarea").focus();
      //***************************************************************modificacion*********************************************************
      focused_box.append($('<p class="pcrt3">dias</p>'));
      //***************************************************************modificacion*********************************************************
      
    }
    //***************************************************************modificacion*********************************************************
    display_element.append($('<p>'));
    //***************************************************************modificacion*********************************************************
    // add submit button
    display_element.append($('<button>', {
      'id': 'jspsych-survey-textcrt3-next',
      'class': 'jspsych-btn jspsych-survey-textcrt3'
    }));
    $("#jspsych-survey-textcrt3-next").html('Guardar Respuestas');
    //***************************************************************modificacion*********************************************************
    display_element.append($('<br /><p><br />'));
    //***************************************************************modificacion*********************************************************
    $("#jspsych-survey-textcrt3-next").click(function() {
      var validation;
        // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // create object to hold responses
      var question_data = {};
      
      var obje;
      $("div.jspsych-survey-textcrt3-question").each(function(index) {
        var id = "Q" + index;
        var val = $(this).children('textarea').val();
        console.log('val is:   '+val);
        var obje = {};
        obje[id] = val;
        console.log('obje is:   '+val);
        $.extend(question_data, obje);
        
        validation = val;
        
      });
      var trialdata = {
        "rt": response_time,
        "responses": JSON.stringify(question_data)
      };
      
      $.isNumeric();
      if ($.isNumeric(validation) === true) {
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
      /*
      display_element.html('');

      // next trial
      jsPsych.finishTrial(trialdata);   */  
    });   

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
