var ide = 1;
var verdadero = 'q';
var falso = 'p';
var leftString = "VERDADERO";
var rightString = "FALSO";
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

var parameters = {};
var parameter_name;
var parameter_value;
if (document.URL.includes("\?")) {
    var parameters_string = document.URL.substring(document.URL.search("\\?") + 1);
    while (parameters_string.length > 0) {
        parameter_name = parameters_string.substring(0, parameters_string.search("="));
        if (parameters_string.includes("&")) {
            parameter_value = parameters_string.substring(parameters_string.search("=") + 1, parameters_string.search("&"));
            parameters_string = parameters_string.substring(parameters_string.search("&") + 1);
        } else {
            parameter_value = parameters_string.substring(parameters_string.search("=") + 1);
            parameters_string = "";
        };
        parameters[parameter_name] = parameter_value;
    };
    ide = parameters.user_id;
};

if (ide % 2 == 0) {
    var temp = verdadero;
    verdadero = falso;
    falso = temp;

    temp = rightString;
    rightString = leftString;
    leftString = temp;
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

var try_again = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p class = center-block-text>" +
        "Vamos a revisar de nuevo los items de práctica para que quede claro." +
        "<br> <center>Presione la barra espaciadora para continuar</center>"+
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
  on_finish: function(data){

    data.trialid = jsPsych.data.get().last(2).values()[0].trialid;
    data.tipo = jsPsych.data.get().last(2).values()[0].tipo + "_seguridad";

  }

};


var mainexplanation = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p class = center-block-text>" +
        '<p><left><b><big>Silogismo</big></b><br />' +
        "Esta prueba NO es una prueba de inteligencia. Se trata solamente de razonar y llegar a conclusiones a partir de frases " +
        "Es importante que le prestes atencion y que intetes hacerlo lo mejor posible." +
        "<br> <center>Presione la barra espaciadora para continuar</center>"+
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

            if (train_random) {
                shuffleArray(data);
            }


            data.forEach(function(statement) {


                var respuesta = verdadero;
                if (statement.valido == 'F') {
                    respuesta = falso;
                }

                console.log(respuesta.charCodeAt(0) - 32);

                if (complex) {
                    image = "<img src='silogismos/feedback/" + statement.ID + ".png' style='width: 100%' />";

                }

                var categorization_trial = {
                    type: 'categorize-html',
                    data: {
                        trialid: statement.ID,
                        tipo: "training"
                    },
                    stimulus: statement.premisa1 + "<br>" + statement.premisa2 + "<br>" + "<b>" + statement.conclusion + "</b>",
                    key_answer: respuesta.charCodeAt(0) - 32,
                    text_answer: respuesta,
                    choices: [verdadero, falso],
                    correct_text: "<p class='prompt' style='color:green; font-weight:bold; text-align:center;'>Correcto.</p>"+image+"<br><center> Presione la barra espaciadora para continuar</center>",
                    incorrect_text: "<p class='prompt' style='color:red; font-weight:bold; text-align:center;'>Incorrecto</p>"+ image +" <br><center> Presione la barra espaciadora para continuar</center>" ,
                    prompt: "<div class='left_prompt'>" + leftString + "</div><div class='right_prompt'>" + rightString + "</div>",
                    force_correct_button_press: !seguridad,
                    show_timer: tempo,
                    feedback_show: !seguridad,
                    trial_duration: 60000, //60 seconds
                    on_finish: function(data) {
                        if (data.key_press != respuesta) { // 70 is the numeric code for f
                            wrongs += 1;
                            showSneed = true;
                        }
                        console.log(wrongs);
                    }
                };

                train_timeline.push(categorization_trial);
                loopTime.push(categorization_trial);

                if (seguridad) {
                    train_timeline.push(survey_trial);
                    loopTime.push(survey_trial);

                    var trialCorrect = {
                        type: 'instructions',
                        key_forward: 32,
                        pages: ["<p class='prompt' style='color:green; font-weight:bold; text-align:center'>Correcto.</p>"+image+"<br><center> Presione la barra espaciadora para continuar</center>"],
                        show_clickable_nav: false
                    }

                    var trialWrong = {
                        type: 'instructions',
                        key_forward: 32,
                        pages: ["<p class='prompt' style='color:red; font-weight:bold; text-align:center'>Incorrecto</p>"+ image +" <br><center> Presione la barra espaciadora para continuar</center>"],
                        show_clickable_nav: false
                    }

                    var if_correct = {
                        timeline: [trialCorrect],
                        conditional_function: function() {

                            if (!showSneed) {
                                showSneed = false;
                                return true;
                            } else {
                                return false;
                            }
                        }
                    }

                    var if_wrong = {
                        timeline: [trialWrong],
                        conditional_function: function() {

                            if (showSneed) {
                                showSneed = false;
                                return true;
                            } else {
                                return false;
                            }
                        }
                    }

                    train_timeline.push(if_correct);
                    loopTime.push(if_correct);

                    train_timeline.push(if_wrong);
                    loopTime.push(if_wrong);
                }

            });


            var loop_node = {
                timeline: loopTime,
                loop_function: function(data) {
                    console.log("cantidad de malos" + wrongs);
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
        "<br> <center>Presione la barra espaciadora para continuar</center>"+
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
        "<br> <center>Presione la barra espaciadora para continuar</center>"+
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


            if (test_random) {
                shuffleArray(data);
            }



            data.forEach(function(statement) {



                var respuesta = verdadero;
                if (statement.valido == 'F') {
                    respuesta = falso;
                }

                console.log(respuesta.charCodeAt(0) - 32);

                var categorization_trial = {
                    type: 'categorize-html',
                    data: {
                        trialid: statement.ID,
                        tipo: "experiment"
                    },
                    stimulus: statement.premisa1 + "<br>" + statement.premisa2 + "<br>" + "<b>" + statement.conclusion + "</b>",
                    key_answer: respuesta.charCodeAt(0) - 32,
                    choices: [verdadero, falso],
                    prompt: "<div class='left_prompt'>" + leftString + "</div><div class='right_prompt'>" + rightString + "</div>",
                    //force_correct_button_press:true,
                    trial_duration: 60000, //60 seconds
                    show_timer: tempo,
                    feedback_duration: 0 //no feedback
                };

                test_timeline.push(categorization_trial);
                if (seguridad) {
                    test_timeline.push(survey_trial);

                }


            });

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
