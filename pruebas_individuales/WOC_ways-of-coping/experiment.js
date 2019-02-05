/**
 * CSCN lab
/**
This document was made with test_maker
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

var questions = [];    //final timeline
var questions_experiment = [];    //temporal timeline
var variables = {};  

var instruction_screen_experiment = {
  type: 'instructions',
  pages: ['<p><left><b><big>Capacidad de Afrontamiento</big></b><br />'+
  'Conteste las siguientes preguntas.' +'</p>'],
  data:{trialid: 'Screen_WM'},
  show_clickable_nav: true,
  on_trial_start: function (){
    bloquear_enter = 0;
  }
}

var question01 = {
  type:'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Intenté sentirme mejor comiendo, bebiendo, fumando, tomando drogas o medicamentos más de lo acostumbrado.</div>", options: ['Nunca.', 'Pocas veces.', 'Varias veces.', 'La mayoría de las veces.', 'Siempre.'], required: true, horizontal: true}],
  data: {trialid: 'Confrontative_01'}
}
questions_experiment.push(question01);

var question02 = {
  type:'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Soñé o imaginé que las cosas eran mejores.</div>", options: ['Nunca.', 'Pocas veces.', 'Varias veces.', 'La mayoría de las veces.', 'Siempre.'], required: true, horizontal: true}],
  data: {trialid: 'Confrontative_02'}
}
questions_experiment.push(question02);

var question03 = {
  type:'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Tuve el deseo de que el problema se acabara o terminara.</div>", options: ['Nunca.', 'Pocas veces.', 'Varias veces.', 'La mayoría de las veces.', 'Siempre.'], required: true, horizontal: true}],
  data: {trialid: 'Confrontative_03'}
}
questions_experiment.push(question03);

var question04 = {
  type:'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Tuve fantasías o imaginé el modo en que podían cambiar las cosas.</div>", options: ['Nunca.', 'Pocas veces.', 'Varias veces.', 'La mayoría de las veces.', 'Siempre.'], required: true, horizontal: true}],
  data: {trialid: 'Confrontative_04'}
}
questions_experiment.push(question04);

var question05 = {
  type:'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Busqué un poco de esperanza, intenté mirar las cosas por su lado bueno.</div>", options: ['Nunca.', 'Pocas veces.', 'Varias veces.', 'La mayoría de las veces.', 'Siempre.'], required: true, horizontal: true}],
  data: {trialid: 'Confrontative_05'}
}
questions_experiment.push(question05);

var question06 = {
  type:'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Me dije cosas que me ayudaron a sentirme mejor.</div>", options: ['Nunca.', 'Pocas veces.', 'Varias veces.', 'La mayoría de las veces.', 'Siempre.'], required: true, horizontal: true}],
  data: {trialid: 'Confrontative_06'}
}
questions_experiment.push(question06);

var question07 = {
  type:'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Me inspiré a hacer algo creativo.</div>", options: ['Nunca.', 'Pocas veces.', 'Varias veces.', 'La mayoría de las veces.', 'Siempre.'], required: true, horizontal: true}],
  data: {trialid: 'Confrontative_07'}
}
questions_experiment.push(question07);

var question08 = {
  type:'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Cambié y maduré como persona.</div>", options: ['Nunca.', 'Pocas veces.', 'Varias veces.', 'La mayoría de las veces.', 'Siempre.'], required: true, horizontal: true}],
  data: {trialid: 'Confrontative_08'}
}
questions_experiment.push(question08);

var question09 = {
  type:'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Tuve fe en algo nuevo.</div>", options: ['Nunca.', 'Pocas veces.', 'Varias veces.', 'La mayoría de las veces.', 'Siempre.'], required: true, horizontal: true}],
  data: {trialid: 'Confrontative_09'}
}
questions_experiment.push(question09);

var question10 = {
  type:'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Seguí adelante con mi destino (simplemente algunas veces tengo mala suerte).</div>", options: ['Nunca.', 'Pocas veces.', 'Varias veces.', 'La mayoría de las veces.', 'Siempre.'], required: true, horizontal: true}],
  data: {trialid: 'Confrontative_10'}
}
questions_experiment.push(question10);

var question11 = {
  type:'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Seguí adelante como si no hubiera pasado nada.</div>", options: ['Nunca.', 'Pocas veces.', 'Varias veces.', 'La mayoría de las veces.', 'Siempre.'], required: true, horizontal: true}],
  data: {trialid: 'Confrontative_11'}
}
questions_experiment.push(question11);

var question12 = {
  type:'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Me consolé pensando que las cosas podían ser peores.</div>", options: ['Nunca.', 'Pocas veces.', 'Varias veces.', 'La mayoría de las veces.', 'Siempre.'], required: true, horizontal: true}],
  data: {trialid: 'Confrontative_12'}
}
questions_experiment.push(question12);

var question13 = {
  type:'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Esperé a que ocurriera un milagro.</div>", options: ['Nunca.', 'Pocas veces.', 'Varias veces.', 'La mayoría de las veces.', 'Siempre.'], required: true, horizontal: true}],
  data: {trialid: 'Confrontative_13'}
}
questions_experiment.push(question13);

var question14 = {
  type:'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Traté de olvidarme por completo del problema.</div>", options: ['Nunca.', 'Pocas veces.', 'Varias veces.', 'La mayoría de las veces.', 'Siempre.'], required: true, horizontal: true}],
  data: {trialid: 'Confrontative_14'}
}
questions_experiment.push(question14);

var question15 = {
  type:'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Esperé a ver qué pasaba antes de hacer algo.</div>", options: ['Nunca.', 'Pocas veces.', 'Varias veces.', 'La mayoría de las veces.', 'Siempre.'], required: true, horizontal: true}],
  data: {trialid: 'Confrontative_15'}
}
questions_experiment.push(question15);

var question16 = {
  type:'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Evité que los demás se enteraran de lo mal que estaban las cosas.</div>", options: ['Nunca.', 'Pocas veces.', 'Varias veces.', 'La mayoría de las veces.', 'Siempre.'], required: true, horizontal: true}],
  data: {trialid: 'Confrontative_16'}
}
questions_experiment.push(question16);

var question17 = {
  type:'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Me negué a creer lo que estaba pasando.</div>", options: ['Nunca.', 'Pocas veces.', 'Varias veces.', 'La mayoría de las veces.', 'Siempre.'], required: true, horizontal: true}],
  data: {trialid: 'Confrontative_17'}
}
questions_experiment.push(question17);

var question18 = {
  type:'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Me critiqué o cuestioné a mí mismo.</div>", options: ['Nunca.', 'Pocas veces.', 'Varias veces.', 'La mayoría de las veces.', 'Siempre.'], required: true, horizontal: true}],
  data: {trialid: 'Confrontative_18'}
}
questions_experiment.push(question18);

var question19 = {
  type:'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Me disculpé o hice algo para compensar el problema.</div>", options: ['Nunca.', 'Pocas veces.', 'Varias veces.', 'La mayoría de las veces.', 'Siempre.'], required: true, horizontal: true}],
  data: {trialid: 'Confrontative_19'}
}
questions_experiment.push(question19);

var question20 = {
  type:'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Me di cuenta que yo mismo(a) causé el problema.</div>", options: ['Nunca.', 'Pocas veces.', 'Varias veces.', 'La mayoría de las veces.', 'Siempre.'], required: true, horizontal: true}],
  data: {trialid: 'Confrontative_20'}
}
questions_experiment.push(question20);

questions_experiment.unshift(instruction_screen_experiment);
questions.push.apply(questions, questions_experiment)

if (window.innerWidth != screen.width || window.innerHeight != screen.height){
  questions.unshift({
    type: 'fullscreen',
    message: '<p>El experimento entrará en modo pantalla completa</p>',
    button_label: 'Full screen',
    delay_after: 0,
    fullscreen_mode: true
  })
}

