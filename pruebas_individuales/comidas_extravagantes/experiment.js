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

questions = [];    //final timeline

questions_experiment = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Argument Test</big></b><br />'+
    'Por favor, responde las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Screen_WM'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question1 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>¿A usted le gustan las papas fritas?</div>", options: ['Sí. Me encantan', 'Las puedo comer.', 'No. No me gustan.'], required: true, horizontal: false}],
  data: {trialid: 'comidas_extravagantes_1'}
};
questions_experiment.push(question1);

var question2 = {
  type: 'cloze',
  text: "<div class='justified'>Más % vale % pájaro en % mano % que 100 volando.</div>", required: true, 
  data: {trialid: 'comidas_extravagantes_2'}
};
questions_experiment.push(question2);

var question3 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Cuanto es 1 + 1?</div>", type: 'number', required: true}], 
  data: {trialid: 'comidas_extravagantes_3'}
};
questions_experiment.push(question3);

var question4 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>Indique su fecha de cumpleaños</div>", type: 'date', required: true}], 
  data: {trialid: 'comidas_extravagantes_4'}
};
questions_experiment.push(question4);

questions_experiment = jsPsych.randomization.repeat(questions_experiment,1);
questions_experiment.unshift(instruction_screen_experiment);
questions.push.apply(questions, questions_experiment)

questions_experiment = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left>'+
    'Por favor, responde las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Screen_WM'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question5 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>¿comunmente con quien comes papas fritas?</div>", options: ['mi papa', 'mi tio', 'mi primo', 'mi abuelo'], required: true, horizontal: true}],
  data: {trialid: 'comidas_extravagantes_5'}
};
questions_experiment.push(question5);

questions_experiment.unshift(instruction_screen_experiment);
questions.push.apply(questions, questions_experiment)

if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  questions.unshift({
    type: 'fullscreen',
    message: '<p>El experimento entrará en modo pantalla completa</p>',
    button_label: 'Full screen',
    delay_after: 0,
    fullscreen_mode: true
  });
}
