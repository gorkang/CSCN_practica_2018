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

var welcome = {
  type: 'instructions',
  pages: ['Inicio prueba Iowa Gambling task'],
  data: {trialid: "welcome_iowa"},
  show_clickable_nav: true
}

var instructions = {
  type: 'instructions',
  pages: [],
  data: {trialid: "instructions_iowa"},
  show_clickable_nav: true
}

var iowa_trial = {
  type: 'iowa-gambling-task',
  data: {trialid: "iowa-gambling-task"}
}

var goodbye = {
  type: 'instructions',
  pages: ['Fin prueba Iowa Gambling task'],
  data: {trialid: "goodbye_iowa"},
  show_clickable_nav: true
}

var iowa_experiment = [];

iowa_experiment.push(welcome);
iowa_experiment.push(instructions);
iowa_experiment.push(iowa_trial)
iowa_experiment.push(goodbye);
