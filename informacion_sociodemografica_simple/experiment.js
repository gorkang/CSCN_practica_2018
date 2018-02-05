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

var screen_informacion_sociodemografica_simple_experiment = {
    type: 'instructions',
    pages: ['<p><left>informacion_sociodemografica_simple<br /></p>'],
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
           "Conteste las siguientes preguntas sobre fe religiosa seg&uacute;n la siguiente escala"+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Instructions_survey"}
};

var survey_trial = {
  type: 'survey-text-number',
  questions: [{prompt: "RUT (sin puntos, guión ni dígito verificador. Ejemplo si el rut es 17.736.727-1 escribir 17736727):"}]
};

var survey_trial1 = {
  type: 'survey-text-number',
  questions: [{prompt: "EDAD:"}]
};

var survey_trial2 = {
      type: 'survey-multi-choice1',
      questions: [{prompt: "SEXO", options: ["HOMBRE","MUJER"], required: true,}]
};

var survey_trial3 = {
      type: 'survey-multi-choice1',
      questions: [{prompt: "Nivel de estudios", options: ['1. Educación básica incompleta o inferior.', '2. Básica completa.', '3. Media incompleta.', '4. Media completa / Técnica incompleta.', '5. Universitaria incompleta / Técnica completa', '6. Universitaria completa.', '7. Post Grado (Master, Doctor o equivalente).'], required: true}]
};


// Creacion de timeline e inclusion de trials
informacion_sociodemografica_simple_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  informacion_sociodemografica_simple_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
informacion_sociodemografica_simple_experiment.push(screen_informacion_sociodemografica_simple_experiment);
informacion_sociodemografica_simple_experiment.push(surveyexplanation);
informacion_sociodemografica_simple_experiment.push(survey_trial);
informacion_sociodemografica_simple_experiment.push(survey_trial1);
informacion_sociodemografica_simple_experiment.push(survey_trial2);
informacion_sociodemografica_simple_experiment.push(survey_trial3);
