/**
@file
@name
 * The experiment A Priori Screening Belief 
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
    pages: ['<p><left><b><big>A Priori Screening Belief</big></b><br />'+
    'Please answer how you agree with the following statements' +        '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

// Creacion de timeline e inclusion de trials
questions_experiment = [];    //timeline

var question1 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Participating in screening always has more advantages than disadvantages. </div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_1'}
};
questions_experiment.push(question1);

var question2 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Participating in screening cannot hurt anyone.</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_2'}
};
questions_experiment.push(question2);

var question3 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>In my opinion, it is always better to get screened.</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_3'}
};
questions_experiment.push(question3);

var question4 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>If one has the opportunity, one should always participate in screening.</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_4'}
};
questions_experiment.push(question4);

var question5 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>Foregoing screening is irresponsible.</div>", options: ['<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_5'}
};
questions_experiment.push(question5);

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