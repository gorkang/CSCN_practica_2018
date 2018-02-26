/**
@file
@name
 * The experiment 387487
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

var screen_escala_rosenberg_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Escala rosenberg</big></b><br />'+
    "A continuaci&oacute;n encontrar&aacute; una lista de afirmaciones en torno a los "+
     "sentimientos o pensamientos que tiene sobre usted mismo/a. Marque "+
     "la respuesta que m&aacute;s lo identifica."+
    '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};


var likert_scale = ["Muy de acuerdo","De acuerdo","En desacuerdo","Muy en desacuerdo"];

var survey01 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Siento que soy una persona digna de aprecio, al menos en igual medida que los dem&aacute;s.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_01"}
};

var survey02 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Creo que tengo un buen n&uacute;mero de cualidades.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey03 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />En general me inclino a pensar que soy un/a fracasado/a.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey04 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Soy capaz de hacer las cosas tan bien como la mayor&iacute;a de la gente.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey05 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Siento que no tengo muchos motivos para sentirme orgulloso/a de mi.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey06 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tengo una actitud positiva hacia mi mismo/a.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey07 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />En general, estoy satisfecho/a conmigo mismo/a.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_07"}
};

var survey08 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Desear&iacute;a valorarme m&aacute;s a mi mismo/a.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_08"}
};

var survey09 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />A veces me siento verdaderamente in&uacute;til.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_09"}
};

var survey10 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />A veces pienso que no soy bueno/a para nada.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_10"}
};



// Creacion de timeline e inclusion de trials
escala_rosenberg_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  escala_rosenberg_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
escala_rosenberg_experiment.push(screen_escala_rosenberg_experiment);

escala_rosenberg_experiment.push(survey01);
escala_rosenberg_experiment.push(survey02);
escala_rosenberg_experiment.push(survey03);
escala_rosenberg_experiment.push(survey04);
escala_rosenberg_experiment.push(survey05);
escala_rosenberg_experiment.push(survey06);
escala_rosenberg_experiment.push(survey07);
escala_rosenberg_experiment.push(survey08);
escala_rosenberg_experiment.push(survey09);
escala_rosenberg_experiment.push(survey10);
