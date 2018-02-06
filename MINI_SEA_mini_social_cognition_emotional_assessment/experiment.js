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
var instructions_1 = {
  type: "instructions",
  pages: ['<p><left><b><big>Mini SEA</big></b><br />'+
  'Ahora le voy a leer 10 historias cortas. Usted tiene una copia de ellas en papel. Algunas contienen una metedura de pata, y otras no. Usted debe encontrarlas y explicármelas. Para responder a las preguntas, usted puede releer las historias el número de veces que quiera. No es un test de memoria.'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_1_MINI_SEA_mini_social_cognition_emotional_assessment"
  }
};

var stories = [{
    storie: 'Miguel, un niño de 9 años, comenzó a asistir a un nuevo<br>' +
      'colegio. Él estaba en uno de los sillones de la sala de<br>' +
      'descanso de la escuela. Javier y Pedro, otros dos niños,<br>' +
      'entraron y se pararon a hablar al lado de la puerta. Javier<br>' +
      'dijo “¿Conoces al niño nuevo del curso?. Su nombre es<br>' +
      'Miguel. ¿No parece extraño?, ¡Es tan pequeño!”. Miguel<br>' +
      'se paró del sillón y, Javier y Pedro lo miraron. Pedro dijo<br>' +
      '“¡Hola Miguel! ¿Vas a jugar fútbol ahora?”.',
    questions: ['1- ¿Alguien dijo algo que no debería decir o algo raro?', '2- ¿Quien dijo algo que no debería decir o algo raro?', '3- ¿Porqué él/ella no debería haberlo dicho o por qué estuvo fuera de lugar?', '4- ¿Porqué piensa que el / ella lo dijo?', '5- ¿Sabían Javier y Pedro, mientras hablaban que Miguel estaba en los sillones?', '6- ¿Cómo crees que Miguel se sintió?', '7- En la historia, donde estaba Miguel mientras Javier y Pedro hablaban?', '8- ¿Qué dijo Javier sobre Miguel?']
  },
  {
    storie: 'Victoria estaba en una fiesta en casa de su amigo Alberto.<br>' +
      'Ella hablaba con Alberto cuando una mujer se acercó a<br>' +
      'ellos. Era una de las vecinas de Alberto. La mujer dijo<br>' +
      '“Hola” y se volvió hacia Victoria diciéndole: “Parece que<br>' +
      'no nos han presentado. Soy María, ¿cuál es tu nombre?”.<br>' +
      '“Yo soy Victoria”. Alberto preguntó: “¿alguien quiere<br>' +
      'algo para beber?”.',
    questions: ['1- ¿Alguien dijo algo que no debería decir o algo raro?', '2- ¿Quien dijo algo que no debería decir o algo raro?', '3- ¿Porqué él/ella no debería haberlo dicho o por qué estuvo fuera de lugar?', '4- ¿Porqué piensa que el / ella lo dijo?', '5- ¿Sabía Alberto que Victoria y Maria no se conocían?', '6- ¿Cómo piensas que se sintió Victoria?', '7- En la historia, donde estaba Victoria?', '8- ¿Victoria y Maria se conocían?']
  },
  {
    storie: 'Juan estaba comprando una camisa para combinarla con<br>' +
      'su traje. El vendedor le mostró varias camisas. Juan las<br>' +
      'miró y, finalmente, encontró una del color adecuado.<br>' +
      'Pero, cuando fue al probador y se la probó, no le quedaba<br>' +
      'bien. “Me temo que es muy pequeña”, le dijo al<br>' +
      'vendedor. “No se preocupe” dijo el vendedor. “La<br>' +
      'próxima semana tendremos más en una talla más<br>' +
      'grande”. “Bien, volveré entonces” dijo Juan.',
    questions: ['1- ¿Alguien dijo algo que no debería decir o algo raro?', '2- ¿Quien dijo algo que no debería decir o algo raro?', '3- ¿Porqué él/ella no debería haberlo dicho o por qué estuvo fuera de lugar?', '4- ¿Porqué piensa que el / ella lo dijo?', '5- ¿Cuándo se probó la camisa, sabía Juan que no la tenían en su talla?', '6- ¿Cómo crees que se sintió Juan?', '7- En la historia, que estaba buscando Juan?', '8- ¿Porqué volvería la semana que viene?']
  },
  {
    storie: 'Jimena se acaba de cambiar a un departamento nuevo.<br>' +
      'Jimena fue de compras y compró cortinas nuevas para su<br>' +
      'dormitorio. Cuando recién había terminado de decorar su<br>' +
      'departamento, llegó Elisa, su mejor amiga. Jimena le hizo<br>' +
      'un recorrido por el departamento y le preguntó “¿Te gusta<br>' +
      'mi dormitorio?”. Elisa dijo: “Esas cortinas son horribles,<br>' +
      'me imagino que vas a comprar unas nuevas!”.',
    questions: ['1- ¿Alguien dijo algo que no debería decir o algo raro?', '2- ¿Quien dijo algo que no debería decir o algo raro?', '3- ¿Porqué él/ella no debería haberlo dicho o por qué estuvo fuera de lugar?', '4- ¿Porqué piensa que el / ella lo dijo?', '5- ¿Sabía Elisa quien había comprado las cortinas?', '6- ¿Cómo crees que se sintió Jimena?(si dice "mal" preguntar: ¿qué otra emoción pudo sentir?)', '7- En la historia, que es lo que Jimena acababa de comprar?', '8- ¿Hace cuanto que Jimena vivía en ese departamento?']
  },
  {
    storie: 'Sandra es una niña de tres años, con cara redonda y pelo<br>' +
      'corto y rubio. Estaba en la casa de su tía Carolina. El<br>' +
      'timbre de la casa sonó y su tía Carolina fue a atenderlo.<br>' +
      'Era María, la vecina. “Hola,” dijo la tía Carolina, “Qué<br>' +
      'amable de tu parte pasar a saludarnos”. María dijo,<br>' +
      '“Hola”, y miró a Sandra diciendo, “Oh, parece que no me<br>' +
      'han presentado a este niñito. ¿Cuál es tu nombre?”.',
    questions: ['1- ¿Alguien dijo algo que no debería decir o algo raro?', '2- ¿Quien dijo algo que no debería decir o algo raro?', '3- ¿Porqué él/ella no debería haberlo dicho o por qué estuvo fuera de lugar?', '4- ¿Porqué piensa que el / ella lo dijo?', '5- ¿Sabía María que Sandra era una niña?', '6- ¿Cómo crees que se sintió Sandra?(si dice "mal" o repite siempre la misma respuesta como "triste" preguntar: ¿qué otra emoción pudo sentir?)', '7- En la historia, donde estaba Sandra?', '8- ¿Quién pasó de visita?']
  },
  {
    storie: 'Patricia había tenido un rol principal en la obra de teatro<br>' +
      'escolar del año pasado, y ella deseaba mucho el rol<br>' +
      'protagónico este año. Tomó clases de actuación, y en la<br>' +
      'primavera, audicionó para la obra. El día en que se<br>' +
      'publicaron los resultados, se fue antes de clases a mirar la<br>' +
      'lista de quienes habían quedado en la obra. No había<br>' +
      'quedado como protagonista y, en vez de eso, había<br>' +
      'obtenido un papel menor. Ella corrió a encontrarse con su<br>' +
      'novio en el pasillo y le contó lo que había sucedido. “Lo<br>' +
      'siento”, dijo él, “debes estar desilusionada”. “Sí”,<br>' +
      'respondió Patricia, “tengo que decidir si tomo este<br>' +
      'papel”.',
    questions: ['1- ¿Alguien dijo algo que no debería decir o algo raro?', '2- ¿Quien dijo algo que no debería decir o algo raro?', '3- ¿Porqué él/ella no debería haberlo dicho o por qué estuvo fuera de lugar?', '4- ¿Porqué piensa que el / ella lo dijo?', '5- ¿Sabía el novio de Patricia que ella no había obtenido el rol?', '6- ¿Cómo crees que se sintió Patricia?', '7- En la historia, qué papel obtuvo finalmente?', '8- ¿Qué tipo de rol tuvo el año anterior?']

  },
  {
    storie: 'Jaime estaba en la biblioteca. Encontró el libro que estaba<br>' +
      'buscando acerca de escalar el monte Aconcagua y fue al<br>' +
      'mesón del frente para registrarlo y llevarlo. Cuando miró<br>' +
      'su billetera, se dió cuenta que había dejado su tarjeta de<br>' +
      'biblioteca en la casa.“Lo siento”, le dijo a la mujer detrás<br>' +
      'del mesón, “parece que he dejado mi tarjeta de biblioteca<br>' +
      'en casa”. “Está bien,” dijo ella. “dígame su nombre, y si<br>' +
      'nosotros lo tenemos en el computador, puede llevarse el<br>' +
      'libro sólo mostrándome su carné de identidad”.',
    questions: ['1- ¿Alguien dijo algo que no debería decir o algo raro?', '2- ¿Quien dijo algo que no debería decir o algo raro?', '3- ¿Porqué él/ella no debería haberlo dicho o por qué estuvo fuera de lugar?', '4- ¿Porqué piensa que el / ella lo dijo?', '5- ¿Cuando Jaime fue a la biblioteca, se dio cuenta de que no tenía su tarjeta?', '6- ¿Cómo crees que se sintió Jaime?', '7- En esta historia, qué libro quería conseguir Jaime?', '8- ¿Podría sacarlo finalmente?']

  },
  {
    storie: 'El primo de Claudia, Gustavo, la estaba visitando y<br>' +
      'Claudia hizo un pastel de manzanas, especialmente para<br>' +
      'él. Después de la cena, ella dijo, “Hice un pastel<br>' +
      'solamente para ti, está en la cocina”. “Mmm,” dijo<br>' +
      'Gustavo, “Huele bien! Adoro los pasteles, excepto el de<br>' +
      'manzanas, por supuesto”.',
    questions: ['1- ¿Alguien dijo algo que no debería decir o algo raro?', '2- ¿Quien dijo algo que no debería decir o algo raro?', '3- ¿Porqué él/ella no debería haberlo dicho o por qué estuvo fuera de lugar?', '4- ¿Porqué piensa que el / ella lo dijo?', '5- ¿Cuando Gustavo sintió el aroma de la tarta, sabía que era de manzanas?', '6- ¿Cómo crees que se sintió Claudia?(si dice "mal" o repite siempre la misma respuesta como "triste" preguntar: ¿qué otra emoción pudo sentir?)', '7- En la historia, que tipo de tarta hizo Claudia?', '8- ¿Cómo se conocieron Claudia y Gustavo?']

  },
  {
    storie: 'Daniela compró una fuente de cristal a su amiga Ana<br>' +
      'como regalo de matrimonio. Ana recibió muchos regalos<br>' +
      'y no sabía quien le había dado cada uno de ellos.<br>' +
      'Alrededor de un año más tarde, Daniela fue invitada una<br>' +
      'noche a la casa de Ana a cenar. Daniela dejó caer por<br>' +
      'accidente una botella de vino sobre la fuente de cristal y<br>' +
      'ésta se quebró. “Lo siento, quebré la fuente”, dijo Daniela.<br>' +
      '“No te preocupes,” dijo Ana. “nunca me gustó de todos<br>' +
      'modos. Alguien me la regaló para mi matrimonio”.',
    questions: ['1- ¿Alguien dijo algo que no debería decir o algo raro?', '2- ¿Quien dijo algo que no debería decir o algo raro?', '3- ¿Porqué él/ella no debería haberlo dicho o por qué estuvo fuera de lugar?', '4- ¿Porqué piensa que el / ella lo dijo?', '5- ¿Se acordaba Ana que Daniela le había regalado la fuente de cristal?', '6- ¿Cómo crees que se sintió Daniela?(si dice "mal" o repite siempre la misma respuesta como "triste" preguntar: ¿qué otra emoción pudo sentir?)', '7- En la historia, qué le regaló Daniela a Ana para su casamiento?', '8- ¿Cómo se rompió la fuente de cristal?']

  },
  {
    storie: 'Tomás estaba en un restorán. Él derramó café en el piso<br>' +
      'por accidente. “Le traeré otra taza de café”, dijo el<br>' +
      'mozo. El mozo se ausentó por un momento. Jorge era<br>' +
      'otro cliente en el restorán, parado cerca del cajero,<br>' +
      'esperando pagar. Tomás fue hacia Jorge y dijo<br>' +
      '“Derramé café cerca de mi mesa, ¿puede usted<br>' +
      'trapearlo”.',
    questions: ['1- ¿Alguien dijo algo que no debería decir o algo raro?', '2- ¿Quien dijo algo que no debería decir o algo raro?', '3- ¿Porqué él/ella no debería haberlo dicho o por qué estuvo fuera de lugar?', '4- ¿Porqué piensa que el / ella lo dijo?', '5- ¿Sabía Tomás que Jorge era otro cliente?', '6- ¿Como piensas que se sintió Jorge?(si dice "mal" o repite siempre la misma respuesta como "triste" preguntar: ¿qué otra emoción pudo sentir?)', '7- ¿En la historia, por qué estaba Jorge esperando cerca de la caja?', '8- ¿Qué fue lo que Tomás volcó?']

  },
  {
    storie: 'Leonora estaba esperando en la parada del bus. El bus<br>' +
      'estaba atrasado y ella había esperado mucho tiempo. Ella<br>' +
      'tenía 65 años y estaba cansada de estar parada por tanto<br>' +
      'rato. Cuando el bus finalmente llegó, estaba lleno y no<br>' +
      'tenía asientos vacíos. Ella vió a un vecino, Pedro, parado<br>' +
      'en el pasillo del bus. “Hola Leonora”, dijo él, “¿estuviste<br>' +
      'esperando mucho rato?”. “Alrededor de 20 minutos”, dijo<br>' +
      'ella. Un hombre joven que estaba sentado, se levantó.<br>' +
      '“Señora, le gustaría tomar asiento?”.',
    questions: ['1- ¿Alguien dijo algo que no debería decir o algo raro?', '2- ¿Quien dijo algo que no debería decir o algo raro?', '3- ¿Porqué él/ella no debería haberlo dicho o por qué estuvo fuera de lugar?', '4- ¿Porqué piensa que el / ella lo dijo?', '5- Cuando Leonora se subió al bus ¿Sabía Pedro cuanto tiempo había esperado ella?', '6- ¿Cómo piensas que se sintió Leonora?', '7- En la historia ¿Por qué Leonora esperó en la parada durante 20 minutos?', '8- ¿Había algún asiento disponible cuando Leonora se subió al bus?']

  }
]

var instructions_2 = {
  type: "instructions",
  pages: ['A continuación se presentan fotografías de rostros con distintas expresiones. Por favor marque la alternativa que mejor represente la emoción de la persona.'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_2_MINI_SEA_mini_social_cognition_emotional_assessment"
  }
};

// Creacion de timeline e inclusion de trials

MINI_SEA_mini_social_cognition_emotional_assessment = [];

if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
  //If not FULLSCREEN enable fullscreen
  MINI_SEA_mini_social_cognition_emotional_assessment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

MINI_SEA_mini_social_cognition_emotional_assessment.push(instructions_1);

index_storie = 0;
var storie_is_unusual;
stories.forEach(function(trial) {
  index_question = 1;
  storie_timeline = []
  trial.questions.forEach(function(question) {
    if (index_question == 1) {
      storie_timeline.push({
        timeline: [{
          type: "survey-multi-choice1",
          questions: [{
            prompt: "<div class='justified'><br/>" + question + "<br/></div>",
            options: ['Si', 'No'],
            required: true
          }],
          preamble: trial.storie,
          data: {
            trialid: "MINI_SEA_mini_social_cognition_emotional_assessment_storie_" + index_storie + "_question_" + index_question
          },
          on_finish: function(data) {
            if (data.responses == '{"Q0":"Si"}') {
              storie_is_unusual = true;
            } else if (data.responses == '{"Q0":"No"}') {
              storie_is_unusual = false;
            }
          }
        }]
      })
    } else if (index_question > 1 && index_question < 7) {
      storie_timeline.push({
        timeline: [{
          type: "survey-text",
          questions: [{
            prompt: "<div class='justified'><br/>" + question + "<br/></div>",
            required: true
          }],
          preamble: trial.storie,
          data: {
            trialid: "MINI_SEA_mini_social_cognition_emotional_assessment_storie_" + index_storie + "_question_" + index_question
          }
        }],
        conditional_function: function() {
          if (storie_is_unusual) {
            return true;
          } else {
            return false;
          }
        }
      })
    } else {
      storie_timeline.push({
        timeline: [{
          type: "survey-text",
          questions: [{
            prompt: "<div class='justified'><br/>" + question + "<br/></div>",
            required: true
          }],
          preamble: trial.storie,
          data: {
            trialid: "MINI_SEA_mini_social_cognition_emotional_assessment_storie_" + index_storie + "_question_" + index_question
          }
        }]
      })
    }
    index_question += 1;
  })
  MINI_SEA_mini_social_cognition_emotional_assessment.push({
    timeline: storie_timeline
  });
  index_storie += 1;
})

MINI_SEA_mini_social_cognition_emotional_assessment.push(instructions_2);

for (var image_index = 1; image_index < 36; image_index++) {
  MINI_SEA_mini_social_cognition_emotional_assessment.push({
    type: "survey-multi-choice1",
    questions: [{
      prompt: "<img width='40%'src='images/" + image_index + ".png' />",
      options: ['Alegría', 'Sorpresa', 'Neutro', 'Tristeza', 'Miedo', 'Asco', 'Enojo'],
      horizontal: true,
      required: true
    }],
    data: {
      trialid: "MINI_SEA_mini_social_cognition_emotional_assessment_image_" + image_index
    }
  })
  MINI_SEA_mini_social_cognition_emotional_assessment.push({
    type: "survey-multi-choice1",
    questions: [{
      prompt: "<img width='40%'src='images/" + image_index + ".png' /><br>¿Considera que su respuesta es correcta?",
      options: ['Si', 'No'],
      required: true
    }],
    data: {
      trialid: "MINI_SEA_mini_social_cognition_emotional_assessment_image_" + image_index
    }
  })
  MINI_SEA_mini_social_cognition_emotional_assessment.push({
    type: "survey-multi-choice1",
    questions: [{
      prompt: "<img width='40%'src='images/" + image_index + ".png' /><br>¿Qué tanta confianza siente respecto de su respuesta en esta tarea?",
      options: ['1<br>(muy poca)', '2<br>(poca)', '3<br>(más o menos)', '4<br>(bastante)', '5<br>(mucha)'],
      horizontal: true,
      required: true
    }],
    data: {
      trialid: "MINI_SEA_mini_social_cognition_emotional_assessment_image_" + image_index
    }
  })
}
