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
      yes_or_no_slider: {
        type: jsPsych.plugins.parameterType.BOOLEAN,
        pretty_name: "Yes or no slider",
        default: false
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
      },
      show_for: {
        type: jsPsych.plugins.parameterType.INT,
        array: false,
        pretty_name: 'Show for',
        default: 1000
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    html = "<p id='prompt-container'<p style='position:absolute;top:auto;left:20%;width: 60%;'>" + trial.prompt + "</p>";

    html += "<div id='slider-container' style='position:absolute;width:40%;text-align:center;white-space: nowrap;top:20%;left:20%;'>";

    html += "<strong>" + trial.scale_question + "</strong><br>";
    html += "<strong style='text-align:right;display:inline-block'>" + trial.left_option + "</strong>";
    if (trial.yes_or_no_slider) {
      html += "<input type='range' id='slider'max='1' min='-1' list='tickmarks' style='width:60%;'></input>"
    } else {
      html += "<input type='range' id='slider' min='" + trial.scale_start + "' max='" + trial.scale_end + "' style='width:60%;'></input>"
    }
    html += "<strong style='text-align:left;display:inline-block'>" + trial.rigth_option + "</strong>";

    html += "</div>";

    display_element.innerHTML = html;

    var slider = document.getElementById('slider');

    var offset = (document.getElementById("prompt-container").offsetHeight / 2);
    slider_container = document.getElementById("slider-container");
    slider_container.style.top = "auto";
    slider_container.style.marginTop = (offset + 12) + "px";
    slider_container.style.width = document.getElementById("prompt-container").offsetWidth + "px";
    image = document.images[0];
    if (image) {
      image.style.top = -(image.parentElement.offsetWidth / image.width * image.height / 2) + "px";
      image.style.position = "absolute";
    } else {
      document.getElementById("prompt-container").style.marginTop = -slider_container.offsetHeight + "px";
    }

    document.onkeydown = function(event) {
      var key = event.keyCode;
      if (key == 37) {
        slider.stepDown();
      } else if (key == 39) {
        slider.stepUp();
      }
    }

    setTimeout(function() {
      document.onkeydown = function(event) {
        var key = event.keyCode;
        if (key == 37) {
          slider.stepDown();
        } else if (key == 39) {
          slider.stepUp();
        } else if (key == 40) {
          if (trial.yes_or_no_slider) {
            if (slider.value != 0) {
              endtrial();
            }
          } else {
            endtrial();
          }
        }
      }
    }, trial.show_for)

    function endtrial() {
      // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;
      console.log("trial_");
      console.log(trial);
      // save data
      var trialdata = {
        rt: response_time,
        response: slider.value,
        question: trial.scale_question,
      };

      display_element.innerHTML = '';
      document.onkeydown = undefined;
      // next trial
      jsPsych.finishTrial(trialdata);
    };

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
