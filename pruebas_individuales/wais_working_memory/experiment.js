
/*indicates if the examples were aswered correctly*/
var wmi_correcto = false;
var wmi_correcto2 = false;

var wms_correcto = false;
var wms_correcto2 = false;

wmindex = 0; //indicates the current audio

// indicate the extension of all audio archives
extension = "wav"

/*
if the first warning is 1 and the second warning is 1, update the status so
to skip the entire block*/

//first block warnings
wm_firstwarning = 0;
wm_secondwarning = 0;
//second block warnings
wmi_firstwarning = 0;
wmi_secondwarning = 0;
//third block warnings
wms_firstwarning = 0;
wms_secondwarning = 0;

//if 0, the block must continue. if 1, the block must be skipped
wmd_status = 0;
wmi_status = 0;
wms_status = 0;

var bloquear_enter = 0; // 0 = permitir, 1 = bloquear

// Bloqueo de teclas
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

// Bloqueo de Enter
/**
Blocks Enter
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

/**
advances to the next trial
@name advance
@function
@param {event}  event

*/
function advance(event) {
    document.getElementsByName("#jspsych-survey-numbers-response-0")[0].onkeypress = function(event) {
        if (event.keyCode == 13) {
            console.log("User pressed enter. Clicking continue button");
            var btn = document.getElementById("jspsych-survey-numbers-next");
            btn.click();
            //event.preventDefault();
        }
    };
}

/* ********************************* PANTALLAS DE INICIO Y DESPEDIDA ********************************* */

var screen_wais_working_memory_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Retencion de digitos</big></b><br />Lee atentamente las siguientes instrucciones</p>'],
    data: {
        trialid: "Screen_WM"
    },
    show_clickable_nav: true,
    on_trial_start: function() {
        bloquear_enter = 0;
    }
};

var screen_goodbye = {
    type: 'instructions',
    pages: ['<p><center>Hemos terminado, excelente trabajo.<br /><br />Muchas gracias por su colaboraci&oacute;n.<br /><br />Por favor, llame al examinador.'],
    data: {
        trialid: "Screen_goodbye"
    },
    on_trial_start: function() {
        bloquear_enter = 0;
    }
}

/* ********************************* INICIO PRUEBAS ********************************* */

var wmexplanation1 = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p class = center-block-text>" +
        "Ahora escuchar&aacute;s algunos n&uacute;meros. Escucha atentamente ya que no ser&aacute;n repetidos.<br />" +
        "Despu&eacute;s de escucharlos tendr&aacute;s que repetir los n&uacute;meros en el mismo orden que fueron presentados.<br /><br />" +
        "Haz click en el siguiente bot&oacute;n para comenzar.<br />" +
        "</p></div>"
    ],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data: {
        trialid: "Instructions_wais_working_memory_experiment1"
    },
    on_trial_start: function() {
        bloquear_enter = 1;
    }
};

var wmexplanation2 = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p class = center-block-text>" +
        "Ahora escuchar&aacute;s otros n&uacute;meros, pero esta vez tendr&aacute;s que repetirlos en orden inverso.<br /><br />" +
        "Haz click en el siguiente bot&oacute;n para comenzar.<br />" +
        "</p></div>"
    ],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data: {
        trialid: "Instructions_wais_working_memory_experiment2"
    }
};

var wmexplanation3 = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p class = center-block-text>" +
        "Ahora escuchar&aacute;s otros n&uacute;meros. Despu&eacute;s de escucharlos tendr&aacute;s que repetirlos en orden,<br />" +
        "comenzando por el n&uacute;mero menor.<br /><br />" +
        "Haz click en el siguiente bot&oacute;n para comenzar.<br />" +
        "</p></div>"
    ],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data: {
        trialid: "Instructions_wais_working_memory_experiment3"
    }
};

var answeraudio = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    data: {
        trialid: "WM_" + 0
    }
};

/* ***************************** beggining WM DIRECTO ******************************/
/*
in odd questions, the warnings will end up 00 or 01 if answered correctly
and 10 if answered wrong.
in even questions, the warnings wil end up 01 if answered correctly and 11
if answered wrong
*/



var answeraudio_00 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMD_00"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wm_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"97"}') {//if answer is right
            wm_firstwarning = 0;
            console.log("First flag AFTER", wm_firstwarning);
        } else {//if answer is wrong
            wm_secondwarning = 0;
            if (wm_firstwarning == 0) {//if the previous question was answered right
                wm_firstwarning = 1;
                console.log("First flag AFTER", wm_firstwarning);
            } else if (wm_secondwarning == 1) {//the previous question was answered wrong
                wmd_status = 1;
            }
        };
    }
};

var answeraudio_01 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMD_01"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wm_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"63"}') { //if answered corectly -> warnings: 01
            wm_firstwarning = 0;
            wm_secondwarning = 1;
            console.log("First flag AFTER", wm_firstwarning);
        } else {
            wm_secondwarning = 1;
            if (wm_firstwarning == 0) {
                wm_firstwarning = 1;
                console.log("First flag AFTER", wm_firstwarning);
            } else if (wm_secondwarning == 1) { //if warnings: 11 --> skip block
                wmd_status = 1;
            }
        };
    }
};

var answeraudio_02 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMD_02"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wm_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"582"}') { //if answered corectly -> warnings: 01
            wm_firstwarning = 0;
            console.log("First flag AFTER", wm_firstwarning);
        } else { //if wrong
            wm_secondwarning = 0;
            if (wm_firstwarning == 0) { //warnings -> 10
                wm_firstwarning = 1;
                console.log("First flag AFTER", wm_firstwarning);
            } else if (wm_secondwarning == 1) {
                wmd_status = 1;
            }
        };
    }
};

var answeraudio_03 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMD_03"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wm_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"694"}') {
            wm_firstwarning = 0;
            wm_secondwarning = 1;
            console.log("First flag AFTER", wm_firstwarning);
        } else {
            wm_secondwarning = 1;
            if (wm_firstwarning == 0) {
                wm_firstwarning = 1;
                console.log("First flag AFTER", wm_firstwarning);
            } else if (wm_secondwarning == 1) {
                wmd_status = 1;
            }
        };
    }
};

var answeraudio_04 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMD_04"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wm_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"7286"}') {
            wm_firstwarning = 0;
            console.log("First flag AFTER", wm_firstwarning);
        } else {
            wm_secondwarning = 0;
            if (wm_firstwarning == 0) {
                wm_firstwarning = 1;
                console.log("First flag AFTER", wm_firstwarning);
            } else if (wm_secondwarning == 1) {
                wmd_status = 1;
            }
        };
    }
};

var answeraudio_05 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMD_05"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wm_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"6439"}') {
            wm_firstwarning = 0;
            wm_secondwarning = 1;
            console.log("First flag AFTER", wm_firstwarning);
        } else {
            wm_secondwarning = 1;
            if (wm_firstwarning == 0) {
                wm_firstwarning = 1;
                console.log("First flag AFTER", wm_firstwarning);
            } else if (wm_secondwarning == 1) {
                wmd_status = 1;
            }
        };
    }
};

var answeraudio_06 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMD_06"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wm_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"42731"}') {
            wm_firstwarning = 0;
            console.log("First flag AFTER", wm_firstwarning);
        } else {
            wm_secondwarning = 0;
            if (wm_firstwarning == 0) {
                wm_firstwarning = 1;
                console.log("First flag AFTER", wm_firstwarning);
            } else if (wm_secondwarning == 1) {
                wmd_status = 1;
            }
        };
    }
};

var answeraudio_07 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMD_07"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wm_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"75836"}') {
            wm_firstwarning = 0;
            wm_secondwarning = 1;
            console.log("First flag AFTER", wm_firstwarning);
        } else {
            wm_secondwarning = 1;
            if (wm_firstwarning == 0) {
                wm_firstwarning = 1;
                console.log("First flag AFTER", wm_firstwarning);
            } else if (wm_secondwarning == 1) {
                wmd_status = 1;
            }
        };
    }
};

var answeraudio_08 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMD_08"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wm_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"392487"}') {
            wm_firstwarning = 0;
            console.log("First flag AFTER", wm_firstwarning);
        } else {
            wm_secondwarning = 0;
            if (wm_firstwarning == 0) {
                wm_firstwarning = 1;
                console.log("First flag AFTER", wm_firstwarning);
            } else if (wm_secondwarning == 1) {
                wmd_status = 1;
            }
        };
    }
};

var answeraudio_09 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMD_09"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wm_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"619473"}') {
            wm_firstwarning = 0;
            wm_secondwarning = 1;
            console.log("First flag AFTER", wm_firstwarning);
        } else {
            wm_secondwarning = 1;
            if (wm_firstwarning == 0) {
                wm_firstwarning = 1;
                console.log("First flag AFTER", wm_firstwarning);
            } else if (wm_secondwarning == 1) {
                wmd_status = 1;
            }
        };
    }
};

var answeraudio_10 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMD_10"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wm_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"4179386"}') {
            wm_firstwarning = 0;
            console.log("First flag AFTER", wm_firstwarning);
        } else {
            wm_secondwarning = 0;
            if (wm_firstwarning == 0) {
                wm_firstwarning = 1;
                console.log("First flag AFTER", wm_firstwarning);
            } else if (wm_secondwarning == 1) {
                wmd_status = 1;
            }
        };
    }
};

var answeraudio_11 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMD_11"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wm_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"6917428"}') {
            wm_firstwarning = 0;
            wm_secondwarning = 1;
            console.log("First flag AFTER", wm_firstwarning);
        } else {
            wm_secondwarning = 1;
            if (wm_firstwarning == 0) {
                wm_firstwarning = 1;
                console.log("First flag AFTER", wm_firstwarning);
            } else if (wm_secondwarning == 1) {
                wmd_status = 1;
            }
        };
    }
};

var answeraudio_12 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMD_12"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wm_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"38296174"}') {
            wm_firstwarning = 0;
            console.log("First flag AFTER", wm_firstwarning);
        } else {
            wm_secondwarning = 0;
            if (wm_firstwarning == 0) {
                wm_firstwarning = 1;
                console.log("First flag AFTER", wm_firstwarning);
            } else if (wm_secondwarning == 1) {
                wmd_status = 1;
            }
        };
    }
};

var answeraudio_13 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMD_13"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wm_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"58132647"}') {
            wm_firstwarning = 0;
            wm_secondwarning = 1;
            console.log("First flag AFTER", wm_firstwarning);
        } else {
            wm_secondwarning = 1;
            if (wm_firstwarning == 0) {
                wm_firstwarning = 1;
                console.log("First flag AFTER", wm_firstwarning);
            } else if (wm_secondwarning == 1) {
                wmd_status = 1;
            }
        };
    }
};

var answeraudio_14 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMD_14"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wm_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"275863194"}') {
            wm_firstwarning = 0;
            console.log("First flag AFTER", wm_firstwarning);
        } else {
            wm_secondwarning = 0;
            if (wm_firstwarning == 0) {
                wm_firstwarning = 1;
                console.log("First flag AFTER", wm_firstwarning);
            } else if (wm_secondwarning == 1) {
                wmd_status = 1;
            }
        };
    }
};

var answeraudio_15 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMD_15"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wm_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"713942568"}') {
            wm_firstwarning = 0;
            wm_secondwarning = 1;
            console.log("First flag AFTER", wm_firstwarning);
        } else {
            wm_secondwarning = 1;
            if (wm_firstwarning == 0) {
                wm_firstwarning = 1;
                console.log("First flag AFTER", wm_firstwarning);
            } else if (wm_secondwarning == 1) {
                wmd_status = 1;
            }
        };
    }
};

/* ***************************** end WM DIRECTO ******************************/

/* ***************************** practice blocks WM INVERSO******************************/

var wmipractice_exp = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p class = center-block-text>" +
        "Bloque de Practica.<br /><br />" +
        "Descripcion bloque de practica<br /><br />" +
        "</p></div>"
    ],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data: {
        trialid: "Instructions_wais_working_memory_experiment1"
    }
};

var wm_practice01 = {
    type: 'single-audio',
    stimulus: "sounds/Inverso/hombre_1."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 9-7

var wm_practice02 = {
    type: 'single-audio',
    stimulus: "sounds/Inverso/hombre_2."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 6-3

var wmi_practiceanswer01 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMI_01"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wmi_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"17"}') {
            wmi_correcto = true;
        } else {
            wmi_correcto = false;
        };
    }
};

var wmi_practiceanswer02 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMI_02"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wmi_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"43"}') {
            wmi_correcto2 = true;
        } else {
            wmi_correcto2 = false;
        };
    }
};

var wmi_right01 = {
    type: 'instructions',
    pages: ["<p>Respuesta correcta.<br /><br />Presione la tecla ENTER para continuar.</p>"],
    key_forward: 'enter'
};
var wmi_wrong01 = {
    type: 'instructions',
    pages: ["<p>Eso no es correcto. Los n&uacute;meros eran 71, por lo que en orden inverso la respuesta correcta era 17.<br /><br />Presione la tecla ENTER para continuar.</p>"],
    key_forward: 'enter'
};

var wmi_right02 = {
    type: 'instructions',
    pages: ["<p>Respuesta correcta.<br /><br />Presione la tecla ENTER para continuar.</p>"],
    key_forward: 'enter'
};
var wmi_wrong02 = {
    type: 'instructions',
    pages: ["<p>Eso no es correcto. Los n&uacute;meros eran 34, por lo en orden inverso la respuesta correcta era 43. Hagamos algunos m&aacute;s<br /><br />Presione la tecla ENTER para continuar.</p>"],
    key_forward: 'enter'
};

//checks what screens goes next according to the answer
var wmi_conditional01 = {
    timeline: [wmi_right01],
    conditional_function: function(data) {
        if (wmi_correcto === true) {
            return true;
        } else {
            return false;
        }
    }
};

var wmi_conditional02 = {
    timeline: [wmi_wrong01],
    conditional_function: function(data) {
        if (wmi_correcto === true) {
            return false;
        } else {
            return true;
        }
    }
};

var wmi_conditional11 = {
    timeline: [wmi_right02],
    conditional_function: function(data) {
        if (wmi_correcto2 === true) {
            return true;
        } else {
            return false;
        }
    }
};

var wmi_conditional12 = {
    timeline: [wmi_wrong02],
    conditional_function: function(data) {
        if (wmi_correcto2 === true) {
            return false;
        } else {
            return true;
        }
    }
};

/* ***************************** beginning of WM INVERSO ******************************/

//16 y 17 se reemplazan por ser pruebas
/*
in odd questions, the warnings will end up 00 or 01 if answered correctly
and 10 if answered wrong.
in even questions, the warnings wil end up 01 if answered correctly and 11
if answered wrong
*/


var answeraudio_16 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMI_03"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wmi_firstwarning);
        var wm_response = data.responses;
        console.log("response value", wm_response);
        if (wm_response == '{"Q0":"17"}') {
            wmi_firstwarning = 0;
            console.log("First flag AFTER", wmi_firstwarning);
        } else {
            wmi_secondwarning = 0;
            if (wmi_firstwarning == 0) {
                wmi_firstwarning = 1;
                console.log("First flag AFTER", wmi_firstwarning);
            } else if (wmi_secondwarning == 1) {}
        };
    }
};

var answeraudio_17 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMI_04"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wmi_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"43"}') {
            wmi_firstwarning = 0;
            wmi_secondwarning = 1;
            console.log("First flag AFTER", wmi_firstwarning);
        } else {
            wmi_secondwarning = 1;
            if (wmi_firstwarning == 0) {
                wmi_firstwarning = 1;
                console.log("First flag AFTER", wmi_firstwarning);
            } else if (wmi_secondwarning == 1) {}
        };
    }
};

// Aqui continua la lista desde el 03

var answeraudio_18 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMI_03"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wmi_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"13"}') {
            wmi_firstwarning = 0;
            console.log("First flag AFTER", wmi_firstwarning);
        } else {
            wmi_secondwarning = 0;
            if (wmi_firstwarning == 0) {
                wmi_firstwarning = 1;
                console.log("First flag AFTER", wmi_firstwarning);
            } else if (wmi_secondwarning == 1) {
                wmi_status = 1;
            }
        };
    }
};

var answeraudio_19 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMI_04"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wmi_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"42"}') {
            wmi_firstwarning = 0;
            wmi_secondwarning = 1;
            console.log("First flag AFTER", wmi_firstwarning);
        } else {
            wmi_secondwarning = 1;
            if (wmi_firstwarning == 0) {
                wmi_firstwarning = 1;
                console.log("First flag AFTER", wmi_firstwarning);
            } else if (wmi_secondwarning == 1) {
                wmi_status = 1;
            }
        };
    }
};

var answeraudio_20 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMI_05"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wmi_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"64"}') {
            wmi_firstwarning = 0;
            console.log("First flag AFTER", wmi_firstwarning);
        } else {
            wmi_secondwarning = 0;
            if (wmi_firstwarning == 0) {
                wmi_firstwarning = 1;
                console.log("First flag AFTER", wmi_firstwarning);
            } else if (wmi_secondwarning == 1) {
                wmi_status = 1;
            }
        };
    }
};

var answeraudio_21 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMI_06"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wmi_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"75"}') {
            wmi_firstwarning = 0;
            wmi_secondwarning = 1;
            console.log("First flag AFTER", wmi_firstwarning);
        } else {
            wmi_secondwarning = 1;
            if (wmi_firstwarning == 0) {
                wmi_firstwarning = 1;
                console.log("First flag AFTER", wmi_firstwarning);
            } else if (wmi_secondwarning == 1) {
                wmi_status = 1;
            }
        };
    }
};

var answeraudio_22 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMI_07"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wmi_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"926"}') {
            wmi_firstwarning = 0;
            console.log("First flag AFTER", wmi_firstwarning);
        } else {
            wmi_secondwarning = 0;
            if (wmi_firstwarning == 0) {
                wmi_firstwarning = 1;
                console.log("First flag AFTER", wmi_firstwarning);
            } else if (wmi_secondwarning == 1) {
                wmi_status = 1;
            }
        };
    }
};

var answeraudio_23 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMI_08"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wmi_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"574"}') {
            wmi_firstwarning = 0;
            wmi_secondwarning = 1;
            console.log("First flag AFTER", wmi_firstwarning);
        } else {
            wmi_secondwarning = 1;
            if (wmi_firstwarning == 0) {
                wmi_firstwarning = 1;
                console.log("First flag AFTER", wmi_firstwarning);
            } else if (wmi_secondwarning == 1) {
                wmi_status = 1;
            }
        };
    }
};

var answeraudio_24 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMI_09"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wmi_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"9728"}') {
            wmi_firstwarning = 0;
            console.log("First flag AFTER", wmi_firstwarning);
        } else {
            wmi_secondwarning = 0;
            if (wmi_firstwarning == 0) {
                wmi_firstwarning = 1;
                console.log("First flag AFTER", wmi_firstwarning);
            } else if (wmi_secondwarning == 1) {
                wmi_status = 1;
            }
        };
    }
};

var answeraudio_25 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMI_10"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wmi_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"8694"}') {
            wmi_firstwarning = 0;
            wmi_secondwarning = 1;
            console.log("First flag AFTER", wmi_firstwarning);
        } else {
            wmi_secondwarning = 1;
            if (wmi_firstwarning == 0) {
                wmi_firstwarning = 1;
                console.log("First flag AFTER", wmi_firstwarning);
            } else if (wmi_secondwarning == 1) {
                wmi_status = 1;
            }
        };
    }
};

var answeraudio_26 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMI_11"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wmi_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"34856"}') {
            wmi_firstwarning = 0;
            console.log("First flag AFTER", wmi_firstwarning);
        } else {
            wmi_secondwarning = 0;
            if (wmi_firstwarning == 0) {
                wmi_firstwarning = 1;
                console.log("First flag AFTER", wmi_firstwarning);
            } else if (wmi_secondwarning == 1) {
                wmi_status = 1;
            }
        };
    }
};

var answeraudio_27 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMI_12"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wmi_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"68451"}') {
            wmi_firstwarning = 0;
            wmi_secondwarning = 1;
            console.log("First flag AFTER", wmi_firstwarning);
        } else {
            wmi_secondwarning = 1;
            if (wmi_firstwarning == 0) {
                wmi_firstwarning = 1;
                console.log("First flag AFTER", wmi_firstwarning);
            } else if (wmi_secondwarning == 1) {
                wmi_status = 1;
            }
        };
    }
};

var answeraudio_28 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMI_13"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wmi_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"814735"}') {
            wmi_firstwarning = 0;
            console.log("First flag AFTER", wmi_firstwarning);
        } else {
            wmi_secondwarning = 0;
            if (wmi_firstwarning == 0) {
                wmi_firstwarning = 1;
                console.log("First flag AFTER", wmi_firstwarning);
            } else if (wmi_secondwarning == 1) {
                wmi_status = 1;
            }
        };
    }
};

var answeraudio_29 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMI_14"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wmi_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"658427"}') {
            wmi_firstwarning = 0;
            wmi_secondwarning = 1;
            console.log("First flag AFTER", wmi_firstwarning);
        } else {
            wmi_secondwarning = 1;
            if (wmi_firstwarning == 0) {
                wmi_firstwarning = 1;
                console.log("First flag AFTER", wmi_firstwarning);
            } else if (wmi_secondwarning == 1) {
                wmi_status = 1;
            }
        };
    }
};

var answeraudio_30 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMI_15"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wmi_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"2639418"}') {
            wmi_firstwarning = 0;
            console.log("First flag AFTER", wmi_firstwarning);
        } else {
            wmi_secondwarning = 0;
            if (wmi_firstwarning == 0) {
                wmi_firstwarning = 1;
                console.log("First flag AFTER", wmi_firstwarning);
            } else if (wmi_secondwarning == 1) {
                wmi_status = 1;
            }
        };
    }
};

var answeraudio_31 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMI_16"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wmi_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"8269374"}') {
            wmi_firstwarning = 0;
            wmi_secondwarning = 1;
            console.log("First flag AFTER", wmi_firstwarning);
        } else {
            wmi_secondwarning = 1;
            if (wmi_firstwarning == 0) {
                wmi_firstwarning = 1;
                console.log("First flag AFTER", wmi_firstwarning);
            } else if (wmi_secondwarning == 1) {
                wmi_status = 1;
            }
        };
    }
};

var answeraudio_32 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMI_17"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wmi_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"81267349"}') {
            wmi_firstwarning = 0;
            console.log("First flag AFTER", wmi_firstwarning);
        } else {
            wmi_secondwarning = 0;
            if (wmi_firstwarning == 0) {
                wmi_firstwarning = 1;
                console.log("First flag AFTER", wmi_firstwarning);
            } else if (wmi_secondwarning == 1) {
                wmi_status = 1;
            }
        };
    }
};

var answeraudio_33 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMI_18"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wmi_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"34651827"}') {
            wmi_firstwarning = 0;
            wmi_secondwarning = 1;
            console.log("First flag AFTER", wmi_firstwarning);
        } else {
            wmi_secondwarning = 1;
            if (wmi_firstwarning == 0) {
                wmi_firstwarning = 1;
                console.log("First flag AFTER", wmi_firstwarning);
            } else if (wmi_secondwarning == 1) {
                wmi_status = 1;
            }
        };
    }
};

/* ***************************** end WM INVERSO ******************************/

/* ***************************** practice blocks WM SECUENCIAL******************************/

var wmspractice_exp = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p class = center-block-text>" +
        "Bloque de Practica.<br /><br />" +
        "Descripcion bloque de practica<br /><br />" +
        "</p></div>"
    ],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data: {
        trialid: "Instructions_wais_working_memory_experiment2"
    }
};

var wm_practice01 = {
    type: 'single-audio',
    stimulus: "sounds/Secuencial/hombre_1."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 9-7

var wm_practice02 = {
    type: 'single-audio',
    stimulus: "sounds/Secuencial/hombre_2."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 6-3

var wms_practiceanswer01 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMS_01"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wms_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"123"}') {
            wms_correcto = true;
        } else {
            wms_correcto = false;
        };
    }
};

var wm_practiceanswer02 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMS_02"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wms_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"225"}') {
            wms_correcto2 = true;
        } else {
            wms_correcto2 = false;
        };
    }
};

var wms_right01 = {
    type: 'instructions',
    pages: ["<p>Eso es correcto.<br /><br />Presione la tecla ENTER para continuar.</p>"],
    key_forward: 'enter'
};
var wms_wrong01 = {
    type: 'instructions',
    pages: ["<p>Eso no es correcto. Los n&uacute;meros eran 231, por lo que si los ordena secuenciados, comenzando por el menor, los n&uacute;meros eran 123.<br /><br />Presione la tecla ENTER para continuar.</p>"],
    key_forward: 'enter'
};

var wms_right02 = {
    type: 'instructions',
    pages: ["<p>Eso es correcto.<br /><br />Presione la tecla ENTER para continuar.</p>"],
    key_forward: 'enter'
};
var wms_wrong02 = {
    type: 'instructions',
    pages: ["<p>Eso no es correcto. Los n&uacute;meros eran 522, por lo que si los ordena secuenciados, comenzando por el menor, los n&uacute;meros eran 225. Hagamos algunos m&aacute;s<br /><br />Presione la tecla ENTER para continuar.</p>"],
    key_forward: 'enter'
};

//checks what screen to show next, according to the answer
var wms_conditional01 = {
    timeline: [wms_right01],
    conditional_function: function(data) {
        if (wms_correcto === true) {
            return true;
        } else {
            return false;
        }
    }
};

var wms_conditional02 = {
    timeline: [wms_wrong01],
    conditional_function: function(data) {
        if (wms_correcto === true) {
            return false;
        } else {
            return true;
        }
    }
};

var wm_conditional11 = {
    timeline: [wms_right02],
    conditional_function: function(data) {
        if (wms_correcto2 === true) {
            return true;
        } else {
            return false;
        }
    }
};

var wm_conditional12 = {
    timeline: [wms_wrong02],
    conditional_function: function(data) {
        if (wms_correcto2 === true) {
            return false;
        } else {
            return true;
        }
    }
};


/* ***************************** beggining WM SECUENCIAL ******************************/

// 03 y 04 se omiten por ser pruebas
/*
in odd questions, the warnings will end up 00 or 01 if answered correctly
and 10 if answered wrong.
in even questions, the warnings wil end up 01 if answered correctly and 11
if answered wrong
*/


var answeraudio_34 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMS_03"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wms_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"123"}') {
            wms_firstwarning = 0;
            console.log("First flag AFTER", wms_firstwarning);
        } else {
            wms_secondwarning = 0;
            if (wms_firstwarning == 0) {
                wms_firstwarning = 1;
                console.log("First flag AFTER", wms_firstwarning);
            } else if (wms_secondwarning == 1) {}
        };
    }
};

var answeraudio_35 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMS_04"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wms_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"225"}') {
            wms_firstwarning = 0;
            wms_secondwarning = 1;
            console.log("First flag AFTER", wms_firstwarning);
        } else {
            wms_secondwarning = 1;
            if (wms_firstwarning == 0) {
                wms_firstwarning = 1;
                console.log("First flag AFTER", wms_firstwarning);
            } else if (wms_secondwarning == 1) {}
        };
    }
};

// Aqui empiezan los 03 y 04 reales

var answeraudio_36 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMS_03"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wms_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"12"}') {
            wms_firstwarning = 0;
            console.log("First flag AFTER", wms_firstwarning);
        } else {
            wms_secondwarning = 0;
            if (wms_firstwarning == 0) {
                wms_firstwarning = 1;
                console.log("First flag AFTER", wms_firstwarning);
            } else if (wms_secondwarning == 1) {
                wms_status = 1;
            }
        };
    }
};

var answeraudio_37 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMS_04"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wms_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"24"}') {
            wms_firstwarning = 0;
            wms_secondwarning = 1;
            console.log("First flag AFTER", wms_firstwarning);
        } else {
            wms_secondwarning = 1;
            if (wms_firstwarning == 0) {
                wms_firstwarning = 1;
                console.log("First flag AFTER", wms_firstwarning);
            } else if (wms_secondwarning == 1) {
                wms_status = 1;
            }
        };
    }
};

var answeraudio_38 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMS_05"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wms_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"136}') {
            wms_firstwarning = 0;
            console.log("First flag AFTER", wms_firstwarning);
        } else {
            wms_secondwarning = 0;
            if (wms_firstwarning == 0) {
                wms_firstwarning = 1;
                console.log("First flag AFTER", wms_firstwarning);
            } else if (wms_secondwarning == 1) {
                wms_status = 1;
            }
        };
    }
};

var answeraudio_39 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMS_06"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wms_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"049"}') {
            wms_firstwarning = 0;
            wms_secondwarning = 1;
            console.log("First flag AFTER", wms_firstwarning);
        } else {
            wms_secondwarning = 1;
            if (wms_firstwarning == 0) {
                wms_firstwarning = 1;
                console.log("First flag AFTER", wms_firstwarning);
            } else if (wms_secondwarning == 1) {
                wms_status = 1;
            }
        };
    }
};

var answeraudio_40 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMS_07"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wms_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"2789"}') {
            wms_firstwarning = 0;
            console.log("First flag AFTER", wms_firstwarning);
        } else {
            wms_secondwarning = 0;
            if (wms_firstwarning == 0) {
                wms_firstwarning = 1;
                console.log("First flag AFTER", wms_firstwarning);
            } else if (wms_secondwarning == 1) {
                wms_status = 1;
            }
        };
    }
};

var answeraudio_41 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMS_08"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wms_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"1478"}') {
            wms_firstwarning = 0;
            wms_secondwarning = 1;
            console.log("First flag AFTER", wms_firstwarning);
        } else {
            wms_secondwarning = 1;
            if (wms_firstwarning == 0) {
                wms_firstwarning = 1;
                console.log("First flag AFTER", wms_firstwarning);
            } else if (wms_secondwarning == 1) {
                wms_status = 1;
            }
        };
    }
};

var answeraudio_42 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMS_09"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wms_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"12679"}') {
            wms_firstwarning = 0;
            console.log("First flag AFTER", wms_firstwarning);
        } else {
            wms_secondwarning = 0;
            if (wms_firstwarning == 0) {
                wms_firstwarning = 1;
                console.log("First flag AFTER", wms_firstwarning);
            } else if (wms_secondwarning == 1) {
                wms_status = 1;
            }
        };
    }
};

var answeraudio_43 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMS_10"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wms_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"33588"}') {
            wms_firstwarning = 0;
            wms_secondwarning = 1;
            console.log("First flag AFTER", wms_firstwarning);
        } else {
            wms_secondwarning = 1;
            if (wms_firstwarning == 0) {
                wms_firstwarning = 1;
                console.log("First flag AFTER", wms_firstwarning);
            } else if (wms_secondwarning == 1) {
                wms_status = 1;
            }
        };
    }
};

var answeraudio_44 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMS_11"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wms_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"123467"}') {
            wms_firstwarning = 0;
            console.log("First flag AFTER", wms_firstwarning);
        } else {
            wms_secondwarning = 0;
            if (wms_firstwarning == 0) {
                wms_firstwarning = 1;
                console.log("First flag AFTER", wms_firstwarning);
            } else if (wms_secondwarning == 1) {
                wms_status = 1;
            }
        };
    }
};

var answeraudio_45 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMS_12"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wms_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"223456"}') {
            wms_firstwarning = 0;
            wms_secondwarning = 1;
            console.log("First flag AFTER", wms_firstwarning);
        } else {
            wms_secondwarning = 1;
            if (wms_firstwarning == 0) {
                wms_firstwarning = 1;
                console.log("First flag AFTER", wms_firstwarning);
            } else if (wms_secondwarning == 1) {
                wms_status = 1;
            }
        };
    }
};

var answeraudio_46 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMS_13"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wms_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"2566778"}') {
            wms_firstwarning = 0;
            console.log("First flag AFTER", wms_firstwarning);
        } else {
            wms_secondwarning = 0;
            if (wms_firstwarning == 0) {
                wms_firstwarning = 1;
                console.log("First flag AFTER", wms_firstwarning);
            } else if (wms_secondwarning == 1) {
                wms_status = 1;
            }
        };
    }
};

var answeraudio_47 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMS_14"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wms_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"2344558"}') {
            wms_firstwarning = 0;
            wms_secondwarning = 1;
            console.log("First flag AFTER", wms_firstwarning);
        } else {
            wms_secondwarning = 1;
            if (wms_firstwarning == 0) {
                wms_firstwarning = 1;
                console.log("First flag AFTER", wms_firstwarning);
            } else if (wms_secondwarning == 1) {
                wms_status = 1;
            }
        };
    }
};

var answeraudio_48 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMS_15"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wms_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"24555778"}') {
            wms_firstwarning = 0;
            console.log("First flag AFTER", wms_firstwarning);
        } else {
            wms_secondwarning = 0;
            if (wms_firstwarning == 0) {
                wms_firstwarning = 1;
                console.log("First flag AFTER", wms_firstwarning);
            } else if (wms_secondwarning == 1) {
                wms_status = 1;
            }
        };
    }
};

var answeraudio_49 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMS_16"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wms_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"03447899"}') {
            wms_firstwarning = 0;
            wms_secondwarning = 1;
            console.log("First flag AFTER", wms_firstwarning);
        } else {
            wms_secondwarning = 1;
            if (wms_firstwarning == 0) {
                wms_firstwarning = 1;
                console.log("First flag AFTER", wms_firstwarning);
            } else if (wms_secondwarning == 1) {
                wms_status = 1;
            }
        };
    }
};

var answeraudio_50 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMS_17"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wms_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"001112355"}') {
            wms_firstwarning = 0;
            console.log("First flag AFTER", wms_firstwarning);
        } else {
            wms_secondwarning = 0;
            if (wms_firstwarning == 0) {
                wms_firstwarning = 1;
                console.log("First flag AFTER", wms_firstwarning);
            } else if (wms_secondwarning == 1) {
                wms_status = 1;
            }
        };
    }
};

var answeraudio_51 = {
    type: 'survey-numbers',
    questions: [{
        prompt: ["<p>Escribe a continuacion, los numeros que escuchaste </p>"]
    }],
    timing_post_trial: 100,
    data: {
        trialid: "WMS_18"
    },
    on_finish: function(data) {
        console.log("a", wmindex);
        wmindex++;
        console.log("b", wmindex);

        console.log("First flag BEFORE", wms_firstwarning);
        var wm_response = data.responses;
        if (wm_response == '{"Q0":"271484296"}') {
            wms_firstwarning = 0;
            wms_secondwarning = 1;
            console.log("First flag AFTER", wms_firstwarning);
        } else {
            wms_secondwarning = 1;
            if (wms_firstwarning == 0) {
                wms_firstwarning = 1;
                console.log("First flag AFTER", wms_firstwarning);
            } else if (wms_secondwarning == 1) {
                wms_status = 1;
            }
        };
    }
};

/* ***************************** end WM SECUENCIAL ******************************/

/* ***************************** end Elementos Fijos (Bloque de Respuesta) ******************************/

/* ***************************** Bloque Directo ******************************/

var p1_a1 = {
    type: 'single-audio',
    stimulus: "sounds/Directo/hombre_1."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 9-7

var p1_a2 = {
    type: 'single-audio',
    stimulus: "sounds/Directo/hombre_2."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 6-3

var p1_a3 = {
    type: 'single-audio',
    stimulus: "sounds/Directo/hombre_3."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 5-8-2

var p1_a4 = {
    type: 'single-audio',
    stimulus: "sounds/Directo/hombre_4."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 6-9-4

var p1_a5 = {
    type: 'single-audio',
    stimulus: "sounds/Directo/hombre_5."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 7-2-8-6

var p1_a6 = {
    type: 'single-audio',
    stimulus: "sounds/Directo/hombre_6."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 6-4-3-9

var p1_a7 = {
    type: 'single-audio',
    stimulus: "sounds/Directo/hombre_7."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 4-2-7-3-1

var p1_a8 = {
    type: 'single-audio',
    stimulus: "sounds/Directo/hombre_8."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 7-5-8-3-6

var p1_a9 = {
    type: 'single-audio',
    stimulus: "sounds/Directo/hombre_9."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 3-9-2-4-8-7

var p1_a10 = {
    type: 'single-audio',
    stimulus: "sounds/Directo/hombre_10."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 6-1-9-4-7-3

var p1_a11 = {
    type: 'single-audio',
    stimulus: "sounds/Directo/hombre_11."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 4-1-7-9-3-8-6

var p1_a12 = {
    type: 'single-audio',
    stimulus: "sounds/Directo/hombre_12."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 6-9-1-7-4-2-8

var p1_a13 = {
    type: 'single-audio',
    stimulus: "sounds/Directo/hombre_13."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 3-8-2-9-6-1-7-4

var p1_a14 = {
    type: 'single-audio',
    stimulus: "sounds/Directo/hombre_14."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 5-8-1-3-2-6-4-7

var p1_a15 = {
    type: 'single-audio',
    stimulus: "sounds/Directo/hombre_15."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 2-7-5-8-6-3-1-9-4

var p1_a16 = {
    type: 'single-audio',
    stimulus: "sounds/Directo/hombre_16."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 7-1-3-9-4-2-5-6-8

/* ***************************** end Bloque Directo ******************************/

/* ***************************** Bloque Inverso ******************************/

var p2_a1 = {
    type: 'single-audio',
    stimulus: "sounds/Inverso/hombre_1."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 7-1

var p2_a2 = {
    type: 'single-audio',
    stimulus: "sounds/Inverso/hombre_2."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 3-4

var p2_a3 = {
    type: 'single-audio',
    stimulus: "sounds/Inverso/hombre_3."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 3-1

var p2_a4 = {
    type: 'single-audio',
    stimulus: "sounds/Inverso/hombre_4."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 2-4

var p2_a5 = {
    type: 'single-audio',
    stimulus: "sounds/Inverso/hombre_5."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 4-6

var p2_a6 = {
    type: 'single-audio',
    stimulus: "sounds/Inverso/hombre_6."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 5-7

var p2_a7 = {
    type: 'single-audio',
    stimulus: "sounds/Inverso/hombre_7."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 6-2-9

var p2_a8 = {
    type: 'single-audio',
    stimulus: "sounds/Inverso/hombre_8."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 4-7-5

var p2_a9 = {
    type: 'single-audio',
    stimulus: "sounds/Inverso/hombre_9."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 8-2-7-9

var p2_a10 = {
    type: 'single-audio',
    stimulus: "sounds/Inverso/hombre_10."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 4-9-6-8

var p2_a11 = {
    type: 'single-audio',
    stimulus: "sounds/Inverso/hombre_11."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 6-5-8-4-3

var p2_a12 = {
    type: 'single-audio',
    stimulus: "sounds/Inverso/hombre_12."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 1-5-4-8-6

var p2_a13 = {
    type: 'single-audio',
    stimulus: "sounds/Inverso/hombre_13."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 5-3-7-4-1-8

var p2_a14 = {
    type: 'single-audio',
    stimulus: "sounds/Inverso/hombre_14."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 7-2-4-8-5-6

var p2_a15 = {
    type: 'single-audio',
    stimulus: "sounds/Inverso/hombre_15."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 8-1-4-9-3-6-2

var p2_a16 = {
    type: 'single-audio',
    stimulus: "sounds/Inverso/hombre_16."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 4-7-3-9-6-2-8

var p2_a17 = {
    type: 'single-audio',
    stimulus: "sounds/Inverso/hombre_17."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 9-4-3-7-6-2-1-8

var p2_a18 = {
    type: 'single-audio',
    stimulus: "sounds/Inverso/hombre_18."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 7-2-8-1-5-6-4-3

/* ***************************** end Bloque Inverso ******************************/

/* ***************************** Bloque Secuenciacion ******************************/

var p3_a1 = {
    type: 'single-audio',
    stimulus: "sounds/Secuenciacion/hombre_1."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 2-3-1

var p3_a2 = {
    type: 'single-audio',
    stimulus: "sounds/Secuenciacion/hombre_2."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 5-2-2

var p3_a3 = {
    type: 'single-audio',
    stimulus: "sounds/Secuenciacion/hombre_3."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 1-2

var p3_a4 = {
    type: 'single-audio',
    stimulus: "sounds/Secuenciacion/hombre_4."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 4-2

var p3_a5 = {
    type: 'single-audio',
    stimulus: "sounds/Secuenciacion/hombre_5."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 3-1-6

var p3_a6 = {
    type: 'single-audio',
    stimulus: "sounds/Secuenciacion/hombre_6."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 0-9-4

var p3_a7 = {
    type: 'single-audio',
    stimulus: "sounds/Secuenciacion/hombre_7."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 8-7-9-2

var p3_a8 = {
    type: 'single-audio',
    stimulus: "sounds/Secuenciacion/hombre_8."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 4-8-7-1

var p3_a9 = {
    type: 'single-audio',
    stimulus: "sounds/Secuenciacion/hombre_9."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 2-6-9-1-7

var p3_a10 = {
    type: 'single-audio',
    stimulus: "sounds/Secuenciacion/hombre_10."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 3-8-3-5-8

var p3_a11 = {
    type: 'single-audio',
    stimulus: "sounds/Secuenciacion/hombre_11."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 2-1-7-4-3-6

var p3_a12 = {
    type: 'single-audio',
    stimulus: "sounds/Secuenciacion/hombre_12."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 6-2-5-2-3-4

var p3_a13 = {
    type: 'single-audio',
    stimulus: "sounds/Secuenciacion/hombre_13."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 7-5-7-6-8-6-2

var p3_a14 = {
    type: 'single-audio',
    stimulus: "sounds/Secuenciacion/hombre_14."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 4-8-2-5-4-3-5

var p3_a15 = {
    type: 'single-audio',
    stimulus: "sounds/Secuenciacion/hombre_15."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 5-8-7-2-7-5-4-5

var p3_a16 = {
    type: 'single-audio',
    stimulus: "sounds/Secuenciacion/hombre_16."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 9-4-9-7-3-0-8-4

var p3_a17 = {
    type: 'single-audio',
    stimulus: "sounds/Secuenciacion/hombre_17."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 5-0-1-1-3-2-1-0-5

var p3_a18 = {
    type: 'single-audio',
    stimulus: "sounds/Secuenciacion/hombre_18."+extension,
    trial_ends_after_audio: true,
    choices: jsPsych.NO_KEYS,
    timing_post_trial: 0,
    prompt: '<div class="crux" id="cruz"><img src="img/cruz.png" /></div>'
};
//Numeros: 2-7-1-4-8-4-2-9-6

/* ***************************** end Bloque Secuenciacion ******************************/


/* Nodos condicionales*/
/*checks if the block must be skippedd to skip each trial*/


var wm_condicional00 = {
    timeline: [p1_a2, answeraudio_01],
    conditional_function: function() {
        if (wmd_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wm_condicional01 = {
    timeline: [p1_a3, answeraudio_02],
    conditional_function: function() {
        if (wmd_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wm_condicional02 = {
    timeline: [p1_a4, answeraudio_03],
    conditional_function: function() {
        if (wmd_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wm_condicional03 = {
    timeline: [p1_a5, answeraudio_04],
    conditional_function: function() {
        if (wmd_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wm_condicional04 = {
    timeline: [p1_a6, answeraudio_05],
    conditional_function: function() {
        if (wmd_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wm_condicional05 = {
    timeline: [p1_a7, answeraudio_06],
    conditional_function: function() {
        if (wmd_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wm_condicional06 = {
    timeline: [p1_a8, answeraudio_07],
    conditional_function: function() {
        if (wmd_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wm_condicional07 = {
    timeline: [p1_a9, answeraudio_08],
    conditional_function: function() {
        if (wmd_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wm_condicional08 = {
    timeline: [p1_a10, answeraudio_09],
    conditional_function: function() {
        if (wmd_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wm_condicional09 = {
    timeline: [p1_a11, answeraudio_10],
    conditional_function: function() {
        if (wmd_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wm_condicional10 = {
    timeline: [p1_a12, answeraudio_11],
    conditional_function: function() {
        if (wmd_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wm_condicional11 = {
    timeline: [p1_a13, answeraudio_12],
    conditional_function: function() {
        if (wmd_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wm_condicional12 = {
    timeline: [p1_a14, answeraudio_13],
    conditional_function: function() {
        if (wmd_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wm_condicional13 = {
    timeline: [p1_a15, answeraudio_14],
    conditional_function: function() {
        if (wmd_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wm_condicional14 = {
    timeline: [p1_a16, answeraudio_15],
    conditional_function: function() {
        if (wmd_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wmi_condicional00 = {
    timeline: [p2_a3, answeraudio_18],
    conditional_function: function() {
        if (wmi_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wmi_condicional01 = {
    timeline: [p2_a4, answeraudio_19],
    conditional_function: function() {
        if (wmi_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wmi_condicional02 = {
    timeline: [p2_a5, answeraudio_20],
    conditional_function: function() {
        if (wmi_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wmi_condicional03 = {
    timeline: [p2_a6, answeraudio_21],
    conditional_function: function() {
        if (wmi_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wmi_condicional04 = {
    timeline: [p2_a7, answeraudio_22],
    conditional_function: function() {
        if (wmi_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wmi_condicional05 = {
    timeline: [p2_a8, answeraudio_23],
    conditional_function: function() {
        if (wmi_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wmi_condicional06 = {
    timeline: [p2_a9, answeraudio_24],
    conditional_function: function() {
        if (wmi_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wmi_condicional07 = {
    timeline: [p2_a10, answeraudio_25],
    conditional_function: function() {
        if (wmi_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wmi_condicional08 = {
    timeline: [p2_a11, answeraudio_26],
    conditional_function: function() {
        if (wmi_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wmi_condicional09 = {
    timeline: [p2_a12, answeraudio_27],
    conditional_function: function() {
        if (wmi_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wmi_condicional10 = {
    timeline: [p2_a13, answeraudio_28],
    conditional_function: function() {
        if (wmi_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wmi_condicional11 = {
    timeline: [p2_a14, answeraudio_29],
    conditional_function: function() {
        if (wmi_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wmi_condicional12 = {
    timeline: [p2_a15, answeraudio_30],
    conditional_function: function() {
        if (wmi_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wmi_condicional13 = {
    timeline: [p2_a16, answeraudio_31],
    conditional_function: function() {
        if (wmi_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wmi_condicional14 = {
    timeline: [p2_a17, answeraudio_32],
    conditional_function: function() {
        if (wmi_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wmi_condicional15 = {
    timeline: [p2_a18, answeraudio_33],
    conditional_function: function() {
        if (wmi_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wms_condicional00 = {
    timeline: [p3_a3, answeraudio_36],
    conditional_function: function() {
        if (wms_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wms_condicional01 = {
    timeline: [p3_a4, answeraudio_37],
    conditional_function: function() {
        if (wms_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wms_condicional02 = {
    timeline: [p3_a5, answeraudio_38],
    conditional_function: function() {
        if (wms_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wms_condicional03 = {
    timeline: [p3_a6, answeraudio_39],
    conditional_function: function() {
        if (wms_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wms_condicional04 = {
    timeline: [p3_a7, answeraudio_40],
    conditional_function: function() {
        if (wms_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wms_condicional05 = {
    timeline: [p3_a8, answeraudio_41],
    conditional_function: function() {
        if (wms_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wms_condicional06 = {
    timeline: [p3_a9, answeraudio_42],
    conditional_function: function() {
        if (wms_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wms_condicional07 = {
    timeline: [p3_a10, answeraudio_43],
    conditional_function: function() {
        if (wms_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wms_condicional08 = {
    timeline: [p3_a11, answeraudio_44],
    conditional_function: function() {
        if (wms_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wms_condicional09 = {
    timeline: [p3_a12, answeraudio_45],
    conditional_function: function() {
        if (wms_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wms_condicional10 = {
    timeline: [p3_a13, answeraudio_46],
    conditional_function: function() {
        if (wms_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wms_condicional11 = {
    timeline: [p3_a14, answeraudio_47],
    conditional_function: function() {
        if (wms_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wms_condicional12 = {
    timeline: [p3_a15, answeraudio_48],
    conditional_function: function() {
        if (wms_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wms_condicional13 = {
    timeline: [p3_a16, answeraudio_49],
    conditional_function: function() {
        if (wms_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wms_condicional14 = {
    timeline: [p3_a17, answeraudio_50],
    conditional_function: function() {
        if (wms_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};

var wms_condicional15 = {
    timeline: [p3_a18, answeraudio_51],
    conditional_function: function() {
        if (wms_status == 1) {
            return false;
        } else {
            return true;
        }
    }
};


/* ********************************* INICIALIZACION DE EXPERIMENTO ********************************* */

wais_working_memory_experiment = [];  //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
    wais_working_memory_experiment.push({
        type: 'fullscreen',
        message: '<p>El experimento entrara en modo pantalla completa</p>',
        button_label: "Pantalla Completa",
        delay_after: 0,
        fullscreen_mode: true
    });
}

//add the trials to the timeline
// Working Memory
wais_working_memory_experiment.push(screen_wais_working_memory_experiment);
wais_working_memory_experiment.push(wmexplanation1);
//WM Directo
wais_working_memory_experiment.push(p1_a1);
wais_working_memory_experiment.push(answeraudio_00);

wais_working_memory_experiment.push(wm_condicional00);
wais_working_memory_experiment.push(wm_condicional01);
wais_working_memory_experiment.push(wm_condicional02);
wais_working_memory_experiment.push(wm_condicional03);
wais_working_memory_experiment.push(wm_condicional04);
wais_working_memory_experiment.push(wm_condicional05);
wais_working_memory_experiment.push(wm_condicional06);
wais_working_memory_experiment.push(wm_condicional07);
wais_working_memory_experiment.push(wm_condicional08);
wais_working_memory_experiment.push(wm_condicional09);
wais_working_memory_experiment.push(wm_condicional10);
wais_working_memory_experiment.push(wm_condicional11);
wais_working_memory_experiment.push(wm_condicional12);
wais_working_memory_experiment.push(wm_condicional13);
wais_working_memory_experiment.push(wm_condicional14);

wais_working_memory_experiment.push(wmexplanation2);

//WM Inverso
wais_working_memory_experiment.push(p2_a1);
wais_working_memory_experiment.push(wmi_practiceanswer01);
wais_working_memory_experiment.push(wmi_conditional01);
wais_working_memory_experiment.push(wmi_conditional02);
//wais_working_memory_experiment.push(answeraudio_16);

wais_working_memory_experiment.push(p2_a2);
wais_working_memory_experiment.push(wmi_practiceanswer02);
wais_working_memory_experiment.push(wmi_conditional11);
wais_working_memory_experiment.push(wmi_conditional12);
//wais_working_memory_experiment.push(answeraudio_17);

wais_working_memory_experiment.push(wmi_condicional00);
wais_working_memory_experiment.push(wmi_condicional01);
wais_working_memory_experiment.push(wmi_condicional02);
wais_working_memory_experiment.push(wmi_condicional03);
wais_working_memory_experiment.push(wmi_condicional04);
wais_working_memory_experiment.push(wmi_condicional05);
wais_working_memory_experiment.push(wmi_condicional06);
wais_working_memory_experiment.push(wmi_condicional07);
wais_working_memory_experiment.push(wmi_condicional08);
wais_working_memory_experiment.push(wmi_condicional09);
wais_working_memory_experiment.push(wmi_condicional10);
wais_working_memory_experiment.push(wmi_condicional11);
wais_working_memory_experiment.push(wmi_condicional12);
wais_working_memory_experiment.push(wmi_condicional13);
wais_working_memory_experiment.push(wmi_condicional14);
wais_working_memory_experiment.push(wmi_condicional15);

wais_working_memory_experiment.push(wmexplanation3);

//WM Secuencial
wais_working_memory_experiment.push(p3_a1);
//wais_working_memory_experiment.push(answeraudio_34);
wais_working_memory_experiment.push(wms_practiceanswer01);
wais_working_memory_experiment.push(wms_conditional01);
wais_working_memory_experiment.push(wms_conditional02);

wais_working_memory_experiment.push(p3_a2);
//wais_working_memory_experiment.push(answeraudio_35);
wais_working_memory_experiment.push(wm_practiceanswer02);
wais_working_memory_experiment.push(wm_conditional11);
wais_working_memory_experiment.push(wm_conditional12);

wais_working_memory_experiment.push(wms_condicional00);
wais_working_memory_experiment.push(wms_condicional01);
wais_working_memory_experiment.push(wms_condicional02);
wais_working_memory_experiment.push(wms_condicional03);
wais_working_memory_experiment.push(wms_condicional04);
wais_working_memory_experiment.push(wms_condicional05);
wais_working_memory_experiment.push(wms_condicional06);
wais_working_memory_experiment.push(wms_condicional07);
wais_working_memory_experiment.push(wms_condicional08);
wais_working_memory_experiment.push(wms_condicional09);
wais_working_memory_experiment.push(wms_condicional10);
wais_working_memory_experiment.push(wms_condicional11);
wais_working_memory_experiment.push(wms_condicional12);
wais_working_memory_experiment.push(wms_condicional13);
wais_working_memory_experiment.push(wms_condicional14);
wais_working_memory_experiment.push(wms_condicional15);
