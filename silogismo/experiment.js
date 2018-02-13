var ide = 2;
var verdadero = 'q';
var falso = 'p';
var train_random = false; //if the test must be randomized
var test_random = true;
var percentageWrong = 0.5;


var wrongs = 0;
var training;
var exercises;
var train_timeline = [];
var loopTime = [];
var trainlen;

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


var mainexplanation = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p class = center-block-text>" +
        '<p><left><b><big>Silogismo</big></b><br />' +
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
        jsPsych.pauseExperiment();
        d3.csv("silogismos/items/materials_training.csv", function(error, data) {

            trainlen = data.length;
            loopTime.push(try_again);

            data.forEach(function(statement) {

                var respuesta = verdadero;
                if (statement.valido == 'F') {
                    respuesta = falso;
                }

                console.log(respuesta.charCodeAt(0) - 32);

                var categorization_trial = {
                    type: 'categorize-html',
                    stimulus: statement.premisa1 + "<br>" + statement.premisa2 + "<br>" + statement.conclusion,
                    key_answer: respuesta.charCodeAt(0) - 32,
                    text_answer: respuesta,
                    choices: [verdadero, falso],
                    correct_text: "<p class='prompt' style='color:green'>Correcto</p>",
                    incorrect_text: "<p class='prompt' style='color:red'>Incorrecto</p>",
                    prompt: "<p>Press " + verdadero + " for verdadero. Press " + falso + " for falso.</p>",
                    //force_correct_button_press:true,
                    trial_duration: 60000, //60 seconds
                    on_finish: function(data) {
                        if (data.key_press != respuesta.charCodeAt(0) - 32) { // 70 is the numeric code for f
                            wrongs += 1;
                        }
                        console.log(wrongs);
                    }
                };

                train_timeline.push(categorization_trial);
                loopTime.push(categorization_trial);
            });

            if (train_random) {
                shuffleArray(train_timeline);
                shuffleArray(loopTime);
            }

            var loop_node = {
                timeline: loopTime,
                loop_function: function(data) {
                    console.log("cantidad de malos"+wrongs);
                    if (wrongs >= Math.floor(percentageWrong * trainlen)) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
            var if_node = {
                timeline: [loop_node],
                conditional_function: function() {

                    if (wrongs < Math.floor(percentageWrong * trainlen)) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }

            train_timeline.push(if_node);
            train_timeline.push(explanation3);

            var new_timeline = {
                timeline: train_timeline
            }
            jsPsych.addNodeToEndOfTimeline(new_timeline, jsPsych.resumeExperiment);

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
        jsPsych.pauseExperiment();
        d3.csv("silogismos/items/materials_experiment.csv", function(error, data) {

            var test_timeline = [];


            data.forEach(function(statement) {

                if (statement.ID == ide) {

                    var respuesta = verdadero;
                    if (statement.valido == 'F') {
                        respuesta = falso;
                    }

                    console.log(respuesta.charCodeAt(0) - 32);

                    var categorization_trial = {
                        type: 'categorize-html',
                        stimulus: statement.premisa1 + "<br>" + statement.premisa2 + "<br>" + statement.conclusion,
                        key_answer: respuesta.charCodeAt(0) - 32,
                        choices: [verdadero, falso],
                        prompt: "<p>Press " + verdadero + " for verdadero. Press " + falso + " for falso.</p>",
                        //force_correct_button_press:true,
                        trial_duration: 60000, //60 seconds
                        feedback_duration: 0 //no feedback
                    };

                    test_timeline.push(categorization_trial);
                }
            });

            if (test_random) {
                shuffleArray(test_timeline);
            }

            var new_timeline = {
                timeline: test_timeline
            }
            jsPsych.addNodeToEndOfTimeline(new_timeline, jsPsych.resumeExperiment);


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
