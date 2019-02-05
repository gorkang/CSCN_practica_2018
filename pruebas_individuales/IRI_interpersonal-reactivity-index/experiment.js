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

var screen_IRI_interpersonal_reactivity_index_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>IRI</big></b><br />'+
    "Las siguientes declaraciones indagan sobre sus pensamientos y sentimientos en una variedad de situaciones. Para cada ítem, indique cuán bien la declaración lo/a describe."+
    '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var likert_scale = ['<center><p style="font-size:13px">No me</br>describe bien</p></center>', '<center><span style="display:inline-block; width: 60px;"></span></center>', '<center><span style="display:inline-block; width: 60px;"></span></center>', '<center><span style="display:inline-block; width: 60px;"></span></center>', '<center><p style="font-size:13px">Me describe</br>muy bien</p></center>'];

var survey01 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Con cierta frecuencia sueño despierto y fantaseo sobre cosas que podrían pasarme .<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_01"}
};

var survey02 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />A menudo tengo sentimientos de compasión y preocupación hacia gente menos afortunada que yo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey03 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />A veces encuentro difícil ver las cosas desde el punto de vista de otros.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey04 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />A veces no me dan mucha lástima otras personas cuando tienen problemas<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey05 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Realmente me siento “metido/a” en los sentimientos de los personajes de una novela.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey06 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />En situaciones de emergencia, me siento aprensivo e incómodo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey07 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Generalmente soy objetivo cuando veo una película o una obra de teatro y no me suelo “meter” completamente en ella.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_07"}
};

var survey08 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />En un desacuerdo con otros, trato de ver las cosas desde el punto de vista de los demás antes de tomar una decisión.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_08"}
};

var survey09 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Cuando veo que se aprovechan de alguien, siento necesidad de protegerle.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_09"}
};

var survey10 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />A veces me siento indefenso/a cuando estoy en medio de una situación muy emotiva.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_10"}
};

var survey11 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />A veces intento comprender mejor a mis amigos imaginando cómo ven las cosas desde su perspectiva.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_11"}
};

var survey12 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Es raro que yo me “meta” mucho en un buen libro o en una película.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_12"}
};

var survey13 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Cuando veo que alguien se hace daño, tiendo a permanecer tranquilo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_13"}
};

var survey14 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Las desgracias de otros no suelen angustiarme mucho.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_14"}
};

var survey15 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Si estoy seguro/a que tengo la razón en algo, no pierdo mucho tiempo escuchando los argumentos de otras personas.</text><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_15"}
};

var survey16 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Después de ver una obra de teatro o una película, me siento como si fuese uno de los protagonistas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_16"}
};

var survey17 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Me asusta estar en una situación emocional tensa.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_17"}
};

var survey18 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Cuando veo que alguien está siendo tratado injustamente, no suelo sentir mucha pena por él.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_18"}
};

var survey19 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Generalmente soy bastante efectivo afrontando emergencias.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_19"}
};

var survey20 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />A menudo me conmueven las cosas que veo que pasan.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_20"}
};

var survey21 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Creo que todas las cuestiones se pueden ver desde dos perspectivas e intento considerar ambas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_21"}
};

var survey22 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Me describiría como una persona bastante sensible.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_22"}
};

var survey23 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Cuando veo una buena película, puedo ponerme muy fácilmente en el lugar del protagonista.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_23"}
};

var survey24 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Tiendo a perder el control en las emergencias.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_24"}
};

var survey25 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Cuando estoy molesto con alguien, generalmente trato de “ponerme en su pellejo” durante un tiempo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_25"}
};

var survey26 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Cuando estoy leyendo una novela o historia interesante, imagino cómo me sentiría si me estuviera pasando lo que ocurre en la historia.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_26"}
};

var survey27 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'>Cuando veo a alguien en una emergencia que necesita ayuda, pierdo el control.<br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_27"}
};

var survey28 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Antes de criticar a alguien, intento imaginar cómo me sentiría yo si estuviera en su lugar.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_28"}
};



// Creacion de timeline e inclusion de trials
IRI_interpersonal_reactivity_index_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  IRI_interpersonal_reactivity_index_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
IRI_interpersonal_reactivity_index_experiment.push(screen_IRI_interpersonal_reactivity_index_experiment);

IRI_interpersonal_reactivity_index_experiment.push(survey01);
IRI_interpersonal_reactivity_index_experiment.push(survey02);
IRI_interpersonal_reactivity_index_experiment.push(survey03);
IRI_interpersonal_reactivity_index_experiment.push(survey04);
IRI_interpersonal_reactivity_index_experiment.push(survey05);
IRI_interpersonal_reactivity_index_experiment.push(survey06);
IRI_interpersonal_reactivity_index_experiment.push(survey07);
IRI_interpersonal_reactivity_index_experiment.push(survey08);
IRI_interpersonal_reactivity_index_experiment.push(survey09);
IRI_interpersonal_reactivity_index_experiment.push(survey10);
IRI_interpersonal_reactivity_index_experiment.push(survey11);
IRI_interpersonal_reactivity_index_experiment.push(survey12);
IRI_interpersonal_reactivity_index_experiment.push(survey13);
IRI_interpersonal_reactivity_index_experiment.push(survey14);
IRI_interpersonal_reactivity_index_experiment.push(survey15);
IRI_interpersonal_reactivity_index_experiment.push(survey16);
IRI_interpersonal_reactivity_index_experiment.push(survey17);
IRI_interpersonal_reactivity_index_experiment.push(survey18);
IRI_interpersonal_reactivity_index_experiment.push(survey19);
IRI_interpersonal_reactivity_index_experiment.push(survey20);
IRI_interpersonal_reactivity_index_experiment.push(survey21);
IRI_interpersonal_reactivity_index_experiment.push(survey22);
IRI_interpersonal_reactivity_index_experiment.push(survey23);
IRI_interpersonal_reactivity_index_experiment.push(survey24);
IRI_interpersonal_reactivity_index_experiment.push(survey25);
IRI_interpersonal_reactivity_index_experiment.push(survey26);
IRI_interpersonal_reactivity_index_experiment.push(survey27);
IRI_interpersonal_reactivity_index_experiment.push(survey28);
