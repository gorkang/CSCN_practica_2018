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
  pages: ['<p><left><b><big>BECKS</big></b><br />'+'En este cuestionario aparecen varios grupos de afirmaciones. Por favor, lea con atención cada una. A continuación, señale cuál de las afirmaciones de cada grupo describe mejor cómo se ha sentido durante esta última semana, incluido en el día de hoy. Si dentro de un mismo grupo, hay más de una afirmación que considere aplicable a su caso, márquela también.'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_becks_depression_inventory"
  }
};

var trials = [{
    question: '1.',
    options: ['No me siento triste.', 'Me siento triste.', 'Me siento triste continuamente y no puedo dejar de estarlo.', 'Me siento tan triste o tan desgraciado que no puedo soportarlo.']
  },
  {
    question: '2.',
    options: ['No me siento especialmente desanimado respecto al futuro.', 'Me siento desanimado respecto al futuro.', 'Siento que no tengo que esperar nada.', 'Siento que el futuro es desesperanzador y las cosas no 2) . mejorarán.']
  },
  {
    question: '3.',
    options: ['No me siento fracasado.', 'Creo que he fracasado más que la mayoría de las personas.', 'Cuando miro hacia atrás, sólo veo fracaso tras fracaso.', 'Me siento una persona totalmente fracasada.']
  },
  {
    question: '4.',
    options: ['Las cosas me satisfacen tanto como antes.', 'No disfruto de las cosas tanto como antes.', 'Ya no obtengo una satisfacción auténtica de las cosas.', 'Estoy insatisfecho o aburrido de todo.']
  },
  {
    question: '5.',
    options: ['No me siento especialmente culpable.', 'Me siento culpable en bastantes ocasiones.', 'Me siento culpable en la mayoría de las ocasiones.', 'Me siento culpable constantemente.']
  },
  {
    question: '6.',
    options: ['No creo que esté siendo castigado.', 'Me siento como si fuese a ser castigado.', 'Espero ser castigado.', 'Siento que estoy siendo castigado.']
  },
  {
    question: '7.',
    options: ['No estoy decepcionado de mí mismo.', 'Estoy decepcionado de mí mismo.', 'Me da vergüenza de mí mismo.', 'Me detesto.']
  },
  {
    question: '8.',
    options: ['No me considero peor que cualquier otro.', 'Me autocritico por mis debilidades o por mis errores.', 'Continuamente me culpo por mis faltas.', 'Me culpo por todo lo malo que sucede.']
  },
  {
    question: '9.',
    options: ['No tengo ningún pensamiento de suicidio.', 'A veces pienso en suicidarme, pero no lo cometería.', 'Desearía suicidarme.', 'Me suicidaría si tuviese la oportunidad.']
  },
  {
    question: '10.',
    options: ['No lloro más de lo que solía llorar.', 'Ahora lloro más que antes.', 'Lloro continuamente.', 'Antes era capaz de llorar, pero ahora no puedo, incluso aunque quiera.']
  },
  {
    question: '11.',
    options: ['No estoy más irritado de lo normal en mí.', 'Me molesto o irrito más fácilmente que antes.', 'Me siento irritado continuamente.', 'No me irrito absolutamente nada por las cosas que antes solían irritarme.']
  },
  {
    question: '12.',
    options: ['No he perdido el interés por los demás.', 'Estoy menos interesado en los demás que antes.', 'He perdido la mayor parte de mi interés por los demás.', 'He perdido todo el interés por los demás.']
  },
  {
    question: '13.',
    options: ['Tomo decisiones más o menos como siempre he hecho.', 'Evito tomar decisiones más que antes.', 'Tomar decisiones me resulta mucho más difícil que antes.', 'Ya me es imposible tomar decisiones.']
  },
  {
    question: '14.',
    options: ['No creo tener peor aspecto que antes.', 'Me temo que ahora parezco más viejo o poco atractivo.', 'Creo que se han producido cambios permanentes en mi aspecto que me hacen parecer poco atractivo.', 'Creo que tengo un aspecto horrible.']
  },
  {
    question: '15.',
    options: ['Trabajo igual que antes.', 'Me cuesta un esfuerzo extra comenzar a hacer algo.', 'Tengo que obligarme mucho para hacer algo.', 'No puedo hacer nada en absoluto.']
  },
  {
    question: '16.',
    options: ['Duermo tan bien como siempre.', 'No duermo tan bien como antes.', 'Me despierto una o dos horas antes de lo habitual y me resulta difícil volver a dormir.', 'Me despierto varias horas antes de lo habitual y no puedo volverme a dormir.']
  },
  {
    question: '17.',
    options: ['No me siento más cansado de lo normal.', 'Me canso más fácilmente que antes.', 'Me canso en cuanto hago cualquier cosa.', 'Estoy demasiado cansado para hacer nada.']
  },
  {
    question: '18.',
    options: ['Mi apetito no ha disminuido.', 'No tengo tan buen apetito como antes.', 'Ahora tengo mucho menos apetito.', 'He perdido completamente el apetito.']
  }
]

// Creacion de timeline e inclusion de trials

becks_depression_inventory = [];

if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
  //If not FULLSCREEN enable fullscreen
  becks_depression_inventory.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

becks_depression_inventory.push(instructions);

index = 1;
trials.forEach(function(trial) {
  becks_depression_inventory.push({
    type: "survey-multi-select",
    questions: [{
      prompt: "<div class='justified'><br/>" + trial.question + "<br/></div>",
      options: trial.options
    }],
    required: true,
    required_msg: 'Debeas elegir a lo menos una opcion.',
    data: {
      trialid: "becks_depression_inventory_" + index
    }
  })
  index += 1;
})
