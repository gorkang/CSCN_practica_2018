// Funciones de apoyo
onkeydown = function block_fkeys(event) {
  //Blocks presses of f1 and f6
  var x = event.which || event.keyCode;
  if (x == 112 || x == 116) {
    console.log("Blocked key");
    event.preventDefault();
    return false;
  } else {
    return;
  }
}

var is_working;

// Inicio prueba
var instructions = {
  type: "instructions",
  pages: ['En este cuestionario aparecen varios grupos de afirmaciones. Por favor, lea con atención cada una. A continuación, señale cuál de las afirmaciones de cada grupo describe mejor cómo se ha sentido durante esta última semana, incluido en el día de hoy. Si dentro de un mismo grupo, hay más de una afirmación que considere aplicable a su caso, márquela también.'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_survey_919492"
  }
};

var working = {
  type: "survey-multi-choice",
  questions: [{
    prompt: "¿Tiene usted algún trabajo?",
    options: ['Si', 'No'],
    required: true
  }],
  data: {
    trialid: "survey_895386_1"
  },
  on_finish: function(data) {
    if (data.responses == '{"Q0":"No"}') {
      is_working = false;
    } else if (data.responses == '{"Q0":"Si"}') {
      is_working = true;
    }

  }
};

var if_not_working = {
  type: "survey-multi-choice",
  questions: [{
    prompt: "1- ¿Qué tan interesado está en actividades relacionadas a su hogar?",
    options: ['Mucho', 'Medianamente', 'Poco', 'Nada'],
    required: true
  }],
  data: {
    trialid: "survey_895386_2"
  }
};

var if_working = {
  type: "survey-multi-choice",
  questions: [{
    prompt: "1- ¿Qué tan interesado está en su trabajo?",
    options: ['Mucho', 'Medianamente', 'Poco', 'Nada'],
    required: true
  }],
  data: {
    trialid: "survey_895386_2"
  }
};

var trials = [{
    question: '2- Realiza estas actividades con:',
    options: ['Mucho gusto', 'Algo de gusto', 'Un poco de gusto', 'Nada de gozo']
  },
  {
    question: '3- ¿Está interesado en pasatiempos/ocio?',
    options: ['Mucho', 'Medianamente', 'Poco', 'Nada']
  },
  {
    question: '4- La calidad de tu tiempo libre es:',
    options: ['Muy buena', 'Buena', 'Justa', 'Insatisfactoria']
  },
  {
    question: '5- ¿Con qué frecuencia usted busca contacto con los miembros de su familia?:',
    options: ['Muy frecuente', 'Frecuentemente', 'Raramente', 'Nunca']
  },
  {
    question: '6- El estado de relaciones de su familia es:',
    options: ['Muy bueno', 'Bueno', 'Justo', 'Insatisfactorio']
  },
  {
    question: '7- Fuera de su familia, tiene relaciones con:',
    options: ['Muchas personas', 'Algunas personas', ' Pocas personas', 'Nadie']
  },
  {
    question: '8- ¿Intenta formar relaciones con otras personas?:',
    options: [' Muy activamente', 'Activamente', 'Moderadamente', 'Pasivamente']
  },
  {
    question: '9- ¿En general, cómo valora sus relaciones con otras personas?',
    options: ['Muy buena', 'Buena', 'Justa', 'Insatisfactoria']
  },
  {
    question: '10- ¿Qué valor le otorga a sus relaciones con otras personas?',
    options: ['Gran valor', 'Algún valor', 'Poco valor', 'Ningún valor']
  },
  {
    question: '11- ¿Qué tan a menudo las personas en su círculo social buscan tomar contacto con usted?',
    options: ['Muy a menudo', 'A menudo', 'Raramente', 'Nunca']
  },
  {
    question: '12- ¿Se preocupa de las normas sociales, las buenas maneras, la cortesía, etc.?',
    options: ['Siempre', 'La mayor parte del tiempo', 'Raramente', 'Nunca']
  },
  {
    question: '13- ¿Hasta qué punto está usted involucrado en la vida comunitaria (Club, etc.)',
    options: ['Completamente', 'Moderadamente', 'Levemente', 'Para nada']
  },
  {
    question: '14- ¿Le gusta buscar información acerca de cosas, situaciones, y personas para mejorar su comprensión de ellos?:',
    options: ['Mucho', 'Moderadamente', 'No mucho', 'Para nada']
  },
  {
    question: '15- ¿Está interesado en información científica, técnica o cultural?:',
    options: ['Mucho', 'Moderadamente', 'Levemente', 'Para Nada']
  },
  {
    question: '16- ¿Con qué frecuencia tiene dificultad para expresar su opinión a las personas?',
    options: ['Siempre', 'A menudo', 'A veces', 'Nunca']
  },
  {
    question: '17- ¿Con qué frecuencia se siente rechazado o excluido de su círculo?',
    options: ['Siempre', 'A menudo', 'A veces', 'Nunca']
  },
  {
    question: '19- ¿Qué tan importante considera su apariencia física?',
    options: ['Mucho', 'Moderadamente', 'No mucho', 'Para nada']
  },
  {
    question: '20- ¿En qué grado tiene dificultades para manejar sus recursos e ingresos económicos?',
    options: ['Siempre', 'A menudo', 'A veces', 'Nunca']
  },
  {
    question: '21- ¿Se siente capaz de organizar su entorno de acuerdo a sus deseos y necesidades?',
    options: ['Muchísimo', 'Moderadamente', 'No mucho', 'Para nada']
  }
]

// Creacion de timeline e inclusion de trials

survey_895386 = [];

if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
  //If not FULLSCREEN enable fullscreen
  survey_895386.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

survey_895386.push(instructions);
survey_895386.push(working);
survey_895386.push({
  timeline: [if_working],
  conditional_function: function() {
    return (is_working);
  }
});
survey_895386.push({
  timeline: [if_not_working],
  conditional_function: function() {
    return (!is_working);
  }
});

index = 3;
trials.forEach(function(trial) {
  survey_895386.push({
    type: "survey-multi-choice",
    questions: [{
      prompt: "<div class='justified'><br/>" + trial.question + "<br/></div>",
      options: trial.options,
      required: true
    }],
    data: {
      trialid: "survey_895386_" + index
    }
  })
  index += 1;
})
