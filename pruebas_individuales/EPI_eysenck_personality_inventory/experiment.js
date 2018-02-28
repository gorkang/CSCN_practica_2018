/**
@file
@name
 * The experiment 364929
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

var screen_EPI_eysenck_personality_inventory_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>EPI</big></b><br />'+
    "Trabaje rápidamente y no piense demasiado en el significado exacto de las preguntas"+
    '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

// Inicio prueba

var likert_scale = ["Casi nunca","Poco","Más o menos","Seguido","Casi siempre"];

var survey01 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Es una persona conversadora?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_01"}
};

var survey02 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Su estado de ánimo sufre altibajos con frecuencia?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey03 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Es usted una persona más bien animada o vital?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey04 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Se siente a veces desdichado sin motivo?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey05 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Tiene muchos amigos?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey06 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Es una persona irritable?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey07 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Habitualmente, es capaz de liberarse y disfrutar en una fiesta animada?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_07"}
};

var survey08 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Se siente fácilmente herido en sus sentimientos?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_08"}
};

var survey09 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Generalmente toma iniciativas al hacer nuevas amistades?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_09"}
};

var survey10 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿A menudo siente harto(a) o hastiado(a)?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_10"}
};

var survey11 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Puede animar fácilmente una fiesta aburrida?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_11"}
};

var survey12 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Diría de sí mismo que es una persona tensa o muy nerviosa?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_12"}
};

var survey13 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Tiende a mantenerse apartado(a) en las situaciones sociales?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_13"}
};

var survey14 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Se preocupa a menudo por cosas que no debería haber hecho o dicho?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_14"}
};

var survey15 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Le gusta mezclarse con la gente?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_15"}
};

var survey16 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Diría de sí mismo que es una persona nerviosa?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_16"}
};

var survey17 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Le gusta el bullicio y la agitación a su alrededor?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_17"}
};

var survey18 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Después de una experiencia embarazosa, se siente preocupado durante mucho tiempo?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_18"}
};

var survey19 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Por lo general, ¿suele estar callado/a cuando esta con otras personas?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_19"}
};

var survey20 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Sufre de los “nervios”?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_20"}
};

var survey21 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿La gente piensa que usted es una persona animada?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_21"}
};

var survey22 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿A menudo se siente solo?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_22"}
};

var survey23 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Puede organizar y conducir una fiesta?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_23"}
};

var survey24 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Tiene a menudo sentimientos de culpabilidad?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_24"}
};

var survey25 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Le gusta contar chistes o historias divertidas a sus amigos?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_25"}
};

var survey26 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Es usted una persona que sufre con facilidad?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_26"}
};

var survey27 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Le gusta salir a menudo?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_27"}
};

var survey28 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿Se siente a menudo apático/a y cansado/a sin motivo?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_28"}
};

var survey29 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />¿A menudo siente que la vida es muy monótona?<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_29"}
};


// Creacion de timeline e inclusion de trials
EPI_eysenck_personality_inventory_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  EPI_eysenck_personality_inventory_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
EPI_eysenck_personality_inventory_experiment.push(screen_EPI_eysenck_personality_inventory_experiment);

EPI_eysenck_personality_inventory_experiment.push(survey01);
EPI_eysenck_personality_inventory_experiment.push(survey02);
EPI_eysenck_personality_inventory_experiment.push(survey03);
EPI_eysenck_personality_inventory_experiment.push(survey04);
EPI_eysenck_personality_inventory_experiment.push(survey05);
EPI_eysenck_personality_inventory_experiment.push(survey06);
EPI_eysenck_personality_inventory_experiment.push(survey07);
EPI_eysenck_personality_inventory_experiment.push(survey08);
EPI_eysenck_personality_inventory_experiment.push(survey09);
EPI_eysenck_personality_inventory_experiment.push(survey10);
EPI_eysenck_personality_inventory_experiment.push(survey11);
EPI_eysenck_personality_inventory_experiment.push(survey12);
EPI_eysenck_personality_inventory_experiment.push(survey13);
EPI_eysenck_personality_inventory_experiment.push(survey14);
EPI_eysenck_personality_inventory_experiment.push(survey15);
EPI_eysenck_personality_inventory_experiment.push(survey16);
EPI_eysenck_personality_inventory_experiment.push(survey17);
EPI_eysenck_personality_inventory_experiment.push(survey18);
EPI_eysenck_personality_inventory_experiment.push(survey19);
EPI_eysenck_personality_inventory_experiment.push(survey20);
EPI_eysenck_personality_inventory_experiment.push(survey21);
EPI_eysenck_personality_inventory_experiment.push(survey22);
EPI_eysenck_personality_inventory_experiment.push(survey23);
EPI_eysenck_personality_inventory_experiment.push(survey24);
EPI_eysenck_personality_inventory_experiment.push(survey25);
EPI_eysenck_personality_inventory_experiment.push(survey26);
EPI_eysenck_personality_inventory_experiment.push(survey27);
EPI_eysenck_personality_inventory_experiment.push(survey28);
EPI_eysenck_personality_inventory_experiment.push(survey29);
