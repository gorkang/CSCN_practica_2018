/**
@file
@name
 * The experiment Test Name 
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
    pages: ['<p><left><b><big>Test Name</big></b><br />'+
    'Instruccions' +        '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

// Creacion de timeline e inclusion de trials
questions_experiment = [];    //timeline

var question01 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>question 1</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_01'}
};
questions_experiment.push(question01);

var question02 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>question 2</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_02'}
};
questions_experiment.push(question02);

var question03 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>question 3</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_03'}
};
questions_experiment.push(question03);

var question04 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>question 4</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_04'}
};
questions_experiment.push(question04);

var question05 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>question 5</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_05'}
};
questions_experiment.push(question05);

var question06 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>question 6</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_06'}
};
questions_experiment.push(question06);

var question07 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>question 7</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_07'}
};
questions_experiment.push(question07);

var question08 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>question 8</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_08'}
};
questions_experiment.push(question08);

var question09 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>question 9</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_09'}
};
questions_experiment.push(question09);

var question10 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>question 10</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_10'}
};
questions_experiment.push(question10);

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