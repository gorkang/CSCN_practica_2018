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

var screen_religiosidad_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Religiosidad</big></b><br />'+
    "Conteste las siguientes preguntas sobre fe religiosa seg&uacute;n la siguiente escala"+
    '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var likert_scale = ["Fuertemente en desacuerdo","En desacuerdo","De acuerdo","Fuertemente de acuerdo"];

var survey01 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Mi fe religiosa es extremadamente importante para m&iacute;.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_01"}
};

var survey0 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Rezo a diario.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey03 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Consireo que mi fe le otorga significado y prop&oacute;sito a mi vida.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey04 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Me considero activo en mi fe o iglesia.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey05 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Mi fe es parte importante de qui&eacute;n soy como persona.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey06 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Mi relaci&oacute;n con Dios es extremadamente importante para m&iacute;.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey07 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Disfruto estando al rededor de otras personas que comparten mi fe.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_07"}
};

var survey08 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Veo mi fe como una fuente de comodidad.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_08"}
};

var survey09 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Mi fe influye en muchas de mis decisiones.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_09"}
};



// Creacion de timeline e inclusion de trials
religiosidad_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  religiosidad_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
religiosidad_experiment.push(screen_religiosidad_experiment);

religiosidad_experiment.push(survey01);
religiosidad_experiment.push(survey02);
religiosidad_experiment.push(survey03);
religiosidad_experiment.push(survey04);
religiosidad_experiment.push(survey05);
religiosidad_experiment.push(survey06);
religiosidad_experiment.push(survey07);
religiosidad_experiment.push(survey08);
religiosidad_experiment.push(survey09);
