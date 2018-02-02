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
  pages: ['A continuación encontrará una lista de afirmaciones en torno a los sentimientos o pensamientos que tiene sobre su vida en sociedad.<br>Marque la respuesta que más lo identifica.'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_bienestar_social"
  }
};

likert = ['Totalmente en<br>desacuerdo', 'Un poco<br>en desacuerdo', 'Ni de acuerdo<br>ni en desacuerdo', 'Un poco<br>de acuerdo', 'Totalmente<br>de acuerdo'];

var trials = [{
    question: 'Siento que soy parte importante de mi comunidad.'
  },
  {
    question: 'Creo que la gente me valora como persona.'
  },
  {
    question: 'Si tengo algo que decir, creo que la mayoría de la gente me escucharía.'
  },
  {
    question: 'Me siento cercano a otra gente.'
  },
  {
    question: 'Si tuviera algo que decir, pienso que la gente no se lo tomaría en serio.'
  },
  {
    question: 'No me siento pertenecer a ningún grupo social.'
  },
  {
    question: 'La sociedad en la que vivo es una fuente de bienestar.'
  },
  {
    question: 'Creo que la gente no es de fiar.'
  },
  {
    question: 'Creo que las personas sólo piensan en sí mismas.'
  },
  {
    question: 'Creo que no se debe confiar en la gente.'
  },
  {
    question: 'Creo que la gente es egoísta.'
  },
  {
    question: 'Hoy en día, la gente es cada vez más deshonesta.'
  },
  {
    question: 'Las personas no se preocupan de los problemas de otros.'
  },
  {
    question: 'Creo que las personas son amables.'
  },
  {
    question: 'Las personas no esperan nada a cambio cuando hacen un favor.'
  },
  {
    question: 'Creo que puedo aportar algo al mundo.'
  },
  {
    question: 'No tengo nada importante que ofrecer a la sociedad.'
  },
  {
    question: 'Mis actividades diarias no aportan nada que valga la pena a la sociedad.'
  },
  {
    question: 'No tengo ni el tiempo ni la energía para aportar algo a la sociedad.'
  },
  {
    question: 'Pienso que lo que hago es importante para la sociedad.'
  },
  {
    question: 'Lo que hago tiene alguna influencia sobre otras personas.'
  },
  {
    question: 'Para mí el progreso social es algo que no existe.'
  },
  {
    question: 'La sociedad no ofrece incentivos para gente como yo.'
  },
  {
    question: 'Veo que la sociedad está en continuo desarrollo.'
  },
  {
    question: 'No creo que instituciones como la justicia o el gobierno mejoren mi vida.'
  },
  {
    question: 'La sociedad ya no progresa.'
  },
  {
    question: 'El mundo es cada vez un lugar mejor para la gente.'
  },
  {
    question: 'No entiendo lo que está pasando en el mundo.'
  },
  {
    question: 'El mundo es demasiado complejo para mí.'
  },
  {
    question: 'No merece la pena esforzarse en intentar comprender el mundo en el que vivo.'
  },
  {
    question: 'Muchas culturas son tan extrañas que no puedo comprenderlas.'
  },
  {
    question: 'Los científicos son los únicos que pueden entender cómo funciona el mundo.'
  },
  {
    question: 'Me resulta fácil predecir lo que puede suceder en el futuro.'
  }
]

// Creacion de timeline e inclusion de trials

bienestar_social = [];

if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
  //If not FULLSCREEN enable fullscreen
  bienestar_social.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

bienestar_social.push(instructions);

index = 1;
trials.forEach(function(trial) {
  bienestar_social.push({
    type: "survey-multi-choice1",
    questions: [{
      prompt: "<div class='justified'><br/>" + trial.question + "<br/></div>",
      options: likert,
      required: true,
      horizontal: true
    }],
    data: {
      trialid: "bienestar_social_" + index
    }
  })
  index += 1;
})
