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
  pages: ['Usted verá algunas imágenes y luego le haremos algunas preguntas acerca de ellas.'],
  show_clickable_nav: true,
  data: {
    trialId: "instructions_1"
  }
}

var instructions_2 = {
  type: 'instructions',
  pages: ['No lo piense por mucho tiempo, simplemente díganos el primer pensamiento que le venga a la mente'],
  show_clickable_nav: true,
  data: {
    trialId: "instructions_2"
  }
}

var instructions_3 = {
  type: 'slider-with-options',
  prompt: 'Use las flechas izquierda y derecha para mover la línea y así responder las preguntas. Presione la flecha hacia abajo al terminar.',
  scale_question: "¿Cuanto?",
  left_option: "Menos",
  rigth_option: "Mas",
  data: {
    trialId: "instructions_3"
  }
}

var instructions_4 = {
  type: 'instructions',
  pages: ['Después de cada imágen, presione la FLECHA HACIA ABAJO en el momento exacto en que entienda lo que pasó, no antes ni después.'],
  show_clickable_nav: true,
  data: {
    trialId: "instructions_4"
  }
}

var instructions_5 = {
  type: 'instructions',
  pages: ['A continuación le presentamos un ejemplo de la tarea para que practique'],
  show_clickable_nav: true,
  data: {
    trialId: "instructions_5"
  }
}

var practice_1 = {
  type: 'image-keyboard-response',
  stimulus: 'practica/p_i2_umbrella_frame001.bmp',
  prompt: '<img src="practica/p_i2_umbrella_frame002.bmp" hidden><img src="practica/p_i2_umbrella_frame003.bmp" hidden>',
  choices: jsPsych.NO_KEYS,
  trial_duration: 500,
  data: {
    rt: 500,
    trialId: "instructions_practice_frame_1"
  }
}

var practice_2 = {
  type: 'image-keyboard-response',
  stimulus: 'practica/p_i2_umbrella_frame002.bmp',
  choices: jsPsych.NO_KEYS,
  trial_duration: 200,
  data: {
    rt: 200,
    trialId: "instructions_practice_frame_2"
  }
}

var practice_3 = {
  type: 'slider-with-options',
  prompt: '<img src="practica/p_i2_umbrella_frame003.bmp" style="width:100%;"></img>',
  scale_question: "¿Qué tan triste se siente por la persona lastimada?",
  left_option: "Nada triste",
  rigth_option: "Muy triste",
  data: {
    trialId: "instructions_practice_frame_3"
  }
}

var instructions_6 = {
  type: 'instructions',
  pages: ['¿Ha comprendido?, si tiene alguna duda, antes de comenzar  pregúntele al investigador<br>¡Ahora comenzaremos!'],
  show_clickable_nav: true,
  data: {
    trialId: "instructions_6"
  }
}

var goodbye = {
  type: 'instructions',
  pages: ['¡Muy buen trabajo!  ¡Gracias por su participación!'],
  show_clickable_nav: true,
  data: {
    trialId: "goodbye"
  }
}

var empatia_por_dolor = [];

empatia_por_dolor.push(instructions_1);
empatia_por_dolor.push(instructions_2);
empatia_por_dolor.push(instructions_3);
empatia_por_dolor.push(instructions_4);
empatia_por_dolor.push(instructions_5);
empatia_por_dolor.push(practice_1);
empatia_por_dolor.push(practice_2);
empatia_por_dolor.push(practice_3);
empatia_por_dolor.push(instructions_6);


var frames = [];
var questions = [];
var frames_done = false;
var questions_done = false;

function create_trials() {
  var trials = [];
  var index = 1;
  frames.forEach(function(frame) {
    trials.push({
      type: 'image-keyboard-response',
      stimulus: 'experimento/' + frame[0],
      choices: jsPsych.NO_KEYS,
      prompt: "<img src='experimento/" + frame[1] + "' hidden></img><img src='experimento/" + frame[2] + "' hidden></img>",
      trial_duration: 500,
      data: {
        trialId: "stimulus_frame_1_id_" + index,
        rt: 500
      }
    })
    trials.push({
      type: 'image-keyboard-response',
      stimulus: 'experimento/' + frame[1],
      choices: jsPsych.NO_KEYS,
      trial_duration: 200,
      data: {
        trialId: "stimulus_frame_2_id_" + index,
        rt: 200
      }
    })
    questions.forEach(function(question) {
      trials.push({
        type: 'slider-with-options',
        prompt: '<img src="experimento/' + frame[2] + '"></img>',
        scale_question: question.question,
        left_option: question.low,
        rigth_option: question.high,
        data: {
          trialId: "stimulus_frame_3_id_" + index,
          stimulus: frame[2]
        }
      })
    })
  })
  jsPsych.addNodeToEndOfTimeline({
    timeline: trials
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

var frames_csv = new XMLHttpRequest();
frames_csv.open('GET', 'listado_items.csv');
frames_csv.responseType = "text";
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
frames_csv.send();
