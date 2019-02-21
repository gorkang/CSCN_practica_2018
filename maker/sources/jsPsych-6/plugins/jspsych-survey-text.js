/**
 * jspsych-survey-text
 * a jspsych plugin for free response survey questions
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */


jsPsych.plugins['survey-text'] = (function() {
  var plugin = {};

  plugin.info = {
    name: 'survey-text',
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
          type: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Type',
            default: "text",
            description: 'The type of answer (range, date, text, number)'
          },
          language: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Language',
            default: "spanish",
            description: 'Language of fail-message'
          },
          error_message: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'ErrorMessage',
            default: undefined,
            description: 'Especific text of fail-message'
          },
          answer: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Answer',
            default: undefined,
            description: 'Especific answer'
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
          },
          range: {
            type: jsPsych.plugins.parameterType.INT,
            pretty_name: 'Range',
            array: true,
            default: [-Infinity, Infinity],
            description: 'The range of int.'
          },
          required: {
            type: jsPsych.plugins.parameterType.BOOL,
            pretty_name: 'Required',
            default: false,
            description: 'If true, the text box needs a answer.',
          },
          answers_in_text: {
            type: jsPsych.plugins.parameterType.BOOL,
            pretty_name: 'Answer in Text',
            default: false,
            description: 'If the question have multiple answers in text.',
          }
        }
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
      },
      endword: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Input unit',
        default: '',
        description: 'The unit of the input.'
      }
    }
  }

  // this is for conditions on CSCN system
  var conditions = {};
  var trial_questions = {};

  plugin.trial = function(display_element, trial) {

    for (var i = 0; i < trial.questions.length; i++) {
      if (typeof trial.questions[i].rows === 'undefined')
        trial.questions[i].rows = 1;
      if (typeof trial.questions[i].columns === 'undefined')
        trial.questions[i].columns = 40;
      if (typeof trial.questions[i].value === 'undefined')
        trial.questions[i].value = "";
      if (typeof trial.questions[i].language === 'undefined')
        trial.questions[i].language = "spanish";
      if (typeof trial.questions[i].endword === 'undefined')
        trial.questions[i].endword = "";
    }

    var html = '<br /><p><br />';
    // show preamble text
    if(trial.preamble !== null){
      html += '<div id="jspsych-survey-text-preamble" class="jspsych-survey-text-preamble">'+trial.preamble+'</div>';
    }

    // add questions
    for (var i = 0; i < trial.questions.length; i++) {
      if (typeof trial.questions[i].type == 'undefined') {
        trial.questions[i].type = "text"
      }

      if (trial.questions[i].answers_in_text) {
        str = trial.questions[i].prompt
        elements = [];
        // get dicts
        while (1){
          if (str.indexOf("{") === -1)
            break
          var mySubString = str.substring(
            str.indexOf("{") + 1,
            str.indexOf("}")
          );
          elements.push(mySubString);
          str = str.substring(str.indexOf("}") + 1)
        }
        // create inputs
        for (actual_index in elements){
          element_options = (elements[actual_index].replace(/ /g,"")).split(";");
          actual_input = '<input name="#jspsych-survey-text-response-'+ i.toString() + '"';
          for (actual_option in element_options) {
            if (element_options[actual_option].split(":")[0] === "input")
              actual_input += "type=" + element_options[actual_option].split(":")[1] + " ";
            if (element_options[actual_option].split(":")[0] === "range"){
              actual_input += "min=" + ((element_options[actual_option].split(":")[1]).substring(1,4)).split(",")[0] + " ";
              actual_input += "max=" + ((element_options[actual_option].split(":")[1]).substring(1,4)).split(",")[1] + " ";
            }
          }
          actual_input += 'autofocus></input>';
          console.log(elements[actual_index])
          console.log(actual_input)
          console.log(trial.questions[i].prompt)
          trial.questions[i].prompt = trial.questions[i].prompt.replace("{" + elements[actual_index] + "}", actual_input)
        }
      } else {
        // define the min and max of a question with range
        if (typeof trial.questions[i].range == 'undefined') {
          var min = -Infinity;
          var max = Infinity;
        } else {
          var min = trial.questions[i].range[0]
          var max = trial.questions[i].range[1]
        }
      }

      html += '<div id="jspsych-survey-text-' + i + '" class="jspsych-survey-text-question" style="margin: 2em 0em;">';
      html += '<p class="jspsych-survey-text">' + trial.questions[i].prompt + '</p>';

      if (!(trial.questions[i].answers_in_text)) {
        if (typeof trial.questions[i].range != 'undefined' && trial.questions[i].type == 'range')
          html += '<form>'
        html += '<input type="' + trial.questions[0].type + '" name="#jspsych-survey-' + trial.questions[0].type + '-response-' + i;

        if (typeof trial.questions[i].range != 'undefined')
          html += '" min ="' + min + '" max ="' + max;

        if(trial.questions[i].rows == 1){
          html += '" size="'+trial.questions[i].columns;
        } else {
          html += '" cols="' + trial.questions[i].columns + '" rows="' + trial.questions[i].rows;
        }

        if (typeof trial.questions[i].range != 'undefined' && trial.questions[i].type == 'range')
          html += '" value="0"';
        else
          html += '" value="' + trial.questions[i].value + '"';

        html += ' autofocus';

        if (typeof trial.questions[i].range != 'undefined' && trial.questions[i].type == 'range')
          html += ' class="slider" oninput="this.form.amountInput.value=this.value"';

        html += '></input>';

        if (typeof trial.questions[i].range != 'undefined' && trial.questions[i].type == 'range'){
          html += '&nbsp;&nbsp;<input type="number" name="amountInput" value="0" ';
          if (typeof trial.questions[i].range != 'undefined')
            html += 'min ="' + min + '" max ="' + max+'" oninput="this.form[' + "'" + '#jspsych-survey-' + trial.questions[0].type + '-response-' + i + "'" + '].value=this.value" />';
          else
            html += 'min ="0" max ="100" oninput="this.form[' + "'" + '#jspsych-survey-' + trial.questions[0].type + '-response-' + i + "'" + '].value=this.value" />';
        }
        html += trial.questions[i].endword
        if (typeof trial.questions[i].range != 'undefined' && trial.questions[i].type == 'range')
          html += '</form>'
      }
      html += '<p></p></div>';

      // this is for conditions on CSCN system
      trial_questions["Q_"+i.toString()] = trial.questions[i].prompt;
    }

    // this is for conditions on CSCN system
    conditions["Questions"] = trial_questions;

    // add submit button
    html += '<button id="jspsych-survey-text-next" class="jspsych-btn jspsych-survey-text">'+trial.button_label+'</button><p></p>';
    html += '<div class="fail-message"></div>';
    display_element.innerHTML = html;

    // Focus on first box
    var firstBox = document.getElementsByName('#jspsych-survey-'+ trial.questions[0].type +'-response-0')[0];
    firstBox.focus();

    console.log(actual_element = display_element)

    display_element.querySelector('#jspsych-survey-text-next').addEventListener('click', function(event) {
      // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // create object to hold responses
      var question_data = {};
      var matches = display_element.querySelectorAll('div.jspsych-survey-text-question');
      for(var index=0; index<matches.length; index++){
        var id = "Q" + index;
        if ( (typeof (trial.questions[index].answers_in_text) != 'undefined') && (trial.questions[index].answers_in_text)) {
          var val = []
          for (i = 0; i < matches[index].querySelectorAll('textarea, input').length; i++)
            val.push(matches[index].querySelectorAll('textarea, input')[i].value);
        }
        else{
          var val = matches[index].querySelector('textarea, input').value;
        }
        var obje = {};
        obje[id] = val;
        Object.assign(question_data, obje);
      }
      // save data
      var trialdata = {
        "rt": response_time,
        "responses": JSON.stringify(question_data),
        "conditions": JSON.stringify(conditions) // this is for conditions on CSCN system
      };

      for(var index=0; index<matches.length; index++){
        var textBox = document.getElementsByName('#jspsych-survey-'+ trial.questions[index].type +'-response-' + [index])[0];

        var validation = true;
        var val = matches[index].querySelector('textarea, input').value;

        if (trial.questions[index].required != 'undefined')
          required = trial.questions[index].required;
        else
          required = false;

        pass = true
        if (typeof val != "list") {
          if ((val == "") && required)
            pass = false
          // next trial and check if is a valid element
          if (trial.questions[index].type == "number"){
            if (typeof trial.questions[index].range == 'undefined')
              validation = $.isNumeric(val) === true;
            else
              validation = $.isNumeric(val) === true && val <= max && val >= min;
          }
          if (typeof trial.questions[index].answer !== 'undefined')
            validation = val.toString() === (trial.questions[index].answer).toString();
        } else {
          validation = true
        }
        if (validation && pass) {
          display_element.innerHTML = '';
          jsPsych.pluginAPI.clearAllTimeouts();
          jsPsych.finishTrial(trialdata);
        } else {
          textBox.blur();
          textBox.focus();
          var message = '';
          if (typeof trial.questions[index].error_message !== 'undefined') {
            message = trial.questions[index].error_message;
          } else {
            if (trial.questions[index].language === "english")
              message = 'Please, verify your answer.';
            else if (trial.questions[index].language === "spanish")
              message = 'Por favor, verifique su respuesta.';
          }
          display_element.querySelector(".fail-message").innerHTML = '<span style="color: red;" class="required">' + message +'</span>';
          event.stopPropagation();
          if (event.stopPropagation) {
            event.stopPropagation();
          } else{
            event.cancelBubble = true;
          }
        }
      }
    });

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
