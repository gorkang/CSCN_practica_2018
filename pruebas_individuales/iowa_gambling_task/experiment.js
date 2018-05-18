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
var game_decks = [{
    name: 'deckA',
    clicks: 0,
    win_by_card: 100,
    cards: [0, 0, -150, 0, -300, 0, -200, 0, -250, -350, 0, -350, 0, -250, -200, 0, -300, -150, 0, 0, 0, -300, 0, -350, 0, -200, -250, -150, 0, 0, -350, -200, -250, 0, 0, 0, -150, -300, 0, 0]
  },
  {
    name: 'deckB',
    clicks: 0,
    win_by_card: 100,
    cards: [0, 0, 0, 0, 0, 0, 0, 0, -1250, 0, 0, 0, 0, -1250, 0, 0, 0, 0, 0, 0, -1250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1250, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'deckC',
    clicks: 0,
    win_by_card: 50,
    cards: [0, 0, -50, 0, -50, 0, -50, 0, -50, -50, 0, -25, -75, 0, 0, 0, -25, -75, 0, -50, 0, 0, 0, -50, -25, -50, 0, 0, -75, -50, 0, 0, 0, -25, -25, 0, -75, 0, -50, -75]
  },
  {
    name: 'deckD',
    clicks: 0,
    win_by_card: 50,
    cards: [0, 0, 0, 0, 0, 0, 0, 0, 0, -250, 0, 0, 0, 0, 0, 0, 0, 0, 0, -250, 0, 0, 0, 0, 0, 0, 0, 0, -250, 0, 0, 0, 0, 0, -250, 0, 0, 0, 0, 0]
  }
]
var current_cash = 2000;
var won = 0;
var lost = 0;

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
    "<p>Reglas:</p>" +
    "<ol>" +
    "<li>En la pantalla delante de usted, hay 4 mazos de cartas: A, B, C y D.</li>" +
    "<li>Cuando comencemos el juego, quiero que seleccione una carta a la vez haciendo click en una carta de cualquier mazo que elija.</li>" +
    "<li>Cada vez que seleccione una carta, el computador le dirá que ganó algo de dinero. Yo no sé cuánto dinero ganará. Lo descubrirá a medida que avanzamos. Cada vez que gane, la barra se irá haciendo más grande.</li>" +
    "<li>De vez en cuando, al hacer clic en una carta, el computador le dirá que ganó algo de dinero como siempre, pero luego también le dirá que perdió algo de dinero. No sé cuándo ni cuánto perderá. Lo descubrirá a medida que avanzamos. Cada vez que pierda, la barra se hará más pequeña.</li>" +
    "<li>Usted es absolutamente libre de cambiar de un mazo a otro en cualquier momento, y tan a menudo como lo desee.</li>" +
    "<li>El objetivo del juego es ganar la mayor cantidad de dinero posible y evitar perder la mayor cantidad de dinero posible.</li>" +
    "<li>Usted no sabrá cuándo termina el juego. Simplemente siga jugando hasta que la computadora se detenga.</li>" +
    "<li>Voy a darle $ 2000 de crédito para comenzar el juego.</li>" +
    "<li>La única pista que puedo darle, y lo más importante a tener en cuenta es esto: de estos 4 mazos, hay algunos que son peores que otros, y para ganar debe tratar de mantenerse alejado de los mazos malos. No importa cuánto vaya perdiendo, aún puede ganar el juego si evita los peores mazos.</li>" +
    "<li>También tenga en cuenta que la computadora no cambia el orden de las cartas una vez que comienza el juego. No le hace perder al azar, ni le hace perder dinero basado en la última carta que eligió.</li>" +
    "</ol>" +
    "</div>"
  ],
  data: {
    trialid: "instructions_iowa"
  },
  show_clickable_nav: true
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
var clicks = 0;
while (clicks < 100) {
  clicks += 1;
  iowa_experiment.push({
    type: 'iowa-gambling-task',
    decks: game_decks,
    max_clicks: 1,
    starting_cash: 2000,
    data: {
      trialid: "iowa-gambling-task_click_" + clicks
    },
    on_start: function(trial) {
      trial.decks = game_decks;
      trial.starting_cash = current_cash;
      trial.previusly_won = won;
      trial.previusly_lost = lost;
    },
    on_finish: function(data) {
      current_cash = data.final_cash;
      won = data.won;
      lost = data.lost;
    }
  });
}
iowa_experiment.push(goodbye);
