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
  pages: ['<p><left><b><big>Tipos de Comida</big></b><br />'+
  'Conteste las siguientes preguntas.' +'</p>'],
  data:{trialid: 'Screen_WM'},
  show_clickable_nav: true,
  on_trial_start: function (){
    bloquear_enter = 0;
  }
}

var question1 = {
  type:'survey-multi-select',
  questions: [{prompt: "<div class='justified'>¿Con que le gusta condimentar sus comidas diarias?</div>", options: ['Mayonesa', 'Mostaza', 'Ketchup', 'Ají', 'Pebre'], required: true, horizontal: false, not_enabled_options: 0}],
  data: {trialid: 'Comidas_1'}
}
questions_experiment.push(question1);

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

