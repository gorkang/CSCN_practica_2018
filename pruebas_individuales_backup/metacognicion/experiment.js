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

var screen_metacognicion_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Metacognicion</big></b><br />'+
    "A continuaci&oacute;n ver&aacute; preguntas relacionadas a sus pensamientos "+
    "sobre usted mismo."+
    '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};


var likert_scale = ["Totalmente de acuerdo","Un poco de acuerdo","Un poco en desacuerdo","Totalmente en desacuerdo"];

var survey01 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Estar preocupado/a me ayuda a organizar mi mente.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_01"}
};

var survey02 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Estar preocupado/a me ayuda a afrontar las cosas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey03 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Necesito preocuparme para funcionar bien.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey04 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Estar preocupado/a me ayuda a solucionar problemas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey05 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Necesito preocuparme para seguir organizado/a.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey06 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Estar preocupado/a me ayuda a evitar problemas en el futuro.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey07 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mis pensamientos preocupantes persisten, independientemente de c&oacute;mo intente deternlos.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_07"}
};

var survey08 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando empiezo a preocuparme no puedo parar.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_08"}
};

var survey09 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Podr&iacute;a llegar a enfermar de preocupaci&oacute;n.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_09"}
};

var survey10 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />No puedo ignorar los pensamientos que me preocupan.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_10"}
};

var survey11 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi preocupaci&oacute;n podr&iacute;a volverme loco/a.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_11"}
};


var survey12 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Considero que preocuparme es peligroso para mi.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_12"}
};


var survey13 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />No conf&iacute;o en mi memoria.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_13"}
};


var survey14 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tengo mala memoria.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_14"}
};


var survey15 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tengo poca confianza en mi memoria sobre hechos.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_15"}
};


var survey16 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tengo poca confianza en mi memoria sobre lugares.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_16"}
};


var survey17 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tengo poca confianza en mi memoria sobre palabras y nombres.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_17"}
};


var survey18 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi memoria me puede engañar a veces.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_18"}
};


var survey19 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Si no pudiera controlar mis pensamientos, yo no podr&iacute;a funcionar.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_19"}
};


var survey20 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />No poder controlar mis pensamientos es una señal de debilidad.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_20"}
};


var survey21 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Deber&iacute;a controlar mis pensamientos todo el tiempo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_21"}
};


var survey22 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Es malo tener ciertos pensamientos.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_22"}
};


var survey23 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Si yo no controlara un pensamiento preocupante y luego ocurriese, ser&iacute;a por mi culpa.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_23"}
};


var survey24 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Recibir&eacute; un castigo por no controlar ciertos pensamientos.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_24"}
};


var survey25 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Soy consciente constantemente de lo que pienso.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_25"}
};


var survey26 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Presto mucha atenci&oacute;n a la manera en que mi mente funciona.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_26"}
};


var survey27 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Pienso mucho acerca de mis pensamientos.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_27"}
};


var survey28 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Examino constantemente mis pensamientos.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_28"}
};


var survey29 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Monitoreo mis pensamientos.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_29"}
};


var survey30 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me doy cuenta de c&oacute;mo funciona mi mente mientras pienso en c&oacute;mo solucionar un problema.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_30"}
};

// Creacion de timeline e inclusion de trials
metacognicion_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  metacognicion_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
metacognicion_experiment.push(screen_metacognicion_experiment);

metacognicion_experiment.push(survey02);
metacognicion_experiment.push(survey03);
metacognicion_experiment.push(survey04);
metacognicion_experiment.push(survey05);
metacognicion_experiment.push(survey06);
metacognicion_experiment.push(survey07);
metacognicion_experiment.push(survey08);
metacognicion_experiment.push(survey09);
metacognicion_experiment.push(survey10);
metacognicion_experiment.push(survey11);
metacognicion_experiment.push(survey12);
metacognicion_experiment.push(survey13);
metacognicion_experiment.push(survey14);
metacognicion_experiment.push(survey15);
metacognicion_experiment.push(survey16);
metacognicion_experiment.push(survey17);
metacognicion_experiment.push(survey18);
metacognicion_experiment.push(survey19);
metacognicion_experiment.push(survey20);
metacognicion_experiment.push(survey21);
metacognicion_experiment.push(survey22);
metacognicion_experiment.push(survey23);
metacognicion_experiment.push(survey24);
metacognicion_experiment.push(survey25);
metacognicion_experiment.push(survey26);
metacognicion_experiment.push(survey27);
metacognicion_experiment.push(survey28);
metacognicion_experiment.push(survey29);
metacognicion_experiment.push(survey30);
metacognicion_experiment.push(survey31);
