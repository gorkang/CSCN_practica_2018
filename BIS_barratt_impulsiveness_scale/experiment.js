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

var screen_BIS_barratt_impulsiveness_scale_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>BIS</big></b><br />'+
    "Las personas son diferentes en cuanto a la forma en que se comportan y piensan en distintas situaciones. Ésta es una prueba para medir algunas de las formas en que usted actúa o piensa. No se detenga demasiado en ninguna de las oraciones. Responda rápida y hontestamente."+
    '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};


var likert_scale = ["Raramente <br> o nunca","Ocasionalmente","A menudo","Siempre o <br> casi siempre"];

var survey02 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Planifico mis tareas con cuidado<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey03 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Hago las cosas sin pensar<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey04 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Casi nunca me tomo las cosas a pecho (no me perturbo con facilidad)<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey05 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mis pensamientos pueden tener gran velocidad (tengo pensamientos que van muy rápido en mi mente)<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey06 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Planifico mis viajes con anticipación<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey07 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Soy una persona con autocontrol<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey08 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me concentro con facilidad<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey09 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Ahorro con regularidad<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey10 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Se me hace difícil estar quieto/a por períodos largos de tiempo<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey11 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Pienso las cosas cuidadosamente<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey12 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Planifico para tener un trabajo (me esfuerzo por asegurar que tendré dinero para pagar por mis gastos)<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey13 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Digo las cosas sin pensar<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey14 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me gusta pensar sobre problemas complicados<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey15 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cambio de trabajo frecuentemente (no me quedo en el mismo trabajo por períodos largos de tiempo)<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey16 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Actúo impulsivamente<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey17 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me aburro con facilidad tratando de resolver problemas en mi mente<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey18 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Visito al médico y al dentista con regularidad<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey19 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Hago las cosas en el momento en que se me ocurren<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey20 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Soy una persona que piensa sin distraerse (puedo enfocar mi mente en una sola cosa por mucho tiempo)<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey21 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cambio de vivienda a menudo (me mudo con frecuencia o no me gusta vivir en el mismo lugar por mucho tiempo)<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey22 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Compro cosas compulsivamente<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey23 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Yo termino lo que empiezo<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey24 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Camino y me muevo con rapidez<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey25 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Resuelvo los problemas experimentando (resuelvo los problemas tratando una posible solución y viendo si funciona)<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey26 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Gasto efectivo o en crédito más de lo que gano<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey27 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Hablo rápido<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey28 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tengo pensamientos extraños cuando estoy pensando (a veces tengo pensamientos irrelevantes cuando pienso)<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey29 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me interesa más el presente que el futuro<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey30 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento inquieto/a en clases o charlas (me siento inquieto/a si tengo que oír a alguien hablar por un largo período de tiempo)<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey31 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Planifico el futuro (me interesa más el futuro que el presente)<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};



// Creacion de timeline e inclusion de trials
BIS_barratt_impulsiveness_scale_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  BIS_barratt_impulsiveness_scale_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
BIS_barratt_impulsiveness_scale_experiment.push(screen_BIS_barratt_impulsiveness_scale_experiment);

BIS_barratt_impulsiveness_scale_experiment.push(survey02);
BIS_barratt_impulsiveness_scale_experiment.push(survey03);
BIS_barratt_impulsiveness_scale_experiment.push(survey04);
BIS_barratt_impulsiveness_scale_experiment.push(survey05);
BIS_barratt_impulsiveness_scale_experiment.push(survey06);
BIS_barratt_impulsiveness_scale_experiment.push(survey07);
BIS_barratt_impulsiveness_scale_experiment.push(survey08);
BIS_barratt_impulsiveness_scale_experiment.push(survey09);
BIS_barratt_impulsiveness_scale_experiment.push(survey10);
BIS_barratt_impulsiveness_scale_experiment.push(survey11);
BIS_barratt_impulsiveness_scale_experiment.push(survey12);
BIS_barratt_impulsiveness_scale_experiment.push(survey13);
BIS_barratt_impulsiveness_scale_experiment.push(survey14);
BIS_barratt_impulsiveness_scale_experiment.push(survey15);
BIS_barratt_impulsiveness_scale_experiment.push(survey16);
BIS_barratt_impulsiveness_scale_experiment.push(survey17);
BIS_barratt_impulsiveness_scale_experiment.push(survey18);
BIS_barratt_impulsiveness_scale_experiment.push(survey19);
BIS_barratt_impulsiveness_scale_experiment.push(survey20);
BIS_barratt_impulsiveness_scale_experiment.push(survey21);
BIS_barratt_impulsiveness_scale_experiment.push(survey22);
BIS_barratt_impulsiveness_scale_experiment.push(survey23);
BIS_barratt_impulsiveness_scale_experiment.push(survey24);
BIS_barratt_impulsiveness_scale_experiment.push(survey25);
BIS_barratt_impulsiveness_scale_experiment.push(survey26);
BIS_barratt_impulsiveness_scale_experiment.push(survey27);
BIS_barratt_impulsiveness_scale_experiment.push(survey28);
BIS_barratt_impulsiveness_scale_experiment.push(survey29);
BIS_barratt_impulsiveness_scale_experiment.push(survey30);
BIS_barratt_impulsiveness_scale_experiment.push(survey31);
