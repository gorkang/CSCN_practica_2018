/**
@file
@name
 * The experiment ansiedad matematica
 *
 * CSCN lab
 *
 */

/**
Advances to the next trial
@name advance
@function
@param {event}  event

*/
function advance(event) {
    document.querySelectorAll("input").forEach(function(input) {
        if (input.type == "number") {//if the type of answer is a number
            input.onkeydown = function(event) {
                if (event.keyCode == 13) {//if the key pressed is enter, advance
                    var btn = document.getElementById("jspsych-survey-text-next");
                    btn.click();
                } else if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {
                    //if the answer isn't a number, do not pass
                    event.preventDefault();
                }
            }
        };
    });
}

/**
Blocks f1 and f5
@name block_fkeys
@function
@param {event}  event

*/
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

/**
Blocks enter
@name block_enter
@function
@param {event}  event

*/
function block_enter(event) {
    var x = event.which || event.keyCode;
    if (x == 13) {
        console.log("Blocked enter key");
        event.preventDefault();
        return false;
    } else {
        return;
    }
}

var screen_LIPKUS_numeracy_experiment = {
    type: "instructions",
    pages: ['<p><left><b><big>LIPKUS Numeracy</big></b><br />'+
    "A continuaci&oacute;n debe responder 11 preguntas que servir&aacute;n para evaluar sus habilidades de c&aacute;lculo.<br /><br />" +
    "Debe leer atentamente cada pregunta y responder la informaci&oacute;n que se solicita.<br /><br />" +
    '</p>'],
    cont_key: [13],
    show_clickable_nav: true,
    data: {
        trialid: "Screen_matrices_experiment"
    },
    on_trial_start: function() {
        bloquear_enter = 0;
    }
};


var LIPKUS_numeracy1 = {
    type: "survey-text",
    timeline: [{
            questions: [{
                prompt: "<p class='limitnumeracy'>1. Imagina que tiramos un dado no cargado (de seis caras) 1000 veces.<br /> De esas 1000 veces, &iquest;cu&aacute;ntas veces crees que saldr&aacute; un numero par <br />(un 2, un 4 o un 6)?</p>",
                type: 'range',
                range: [0,1000],
                endword: ' veces'
            }],
            data: {
                trialid: "LIP_01"
            }
        },
        {
            questions: [{
                prompt: "<p class='limitnumeracy'>2. Las probabilidades de ganar un premio de 10 d&oacute;lares en la loter&iacute;a de JUEGA-GANA es del 1%. &iquest;Cu&aacute;nta gente crees que ganar&iacute;a el premio de 10 d&oacute;lares si 1000 personas compran un boleto de la loter&iacute;a JUEGA-GANA?</p>",
                type: 'range',
                range: [0,1000],
                endword: ' personas'
            }],
            data: {
                trialid: "LIP_02"
            }
        }
    ]
};

// Porcentual
var LIPKUS_numeracy1_a = {
    type: "survey-text",
    questions: [{
        prompt: "<p class='limitnumeracy'>3. La probabilidad de ganar un auto en el RIVERA EDICIONES es de 1 de cada 1000.<br /> &iquest;Que porcentaje de boletos de RIVERA EDICIONES ganan un auto?</p>",
        type: 'range',
        range: [0,100],
        endword: '%'
    }],
    data: {
        trialid: "LIP_03"
    }
};

var LIPKUS_numeracy2 = {
    type: "survey-multi-choice-vertical",
    timeline: [{
            questions: [{
                prompt: "4. &iquest;Cu&aacute;l de los siguientes numeros representa el mayor riesgo de padecer una enfermedad?",
                options: ["a) 1 de cada 100", "b) 1 de cada 1000", "c) 1 de cada 10"],
                required: true
            }],
            data: {
                trialid: "LIP_04"
            }
        },
        {
            questions: [{
                prompt: "5. &iquest;Cu&aacute;l de los siguientes representa el mayor riesgo de padecer una enfermedad?",
                options: ["a) 1%", "b) 10%", "c) 5%"],
                required: true
            }],
            data: {
                trialid: "LIP_05"
            }
        }
    ]
};

// Porcentual
var LIPKUS_numeracy3 = {
    type: "survey-text",
    questions: [{
        prompt: "<p class='limitnumeracy'>6. Si el riesgo de padecer una enfermedad en los proximos 10 a&ntilde;os para una<br /> persona (A) es de 1% y el riesgo para otra persona (B) es el doble, &iquest;cu&aacute;l es<br /> el riesgo para la persona B?</p>",
        type: 'range',
        range: [0,100],
        endword: '%'
    }],
    data: {
        trialid: "LIP_06"
    }
};

var LIPKUS_numeracy3_a = {
    type: "survey-text",
    timeline: [
        {
            questions: [{
                prompt: "<p class='limitnumeracy'>7. Si el riesgo de padecer una enfermedad en los proximos 10 a&ntilde;os para una<br /> persona (A) es de 1 de cada 100 y el riesgo para otra persona (B) es el doble,<br /> &iquest;cu&aacute;l es el riesgo para la persona B?</p>",
                type: 'range',
                range: [0,100],
                endword: ' de cada 100'
            }],
            data: {
                trialid: "LIP_07"
            }
        },
        {
            questions: [{
                prompt: "<p class='limitnumeracy'>8. Si el riesgo de padecer una enfermedad es del 10%, de cada 100 personas,<br /> &iquest;cu&aacute;nta gente se puede esperar que enferme?</p>",
                type: 'range',
                range: [0,100],
                endword: ' personas'
            }],
            data: {
                trialid: "LIP_08"
            }
        },
        {
            questions: [{
                prompt: "<p class='limitnumeracy'>9. Si el riesgo de padecer una enfermedad es del 10%, de cada 1000 personas,<br /> &iquest;cu&aacute;nta gente se puede esperar que enferme?</p>",
                type: 'range',
                range: [0,100],
                endword: ' personas'
            }],
            data: {
                trialid: "LIP_09"
            }
        }
    ]
};

var LIPKUS_numeracy4 = {
    type: "survey-text",
    questions: [{
        prompt: "<p class='limitnumeracy'>10. Si el riesgo de padecer una enfermedad es de 20 de cada 100, esto ser&iacute;a lo <br />mismo que tener una probabilidad del</p>",
        type: 'range',
        range: [0,100],
        endword: '%'
    }],
    data: {
        trialid: "LIP_10"
    }
};

var LIPKUS_numeracy5 = {
    type: "survey-text",
    questions: [{
        prompt: "<p class='limitnumeracy'>11. La probabilidad de contagiarse con un virus infeccioso es de 0,0005.<br /> De cada 10000 personas, &iquest;cu&aacute;ntas de ellas crees que se contagiar&aacute;n con <br />este virus?</p>",
        type: 'range',
        range: [0,10000],
        endword: ' personas'
    }],
    data: {
        trialid: "LIP_11"
    }
};

// Creacion de timeline e inclusion de trials
LIPKUS_numeracy_experiment = []; //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
    LIPKUS_numeracy_experiment.push({
        type: 'fullscreen',
        message: '<p>El experimento entrara en modo pantalla completa</p>',
        button_label: "Pantalla Completa",
        delay_after: 0,
        fullscreen_mode: true
    });
}

//add the trials to the timeline
LIPKUS_numeracy_experiment.push(screen_LIPKUS_numeracy_experiment);

LIPKUS_numeracy_experiment.push(LIPKUS_numeracy1);
LIPKUS_numeracy_experiment.push(LIPKUS_numeracy1_a);
LIPKUS_numeracy_experiment.push(LIPKUS_numeracy2);
LIPKUS_numeracy_experiment.push(LIPKUS_numeracy3);
LIPKUS_numeracy_experiment.push(LIPKUS_numeracy3_a);
LIPKUS_numeracy_experiment.push(LIPKUS_numeracy4);
LIPKUS_numeracy_experiment.push(LIPKUS_numeracy5);
