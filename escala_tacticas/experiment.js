/**
@file
@name
 * The experiment 111477
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

var screen_escala_tacticas_experiment = {
    type: 'instructions',
    pages: ['<p><left>escala_tacticas<br /></p>'],
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
           "Responda la siguiente pregunta"+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Instructions_survey"}
};

var answers = ["Hace menos de 1 año",
                "Hace mas de 1 año y menos de 2 años",
                "Hace mas de 2 años y menos de 5 años",
                "Hace mas de 5 años",
                "Nunca he tenido una relacion de pareja"];

var survey01 = {
  type: "survey-multi-choice",
  questions: [{prompt: "<div class='justified'><br />¿Hace cuánto tiempo fue su última relación de pareja que duró al menos 6 meses?<br /></div>", options: answers, required: true}],
  data: {trialid: "survey_02"}
};

var surveyexplanation2={
    type: "instructions",
    pages: ["<div class = centerbox>"+
           "<p class = center-block-text>"+
           "Por favor, marca cuantas veces, hiciste cada una de estas cosas durante el último año y cuantas veces las hizo tu pareja durante el último año. "+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Instructions_survey"}
};

var likert_scale = ["1 vez en el<br> ultimo año","2 veces en el<br> ultimo año","3 a 5 veces en<br> el ultimo año","6 a 10 veces en<br> el ultimo año","11 a 20 veces en<br> el ultimo año","mas de 20 veces <br>en el ultimo año","No en el ultimo año<br> pero ha ocurrido antes", "0 - Nunca ha<br> ocurrido esto"];

var survey02 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />He insultado a mi pareja.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey03 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi pareja me ha insultado.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey04 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Lancé algo a mi pareja que pudo hacerle daño.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey05 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi pareja me ha hecho esto.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey06 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Le torcí el brazo o tiré del pelo a mi pareja.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey07 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi pareja me ha hecho esto<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey08 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Aparté o empujé a mi pareja.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey09 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi pareja me apartó o empujó.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey10 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />He utilizado un cuchillo o un arma con mi pareja.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey12 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi pareja ha hecho esto.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey13 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Le he dicho a mi pareja, feo/a o gordo/a.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey14 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi pareja me ha dicho, feo/a o gordo/a.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey15 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Le he pegado un puñetazo o he golpeado a mi pareja con algo que podría hacerle daño.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey16 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi pareja me ha hecho esto.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey17 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />He destruido algo perteneciente a mi pareja.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey18 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi pareja me ha hecho esto.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey19 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />He estrangulado a mi pareja.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey20 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi pareja me ha hecho esto.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey21 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Le he gritado a mi pareja.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};
var survey22 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi pareja me ha gritado.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey23 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Golpeé a mi pareja contra la pared.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey24 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi pareja me ha hecho esto.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey11 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Le he dado una paliza a mi pareja<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey25 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi pareja ha hecho esto conmigo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey26 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />He tironeado, agarrado con fuerza a mi pareja.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey27 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi pareja me ha hecho esto.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey28 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />He salido furioso/a de la habitación o la casa durante una pelea.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey29 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi pareja me ha hecho esto.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey30 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Le he dado una cachetada a mi pareja<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey31 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi pareja me ha hecho esto.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};
var survey32 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Quemé con agua hirviendo a mi pareja a propósito.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey33 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi pareja me ha hecho esto.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey34 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Le he dicho a mi pareja que es un pésimo amante.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey35 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi pareja me ha hecho esto.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey36 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Hice algo solo para molestar a mi pareja.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey37 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi pareja me ha hecho esto.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey38 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Amenacé con golpear o tirarle algo a mi pareja<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey39 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi pareja me ha hecho esto.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey40 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Le he dado patadas a mi pareja.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey41 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi pareja me ha hecho esto.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
}


// Creacion de timeline e inclusion de trials
escala_tacticas_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  escala_tacticas_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
escala_tacticas_experiment.push(screen_escala_tacticas_experiment);
escala_tacticas_experiment.push(surveyexplanation);
escala_tacticas_experiment.push(survey01);
escala_tacticas_experiment.push(surveyexplanation2);
escala_tacticas_experiment.push(survey02);
escala_tacticas_experiment.push(survey03);
escala_tacticas_experiment.push(survey04);
escala_tacticas_experiment.push(survey05);
escala_tacticas_experiment.push(survey06);
escala_tacticas_experiment.push(survey07);
escala_tacticas_experiment.push(survey08);
escala_tacticas_experiment.push(survey09);
escala_tacticas_experiment.push(survey10);

escala_tacticas_experiment.push(survey12);
escala_tacticas_experiment.push(survey13);
escala_tacticas_experiment.push(survey14);
escala_tacticas_experiment.push(survey15);
escala_tacticas_experiment.push(survey16);
escala_tacticas_experiment.push(survey17);
escala_tacticas_experiment.push(survey18);
escala_tacticas_experiment.push(survey19);
escala_tacticas_experiment.push(survey20);
escala_tacticas_experiment.push(survey21);
escala_tacticas_experiment.push(survey22);
escala_tacticas_experiment.push(survey23);
escala_tacticas_experiment.push(survey24);

escala_tacticas_experiment.push(survey11);//this is fine, it was a mistake :c
escala_tacticas_experiment.push(survey25);
escala_tacticas_experiment.push(survey26);
escala_tacticas_experiment.push(survey27);
escala_tacticas_experiment.push(survey28);
escala_tacticas_experiment.push(survey29);
escala_tacticas_experiment.push(survey30);
escala_tacticas_experiment.push(survey31);
escala_tacticas_experiment.push(survey32);
escala_tacticas_experiment.push(survey33);
escala_tacticas_experiment.push(survey34);
escala_tacticas_experiment.push(survey35);
escala_tacticas_experiment.push(survey36);
escala_tacticas_experiment.push(survey37);
escala_tacticas_experiment.push(survey38);
escala_tacticas_experiment.push(survey39);
escala_tacticas_experiment.push(survey40);
escala_tacticas_experiment.push(survey41);
