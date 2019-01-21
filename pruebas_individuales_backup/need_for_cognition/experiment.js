/**
@file
@name
 * The experiment Need For Cognition 
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
    pages: ['<p><left><b><big>Need For Cognition</big></b><br />'+
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
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I really enjoy a task that involves coming up with new solutions to problems.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_01'}
};
questions_experiment.push(question01);

var question02 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I believe that if I think hard enough, I will be able to achieve my goals in life.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_02'}
};
questions_experiment.push(question02);

var question03 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I am very optimistic about my mental abilities.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_03'}
};
questions_experiment.push(question03);

var question04 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I would prefer a task that is intellectual, difficult, and important to one that is somewhat important but does not require much thought.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_04'}
};
questions_experiment.push(question04);

var question05 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I tend to set goals that can be accomplished only by expending considerable mental effort.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_05'}
};
questions_experiment.push(question05);

var question06 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>When something I read confuses me, I just put it down and forget it.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_06'}
};
questions_experiment.push(question06);

var question07 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I take pride in the products of my reasoning.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_07'}
};
questions_experiment.push(question07);

var question08 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I don't usually think about problems that others have found to be difficult.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_08'}
};
questions_experiment.push(question08);

var question09 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I am usually tempted to put more thought into a task than the job minimally requires.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_09'}
};
questions_experiment.push(question09);

var question10 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>Learning new ways to think doesn't excite me very much.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_10'}
};
questions_experiment.push(question10);

var question11 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I am hesitant about making important decisions after thinking about them.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_11'}
};
questions_experiment.push(question11);

var question12 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I usually end up deliberating about issues even when they do not affect me personally.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_12'}
};
questions_experiment.push(question12);

var question13 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I prefer just to let things happen rather than try to understand why they turned out that way.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_13'}
};
questions_experiment.push(question13);

var question14 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I have difficulty thinking in new and unfamiliar situations.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_14'}
};
questions_experiment.push(question14);

var question15 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>The idea of relying on thought to make my way to the top does not appeal to me.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_15'}
};
questions_experiment.push(question15);

var question16 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>The notion of thinking abstractly is not appealing to me.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_16'}
};
questions_experiment.push(question16);

var question17 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I am an intellectual.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_17'}
};
questions_experiment.push(question17);

var question18 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I find it especially satisfying to complete an important task that required a lot of thinking and mental effort.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_18'}
};
questions_experiment.push(question18);

var question19 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I only think as hard as I have to.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_19'}
};
questions_experiment.push(question19);

var question20 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I don't reason well under pressure.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_20'}
};
questions_experiment.push(question20);

var question21 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I like tasks that require little thought once I've learned them.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_21'}
};
questions_experiment.push(question21);

var question22 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I prefer to think about small, daily projects to long-term ones.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_22'}
};
questions_experiment.push(question22);

var question23 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I would rather do something that requires little thought than something that is sure to challenge my thinking abilities.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_23'}
};
questions_experiment.push(question23);

var question24 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I find little satisfaction in deliberating hard and for long hours.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_24'}
};
questions_experiment.push(question24);

var question25 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I think primarily because I have to.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_25'}
};
questions_experiment.push(question25);

var question26 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I more often talk with other people about the reasons for and possible solutions to international problems than about gossip or tidbits of what famous people are doing.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_26'}
};
questions_experiment.push(question26);

var question27 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>These days, I see little chance for performing well, even in “intellectual” jobs, unless one knows the right people.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_27'}
};
questions_experiment.push(question27);

var question28 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>More often than not, more thinking just leads to more errors.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_28'}
};
questions_experiment.push(question28);

var question29 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I don't like to have the responsibility of handling a situation that requires a lot of thinking.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_29'}
};
questions_experiment.push(question29);

var question30 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I appreciate opportunities to discover the strengths and weaknesses of my own reasoning.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_30'}
};
questions_experiment.push(question30);

var question31 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I feel relief rather than satisfaction after completing a task that required a lot of mental effort.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_31'}
};
questions_experiment.push(question31);

var question32 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>Thinking is not my idea of fun.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_32'}
};
questions_experiment.push(question32);

var question33 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I try to anticipate and avoid situations where there is a likely chance I will have to think in depth about something.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_33'}
};
questions_experiment.push(question33);

var question34 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I don't like to be responsible for thinking of what I should be doing with my life.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_34'}
};
questions_experiment.push(question34);

var question35 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I prefer watching educational to entertainment programs.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_35'}
};
questions_experiment.push(question35);

var question36 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I often succeed in solving difficult problems that I set out to solve.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_36'}
};
questions_experiment.push(question36);

var question37 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I think best when those around me are very intelligent.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_37'}
};
questions_experiment.push(question37);

var question38 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I am not satisfied unless I am thinking.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_38'}
};
questions_experiment.push(question38);

var question39 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I prefer my life to be filled with puzzles that</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_39'}
};
questions_experiment.push(question39);

var question40 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I must solve.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_40'}
};
questions_experiment.push(question40);

var question41 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I would prefer complex to simple problems.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_41'}
};
questions_experiment.push(question41);

var question42 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>Simply knowing the answer rather than understanding the reasons for the answer to a problem is fine with me.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_42'}
};
questions_experiment.push(question42);

var question43 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>When I am figuring out a problem, what I see as the solution to a problem is more important than what others believe or say is the solution.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_43'}
};
questions_experiment.push(question43);

var question44 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>It's enough for me that something gets the job done, I don't care how or why it works.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_44'}
};
questions_experiment.push(question44);

var question45 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>Ignorance is bliss.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_45'}
};
questions_experiment.push(question45);

var question46 = {
  type: 'survey-multi-choice1',
  questions: [{prompt: "<div class='justified'>I enjoy thinking about an issue even when the results of my thought will have no effect on the outcome of the issue.</div>", options: ['<center>Disagree Very</br>Strongly</center>', '<center>Disagree</br>Strongly</center>', '<center>Disagree</br>a little</center>', '<center>Disagree</br>somewhat</center>', '<center>Neither agree</br>nor disagree</center>', '<center>Agree</br>somewhat</center>', '<center>Agree</br>a little</center>', '<center>Agree</br>Strongly</center>', '<center>Agree Very</br>Strongly</center>'], required: true, horizontal: true}],
  data: {trialid: 'Question_46'}
};
questions_experiment.push(question46);

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