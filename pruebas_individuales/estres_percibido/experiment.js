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
  pages: ['<p><left><b><big>Estres percibido</big></b><br />'+'Las preguntas en esta escala hacen referencia a sus sentimientos y pensamientos durante el último mes. En cada caso, por favor indique cómo usted se ha sentido o ha pensado en cada situación.'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_estres_percibido"
  }
};

likert = ['Nunca', 'Casi nunca', 'De vez en cuando', 'A menudo', 'Muy a menudo'];

var trials = [{
    question: 'En el último mes, ¿con qué frecuencia ha estado afectado por algo que ha ocurrido inesperadamente?.'
  },
  {
    question: 'En el último mes, ¿con qué frecuencia se ha sentido incapaz de controlar las cosas importantes en su vida?.'
  },
  {
    question: 'En el último mes, ¿con qué frecuencia se ha sentido nervioso o estresado?.'
  },
  {
    question: 'En el último mes, ¿con qué frecuencia ha manejado con éxito los pequeños problemas<br>irritantes de la vida?.'
  },
  {
    question: 'En el último mes, ¿con qué frecuencia ha sentido que ha afrontado efectivamente los<br>cambios importantes que han estado ocurriendo en su vida?.'
  },
  {
    question: 'En el último mes, ¿con qué frecuencia ha estado seguro sobre su capacidad para manejar<br>sus problemas personales?.'
  },
  {
    question: 'En el último mes, ¿con qué frecuencia ha sentido que las cosas le van bien?.'
  },
  {
    question: 'En el último mes, ¿con qué frecuencia ha sentido que no podía afrontar todas las cosas<br>que tenía que hacer?.'
  },
  {
    question: 'En el último mes, ¿con qué frecuencia ha podido controlar las dificultades de su vida?.'
  },
  {
    question: 'En el último mes, ¿con qué frecuencia se ha sentido al control de todo?.'
  },
  {
    question: 'En el último mes, ¿con qué frecuencia ha estado enfadado porque las cosas que le han<br>ocurrido estaban fuera de su control?.'
  },
  {
    question: 'En el último mes, ¿con qué frecuencia ha pensado sobre las cosas que le quedan por lograr?.'
  },
  {
    question: 'En el último mes, ¿con qué frecuencia ha podido controlar la forma de pasar el tiempo?.'
  },
  {
    question: 'En el último mes, ¿con qué frecuencia ha sentido que las dificultades se acumulan<br>tanto que no puede superarlas?.'
  }
]

// Creacion de timeline e inclusion de trials

estres_percibido = [];

if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
  //If not FULLSCREEN enable fullscreen
  estres_percibido.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

estres_percibido.push(instructions);

index = 1;
trials.forEach(function(trial) {
  estres_percibido.push({
    type: "survey-multi-choice1",
    questions: [{
      prompt: "<div class='justified'><br/>" + trial.question + "<br/></div>",
      options: likert,
      required: true,
      horizontal: true
    }],
    data: {
      trialid: "estres_percibido" + index
    }
  })
  index += 1;
})
