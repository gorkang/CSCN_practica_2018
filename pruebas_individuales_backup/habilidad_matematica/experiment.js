/**
 * The experiment graph literacy
 *@name graphLiteracy
 @file
 * CSCN lab
 *
 */



//time to answer of each block
var time_left = {'suma': 60000,'resta': 60000,'multiplicacion': 60000,'division': 60000,'mixta': 60000};

//flag indicating if the block has reach the timeout
var ha_timeout_status = {'suma': 0,'resta': 0,'multiplicacion': 0,'division': 0,'mixta': 0};

/**
Blocks any key that isn't a number
@name block_fkeys
@function
@param {event}  event

*/
function block_fkeys(event) {
    var x = event.which || event.keyCode;
    if (x == 112 || x == 113 || x == 114 || x == 115 || x == 116 || x == 117 || x == 118 || x == 119 || x == 120 || x == 121 || x == 122 || x == 123) {
        event.preventDefault();
        return false;
    } else {
        return;
    }
}

//----------- Create each block---------------//

timelines = {};
for (var key in operations){
    if (typeof operations[key] !== 'function') {
        index = 1;
        timelines[key] = []
        operations[key].forEach(function(operacion) {

            var temporal_dict = {"question": operacion};
            var timeline_dict = {};
            var survey_dict = 
            {
                type: "survey-text-number",
                questions: [{
                    prompt: '<p>' + operacion + ' =</p>'
                }],
                data:{
                  trialid: key + "_" + index,
                  conditions: JSON.stringify(temporal_dict)
                }
            };

            if (key != 'prueba') {
                survey_dict['trial_duration'] = function() {
                    return time_left[key];
                };
                survey_dict['on_finish'] = function(data) {
                    time_left[key] -= data.rt;
                    if (time_left[key] <= 0) {
                        ha_timeout_status[key] = 1;
                    }
                }
                timeline_dict['conditional_function'] = function() {
                    if (ha_timeout_status[key] == 1) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }

            timeline_dict["timeline"] = [survey_dict];
            timelines[key].push(timeline_dict);
        });   
    }
};

// Inicio prueba

var ha_explanation01 = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p class = center-block-text>" +
        "A continuaci&oacute;n tendr&aacute;s que responder la mayor cantidad de operaciones matem&aacute;ticas (sumas, restas,<br />" +
        "multiplicaciones, y divisiones) en un minuto. La prueba consta de cinco tandas.<br /><br />" +
        "Para responder deber&aacute;s usar el teclado num&eacute;rico. Para avanzar al siguiente ejercicio deber&aacute;s<br />" +
        "usar la tecla enter.<br /><br />" +
        "Intenta resolver los siguientes ejercicios de prueba.<br />" +
        "Haz click en el siguiente bot&oacute;n para avanzar a los ejercicios de prueba.<br />" +
        "</p></div>"
    ],
    allow_keys: false,
    show_clickable_nav: true,
    data: {
        trialid: "Instructions_ha01"
    }
};

var screen_habilidad_matematica_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Habilidad matematica</big></b><br />'+
    "Lee atentamente las siguientes instrucciones"+
    '</p>'],
    data: {
        trialid: "Screen_WM"
    },
    show_clickable_nav: true,
    on_trial_start: function() {
        bloquear_enter = 0;
    }
};


var ha_explanation02 = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p class = center-block-text>" +
        "A continuaci&oacute;n comenzara la prueba, recuerda que debes responder todos los items que puedas<br />" +
        "en un minuto. Una vez que comience la prueba el tiempo comenzar&aacute; a correr autom&aacute;ticamente.<br />" +
        "Si el tiempo se acaba pasar&aacute;s autom&aacute;tica a la siguiente tanda.<br /><br />" +
        "Haz click en el siguiente bot&oacute;n para comenzar.<br />" +
        "</p></div>"
    ],
    allow_keys: false,
    show_clickable_nav: true,
    data: {
        trialid: "Instructions_ha02"
    }
};
var ha_intercolumna1 = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p class = center-block-text>" +
        "Haz click en el siguiente bot&oacute;n para comenzar con la siguiente tanda.<br />" +
        "</p></div>"
    ],
    allow_keys: false,
    show_clickable_nav: true,
    data: {
        trialid: "Instructions_intercolumna"
    },
    on_start: function() {
        time_left['suma'] = 0;
    }
};

var ha_intercolumna2 = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p class = center-block-text>" +
        "Haz click en el siguiente bot&oacute;n para comenzar con la siguiente tanda.<br />" +
        "</p></div>"
    ],
    allow_keys: false,
    show_clickable_nav: true,
    data: {
        trialid: "Instructions_intercolumna"
    },
    on_start: function() {
        time_left['resta'] = 0;
    }
};

var ha_intercolumna3 = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p class = center-block-text>" +
        "Haz click en el siguiente bot&oacute;n para comenzar con la siguiente tanda.<br />" +
        "</p></div>"
    ],
    allow_keys: false,
    show_clickable_nav: true,
    data: {
        trialid: "Instructions_intercolumna"
    },
    on_start: function() {
        time_left['multiplicacion'] = 0;
    }
};

var ha_intercolumna4 = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p class = center-block-text>" +
        "Haz click en el siguiente bot&oacute;n para comenzar con la siguiente tanda.<br />" +
        "</p></div>"
    ],
    allow_keys: false,
    show_clickable_nav: true,
    data: {
        trialid: "Instructions_intercolumna"
    },
    on_start: function() {
        time_left['division'] = 0;
    }
};

/**
Advances each trial
@name advance
@function
@param {event}  event

*/

function advance(event) {
    document.getElementsByName("#jspsych-survey-text-number-response-0")[0].onkeypress = function(event) {
        if (event.keyCode == 13) { //if the key pressed is enter, advance
            var btn = document.getElementById("jspsych-survey-text-number-next");
            btn.click();
        } else if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {//accept only numbers
            event.preventDefault();
        }
    };
}

// Creacion de timeline e inclusion de trials


habilidad_matematica_experiment = []; //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
    habilidad_matematica_experiment.push({
        type: 'fullscreen',
        message: '<p>El experimento entrara en modo pantalla completa</p>',
        button_label: "Pantalla Completa",
        delay_after: 0,
        fullscreen_mode: true
    });
}

// Trial de Prueba */
habilidad_matematica_experiment.push(screen_habilidad_matematica_experiment);
habilidad_matematica_experiment.push(ha_explanation01);
habilidad_matematica_experiment.push({
    timeline: timelines["prueba"]
});
//* Columna 1 */
habilidad_matematica_experiment.push(ha_explanation02);
habilidad_matematica_experiment.push({
    timeline: timelines["suma"]
});
// Columna 2 */
habilidad_matematica_experiment.push(ha_intercolumna1);
habilidad_matematica_experiment.push({
    timeline: timelines["resta"]
});
// Columna 3 */
habilidad_matematica_experiment.push(ha_intercolumna2);
habilidad_matematica_experiment.push({
    timeline: timelines["multiplicacion"]
});
// Columna 4 */
habilidad_matematica_experiment.push(ha_intercolumna3);
habilidad_matematica_experiment.push({
    timeline: timelines["division"]
});
// Columna 5 */
habilidad_matematica_experiment.push(ha_intercolumna4);
habilidad_matematica_experiment.push({
    timeline: timelines["mixta"]
});
