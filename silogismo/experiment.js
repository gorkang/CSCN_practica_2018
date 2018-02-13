/*
d3.csv("silogismos/items/materials_training.csv", function(error, data) {
    console.log(data);
});

d3.csv("silogismos/items/materials_experiment.csv", function(error, data) {
    console.log(data);
});
*/

var ide = 2;
var verdadero = 80;
var falso = 81;
var training;
var exercises;

if (ide%2 == 0){
    var temp = verdadero;
    verdadero = falso;
    falso = temp;
}
console.log("el codigo de verdadero es: "+ verdadero +" y el de falso es: "+ falso);

var mainexplanation = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p class = center-block-text>" +
        '<p><left><b><big>Silogismo</big></b><br />' +
        "Esta prueba NO es una prueba de inteligencia. Se trata solamente de razonar y llegar a conclusiones a partir de frases " +
        "Es importante que le prestes atencion y que intetes hacerlo lo mejor posible." +
        "</p></div>"
    ],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data: {
        trialid: "Welcome_Screen"
    },
    on_start: function(trial) {
        jsPsych.pauseExperiment();
        d3.csv("silogismos/items/materials_training.csv", function(error, data) {
            training = data;

            var categorization_trial = {
                type: 'categorize-html',
                stimulus: '<p>B</p>',
                key_answer: verdadero,
                text_answer: 'letter',
                choices: [verdadero, falso],
                correct_text: "<p class='prompt'>Correct, this is a %ANS%.</p>",
                incorrect_text: "<p class='prompt'>Incorrect, this is a %ANS%.</p>",
                prompt: "<p>Press P for letter. Press Q for number.</p>"
            };

            var new_timeline = {
              timeline: [categorization_trial]
            }
            jsPsych.addNodeToEndOfTimeline(new_timeline, jsPsych.resumeExperiment);

        });


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
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data: {
        trialid: "Welcome_Screen"
    },
    on_start: function(trial) {
        d3.csv("silogismos/items/materials_experiment.csv", function(error, data) {

            for (var i=0 ; i< data.length ; i++){
                if (data[i].ID == ide){
                    exercises = data[i];
                    //break;
                }
            }
        });
    }
};


var silogismo_experiment = []; //definitive timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
    silogismo_experiment.push({
        type: 'fullscreen',
        message: '<p>El experimento entrara en modo pantalla completa</p>',
        button_label: "Pantalla Completa",
        delay_after: 0,
        fullscreen_mode: true
    });
}

//add the trials to the timeline
silogismo_experiment.push(mainexplanation);
silogismo_experiment.push(explanation2);
