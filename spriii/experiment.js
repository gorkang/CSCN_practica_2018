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
  pages: ['A continuación va a responder una serie de enunciados teniendo en cuenta el grado de acuerdo o desacuerdo.'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_survey_983797"
  }
};

likert = ['1.<br>Muy en desacuerdo<br>No me describe para nada', '2.<br>En desacuerdo<br>No me describe', '3.<br>Neutral<br>Puede o no describirme', '4.<br>De acuerdo<br>Me describe', '5.<br>Muy de acuerdo<br>Me describe mucho'];

var trials = [{
    question: 'Soy una persona rebelde .'
  },
  {
    question: 'Soy más terco que otras personas.'
  },
  {
    question: 'Puedo ganarle a un  detector de mentiras..'
  },
  {
    question: 'He usado sustancias ilegales (ej. Marihuana, éxtasis).'
  },
  {
    question: 'No he estado involucrado en bandas que realicen actividades criminales .'
  },
  {
    question: 'Nunca he robado un camión, auto o moto.'
  },
  {
    question: 'Considero que la mayoría de la gente es débil.'
  },
  {
    question: 'Con frecuencia elogio o halago a personas para que estén de mi parte.'
  },
  {
    question: 'Con frecuencia me involucro en actividades riesgosas por la emoción que estas me producen .'
  },
  {
    question: 'He engañado a otros para obtener dinero.'
  },
  {
    question: 'Me causa dolor ver un  animal herido.'
  },
  {
    question: 'He atacado a un policía o a un trabajador social.'
  },
  {
    question: 'He fingido ser alguien más para obtener algo o  conseguir algún beneficio.'
  },
  {
    question: 'Siempre planeo mis actividades de la semana.'
  },
  {
    question: 'Disfruto viendo peleas que involucran puñetazos.'
  },
  {
    question: 'No soy astuto o uso trucos.'
  },
  {
    question: 'Soy bueno en los trabajos riesgosos porque tomo decisiones rápidas.'
  },
  {
    question: 'Nunca he forzado a alguien a tener sexo.'
  },
  {
    question: 'Mis amigos podrían decir que soy una persona afectuosa.'
  },
  {
    question: 'Me divierte estafar a alguien.'
  },
  {
    question: 'Nunca he atacado a alguien con la idea de herirlo.'
  },
  {
    question: 'Nunca se me olvidan mis citas o compromisos.'
  },
  {
    question: 'Evito las películas de terror.'
  },
  {
    question: 'Confío en la honestidad de otras personas.'
  },
  {
    question: 'Odio conducir a alta velocidad.'
  },
  {
    question: 'Siento tristeza cuando veo una persona sin hogar o desamparada.'
  },
  {
    question: 'Me divierte ver que tan lejos se puede presionar a una persona antes de que se enoje.'
  },
  {
    question: 'Disfruto haciendo actividades inusuales o de riesgo.'
  },
  {
    question: 'He irrumpido o ingresado  en edificios o vehículos para robar o vandalismo.'
  },
  {
    question: 'No me importa estar en contacto con mi familia.'
  },
  {
    question: 'Encuentro difícil manipular a otras personas.'
  },
  {
    question: 'Raramente sigo las reglas.'
  },
  {
    question: 'Nunca lloro durante las películas.'
  },
  {
    question: 'Nunca he sido arrestado.'
  },
  {
    question: 'Uno debe tomar ventaja de otros antes de que otros tomen ventaja de mi.'
  },
  {
    question: 'No disfruto apostar dinero.'
  },
  {
    question: 'La gente suele decir que soy de corazón frio.'
  },
  {
    question: 'La gente puede dar cuenta que estoy mintiendo.'
  },
  {
    question: 'Me gusta tener sexo con personas que apenas conozco.'
  },
  {
    question: 'Me gustan las películas y deportes violentos.'
  },
  {
    question: 'Uno debe fingir  de vez en cuando que le agrada una persona para conseguir algo de ellas.'
  },
  {
    question: 'Soy una persona impulsiva.'
  },
  {
    question: 'He usado drogas ilícitas ilegales  “fuertes” (Ejemplo, heroína, cocaína).'
  },
  {
    question: 'Soy una persona de corazón blando.'
  },
  {
    question: 'Me es fácil convencer a otros de hacer cualquier cosa.'
  },
  {
    question: 'Nunca he robado en una tienda.'
  },
  {
    question: 'No disfruto tomando riesgos.'
  },
  {
    question: 'Las personas se ponen muy sensibles cuando les digo la verdad sobre ellos mismos.'
  },
  {
    question: 'He sido condenado por cometer crímenes serios.'
  },
  {
    question: 'La mayoría de las personas mienten a diario.'
  },
  {
    question: 'Me mantengo metiéndome en problemas por las mismas razones.'
  },
  {
    question: 'De vez en cuando he cargado un arma (ej. cuchillos o pistolas) para mi protección.'
  },
  {
    question: 'La gente llora demasiado en los funerales.'
  },
  {
    question: 'Se puede obtener lo que quieras cuando le dices a otros lo que quieren escuchar.'
  },
  {
    question: 'Me aburro fácilmente.'
  },
  {
    question: 'Nunca me he sentido culpable si en algún momento herí o dañé a otras personas.'
  },
  {
    question: 'He amenazado a personas para obtener de ellas dinero, ropa u otras cosas.'
  },
  {
    question: 'Muchas personas son “tontas” y por esta razón pueden ser estafadas fácilmente.'
  },
  {
    question: 'Admito que en ocasiones hablo en tono violento y sin pensar.'
  },
  {
    question: 'En ocasiones dejo  a personas o amigos que ya no necesito.'
  },
  {
    question: 'Nunca pasaría por encima de alguien por obtener algo que deseo.'
  },
  {
    question: 'He tenido amigos cercanos que han estado en prisión.'
  },
  {
    question: 'He tratado intencionalmente de golpear a alguien con el vehículo  que conduzco.'
  },
  {
    question: 'He violado mi libertad condicional (En caso de no tener la experiencia responder 1 ).'
  }
]

// Creacion de timeline e inclusion de trials

survey_858814 = [];

if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
  //If not FULLSCREEN enable fullscreen
  survey_858814.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

survey_858814.push(instructions);

index = 1;
trials.forEach(function(trial) {
  survey_858814.push({
    type: "survey-multi-choice1",
    questions: [{
      prompt: "<div class='justified'><br/>" + trial.question + "<br/></div>",
      options: likert,
      required: true,
      horizontal: true
    }],
    data: {
      trialid: "survey_858814_" + index
    }
  })
  index += 1;
})
