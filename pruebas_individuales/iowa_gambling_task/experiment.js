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
  data: {
    trialid: "welcome_iowa"
  },
  show_clickable_nav: true
}

var instructions = {
  type: 'instructions',
  pages: ["<div>" +
    "<p>Rules:</p>" +
    "<ol>" +
    "<li>In front of you on the screen, there are 4 decks of cards: A, B, C, and D.</li>" +
    "<li>When we begin the game, I want you to select one card at a time by clicking on a card from any deck you choose.</li>" +
    "<li>Each time you select a card, the computer will tell you that you won some money. I don't know how much money you will win. You will find out as we go along. Every time you win, the bar gets bigger.</li>" +
    "<li>Every so often, when you click on a card, the computer will tell you that you won some money as usual, but then it will say that you lost some money as well. I don't know when you will lose or how much. You will find out as we go along. Every time you lose, the bar gets smaller.</li>" +
    "<li>You are absolutely free to switch from one deck to the other at any time, and as often as you wish.</li>" +
    "<li>The goal of the game is to win as much money as possible and avoid losing as much money as possible.</li>" +
    "<li>You won't know when the game will end. Simply keep on playing until the computer stops.</li>" +
    "<li>I am going to give you $2000 of credit to start the game. </li>" +
    "<li>The only hint I can give you, and the most important thing to note is this: Out of these four decks of cards, there are some that are worse than others, and to win you should try to stay away from bad decks. No matter how much you find yourself losing, you can still win the game if you avoid the worst decks.</li>" +
    "<li>Also note that the computer does not change the order of the cards once the game begins. It does not make you lose at random, or make you lose money based on the last card you picked.</li>" +
    "</ol>" +
    "</div>"
  ],
  data: {
    trialid: "instructions_iowa"
  },
  show_clickable_nav: true
}

var iowa_trial = {
  type: 'iowa-gambling-task',
  data: {
    trialid: "iowa-gambling-task"
  }
}

var goodbye = {
  type: 'instructions',
  pages: ['Fin prueba Iowa Gambling task'],
  data: {
    trialid: "goodbye_iowa"
  },
  show_clickable_nav: true
}

var iowa_experiment = [];

iowa_experiment.push(welcome);
iowa_experiment.push(instructions);
iowa_experiment.push(iowa_trial)
iowa_experiment.push(goodbye);
