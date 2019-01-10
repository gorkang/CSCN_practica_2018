/**
@file
@name
 * The experiment Big Five
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

var screen_big_five_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Big Five</big></b><br />'+
    "Here are a number of characteristics that may or may not apply to you.  For example, do you agree that you are someone who likes to spend time with others?  Please write a number next to each statement to indicate the extent to which you agree or disagree with that statement." +
    '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var scale = ["<center>Disagree</br>Strongly</center>","<center>Disagree</br>a little</center>","<center>Neither agree</br>nor disagree</center>","<center>Agree</br>a little</center>","<center>Agree</br>Strongly</center>"];
     
var question01 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Is talkative.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_01"}
};

var question02 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Tends to find fault with others.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_02"}
};

var question03 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Does a thorough job.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_03"}
};

var question04 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Is depressed, blue.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_04"}
};

var question05 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Is original, comes up with new ideas.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_05"}
};

var question06 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Is reserved.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_06"}
};

var question07 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Is helpful and unselfish with others.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_07"}
};

var question08 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Can be somewhat careless.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_08"}
};

var question09 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Is relaxed, handles stress well.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_09"}
};

var question10 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Is curious about many different things.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_10"}
};

var question11 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Is full of energy.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_11"}
};

var question12 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Starts quarrels with others.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_12"}
};

var question13 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Is a reliable worker.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_13"}
};

var question14 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Can be tense.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_14"}
};

var question15 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Is ingenious, a deep thinker.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_15"}
};

var question16 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Generates a lot of enthusiasm.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_16"}
};

var question17 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Has a forgiving nature.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_17"}
};

var question18 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Tends to be disorganized.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_18"}
};

var question19 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Worries a lotd.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_19"}
};

var question20 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Has an active imagination.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_20"}
};

var question21 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Tends to be quiet.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_21"}
};

var question22 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Is generally trusting.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_22"}
};

var question23 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Tends to be lazy.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_23"}
};

var question24 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Is emotionally stable, not easily upset.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_24"}
};

var question25 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Is inventive.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_25"}
};

var question26 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Has an assertive personality.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_26"}
};

var question27 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Can be cold and aloof.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_27"}
};

var question28 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Perseveres until the task is finished.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_28"}
};

var question29 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Can be moody.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_29"}
};

var question30 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Values artistic, aesthetic experiences.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_30"}
};

var question31 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Is sometimes shy, inhibited.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_31"}
};

var question32 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Is considerate and kind to almost everyone.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_32"}
};

var question33 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Does things efficiently.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_33"}
};

var question34 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Remains calm in tense situations.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_34"}
};

var question35 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Prefers work that is routine.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_35"}
};

var question36 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Is outgoing, sociable.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_36"}
};

var question37 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Is sometimes rude to others.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_37"}
};

var question38 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Makes plans and follows through with them.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_38"}
};

var question39 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Gets nervous easily.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_39"}
};

var question40 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Likes to reflect, play with ideas.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_40"}
};

var question41 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Has few artistic interests.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_41"}
};

var question42 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Likes to cooperate with others.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_42"}
};

var question43 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Is easily distracted.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_43"}
};

var question44 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><b>I'm someone who...</b><br />Is sophisticated in art, music, or literature.<br /></div>", options: scale, required: true, horizontal: true}],
  data: {trialid: "Question_44"}
};

// Creacion de timeline e inclusion de trials
big_five_experiment = [];    //timeline

//add the trials to the timeline

big_five_experiment.push(question01);
big_five_experiment.push(question02);
big_five_experiment.push(question03);
big_five_experiment.push(question04);
big_five_experiment.push(question05);
big_five_experiment.push(question06);
big_five_experiment.push(question07);
big_five_experiment.push(question08);
big_five_experiment.push(question09);
big_five_experiment.push(question10);
big_five_experiment.push(question11);
big_five_experiment.push(question12);
big_five_experiment.push(question13);
big_five_experiment.push(question14);
big_five_experiment.push(question15);
big_five_experiment.push(question16);
big_five_experiment.push(question17);
big_five_experiment.push(question18);
big_five_experiment.push(question19);
big_five_experiment.push(question20);
big_five_experiment.push(question21);
big_five_experiment.push(question22);
big_five_experiment.push(question23);
big_five_experiment.push(question24);
big_five_experiment.push(question25);
big_five_experiment.push(question26);
big_five_experiment.push(question27);
big_five_experiment.push(question28);
big_five_experiment.push(question29);
big_five_experiment.push(question30);
big_five_experiment.push(question31);
big_five_experiment.push(question32);
big_five_experiment.push(question33);
big_five_experiment.push(question34);
big_five_experiment.push(question35);
big_five_experiment.push(question36);
big_five_experiment.push(question37);
big_five_experiment.push(question38);
big_five_experiment.push(question39);
big_five_experiment.push(question40);
big_five_experiment.push(question41);
big_five_experiment.push(question42);
big_five_experiment.push(question43);
big_five_experiment.push(question44);

// reorder the trials
big_five_experiment = jsPsych.randomization.repeat(big_five_experiment,1);

// add instruccions at beginning
big_five_experiment.unshift(screen_big_five_experiment);

// add full screen at beginning
//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  big_five_experiment.unshift({
    type: 'fullscreen',
    message: '<p>The experiment will enter full screen mode</p>',
    button_label: "Full screen",
    delay_after: 0,
    fullscreen_mode: true
  });
}