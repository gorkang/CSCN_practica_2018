/**
@file
@name
 * The experiment 179339
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

var screen_interocepcion_experiment = {
    type: 'instructions',
    pages: ['<p><left>interocepcion<br /></p>'],
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
           "A continuación se encuentra una lista de enunciados. Por favor indique cuán a menudo dichos enunciados se aplican a usted en su vida cotidiana."+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Instructions_survey"}
};

var likert_scale = ["0 <br><p style='font-size:13px'>Nunca</p>","1","2","3","4","5 <br> <p style='font-size:13px'>Siempre</p>"];

var survey02 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey03 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey04 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey05 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey06 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey07 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey08 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey09 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey10 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey11 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey12 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey13 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey14 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey15 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey16 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey17 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey18 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey19 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey20 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey21 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey22 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey23 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey24 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey25 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey26 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey27 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey28 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey29 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey30 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey31 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey32 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey33 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};



// Creacion de timeline e inclusion de trials
interocepcion_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  interocepcion_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
interocepcion_experiment.push(screen_interocepcion_experiment);
interocepcion_experiment.push(surveyexplanation);
interocepcion_experiment.push(survey02);
interocepcion_experiment.push(survey03);
interocepcion_experiment.push(survey04);
interocepcion_experiment.push(survey05);
interocepcion_experiment.push(survey06);
interocepcion_experiment.push(survey07);
interocepcion_experiment.push(survey08);
interocepcion_experiment.push(survey09);
interocepcion_experiment.push(survey10);
interocepcion_experiment.push(survey11);
interocepcion_experiment.push(survey12);
interocepcion_experiment.push(survey13);
interocepcion_experiment.push(survey14);
interocepcion_experiment.push(survey15);
interocepcion_experiment.push(survey16);
interocepcion_experiment.push(survey17);
interocepcion_experiment.push(survey18);
interocepcion_experiment.push(survey19);
interocepcion_experiment.push(survey20);
interocepcion_experiment.push(survey21);
interocepcion_experiment.push(survey22);
interocepcion_experiment.push(survey23);
interocepcion_experiment.push(survey24);
interocepcion_experiment.push(survey25);
interocepcion_experiment.push(survey26);
interocepcion_experiment.push(survey27);
interocepcion_experiment.push(survey28);
interocepcion_experiment.push(survey29);
interocepcion_experiment.push(survey30);
interocepcion_experiment.push(survey31);
interocepcion_experiment.push(survey32);
interocepcion_experiment.push(survey33);
