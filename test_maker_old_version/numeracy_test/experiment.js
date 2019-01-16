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
    pages: ['<p><left><b><big>Numeracy</big></b><br />'+
    'Please answer how you agree with the following statements' +'</p>'],
    data:{trialid: 'Screen_WM'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Horizontal A ball was drawn from a bag containing 10 red, 30 white, 20 blue, and 15 yellow balls. What is the probability that it is neither red nor blue?</div>", options: ['124142412', '88888888', '124125232'], required: true, horizontal: true}],
  data: {trialid: 'numeracy-test_Q01'}
};
questions_experiment.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>Vertical A ball was drawn from a bag containing 10 red, 30 white, 20 blue, and 15 yellow balls. What is the probability that it is neither red nor blue?</div>", options: ['vertical1', 'vertical2', 'vertical3'], required: true, horizontal: false}],
  data: {trialid: 'numeracy-test_Q02'}
};
questions_experiment.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>Vertical A ball was drawn from a bag containing 10 red, 30 white, 20 blue, and 15 yellow balls. What is the probability that it is neither red nor blue?</div>", options: ['vertical1', 'vertical2', 'vertical3'], required: true, horizontal: false}],
  data: {trialid: 'numeracy-test_Q03'}
};
questions_experiment.push(question03);

questions_experiment = jsPsych.randomization.repeat(questions_experiment,1);
questions_experiment.unshift(instruction_screen_experiment);
questions.push.apply(questions, questions_experiment)

questions_experiment = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>title2</big></b><br />'+
    'message instruction 2' +'</p>'],
    data:{trialid: 'Screen_WM'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>Vertical A ball was drawn from a bag containing 10 red, 30 white, 20 blue, and 15 yellow balls. What is the probability that it is neither red nor blue?</div>", options: ['vertical1', 'vertical2', 'vertical3'], required: true, horizontal: false}],
  data: {trialid: 'numeracy-test_Q04'}
};
questions_experiment.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>Vertical A ball was drawn from a bag containing 10 red, 30 white, 20 blue, and 15 yellow balls. What is the probability that it is neither red nor blue?</div>", options: ['vertical1', 'vertical2', 'vertical3'], required: true, horizontal: false}],
  data: {trialid: 'numeracy-test_Q05'}
};
questions_experiment.push(question05);

var question06 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>This is a text question</div>"}],
  data: {trialid: 'numeracy-test_Q06'}
};
questions_experiment.push(question06);

var question07 = {
  type: 'survey-text-number',
  questions: [{prompt: "<div class='justified'>This is a number question</div>"}],
  data: {trialid: 'numeracy-test_Q07'}
};
questions_experiment.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>Vertical A ball was drawn from a bag containing 10 red, 30 white, 20 blue, and 15 yellow balls. What is the probability that it is neither red nor blue?</div>", options: ['vertical1', 'vertical2', 'vertical3'], required: true, horizontal: false}],
  data: {trialid: 'numeracy-test_Q08'}
};
questions_experiment.push(question08);

var question09 = {
  type: 'survey-text-number',
  questions: [{prompt: "<div class='justified'>This is a number question</div>"}],
  data: {trialid: 'numeracy-test_Q09'}
};
questions_experiment.push(question09);

var question10 = {
  type: 'survey-text-number',
  questions: [{prompt: "<div class='justified'>This is a number question</div>"}],
  data: {trialid: 'numeracy-test_Q10'}
};
questions_experiment.push(question10);

questions_experiment.unshift(instruction_screen_experiment);
questions.push.apply(questions, questions_experiment)

if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  questions.unshift({
    type: 'fullscreen',
    message: '<p>The experiment will enter full screen mode</p>',
    button_label: 'Full screen',
    delay_after: 0,
    fullscreen_mode: true
  });
}
