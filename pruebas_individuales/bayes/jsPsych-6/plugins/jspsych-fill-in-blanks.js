/**
 * fill-in-blanks, modifyed from:
 *   jspsych-survey-text
 *   a jspsych plugin for free response survey questions
 *
 *   Josh de Leeuw
 *
 *   documentation: docs.jspsych.org
 *
 */

 /**
 Blocks any key that isn't a number
 @name block_fkeys
 @function
 @param {event}  event

 */
 function block_fkeys(event){
     var x = event.which || event.keyCode;
     if(x != 8 && x != 0 && x < 48 || x > 57){
         console.log("Blocked key");
         event.preventDefault();
         return false;
     }else{
         return;
     }
 }


jsPsych.plugins['fill-in-blanks'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'fill-in-blanks',
    description: 'Replaces "____" with field that can be either a textarea or input_number, or replaces ____[option1,option2,.,optionN] with select. Replaces %text%, %number% and %select:[option1,option2,.,optionN]% for their respectives fields.',
    parameters: {
      fill_in_text: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: "Fill in text",
        default: null,
        description: 'Text to be filled in.'
      },
      fill_in_type: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: "Fill in type",
        default: "auto",
        description: "Type of the field to fill, can be 'auto', 'number', 'text' or 'select'."
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

    var html = '';
    // show preamble text
    if(trial.preamble !== null){
      html += '<div id="jspsych-fill-in-blanks-preamble" class="jspsych-fill-in-blanks-preamble">'+trial.preamble+'</div>';
    }
    // fill in textarea
    if(trial.fill_in_text !== null){
      var fields = '';
      var fill_in_html = trial.fill_in_text;
      var left_side;
      var rigth_side;
      //input type according to the especified type in the text (%number% or %text%)
      if(trial.fill_in_type == "auto"){
        while(fill_in_html.includes('%number%')){
          left_side = fill_in_html.substring(0, fill_in_html.search('%number%'));
          rigth_side = fill_in_html.substring(fill_in_html.search('%number%') + 8);
          fill_in_html = left_side + '<input type="number" onkeypress="block_fkeys(event)">' + rigth_side;
        }
        while(fill_in_html.includes('%text%')){
          left_side = fill_in_html.substring(0, fill_in_html.search('%text%'));
          rigth_side = fill_in_html.substring(fill_in_html.search('%text%') + 6);
          fill_in_html = left_side + '<input type="text"></textarea>' +  rigth_side;
        }
        while(fill_in_html.search(/%select:\[.*\]%/) >=0){
            var options_html = '';
            var options_text = fill_in_html.substring(fill_in_html.search(/%select:\[.*\]%/) + 9, fill_in_html.length);
            options_text = options_text.substring(0, options_text.search(/\]%/));
            var lengt_of_options_text = options_text.length;
            var options = [];
            do{
              options.push(options_text.substring(0, options_text.search(',')));
              options_text = options_text.substring(options_text.search(',') + 1);
            }while(options_text.search(',') >= 0);
            options.push(options_text);
          left_side = fill_in_html.substring(0, fill_in_html.search(/%select:\[.*\]%/)) + "<select><option disabled selected value style='display:none'></option>";
          rigth_side = "</select>" + fill_in_html.substring(fill_in_html.search(/%select:\[.*\]%/) + lengt_of_options_text + 11);
          options.forEach(function(option){
            options_html += "  <option value='" + option + "'>" + option + "</option>";
          });
          fill_in_html = left_side + options_html + rigth_side;
        }
      }
      else if(trial.fill_in_type == "number"){
        while(fill_in_html.includes('____')){
          left_side = fill_in_html.substring(0, fill_in_html.search('____'));
          rigth_side = fill_in_html.substring(fill_in_html.search('____') + 4);
          fill_in_html = left_side + '<input type="number" onkeypress="block_fkeys(event)">' + rigth_side;
        }
      }
      else if(trial.fill_in_type == "text"){
        while(fill_in_html.includes('____')){
          left_side = fill_in_html.substring(0, fill_in_html.search('____'));
          rigth_side = fill_in_html.substring(fill_in_html.search('____') + 4);
          fill_in_html = left_side + '<input type="text"></textarea>' + rigth_side;
        }
      }
      else if(trial.fill_in_type == "select"){
        while(fill_in_html.includes('____')){
          var options_html = '';
          var options_text = fill_in_html.substring(fill_in_html.search(/____\[/) + 5);
          options_text = options_text.substring(0, options_text.search(']'));
          var options = [];
          do{
            options.push(options_text.substring(0, options_text.search(',')));
            options_text = options_text.substring(options_text.search(',') + 1);
          }while(options_text.search(',') >= 0);
          var last_option = options_text;
          options.push(last_option);
          left_side = fill_in_html.substring(0, fill_in_html.search('____')) + "<select><option disabled selected value style='display:none'></option>";
          rigth_side = "</select>" + fill_in_html.substring(fill_in_html.substring(fill_in_html.search(/____\[/) + 5).search(last_option) + last_option.length + fill_in_html.search(/____\[/) + 5  + 1);
          fill_in_html = left_side;
          options.forEach(function(option){
            fill_in_html += "<option value='" + option + "'>" + option + "</option>"
          })
          fill_in_html += rigth_side;
        }
      }
    }
    html += '<div id="jspsych-fill-in-blanks-questions" class="jspsych-fill-in-blanks-questions">' + fill_in_html + '</div>';




    // add submit button
    html += '<button id="jspsych-fill-in-blanks-next" class="jspsych-btn jspsych-fill-in-blanks">'+trial.button_label+'</button>';
    html +='<div class="fail-message"></div>';

    display_element.innerHTML = html;

    display_element.querySelector('#jspsych-fill-in-blanks-next').addEventListener('click', function(e) {
      var matches = display_element.querySelector('div.jspsych-fill-in-blanks-questions').querySelectorAll('textarea, input, select');
      var all_filled = true;
      matches.forEach(function(match){
        if(match.value.length == 0){
          all_filled = false;
        }
      });
      if(all_filled){
        // measure response time
        var endTime = (new Date()).getTime();
        var response_time = endTime - startTime;

        // create object to hold responses
        var question_data = {};
        for(var index=0; index<matches.length; index++){
          var id = "Q" + index;
          var val = matches[index].value;
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
    }
    else{
      display_element.querySelector(".fail-message").innerHTML = '<span style="color: red;" class="required">Debes rellenar todos los campos.</span>';
    }
    });


    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
