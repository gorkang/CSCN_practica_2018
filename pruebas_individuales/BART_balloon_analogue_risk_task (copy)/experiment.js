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

var screen_BART_balloon_analogue_risk_task_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>BART</big></b><br />'+
    "Infle los siguientes globos la cantidad que estime conveniente. Estos pueden explotar despues de una cantidad aleatoria de aire. Entre mas consiga inflar los globos, mas ganancias tendra al final"+
    '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};


var survey03 = {
  type: "plugin-bart",
  colors: "red",
  probabilities:8,
  eachEarns:0.25,
  amount: 1
};


var survey04 = {
  type: "plugin-bart",
  colors:"black",
  eachEarns:1,
  probabilities: 8,
  amount:1,
  manual: [0,0,0,0,0,0,1]
};


// Creacion de timeline e inclusion de trials
BART_balloon_analogue_risk_task_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  BART_balloon_analogue_risk_task_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
BART_balloon_analogue_risk_task_experiment.push(screen_BART_balloon_analogue_risk_task_experiment);

BART_balloon_analogue_risk_task_experiment.push(survey03);
BART_balloon_analogue_risk_task_experiment.push(survey04);

//BART_balloon_analogue_risk_task_experiment.push(surveyexplanation);
