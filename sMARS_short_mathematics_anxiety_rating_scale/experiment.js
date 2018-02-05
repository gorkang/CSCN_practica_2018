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

var screen_sMARS_short_mathematics_anxiety_rating_scale_experiment = {
    type: 'instructions',
    pages: ['<p><left>sMARS_short_mathematics_anxiety_rating_scale<br /></p>'],
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
           "Los items de este cuestionario se refieren a experiencias que pueden causar tension o aprension. Para cada item señala cuan ansioso/a te pondria cada una de ellas. Responde forma rapida, pero asegurate de pensar bien la respuesta"+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Instructions_survey"}
};

var likert_scale = ["Nada","Muy poco","Algo","Bastante", "Mucho"];

var survey02 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Estudiar para un examen de matemáticas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey03 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Examinarme de matemáticas en las pruebas de acceso a la universidad.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey04 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Hacer un control de matemáticas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey05 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Hacer el examen final de matemáticas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey06 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Coger el libro de matemáticas para empezar a hacer los deberes.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey07 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tener deberes con muchos problemas difíciles que han de entregarse en la próxima clase.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey08 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Pensar en el examen de matemáticas que tendré dentro de 1 semana.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey09 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Pensar en el examen de matemáticas que tendré en 1 día.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey10 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Pensar en el examen de matemáticas que tendré en 1 hora.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey11 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Darme cuenta de que se debe hacer un cierto número de clases de matemáticas para cumplir con los requisitos académicos.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey12 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Coger un libro de matemáticas para comenzar una lectura difícil que se me ha pedido.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey13 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Recibir por e-mail la nota final de matemáticas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey14 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Abrir un libro de matemáticas o de estadística y ver una página llena de problemas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey15 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Prepararme para estudiar para un examen de matemáticas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey16 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tener que hacer un examen sorpresa de matemáticas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey17 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Revisar el ticket de compra después de haber pagado.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey18 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Que me den una serie de problemas numéricos que incluyan sumas para que los resuelva con papel y lápiz.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey19 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Que me den a resolver una serie de restas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey20 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Que me den a resolver una serie de multiplicaciones.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey21 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Que me den a resolver una serie de divisiones.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey22 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Comprar un libro de matemáticas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey23 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Ver al profesor resolviendo una ecuación algebraica en la pizarra.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey24 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Matricularme en un curso de matemáticas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey25 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Escuchar a otro alumno que explica una fórmula matemática.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey26 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Entrar en una clase de matemáticas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};



// Creacion de timeline e inclusion de trials
sMARS_short_mathematics_anxiety_rating_scale_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  sMARS_short_mathematics_anxiety_rating_scale_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(screen_sMARS_short_mathematics_anxiety_rating_scale_experiment);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(surveyexplanation);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey02);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey03);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey04);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey05);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey06);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey07);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey08);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey09);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey10);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey11);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey12);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey13);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey14);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey15);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey16);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey17);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey18);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey19);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey20);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey21);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey22);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey23);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey24);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey25);
sMARS_short_mathematics_anxiety_rating_scale_experiment.push(survey26);
