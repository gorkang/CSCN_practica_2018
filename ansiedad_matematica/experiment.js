// Funciones de apoyo
onkeydown = function block_fkeys(event){
    var x = event.which || event.keyCode;
    if(x == 111 || x == 116){
        console.log("Blocked key");
        event.preventDefault();
        return false;
    }else{
        return;
    }
}

// Inicio prueba
var mathexplanation={
    type: "instructions",
    pages: ["<div class = centerbox>"+
           "<p class = center-block-text>"+
           "A continuaci&oacute;n debes calificar una serie de enunciados se&ntilde;alando si est&aacute;s<br />"+
           "muy en desacuerdo, en desacuerdo, indeciso, de acuerdo, o muy de acuerdo.<br /><br />"+
           "Debes leer atentamente cada pregunta y responder la informaci&oacute;n que se solicita."+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Instructions_Math"}
};

var likert_scale = ["Muy en Desacuerdo","En Desacuerdo","Indeciso","De Acuerdo","Muy de Acuerdo"];

var math02 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Las matem&aacute;ticas son la materia que m&aacute;s temo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "Math_02"}
};

var math03 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento/sent&iacute;a preocupado antes de entrar a la clase de matem&aacute;ticas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "Math_03"}
};

var math04 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Las matem&aacute;ticas me parecen interesantes.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "Math_04"}
};

var math05 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Las matem&aacute;ticas son una de mis materias favoritas<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "Math_05"}
};

var math06 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Siempre tengo/tuve miedo de los ex&aacute;menes de matem&aacute;ticas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "Math_06"}
};

var math07 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Resolver problemas de matem&aacute;ticas siempre es agradable para m&iacute;.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "Math_07"}
};

var math08 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento/sent&iacute;a nervioso cuando estoy/estaba a punto de hacer la tarea de matem&aacute;ticas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "Math_08"}
};

var math09 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento/sent&iacute;a feliz y emocionado en una clase de matem&aacute;ticas en comparaci&oacute;n con cualquier otra clase.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "Math_09"}
};

var math10 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Preferir&iacute;a/prefer&iacute;a que matem&aacute;ticas fuera una de mis materias en los estudios superiores.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "Math_10"}
};

var math11 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Las matem&aacute;ticas son un dolor de cabeza para m&iacute;.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "Math_11"}
};

var math12 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tengo/ten&iacute;a miedo de hacer preguntas en clase de matem&aacute;ticas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "Math_12"}
};

var math13 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Las matem&aacute;ticas no me asustan en absoluto.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "Math_13"}
};

var math14 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi mente se queda/quedaba en blanco cuando el profesor hace/hac&iacute;a preguntas de matem&aacute;ticas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "Math_14"}
};

// Creacion de timeline e inclusion de trials
ansiedad_matematica_experiment = [];

if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  ansiedad_matematica_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

ansiedad_matematica_experiment.push(mathexplanation);
ansiedad_matematica_experiment.push(math02);
ansiedad_matematica_experiment.push(math03);
ansiedad_matematica_experiment.push(math04);
ansiedad_matematica_experiment.push(math05);
ansiedad_matematica_experiment.push(math06);
ansiedad_matematica_experiment.push(math07);
ansiedad_matematica_experiment.push(math08);
ansiedad_matematica_experiment.push(math09);
ansiedad_matematica_experiment.push(math10);
ansiedad_matematica_experiment.push(math11);
ansiedad_matematica_experiment.push(math12);
ansiedad_matematica_experiment.push(math13);
ansiedad_matematica_experiment.push(math14);
