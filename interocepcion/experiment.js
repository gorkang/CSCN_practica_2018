/**
@file
@name
 * The experiment 179339
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

var screen_interocepcion_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Interocepcion</big></b><br />'+
    "A continuación se encuentra una lista de enunciados. Por favor indique cuán a menudo dichos enunciados se aplican a usted en su vida cotidiana."+
    '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

// Inicio prueba

var likert_scale = ["0 <br><p style='font-size:13px'>Nunca</p>","1","2","3","4","5 <br> <p style='font-size:13px'>Siempre</p>"];

var survey02 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando  estoy  tenso(a) noto dónde se ubica la tensión en mi cuerpo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey03 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me doy cuenta cuando me siento incómodo(a) en mi cuerpo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey04 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando estoy cómodo(a) lo noto en partes específicas de mi cuerpo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey05 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Noto cambios en mi respiración, tales como cuando se hace más lenta o más rápida.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey06 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Noto la tensión física o el malestar solamente cuando se vuelve muy severo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey07 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />No me doy cuenta de las sensaciones de malestar.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey08 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando siento dolor o malestar intento ignorarlo y continuar con lo que estaba haciendo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey09 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando siento dolor físico me enojo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey10 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Si siento algún malestar me empieza a preocupar que algo no ande bien.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey11 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Puedo sentir alguna sensación física desagradable sin preocuparme por ella.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey12 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Puedo prestar atención a mi respiración sin ser distraído (a) por lo que pasa a mi alrededor.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey13 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Puedo tener conciencia de mis sensaciones corporales internas aun cuando hay muchas cosas sucediendo a mi alrededor.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey14 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando estoy conversando con alguien puedo prestarle atención a mi postura.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey15 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Puedo volver a concentrarme en mi cuerpo si estoy distraido(a).<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey16 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Puedo redirigir mi atención desde mis pensamientos a mis sensaciones corporales.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey17 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Puedo prestar atención a todo mi cuerpo incluso cuando una parte de mi siente dolor o malestar.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey18 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Soy capaz de concentrarme conscientemente en mi cuerpo de manera global.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey19 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Noto cómo mi cuerpo cambia cuando estoy enojado(a).<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey20 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando algo anda mal en mi vida puedo sentirlo en mi cuerpo.</text><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey21 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Noto que mi cuerpo se siente diferente después de una experiencia apacible.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey22 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Noto que puedo respirar libre y fácilmente cuando me siento cómodo(a).<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey23 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Noto cómo mi cuerpo cambia cuando me siento contento(a) / feliz.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey24 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando me siento sobrepasado(a) puedo encontrar un lugar tranquilo dentro de mí.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey25 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando dirijo la atención hacia mi cuerpo siento calma.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey26 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Puedo utilizar mi respiración para reducir la tensión.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey27 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando estoy atrapado(a) en mis pensamientos puedo cambiar mi mente concentrándome en mi cuerpo/respiración.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey28 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Estoy a la escucha de la información que envía mi cuerpo sobre mi estado emocional.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey29 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando estoy alterado(a), me tomo el tiempo para explorar cómo se siente mi cuerpo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey30 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Escucho a mi cuerpo para saber qué hacer.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey31 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />En mi cuerpo, estoy en casa.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey32 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Siento que mi cuerpo es un lugar seguro.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey33 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Confío en mis sensaciones corporales.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};



// Creacion de timeline e inclusion de trials
interocepcion_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  interocepcion_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
interocepcion_experiment.push(screen_interocepcion_experiment);

interocepcion_experiment.push(survey02);
interocepcion_experiment.push(survey03);
interocepcion_experiment.push(survey04);
interocepcion_experiment.push(survey05);
interocepcion_experiment.push(survey06);
interocepcion_experiment.push(survey07);
interocepcion_experiment.push(survey08);
interocepcion_experiment.push(survey09);
interocepcion_experiment.push(survey10);
interocepcion_experiment.push(survey11);
interocepcion_experiment.push(survey12);
interocepcion_experiment.push(survey13);
interocepcion_experiment.push(survey14);
interocepcion_experiment.push(survey15);
interocepcion_experiment.push(survey16);
interocepcion_experiment.push(survey17);
interocepcion_experiment.push(survey18);
interocepcion_experiment.push(survey19);
interocepcion_experiment.push(survey20);
interocepcion_experiment.push(survey21);
interocepcion_experiment.push(survey22);
interocepcion_experiment.push(survey23);
interocepcion_experiment.push(survey24);
interocepcion_experiment.push(survey25);
interocepcion_experiment.push(survey26);
interocepcion_experiment.push(survey27);
interocepcion_experiment.push(survey28);
interocepcion_experiment.push(survey29);
interocepcion_experiment.push(survey30);
interocepcion_experiment.push(survey31);
interocepcion_experiment.push(survey32);
interocepcion_experiment.push(survey33);
