/**
 * jspsych-survey-numbers
 * a jspsych plugin for free response survey questions
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */


jsPsych.plugins['survey-numbers'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'survey-numbers',
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

    if (typeof trial.questions[0].rows == 'undefined') {
      trial.questions[0].rows = [];
      for (var i = 0; i < trial.questions.length; i++) {
        trial.questions[i].rows.push(1);
      }
    }
    if (typeof trial.questions[0].columns == 'undefined') {
      trial.questions[0].columns = [];
      for (var i = 0; i < trial.questions.length; i++) {
        trial.questions[i].columns.push(40);
      }
    }
    if (typeof trial.questions[0].value == 'undefined') {
      trial.questions[0].value = [];
      for (var i = 0; i < trial.questions.length; i++) {
        trial.questions[i].value.push("");
      }
    }

    var html = '';

    //***************************************************************modificacion*********************************************************
    html += '<br /><p><br />';
    //***************************************************************modificacion*********************************************************

    // show preamble text
    if(trial.preamble !== null){
      html += '<div id="jspsych-survey-numbers-preamble" class="jspsych-survey-numbers-preamble">'+trial.preamble+'</div>';
    }
    // add questions
    for (var i = 0; i < trial.questions.length; i++) {
      html += '<div id="jspsych-survey-numbers-"'+i+'" class="jspsych-survey-numbers-question" style="margin: 2em 0em;">';
      html += '<p class="jspsych-survey-numbers">' + trial.questions[i].prompt + '</p>';
      if(trial.questions[i].rows == 1){
        //type changed to div, added class
        html += '<div class="jspsych-survey-numbers-response-' + i + '"name="#jspsych-survey-numbers-response-' + i + '"></div>';
      }
      html += '</div>';
    }

    html += "<table style='margin: auto'><tbody>" +
      "<tr><td><button class='jspsych-btn'>7</button></td><td><button class='jspsych-btn'>8</button></td><td><button class='jspsych-btn'>9</button></td></tr>" +
      "<tr><td><button class='jspsych-btn'>4</button></td><td><button class='jspsych-btn'>5</button></td><td><button class='jspsych-btn'>6</button></td></tr>" +
      "<tr><td><button class='jspsych-btn'>1</button></td><td><button class='jspsych-btn'>2</button></td><td><button class='jspsych-btn'>3</button></td></tr>" +
      "<tr><td colspan='2'><button class='jspsych-btn' style='width:100%'>0</button></td><td><button class='jspsych-btn jspsych-survey-numbers-next'><img src='jsPsych-6/plugins/tick.svg' width='8' height='8' style='margin-left: auto'></img></button></td></tr>" +
    "</tbody></table>";
    html +='<div class="fail-message"></div>';

    display_element.innerHTML = html;

    //modificacion
    var firstTextBox = display_element.querySelector("div.jspsych-survey-numbers-response-0");
    firstTextBox.focus();
    firstTextBox.onkeydown = function(event){
      if(event.keyCode == 13){
        display_element.querySelector("button.jspsych-btn.jspsych-survey-numbers-next").click();
      };
    };
    var buttons = display_element.querySelectorAll('button.jspsych-btn');
    buttons.forEach(function(button){
      button.onclick = function(){
        if(!this.className.includes("jspsych-survey-numbers-next")){
          firstTextBox.innerHTML += this.innerText;
        }
      };
    });
    //fin modificacion

    display_element.querySelector("button.jspsych-btn.jspsych-survey-numbers-next").addEventListener('click', function() {
      //modificacion
      if(!firstTextBox.innerHTML != ""){
        display_element.querySelector(".fail-message").innerHTML = '<span style="color: red;" class="required">Debes ingresar los numeros que escuchaste de acuerdo a las instrucciones.</span>';
        return;
      }
      //fin modificacion
      // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // create object to hold responses
      var question_data = {};
      var matches = display_element.querySelectorAll('div.jspsych-survey-numbers-question');
      for(var index=0; index<matches.length; index++){
        var id = "Q" + index;
        var val = firstTextBox.innerHTML;
        var obje = {};
        obje[id] = val;
        Object.assign(question_data, obje);
      }
      // save data
      var trialdata = {
        "rt": response_time,
        "responses": JSON.stringify(question_data)
      };

      display_element.innerHTML = '';

      // next trial
      jsPsych.finishTrial(trialdata);
    });

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
