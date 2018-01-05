/**
 * jspsych-survey-textbayes
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
jsPsych.plugins['survey-textbayes'] = (function() {

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
      "id": 'jspsych-survey-textbayes-preamble',
      "class": 'jspsych-survey-textbayes-preamble'
    }));

    $('#jspsych-survey-textbayes-preamble').html(trial.preamble);

    // add questions
    //for (var i = 0; i < trial.questions.length; i++) {
      // create div
      /*
      display_element.append($('<div>', {
        "id": 'jspsych-survey-textbayes-' + i,
        "class": 'jspsych-survey-textbayes-question'
      }));     
      
      // add question text
      $("#jspsych-survey-textbayes-" + i).append('<p class="jspsych-survey-textbayes">' + trial.questions[i] + '</p>');

      // add text box
      //$("#jspsych-survey-textbayes-" + i).append('<textarea name="#jspsych-survey-textbayes-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '"></textarea>'); //original
      focused_box = $("#jspsych-survey-textbayes-" + i).append('<textarea name="#jspsych-survey-textbayes-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '"></textarea>');
      */
    //}
    
    /* INICIO MODIFICACIONES EXTRA */
    //v1
    /*
    display_element.append('<textarea class="bayes1" name="#jspsych-survey-textbayes-response-0"></textarea>');
    display_element.append('<p class="bayes2">' + "de cada" + '</p>');
    display_element.append('<textarea class="bayes3" name="#jspsych-survey-textbayes-response-2"></textarea>');
    */
    //v2
    display_element.append('<div class="bayesdiv1"><textarea name="#jspsych-survey-textbayes-response-0" id="id1"></textarea></div>');
    display_element.append('<div class="bayesdiv2"><p>' + "de cada" + '</p></div>');
    display_element.append('<div class="bayesdiv3"><textarea name="#jspsych-survey-textbayes-response-2" id="id2"></textarea></div>');
    
    /* FIN MODIFICACIONES EXTRA */
    
    //***************************************************************modificacion*********************************************************
    display_element.append($('<p>'));
    //***************************************************************modificacion*********************************************************
    // add submit button
    display_element.append($('<button>', {
      'id': 'jspsych-survey-textbayes-next',
      'class': 'bayesbutton',
      'onclick' :"validate(event, this);"
    }));
    $("#jspsych-survey-textbayes-next").html('Guardar Respuestas');
    
    /*
    display_element.append($('<button>', {
      'id': 'jspsych-survey-textbayes-next',
      'class': 'jspsych-btn jspsych-survey-textbayes'
    }));
    $("#jspsych-survey-textbayes-next").html('Guardar Respuestas');
    */
    
    //***************************************************************modificacion*********************************************************
    display_element.append($('<br /><p><br />'));
    //***************************************************************modificacion*********************************************************
    $("#jspsych-survey-textbayes-next").click(function() {
      var validation1;
      var validation2;
        // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // create object to hold responses
      var question_data = {};
      var question_data2 = {};
      var question_data3 = {};
      
      var obje;
      var obje2;
      var obje3;
      $("div.jspsych-survey-textbayes-question").each(function(index) {
        var id = "Q" + index;
        var val = $(this).children('textarea').val();
        console.log('val is:   '+val);
        var obje = {};
        obje[id] = val;
        console.log('obje is:   '+val);
        $.extend(question_data, obje);
        
      });
      
      $("div.bayesdiv1").each(function(index) {
        var id = "Q0";
        var val = $(this).children('textarea').val();
        console.log('val2 is:   '+val);
        var obje2 = {};
        obje2[id] = val;
        console.log('obje2 is:   '+val);
        $.extend(question_data, obje2);
        validation1 = val;
        
      });
      
      $("div.bayesdiv3").each(function(index) {
        var id = "Q1";
        var val = $(this).children('textarea').val();
        console.log('val3 is:   '+val);
        var obje3 = {};
        obje3[id] = val;
        console.log('obje3 is:   '+val);
        $.extend(question_data, obje3);
        validation2 = val;
        
      });
      
      var trialdata = {
        "rt": response_time,
        "responses": JSON.stringify(question_data)
      };
      
      $.isNumeric();
      if ($.isNumeric(validation1) === true && $.isNumeric(validation2) === true) {
            console.log("bien",validation1);
            console.log("bien",validation2);
            display_element.html('');  
            jsPsych.finishTrial(trialdata);
        }else{
            sweetAlert({title: "Por favor ingresa un n\&uacute;mero v\&aacute;lido", html: true});
            console.log("mal",validation1);
            console.log("mal",validation2);
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
      jsPsych.finishTrial(trialdata); */    
    });   

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
