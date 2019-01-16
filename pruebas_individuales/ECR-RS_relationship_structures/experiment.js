/**
@file
@name
 * The experiment 572324
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

var screen_escala_apego_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Escala apego</big></b><br />'+
    "Lee atentamente las siguientes instrucciones"+
    '</p>'],
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
           "Por favor conteste las siguientes preguntas sobre su <u>madre</u> o la persona que es su figura materna."+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Instructions_survey"}
};

var likert_scale = ["Si","En desacuerdo","No","No aplica"];

var survey01 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Me ayuda acudir a esta persona en momentos de adversidad<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_01"}
};

var survey02 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Suelo conversar de mis problemas y preocupaciones con esta persona<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey03 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Hablo más de mis cosas con esta persona<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey04 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Me resulta fácil depender emocionalmente de esta persona<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey05 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Me siento incómodo abriéndome con esta persona<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey06 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Prefiero no mostrarle a esta persona como en el fondo me siento<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey07 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Habitualmente me preocupa que yo no le importe realmente a esta persona<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_07"}
};

var survey08 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Temo que esta persona pueda abandonarme<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_08"}
};


var survey09 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Me preocupa que esta persona no se preocupe tanto por mí como yo me preocupo por ella<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_09"}
};

var surveyexplanation2={
    type: "instructions",
    pages: ["<div class = centerbox>"+
           "<p class = center-block-text>"+
           "Por favor conteste las siguientes preguntas sobre su <u>padre</u> o la persona que es su figura paterna."+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Instructions_survey"}
};

var survey10 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Me ayuda acudir a esta persona en momentos de adversidad.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_10"}
};

var survey11 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Suelo conversar de mis problemas y preocupaciones con esta persona.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_11"}
};

var survey12 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Hablo más de mis cosas con esta persona.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_12"}
};

var survey13 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Me resulta fácil depender emocionalmente de esta persona.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_13"}
};

var survey14 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Me siento incómodo abriéndome con esta persona.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_14"}
};

var survey15 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Prefiero no mostrarle a esta persona como en el fondo me siento<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_15"}
};

var survey16 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Habitualmente me preocupa que yo no le importe realmente a esta persona<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_16"}
};

var survey17 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Temo que esta persona pueda abandonarme.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_17"}
};

var survey18 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Me preocupa que esta persona no se preocupe tanto por mí como yo me preocupo por ella<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_18"}
};

var surveyexplanation3={
    type: "instructions",
    pages: ["<div class = centerbox>"+
           "<p class = center-block-text>"+
           "Por favor conteste las siguientes preguntas sobre su <u>novio/a o pareja</u> conyugal."+
           "<br>Si no se encuentra actualmente en una relación o matrimonio con alguien, responda las preguntas en relación con una ex pareja o una relación que le gustaría tener con alguien."+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Instructions_survey"}
};

var survey19 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Me ayuda acudir a esta persona en momentos de adversidad.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_19"}
};

var survey20 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Suelo conversar de mis problemas y preocupaciones con esta persona.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_20"}
};

var survey21 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Hablo más de mis cosas con esta persona.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_21"}
};

var survey22 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Me resulta fácil depender emocionalmente de esta persona.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_22"}
};

var survey23 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br /> Me siento incómodo abriéndome con esta persona.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_23"}
};

var survey24 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Prefiero no mostrarle a esta persona como en el fondo me siento<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_24"}
};

var survey25 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Habitualmente me preocupa que yo no le importe realmente a esta persona<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_25"}
};

var survey26 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Temo que esta persona pueda abandonarme.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_26"}
};

var survey27 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Me preocupa que esta persona no se preocupe tanto por mí como yo me preocupo por ella<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_27"}
};



var surveyexplanation4={
    type: "instructions",
    pages: ["<div class = centerbox>"+
           "<p class = center-block-text>"+
           "Por favor conteste las siguientes preguntas sobre su <u>mejor amigo/a</u>."+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Instructions_survey"}
};

var survey28 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Me ayuda acudir a esta persona en momentos de adversidad.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_28"}
};

var survey29 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Suelo conversar de mis problemas y preocupaciones con esta persona.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_29"}
};

var survey30 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Hablo más de mis cosas con esta persona.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_30"}
};

var survey31 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Me resulta fácil depender emocionalmente de esta persona.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_31"}
};

var survey32 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br /> Me siento incómodo abriéndome con esta persona.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_32"}
};

var survey33 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Prefiero no mostrarle a esta persona como en el fondo me siento.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_33"}
};

var survey34 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Habitualmente me preocupa que yo no le importe realmente a esta persona.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_34"}
};

var survey35 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Temo que esta persona pueda abandonarme.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_35"}
};

var survey36 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Me preocupa que esta persona no se preocupe tanto por mí como yo me preocupo por ella.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_36"}
};



// Creacion de timeline e inclusion de trials
escala_apego_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  escala_apego_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
escala_apego_experiment.push(screen_escala_apego_experiment);
escala_apego_experiment.push(surveyexplanation);
escala_apego_experiment.push(survey01);
escala_apego_experiment.push(survey02);
escala_apego_experiment.push(survey03);
escala_apego_experiment.push(survey04);
escala_apego_experiment.push(survey05);
escala_apego_experiment.push(survey06);
escala_apego_experiment.push(survey07);
escala_apego_experiment.push(survey08);
escala_apego_experiment.push(survey09);

escala_apego_experiment.push(surveyexplanation2);
escala_apego_experiment.push(survey10);
escala_apego_experiment.push(survey11);
escala_apego_experiment.push(survey12);
escala_apego_experiment.push(survey13);
escala_apego_experiment.push(survey14);
escala_apego_experiment.push(survey15);
escala_apego_experiment.push(survey16);
escala_apego_experiment.push(survey17);
escala_apego_experiment.push(survey18);

escala_apego_experiment.push(surveyexplanation3);
escala_apego_experiment.push(survey19);
escala_apego_experiment.push(survey20);
escala_apego_experiment.push(survey21);
escala_apego_experiment.push(survey22);
escala_apego_experiment.push(survey23);
escala_apego_experiment.push(survey24);
escala_apego_experiment.push(survey25);
escala_apego_experiment.push(survey26);
escala_apego_experiment.push(survey27);

escala_apego_experiment.push(surveyexplanation4);
escala_apego_experiment.push(survey28);
escala_apego_experiment.push(survey29);
escala_apego_experiment.push(survey30);
escala_apego_experiment.push(survey31);
escala_apego_experiment.push(survey32);
escala_apego_experiment.push(survey33);
escala_apego_experiment.push(survey34);
escala_apego_experiment.push(survey35);
escala_apego_experiment.push(survey36);
