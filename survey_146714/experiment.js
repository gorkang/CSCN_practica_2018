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

var screen_survey_146714_experiment = {
    type: 'instructions',
    pages: ['<p><left>survey 146714<br /></p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

// Inicio prueba
var mathexplanation={
    type: "instructions",
    pages: ["<div class = centerbox>"+
           "<p class = center-block-text>"+
           "A continuación, usted encontrará una serie de preguntas relacionadas "+
           "con distintas experiencias de su vida. Seleccione la alternativa que "+
           "mejor describa la frecuencia con que usted se siente o piensa de esa "+
           "forma."+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Instructions_Math"}
};

var likert_scale = ["Nunca","Pocas veces","Algunas veces","La mayoria de las veces","Siempre"];

var math02 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />En tiempos difíciles, suelo esperar lo mejor.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "Math_02"}
};

var math03 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Si algo malo me tiene que pasar, estoy seguro de que me pasará.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "Math_03"}
};

var math04 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Rara vez, espero que las cosas salgan a mi manera.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "Math_04"}
};

var math05 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Casi nunca espero que me sucedan cosas buenas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "Math_05"}
};

var math06 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />En general, espero que me ocurran más cosas buenas que malas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "Math_06"}
};


// Creacion de timeline e inclusion de trials
survey_146714_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  survey_146714_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
survey_146714_experiment.push(screen_survey_146714_experiment);
survey_146714_experiment.push(mathexplanation);
survey_146714_experiment.push(math02);
survey_146714_experiment.push(math03);
survey_146714_experiment.push(math04);
survey_146714_experiment.push(math05);
survey_146714_experiment.push(math06);
