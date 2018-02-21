// Funciones de apoyo
onkeydown = function block_fkeys(event) {
  //Blocks presses of f1 and f6
  var x = event.which || event.keyCode;
  if (x == 112 || x == 116) {
    event.preventDefault();
    return false;
  } else {
    return;
  }
}

var screen_aislamiento_social_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Aislamiento social y redes sociales</big></b><br />'+
    "Responda las siguientes preguntas"+
    '</p>'],
    key_forward: 'enter',
    show_clickable_nav: true,
    data:{trialid: "Screen_WM"},
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};


// Inicio prueba
var father = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: '1.- ¿Alguna de estas personas componen tu hogar?<br>a) Padre/padrastro?',
    options: ['Si', 'No'],
    required: true
  }],
  data: {
    trialid: "survey_aislamiento_social_y_redes_sociales_1"
  }
}

var mother = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: '1.- ¿Alguna de estas personas componen tu hogar?<br>b) Madre/madrastra?',
    options: ['Si', 'No'],
    required: true
  }],
  data: {
    trialid: "survey_aislamiento_social_y_redes_sociales_2"
  }
}

var trials_1_to_9 = [{
    question: '1. c) ¿cuántos hermanos tienes? Indicar el número (“0” si no tienes hermanos).'
  },
  {
    question: '1. d) Tío/tía, abuelo/abuela/u otros familiares que vivan en tu casa: indica el total de personas:'
  },
  {
    question: '2.- ¿Cuántos amigos tienes actualmente? Indica el número de amigos/as con los cuáles te relacionas personalmente (no virtualmente):'
  },
  {
    question: '3. ¿Cuántos amigos “virtuales” tienes que consideras “cercanos” y/o que “con que te contactas habitualmente ? (si es un amigo personal y virtual al mismo tiempo, no lo cuentes para esta pregunta).'
  },
  {
    question: '4. Considerando una semana típica, actualmente ¿a cuántas personas saludas y mantienes al menos a veces una breve conversación?, considera a gente que conoces, aunque sea poco (al menos que sepas su nombre o lo actividad que realiza).'
  },
  {
    question: '5.- Piensa o revisa tu agenda de contactos de tu teléfono o algún otro dispotivo donde guardes nombres y direcciones de personas. Más o menos ¿cuántas personas tienes registradas, de las cuáles con tan solo ver su nombre, te acordarías quién es? Considera solo personas con las cuáles tienes algún tipo de relación, aunque sea esporádico.'
  },
  {
    question: '6. Si participas habitualmente de algún club deportivo, agrupación religiosa, artística, política, recreativa, etc., que implique al menos un encuentro por mes ¿con cuántas personas te relacionas habitualmente cuando ocurre esa o esas actividades? Considera el total de contactos, si es más de una actividad (súmalos)'
  },
  {
    question: '7. Si usas algún tipo de chat o similar, como WhatsApp, Messenger u otra ¿con cuántas personas más o menos chateas en una semana típica? Considera los sistemas que uses más frecuentemente.'
  },
  {
    question: '8. ¿Cuál es el número de personas que tienes aceptadas como amigo o contacto en tus redes sociales? (facebook, instagram, etc.). Considera solo una red social, aquella que sea más importante para tí y/o que uses más frecuentemente.'
  },
  {
    question: '9. Considerando amigos, cercanos y familiares ¿en cuántas personas confías realmente? Piensa en personas que considerarías lo suficientemente cercanas como para contarles algo personal, pedirles ayuda, pedir o prestar dinero, confiarles algo tuyo de valor para su cuidado o encargarle que hagan algo pensando que no te fallarán.'
  }
]

var social_network = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: '¿Cuál es la red social que más utiliza?',
    options: ['Facebook', 'Instagram', 'Whatsapp', 'Messenger', 'Tinder', 'YouTUbe', 'Tumblr', 'LinkedIn', 'Twitter', 'Snapchat', 'Skype', 'Google+', 'Ninguna', 'Otro'],
    required: true
  }],
  data: {
    trialid: "survey_aislamiento_social_y_redes_sociales_14"
  }
}

var social_network_other = {
  type: "survey-text",
  questions: [{
    prompt: "<div class='justified'><br/>" + "Otro" + "<br/></div>",
    required: true
  }],
  endword: "",
  data: {
    trialid: "aislamiento_social_y_redes_sociales_14_other"
  }
}

var social_network_frequency = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: '¿Con que frecuencia utiliza esta red social?',
    options: ['Casi Nunca', 'Poco', 'A veces', 'Frecuentemente', 'Muy frecuentemente'],
    required: true,
    horizontal: true
  }],
  data: {
    trialid: "survey_aislamiento_social_y_redes_sociales_15"
  }
}

var instructions10 = {
  type: "instructions",
  pages: ['Finalmente, a cada una de las siguentes afirmaciones, responde que tan a menudo te sientes de esa manera:'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_10_survey_aislamiento_social_y_redes_sociales"
  }
};

var trials10 = [{
    question: '¿Con qué frecuencia sientes que te falta compañía?'
  },
  {
    question: '¿Con qué frecuencia te sientes dejado fuera?'
  },
  {
    question: '¿Con qué frecuencia te sientes aislado de los demás?'
  },
  {
    question: '¿Con qué frecuencia te sientes solo?'
  },
  {
    question: '¿Con qué frecuencia sientes que ya no eres cercano a nadie?'
  },
  {
    question: '¿Con qué frecuencia sientes que nadie te conoce muy bien?'
  },
  {
    question: '¿Con qué frecuencia sientes que la gente está a tu alrededor, pero no contigo?'
  },
  {
    question: '¿Con qué frecuencia siente que estás "en sintonía" con las personas que te rodean?'
  }
]

var instructions11 = {
  type: "instructions",
  pages: ['11. Por favor indica para cada una de las siguientes afirmaciones el grado en que se aplican en tí de acuerdo a tu situación actual y respecto a lo que sientes ahora'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_11_survey_aislamiento_social_y_redes_sociales"
  }
};

var trials11 = [{
    question: 'Siempre hay alguien con quien puedo hablar de mis problemas diarios.'
  },
  {
    question: 'Echo de menos tener un buen amigo de verdad.'
  },
  {
    question: 'Siento una sensación de vacio a mi alrededor.'
  },
  {
    question: 'Hay suficientes personas a las que puedo recurrir en caso de necesidad.'
  },
  {
    question: 'Echo de menos la compañia de otras personas.'
  },
  {
    question: 'Pienso que mi circulo de amistad es demasiado limitado.'
  },
  {
    question: 'Tengo mucha gente en la que confiar completamente.'
  },
  {
    question: 'Hay suficientes personas con las que tengo una amistad muy cercana.'
  },
  {
    question: 'Echo de menos tener gente a mi alrededor.'
  },
  {
    question: 'Me siento abandonado a menudo.'
  },
  {
    question: 'Puedo contar con mis amigos siempre que lo necesito.'
  }

]

var instructions12 = {
  type: "instructions",
  pages: ['12. FAMILIARES: Teniendo en cuenta a las personas con las que tú estás relacionado ya sea por nacimiento, casamiento, adopción, etc.'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_12_survey_aislamiento_social_y_redes_sociales"
  }
};

var options_0_to_9 = ['Ninguno', '1', '2', '3 o 4', '5 a 8', '9 o más']

var parents_1 = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: '1. ¿Con cuántos parientes te encuentras o tienes noticias de ellos, por lo menos, una vez por mes?',
    options: options_0_to_9,
    required: true,
    horizontal: true
  }],
  data: {
    trialid: "survey_aislamiento_social_y_redes_sociales_35"
  }
}

var options_times = ['<br>Menos de una<br>vez por mes', '<br>Mensualmente', '<br>Algunas veces<br>al mes', '<br>Semanalmente', '<br>Algunas veces<br>por semana', '<br>Diariamente']

var parents_2 = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: '2. ¿Con qué frecuencia te encuentras o tienes noticias del pariente con el que tienes más contacto?',
    options: options_times,
    required: true,
    horizontal: true
  }],
  data: {
    trialid: "survey_aislamiento_social_y_redes_sociales_36"
  }
}

var parents_3 = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: '3. ¿Con cuántos parientes te sientes lo suficientemente cómodo como para conversar sobre tus asuntos personales?',
    options: options_0_to_9,
    required: true,
    horizontal: true
  }],
  data: {
    trialid: "survey_aislamiento_social_y_redes_sociales_37"
  }
}

var parents_4 = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: '4. ¿A cuántos parientes sientes lo suficientemente cercanos como para llamarlos cuando necesitas ayuda?',
    options: options_0_to_9,
    required: true,
    horizontal: true
  }],
  data: {
    trialid: "survey_aislamiento_social_y_redes_sociales_38"
  }
}

var options_frequency = ['Nunca', 'Rara vez', 'A veces', 'Con frecuencia', 'Con mucha frecuencia', 'Siempre']

var parents_5 = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: '5. Cuando uno de tus parientes tiene que tomar una decisión importante, ¿con qué frecuencia te lo comenta a tí?',
    options: options_frequency,
    required: true,
    horizontal: true
  }],
  data: {
    trialid: "survey_aislamiento_social_y_redes_sociales_39"
  }
}

var parents_6 = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: '6. ¿Con qué frecuencia uno de tus parientes está disponible para hablar cuando tú tienes que tomar una decisión importante?',
    options: options_frequency,
    required: true,
    horizontal: true
  }],
  data: {
    trialid: "survey_aislamiento_social_y_redes_sociales_40"
  }
}

var instructions13 = {
  type: "instructions",
  pages: ['13. AMISTADES: Teniendo en cuenta a todos tus amigos, inclusive a aquellos que viven en tu vecindario, establecimiento educacional, trabajo, etc.'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_13_survey_aislamiento_social_y_redes_sociales"
  }
};

var friends_1 = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: '7. ¿Con cuántos amigos te encuentras o tienes noticias de ellos, por lo menos, una vez por mes?',
    options: options_0_to_9,
    required: true,
    horizontal: true
  }],
  data: {
    trialid: "survey_aislamiento_social_y_redes_sociales_41"
  }
}

var friends_2 = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: '8. ¿Con qué frecuencia te encuentras o tienes noticias del amigo con el que tienes más contacto?',
    options: options_times,
    required: true,
    horizontal: true
  }],
  data: {
    trialid: "survey_aislamiento_social_y_redes_sociales_42"
  }
}

var friends_3 = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: '9. ¿Con cuántos amigos te sientes lo suficientemente cómodo como para conversar sobre tus asuntos personales?',
    options: options_0_to_9,
    required: true,
    horizontal: true
  }],
  data: {
    trialid: "survey_aislamiento_social_y_redes_sociales_43"
  }
}

var friends_4 = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: '10. ¿A cuántos amigos sientes lo suficientemente cercanos como para llamarlos cuando necesitas ayuda?',
    options: options_0_to_9,
    required: true,
    horizontal: true
  }],
  data: {
    trialid: "survey_aislamiento_social_y_redes_sociales_44"
  }
}

var friends_5 = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: '11. Cuando uno de tus amigos tiene que tomar una decisión importante, ¿con qué frecuencia te lo comenta a tí?',
    options: options_frequency,
    required: true,
    horizontal: true
  }],
  data: {
    trialid: "survey_aislamiento_social_y_redes_sociales_45"
  }
}

var friends_6 = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: '12. ¿Con qué frecuencia uno de tus amigos está disponible para hablar cuando tú tienes que tomar una decisión importante?',
    options: options_frequency,
    required: true,
    horizontal: true
  }],
  data: {
    trialid: "survey_aislamiento_social_y_redes_sociales_46"
  }
}
// Creacion de timeline e inclusion de trials

aislamiento_social_y_redes_sociales = [];

if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
  //If not FULLSCREEN enable fullscreen
  aislamiento_social_y_redes_sociales.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}
aislamiento_social_y_redes_sociales.push(screen_aislamiento_social_experiment)

aislamiento_social_y_redes_sociales.push(father);
aislamiento_social_y_redes_sociales.push(mother);

index = 4;
trials_1_to_9.forEach(function(trial) {
  aislamiento_social_y_redes_sociales.push({
    type: "survey-text-number",
    questions: [{
      prompt: "<div class='justified'><br/>" + trial.question + "<br/></div>",
      required: true
    }],
    endword: "",
    data: {
      trialid: "aislamiento_social_y_redes_sociales_" + index
    }
  })
  index += 1;
})

aislamiento_social_y_redes_sociales.push(social_network);
aislamiento_social_y_redes_sociales.push({
  timeline: [social_network_other],
  conditional_function: function() {
    if (jsPsych.data.get().last(1).values()[0].responses == '{"Q0":"Otro"}')
      return true;
    else {
      return false;
    }
  }
});

aislamiento_social_y_redes_sociales.push({
  timeline: [social_network_frequency],
  conditional_function: function() {
    if (jsPsych.data.get().last(2).values()[1].responses == '{"Q0":"Ninguna"}') {
      return false;
    } else {
      return true;
    }
  }
})

aislamiento_social_y_redes_sociales.push(instructions10)

index = 16;

trials10.forEach(function(trial) {
  aislamiento_social_y_redes_sociales.push({
    type: "survey-multi-choice1",
    questions: [{
      prompt: "<div class='justified'><br/>" + trial.question + "<br/></div>",
      options: ['Nunca', 'Raramente', 'A veces', 'Siempre'],
      required: true,
      horizontal: true
    }],
    endword: "",
    data: {
      trialid: "aislamiento_social_y_redes_sociales_" + index
    }
  })
  index += 1;
})

aislamiento_social_y_redes_sociales.push(instructions11)

trials11.forEach(function(trial) {
  aislamiento_social_y_redes_sociales.push({
    type: "survey-multi-choice1",
    questions: [{
      prompt: "<div class='justified'><br/>" + trial.question + "<br/></div>",
      options: ['No', 'Mas o menos', 'Si'],
      horizontal: true,
      required: true
    }],
    endword: "",
    data: {
      trialid: "aislamiento_social_y_redes_sociales_" + index
    }
  })
  index += 1;
})

aislamiento_social_y_redes_sociales.push(instructions12);
aislamiento_social_y_redes_sociales.push(parents_1);
aislamiento_social_y_redes_sociales.push(parents_2);
aislamiento_social_y_redes_sociales.push(parents_3);
aislamiento_social_y_redes_sociales.push(parents_4);
aislamiento_social_y_redes_sociales.push(parents_5);
aislamiento_social_y_redes_sociales.push(parents_6);
aislamiento_social_y_redes_sociales.push(instructions13);
aislamiento_social_y_redes_sociales.push(friends_1);
aislamiento_social_y_redes_sociales.push(friends_2);
aislamiento_social_y_redes_sociales.push(friends_3);
aislamiento_social_y_redes_sociales.push(friends_4);
aislamiento_social_y_redes_sociales.push(friends_5);
aislamiento_social_y_redes_sociales.push(friends_6);
