/**
 * jspsych-survey-textrut
 * a jspsych plugin for free response survey questions
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */

var focused_box
jsPsych.plugins['survey-textrut'] = (function() {

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
      "id": 'jspsych-survey-textrut-preamble',
      "class": 'jspsych-survey-textrut-preamble'
    }));

    $('#jspsych-survey-textrut-preamble').html(trial.preamble);

    // add questions
    for (var i = 0; i < trial.questions.length; i++) {
      // create div
      display_element.append($('<div>', {
        "id": 'jspsych-survey-textrut-' + i,
        "class": 'jspsych-survey-textrut-question'
      }));

      // add question text
      $("#jspsych-survey-textrut-" + i).append('<p class="jspsych-survey-textrut">' + trial.questions[i] + '</p>');

      // add text box
      //$("#jspsych-survey-textrut-" + i).append('<textarea name="#jspsych-survey-textrut-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '"></textarea>'); //original
      focused_box = $("#jspsych-survey-textrut-" + i).append('<textarea onkeypress="blockrut(event)" id="id'+ i +'" autofocus required name="#jspsych-survey-textrut-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '" maxlength="8"></textarea>');
      $("#jspsych-survey-textrut-" + i +" textarea").focus();
    }
    
    //***************************************************************modificacion*********************************************************
    display_element.append($('<p>'));
    //***************************************************************modificacion*********************************************************
    // add submit button
    function validate(event, element) {
        alert("entered validation function");
        if (event.stopPropagation) {
            event.stopPropagation();
        } else{
          event.cancelBubble = true;
        }
    }
    
    display_element.append($('<button>', {
      'id': 'jspsych-survey-textrut-next',
      'class': 'jspsych-btn jspsych-survey-textrut',
      //'onclick' :"validate(event, this);",
      //'type' : 'submit'
    }));
    $("#jspsych-survey-textrut-next").html('Guardar Respuestas');
    //***************************************************************modificacion*********************************************************
    display_element.append($('<br /><p><br />'));
    //***************************************************************modificacion*********************************************************   
    
    $("#jspsych-survey-textrut-next").click(function() {
      
      var validation;
        // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // create object to hold responses
      var question_data = {};
      
      var obje;
      $("div.jspsych-survey-textrut-question").each(function(index) {
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

      //console.log(question_data);
      // next trial
      jsPsych.finishTrial(trialdata);   */  
    });   

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
