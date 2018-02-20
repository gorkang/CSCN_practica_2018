/*
 * Example plugin template
 */

jsPsych.plugins["slider-with-options"] = (function() {

  var plugin = {};

  plugin.info = {
    name: "slider-with-options",
    parameters: {
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        array: false,
        pretty_name: 'Prompt'
      },
      scale_question: {
        type: jsPsych.plugins.parameterType.STRING,
        array: false,
        pretty_name: 'Scale question',
        default: '¿How much?'
      },
      left_option: {
        type: jsPsych.plugins.parameterType.STRING,
        array: false,
        pretty_name: 'Left option',
        default: 'Less'
      },
      rigth_option: {
        type: jsPsych.plugins.parameterType.STRING,
        array: false,
        pretty_name: 'Rigth option',
        default: 'More'
      },
      scale_start: {
        type: jsPsych.plugins.parameterType.INT,
        array: false,
        pretty_name: 'Left side of the scale',
        default: -9
      },
      scale_end: {
        type: jsPsych.plugins.parameterType.INT,
        array: false,
        pretty_name: 'Rigth side of the scale',
        default: 9
      },
      scale_initial_potition: {
        type: jsPsych.plugins.parameterType.INT,
        array: false,
        pretty_name: 'Selected level',
        default: 0
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    html = "<p>" + trial.prompt + "</p>";

    html += "<div id='slider-container' style='position:absolute;width:40%;'>";

    html += "<strong style='width:19%;text-align:right;display:inline-block'>" + trial.left_option + "</strong>";
    html += "<input type='range' id='slider' min='" + trial.scale_start + "' max='" + trial.scale_end + "' style='width:60%;'></input>"
    html += "<strong style='width:19%;text-align:left;display:inline-block'>" + trial.rigth_option + "</strong>";

    html += "</div>";

    display_element.innerHTML = html;

    var slider = document.getElementById('slider');
    document.onkeydown = function(event){
      var key = event.keyCode;
      if(key == 37){
        slider.stepDown();
      }else if(key == 39){
        slider.stepUp();
      }else if(key == 40){
        endtrial();
      }
    }

    function endtrial() {
      // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // save data
      var trialdata = {
        response: document.getElementById('slider').value,
        rt: response_time
      };

      display_element.innerHTML = '';

      // next trial
      jsPsych.finishTrial(trialdata);
    };

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
