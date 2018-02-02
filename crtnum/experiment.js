/**
 * The experiment Cognitive Reflexive Test-7
 *
 *
 * CSCN lab
 *
 */

/**
 *Blocks any key that isn't a number
 *@param {Event}    event
 */
onkeydown = function block_fkeys(event) {
    var x = event.which || event.keyCode;
    if (x != 8 && x != 0 && x < 48 || x > 57) {
        console.log("Blocked key");
        event.preventDefault();
        return false;
    } else {
        return;
    }
}

/***Instructions and questions to be asked***/
var crtNumintro = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p>" +
        "CRT-V.<br /><br />" +
        "</p></div>"
    ],
    allow_keys: true,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data: {
        trialid: "Intro_crtNum"
    }
};

var crtNumexplanation = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p>" +
        "En las siguientes p&aacute;ginas vas a ver varios &iacute;tems que difieren en dificultad.<br /><br />" +
        "Responde todos los que puedas<br /><br />" +
        "</p></div>"
    ],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data: {
        trialid: "Instructions_crtNum"
    }
};

var crtNum1 = {
    type: "survey-text",
    endword: "pesos",
    timeline: [{
        questions: [{
            prompt: "<p class='limitnumeracy'> Un bate y una pelota cuestan $1.100 en total. El bate cuesta $1.000 m&aacute;s que la pelota., &iquest;Cu&aacute;nto cuesta la pelota?</p>"
        }],
        data: {
            trialid: "LIP_01"
        }
    }, ],

};
var crtNum2 = {
    type: "survey-text",
    endword: "dias",
    timeline: [{
        questions: [{
            prompt: "<p class='limitnumeracy'> Si Jos&eacute; puede beber un barril de agua en 6 d&iacute;as y Mar&iacute;a puede beber un barril de agua en 12 d&iacute;as, &iquest;Cu&aacute;nto se demorar&iacute;an en tomar un barril de agua juntos?</p>"
        }],
        data: {
            trialid: "LIP_02"
        }
    }, ],
};
var crtNum3 = {
    type: "survey-text",
    endword: "minutos",
    timeline: [{
        questions: [{
            prompt: "<p class='limitnumeracy'> Si 5 m&aacute;quinas demoran 5 minutos en hacer 5 aparatos., &iquest;Cu&aacute;nto tiempo se demorar&iacute;an 100 m&aacute;quinas en hacer 100 aparatos?</p>"
        }],
        data: {
            trialid: "LIP_03"
        }
    }, ],

};
var crtNum4 = {
    type: "survey-text",
    endword: "estudiantes",
    timeline: [{
        questions: [{
            prompt: "<p class='limitnumeracy'> Pedro recibi&oacute; tanto la quinceava nota m&aacute;s alta como la quinceava nota m&aacute;s baja en su clase, &iquest;Cu&aacute;ntos estudiantes hay en la clase?</p>"
        }],
        data: {
            trialid: "LIP_04"
        }
    }, ]
};
var crtNum5 = {
    type: "survey-text",
    endword: "pesos",
    timeline: [{
        questions: [{
            prompt: "<p class='limitnumeracy'> Un hombre compra un cerdo a $60.000, lo vende a $70.000, lo vuelve a comprar por $80.000 y finalmente lo vende por $90.000. &iquest;cu&aacute;nto ha ganado?</p>"
        }],
        data: {
            trialid: "LIP_05"
        }
    }],

};



var crtNum6 = {
    type: "survey-multi-choice2",
    timeline: [{
        questions: [{
            prompt: "Sim&oacute;n decide invertir $8.000.000 en el mercado de acciones un d&iacute;a a inicios de 2008." +
                " Seis meses despu&eacute;s de haber invertido, el 17 de julio, las acciones que hab&iacute;a comprado bajaron un 50%." +
                "Afortunadamente para Sim&oacute;n, desde el 17 de julio hasta el 17 de octubre, las acciones que hab&iacute;a comprado subieron un 75%." +
                " En este momento, Sim&oacute;n ha:",
            required: true,
            options: ["a) No ha ganado ni perdido dinero",
                "b) Ha ganado dinero",
                "c) Ha perdido dinero"
            ]
        }]
    }]

};


var crtNum3_a = {
    type: "survey-text",
    endword: "dias",
    timeline: [
        {
            questions: [{
                prompt: "<p class='limitnumeracy'> En un lago hay un manto de hojas de lirios. Cada d&iacute;a el manto dobla su tama&ntilde;o." +
                    "Si el manto de lirios se demora 48 d&iacute;as en cubrir el lago completo" +
                    "&iquest;cu&aacute;nto se demorar&iacute;a el manto de lirios en cubrir la mitad del lago</p>"
            }],
            data: {
                trialid: "LIP_06"
            }
        }
    ],

};



crtNum_experiment = []; // definitive Timeline
tempArray = []; // temporary  Timeline to shuffle the trials

/**
Shuffles an array using the Fisher-Yates algorithm
@param {Array} array
*/
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

/**Check if the experiment is in fullscren,
and if it isn't, add the trial to make it fullscreen
*/
if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
    crtNum_experiment.push({
        type: 'fullscreen',
        message: '<p>El experimento entrara en modo pantalla completa</p>',
        button_label: "Pantalla Completa",
        delay_after: 0,
        fullscreen_mode: true
    });
}

//push instructions to the definitive Timeline
crtNum_experiment.push(crtNumintro);
crtNum_experiment.push(crtNumexplanation);

//push trials to the temporary timeline
tempArray.push(crtNum1);
tempArray.push(crtNum2);
tempArray.push(crtNum3);
tempArray.push(crtNum4);
tempArray.push(crtNum5);
tempArray.push(crtNum6);
tempArray.push(crtNum3_a);

//shuffle the temporary timeline and add it to the definitive timeline
shuffleArray(tempArray);
for (i in tempArray) {
    crtNum_experiment.push(tempArray[i]);
}
