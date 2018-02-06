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

var screen_fisica_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Actividad fisica</big></b><br />'+
    "Lee atentamente las siguientes instrucciones"+
    '</p>'],
    key_forward: 'enter',
    show_clickable_nav: true,
    data:{trialid: "Screen_WM"},
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

// Inicio prueba
var instructions1_1 = {
  type: "instructions",
  pages: ['PARTE 1: ACTIVIDAD FÍSICA RELACIONADA CON EL TRABAJO<br><br>La primera sección es relacionada con su trabajo. Esto incluye trabajos con sueldo, agrícola, trabajo voluntario, clases, y cualquier otra clase de trabajo no pago que usted hizo fuera de su casa. No incluya trabajo no pago que usted hizo en su casa, tal como limpiar la casa, trabajo en el jardín, mantenimiento general, y el cuidado de su familia. Estas actividades serán preguntadas en la parte 3.'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_1_actividad_fisica"
  }
};

var instructions1_2 = {
  type: "instructions",
  pages: ['Las siguientes preguntas se refieren a todas las actividades físicas que usted hizo en los últimos 7 días como parte de su trabajo pagado o no pagado. Esto no incluye ir y venir del trabajo.'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_1_actividad_fisica"
  }
};

var instructions2 = {
  type: "instructions",
  pages: ['PARTE 2: ACTIVIDAD FíSICA RELACIONADA CON TRANSPORTE<br><br>Estas preguntas se refieren a la forma como usted se desplazó de un lugar a otro, incluyendo lugares como el trabajo, las tiendas, el cine, entre otros.'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_2_actividad_fisica"
  }
};

var instructions3 = {
  type: "instructions",
  pages: ['PARTE 3: TRABAJO DE LA CASA, MANTENIMIENTO DE LA CASA, Y CUIDADO DE LA FAMILIA<br><br>Esta sección se refiere a algunas actividades físicas que usted hizo en los <b>últimos 7 días</b> en y alrededor de su casa tal como como arreglo de la casa, jardinería, trabajo en el pasto, trabajo general de mantenimiento, y el cuidado de su familia.'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_3_actividad_fisica"
  }
};

var instructions4 = {
  type: "instructions",
  pages: ['PARTE 4: ACTIVIDADES FíSICAS DE RECREACIÓN, DEPORTE Y TIEMPO LIBRE<br><br>Esta sección se refiere a todas aquellas actividades físicas que usted hizo en los últimos 7 días únicamente por recreación, deporte, ejercicio o placer. Por favor no incluya ninguna de las actividades que ya haya mencionado.'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_4_actividad_fisica"
  }
};

var instructions5 = {
  type: "instructions",
  pages: ['PARTE 5: TIEMPO DEDICADO A ESTAR SENTADO(A)<br><br>Las últimas preguntas se refieren al tiempo que usted permanence sentado(a) en el trabajo, la casa, estudiando, y en su tiempo libre. Esto incluye tiempo sentado(a) en un escritorio, visitando amigos(as), leyendo o permanecer sentado(a) o acostado(a) mirando television. No incluya el tiempo que permanence sentado(a) en un vehículo de motor que ya haya mencionado anteriormente.'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_5_actividad_fisica"
  }
};

var working = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: '¿Tiene usted actualmente un trabajo o hace algún trabajo no pago fuera de su casa?',
    options: ['Si', 'No'],
    required: true
  }],
  data: {
    trialid: "actividad_fisica_1"
  }
}

var trials1 = [
  {
    question: 'Durante los <u>últimos 7 días</u>, ¿Cuántos días realizó usted actividades físicas <u>vigorosas</u> como levantar objetos pesados, excavar, construcción pesada, o subir escaleras como parte de su trabajo? Piense solamente en esas actividades que usted hizo por lo menos 10 minutos continuos. (Escriba 0 si no ha realizado ninguna actividad física vigorosa relacionada con el trabajo)',
    endword: 'días'
  },
  {
    question: '¿Cuánto tiempo (en horas) usualmente le toma realizar actividades físicas <u>vigorosas</u> en uno de esos días que las realiza como parte de su trabajo?<br>Si es menos de 1 hora escriba -1. Si no realiza actividades físicas vigorosas escriba 0.',
    endword: 'horas'
  },
  {
    question: 'Nuevamente, piense solamente en esas actividades que usted hizo por lo menos 10 minutos continuos. Durante <u>los últimos 7 días, </u>¿Cuántos días hizo Usted actividades físicas<u> </u><u>moderadas </u>como cargar cosas ligeras como<u> parte de su trabajo</u>? Por favor no incluya caminar.<br>Si no ha realizado actividad física moderada relacionada con el trabajo escriba 0',
    endword: 'días'
  },
  {
    question: '¿Cuánto tiempo en total (en horas) usualmente le toma realizar actividades físicas <u>moderadas</u> en uno de esos días que las realiza como parte de su trabajo?<br>Si no realiza actividades físicas moderadas escriba 0',
    endword: 'horas'
  },
  {
    question: '¿Cuántos días caminó usted por lo menos <u>10 minutos continuos</u> como parte de su trabajo? Por favor no incluya ninguna caminata que usted hizo para desplazarse desde o hacia su trabajo.',
    endword: 'días'
  },
  {
    question: '¿Cuánto tiempo en total (en horas) pasó generalmente <u>caminado</u> en uno de esos días como parte de su trabajo?<br>Si es menos de 1 hora escriba -1<br>SI no caminó como parte de su trabajo escriba 0',
    endword: 'horas'
  }
]
var trials2 = [
  {
    question: 'Durante los<u> últimos 7 días</u>, ¿Cuántos días <u>viajó</u> usted en un vehículo de motor como un bus, micro, auto o metro?<br>Si no viajó en un vehículo escriba 0',
    endword: 'días'
  },
  {
    question: 'Usualmente, ¿Cuánto tiempo (en horas) gastó usted en uno de esos días <u>viajando</u> en un metro, bus, automóvil, micro u otra clase de vehículo a motor?<br>Si fue menos de 1 hora escriba -1<br>Si no gastó tiempo viajando escriba 0',
    endword: 'horas'
  },
  {
    question: 'Durante los <u>últimos 7 días,</u> ¿Cuántos días anduvo usted en <u>bicicleta</u> por al menos 10 minutos continuos para ir de un lugar a otro?<br>Si no anduvo en bicicleta escriba 0',
    endword: 'días'
  },
  {
    question: 'Usualmente, ¿Cuánto tiempo (en horas) gastó usted en uno de esos días andando en <u>bicicleta</u> de un lugar a otro?<br>Si es menos de 1 hora escriba -1<br>Si no ha andado en bicicleta escriba 0',
    endword: 'horas'
  },
  {
    question: 'Durante los últimos 7 días, ¿Cuántos días <u>caminó</u> usted por al menos 10 minutos continuos para ir de un sitio a otro?',
    endword: 'días'
  },
  {
    question: 'Usualmente ¿Cuánto tiempo gastó usted (en horas) en uno de esos días <u>caminando</u> de un lugar a otro?<br>Si es menos de 1 hora escriba -1<br>Si no ha caminado de un lugar a otro escriba 0',
    endword: 'horas'
  }
]
var trials3 = [
  {
    question: ' Piense únicamente acerca de esas actividades físicas que hizo por lo menos 10 minutos continuos. Durante los últimos 7 días, ¿Cuántos días hizo usted <u>actividades físicas vigorosas</u> tal como levantar objetos pesados, cortar madera, palear nieve, o excavar en el jardín o patio?',
    endword: 'días'
  },
  {
    question: 'Usualmente, ¿Cuánto tiempo dedica usted (en horas) en uno de esos días haciendo <u>actividades físicas vigorosas</u> en el jardín o patio?<br>Si es menos de 1 hora escriba -1<br>SI no ocupa tiempo en actividades físicas vigorosas escriba 0',
    endword: 'horas'
  },
  {
    question: 'Nuevamente, piense únicamente acerca de esas actividades físicas que hizo por lo menos 10 minutos continuos. Durante los últimos 7 días, ¿Cuántos días hizo usted<u> actividades físicas moderadas t</u>al como cargar objetos livianos, barrer, lavar ventanas, y rastrillar en el jardín o patio?',
    endword: 'días'
  },
  {
    question: 'Usualmente, ¿Cuánto tiempo (en horas) dedica usted en uno de esos días haciendo <u>actividades físicas moderadas </u>en el jardín o patio?<br>Si es menos de 1 hora escriba -1',
    endword: 'horas'
  },
  {
    question: 'Una vez más, piense únicamente acerca de esas actividades físicas que hizo por lo menos 10 minutos continuos.<u> Durante los últimos 7 días</u>, ¿Cuántos días hizo usted <u>actividades físicas moderadas </u>tal como cargar objetos livianos, lavar ventanas, estregar pisos y barrer dentro de su casa?',
    endword: 'días'
  },
  {
    question: ' Usualmente, ¿Cuánto tiempo (en horas) dedica usted en uno de esos días haciendo <u>actividades físicas moderadas</u> dentro de su casa?<br>Si es menos de 1 hora escriba -1',
    endword: 'horas'
  }
]
var trials4 = [
  {
    question: 'Sin contar cualquier caminata que ya haya usted mencionado, durante los<u> últimos 7 días</u>, ¿Cuántos días <u>caminó</u> usted por lo menos 10 minutos continuos en su tiempo libre?',
    endword: 'días'
  },
  {
    question: 'Usualmente, ¿Cuánto tiempo (en horas) gastó usted en uno de esos días <u>caminando</u> en su tiempo libre?<br>Si es menos de 1 hora escriba -1',
    endword: 'horas'
  },
  {
    question: 'Piense únicamente acerca de esas actividades físicas que hizo por lo menos 10 minutos continuos. Durante los<u> últimos 7 días</u>, ¿Cuántos días hizo usted <u>actividades físicas vigorosas</u> tal como aeróbica, correr, pedalear rápido en bicicleta, o nadar rápido en su tiempo libre?',
    endword: 'días'
  },
  {
    question: 'Usualmente, ¿Cuánto tiempo (en horas) dedica usted en uno de esos días haciendo<u> actividades físicas vigorosas </u>en su tiempo libre?<br>Si es menos de 1 hora escriba -1',
    endword: 'horas'
  },
  {
    question: 'Nuevamente, piense únicamente acerca de esas actividades físicas que hizo por lo menos 10 minutos continuos. Durante los últimos 7 días, ¿Cuántos días hizo usted <u>actividades físicas moderadas</u> tal como pedalear en bicicleta a paso regular, nadar a paso regular, jugar dobles de tenis, en su tiempo libre?',
    endword: 'días'
  },
  {
    question: 'Usualmente, ¿Cuánto tiempo (en horas) dedica usted en uno de esos días haciendo <u>actividades físicas moderadas</u> en su tiempo libre?<br>Si es menos de 1 hora escriba -1',
    endword: 'horas'
  }
]
var trials5 = [
  {
    question: 'Durante los últimos 7 días, ¿Cuánto tiempo (en horas) permaneció <u>sentado(a)</u> en un día en la semana?<br>Si es menos de 1 hora escriba -1',
    endword: 'horas'
  },
  {
    question: 'Durante los últimos 7 días, ¿Cuánto tiempo (en horas) permaneció<u> </u><u>sentado(a)</u> en un día del fin de semana?<br>Si es menos de 1 hora escriba -1',
    endword: 'horas'
  }
]

// Creacion de timeline e inclusion de trials

actividad_fisica = [];

if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
  //If not FULLSCREEN enable fullscreen
  actividad_fisica.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}
actividad_fisica.push(screen_fisica_experiment);
actividad_fisica.push(instructions1_1);
actividad_fisica.push(working);
actividad_fisica.push(instructions1_2);

index = 2;
trials1.forEach(function(trial) {
  actividad_fisica.push({
    type: "survey-text",
    questions: [{
      prompt: "<div class='justified'><br/>" + trial.question + "<br/></div>",
      required: true
    }],
    endword: trial.endword,
    data: {
      trialid: "actividad_fisica_" + index
    }
  })
  index += 1;
})

actividad_fisica.push(instructions2);

trials2.forEach(function(trial) {
  actividad_fisica.push({
    type: "survey-text",
    questions: [{
      prompt: "<div class='justified'><br/>" + trial.question + "<br/></div>",
      required: true
    }],
    endword: trial.endword,
    data: {
      trialid: "actividad_fisica_" + index
    }
  })
  index += 1;
})

actividad_fisica.push(instructions3);

trials3.forEach(function(trial) {
  actividad_fisica.push({
    type: "survey-text",
    questions: [{
      prompt: "<div class='justified'><br/>" + trial.question + "<br/></div>",
      required: true
    }],
    endword: trial.endword,
    data: {
      trialid: "actividad_fisica_" + index
    }
  })
  index += 1;
})

actividad_fisica.push(instructions4);

trials4.forEach(function(trial) {
  actividad_fisica.push({
    type: "survey-text",
    questions: [{
      prompt: "<div class='justified'><br/>" + trial.question + "<br/></div>",
      required: true
    }],
    endword: trial.endword,
    data: {
      trialid: "actividad_fisica_" + index
    }
  })
  index += 1;
})

actividad_fisica.push(instructions5);

trials5.forEach(function(trial) {
  actividad_fisica.push({
    type: "survey-text",
    questions: [{
      prompt: "<div class='justified'><br/>" + trial.question + "<br/></div>",
      required: true
    }],
    endword: trial.endword,
    data: {
      trialid: "actividad_fisica_" + index
    }
  })
  index += 1;
})
