/**
@file
@name
 * The experiment Multiple Stimulus Types Ambiguity Tolerance Scale 
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

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Multiple Stimulus Types Ambiguity Tolerance Scale</big></b><br />'+
    'Please answer how you agree with the following statements' +        '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

// Creacion de timeline e inclusion de trials
questions_experiment = [];    //timeline

var question01 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>I don't tolerate ambiguous situations well.</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_01'}
};
questions_experiment.push(question01);

var question02 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>I find ir difficult to responde when faced whit unexpected event.</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_02'}
};
questions_experiment.push(question02);

var question03 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>I don't think new situations are any more threatening than familiar situations.</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_03'}
};
questions_experiment.push(question03);

var question04 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>I'm drawn to situations wich can be interpreted in more than one way.</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_04'}
};
questions_experiment.push(question04);

var question05 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>I would rather avoid solving a problem that must be viewed from several different perpectives.</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_05'}
};
questions_experiment.push(question05);

var question06 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>I try to avoid situations which are ambiguous.</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_06'}
};
questions_experiment.push(question06);

var question07 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>I am good ar managing unpredictable situations.</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_07'}
};
questions_experiment.push(question07);

var question08 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>I prefer familiar situations to new ones.</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_08'}
};
questions_experiment.push(question08);

var question09 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Problems which cannot be considered from just point of view are a little threatening. </div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_09'}
};
questions_experiment.push(question09);

var question10 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>I avoid situations which too complicated for me to easily understand. </div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_10'}
};
questions_experiment.push(question10);

var question11 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>I am tolerant of ambiguous situations. </div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_11'}
};
questions_experiment.push(question11);

var question12 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>I enjoy tackling problems which are complex enough to be ambiguous. </div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_12'}
};
questions_experiment.push(question12);

var question13 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>I try to avoid problems which don't seem to have only one “best” solution. </div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_13'}
};
questions_experiment.push(question13);

var question14 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>I often find myself looking for something new, rather than trying to hold things constant in my life. </div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_14'}
};
questions_experiment.push(question14);

var question15 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>I generally prefer novelty familiarity. </div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_15'}
};
questions_experiment.push(question15);

var question16 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>I dislike ambiguous situations.</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_16'}
};
questions_experiment.push(question16);

var question17 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Some problems are so complex that just trying to understand them is fun.</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_17'}
};
questions_experiment.push(question17);

var question18 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>I have little trouble coping with unexpected events. </div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_18'}
};
questions_experiment.push(question18);

var question19 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>I pursue problem situations which are so complex some people call them “mind boggling.”</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_19'}
};
questions_experiment.push(question19);

var question20 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>I find it hard to make a choice when the outcome is uncertain. </div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_20'}
};
questions_experiment.push(question20);

var question21 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>I enjoy an occasional surprise.</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_21'}
};
questions_experiment.push(question21);

var question22 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>I prefer a situation in which there is some ambiguity.</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_22'}
};
questions_experiment.push(question22);

// reorder the trials
questions_experiment = jsPsych.randomization.repeat(questions_experiment,1);

// add instruccions at beginning
questions_experiment.unshift(instruction_screen_experiment);

// add full screen at beginning
//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  questions_experiment.unshift({
    type: 'fullscreen',
    message: '<p>The experiment will enter full screen mode</p>',
    button_label: "Full screen",
    delay_after: 0,
    fullscreen_mode: true
  });
}