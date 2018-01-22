/**
 * jspsych-survey-text
 * a jspsych plugin for free response survey questions
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */


jsPsych.plugins['survey-textha'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'survey-textha',
    description: '',
    parameters: {
      questions: {
        type: jsPsych.plugins.parameterType.COMPLEX,
        array: true,
        pretty_name: 'Questions',
        default: undefined,
        nested: {
          prompt: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Prompt',
            default: undefined,
            description: 'Prompts for the subject to response'
          },
          value: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Value',
            array: true,
            default: null,
            description: 'The strings will be used to populate the response fields with editable answers.'
          },
          rows: {
            type: jsPsych.plugins.parameterType.INT,
            pretty_name: 'Rows',
            array: true,
            default: 1,
            description: 'The number of rows for the response text box.'
          },
          columns: {
            type: jsPsych.plugins.parameterType.INT,
            pretty_name: 'Columns',
            array: true,
            default: 40,
            description: 'The number of columns for the response text box.'
          }
        }
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'The maximum duration to wait for a response.'
      },
      preamble: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Preamble',
        default: null,
        description: 'HTML formatted string to display at the top of the page above all the questions.'
      },
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'The text that appears on the button to finish the trial.'
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    var response = {
      rt: null,
      key: null
    };

    function end_trial() {
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;
     // kill any remaining setTimeout handlers
     jsPsych.pluginAPI.clearAllTimeouts();

     // clear the display
     display_element.innerHTML = '';

     var trialdata = {
       "rt": response_time
     };

     // move on to the next trial
     jsPsych.finishTrial(trialdata);
    };

    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

    var html = '';
    // show preamble text
    if(trial.preamble !== null){
      html += '<div id="jspsych-survey-text-preamble" class="jspsych-survey-text-preamble">'+trial.preamble+'</div>';
    }
    // add questions
    for (var i = 0; i < trial.questions.length; i++) {
      html += '<div id="jspsych-survey-text-"'+i+'" class="jspsych-survey-text-question" style="margin: 2em 0em;">';
      html += '<p class="jspsych-survey-text">' + trial.questions[i].prompt + '</p>';
      if(trial.questions[i].rows == 1){
        html += '<input type="number" name="#jspsych-survey-text-response-' + i + '" size="'+trial.questions[i].columns+'" value="'+trial.questions[i].value+'" autofocus onfocus="advance(event)"></input>';
      } else {
        html += '<input type="number" name="#jspsych-survey-text-response-' + i + '" cols="' + trial.questions[i].columns + '" rows="' + trial.questions[i].rows + '" autofocus onfocus="advance(event)"></input>';
      }
      html += '</div>';
    }

    // add submit button
    html += '<button id="jspsych-survey-text-next" class="jspsych-btn jspsych-survey-text">'+trial.button_label+'</button>';
    html +='<div class="fail-message"></div>';
    display_element.innerHTML = html;
    var firstTextBox = document.getElementsByName("#jspsych-survey-text-response-0")[0];
    firstTextBox.focus();

    display_element.querySelector('#jspsych-survey-text-next').addEventListener('click', function() {
      // measure response time
      var validation;
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // create object to hold responses
      var question_data = {};
      var matches = display_element.querySelectorAll('div.jspsych-survey-text-question');
      for(var index=0; index<matches.length; index++){
        var id = "Q" + index;
        var val = matches[index].querySelector('input, input').value;
        var obje = {};
        obje[id] = val;
        Object.assign(question_data, obje);

        validation = val;
      }
      // save data
      var trialdata = {
        "rt": response_time,
        "responses": JSON.stringify(question_data)
      };

      if ($.isNumeric(validation) === true) {
      //if ((validation >= 12 && validation <= 14) || (validation >= 21 && validation <= 24) || (validation >= 31 && validation <= 34) || (validation >= 41 && validation <= 43) &&  validation != 22 && validation != 33 ) {
            console.log("bien",validation);
            display_element.innerHTML = '';
            jsPsych.pluginAPI.clearAllTimeouts();
            jsPsych.finishTrial(trialdata);
        }else{
            firstTextBox.blur();
            display_element.querySelector(".fail-message").innerHTML = '<span style="color: red;" class="required">Por favor ingresa un número válido.</span>';
            console.log("mal",validation);
            event.stopPropagation();
           if (event.stopPropagation) {
            event.stopPropagation();
            } else{
              event.cancelBubble = true;
            }
        }
    });

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
