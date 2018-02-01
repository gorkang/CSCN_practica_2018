/**
@file
@name
 * The experiment 472983
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

var screen_iri_experiment = {
    type: 'instructions',
    pages: ['<p><left>iri<br /></p>'],
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
           "Las siguientes declaraciones indagan sobre sus pensamientos y sentimientos en una variedad de situaciones. Para cada ítem, indique cuán bien la declaración lo/a describe."+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Instructions_survey"}
};

var likert_scale = ["A <br> <p style='font-size:10px'>No me <br>describe bien</p> ","B","C","D","E <br> <p style='font-size:10px'>Me describe <br> muy bien</p>"];

var survey02 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Con cierta frecuencia sueño despierto y fantaseo sobre cosas que podrían pasarme .<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey03 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />A menudo tengo sentimientos de compasión y preocupación hacia gente menos afortunada que yo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey04 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />A veces encuentro difícil ver las cosas desde el punto de vista de otros.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey05 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />A veces no me dan mucha lástima otras personas cuando tienen problemas<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey06 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Realmente me siento “metido/a” en los sentimientos de los personajes de una novela.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey07 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />En situaciones de emergencia, me siento aprensivo e incómodo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey08 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Generalmente soy objetivo cuando veo una película o una obra de teatro y no me suelo “meter” completamente en ella.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey09 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />En un desacuerdo con otros, trato de ver las cosas desde el punto de vista de los demás antes de tomar una decisión.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey10 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando veo que se aprovechan de alguien, siento necesidad de protegerle.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey11 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />A veces me siento indefenso/a cuando estoy en medio de una situación muy emotiva.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey12 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />A veces intento comprender mejor a mis amigos imaginando cómo ven las cosas desde su perspectiva.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey13 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Es raro que yo me “meta” mucho en un buen libro o en una película.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey14 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando veo que alguien se hace daño, tiendo a permanecer tranquilo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey15 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Las desgracias de otros no suelen angustiarme mucho.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey16 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Si estoy seguro/a que tengo la razón en algo, no pierdo mucho tiempo escuchando los argumentos de otras personas.</text><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey17 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Después de ver una obra de teatro o una película, me siento como si fuese uno de los protagonistas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey18 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me asusta estar en una situación emocional tensa.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey19 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando veo que alguien está siendo tratado injustamente, no suelo sentir mucha pena por él.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey20 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Generalmente soy bastante efectivo afrontando emergencias.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey21 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />A menudo me conmueven las cosas que veo que pasan.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey22 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Creo que todas las cuestiones se pueden ver desde dos perspectivas e intento considerar ambas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey23 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me describiría como una persona bastante sensible.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey24 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando veo una buena película, puedo ponerme muy fácilmente en el lugar del protagonista.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey25 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tiendo a perder el control en las emergencias.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey26 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando estoy molesto con alguien, generalmente trato de “ponerme en su pellejo” durante un tiempo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey27 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando estoy leyendo una novela o historia interesante, imagino cómo me sentiría si me estuviera pasando lo que ocurre en la historia.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey28 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'>Cuando veo a alguien en una emergencia que necesita ayuda, pierdo el control.<br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey29 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Antes de criticar a alguien, intento imaginar cómo me sentiría yo si estuviera en su lugar.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};



// Creacion de timeline e inclusion de trials
iri_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  iri_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
iri_experiment.push(screen_iri_experiment);
iri_experiment.push(surveyexplanation);
iri_experiment.push(survey02);
iri_experiment.push(survey03);
iri_experiment.push(survey04);
iri_experiment.push(survey05);
iri_experiment.push(survey06);
iri_experiment.push(survey07);
iri_experiment.push(survey08);
iri_experiment.push(survey09);
iri_experiment.push(survey10);
iri_experiment.push(survey11);
iri_experiment.push(survey12);
iri_experiment.push(survey13);
iri_experiment.push(survey14);
iri_experiment.push(survey15);
iri_experiment.push(survey16);
iri_experiment.push(survey17);
iri_experiment.push(survey18);
iri_experiment.push(survey19);
iri_experiment.push(survey20);
iri_experiment.push(survey21);
iri_experiment.push(survey22);
iri_experiment.push(survey23);
iri_experiment.push(survey24);
iri_experiment.push(survey25);
iri_experiment.push(survey26);
iri_experiment.push(survey27);
iri_experiment.push(survey28);
iri_experiment.push(survey29);
