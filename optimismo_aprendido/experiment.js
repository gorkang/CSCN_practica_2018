/**
@file
@name
 * The experiment 146714
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

var screen_optimismo_aprendido_experiment = {
    type: 'instructions',
    pages: ['<p><left>optimismo_aprendido<br /></p>'],
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
           "A continuaci&oacute;n, usted encontrar&aacute; una serie de preguntas relacionadas "+
           "con distintas experiencias de su vida. Seleccione la alternativa que "+
           "mejor describa la frecuencia con que usted se siente o piensa de esa "+
           "forma."+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Instructions_survey"}
};

var likert_scale = ["Nunca","Pocas veces","Algunas veces","La mayoria de las veces","Siempre"];

var survey02 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />En tiempos dif&iacute;ciles, suelo esperar lo mejor.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey03 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Si algo malo me tiene que pasar, estoy seguro de que me pasar&aacute;.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey04 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Rara vez, espero que las cosas salgan a mi manera.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey05 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Casi nunca espero que me sucedan cosas buenas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey06 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />En general, espero que me ocurran m&aacute;s cosas buenas que malas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};


// Creacion de timeline e inclusion de trials
optimismo_aprendido_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  optimismo_aprendido_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
optimismo_aprendido_experiment.push(screen_optimismo_aprendido_experiment);
optimismo_aprendido_experiment.push(surveyexplanation);
optimismo_aprendido_experiment.push(survey02);
optimismo_aprendido_experiment.push(survey03);
optimismo_aprendido_experiment.push(survey04);
optimismo_aprendido_experiment.push(survey05);
optimismo_aprendido_experiment.push(survey06);
