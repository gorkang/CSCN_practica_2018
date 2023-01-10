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
  'Ahora leer&aacute; 10 historias cortas. Algunas contienen una metedura de pata, y otras no. Usted debe encontrarlas y explicarlas. Para responder a las preguntas, usted puede releer las historias el n&uacute;mero de veces que quiera. No es un test de memoria.'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_1_MINI_SEA_mini_social_cognition_emotional_assessment"
  }
};

var stories = [{
    storie: 'Miguel, un niño de 9 años, comenz&oacute; a asistir a un nuevo<br>' +
      'colegio. &eacute;l estaba en uno de los sillones de la sala de<br>' +
      'descanso de la escuela. Javier y Pedro, otros dos niños,<br>' +
      'entraron y se pararon a hablar al lado de la puerta. Javier<br>' +
      'dijo “¿Conoces al niño nuevo del curso?. Su nombre es<br>' +
      'Miguel. ¿No parece extraño?, ¡Es tan pequeño!”. Miguel<br>' +
      'se par&oacute; del sill&oacute;n y, Javier y Pedro lo miraron. Pedro dijo<br>' +
      '“¡Hola Miguel! ¿Vas a jugar f&uacute;tbol ahora?”.',
    questions: ['1- ¿Alguien dijo algo que no deber&iacute;a decir o algo raro?', '2- ¿Qui&eacute;n dijo algo que no deber&iacute;a decir o algo raro?', '3- ¿Por qu&eacute; &eacute;l/ella no deber&iacute;a haberlo dicho o por qu&eacute; estuvo fuera de lugar?', '4- ¿Por qu&eacute; piensa que &eacute;l / ella lo dijo?', '5- ¿Sab&iacute;an Javier y Pedro, mientras hablaban que Miguel estaba en los sillones?', '6- ¿C&oacute;mo crees que Miguel se sinti&oacute;?', '7- En la historia, ¿d&oacute;nde estaba Miguel mientras Javier y Pedro hablaban?', '8- ¿Qu&eacute; dijo Javier sobre Miguel?']
  },
  {
    storie: 'Victoria estaba en una fiesta en casa de su amigo Alberto.<br>' +
      'Ella hablaba con Alberto cuando una mujer se acerc&oacute; a<br>' +
      'ellos. Era una de las vecinas de Alberto. La mujer dijo<br>' +
      '“Hola” y se volvi&oacute; hacia Victoria dici&eacute;ndole: “Parece que<br>' +
      'no nos han presentado. Soy Mar&iacute;a, ¿cu&aacute;l es tu nombre?”.<br>' +
      '“Yo soy Victoria”. Alberto pregunt&oacute;: “¿alguien quiere<br>' +
      'algo para beber?”.',
    questions: ['1- ¿Alguien dijo algo que no deber&iacute;a decir o algo raro?', '2- ¿Qui&eacute;n dijo algo que no deber&iacute;a decir o algo raro?', '3- ¿Por qu&eacute; &eacute;l/ella no deber&iacute;a haberlo dicho o por qu&eacute; estuvo fuera de lugar?', '4- ¿Por qu&eacute; piensa que &eacute;l / ella lo dijo?', '5- ¿Sab&iacute;a Alberto que Victoria y Maria no se conoc&iacute;an?', '6- ¿C&oacute;mo piensas que se sinti&oacute; Victoria?', '7- En la historia, ¿d&oacute;nde estaba Victoria?', '8- ¿Victoria y Maria se conoc&iacute;an?']
  },
  {
    storie: 'Juan estaba comprando una camisa para combinarla con<br>' +
      'su traje. El vendedor le mostr&oacute; varias camisas. Juan las<br>' +
      'mir&oacute; y, finalmente, encontr&oacute; una del color adecuado.<br>' +
      'Pero, cuando fue al probador y se la prob&oacute;, no le quedaba<br>' +
      'bien. “Me temo que es muy pequeña”, le dijo al<br>' +
      'vendedor. “No se preocupe” dijo el vendedor. “La<br>' +
      'pr&oacute;xima semana tendremos m&aacute;s en una talla m&aacute;s<br>' +
      'grande”. “Bien, volver&eacute; entonces” dijo Juan.',
    questions: ['1- ¿Alguien dijo algo que no deber&iacute;a decir o algo raro?', '2- ¿Qui&eacute;n dijo algo que no deber&iacute;a decir o algo raro?', '3- ¿Por qu&eacute; &eacute;l/ella no deber&iacute;a haberlo dicho o por qu&eacute; estuvo fuera de lugar?', '4- ¿Por qu&eacute; piensa que &eacute;l / ella lo dijo?', '5- ¿Cu&aacute;ndo se prob&oacute; la camisa, sab&iacute;a Juan que no la ten&iacute;an en su talla?', '6- ¿C&oacute;mo crees que se sinti&oacute; Juan?', '7- En la historia, ¿qu&eacute; estaba buscando Juan?', '8- ¿Por qu&eacute; volver&iacute;a la semana que viene?']
  },
  {
    storie: 'Jimena se acaba de cambiar a un departamento nuevo.<br>' +
      'Jimena fue de compras y compr&oacute; cortinas nuevas para su<br>' +
      'dormitorio. Cuando reci&eacute;n hab&iacute;a terminado de decorar su<br>' +
      'departamento, lleg&oacute; Elisa, su mejor amiga. Jimena le hizo<br>' +
      'un recorrido por el departamento y le pregunt&oacute; “¿Te gusta<br>' +
      'mi dormitorio?”. Elisa dijo: “¡Esas cortinas son horribles,<br>' +
      'me imagino que vas a comprar unas nuevas!”.',
    questions: ['1- ¿Alguien dijo algo que no deber&iacute;a decir o algo raro?', '2- ¿Qui&eacute;n dijo algo que no deber&iacute;a decir o algo raro?', '3- ¿Por qu&eacute; &eacute;l/ella no deber&iacute;a haberlo dicho o por qu&eacute; estuvo fuera de lugar?', '4- ¿Por qu&eacute; piensa que &eacute;l / ella lo dijo?', '5- ¿Sab&iacute;a Elisa qui&eacute;n hab&iacute;a comprado las cortinas?', '6- ¿C&oacute;mo crees que se sinti&oacute; Jimena?(si dice "mal" preguntar: ¿qu&eacute; otra emoci&oacute;n pudo sentir?)', '7- En la historia, ¿qu&eacute; es lo que Jimena acababa de comprar?', '8- ¿Hace cu&aacute;nto que Jimena viv&iacute;a en ese departamento?']
  },
  {
    storie: 'Sandra es una niña de tres años, con cara redonda y pelo<br>' +
      'corto y rubio. Estaba en la casa de su t&iacute;a Carolina. El<br>' +
      'timbre de la casa son&oacute; y su t&iacute;a Carolina fue a atenderlo.<br>' +
      'Era Mar&iacute;a, la vecina. “Hola,” dijo la t&iacute;a Carolina, “Qu&eacute;<br>' +
      'amable de tu parte pasar a saludarnos”. Mar&iacute;a dijo,<br>' +
      '“Hola”, y mir&oacute; a Sandra diciendo, “Oh, parece que no me<br>' +
      'han presentado a este niñito. ¿Cu&aacute;l es tu nombre?”.',
    questions: ['1- ¿Alguien dijo algo que no deber&iacute;a decir o algo raro?', '2- ¿Qui&eacute;n dijo algo que no deber&iacute;a decir o algo raro?', '3- ¿Por qu&eacute; &eacute;l/ella no deber&iacute;a haberlo dicho o por qu&eacute; estuvo fuera de lugar?', '4- ¿Por qu&eacute; piensa que &eacute;l / ella lo dijo?', '5- ¿Sab&iacute;a Mar&iacute;a que Sandra era una niña?', '6- ¿C&oacute;mo crees que se sinti&oacute; Sandra?(si dice "mal" o repite siempre la misma respuesta como "triste" preguntar: ¿qu&eacute; otra emoci&oacute;n pudo sentir?)', '7- En la historia, ¿d&oacute;nde estaba Sandra?', '8- ¿Qui&eacute;n pas&oacute; de visita?']
  },
  {
    storie: 'Patricia hab&iacute;a tenido un rol principal en la obra de teatro<br>' +
      'escolar del año pasado, y ella deseaba mucho el rol<br>' +
      'protag&oacute;nico este año. Tom&oacute; clases de actuaci&oacute;n, y en la<br>' +
      'primavera, audicion&oacute; para la obra. El d&iacute;a en que se<br>' +
      'publicaron los resultados, se fue antes de clases a mirar la<br>' +
      'lista de quienes hab&iacute;an quedado en la obra. No hab&iacute;a<br>' +
      'quedado como protagonista y, en vez de eso, hab&iacute;a<br>' +
      'obtenido un papel menor. Ella corri&oacute; a encontrarse con su<br>' +
      'novio en el pasillo y le cont&oacute; lo que hab&iacute;a sucedido. “Lo<br>' +
      'siento”, dijo &eacute;l, “debes estar desilusionada”. “S&iacute;”,<br>' +
      'respondi&oacute; Patricia, “tengo que decidir si tomo este<br>' +
      'papel”.',
    questions: ['1- ¿Alguien dijo algo que no deber&iacute;a decir o algo raro?', '2- ¿Qui&eacute;n dijo algo que no deber&iacute;a decir o algo raro?', '3- ¿Por qu&eacute; &eacute;l/ella no deber&iacute;a haberlo dicho o por qu&eacute; estuvo fuera de lugar?', '4- ¿Por qu&eacute; piensa que &eacute;l / ella lo dijo?', '5- ¿Sab&iacute;a el novio de Patricia que ella no hab&iacute;a obtenido el rol?', '6- ¿C&oacute;mo crees que se sinti&oacute; Patricia?', '7- En la historia, ¿qu&eacute; papel obtuvo finalmente?', '8- ¿Qu&eacute; tipo de rol tuvo el año anterior?']

  },
  {
    storie: 'Jaime estaba en la biblioteca. Encontr&oacute; el libro que estaba<br>' +
      'buscando acerca de escalar el monte Aconcagua y fue al<br>' +
      'mes&oacute;n del frente para registrarlo y llevarlo. Cuando mir&oacute;<br>' +
      'su billetera, se di&oacute; cuenta que hab&iacute;a dejado su tarjeta de<br>' +
      'biblioteca en la casa.“Lo siento”, le dijo a la mujer detr&aacute;s<br>' +
      'del mes&oacute;n, “parece que he dejado mi tarjeta de biblioteca<br>' +
      'en casa”. “Est&aacute; bien,” dijo ella. “d&iacute;game su nombre, y si<br>' +
      'nosotros lo tenemos en el computador, puede llevarse el<br>' +
      'libro s&oacute;lo mostr&aacute;ndome su carn&eacute; de identidad”.',
    questions: ['1- ¿Alguien dijo algo que no deber&iacute;a decir o algo raro?', '2- ¿Qui&eacute;n dijo algo que no deber&iacute;a decir o algo raro?', '3- ¿Por qu&eacute; &eacute;l/ella no deber&iacute;a haberlo dicho o por qu&eacute; estuvo fuera de lugar?', '4- ¿Por qu&eacute; piensa que &eacute;l / ella lo dijo?', '5- ¿Cuando Jaime fue a la biblioteca, se dio cuenta de que no ten&iacute;a su tarjeta?', '6- ¿C&oacute;mo crees que se sinti&oacute; Jaime?', '7- En esta historia, ¿qu&eacute; libro quer&iacute;a conseguir Jaime?', '8- ¿Podr&aacute; sacar el libro finalmente?']

  },
  {
    storie: 'El primo de Claudia, Gustavo, la estaba visitando y<br>' +
      'Claudia hizo un pastel de manzanas, especialmente para<br>' +
      '&eacute;l. Despu&eacute;s de la cena, ella dijo, “Hice un pastel<br>' +
      'solamente para ti, est&aacute; en la cocina”. “Mmm,” dijo<br>' +
      'Gustavo, “¡Huele bien! Adoro los pasteles, excepto el de<br>' +
      'manzanas, por supuesto”.',
    questions: ['1- ¿Alguien dijo algo que no deber&iacute;a decir o algo raro?', '2- ¿Qui&eacute;n dijo algo que no deber&iacute;a decir o algo raro?', '3- ¿Por qu&eacute; &eacute;l/ella no deber&iacute;a haberlo dicho o por qu&eacute; estuvo fuera de lugar?', '4- ¿Por qu&eacute; piensa que &eacute;l / ella lo dijo?', '5- Cuando Gustavo sinti&oacute; el aroma de la tarta, ¿Ssb&iacute;a que era de manzanas?', '6- ¿C&oacute;mo crees que se sinti&oacute; Claudia?(si dice "mal" o repite siempre la misma respuesta como "triste" preguntar: ¿qu&eacute; otra emoci&oacute;n pudo sentir?)', '7- En la historia, ¿que tipo de tarta hizo Claudia?', '8- ¿C&oacute;mo se conocieron Claudia y Gustavo?']

  },
  {
    storie: 'Daniela compr&oacute; una fuente de cristal a su amiga Ana<br>' +
      'como regalo de matrimonio. Ana recibi&oacute; muchos regalos<br>' +
      'y no sab&iacute;a quien le hab&iacute;a dado cada uno de ellos.<br>' +
      'Alrededor de un año m&aacute;s tarde, Daniela fue invitada una<br>' +
      'noche a la casa de Ana a cenar. Daniela dej&oacute; caer por<br>' +
      'accidente una botella de vino sobre la fuente de cristal y<br>' +
      '&eacute;sta se quebr&oacute;. “Lo siento, quebr&eacute; la fuente”, dijo Daniela.<br>' +
      '“No te preocupes,” dijo Ana. “nunca me gust&oacute; de todos<br>' +
      'modos. Alguien me la regal&oacute; para mi matrimonio”.',
    questions: ['1- ¿Alguien dijo algo que no deber&iacute;a decir o algo raro?', '2- ¿Qui&eacute;n dijo algo que no deber&iacute;a decir o algo raro?', '3- ¿Por qu&eacute; &eacute;l/ella no deber&iacute;a haberlo dicho o por qu&eacute; estuvo fuera de lugar?', '4- ¿Por qu&eacute; piensa que &eacute;l / ella lo dijo?', '5- ¿Se acordaba Ana que Daniela le hab&iacute;a regalado la fuente de cristal?', '6- ¿C&oacute;mo crees que se sinti&oacute; Daniela?(si dice "mal" o repite siempre la misma respuesta como "triste" preguntar: ¿qu&eacute; otra emoci&oacute;n pudo sentir?)', '7- En la historia, ¿qu&eacute; le regal&oacute; Daniela a Ana para su casamiento?', '8- ¿C&oacute;mo se rompi&oacute; la fuente de cristal?']

  },
  {
    storie: 'Tom&aacute;s estaba en un restor&aacute;n. &eacute;l derram&oacute; caf&eacute; en el piso<br>' +
      'por accidente. “Le traer&eacute; otra taza de caf&eacute;”, dijo el<br>' +
      'mozo. El mozo se ausent&oacute; por un momento. Jorge era<br>' +
      'otro cliente en el restor&aacute;n, parado cerca del cajero,<br>' +
      'esperando pagar. Tom&aacute;s fue hacia Jorge y dijo<br>' +
      '“Derram&eacute; caf&eacute; cerca de mi mesa, ¿puede usted<br>' +
      'trapearlo?”.',
    questions: ['1- ¿Alguien dijo algo que no deber&iacute;a decir o algo raro?', '2- ¿Qui&eacute;n dijo algo que no deber&iacute;a decir o algo raro?', '3- ¿Por qu&eacute; &eacute;l/ella no deber&iacute;a haberlo dicho o por qu&eacute; estuvo fuera de lugar?', '4- ¿Por qu&eacute; piensa que &eacute;l / ella lo dijo?', '5- ¿Sab&iacute;a Tom&aacute;s que Jorge era otro cliente?', '6- ¿Como piensas que se sinti&oacute; Jorge?(si dice "mal" o repite siempre la misma respuesta como "triste" preguntar: ¿qu&eacute; otra emoci&oacute;n pudo sentir?)', '7- ¿En la historia, ¿por qu&eacute; estaba Jorge esperando cerca de la caja?', '8- ¿Qu&eacute; fue lo que Tom&aacute;s volc&oacute;?']

  },
  {
    storie: 'Leonora estaba esperando en la parada del bus. El bus<br>' +
      'estaba atrasado y ella hab&iacute;a esperado mucho tiempo. Ella<br>' +
      'ten&iacute;a 65 años y estaba cansada de estar parada por tanto<br>' +
      'rato. Cuando el bus finalmente lleg&oacute;, estaba lleno y no<br>' +
      'ten&iacute;a asientos vac&iacute;os. Ella vi&oacute; a un vecino, Pedro, parado<br>' +
      'en el pasillo del bus. “Hola Leonora”, dijo &eacute;l, “¿estuviste<br>' +
      'esperando mucho rato?”. “Alrededor de 20 minutos”, dijo<br>' +
      'ella. Un hombre joven que estaba sentado, se levant&oacute;.<br>' +
      '“Señora, ¿le gustar&iacute;a tomar asiento?”.',
    questions: ['1- ¿Alguien dijo algo que no deber&iacute;a decir o algo raro?', '2- ¿Qui&eacute;n dijo algo que no deber&iacute;a decir o algo raro?', '3- ¿Por qu&eacute; &eacute;l/ella no deber&iacute;a haberlo dicho o por qu&eacute; estuvo fuera de lugar?', '4- ¿Por qu&eacute; piensa que &eacute;l / ella lo dijo?', '5- Cuando Leonora se subi&oacute; al bus ¿Sab&iacute;a Pedro cu&aacute;nto tiempo hab&iacute;a esperado ella?', '6- ¿C&oacute;mo piensas que se sinti&oacute; Leonora?', '7- En la historia ¿Por qu&eacute; Leonora esper&oacute; en la parada durante 20 minutos?', '8- ¿Hab&iacute;a alg&uacute;n asiento disponible cuando Leonora se subi&oacute; al bus?']

  }
]

var instructions_2 = {
  type: "instructions",
  pages: ['A continuaci&oacute;n se presentan fotograf&iacute;as de rostros con distintas expresiones. Por favor marque la alternativa que mejor represente la emoci&oacute;n de la persona.'],
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
      options: ['Alegr&iacute;a', 'Sorpresa', 'Neutro', 'Tristeza', 'Miedo', 'Asco', 'Enojo'],
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
      prompt: "<img width='40%'src='images/" + image_index + ".png' /><br>¿Qu&eacute; tanta confianza siente respecto de su respuesta en esta tarea?",
      options: ['1<br>(muy poca)', '2<br>(poca)', '3<br>(m&aacute;s o menos)', '4<br>(bastante)', '5<br>(mucha)'],
      horizontal: true,
      required: true
    }],
    data: {
      trialid: "MINI_SEA_mini_social_cognition_emotional_assessment_image_" + image_index
    }
  })
}
