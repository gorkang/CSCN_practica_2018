/**
 * jspsych-survey-multi-select
 * a jspsych plugin for multiple choice survey questions
 *
 * documentation: docs.jspsych.org
 *
 */


jsPsych.plugins['survey-multi-select'] = (function() {
  var plugin = {};

  plugin.info = {
    name: 'survey-multi-select',
    description: '',
    parameters: {
      questions: {
        type: jsPsych.plugins.parameterType.COMPLEX,
        array: true,
        pretty_name: 'Questions',
        nested: {
          prompt: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Prompt',
            default: undefined,
            description: 'The strings that will be associated with a group of options.'
          },
          options: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Options',
            array: true,
            default: undefined,
            description: 'Displays options for an individual question.'
          },
          horizontal: {
            type: jsPsych.plugins.parameterType.BOOL,
            pretty_name: 'Horizontal',
            default: false,
            description: 'If true, then questions are centered and options are displayed horizontally.'
          },
          expected_options: {
            type: jsPsych.plugins.parameterType.INT,
            pretty_name: 'Expected options',
            default: undefined,
            description: 'Number of elements that the user must choose.'
          },
          not_enabled_options: {
            type: jsPsych.plugins.parameterType.INT,
            pretty_name: 'Not enabled options',
            default: undefined,
            description: 'If you need images or texts to the left side of the alternatives.'
          },
          required: {
            type: jsPsych.plugins.parameterType.BOOL,
            pretty_name: 'Required',
            default: false,
            description: 'Subject will be required to pick an option for each question.'
          },
          error_message: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'ErrorMessage',
            default: undefined,
            description: 'Especific text of fail-message'
          },
        }
      },
      preamble: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Preamble',
        default: null,
        description: 'HTML formatted string to display at the top of the page above all the questions.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'The maximum duration to wait for a response.'
      },
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'Label of the button.'
      }
    }
  }
  
  // this is for conditions on CSCN system
  var conditions = {};
  var trial_questions = {};
  var trial_alternatives = {};

  plugin.trial = function(display_element, trial) {
    var plugin_id_name = "jspsych-survey-multi-select";
    var plugin_id_selector = '#' + plugin_id_name;
    var _join = function( /*args*/ ) {
      var arr = Array.prototype.slice.call(arguments, _join.length);
      return arr.join(separator = '-');
    }


    // inject CSS for trial
    display_element.innerHTML = '<style id="jspsych-survey-multi-select-css"></style>';
    var cssstr = ".jspsych-survey-multi-select-question { margin-top: 2em; margin-bottom: 2em; text-align: left; }"+
      ".jspsych-survey-multi-select-text span.required {color: darkred;}"+
      ".jspsych-survey-multi-select-horizontal .jspsych-survey-multi-select-text {  text-align: center;}"+
      ".jspsych-survey-multi-select-option { line-height: 2; }"+
      ".jspsych-survey-multi-select-horizontal .jspsych-survey-multi-select-option {  display: inline-block;  margin-left: 1em;  margin-right: 1em;  vertical-align: top;}"+
      "label.jspsych-survey-multi-select-text input[type='checkbox'] {margin-right: 1em;}"

    display_element.querySelector('#jspsych-survey-multi-select-css').innerHTML = cssstr;

    // form element
    var trial_form_id = _join(plugin_id_name, "form");
    display_element.innerHTML += '<form id="'+trial_form_id+'"></form>';
    var trial_form = display_element.querySelector("#" + trial_form_id);
    // show preamble text
    var preamble_id_name = _join(plugin_id_name, 'preamble');
    if(trial.preamble !== null){
      trial_form.innerHTML += '<div id="'+preamble_id_name+'" class="'+preamble_id_name+'">'+trial.preamble+'</div>';
    }
    // add multiple-select questions
    for (var i = 0; i < trial.questions.length; i++) {
      // create question container
      var question_classes = [_join(plugin_id_name, 'question')];
      if (trial.questions[i].horizontal) {
        question_classes.push(_join(plugin_id_name, 'horizontal'));
      }
      console.log(trial.questions[i].error_message)
      trial_form.innerHTML += '<div id="'+_join(plugin_id_name, i)+'" class="'+question_classes.join(' ')+'"></div>';

      var question_selector = _join(plugin_id_selector, i);

      // add question text
      display_element.querySelector(question_selector).innerHTML += '<p id="survey-question" class="' + plugin_id_name + '-text survey-multi-select">' + trial.questions[i].prompt + '</p>';

      // this is for conditions on CSCN system
      trial_questions["Q_"+i.toString()] = trial.questions[i].prompt;
      trial_alternatives["Q_"+i.toString()] = trial.questions[i].options;

      // If you need images or texts to the left side of the alternatives
      if (typeof trial.questions[i].not_enabled_options === 'undefined')
        trial.questions[i].not_enabled_options = 0
      // create option check boxes
      for (var j = 0; j < trial.questions[i].options.length; j++) {
        var option_id_name = _join(plugin_id_name, ((trial.questions[i].horizontal.toString() === "true") ? "horizontal-" : "") + "option", i, j),
          option_id_selector = '#' + option_id_name;

        // add check box container
        display_element.querySelector(question_selector).innerHTML += '<div id="'+option_id_name + ((trial.questions[i].not_enabled_options == j && j != 0) ? '" style= "margin-left:5em"' : '"')  + ' class="'+_join(plugin_id_name, 'option')+'"></div>';

        // add label and question text
        var form = document.getElementById(option_id_name)
        var input_name = _join(plugin_id_name, 'response', i);
        var input_id = _join(plugin_id_name, 'response', i, j);
        var label = document.createElement('label');
        label.setAttribute('class', plugin_id_name+'-text');
        label.innerHTML = trial.questions[i].options[j];
        label.setAttribute('for', input_id)
        if (trial.questions[i].not_enabled_options <= j){
          // create  checkboxes
          var input = document.createElement('input');
          input.setAttribute('type', "checkbox");
          input.setAttribute('name', input_name);
          input.setAttribute('id', input_id);
          input.setAttribute('value', trial.questions[i].options[j])
        } else {
          // add option to question
          trial_questions["Q_"+i.toString()] += " " + trial.questions[i].options[j];
          var input = document.createTextNode( '\u00A0' );
        }
        form.appendChild(label)
        form.insertBefore(input, label)
      }
      trial_form.innerHTML +='<div class="fail-message-' + i.toString() + '"></div>'
    }

    // this is for conditions on CSCN system
    conditions["Questions"] = trial_questions; 
    conditions["Alternatives"] = trial_alternatives; 

    // add submit button
    trial_form.innerHTML += '<input type="submit" id="'+plugin_id_name+'-next" class="'+plugin_id_name+' jspsych-btn"' + (trial.button_label ? ' value="'+trial.button_label +'"': '') + '></input>';

    if (trial.trial_duration !== null) {
      var event = new CustomEvent("submit", {"detail": {"trial_finished": false}});
      jsPsych.pluginAPI.setTimeout(function() {
        trial_form.dispatchEvent(event);
      }, trial.trial_duration);
    }
    trial_form.addEventListener('submit', function(event) {
      jsPsych.pluginAPI.clearAllTimeouts();
      event.preventDefault();
      // measure response time
      var endTime = performance.now();
      var response_time = endTime - startTime;

      // create object to hold responses
      var matches = display_element.querySelectorAll("div." + plugin_id_name + "-question");
      var question_data = {};
      var pass = true;
      for(var index=0; index<matches.length; index++){
        var has_response = [];
        match = matches[index];
        var val = [];
        var inputboxes = match.querySelectorAll("input[type=checkbox]:checked")
        for(var j=0; j<inputboxes.length; j++){
          currentChecked = inputboxes[j];
          val.push(currentChecked.value)
        }
        var id = 'Q' + index
        var obje = {};
        obje[id] = val;
        Object.assign(question_data, obje);

        if (val.length == 0 && trial.questions[index].required){
          has_response.push(false);
        }
        if (typeof trial.questions[index].expected_options === 'undefined')
          var expected = true;
        else
          var expected = (val.length).toString() === (trial.questions[index].expected_options).toString();
        if ( (val.length == 0 || !expected) && (typeof event.detail === 'undefined' || event.detail.trial_finished !== false) ){ has_response.push(false); } else { has_response.push(true); }

        console.log(trial.questions[index].error_message)
        console.log(questions = trial.questions)

        if(has_response.includes(false)) {
          var inputboxes = display_element.querySelectorAll("input[type=checkbox]")
          if (typeof trial.questions[index].error_message === 'undefined')
            trial.questions[index].error_message = "Por favor verifique su respuesta";
          console.log(_display_element = display_element)
          console.log(".fail-message-"+index.toString())
          display_element.querySelector(".fail-message-"+index.toString()).innerHTML = '<span style="color: red;" class="required">'+trial.questions[index].error_message+'</span>';
          pass = false;
        }
      }
      
      if (pass) {
        // save data
        var trial_data = {
          "rt": response_time,
          "responses": JSON.stringify(question_data),
          "conditions": JSON.stringify(conditions) // this is for conditions on CSCN system
        };

        // next trial
        jsPsych.finishTrial(trial_data);
      }
    });

    var startTime = performance.now();
  };

  return plugin;
})();
