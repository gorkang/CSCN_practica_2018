/**
@file
@name
 * The experiment Beck Anxiety Inventory
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

var screen_beck_anxiety_inventory_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Beck Anxiety Inventory Experiment</big></b><br />'+
    "Below we will present you with a list of common anxiety symptoms.<br />Please carefully read each item and indicate how much you have been bothered by that symptom during the past month, including today." +
    '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var scale = ["Not at all","<center>Mildly, but it</br>didn’t bother</br>me much</center>","<center>Moderately – it</br>wasn’t pleasant</br>at times</center>","<center>Severely – it</br>bothered me</br>a lot</center>"];
     
var question01 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Numbness or tingling.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_01"}
};

var question02 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Feeling hot.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_02"}
};

var question03 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Wobbliness in legs.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_03"}
};

var question04 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Unable to relax.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_04"}
};

var question05 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Fear of worst happening.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_05"}
};

var question06 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Dizzy or lightheaded.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_06"}
};

var question07 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Heart pounding / racing.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_07"}
};

var question08 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Unsteady.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_08"}
};

var question09 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Terrified or afraid.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_09"}
};

var question10 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Nervous.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_10"}
};

var question11 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Feeling of choking.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_11"}
};

var question12 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Hands trembling.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_12"}
};

var question13 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Shaky / unsteady.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_13"}
};

var question14 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Fear of losing control.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_14"}
};

var question15 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Difficulty in breathing.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_15"}
};

var question16 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Fear of dying.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_16"}
};

var question17 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Scared.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_17"}
};

var question18 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Indigestion.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_18"}
};

var question19 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Faint / lightheaded.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_19"}
};

var question20 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Face flushed.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_20"}
};

var question21 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Hot / cold sweats.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_21"}
};

// Creacion de timeline e inclusion de trials
beck_anxiety_inventory_experiment = [];    //timeline

//add the trials to the timeline

beck_anxiety_inventory_experiment.push(question01);
beck_anxiety_inventory_experiment.push(question02);
beck_anxiety_inventory_experiment.push(question03);
beck_anxiety_inventory_experiment.push(question04);
beck_anxiety_inventory_experiment.push(question05);
beck_anxiety_inventory_experiment.push(question06);
beck_anxiety_inventory_experiment.push(question07);
beck_anxiety_inventory_experiment.push(question08);
beck_anxiety_inventory_experiment.push(question09);
beck_anxiety_inventory_experiment.push(question10);
beck_anxiety_inventory_experiment.push(question11);
beck_anxiety_inventory_experiment.push(question12);
beck_anxiety_inventory_experiment.push(question13);
beck_anxiety_inventory_experiment.push(question14);
beck_anxiety_inventory_experiment.push(question15);
beck_anxiety_inventory_experiment.push(question16);
beck_anxiety_inventory_experiment.push(question17);
beck_anxiety_inventory_experiment.push(question18);
beck_anxiety_inventory_experiment.push(question19);
beck_anxiety_inventory_experiment.push(question20);
beck_anxiety_inventory_experiment.push(question21);

// reorder the trials
beck_anxiety_inventory_experiment = jsPsych.randomization.repeat(beck_anxiety_inventory_experiment,1);

// add instruccions at beginning
beck_anxiety_inventory_experiment.unshift(screen_beck_anxiety_inventory_experiment);

// add full screen at beginning
//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  beck_anxiety_inventory_experiment.unshift({
    type: 'fullscreen',
    message: '<p>The experiment will enter full screen mode</p>',
    button_label: "Full screen",
    delay_after: 0,
    fullscreen_mode: true
  });
}