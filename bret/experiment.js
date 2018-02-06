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

var instructions = {
    type: 'instructions',
    pages: ['<p><left>BRET<br /></p>'],
    data: {
        trialid: "Screen_WM"
    },
    show_clickable_nav: true
};

var bret_trial = {
  type: 'bret',
  data: {
    trialId: "bret"
  },
  reveal_bombs: "at_end",
  auto_advance_time: 3
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

bret.push(instructions);
bret.push(bret_trial);
