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

var screen_GDMS_estilo_toma_decisiones_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>GDMS</big></b><br />'+
    "Conteste las siguientes preguntas sobre decision e intuicion seg&uacute;n la siguiente escala"+
    '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var likert_scale = ["1 <br><p style='font-size:13px'> strongly disagree</p>","2","3","4", "5 <br> <p style='font-size:13px'> strongly agree</p>"];

var survey02 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />I double-check my information sources to be sure I have the right facts before making decisions.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey03 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />I make decisions in a logical and systematic way<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey04 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />My decision making requires careful thought.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey05 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />When making a decision, I consider various options in terms of a specific goal.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey06 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />When making decisions, I rely upon my instincts.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey07 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />When I make decisions, I tend to rely on my intuition.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey08 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />I generally make decisions that feel right to me.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey09 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />When I make a decision, it is more important for me to feel the decision is right than to have a rational reason for it.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey10 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />When I make a decision, I trust my inner feelings and reactions.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey11 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />I often need the assistance of other people when making important decisions.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey12 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />I rarely make important decisions without consulting other people.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey13 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />If I have the support of others, it is easier for me to make important decisions.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey14 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />I use the advice of other people in making my important decisions.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey15 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />I like to have someone to steer me in the right direction when I am faced with important decisions.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey16 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />I avoid making important decisions until the pressure is on.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey17 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />I postpone decision making whenever possible.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey18 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />I often procrastinate when it comes to making important decisions.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey19 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />I generally make important decisions at the last minute<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey20 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />I put of making many decisions beacuse thinking about them makes me uneasy.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey21 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />I generally make snap decisions.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey22 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />I often make decisions on the spur of the moment.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey23 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />I make quick decisions.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey24 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />I often make impulsive decisions.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey25 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />When making decisions, I do what seems natural at the moment.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

//25
// Creacion de timeline e inclusion de trials
GDMS_estilo_toma_decisiones_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  GDMS_estilo_toma_decisiones_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
GDMS_estilo_toma_decisiones_experiment.push(screen_GDMS_estilo_toma_decisiones_experiment);

GDMS_estilo_toma_decisiones_experiment.push(survey02);
GDMS_estilo_toma_decisiones_experiment.push(survey03);
GDMS_estilo_toma_decisiones_experiment.push(survey04);
GDMS_estilo_toma_decisiones_experiment.push(survey05);
GDMS_estilo_toma_decisiones_experiment.push(survey06);
GDMS_estilo_toma_decisiones_experiment.push(survey07);
GDMS_estilo_toma_decisiones_experiment.push(survey08);
GDMS_estilo_toma_decisiones_experiment.push(survey09);
GDMS_estilo_toma_decisiones_experiment.push(survey10);
GDMS_estilo_toma_decisiones_experiment.push(survey11);
GDMS_estilo_toma_decisiones_experiment.push(survey12);
GDMS_estilo_toma_decisiones_experiment.push(survey13);
GDMS_estilo_toma_decisiones_experiment.push(survey14);
GDMS_estilo_toma_decisiones_experiment.push(survey15);
GDMS_estilo_toma_decisiones_experiment.push(survey16);
GDMS_estilo_toma_decisiones_experiment.push(survey17);
GDMS_estilo_toma_decisiones_experiment.push(survey18);
GDMS_estilo_toma_decisiones_experiment.push(survey19);
GDMS_estilo_toma_decisiones_experiment.push(survey20);
GDMS_estilo_toma_decisiones_experiment.push(survey21);
GDMS_estilo_toma_decisiones_experiment.push(survey22);
GDMS_estilo_toma_decisiones_experiment.push(survey23);
GDMS_estilo_toma_decisiones_experiment.push(survey24);
GDMS_estilo_toma_decisiones_experiment.push(survey25);
