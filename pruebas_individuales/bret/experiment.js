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

var score_total;
repetitions = 2;

/* ********************************* PANTALLAS DE INICIO Y DESPEDIDA ********************************* */

var welcome = {
  type: 'instructions',
  pages: ['<p><left>BRET<br /></p>'],
  data: {
    trialId: "Screen_BRET"
  },
  show_clickable_nav: true
};

var instructions_test = {
  type: 'instructions',
  pages: ['Instrucciones para test'],
  data: {
    trialId: "Screen_BRET"
  },
  show_clickable_nav: true
};

var bret_trial_0 = {
  type: 'bret',
  data: {
    trialId: "bret_test"
  },
  reveal_bombs: "never",
  allow_clicking: false,
  auto_advance_time: 1
}

var instructions_after_test = {
  type: 'instructions',
  pages: ['Instrucciones para experimento'],
  data: {
    trialId: "Screen_BRET"
  },
  show_clickable_nav: true
};

var bret_trial_1 = {
  type: 'bret',
  data: {
    trialId: "bret_1"
  },
  reveal_bombs: "at_click",
  allow_clicking: false,
  auto_advance_time: 1,
  on_finish: function(data) {
    score_total = data.score;
  }
}

var bret_total_score_1= {
  type: 'instructions',
  pages: [],
  data: {
    trialId: "score_total_1"
  },
  show_clickable_nav: true,
  on_start: function(trial) {
    trial.pages = ["Total acumulado: " + score_total.toFixed(2)];
  }
}

var goodbye = {
  type: 'instructions',
  pages: ['<p><left>Ha completado BRET<br /></p>'],
  data: {
    trialId: "goodbye"
  },
  show_clickable_nav: true
};
/* ********************************* INICIALIZACION DE EXPERIMENTO ********************************* */

bret = []; //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
  bret.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

bret.push(welcome);
bret.push(instructions_test);
bret.push(bret_trial_0);
bret.push(instructions_after_test);
bret.push(bret_trial_1);
bret.push(bret_total_score_1);
index = 2;
while (repetitions > 0) {
  repetitions -= 1;
  bret.push({
    type: 'bret',
    data: {
      trialId: "bret_" + index
    },
    reveal_bombs: "at_click",
    allow_clicking: false,
    auto_advance_time: 1,
    on_finish: function(data) {
      score_total += data.score;
    }
  });

  bret.push({
    type: 'instructions',
    pages: [],
    data: {
      trialId: "score_total_" + index
    },
    show_clickable_nav: true,
    on_start: function(trial) {
      trial.pages = ["Total acumulado: " + score_total.toFixed(2)];
    }
  })
  index += 1;
}

bret.push(goodbye);
