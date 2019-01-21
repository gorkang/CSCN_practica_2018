/**
@file
@name
 * The experiment 279271
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

var screen_DSS_decision_styles_scale_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>DSS</big></b><br />'+
    "Conteste las siguientes preguntas sobre decision e intuicion seg&uacute;n la escala"+
    '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var likert_scale = ['<center><p style="font-size:13px">Strongly</br>Disagree</p></center>', '<center><span style="display:inline-block; width: 60px;"></span></center>', '<center><span style="display:inline-block; width: 60px;"></span></center>', '<center><span style="display:inline-block; width: 60px;"></span></center>', '<center><p style="font-size:13px">Strongly</br>Agree</p></center>'];

var survey01 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />I prefer to gather all the necessary information before committing to a decision.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_01"}
};

var survey02 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />I thoroughly evaluate decision alternatives before making a final choice.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey03 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />In decision making, I take time to contemplate the pros/cons or risks/benefits of a situation.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey04 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Investigating the facts is an important part of my decision making process.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey05 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'> I weigh a number of different factors when making decisions.<br /><br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

//previos was desicion style
//intuitivcomes now

var survey06 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />When making decisions, I rely mainly on my gut feelings.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey07 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />My initial hunch about decisions is generally what I follow.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_07"}
};

var survey08 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />I make decisions based on intuition.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_08"}
};

var survey09 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />I rely on my first impressions when making decisions.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_09"}
};

var survey10 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />I weigh feelings more than analysis in making decisions.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_10"}
};



// Creacion de timeline e inclusion de trials
DSS_decision_styles_scale_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  DSS_decision_styles_scale_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
DSS_decision_styles_scale_experiment.push(screen_DSS_decision_styles_scale_experiment);

DSS_decision_styles_scale_experiment.push(survey01);
DSS_decision_styles_scale_experiment.push(survey02);
DSS_decision_styles_scale_experiment.push(survey03);
DSS_decision_styles_scale_experiment.push(survey04);
DSS_decision_styles_scale_experiment.push(survey05);
DSS_decision_styles_scale_experiment.push(survey06);
DSS_decision_styles_scale_experiment.push(survey07);
DSS_decision_styles_scale_experiment.push(survey08);
DSS_decision_styles_scale_experiment.push(survey09);
DSS_decision_styles_scale_experiment.push(survey10);
