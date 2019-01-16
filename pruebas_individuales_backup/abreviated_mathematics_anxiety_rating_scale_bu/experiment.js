/**
@file
@name
 * The experiment Abreviated Mathematics Anxiety Rating Scale 
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

var screen_abreviated_mathematics_anxiety_rating_scale_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Abreviated Mathematics Anxiety Rating Scale Experiment</big></b><br />'+
    "Please indicate the level of your anxiety in the following situations." +
    '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var scale = ["Not at all","A little","A fair amount","Much","Very much"];
     
var math01 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Studying for a math test.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_01"}
};

var math02 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Taking math section of the college entrance exam.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_02"}
};

var math03 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Taking an exam (quiz) in a math course. <br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_03"}
};

var math04 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Taking an exam (final) in a math course.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_04"}
};

var math05 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Picking up math textbook to begin working on a homework assignment.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_05"}
};

var math06 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Being given homework assignments of many difficult problems that are due the next class meeting.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_06"}
};

var math07 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Thinking about an upcoming math test 1 week before.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_07"}
};

var math08 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Thinking about an upcoming math test 1 day before.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_08"}
};

var math09 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Thinking about an upcoming math test 1 hour before.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_09"}
};

var math10 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Realizing you have to take a certain number of math classes to fulfill requirements.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_10"}
};

var math11 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Picking up math textbook to begin a difficult reading assignment.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_11"}
};

var math12 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Receiving your final math grade in the mail.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_12"}
};

var math13 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Opening a math or stat book and seeing a page full of problems.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_13"}
};

var math14 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Getting ready to study for a math test.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_14"}
};

var math15 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Being given a “pop” quiz in a math class.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_15"}
};

var math16 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Reading a cash register receipt after your purchase.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_16"}
};

var math17 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Being given a set of numerical problems involving addition to solve on paper.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_17"}
};

var math18 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Being given a set of subtraction problems to solve.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_18"}
};

var math19 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Being given a set of multiplication problems to solve.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_19"}
};

var math20 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Being given a set of division problems to solve.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_20"}
};

var math21 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Buying a math textbook.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_21"}
};

var math22 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Watching a teacher work on an algebraic equation on the blackboard.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_22"}
};

var math23 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Signing up for a math course.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_23"}
};

var math24 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Listening to another student explain a math formula.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_24"}
};

var math25 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Walking into a math class.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Math_25"}
};

// Creacion de timeline e inclusion de trials
abreviated_mathematics_anxiety_rating_scale_experiment = [];    //timeline

//add the trials to the timeline

abreviated_mathematics_anxiety_rating_scale_experiment.push(math01);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math02);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math03);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math04);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math05);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math06);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math07);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math08);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math09);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math10);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math11);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math12);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math13);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math14);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math15);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math16);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math17);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math18);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math19);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math20);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math21);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math22);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math23);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math24);
abreviated_mathematics_anxiety_rating_scale_experiment.push(math25);

// reorder the trials
abreviated_mathematics_anxiety_rating_scale_experiment = jsPsych.randomization.repeat(abreviated_mathematics_anxiety_rating_scale_experiment,1);

// add instruccions at beginning
abreviated_mathematics_anxiety_rating_scale_experiment.unshift(screen_abreviated_mathematics_anxiety_rating_scale_experiment);

// add full screen at beginning
//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  abreviated_mathematics_anxiety_rating_scale_experiment.unshift({
    type: 'fullscreen',
    message: '<p>The experiment will enter full screen mode</p>',
    button_label: "Full screen",
    delay_after: 0,
    fullscreen_mode: true
  });
}