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

/* ********************************* PANTALLAS DE INICIO Y DESPEDIDA ********************************* */

var welcome = {
    type: 'instructions',
    pages: ['<p><left>BRET<br /></p>'],
    data: {
        trialid: "Screen_BRET"
    },
    show_clickable_nav: true
};

var instructions_test = {
    type: 'instructions',
    pages: ['Instrucciones para test'],
    data: {
        trialid: "Screen_BRET"
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
        trialid: "Screen_BRET"
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
  auto_advance_time: 1
}

var bret_trial_2 = {
  type: 'bret',
  data: {
    trialId: "bret_2"
  },
  reveal_bombs: "at_click",
  allow_clicking: false,
  auto_advance_time: 1,
  on_start: function(trial){
    trial.starting_credit = jsPsych.data.getLastTrialData(1).values()[0].score;
  }
}
/* ********************************* INICIALIZACION DE EXPERIMENTO ********************************* */

bret = [];  //timeline

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
bret.push(bret_trial_2);
