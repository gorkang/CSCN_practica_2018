/**
 * jspsych-survey-textonly
 * a jspsych plugin for free response survey questions
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */

var focused_box
jsPsych.plugins['survey-textonly'] = (function() {

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
      "id": 'jspsych-survey-textonly-preamble',
      "class": 'jspsych-survey-textonly-preamble'
    }));

    $('#jspsych-survey-textonly-preamble').html(trial.preamble);

    // add questions
    for (var i = 0; i < trial.questions.length; i++) {
      // create div
      display_element.append($('<div>', {
        "id": 'jspsych-survey-textonly-' + i,
        "class": 'jspsych-survey-textonly-question'
      }));

      // add question text
      $("#jspsych-survey-textonly-" + i).append('<p class="jspsych-survey-textonly">' + trial.questions[i] + '</p>');

      // add text box
      //$("#jspsych-survey-textonly-" + i).append('<textarea name="#jspsych-survey-textonly-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '"></textarea>'); //original
      focused_box = $("#jspsych-survey-textonly-" + i).append('<textarea id="id'+ i +'" autofocus name="#jspsych-survey-textonly-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '"></textarea>');
      $("#jspsych-survey-textonly-" + i +" textarea").prop('required',true);
      $("#jspsych-survey-textonly-" + i +" textarea").focus();
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
      'id': 'jspsych-survey-textonly-next',
      'class': 'jspsych-btn jspsych-survey-textonly',
      //'onclick' :"validate(event, this);",
      //'type' : 'submit'
    }));
    $("#jspsych-survey-textonly-next").html('Guardar Respuestas');
    //***************************************************************modificacion*********************************************************
    display_element.append($('<br /><p><br />'));
    //***************************************************************modificacion*********************************************************   
    
    $("#jspsych-survey-textonly-next").click(function() {
      
      var validation;
        // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // create object to hold responses
      var question_data = {};
      
      var obje;
      $("div.jspsych-survey-textonly-question").each(function(index) {
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
      
      function isEmpty( inputStr ) { if ( null === inputStr || "" === inputStr ) { return true; } return false; }
      /*
      isEmpty();
      if (isEmpty(validation) === false) {
            console.log("bien",validation);
            display_element.html('');  
            jsPsych.finishTrial(trialdata);
        }else{
            sweetAlert({title: "Por favor ingresa una respuesta", html: true});
            console.log("mal",validation);
            event.stopPropagation();
           if (event.stopPropagation) {
            event.stopPropagation();
            } else{
              event.cancelBubble = true;
            } 
        }
      */
      
      
      $.isNumeric();
      if ($.isNumeric(validation) === false) {
            console.log("bien",validation);
            display_element.html('');  
            jsPsych.finishTrial(trialdata);
        }else{
            sweetAlert({title: "Por favor ingresa texto", html: true});
            console.log("mal",validation);
            event.stopPropagation();
           if (event.stopPropagation) {
            event.stopPropagation();
            } else{
              event.cancelBubble = true;
            } 
        }
        
        
      
      display_element.html('');

      //console.log(question_data);
      // next trial
      jsPsych.finishTrial(trialdata);   
    });   

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
