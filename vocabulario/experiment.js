/**
@file
@name
 * The experiment 427728
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

var screen_vocabulario_experiment = {
    type: 'instructions',
    pages: ['<p><left>vocabulario<br /></p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

// Inicio prueba
var surveyexplanation={
    type: "instructions",
    pages: ["<div class = centerbox>"+
           "<p class = center-block-text>"+
           "Diga a qué corresponden las figuras"+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Instructions_survey"}
};

var temp_timeline = [];
var prompts = [" CAMA ",
                " MANZANA ",
                " TERMINAR ",
                " GUANTE ",
                " DESAYUNO ",
                " ESTORBAR ",
                " INTIMO ",
                " IGNORANTE ",
                " CURIOSO ",
                " ORDINARIO ",
                " SUPREMO ",
                " CONSUMIR ",
                " FORTUITO ",
                " COMODO ",
                " IMPROVISAR ",
                " ESCEPTICO ",
                " EXPEDITO ",
                " PLAGIAR ",
                " PERTINENTE ",
                " AUDAZ ",
                " OPTIMIZAR ",
                " INSTINTO ",
                " BILATERAL ",
                " CANCILLERIA ",
                " PALIAR ",
                " EXTRADITAR ",
                " SUBREPTICIO "];
condition1 = true;//if flase, skips

var img1 = {
  type: "survey-text",
  preamble: " Diga a qué corresponde la figura<br /><br />",
  questions: [{
    prompt: " <img src='images/auto.jpeg'> "
  }]
};

var img2 = {
  type: "survey-text",
  preamble: " Diga a qué corresponde la figura<br /><br />",
  questions: [{
    prompt: " <img src='images/avion.jpeg'> "
  }]
};

var img3 = {
  type: "survey-text",
  preamble: " Diga a qué corresponde la figura<br /><br />",
  questions: [{
    prompt: " <img src='images/canasto.jpeg'> "
  }]
};

var surveyexplanation2={
    type: "instructions",
    pages: ["<div class = centerbox>"+
           "<p class = center-block-text>"+
           "Describa y explique el significado de las siguientes palabras."+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Instructions_survey"}
};

prompts.forEach(function(operacion) {
    temp_timeline.push({
        timeline: [{
            type: "survey-text",
            preamble:" Describa y explique el significado de la palabra. ",
            questions: [{
                prompt: '<p>' + operacion + '</p>'
            }]
        }],
        conditional_function: function(data) {
            if (condition1) {
                return true;
            } else {
                return false;
            }
        }
    });
});







// Creacion de timeline e inclusion de trials
vocabulario_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  vocabulario_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
vocabulario_experiment.push(screen_vocabulario_experiment);
vocabulario_experiment.push(surveyexplanation);
vocabulario_experiment.push(img1);
vocabulario_experiment.push(img2);
vocabulario_experiment.push(img3);
vocabulario_experiment.push(surveyexplanation2);
vocabulario_experiment.push({
    timeline: temp_timeline
});
