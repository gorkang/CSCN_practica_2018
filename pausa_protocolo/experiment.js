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

function readTextFile(file, ide)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                console.log("el texto es: "+allText);
                document.getElementById(ide).innerHTML = allText;
            }
        }
    }
    rawFile.send(null);
}



var screen_pausa_protocolo_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Pausa</big></b><br />'+
    "<div id='pausa'></div>"+
    '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    wait_time:3000,
    on_start: function(){
        bloquear_enter = 0;
        console.log("vamos aca");
        readTextFile("inicio_pausa.txt","pausa");
    }
};

var screen_continue_experiment = {
    type: 'instructions',
    pages: ["<div id='continuar'></div>"+
    '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_start: function(){
        bloquear_enter = 0;
        readTextFile("fin_pausa.txt","continuar");
    }
};


// Creacion de timeline e inclusion de trials
pausa_protocolo_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  pausa_protocolo_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
pausa_protocolo_experiment.push(screen_pausa_protocolo_experiment);
pausa_protocolo_experiment.push(screen_continue_experiment);
