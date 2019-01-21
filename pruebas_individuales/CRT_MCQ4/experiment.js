/**
@file
@name
 * The experiment CRT_MCQ4_experiment
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

var screen_CRT_MCQ4_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>CRT_MCQ4</big></b><br />'+
    "You will see on this page several items that vary in difficulty. Answer as many as you can." +
    '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

     
var math01 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />A bat and a ball cost £1.10 in total. The bat costs £1.00 more than the ball. How much does the ball cost?<br /></div>", options: ['5 pence', '10 pence', '9 pence', '1 pence'], required: true, horizontal: true}],
  data: {trialid: "Math_01"}
};

var math02 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets? <br /></div>", options: ['5 minutes', '100 minutes', '20 minutes', '500 minutes'], required: true, horizontal: true}],
  data: {trialid: "Math_02"}
};

var math03 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />In a lake, there is a patch of lily pads. Every day, the patch doubles in size. If it takes 48 days for the patch to cover the entire lake, <br/>how long would it take for the patch to cover half of the lake? <br /></div>", options: ['47 days', '24 days', '12 days', '36 days '], required: true, horizontal: true}],
  data: {trialid: "Math_03"}
};

var math04 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />If John can drink one barrel of water in 6 days, and Mary can drink one barrel of water in 12 days, <br/>how long would it take them to drink one barrel of water together? <br /></div>", options: ['4 days','9 days','12 days','3 days'], required: true, horizontal: true}],
  data: {trialid: "Math_04"}
};

var math05 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Jerry received both the 15th highest and the 15th lowest mark in the class. How many students are in the class? <br /></div>", options: ['29 students','30 students','1 student','15 students'], required: true, horizontal: true}],
  data: {trialid: "Math_05"}
};

var math06 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />A man buys a pig for £60, sells it for £70, buys it back for £80, and sells it finally for £90. How much has he made? <br /></div>", options: ['20 pounds','10 pounds','0 pounds','30 pounds'], required: true, horizontal: true}],
  data: {trialid: "Math_06"}
};

var math07 = {
  type: "survey-multi-choice-horizontal",
  questions: [{prompt: "<div class='justified'><br />Simon decided to invest £8,000 in the stock market one day early in 2008.  Six months after he invested, on July 17, the stocks he had purchased were down 50%. <br/> Fortunately for Simon, from July 17 to October 17, the stocks he had purchased went up 75%. At this point, Simon:<br /></div>", options: ['has lost money.', 'is ahead of where he began.', 'has broken even in the stock market.', 'it cannot be determined.'], required: true, horizontal: true}],
  data: {trialid: "Math_07"}
};

// Creacion de timeline e inclusion de trials
CRT_MCQ4_experiment = [];    //timeline

//add the trials to the timeline

CRT_MCQ4_experiment.push(math01);
CRT_MCQ4_experiment.push(math02);
CRT_MCQ4_experiment.push(math03);
CRT_MCQ4_experiment.push(math04);
CRT_MCQ4_experiment.push(math05);
CRT_MCQ4_experiment.push(math06);
CRT_MCQ4_experiment.push(math07);

// reorder the trials
CRT_MCQ4_experiment = jsPsych.randomization.repeat(CRT_MCQ4_experiment,1);

// add instruccions at beginning
CRT_MCQ4_experiment.unshift(screen_CRT_MCQ4_experiment);

// add full screen at beginning
//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  CRT_MCQ4_experiment.unshift({
    type: 'fullscreen',
    message: '<p>The experiment will enter full screen mode</p>',
    button_label: "Full screen",
    delay_after: 0,
    fullscreen_mode: true
  });
}