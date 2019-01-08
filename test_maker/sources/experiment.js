/**
@file
@name
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
        '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

// Creacion de timeline e inclusion de trials
questions_experiment = [];    //timeline

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