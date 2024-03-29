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
  pages: ["<p><left><b><big>Regulacion emocional</big></b><br />"+
    'Nos gustaría hacerle algunas preguntas sobre su vida emocional, en particular, cómo usted controla (es decir, regula y maneja) sus emociones.' +
    '<br><br>' +
    'Las siguientes preguntas involucran dos aspectos distintos de su vida emocional. Una es su experiencia emocional, o lo que sientes dentro. El otro es su expresión emocional, o cómo usted demuestra sus emociones en la manera que usted habla, gesto, o se comporta.' +
    '<br><br>' +
    'Aunque algunas de las siguientes preguntas pueden parecer similares entre sí, difieren de maneras importantes.'
  ],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_regulacion_emocional"
  }
};

likert = ['1<br>Muy en desacuerdo', '2', '3', '4<br>Neutral', '5', '6', '7<br>Muy de acuerdo'];

var trials = [{
    question: 'Cuando quiero sentir una emoción más positiva (como la alegría o la diversión), cambio lo que estoy pensando.',
    options: likert
  },
  {
    question: 'Mantengo mis emociones para mí mismo.',
    options: likert
  },
  {
    question: 'Cuando quiero sentir una emoción menos negativa (como tristeza o enojo), cambio lo que estoy pensando.',
    options: likert
  },
  {
    question: 'Cuando siento emociones positivas, tengo cuidado de no expresarlas.',
    options: likert
  },
  {
    question: 'Cuando me enfrento a una situación estresante, me hago pensar en ello de una manera que me ayuda a mantener la calma.',
    options: likert
  },
  {
    question: 'Controlo mis emociones al no expresarlas.',
    options: likert
  },
  {
    question: 'Cuando quiero sentir una emoción más positiva, cambio la forma en que pienso en la situación.',
    options: likert
  },
  {
    question: 'Controlo mis emociones cambiando la forma en que pienso sobre la situación en que estoy.',
    options: likert
  },
  {
    question: 'Cuando estoy sintiendo emociones negativas, me aseguro de no expresarlas.',
    options: likert
  },
  {
    question: 'Si quiero sentir una emoción menos negativa, cambio la forma en que pienso en la situación',
    options: likert
  },
]

// Creacion de timeline e inclusion de trials

regulacion_emocional = [];

if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
  //If not FULLSCREEN enable fullscreen
  regulacion_emocional.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

regulacion_emocional.push(instructions);

index = 1;
trials.forEach(function(trial) {
  regulacion_emocional.push({
    type: "survey-multi-choice1",
    questions: [{
      prompt: "<div class='justified'><br/>" + trial.question + "<br/></div>",
      options: trial.options,
      required: true,
      horizontal: true
    }],
    data: {
      trialid: "regulacion_emocional_" + index
    }
  })
  index += 1;
})
