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

// Inicio prueba
var instructions = {
  type: "instructions",
  pages: ['<p><left><b><big>GHQ</big></b><br />'+'Nos gustaría saber si tiene algún problema médico y cómo ha estado de salud en general, durante las últimas semanas. Recuerde que sólo debe responder sobre los problemas recientes y los que tiene ahora, NO sobre las que tuvo en el pasado.'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_GHQ_general_health_questionnaire"
  }
};

var trials = [{
    question: '1. ¿Ha podido concentrarse bien en lo que hacía?',
    options: ["a) Mejor que lo habitual", "b) Igual que lo habitual", "c) Menos que lo habitual", "d) Mucho menos que lo habitual"]
  },
  {
    question: '2. ¿Sus preocupaciones le han hecho perder mucho sueño?',
    options: ["a) Mejor que lo habitual", "b) No más que lo habitual", "c)Algo más que lo habitual", "d) Mucho más que lo habitual"]
  },
  {
    question: '3. ¿Ha sentido que está desempeñando un papel útil en la vida?',
    options: ["a) Más útil que lo habitual", "b) Igual que lo habitual", "c) Menos útil que lo habitual", "d) Mucho menos útil que lo habitual"]
  },
  {
    question: '4. ¿Se ha sentido capaz de tomar decisiones?',
    options: ["a) Más que lo habitual", "b) Igual que lo habitual", "c) Menos que lo habitual", "d) Mucho menos que lo habitual"]
  },
  {
    question: '5. ¿Se ha notado constantemente agobiado y en tensión?',
    options: ["a) No, en lo absolutol", "b) No más que lo habitual", "c) Algo más que lo habitual", "d) Mucho más que lo habitual"]
  },
  {
    question: '6. ¿Ha tenido la sensación de que no puede superar sus dificultades?',
    options: ["a) No, en absoluto", "b) No más que lo habitual", "c) Algo más que lo habitual", "d) Mucho más que lo habitual"]
  },
  {
    question: '7. ¿Ha sido capaz de disfrutar de sus actividades normales de cada día?',
    options: ["a) Más que lo habitual", "b) Igual que lo habitual", "c) Menos que lo habitual", "d) Mucho menos que lo habitual"]
  },
  {
    question: '8. ¿Ha sido capaz de hacer frente adecuadamente a sus problemas?',
    options: ["a) Más que lo habitual", "b) Igual que lo habitua", "c) Menos que lo habitual", "d) Mucho menos que lo habitual"]
  },
  {
    question: '9. ¿Se ha sentido poco feliz o deprimido?',
    options: ["a) No, en absoluto", "b) No más que lo habitual", "c) Algo más que lo habitual", "d) Mucho más que lo habitual"]
  },
  {
    question: '10. ¿Ha perdido confianza en sí mismo?',
    options: ["a) No, en absoluto", "b) No más que lo habitual", "c) Algo más que lo habitual", "d) Mucho más que lo habitual"]
  },
  {
    question: '11. ¿Ha pensado que usted es una persona que no vale para nada??',
    options: ["a) No, en absoluto", "b) No más que lo habitual", "c) Algo más que lo habitual", "d) Mucho más que lo habitual"]
  },
  {
    question: '12. ¿Se siente razonablemente feliz considerando todas las circunstancias?',
    options: ["a) Más que lo habitual", "b) Igual que lo habitual", "c) Menos que lo habitual", "d) Mucho menos que lo habitua"]
  }
]

// Creacion de timeline e inclusion de trials

GHQ_general_health_questionnaire = [];

if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
  //If not FULLSCREEN enable fullscreen
  GHQ_general_health_questionnaire.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

GHQ_general_health_questionnaire.push(instructions);

index = 1;
trials.forEach(function(trial) {
  GHQ_general_health_questionnaire.push({
    type: "survey-multi-choice",
    questions: [{
      prompt: "<div>Ultimamente:</div><div class='justified'><br/>" + trial.question + "<br/></div>",
      options: trial.options,
      required: true
    }],
    data: {
      trialid: "GHQ_general_health_questionnaire_" + index
    }
  })
  index += 1;
})
