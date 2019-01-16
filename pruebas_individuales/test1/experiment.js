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
    pages: ['<p><left><b><big>Abreviated Mathematics Anxiety Rating Scale Experiment</big></b><br />'+
    'Please indicate the level of your anxiety in the following situations.' +'</p>'],
    data:{trialid: 'Screen_WM'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Studying for a math test.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'test1_01'}
};
questions_experiment.push(question01);

var question02 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Taking an exam (quiz) in a math course. </div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'test1_02'}
};
questions_experiment.push(question02);

var question03 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Picking up math textbook to begin working on a homework assignment.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'test1_03'}
};
questions_experiment.push(question03);

var question04 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Thinking about an upcoming math test 1 week before.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'test1_04'}
};
questions_experiment.push(question04);

var question05 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Thinking about an upcoming math test 1 hour before.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'test1_05'}
};
questions_experiment.push(question05);

var question06 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Picking up math textbook to begin a difficult reading assignment.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'test1_06'}
};
questions_experiment.push(question06);

var question07 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Opening a math or stat book and seeing a page full of problems.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'test1_07'}
};
questions_experiment.push(question07);

var question08 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Being given a “pop” quiz in a math class.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'test1_08'}
};
questions_experiment.push(question08);

var question09 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Being given a set of numerical problems involving addition to solve on paper.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'test1_09'}
};
questions_experiment.push(question09);

var question10 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Being given a set of multiplication problems to solve.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'test1_10'}
};
questions_experiment.push(question10);

var question11 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Buying a math textbook.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'test1_11'}
};
questions_experiment.push(question11);

var question12 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Signing up for a math course.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'test1_12'}
};
questions_experiment.push(question12);

questions_experiment = jsPsych.randomization.repeat(questions_experiment,1);
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
