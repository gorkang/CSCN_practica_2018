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

var screen_informacion_sociodemografica_simple_experiment = {
  type: 'instructions',
  pages: ['<p><left><b><big>Informacion sociodemografica simple</big></b><br />' +
    "A continuación se le solicitan algunos datos demográficos para ser empleados como información estadística. Por favor marque las alternativas correspondientes a su situación y complete toda la información, la cual es privada." +
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

// Inicio prueba

var rut = {
  type: "survey-text",
  questions: [{
    prompt: "<div class='justified'><br/>" + 'RUT (sin puntos, guión ni dígito verificador. Ejemplo si el rut es 17.736.727-1 escribir 17736727):' + "<br/></div>",
    required: true,
    type: "number"
  }],
  data: {
    trialid: "informacion_sociodemografica_rut"
  }
}

var age = {
  type: "survey-text",
  questions: [{
    prompt: "<div class='justified'><br/>" + '8. ¿Cuántos años tiene?' + "<br/></div>",
    type: 'number',
    required: true
  }],
  endword: "Años",
  data: {
    trialid: "informacion_sociodemografica_age"
  }
}

var gender = {
  type: "survey-multi-choice-vertical",
  questions: [{
    prompt: "<div class='justified'><br/>" + 'Género' + "<br/></div>",
    options: ['Femenino', 'Masculino'],
    required: true
  }],
  data: {
    trialid: "informacion_sociodemografica_gender"
  },
  on_finish: function(data){
    if(data.responses == '{"Q0":"Femenino"}'){
      is_female = true;
    }
    else{
      is_female = false;
    }
  }
}

var study = {
  type: "survey-multi-choice-vertical",
  questions: [{
    prompt: "<div class='justified'><br/>" + '14. ¿Cuál es el nivel de educación que alcanzó usted?' + "<br/></div>",
    options: ['1. Educación básica incompleta o inferior.', '2. Básica completa.', '3. Media incompleta.', '4. Media completa / Técnica incompleta.', '5. Universitaria incompleta / Técnica completa', '6. Universitaria completa.', '7. Post Grado (Master, Doctor o equivalente).'],
    required: true
  }],
  endword: "",
  data: {
    trialid: "informacion_sociodemografica_studies"
  }
}

// Creacion de timeline e inclusion de trials
informacion_sociodemografica_simple_experiment = []; //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
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

informacion_sociodemografica_simple_experiment.push(rut);
informacion_sociodemografica_simple_experiment.push(age);
informacion_sociodemografica_simple_experiment.push(gender);
informacion_sociodemografica_simple_experiment.push(study);
