/**
@file
@name
 * The experiment ansiedad matematica
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

var randomize_questions = true; //true for randomization of questions, false for questions in order
var randomize_animations = true; //true for randomization of questions, false for questions in order

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

var instructions_1 = {
  type: 'instructions',
  pages: ['Usted verá algunas imágenes y luego le haremos algunas preguntas acerca de ellas.<br><br><p style="text-align:center">Presione la flecha hacia abajo para continuar.</p>'],
  show_clickable_nav: false,
  data: {
    trialId: "instructions_1"
  },
  key_forward: "downarrow",
  on_start: function(trial) {
    getFrames();
    getQuestions();
  },
  on_finish: function(data) {
    delete(data.view_history);
  }
}

var instructions_2 = {
  type: 'instructions',
  pages: ['No lo piense por mucho tiempo, simplemente díganos el primer pensamiento que le venga a la mente.<br><br><p style="text-align:center">Presione la flecha hacia abajo para continuar.</p>'],
  show_clickable_nav: false,
  data: {
    trialId: "instructions_2"
  },
  key_forward: "downarrow",
  on_finish: function(data) {
    delete(data.view_history);
  }
}

var instructions_3 = {
  type: 'slider-with-options',
  prompt: 'Use las flechas izquierda y derecha para mover la línea y así responder las preguntas.',
  scale_question: "¿Cuanto?",
  left_option: "Menos",
  rigth_option: "Mas",
  data: {
    trialId: "instructions_3"
  }
}

var instructions_4 = {
  type: 'instructions',
  pages: ['Después de cada imágen, presione la FLECHA HACIA ABAJO en el momento exacto en que entienda lo que pasó, no antes ni después.<br><br><p style="text-align:center">Presione la flecha hacia abajo para continuar.</p>'],
  show_clickable_nav: false,
  data: {
    trialId: "instructions_4"
  },
  key_forward: "downarrow",
  on_finish: function(data) {
    delete(data.view_history);
  }
}

var instructions_5 = {
  type: 'instructions',
  pages: ['A continuación le presentamos un ejemplo de la tarea para que practique.<br><br><p style="text-align:center">Presione la flecha hacia abajo para continuar.</p>'],
  show_clickable_nav: false,
  data: {
    trialId: "instructions_5"
  },
  key_forward: "downarrow",
  on_finish: function(data) {
    delete(data.view_history);
  }
}

var practice_animation = {
  type: 'animation-keyboard-response',
  stimulus: ['practica/p_i2_umbrella_frame001.bmp', 'practica/p_i2_umbrella_frame002.bmp', 'practica/p_i2_umbrella_frame003.bmp'],
  choices: jsPsych.NO_KEYS,
  stimulus_duration: [500, 200],
  data: {
    rt: 500,
    trialId: "instructions_practice"
  },
  choices: ["downarrow"],
  on_finish: function(data) {
    delete(data.key_press);
  }
}

var practice_response = {
  type: 'slider-with-options',
  prompt: '<img src="practica/p_i2_umbrella_frame003.bmp";"></img>',
  scale_question: "¿Qué tan triste se siente por la persona lastimada?",
  left_option: "Nada triste",
  rigth_option: "Muy triste",
  data: {
    trialId: "instructions_practice_response"
  }
}

var instructions_6 = {
  type: 'instructions',
  pages: ['¿Ha comprendido?, si tiene alguna duda, antes de comenzar  pregúntele al investigador<br>¡Ahora comenzaremos!<br><br><p style="text-align:center">Presione la flecha hacia abajo para continuar.</p>'],
  show_clickable_nav: false,
  data: {
    trialId: "instructions_6"
  },
  key_forward: "downarrow",
  on_finish: function(data) {
    delete(data.view_history);
  }
}

var goodbye = {
  type: 'instructions',
  pages: ['¡Muy buen trabajo!  ¡Gracias por su participación!<br><br><p style="text-align:center">Presione la flecha hacia abajo para continuar.</p>'],
  show_clickable_nav: false,
  data: {
    trialId: "goodbye"
  },
  key_forward: "downarrow",
  on_finish: function(data) {
    delete(data.view_history);
  }
}

var empatia_por_dolor = [];

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
  empatia_por_dolor.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

empatia_por_dolor.push(instructions_1);
empatia_por_dolor.push(instructions_2);
empatia_por_dolor.push(instructions_3);
empatia_por_dolor.push(instructions_4);
empatia_por_dolor.push(instructions_5);
empatia_por_dolor.push(practice_animation);
empatia_por_dolor.push(practice_response);
empatia_por_dolor.push(instructions_6);


var frames = [];
var questions = [];
var frames_done = false;
var questions_done = false;

function create_trials() {
  var animation = {
    type: 'animation-keyboard-response',
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: jsPsych.NO_KEYS,
    stimulus_duration: [500, 200],
    data: jsPsych.timelineVariable('data_animation'),
    choices: ["downarrow"],
    on_finish: function(data) {
      data.trialId = "id_" + data.animation_id;
      delete(data.animation_id);
      delete(data.key_press);
    }
  }

  var on_purpose = {
    type: 'slider-with-options',
    prompt: jsPsych.timelineVariable('stimulus'),
    scale_question: "¿Fué esto a proposito?",
    left_option: "No",
    rigth_option: "Si",
    yes_or_no_slider: true,
    on_start: function(trial) {
      trial.prompt = '<img src="' + trial.prompt[2] + '">';
    },
    on_finish: function(data) {
      animation_nodeID = jsPsych.currentTimelineNodeID().slice(0, 8) + 0 + jsPsych.currentTimelineNodeID().slice(9, 11)
      data.stimulus = jsPsych.data.getDataByTimelineNode(animation_nodeID).values()[0].stimulus
      data.trialId = jsPsych.data.getDataByTimelineNode(animation_nodeID).values()[0].trialId;
      data.question_id = "question_0";
    }
  }

  var question = {
    type: 'slider-with-options',
    prompt: jsPsych.timelineVariable('stimulus'),
    scale_question: jsPsych.timelineVariable('scale_question'),
    left_option: jsPsych.timelineVariable('left_option'),
    rigth_option: jsPsych.timelineVariable('rigth_option'),
    data: jsPsych.timelineVariable('data_question'),
    on_start: function(trial) {
      trial.prompt = '<img src="' + trial.prompt[2] + '">';
    },
    on_finish: function(data) {
      animation_nodeID = jsPsych.currentTimelineNodeID().slice(0, 8) + 0 + jsPsych.currentTimelineNodeID().slice(9, 11)
      data.stimulus = jsPsych.data.getDataByTimelineNode(animation_nodeID).values()[0].stimulus
      data.trialId = jsPsych.data.getDataByTimelineNode(animation_nodeID).values()[0].trialId;
      data.question_id = "question_" + data.question_id;
      delete(data.question_id)
    }
  }

  var index = 1;
  var animations = [];
  frames.forEach(function(frame) {
    animations.push({
      stimulus: ['experimento/' + frame[0], 'experimento/' + frame[1], 'experimento/' + frame[2]],
      data_animation: {
        animation_id: index
      }
    })
    index += 1;
  })

  var question_index = 1;
  var questions_variables = [];
  questions.forEach(function(question) {
    questions_variables.push({
      scale_question: question.question,
      left_option: question.low,
      rigth_option: question.high,
      data_question: {
        question_id: question_index
      }
    })
    question_index += 1;
  })

  jsPsych.addNodeToEndOfTimeline({
    timeline: [animation, on_purpose, {
      timeline: [question],
      randomize_order: randomize_questions,
      timeline_variables: questions_variables
    }],
    randomize_order: randomize_animations, //Change to false for default order.
    timeline_variables: animations
  })
}

window.addEventListener('message', function(event) {
  if (event.data == "frames_done" && questions_done) {
    create_trials();
  } else if (event.data == "questions_done" && frames_done) {
    create_trials();
  } else if (event.data == "frames_done") {
    frames_done = true;
  } else if (event.data == "questions_done") {
    questions_done = true;
  }
})

function getFrames() {
  var frames_csv = new XMLHttpRequest();
  frames_csv.open('GET', 'listado_items.csv');
  frames_csv.responseType = "text";
  ["stimulus"]
  frames_csv.onreadystatechange = function() {
    if (frames_csv.readyState === 4) {
      if (frames_csv.status === 200 || frames_csv.status == 0) {
        frames_csv.responseText.split('\n').slice(1).forEach(function(row_text) {
          if (row_text != '') {
            frames.push(row_text.split(',').slice(1));
          }
        })
        window.postMessage("frames_done", "*");
      }
    }
  }
  frames_csv.send();
}

function getQuestions() {
  var questions_csv = new XMLHttpRequest();
  questions_csv.open('GET', 'preguntas.csv');
  questions_csv.responseType = "text";
  questions_csv.onreadystatechange = function() {
    if (questions_csv.readyState === 4) {
      if (questions_csv.status === 200 || questions_csv.status == 0) {
        questions_csv.responseText.split('\n').slice(1).forEach(function(row_text) {
          if (row_text != '') {
            row = row_text.split(',');
            questions.push({
              low: row[0],
              high: row[1],
              question: row[2]
            });
          }
        })
        window.postMessage("questions_done", "*");
      }
    }
  }
  questions_csv.send();
}
