/**
@file
@name
 * The experiment 658421
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

onkeydown = function block_fkeys(event) {
  var x = event.which || event.keyCode;
  if (x == 112 || x == 116) {
    console.log("Blocked key");
    event.preventDefault();
    return false;
  } else {
    return;
  }
}

var screen_ineco_frontal_screening_experiment = {
  type: 'instructions',
  pages: ['<p><left><b><big>INECO Frontal screening</big></b><br />' +
    "Lee atentamente las siguientes instrucciones" +
    '</p>'
  ],
  data: {
    trialid: "Screen_WM"
  },
  show_clickable_nav: true,
  on_trial_start: function() {
    bloquear_enter = 0;
  }
};

var surveyexplanation0 = {
  type: "instructions",
  pages: ["<div class = centerbox>" +
    "<p class = center-block-text>" +
    "Complete con los puntajes obtenidos en cada prueba" +
    "</p></div>"
  ],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_survey"
  }
};

var points1 = {
  type: "survey-text0",
  preamble: "Escriba el puntaje",
  maxValue: 3,
  questions: [{
    prompt: "Series motoras"
  }],
  data: {
    trialid: "series_motoras"
  }
};

var points2 = {
  type: "survey-text0",
  preamble: "Escriba el puntaje",
  maxValue: 3,
  questions: [{
    prompt: "Instrucciones conflictivas"
  }],
  data: {
    trialid: "instrucciones_conflictivas"
  }
};


var points3 = {
  type: "survey-text0",
  preamble: "Escriba el puntaje",
  maxValue: 3,
  questions: [{
    prompt: "Control inhibitorio motor"
  }],
  data: {
    trialid: "control_inhibitoio_motor"
  }
};

var points4 = {
  type: "survey-text0",
  preamble: "Escriba el puntaje",
  maxValue: 6,
  questions: [{
    prompt: "Retencion digitos atras"
  }],
  data: {
    trialid: "retencion_de_digitos_atras"
  }
};

var points5 = {
  type: "survey-text0",
  preamble: "Escriba el puntaje",
  maxValue: 2,
  questions: [{
    prompt: "Meses Atras"
  }],
  data: {
    trialid: "meses_atras"
  }
};

var points6 = {
  type: "survey-text0",
  preamble: "Escriba el puntaje",
  maxValue: 4,
  questions: [{
    prompt: "Memoria trabajo visual"
  }],
  data: {
    trialid: "memoria_trabajo_visual"
  }
};

// Inicio prueba
var surveyexplanation = {
  type: "instructions",
  pages: ["<div class = centerbox>" +
    "<p class = center-block-text>" +
    "Complete los refranes" +
    "</p></div>"
  ],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_survey"
  }
};

var survey1 = {
  type: "survey-text",
  preamble: "Escriba la respuesta",
  questions: [{
    prompt: "Refran 1"
  }],
  data: {
    trialid: "refran_1"
  }
};

var survey2 = {
  type: "survey-text",
  preamble: "Escriba la respuesta",
  questions: [{
    prompt: "Refran 2"
  }],
  data: {
    trialid: "refran_2"
  }
};

var survey3 = {
  type: "survey-text",
  preamble: "Escriba la respuesta",
  questions: [{
    prompt: "Refran 3"
  }],
  data: {
    trialid: "refran_3"
  }
};

var survey4 = {
  type: "survey-text",
  preamble: "Escriba la respuesta",
  questions: [{
    prompt: "Palabra inhibicion 1"
  }],
  data: {
    trialid: "palabra_inhibicion_1"
  }
};

var survey5 = {
  type: "survey-text",
  preamble: "Escriba la respuesta",
  questions: [{
    prompt: "Palabra inhibicion 2"
  }],
  data: {
    trialid: "palabra_inhibicion_2"
  }
};

var survey6 = {
  type: "survey-text",
  preamble: "Escriba la respuesta",
  questions: [{
    prompt: "Palabra inhibicion 3"
  }],
  data: {
    trialid: "palabra_inhibicion_2"
  }
};



// Creacion de timeline e inclusion de trials
ineco_frontal_screening_experiment = []; //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
  ineco_frontal_screening_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
ineco_frontal_screening_experiment.push(screen_ineco_frontal_screening_experiment);
ineco_frontal_screening_experiment.push(surveyexplanation0);
ineco_frontal_screening_experiment.push(points1);
ineco_frontal_screening_experiment.push(points2);
ineco_frontal_screening_experiment.push(points3);
ineco_frontal_screening_experiment.push(points4);
ineco_frontal_screening_experiment.push(points5);
ineco_frontal_screening_experiment.push(points6);
ineco_frontal_screening_experiment.push(surveyexplanation);
ineco_frontal_screening_experiment.push(survey1);
ineco_frontal_screening_experiment.push(survey2);
ineco_frontal_screening_experiment.push(survey3);
ineco_frontal_screening_experiment.push(survey4);
ineco_frontal_screening_experiment.push(survey5);
ineco_frontal_screening_experiment.push(survey6);
