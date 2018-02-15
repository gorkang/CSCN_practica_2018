// Funciones de apoyo
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

var instructions = {
  type: 'instructions',
  pages: ['<p><left><b><big>Miradas</big></b><br />'+
      'A continuación verá expresiones en los ojos de distintas personas. Por favor marque la alternativa que más representa la emoción de los ojos.'],
  data: {
    trialid: "instructions_miradas"
  },
  show_clickable_nav: true,
};

var trials = [{
    options: ['CELOSO/A', 'ATERRADO/A', 'ARROGANTE', 'ODIOSO/A']
  },
  {
    options: ['ALEGRE', 'COMPASIVO/A', 'IRRITADO/A', 'ABURRIDO/A']
  },
  {
    options: ['ATERRORIZADO/A', 'PREOCUPADO/A', 'ARROGANTE', 'MOLESTO/A']
  },
  {
    options: ['CHISTOSO/A', 'CONMOCIONADO/A', 'DESEOSO/A', 'CONVENCIDO/A']
  },
  {
    options: ['CHISTOSO/A', 'INSISTENTE', 'DIVERTIDO/A', 'RELAJADO/A']
  },
  {
    options: ['IRRITADO/A', 'SARCÁSTICO/A', 'PREOCUPADO/A', 'SIMPÁTICO/A']
  },
  {
    options: ['ATERRADO/A', 'SOÑADOR/A', 'IMPACIENTE', 'ALARMADO/A']
  },
  {
    options: ['APENADO/A', 'SIMPÁTICO/A', 'INCÓMODO/A', 'DESANIMADO/A']
  },
  {
    options: ['DESANIMADO/A', 'ALIVIADO/A', 'TÍMIDO/A', 'EXCITADO/A']
  },
  {
    options: ['MOLESTO/A', 'HOSTIL', 'HORRORIZADO/A', 'ENSIMISMADO']
  },
  {
    options: ['CAUTELOSO/A', 'INSISTENTE', 'ABURRIDO/A', 'ATERRADO/A']
  },
  {
    options: ['ATERRORIZADO/A', 'DIVERTIDO/A', 'ARREPENTIDO/A', 'ADULADOR/A']
  },
  {
    options: ['CONFUNDIDO', 'ABOCHORNADO/A', 'ESCÉPTICO/A', 'DESANIMADO/A']
  },
  {
    options: ['RESUELTO/A', 'EXPECTANTE', 'AMENAZANTE', 'TÍMIDO/A']
  },
  {
    options: ['IRRITADO/A', 'DESILUSIONADO/A', 'DEPRIMIDO/A', 'ACUSANTE']
  },
  {
    options: ['CONTEMPLATIVO/A', 'CONMOCIONADO/A', 'ALENTADOR/A', 'DIVERTIDO/A']
  },
  {
    options: ['IRRITADO/A', 'PENSATIVO/A', 'ALENTADOR/A', 'COMPRENSIVO/A']
  },
  {
    options: ['DUBITATIVO/A', 'CARIÑOSO/A', 'ALEGRE', 'ATERRADO/A']
  }
]

// Creacion de timeline e inclusion de trials
miradas = [];
if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
  miradas.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}
miradas.push(instructions);

index = 0;
trials.forEach(function(trial) {
  miradas.push({
    type: "survey-multi-choice",
    preamble: "<img width='100%'src='images/" + index + ".png' />",
    questions: [{
      prompt: "",
      options: trial.options,
      required: true
    }],
    data: {
      trialid: "miradas_" + index
    }
  })
  index += 1;
})
