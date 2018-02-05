/**
@file
@name
 * The experiment 387277
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

var screen_STAI_state_trait_anxiety_inventory_experiment = {
    type: 'instructions',
    pages: ['<p><left>STAI_state_trait_anxiety_inventory<br /></p>'],
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
           "Apareceran algunas expresiones que la gente usa para describirse a si misma. Lea cada frase y marque el casillero que indique como se siente ahora mismo o sea EN ESTE MOMENTO. No hay respuestas buenas o malas. No utilice mucho tiempo en cada frase, pero trate de dar la respuesta que mejor describa SUS SENTIMIENTOS AHORA ."+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Instructions_survey"}
};

var likert_scale = ["Nada","Un poco","Bastante","Mucho"];

var survey02 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento calmado/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey03 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento seguro/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey04 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Estoy tenso/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey05 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento disgustado/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey06 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me  siento  a  “mis  anchas”<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey07 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento alterado/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey08 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />En este momento estoy preocupado/a por algún posible problema<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey09 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento satisfecho/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey10 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento asustado/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey11 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento cómodo/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey12 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tengo confianza en mi mismo<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey13 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento agitado/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey14 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento indeciso/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey15 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento tranquilo/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey16 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me  siento  “a  gusto”<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey17 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Estoy preocupado/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey18 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento aturdido/a (confundido/a)<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey19 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento equilibrado/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey20 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento bien<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var surveyexplanation2={
    type: "instructions",
    pages: ["<div class = centerbox>"+
           "<p class = center-block-text>"+
           "Apareceran algunas expresiones que la gente usa para describirse a si misma. Lea cada frase y marque el casillero que indique como se siente GENERALMENTE. No hay respuestas buenas o malas. No utilice mucho tiempo en cada frase, pero trate de dar la respuesta que mejor describa COMO SE SIENTE GENERALMENTE."+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Instructions_survey"}
};

var survey21 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento calmado/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey22 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento seguro/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey23 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Estoy tenso/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey24 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento disgustado/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey25 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me  siento  a  “mis  anchas”<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey26 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento alterado/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey27 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />En este momento estoy preocupado/a por algún posible problema<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey28 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento satisfecho/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey29 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento asustado/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey30 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento cómodo/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey31 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tengo confianza en mi mismo/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey32 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento nervioso/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey33 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento agitado/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey34 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento indeciso/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey35 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento tranquilo/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey36 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me  siento  “a  gusto”<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey37 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Estoy preocupado/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey38 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento aturdido/a (confundido/a)<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey39 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento equilibrado/a<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey40 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento bien<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};


// Creacion de timeline e inclusion de trials
STAI_state_trait_anxiety_inventory_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  STAI_state_trait_anxiety_inventory_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
STAI_state_trait_anxiety_inventory_experiment.push(screen_STAI_state_trait_anxiety_inventory_experiment);
STAI_state_trait_anxiety_inventory_experiment.push(surveyexplanation);
STAI_state_trait_anxiety_inventory_experiment.push(survey02);
STAI_state_trait_anxiety_inventory_experiment.push(survey03);
STAI_state_trait_anxiety_inventory_experiment.push(survey04);
STAI_state_trait_anxiety_inventory_experiment.push(survey05);
STAI_state_trait_anxiety_inventory_experiment.push(survey06);
STAI_state_trait_anxiety_inventory_experiment.push(survey07);
STAI_state_trait_anxiety_inventory_experiment.push(survey08);
STAI_state_trait_anxiety_inventory_experiment.push(survey09);
STAI_state_trait_anxiety_inventory_experiment.push(survey10);
STAI_state_trait_anxiety_inventory_experiment.push(survey11);
STAI_state_trait_anxiety_inventory_experiment.push(survey12);
STAI_state_trait_anxiety_inventory_experiment.push(survey13);
STAI_state_trait_anxiety_inventory_experiment.push(survey14);
STAI_state_trait_anxiety_inventory_experiment.push(survey15);
STAI_state_trait_anxiety_inventory_experiment.push(survey16);
STAI_state_trait_anxiety_inventory_experiment.push(survey17);
STAI_state_trait_anxiety_inventory_experiment.push(survey18);
STAI_state_trait_anxiety_inventory_experiment.push(survey19);
STAI_state_trait_anxiety_inventory_experiment.push(survey20);

STAI_state_trait_anxiety_inventory_experiment.push(surveyexplanation2);
STAI_state_trait_anxiety_inventory_experiment.push(survey21);
STAI_state_trait_anxiety_inventory_experiment.push(survey22);
STAI_state_trait_anxiety_inventory_experiment.push(survey23);
STAI_state_trait_anxiety_inventory_experiment.push(survey24);
STAI_state_trait_anxiety_inventory_experiment.push(survey25);
STAI_state_trait_anxiety_inventory_experiment.push(survey26);
STAI_state_trait_anxiety_inventory_experiment.push(survey27);
STAI_state_trait_anxiety_inventory_experiment.push(survey28);
STAI_state_trait_anxiety_inventory_experiment.push(survey29);
STAI_state_trait_anxiety_inventory_experiment.push(survey30);
STAI_state_trait_anxiety_inventory_experiment.push(survey31);
STAI_state_trait_anxiety_inventory_experiment.push(survey32);
STAI_state_trait_anxiety_inventory_experiment.push(survey33);
STAI_state_trait_anxiety_inventory_experiment.push(survey34);
STAI_state_trait_anxiety_inventory_experiment.push(survey35);
STAI_state_trait_anxiety_inventory_experiment.push(survey36);
STAI_state_trait_anxiety_inventory_experiment.push(survey37);
STAI_state_trait_anxiety_inventory_experiment.push(survey38);
STAI_state_trait_anxiety_inventory_experiment.push(survey39);
STAI_state_trait_anxiety_inventory_experiment.push(survey40);
