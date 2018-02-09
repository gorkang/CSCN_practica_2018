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

onkeydown = function advance(event) {

        if (event.keyCode == 13) { //if the key pressed is enter, advance
            var btn = document.getElementById("jspsych-instructions-next");
            btn.click();
        } else{
            event.preventDefault();
        }

}

var screen_pause_trial_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Pausa</big></b><br />'+
    "Tomese un descanso"+
    '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    wait_time:3000,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var screen_continue_experiment = {
    type: 'instructions',
    pages: ['<p>CONTINUE</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};


// Creacion de timeline e inclusion de trials
pause_trial_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  pause_trial_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
pause_trial_experiment.push(screen_pause_trial_experiment);
pause_trial_experiment.push(screen_continue_experiment);
