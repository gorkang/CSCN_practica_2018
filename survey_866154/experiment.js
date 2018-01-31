/**
@file
@name
 * The experiment 866154
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

var screen_survey_866154_experiment = {
    type: 'instructions',
    pages: ['<p><left>survey_866154<br /></p>'],
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
           "A continuaci&oacute;n ver&aacute; preguntas relacionadas a sus pensamientos "+
           "sobre usted mismo."+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Instructions_survey"}
};

var likert_scale = ["Totalmente de acuerdo","Un poco de acuerdo","Un poco en desacuerdo","Totalmente en desacuerdo"];

var survey02 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Estar preocupado/a me ayuda a organizar mi mente.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey03 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Estar preocupado/a me ayuda a afrontar las cosas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey04 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Necesito preocuparme para funcionar bien.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey05 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Estar preocupado/a me ayuda a solucionar problemas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey06 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Necesito preocuparme para seguir organizado/a.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey07 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Estar preocupado/a me ayuda a evitar problemas en el futuro.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey08 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mis pensamientos preocupantes persisten, independientemente de c&oacute;mo intente deternlos.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey09 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando empiezo a preocuparme no puedo parar.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey10 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Podr&iacute;a llegar a enfermar de preocupaci&oacute;n.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey11 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />No puedo ignorar los pensamientos que me preocupan.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey12 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi preocupaci&oacute;n podr&iacute;a volverme loco/a.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};


var survey13 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Considero que preocuparme es peligroso para mi.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};


var survey14 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />No conf&iacute;o en mi memoria.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};


var survey15 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tengo mala memoria.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};


var survey16 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tengo poca confianza en mi memoria sobre hechos.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};


var survey17 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tengo poca confianza en mi memoria sobre lugares.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};


var survey18 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tengo poca confianza en mi memoria sobre palabras y nombres.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};


var survey19 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi memoria me puede engañar a veces.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};


var survey20 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Si no pudiera controlar mis pensamientos, yo no podr&iacute;a funcionar.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};


var survey21 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />No poder controlar mis pensamientos es una señal de debilidad.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};


var survey22 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Deber&iacute;a controlar mis pensamientos todo el tiempo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};


var survey23 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Es malo tener ciertos pensamientos.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};


var survey24 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Si yo no controlara un pensamiento preocupante y luego ocurriese, ser&iacute;a por mi culpa.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};


var survey25 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Recibir&eacute; un castigo por no controlar ciertos pensamientos.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};


var survey26 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Soy consciente constantemente de lo que pienso.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};


var survey27 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Presto mucha atenci&oacute;n a la manera en que mi mente funciona.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};


var survey28 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Pienso mucho acerca de mis pensamientos.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};


var survey29 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Examino constantemente mis pensamientos.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};


var survey30 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Monitoreo mis pensamientos.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};


var survey31 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me doy cuenta de c&oacute;mo funciona mi mente mientras pienso en c&oacute;mo solucionar un problema.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

// Creacion de timeline e inclusion de trials
survey_866154_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  survey_866154_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
survey_866154_experiment.push(screen_survey_866154_experiment);
survey_866154_experiment.push(surveyexplanation);
survey_866154_experiment.push(survey02);
survey_866154_experiment.push(survey03);
survey_866154_experiment.push(survey04);
survey_866154_experiment.push(survey05);
survey_866154_experiment.push(survey06);
survey_866154_experiment.push(survey07);
survey_866154_experiment.push(survey08);
survey_866154_experiment.push(survey09);
survey_866154_experiment.push(survey10);
survey_866154_experiment.push(survey11);
survey_866154_experiment.push(survey12);
survey_866154_experiment.push(survey13);
survey_866154_experiment.push(survey14);
survey_866154_experiment.push(survey15);
survey_866154_experiment.push(survey16);
survey_866154_experiment.push(survey17);
survey_866154_experiment.push(survey18);
survey_866154_experiment.push(survey19);
survey_866154_experiment.push(survey20);
survey_866154_experiment.push(survey21);
survey_866154_experiment.push(survey22);
survey_866154_experiment.push(survey23);
survey_866154_experiment.push(survey24);
survey_866154_experiment.push(survey25);
survey_866154_experiment.push(survey26);
survey_866154_experiment.push(survey27);
survey_866154_experiment.push(survey28);
survey_866154_experiment.push(survey29);
survey_866154_experiment.push(survey30);
survey_866154_experiment.push(survey31);
