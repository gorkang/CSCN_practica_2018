/**
 * jspsych-survey-multi-select
 * a jspsych plugin for multiple choice survey questions
 *
 * documentation: docs.jspsych.org
 *
 *  In this modified version, two checkboxes must be selected and there are time limits
 *
 */

jsPsych.plugins['survey-multi-selectmr'] = (function() {
  var plugin = {};

  plugin.info = {
    name: 'survey-multi-selectmr',
    description: '',
    parameters: {
      questions: {
        type: jsPsych.plugins.parameterType.COMPLEX,
        array: true,
        pretty_name: 'Questions',
        nested: {
          prompt: {type: jsPsych.plugins.parameterType.STRING,
                    pretty_name: 'Prompt',
                    default: undefined,
                    description: 'The strings that will be associated with a group of options.'},
          options: {type: jsPsych.plugins.parameterType.STRING,
                    pretty_name: 'Options',
                    array: true,
                    default: undefined,
                    description: 'Displays options for an individual question.'},
          horizontal: {type: jsPsych.plugins.parameterType.BOOL,
                        pretty_name: 'Horizontal',
                        default: false,
                        description: 'If true, then questions are centered and options are displayed horizontally.'},
        }
      },
      required: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Required',
        default: false,
        description: 'Subject will be required to pick an option for each question.'
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
  plugin.trial = function(display_element, trial) {
    var plugin_id_name = "jspsych-survey-multi-selectmr";
    var plugin_id_selector = '#' + plugin_id_name;
    var _join = function( /*args*/ ) {
      var arr = Array.prototype.slice.call(arguments, _join.length);
      return arr.join(separator = '-');
    }

    //start modification
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }
    //end modification

    // inject CSS for trial
    display_element.innerHTML = '<style id="jspsych-survey-multi-selectmr-css"></style>';
    var cssstr = ".jspsych-survey-multi-selectmr-question { margin-top: 2em; margin-bottom: 2em; text-align: left; }"+
      ".jspsych-survey-multi-selectmr-text span.required {color: darkred;}"+
      ".jspsych-survey-multi-selectmr-horizontal .jspsych-survey-multi-selectmr-text {  text-align: left;}"+
      ".jspsych-survey-multi-selectmr-option { line-height: 2; }"+
      ".jspsych-survey-multi-selectmr-horizontal .jspsych-survey-multi-selectmr-option {  display: inline-block;  margin-left: 1em;  margin-right: 1em;  vertical-align: top;}"+
      "label.jspsych-survey-multi-selectmr-text input[type='checkbox'] {margin-right: 1em;}"

    display_element.querySelector('#jspsych-survey-multi-selectmr-css').innerHTML = cssstr;

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

      trial_form.innerHTML += '<div id="'+_join(plugin_id_name, i)+'" class="'+question_classes.join(' ')+'"></div>';

      var question_selector = _join(plugin_id_selector, i);

      // add question text
      display_element.querySelector(question_selector).innerHTML += '<p id="survey-question" class="' + plugin_id_name + '-text survey-multi-selectmr">' + trial.questions[i].prompt + '</p>';


      //start modification. Groups all checkboxes in a div.
      check_boxes = document.createElement('div');
      check_boxes.setAttribute('class','check_boxes');
      display_element.querySelector(question_selector).appendChild(check_boxes);
      //end modification
      // create option check boxes
      for (var j = 0; j < trial.questions[i].options.length; j++) {
        var option_id_name = _join(plugin_id_name, "option", i, j),
          option_id_selector = '#' + option_id_name;

        // add check box container
        check_boxes.innerHTML += '<div id="'+option_id_name+'" class="'+_join(plugin_id_name, 'option')+'"></div>';

        // add label and question text
        var form = document.getElementById(option_id_name);
        var input_name = _join(plugin_id_name, 'response', i);
        var input_id = _join(plugin_id_name, 'response', i, j);
        var label = document.createElement('label');
        label.setAttribute('class', plugin_id_name+'-text');
        label.innerHTML = trial.questions[i].options[j];
        label.setAttribute('for', input_id)

        // create  checkboxes
        var input = document.createElement('input');
        input.setAttribute('type', "checkbox");
        input.setAttribute('name', input_name);
        input.setAttribute('id', input_id);
        input.setAttribute('value', trial.questions[i].options[j])
        form.appendChild(label)
        form.insertBefore(input, label)

        //start modification
        br = document.createElement('br')
        form.appendChild(br)
        form.insertBefore(br,label);
        //end modification
      }
    }
    // add submit button
    trial_form.innerHTML += '<input type="submit" id="'+plugin_id_name+'-next" class="'+plugin_id_name+' jspsych-btn"' + (trial.button_label ? ' value="'+trial.button_label +'"': '') + '></input>';
    trial_form.innerHTML +='<div class="fail-message"></div>'

    //start modification
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
    //end modification

    trial_form.addEventListener('submit', function(event) {
    event.preventDefault();
      // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // create object to hold responses
      var matches = display_element.querySelectorAll("div." + plugin_id_name + "-question");
      var question_data = {};
      var has_response = [];
      for(var index=0; index<matches.length; index++){
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
        //Check if exactly to options where selected
        if(val.length != 2){
           has_response.push(false);
        }
        else{
           has_response.push(true);
        }
      }
      // adds validation to check if at least one option is selected
      if(trial.required && has_response.includes(false)) {
        var inputboxes = display_element.querySelectorAll("input[type=checkbox]")
        display_element.querySelector(".fail-message").innerHTML = '<span style="color: red;" class="required"> Debes seleccionar dos alternativas </span>';
      } else {
        // save data
        var trial_data = {
          "rt": response_time,
          "responses": JSON.stringify(question_data)
        };
        display_element.innerHTML = '';

        // next trial
        jsPsych.finishTrial(trial_data);
      }
    });

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();