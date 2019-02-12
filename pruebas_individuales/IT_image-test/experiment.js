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
var questions_experiment = [];    //temporal timeline

var instruction_screen_experiment_1 = {
  type: 'instructions',
  pages: ['<p><left><b><big>Rotacion mental</big></b><br/>Lee atentamente las siguientes instrucciones</p>'],
  data:{trialid: 'Screen_WM'},
  show_clickable_nav: true,
  on_trial_start: function (){
    bloquear_enter = 0;
  }
}

var questions_experiment = [];    //temporal timeline

var instruction_screen_experiment_2 = {
  type: 'instructions',
  pages: ['<p><left><b><big>Rotacion mental</big></b><br/>Por favor, mira estas cinco im&aacute;genes. <br /> <img src="images/pag1_1.png" /> <br /> Observa que todas son dibujos del mismo objeto que se muestra desde diferentes &aacute;ngulos. <br /> Intenta imaginar el movimiento del objeto (o a ti mismo con respecto del objeto), al pasar de<br /> una imagen a otra.<br /> <img src="images/pag1_2.png" /> <br /> Aqu&iacute; hay dos dibujos de una nueva imagen que es diferente de la que se muestra en los primeros<br /> 5 dibujos. Date cuenta que estos dos dibujos muestran un objeto que es diferente y no puede ser<br /> "rotado" para ser igual que el objeto representado en los cinco primeros dibujos.<br /><br /> Por favor, aseg&uacute;rate de <strong>seleccionar solamente 2 alternativas por cada imagen.</strong><br /> Si tienes alguna duda, avisa al examinador.</p>'],
  data:{trialid: 'Screen_WM'},
  show_clickable_nav: true,
  on_trial_start: function (){
    bloquear_enter = 0;
  }
}

var questions_experiment = [];    //temporal timeline

var instruction_screen_experiment_3 = {
  type: 'instructions',
  pages: ['<p><left><b><big>Rotacion mental</big></b><br/>Al hacer la prueba recuerda que, para cada conjunto de problemas, hay s&oacute;lo dos im&aacute;genes que coinciden con la imagen original.<br /> S&oacute;lo se te dar&aacute; un punto si marcas correctamente las dos im&aacute;genes que coinciden. Si se&ntilde;alas s&oacute;lo una de ellas no recibir&aacute;s ning&uacute;n punto.</p>'],
  data:{trialid: 'Screen_WM'},
  show_clickable_nav: true,
  on_trial_start: function (){
    bloquear_enter = 0;
  }
}

var question01 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">Ahora mira este objeto:<br/><br/>Dos de estos cuatro dibujos muestran el mismo objeto.<br />&iquest;Puedes encontrar los dos? <br/></div>', options: ['<br><img src="images/pag1_3_0.png" />', '<br><img src="images/pag1_3_1.png" />', '<br><img src="images/pag1_3_2.png" />', '<br><img src="images/pag1_3_3.png" />', '<br><img src="images/pag1_3_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_01'}
}
var question02 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">Aqu&iacute; hay tres problemas m&aacute;s. De nuevo, el objeto de destino se muestra <span class="underlined">dos veces</span> en cada<br />conjunto de cuatro alternativas de entre las que tienes que elegir las correctas. <br/></div>', options: ['<br><img src="images/pag2_1_0.png" />', '<br><img src="images/pag2_1_1.png" />', '<br><img src="images/pag2_1_2.png" />', '<br><img src="images/pag2_1_3.png" />', '<br><img src="images/pag2_1_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_02'}
}
var question03 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">Aqu&iacute; hay tres problemas m&aacute;s. De nuevo, el objeto de destino se muestra <span class="underlined">dos veces</span> en cada<br />conjunto de cuatro alternativas de entre las que tienes que elegir las correctas. <br/></div>', options: ['<br><img src="images/pag2_2_0.png" />', '<br><img src="images/pag2_2_1.png" />', '<br><img src="images/pag2_2_2.png" />', '<br><img src="images/pag2_2_3.png" />', '<br><img src="images/pag2_2_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_03'}
}
var question04 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">Aqu&iacute; hay tres problemas m&aacute;s. De nuevo, el objeto de destino se muestra <span class="underlined">dos veces</span> en cada<br />conjunto de cuatro alternativas de entre las que tienes que elegir las correctas. <br/></div>', options: ['<br><img src="images/pag2_3_0.png" />', '<br><img src="images/pag2_3_1.png" />', '<br><img src="images/pag2_3_2.png" />', '<br><img src="images/pag2_3_3.png" />', '<br><img src="images/pag2_3_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_04'}
}
var questions_experiment = [];    //temporal timeline

var instruction_screen_experiment_4 = {
  type: 'instructions',
  pages: ['<p><left>Al hacer la prueba recuerda que, para cada conjunto de problemas, hay s&oacute;lo dos im&aacute;genes que coinciden con la imagen original.<br /> S&oacute;lo se te dar&aacute; un punto si marcas correctamente las dos im&aacute;genes que coinciden. Si se&ntilde;alas s&oacute;lo una de ellas no recibir&aacute;s ning&uacute;n punto.</p>'],
  data:{trialid: 'Screen_WM'},
  show_clickable_nav: true,
  on_trial_start: function (){
    bloquear_enter = 0;
  }
}

var question05 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">1.0</div>', options: ['<br><img src="images/pag3_1_0.png" />', '<br><img src="images/pag3_1_1.png" />', '<br><img src="images/pag3_1_2.png" />', '<br><img src="images/pag3_1_3.png" />', '<br><img src="images/pag3_1_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_05'}
}
var question06 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">2.0</div>', options: ['<br><img src="images/pag3_2_0.png" />', '<br><img src="images/pag3_2_1.png" />', '<br><img src="images/pag3_2_2.png" />', '<br><img src="images/pag3_2_3.png" />', '<br><img src="images/pag3_2_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_06'}
}
var question07 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">3.0</div>', options: ['<br><img src="images/pag3_3_0.png" />', '<br><img src="images/pag3_3_1.png" />', '<br><img src="images/pag3_3_2.png" />', '<br><img src="images/pag3_3_3.png" />', '<br><img src="images/pag3_3_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_07'}
}
var question08 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">4.0</div>', options: ['<br><img src="images/pag3_4_0.png" />', '<br><img src="images/pag3_4_1.png" />', '<br><img src="images/pag3_4_2.png" />', '<br><img src="images/pag3_4_3.png" />', '<br><img src="images/pag3_4_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_08'}
}
var question09 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">5.0</div>', options: ['<br><img src="images/pag3_5_0.png" />', '<br><img src="images/pag3_5_1.png" />', '<br><img src="images/pag3_5_2.png" />', '<br><img src="images/pag3_5_3.png" />', '<br><img src="images/pag3_5_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_09'}
}
var question10 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">6.0</div>', options: ['<br><img src="images/pag3_6_0.png" />', '<br><img src="images/pag3_6_1.png" />', '<br><img src="images/pag3_6_2.png" />', '<br><img src="images/pag3_6_3.png" />', '<br><img src="images/pag3_6_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_10'}
}
var questions_experiment = [];    //temporal timeline

var instruction_screen_experiment_5 = {
  type: 'instructions',
  pages: ['<p><left>Haga click para seguir con el proximo bloque de preguntas.</p>'],
  data:{trialid: 'Screen_WM'},
  show_clickable_nav: true,
  on_trial_start: function (){
    bloquear_enter = 0;
  }
}

var question11 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">7.0</div>', options: ['<br><img src="images/pag4_1_0.png" />', '<br><img src="images/pag4_1_1.png" />', '<br><img src="images/pag4_1_2.png" />', '<br><img src="images/pag4_1_3.png" />', '<br><img src="images/pag4_1_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_11'}
}
var question12 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">8.0</div>', options: ['<br><img src="images/pag4_2_0.png" />', '<br><img src="images/pag4_2_1.png" />', '<br><img src="images/pag4_2_2.png" />', '<br><img src="images/pag4_2_3.png" />', '<br><img src="images/pag4_2_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_12'}
}
var question13 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">9.0</div>', options: ['<br><img src="images/pag4_3_0.png" />', '<br><img src="images/pag4_3_1.png" />', '<br><img src="images/pag4_3_2.png" />', '<br><img src="images/pag4_3_3.png" />', '<br><img src="images/pag4_3_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_13'}
}
var question14 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">10.0</div>', options: ['<br><img src="images/pag4_4_0.png" />', '<br><img src="images/pag3_4_1.png" />', '<br><img src="images/pag4_4_2.png" />', '<br><img src="images/pag4_4_3.png" />', '<br><img src="images/pag4_4_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_14'}
}
var question15 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">11.0</div>', options: ['<br><img src="images/pag4_5_0.png" />', '<br><img src="images/pag4_5_1.png" />', '<br><img src="images/pag4_5_2.png" />', '<br><img src="images/pag4_5_3.png" />', '<br><img src="images/pag4_5_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_15'}
}
var question16 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">12.0</div>', options: ['<br><img src="images/pag4_6_0.png" />', '<br><img src="images/pag4_6_1.png" />', '<br><img src="images/pag4_6_2.png" />', '<br><img src="images/pag4_6_3.png" />', '<br><img src="images/pag4_6_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_16'}
}
var questions_experiment = [];    //temporal timeline

var instruction_screen_experiment_6 = {
  type: 'instructions',
  pages: ['<p><left>Haga click para seguir con el proximo bloque de preguntas.</p>'],
  data:{trialid: 'Screen_WM'},
  show_clickable_nav: true,
  on_trial_start: function (){
    bloquear_enter = 0;
  }
}

var question17 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">13.0</div>', options: ['<br><img src="images/pag5_1_0.png" />', '<br><img src="images/pag5_1_1.png" />', '<br><img src="images/pag5_1_2.png" />', '<br><img src="images/pag5_1_3.png" />', '<br><img src="images/pag5_1_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_17'}
}
var question18 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">14.0</div>', options: ['<br><img src="images/pag5_2_0.png" />', '<br><img src="images/pag5_2_1.png" />', '<br><img src="images/pag5_2_2.png" />', '<br><img src="images/pag5_2_3.png" />', '<br><img src="images/pag5_2_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_18'}
}
var question19 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">15.0</div>', options: ['<br><img src="images/pag5_3_0.png" />', '<br><img src="images/pag5_3_1.png" />', '<br><img src="images/pag5_3_2.png" />', '<br><img src="images/pag5_3_3.png" />', '<br><img src="images/pag5_3_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_19'}
}
var question20 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">16.0</div>', options: ['<br><img src="images/pag5_4_0.png" />', '<br><img src="images/pag3_4_1.png" />', '<br><img src="images/pag5_4_2.png" />', '<br><img src="images/pag5_4_3.png" />', '<br><img src="images/pag5_4_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_20'}
}
var question21 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">17.0</div>', options: ['<br><img src="images/pag5_5_0.png" />', '<br><img src="images/pag5_5_1.png" />', '<br><img src="images/pag5_5_2.png" />', '<br><img src="images/pag5_5_3.png" />', '<br><img src="images/pag5_5_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_21'}
}
var question22 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">18.0</div>', options: ['<br><img src="images/pag5_6_0.png" />', '<br><img src="images/pag5_6_1.png" />', '<br><img src="images/pag5_6_2.png" />', '<br><img src="images/pag5_6_3.png" />', '<br><img src="images/pag5_6_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_22'}
}
var questions_experiment = [];    //temporal timeline

var instruction_screen_experiment_7 = {
  type: 'instructions',
  pages: ['<p><left>Haga click para seguir con el proximo bloque de preguntas.</p>'],
  data:{trialid: 'Screen_WM'},
  show_clickable_nav: true,
  on_trial_start: function (){
    bloquear_enter = 0;
  }
}

var question23 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">19.0</div>', options: ['<br><img src="images/pag6_1_0.png" />', '<br><img src="images/pag6_1_1.png" />', '<br><img src="images/pag6_1_2.png" />', '<br><img src="images/pag6_1_3.png" />', '<br><img src="images/pag6_1_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_23'}
}
var question24 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">20.0</div>', options: ['<br><img src="images/pag6_2_0.png" />', '<br><img src="images/pag6_2_1.png" />', '<br><img src="images/pag6_2_2.png" />', '<br><img src="images/pag6_2_3.png" />', '<br><img src="images/pag6_2_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_24'}
}
var question25 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">21.0</div>', options: ['<br><img src="images/pag6_3_0.png" />', '<br><img src="images/pag6_3_1.png" />', '<br><img src="images/pag6_3_2.png" />', '<br><img src="images/pag6_3_3.png" />', '<br><img src="images/pag6_3_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_25'}
}
var question26 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">22.0</div>', options: ['<br><img src="images/pag6_4_0.png" />', '<br><img src="images/pag3_4_1.png" />', '<br><img src="images/pag6_4_2.png" />', '<br><img src="images/pag6_4_3.png" />', '<br><img src="images/pag6_4_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_26'}
}
var question27 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">23.0</div>', options: ['<br><img src="images/pag6_5_0.png" />', '<br><img src="images/pag6_5_1.png" />', '<br><img src="images/pag6_5_2.png" />', '<br><img src="images/pag6_5_3.png" />', '<br><img src="images/pag6_5_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_27'}
}
var question28 = {
  type:'survey-multi-select',
  questions: [{prompt: '<div class="justified">24.0</div>', options: ['<br><img src="images/pag6_6_0.png" />', '<br><img src="images/pag6_6_1.png" />', '<br><img src="images/pag6_6_2.png" />', '<br><img src="images/pag6_6_3.png" />', '<br><img src="images/pag6_6_4.png" />'], required: true, horizontal: true, not_enabled_options: 1, error_message: 'Por favor seleccione 2 opciones', expected_options: 2}],
  data: {trialid: 'Mental-rotation_28'}
}
var questions_experiment = [];    //temporal timeline

var instruction_screen_experiment_8 = {
  type: 'instructions',
  pages: ['<p><left>Tarea terminada. Presiona el siguiente botón para continuar.</p>'],
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
questions_experiment.unshift(instruction_screen_experiment_2);
questions.push.apply(questions, questions_experiment)

questions_experiment = []
questions_experiment.push(question01);
questions_experiment.push(question02);
questions_experiment.push(question03);
questions_experiment.push(question04);
questions_experiment.unshift(instruction_screen_experiment_3);
questions.push.apply(questions, questions_experiment)

questions_experiment = []
questions_experiment.push(question05);
questions_experiment.push(question06);
questions_experiment.push(question07);
questions_experiment.push(question08);
questions_experiment.push(question09);
questions_experiment.push(question10);
questions_experiment.unshift(instruction_screen_experiment_4);
questions.push.apply(questions, questions_experiment)

questions_experiment = []
questions_experiment.push(question11);
questions_experiment.push(question12);
questions_experiment.push(question13);
questions_experiment.push(question14);
questions_experiment.push(question15);
questions_experiment.push(question16);
questions_experiment.unshift(instruction_screen_experiment_5);
questions.push.apply(questions, questions_experiment)

questions_experiment = []
questions_experiment.push(question17);
questions_experiment.push(question18);
questions_experiment.push(question19);
questions_experiment.push(question20);
questions_experiment.push(question21);
questions_experiment.push(question22);
questions_experiment.unshift(instruction_screen_experiment_6);
questions.push.apply(questions, questions_experiment)

questions_experiment = []
questions_experiment.push(question23);
questions_experiment.push(question24);
questions_experiment.push(question25);
questions_experiment.push(question26);
questions_experiment.push(question27);
questions_experiment.push(question28);
questions_experiment.unshift(instruction_screen_experiment_7);
questions.push.apply(questions, questions_experiment)

questions_experiment = []
questions_experiment.unshift(instruction_screen_experiment_8);
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
