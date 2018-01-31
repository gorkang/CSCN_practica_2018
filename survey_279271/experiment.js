/**
@file
@name
 * The experiment 146714
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

var screen_survey_279271_experiment = {
    type: 'instructions',
    pages: ['<p><left>survey 279271<br /></p>'],
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
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Rezo a diario.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey04 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Consireo que mi fe le otorga significado y prop&oacute;sito a mi vida.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey05 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me considero activo en mi fe o iglesia.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey06 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi fe es parte importante de qui&eacute;n soy como persona.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey07 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi relaci&oacute;n con Dios es extremadamente importante para m&iacute;.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey08 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Disfruto estando al rededor de otras personas que comparten mi fe.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey09 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Veo mi fe como una fuente de comodidad.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey10 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi fe influye en muchas de mis decisiones.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};



// Creacion de timeline e inclusion de trials
survey_279271_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  survey_279271_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
survey_279271_experiment.push(screen_survey_279271_experiment);
survey_279271_experiment.push(surveyexplanation);
survey_279271_experiment.push(survey02);
survey_279271_experiment.push(survey03);
survey_279271_experiment.push(survey04);
survey_279271_experiment.push(survey05);
survey_279271_experiment.push(survey06);
survey_279271_experiment.push(survey07);
survey_279271_experiment.push(survey08);
survey_279271_experiment.push(survey09);
survey_279271_experiment.push(survey10);
