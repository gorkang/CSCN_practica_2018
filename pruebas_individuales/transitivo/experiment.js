var ide = 2;
var verdadero = 'q';
var falso = 'p';
var train_random = false; //if the test must be randomized
var test_random = true;
var percentageWrong = 0.5; //percentage of wrong in training to repeat it
var complex = true; //if the feedback must be complex
var seguridad = true; //if you want to ask how sure is the subject of his answer
var tempo = false; //if show timer on  screen

var wrongs = 0;
var training;
var exercises;
var train_timeline = [];
var loopTime = [];
var trainlen;
var showSneed = false;
var image = "";

if (ide % 2 == 0) {
    var temp = verdadero;
    verdadero = falso;
    falso = temp;
}
console.log("el codigo de verdadero es: " + verdadero + " y el de falso es: " + falso);

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


function advance(event) {
    document.getElementsByName("#jspsych-survey-text-response-0")[0].onkeypress = function(event) {
        console.log("el keycode del input es " + event.keyCode);
        if (event.keyCode == 32 || event.which == 32) { //if the key pressed is enter, advance
            event.preventDefault();
            var btn = document.getElementById("jspsych-survey-text-next");
            btn.click();
        } else if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) { //accept only numbers
            event.preventDefault();
        }
    };
}

var loadImage = function (filename) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', filename);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function(e) {
        var tiff = new Tiff({
            buffer: xhr.response
        });
        var canvas = tiff.toCanvas();
        var canvasData = canvas.toDataURL();
        document.getElementById("fet").innerHTML ='<img src="' + canvasData + '">';
    };
    xhr.send();
  };

var try_again = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p class = center-block-text>" +
        "Vamos a revisar de nuevo los items de práctica para que quede claro." +
        "</p></div>"
    ],
    allow_keys: true,
    key_forward: 32,
    //show_clickable_nav: true,
    timing_post_trial: 50,
    data: {
        trialid: "Welcome_Screen"
    },
    on_start: function(trial) {
        wrongs = 0;
    }
};

var survey_trial = {
    type: 'survey-text',
    questions: [{
        prompt: "¿Que tan seguro te sientes con tu respuesta (en porcentaje)?"
    }],
};


var mainexplanation = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p class = center-block-text>" +
        '<p><left><b><big>transitivo</big></b><br />' +
        //"<img src='experimento/73.tif'></img>" +
        '<p id="fet" ></p> ' +
        "Esta prueba NO es una prueba de inteligencia. Se trata solamente de razonar y llegar a conclusiones a partir de frases " +
        "Es importante que le prestes atencion y que intetes hacerlo lo mejor posible." +
        "</p></div>"
    ],
    allow_keys: true,
    key_forward: 32,
    //show_clickable_nav: true,
    timing_post_trial: 50,
    data: {
        trialid: "Welcome_Screen"
    },
    on_start: function(trial) {

        $('document').ready(function() {
            loadImage("experimento/73.tif");

        });

    }

};

var explanation3 = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p class = center-block-text>" +
        "Ahora empezara la verdadera prueba" +
        "</p></div>"
    ],
    allow_keys: true,
    key_forward: 32,
    //show_clickable_nav: true,
    timing_post_trial: 50,
    data: {
        trialid: "Welcome_Screen"
    }
};



var explanation2 = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p class = center-block-text>" +
        "Vas a leer grupos de tres frases. Las dos primeras te dicen algo que es cierto (imagina que se trata de un mundo de fantasia). " +
        "Tienes que leerlas con mucha atencion. " +
        "Tu tarea es decir si la tercera frase es siempre verdadera o siempre false a partir de lo que dicen las 2 primeras frases " +
        "Tienes que marcar la opcion VERDADERA si la conclusion es SIEMPRE CIERTA a partir de lo que dicen " +
        "las dos primeras frases, y FALSA si la conclusion es SIEMPRE FALSA a partir de lo que dicen las 2 primeras frases." +
        "</p></div>"
    ],
    allow_keys: true,
    key_forward: 32,
    //show_clickable_nav: true,
    timing_post_trial: 50,
    data: {
        trialid: "Welcome_Screen"
    },
    on_start: function(trial) {

    }
};


var transitivo_experiment = []; //definitive timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
    transitivo_experiment.push({
        type: 'fullscreen',
        message: '<p>El experimento entrara en modo pantalla completa</p>',
        button_label: "Pantalla Completa",
        delay_after: 0,
        fullscreen_mode: true
    });
}

//add the trials to the timeline
transitivo_experiment.push(mainexplanation);
transitivo_experiment.push(explanation2);
