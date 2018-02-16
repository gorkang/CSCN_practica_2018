var ide = 2;
var verdadero = 'q';
var falso = 'p';
var train_random = false; //if the test must be randomized
var test_random = true;
var percentageWrong = 0.5; //percentage of wrong in training to repeat it
var complex = true; //if the feedback must be complex
var seguridad = false; //if you want to ask how sure is the subject of his answer
var tempo = false; //if show timer on  screen

var wrongs = 0;
var training;
var exercises;
var train_timeline = [];
var loopTime = [];
var trainlen;
var showSneed = false;
var image = "";
var entrenamientos = [];
var experimentos = [];
var experimentos_src = [];

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

var loadImage = function(filename, lista) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', filename);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function(e) {
        var tiff = new Tiff({
            buffer: xhr.response
        });
        var canvas = tiff.toCanvas();
        var canvasData = canvas.toDataURL();
        //document.getElementById("fet").innerHTML = '<img src="' + canvasData + '">';
        lista.push('<img src="' + canvasData + '">');
    };
    xhr.send();
};

function doesFileExist(ide, lista, tipo) {

    if (tipo == "train") {
        var urlToFile = "entrenamiento/Example" + ide + ".bmp";
    } else if (tipo == "experiment") {
        var urlToFile = "experimento/experimento_" + ide + ".tif";
    }

    //console.log("la url es: " +  urlToFile);

    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    try {
        xhr.send();
        if (xhr.status == "404") {
            console.log("File doesn't exist");
            return false;
        } else {
            console.log("File exists");
            if (tipo == "experiment") {
                experimentos_src.push(urlToFile);
                loadImage(urlToFile, lista);
            } else {
                lista.push(ide);
            }
            return true;
        }

    } catch (exception) {
        if (exception.name == 'NetworkError') {
            console.log('There was a network error.');

            console.log("File doesn't exist");
            return false;
        }
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



var continuar = true;
var ide = 1;
var urel = "0" + ide;

while (doesFileExist(urel, entrenamientos, "train")) {

    ide += 1;
    urel = ide;
    if (ide < 10) {
        urel = "0" + ide;
    }

}
console.log(entrenamientos);




loopTime.push(try_again);

if (train_random) {
    shuffleArray(entrenamientos);
}

entrenamientos.forEach(function(statement) {

    var categorization_trial = {
        type: 'categorize-html',
        data: {
            trialid: statement,
            tipo: "training"
        },
        stimulus: "<img src='entrenamiento/Example" + statement + ".bmp'></img>",
        key_answer: verdadero.charCodeAt(0) - 32,
        text_answer: verdadero,
        choices: [verdadero, falso],
        correct_text: "<img src='feedback/Explanation_samples_Transitive_Visual_" + statement + ".bmp'></img>",
        incorrect_text: "<img src='feedback/Explanation_samples_Transitive_Visual_" + statement + ".bmp'></img>",
        prompt: "<p>VERDADERO FALSO.</p>",
        force_correct_button_press: !seguridad,
        show_timer: tempo,
        feedback_show: !seguridad,
        trial_duration: 60000, //60 seconds
        on_finish: function(data) {
            if (data.key_press != verdadero.charCodeAt(0) - 32) { // 70 is the numeric code for f
                wrongs += 1;
                showSneed = true;
            }
            console.log(wrongs);
        }
    };

    transitivo_experiment.push(categorization_trial);
    loopTime.push(categorization_trial);

    if (seguridad) {
        transitivo_experiment.push(survey_trial);
        loopTime.push(survey_trial);

        var trialCorrect = {
            type: 'instructions',
            key_forward: 32,
            pages: ["<img src='feedback/Explanation_samples_Transitive_Visual_" + statement + ".bmp'></img>"],
            show_clickable_nav: false
        }

        var trialWrong = {
            type: 'instructions',
            key_forward: 32,
            pages: ["<img src='feedback/Explanation_samples_Transitive_Visual_" + statement + ".bmp'></img>"],
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

        transitivo_experiment.push(if_correct);
        loopTime.push(if_correct);

        transitivo_experiment.push(if_wrong);
        loopTime.push(if_wrong);
    }

})

/*
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

        transitivo_experiment.push(if_node);
*/
transitivo_experiment.push(explanation3);



var continuar = true;
var ide = 1;
var urel = "0" + ide;
var test_timeline = [];

while (doesFileExist(urel, experimentos, "experiment")) {

    ide += 1;
    urel = ide;
    if (ide < 10) {
        urel = "0" + ide;
    }

}
console.log(experimentos);

if (test_random) {
    shuffleArray(experimentos);
}

var i = 0;
experimentos.forEach(function(statement) {

    var categorization_trial = {
        type: 'categorize-html',
        data: {
            trialid: i,
            stimulus: experimentos_src[i],
            tipo: "experiment"
        },
        stimulus: statement,
        key_answer: verdadero.charCodeAt(0) - 32,
        text_answer: verdadero,
        choices: [verdadero, falso],
        prompt: "<p>VERDADERO FALSO.</p>",
        //force_correct_button_press: !seguridad,
        trial_duration: 60000, //60 seconds
        show_timer: tempo,
        feedback_duration: 0 //no feedback
    };

    transitivo_experiment.push(categorization_trial);
    if (seguridad) {
        transitivo_experiment.push(survey_trial);
    }
    i += 1;

})
