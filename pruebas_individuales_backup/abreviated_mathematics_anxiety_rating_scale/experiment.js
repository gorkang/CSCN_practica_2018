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
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_01'}
};
questions_experiment.push(question01);

var question02 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Taking math section of the college entrance exam.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_02'}
};
questions_experiment.push(question02);

var question03 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Taking an exam (quiz) in a math course. </div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_03'}
};
questions_experiment.push(question03);

var question04 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Taking an exam (final) in a math course.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_04'}
};
questions_experiment.push(question04);

var question05 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Picking up math textbook to begin working on a homework assignment.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_05'}
};
questions_experiment.push(question05);

var question06 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Being given homework assignments of many difficult problems that are due the next class meeting.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_06'}
};
questions_experiment.push(question06);

var question07 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Thinking about an upcoming math test 1 week before.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_07'}
};
questions_experiment.push(question07);

var question08 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Thinking about an upcoming math test 1 day before.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_08'}
};
questions_experiment.push(question08);

var question09 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Thinking about an upcoming math test 1 hour before.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_09'}
};
questions_experiment.push(question09);

var question10 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Realizing you have to take a certain number of math classes to fulfill requirements.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_10'}
};
questions_experiment.push(question10);

var question11 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Picking up math textbook to begin a difficult reading assignment.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_11'}
};
questions_experiment.push(question11);

var question12 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Receiving your final math grade in the mail.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_12'}
};
questions_experiment.push(question12);

var question13 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Opening a math or stat book and seeing a page full of problems.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_13'}
};
questions_experiment.push(question13);

var question14 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Getting ready to study for a math test.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_14'}
};
questions_experiment.push(question14);

var question15 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Being given a “pop” quiz in a math class.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_15'}
};
questions_experiment.push(question15);

var question16 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Reading a cash register receipt after your purchase.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_16'}
};
questions_experiment.push(question16);

var question17 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Being given a set of numerical problems involving addition to solve on paper.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_17'}
};
questions_experiment.push(question17);

var question18 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Being given a set of subtraction problems to solve.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_18'}
};
questions_experiment.push(question18);

var question19 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Being given a set of multiplication problems to solve.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_19'}
};
questions_experiment.push(question19);

var question20 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Being given a set of division problems to solve.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_20'}
};
questions_experiment.push(question20);

var question21 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Buying a math textbook.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_21'}
};
questions_experiment.push(question21);

var question22 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Watching a teacher work on an algebraic equation on the blackboard.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_22'}
};
questions_experiment.push(question22);

var question23 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Signing up for a math course.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_23'}
};
questions_experiment.push(question23);

var question24 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Listening to another student explain a math formula.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_24'}
};
questions_experiment.push(question24);

var question25 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Walking into a math class.</div>", options: ['Not at all', 'A little', 'A fair amount', 'Much', 'Very much'], required: true, horizontal: true}],
  data: {trialid: 'abreviated-mathematics-anxiety-rating-scale_25'}
};
questions_experiment.push(question25);

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