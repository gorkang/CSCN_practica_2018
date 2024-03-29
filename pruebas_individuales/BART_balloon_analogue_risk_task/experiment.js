/**
@file
@name
 * The experiment 279271
 *
 * CSCN lab
 *
 */

/**
Blocks f1 and f5
@name block_fkeys
@function
@param {event}  event

*/

var pruebas = 10;//total of tests in random
var colores = ["green", "red", "blue"];//possible colors in random
var prizes = [.25, .05, .01];//possible prizes in random
var probabilidades = [8, 32, 128];//possible probabilities in random
var with_probabilities = true;//random: true  manual:false
var list_manual= [//list of probabilites in manual
    [0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1]
];
var colors_manual= [//list of colors in manual
    "green",
    "red"
];
var prize_manual= [//list of prizes in manual
    1,
    2
];

var prueba_i = 1;
var acumulado = 0;
var random_index = Math.floor(Math.random() * prizes.length);

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

var screen_BART_balloon_analogue_risk_task_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>BART</big></b><br />' +
        "Infle los siguientes globos la cantidad que estime conveniente. Estos pueden explotar despues de una cantidad aleatoria de aire. Entre mas consiga inflar los globos, mas ganancias tendra al final" +
        '</p>'
    ],
    show_clickable_nav: true,
    on_trial_start: function() {
        bloquear_enter = 0;
    }
};

var survey03 = {
    type: "plugin-bart",
    colors: colores[Math.floor(Math.random() * colores.length)],
    eachEarns: prizes[random_index],
    probabilities: probabilidades[random_index],
    amount: 1,
    total: pruebas,
    idOfBallon: prueba_i,
    initialEarn: acumulado,
    on_finish: function(data) {
        if (prueba_i < pruebas) {


            prueba_i += 1;
            console.log(data);
            acumulado += data.cashEarned;
            console.log("el acumulado es " + acumulado);
            jsPsych.pauseExperiment();

            random_index = Math.floor(Math.random() * prizes.length);

            survey03.initialEarn = acumulado;
            survey03.idOfBallon = prueba_i;
            survey03.colors = colores[Math.floor(Math.random() * colores.length)];
            survey03.eachEarns = prizes[random_index];
            survey03.probabilities= probabilidades[random_index];

            var new_timeline = {
                timeline: [survey03]
            }
            jsPsych.addNodeToEndOfTimeline(new_timeline, jsPsych.resumeExperiment);



        }
    }

};

var survey04 = {
    type: "plugin-bart",
    colors: colors_manual[prueba_i-1],
    eachEarns: prize_manual[prueba_i-1],
    probabilities: 8,
    amount: 1,
    manual: list_manual[prueba_i-1],
    total: list_manual.length,
    idOfBallon: prueba_i,
    initialEarn: acumulado,
    on_finish: function(data) {
        if (prueba_i < list_manual.length) {
            prueba_i += 1;
            console.log(data);
            acumulado += data.cashEarned;
            console.log("el acumulado es " + acumulado);
            jsPsych.pauseExperiment();

            survey04.initialEarn = acumulado;
            survey04.idOfBallon = prueba_i;
            survey04.manual= list_manual[prueba_i-1];
            survey04.colors= colors_manual[prueba_i-1];
            survey04.eachEarns= prize_manual[prueba_i-1];

            var new_timeline = {
                timeline: [survey04]
            }
            jsPsych.addNodeToEndOfTimeline(new_timeline, jsPsych.resumeExperiment);



        }
    }

};





// Creacion de timeline e inclusion de trials
BART_balloon_analogue_risk_task_experiment = []; //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
    BART_balloon_analogue_risk_task_experiment.push({
        type: 'fullscreen',
        message: '<p>El experimento entrara en modo pantalla completa</p>',
        button_label: "Pantalla Completa",
        delay_after: 0,
        fullscreen_mode: true
    });
}

//add the trials to the timeline
BART_balloon_analogue_risk_task_experiment.push(screen_BART_balloon_analogue_risk_task_experiment);
if (with_probabilities) {
    BART_balloon_analogue_risk_task_experiment.push(survey03);
} else {
    BART_balloon_analogue_risk_task_experiment.push(survey04);
}



//BART_balloon_analogue_risk_task_experiment.push(surveyexplanation);
