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
var variables = {};  
var instruction_screen_experiment_1 = {
  type: 'instructions',
  pages: ['<p><left>Usted verá algunas imágenes y luego le haremos algunas preguntas acerca de ellas. <br/> <br/> Presione la flecha hacia abajo para continuar.</p>'],
  data:{trialid: 'Screen_WM'},
  show_clickable_nav: true,
  on_trial_start: function (){
    bloquear_enter = 0;
  }
}

var instruction_screen_experiment_2 = {
  type: 'instructions',
  pages: ['<p><left>No lo piense por mucho tiempo, simplemente díganos el primer pensamiento que le venga a la mente. <br/> <br/> Presione la flecha hacia abajo para continuar.</p>'],
  data:{trialid: 'Screen_WM'},
  show_clickable_nav: true,
  on_trial_start: function (){
    bloquear_enter = 0;
  }
}

var question1 = {
  type: 'html-slider-response',
  stimulus: ['Use las flechas izquierda y derecha para mover la línea y así responder las preguntas.'],
  labels: ['Menos', 'Más'],
  prompt: '¿Cuanto?',
  min: -9,
  max: 9,
  start: 0,
  data: {trialid: 'test_1'}
}

var instruction_screen_experiment_3 = {
  type: 'instructions',
  pages: ['<p><left>Después de cada imagen, presione la FLECHA HACIA ABAJO en el momento exacto en que entienda lo que pasó, no antes ni después. <br/> <br/> Presione la flecha hacia abajo para continuar.</p>'],
  data:{trialid: 'Screen_WM'},
  show_clickable_nav: true,
  on_trial_start: function (){
    bloquear_enter = 0;
  }
}

var instruction_screen_experiment_4 = {
  type: 'instructions',
  pages: ['<p><left>A continuación le presentamos un ejemplo de la tarea para que practique. <br/> <br/> Presione la flecha hacia abajo para continuar.</p>'],
  data:{trialid: 'Screen_WM'},
  show_clickable_nav: true,
  on_trial_start: function (){
    bloquear_enter = 0;
  }
}

var question2 = {
  type: 'categorize-animation',
  stimuli: ['images/p_i2_umbrella_frame001.bmp', 'images/p_i2_umbrella_frame002.bmp', 'images/p_i2_umbrella_frame003.bmp'],
  required: false,
  frame_time: 400,
  show_last_image: true,
  data: {trialid: 'test_2'}
}

var question3 = {
  type: 'html-slider-response',
  stimulus: ['<img src="images/p_i2_umbrella_frame003.bmp" />'],
  labels: ['Nada triste', 'Muy triste'],
  prompt: '¿Qué tan triste se siente por la persona lastimada?',
  min: -9,
  max: 9,
  start: 0,
  data: {trialid: 'test_3'}
}

var instruction_screen_experiment_5 = {
  type: 'instructions',
  pages: ['<p><left>¿Ha comprendido?, si tiene alguna duda, antes de comenzar pregúntele al investigador <br/> ¡Ahora comenzaremos! <br/> <br/> Presione la flecha hacia abajo para continuar.</p>'],
  data:{trialid: 'Screen_WM'},
  show_clickable_nav: true,
  on_trial_start: function (){
    bloquear_enter = 0;
  }
}

questions = []
questions_experiment = []
questions_experiment.unshift(instruction_screen_experiment_1);
questions.push.apply(questions, questions_experiment)

questions_experiment = []
questions_experiment.push(question1);
questions_experiment.unshift(instruction_screen_experiment_2);
questions.push.apply(questions, questions_experiment)

questions_experiment = []
questions_experiment.unshift(instruction_screen_experiment_3);
questions.push.apply(questions, questions_experiment)

questions_experiment = []
questions_experiment.push(question2);
questions_experiment.push(question3);
questions_experiment.unshift(instruction_screen_experiment_4);
questions.push.apply(questions, questions_experiment)

questions_experiment = []
questions_experiment.unshift(instruction_screen_experiment_5);
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
