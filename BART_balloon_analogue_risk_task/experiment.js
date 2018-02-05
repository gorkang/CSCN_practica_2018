/**
@file
@name
 * The experiment 279271
 *
 * CSCN lab
 *
 */

/**
Blocks f1 and f5
@name block_fkeys
@function
@param {event}  event

*/

onkeydown = function block_fkeys(event){
    var x = event.which || event.keyCode;
    if(x == 112 || x == 116){
        console.log("Blocked key");
        event.preventDefault();
        return false;
    }else{
        return;
    }
}

var screen_BART_balloon_analogue_risk_task_experiment = {
    type: 'instructions',
    pages: ['<p><left>BART_balloon_analogue_risk_task<br /></p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

// Inicio prueba
var surveyexplanation={
    type: "instructions",
    pages: ["<div class = centerbox>"+
           "<p class = center-block-text>"+
           "Conteste las siguientes preguntas sobre fe religiosa seg&uacute;n la siguiente escala"+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Instructions_survey"}
};

var likert_scale = ["Fuertemente en desacuerdo","En desacuerdo","De acuerdo","Fuertemente de acuerdo"];

var survey02 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi fe religiosa es extremadamente importante para m&iacute;.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey03 = {
  type: "plugin-bart",
};


// Creacion de timeline e inclusion de trials
BART_balloon_analogue_risk_task_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  BART_balloon_analogue_risk_task_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
BART_balloon_analogue_risk_task_experiment.push(screen_BART_balloon_analogue_risk_task_experiment);
BART_balloon_analogue_risk_task_experiment.push(surveyexplanation);
BART_balloon_analogue_risk_task_experiment.push(survey02);
BART_balloon_analogue_risk_task_experiment.push(survey03);
BART_balloon_analogue_risk_task_experiment.push(surveyexplanation);
