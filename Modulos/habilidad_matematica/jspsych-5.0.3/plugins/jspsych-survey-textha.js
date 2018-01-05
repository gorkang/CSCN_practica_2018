/**
 * jspsych-survey-textha
 * a jspsych plugin for free response survey questions
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */

var focused_box;
var setTimeoutHandlers = [];
jsPsych.plugins['survey-textha'] = (function() {

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

    trial.timing_response = trial.timing_response || -1;


    // if any trial variables are functions
    // this evaluates the function and replaces
    // it with the output of the function
    trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);

    //***************************************************************modificacion*********************************************************
    display_element.append($('<br /><p><br />'));
    //***************************************************************modificacion*********************************************************

    // show preamble text
    display_element.append($('<div>', {
      "id": 'jspsych-survey-textha-preamble',
      "class": 'jspsych-survey-textha-preamble'
    }));

    $('#jspsych-survey-textha-preamble').html(trial.preamble);

    // add questions
    for (var i = 0; i < trial.questions.length; i++) {
      // create div
      display_element.append($('<div>', {
        "id": 'jspsych-survey-textha-' + i,
        "class": 'jspsych-survey-textha-question'
      }));

      // add question text
      $("#jspsych-survey-textha-" + i).append('<p class="jspsych-survey-textha">' + trial.questions[i] + '</p>');

      // add text box
      //$("#jspsych-survey-textha-" + i).append('<textarea name="#jspsych-survey-textha-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '"></textarea>'); //original
      focused_box = $("#jspsych-survey-textha-" + i).append('<textarea id="id'+ i +'" autofocus onfocus="advance(event)" required name="#jspsych-survey-textha-response-' + i + '" cols="' + trial.columns[i] + '" rows="' + trial.rows[i] + '"></textarea>');
      $("#jspsych-survey-textha-" + i +" textarea").focus();
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
      'id': 'jspsych-survey-textha-next',
      'class': 'jspsych-btn jspsych-survey-textha',
      //'onclick' :"validate(event, this);",
      //'type' : 'submit'
    }));
    $("#jspsych-survey-textha-next").html('Guardar Respuestas');
    //***************************************************************modificacion*********************************************************
    display_element.append($('<br /><p><br />'));
    //***************************************************************modificacion*********************************************************

    $("#jspsych-survey-textha-next").click(function() {
      var validation;
        // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // create object to hold responses
      var question_data = {};

      var obje;
      $("div.jspsych-survey-textha-question").each(function(index) {
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
      jsPsych.finishTrial(trialdata);  */
    });
    var end_trial = function() {
    var endTime = (new Date()).getTime();
    var response_time = endTime - startTime;

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
      "rt": response_time
    };

    //jsPsych.data.write(trial_data);

    // clear the display
    display_element.html('');

    // move on to the next trial
    //jsPsych.endCurrentTimeline();
    jsPsych.finishTrial(trial_data);
};

    var startTime = (new Date()).getTime();

    if (trial.tiiming_response < 0){ end_trial();}
    if (trial.timing_response > 0) {
      var t2 = setTimeout(function() {
        end_trial();
      }, trial.timing_response);
      setTimeoutHandlers.push(t2);
    }
  };

  return plugin;
})();
