// Variables globales

mr_timeleft_1 = 10000;
mr_timeleft_2 = 5000;
mr_timeleft_3 = 5000;
mr_timeleft_4 = 5000;
mr_timeleft_5 = 5000;

var mr_timeout_status1 = 0;
var mr_timeout_status2 = 0;
var mr_timeout_status3 = 0;
var mr_timeout_status4 = 0;
var mr_timeout_status5 = 0;

// Funciones de apoyo
function block_fkeys(event){
    var x = event.which || event.keyCode;
    if(x == 112 || x == 113 || x == 114 || x == 115 || x == 116 || x == 117 || x == 118 || x == 119 || x == 120 || x == 121 || x == 122 || x == 123 || x == 27){
        console.log("Blocked key");
        event.preventDefault();
        return false;
    }else{
        return;
    }
}

// Inicio prueba

/* Mental Rotation - MRT A */



    /* ********************************************************  INICIO INSTRUCCIONES ******************************************************** */

    var mr_instruct={
        type: "instructions",
        pages: ["<div class = centerbox>"+
               "<p class = center-block-text>"+
               "Por favor, mira estas cinco im&aacute;genes.<br />"+
               "<img class='mrimg1' src='img/pag1_1.png' /><br />"+
               "Observa que todas son dibujos del mismo objeto que se muestra desde diferentes &aacute;ngulos.<br />"+
               "Intenta imaginar el movimiento del objeto (o a ti mismo con respecto del objeto), al pasar de<br />"+
               "una imagen a otra.<br />"+
               "<img class='mrimg2' src='img/pag1_2.png' /><br />"+
               "Aqu&iacute; hay dos dibujos de una nueva imagen que es diferente de la que se muestra en los primeros<br />"+
               "5 dibujos. Date cuenta que estos dos dibujos muestran un objeto que es diferente y no puede ser<br />"+
               "'rotado' para ser igual que el objeto representado en los cinco primeros dibujos.<br /><br />"+
               "Por favor, aseg&uacute;rate de <strong>seleccionar solamente 2 alternativas por cada imagen.</strong><br />"+
               "Si tienes alguna duda, avisa al examinador."+
               "</p></div>"],
        allow_keys: false,
        show_clickable_nav: true,
        timing_post_trial: 50,
        data:{trialid: "Instructions_MR_01"}
    };

    var mr_trialstarter={
        type: "instructions",
        pages: ["<div class = centerbox>"+
               "<p class = center-block-text>"+
               "Al hacer la prueba recuerda que, para cada conjunto de problemas, hay s&oacute;lo dos im&aacute;genes "+
               "que coinciden con la imagen original.<br />"+
               "S&oacute;lo se te dar&aacute; un punto si marcas correctamente las dos im&aacute;genes que coinciden. Si se&ntilde;alas s&oacute;lo "+
               "una de ellas no recibir&aacute;s ning&uacute;n punto."+
               "</p></div>"],
        allow_keys: false,
        show_clickable_nav: true,
        timing_post_trial: 50,
        data:{trialid: "Instructions_MR_02"}
    };


    /* ********************************************************  FIN INSTRUCCIONES ******************************************************** */

    /* ********************************************************  INICIO PANTALLAS EXTRA ******************************************************** */

    var screen_pre1 = {
        type: 'instructions',
        text: '<p>screen pre 1</p>',
        key_forward: 'enter'
    };

    var screen_post1 = {
        type: 'instructions',
        text: '<p>screen post 1</p>',
        key_forward: 'enter'
    };

    var screen_pre2 = {
        type: 'instructions',
        text: '<p>screen pre 2</p>',
        key_forward: 'enter'
    };

    var screen_post2 = {
        type: 'instructions',
        text: '<p>screen post 2</p>',
        key_forward: 'enter'
    };

    /* ********************************************************  FIN PANTALLAS EXTRA ******************************************************** */

    /* ********************************************************  INICIO ENSAYO ******************************************************** */

    var mr_prueba1={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["<p class='mrpreamble1'>Ahora mira este objeto:</p><p class='mrpreamble2'>Dos de estos cuatro dibujos muestran el mismo objeto.<br />&iquest;Puedes encontrar los dos?</p><br /><br /><br />"], options:["<br /><img src='img/pag1_3_1.png' />","<br /><img src='img/pag1_3_2.png' />","<br /><img src='img/pag1_3_3.png' />","<br /><img src='img/pag1_3_4.png' />"], horizontal: 'true'}],
        data: {trialid: "MR_Test1"},
        required: true
    };

    var mr_prueba2_a={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["2.a"], options:["<br /><img src='img/pag2_1_1.png' />","<br /><img src='img/pag2_1_2.png' />","<br /><img src='img/pag2_1_3.png' />","<br /><img src='img/pag2_1_4.png' />"], horizontal: 'true'}],
        preamble: "<p class='mrpreamble1'>Aqu&iacute; hay tres problemas m&aacute;s. De nuevo, el objeto de destino se muestra <span class='underlined'>dos veces</span> en cada<br />"+
                  "conjunto de cuatro alternativas de entre las que tienes que elegir las correctas.</p><br />",
        data: {trialid: "MR_Test2_a"},
        required: true
    };

    var mr_prueba2_b={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["3.a"], options:["<br /><img src='img/pag2_2_1.png' />","<br /><img src='img/pag2_2_2.png' />","<br /><img src='img/pag2_2_3.png' />","<br /><img src='img/pag2_2_4.png' />"], horizontal: 'true'}],
        preamble: "<p class='mrpreamble1'>Aqu&iacute; hay tres problemas m&aacute;s. De nuevo, el objeto de destino se muestra <span class='underlined'>dos veces</span> en cada<br />"+
                  "conjunto de cuatro alternativas de entre las que tienes que elegir las correctas.</p><br />",
        data: {trialid: "MR_Test2_b"},
        required: true
    };

    var mr_prueba2_c={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["4.a"], options:["<br /><img src='img/pag2_3_1.png' />","<br /><img src='img/pag2_3_2.png' />","<br /><img src='img/pag3_3_3.png' />","<br /><img src='img/pag2_3_4.png' />"], horizontal: 'true'}],
        preamble: "<p class='mrpreamble1'>Aqu&iacute; hay tres problemas m&aacute;s. De nuevo, el objeto de destino se muestra <span class='underlined'>dos veces</span> en cada<br />"+
                  "conjunto de cuatro alternativas de entre las que tienes que elegir las correctas.</p><br />",
        data: {trialid: "MR_Test2_c"},
        required: true
    };

    /* ********************************************************  FIN ENSAYO ******************************************************** */

    /* ********************************************************  INICIO PAGINA 1 ******************************************************** */

    var mr_trial1_a={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["1.a"], options:["<br /><img src='img/pag3_1_1.png' />","<br /><img src='img/pag3_1_2.png' />","<br /><img src='img/pag3_1_3.png' />","<br /><img src='img/pag3_1_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial1_a"},
        trial_duration: function() {
          return mr_timeleft_1;
        },
        on_finish: function(data) {
          mr_timeleft_1 -=data.rt;
          if (mr_timeleft_1 <= 0) {
            ha_timeout_status1 = 1;
          }
        },
        required: true
    };

    var mr_trial1_b={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["2.a "], options:["<br /><img src='img/pag3_2_1.png' />","<br /><img src='img/pag3_2_2.png' />","<br /><img src='img/pag3_2_3.png' />","<br /><img src='img/pag3_2_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial1_b"},
        trial_duration: function() {
          return mr_timeleft_1;
        },
        on_finish: function(data) {
          mr_timeleft_1 -=data.rt;
          if (mr_timeleft_1 <= 0) {
            ha_timeout_status1 = 1;
          }
        },
        required: true
    };

    var mr_trial1_c={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["3.a"], options:["<br /><img src='img/pag3_3_1.png' />","<br /><img src='img/pag3_3_2.png' />","<br /><img src='img/pag3_3_3.png' />","<br /><img src='img/pag3_3_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial1_c"},
        trial_duration: function() {
          return mr_timeleft_1;
        },
        on_finish: function(data) {
          mr_timeleft_1 -=data.rt;
          if (mr_timeleft_1 <= 0) {
            ha_timeout_status1 = 1;
          }
        },
        required: true
    };

    var mr_trial1_d={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["4.a"], options:["<br /><img src='img/pag3_4_1.png' />","<br /><img src='img/pag3_4_2.png' />","<br /><img src='img/pag3_4_3.png' />","<br /><img src='img/pag3_4_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial1_d"},
        trial_duration: function() {
          return mr_timeleft_1;
        },
        on_finish: function(data) {
          mr_timeleft_1 -=data.rt;
          if (mr_timeleft_1 <= 0) {
            ha_timeout_status1 = 1;
          }
        },
        required: true
    };

    var mr_trial1_e={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["5.a"], options:["<br /><img src='img/pag3_5_1.png' />","<br /><img src='img/pag3_5_2.png' />","<br /><img src='img/pag3_5_3.png' />","<br /><img src='img/pag3_5_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial1_e"},
        trial_duration: function() {
          return mr_timeleft_1;
        },
        on_finish: function(data) {
          mr_timeleft_1 -=data.rt;
          if (mr_timeleft_1 <= 0) {
            ha_timeout_status1 = 1;
          }
        },
        required: true
    };

    var mr_trial1_f={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["6.a"], options:["<br /><img src='img/pag3_6_1.png' />","<br /><img src='img/pag3_6_2.png' />","<br /><img src='img/pag3_6_3.png' />","<br /><img src='img/pag3_6_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial1_f"},
        trial_duration: function() {
          return mr_timeleft_1;
        },
        on_finish: function(data) {
          mr_timeleft_1 -=data.rt;
          if (mr_timeleft_1 <= 0) {
            ha_timeout_status1 = 1;
          }
        },
        required: true
    };

    /* ********************************************************  FIN PAGINA 1 ******************************************************** */

    /* ********************************************************  INICIO PAGINA 2 ******************************************************** */

    var mr_trial2_a={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["7.a"], options:["<br /><img src='img/pag4_1_1.png' />","<br /><img src='img/pag4_1_2.png' />","<br /><img src='img/pag4_1_3.png' />","<br /><img src='img/pag4_1_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial2_a"},
        trial_duration: function() {
          return mr_timeleft_2;
        },
        on_finish: function(data) {
          mr_timeleft_2 -=data.rt;
          if (mr_timeleft_2 <= 0) {
            ha_timeout_status2 = 1;
          }
        },
        required: true
    };

    var mr_trial2_b={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["8.a"], options:["<br /><img src='img/pag4_2_1.png' />","<br /><img src='img/pag4_2_2.png' />","<br /><img src='img/pag4_2_3.png' />","<br /><img src='img/pag4_2_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial2_b"},
        trial_duration: function() {
          return mr_timeleft_2;
        },
        on_finish: function(data) {
          mr_timeleft_2 -=data.rt;
          if (mr_timeleft_2 <= 0) {
            ha_timeout_status2 = 1;
          }
        },
        required: true
    };

    var mr_trial2_c={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["9.a"], options:["<br /><img src='img/pag4_3_1.png' />","<br /><img src='img/pag4_3_2.png' />","<br /><img src='img/pag4_3_3.png' />","<br /><img src='img/pag4_3_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial2_c"},
        trial_duration: function() {
          return mr_timeleft_2;
        },
        on_finish: function(data) {
          mr_timeleft_2 -=data.rt;
          if (mr_timeleft_2 <= 0) {
            ha_timeout_status2 = 1;
          }
        },
        required: true
    };

    var mr_trial2_d={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["10.a"], options:["<br /><img src='img/pag4_4_1.png' />","<br /><img src='img/pag4_4_2.png' />","<br /><img src='img/pag4_4_3.png' />","<br /><img src='img/pag4_4_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial2_d"},
        trial_duration: function() {
          return mr_timeleft_2;
        },
        on_finish: function(data) {
          mr_timeleft_2 -=data.rt;
          if (mr_timeleft_2 <= 0) {
            ha_timeout_status2 = 1;
          }
        },
        required: true
    };

    var mr_trial2_e={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["11.a"], options:["<br /><img src='img/pag4_5_1.png' />","<br /><img src='img/pag4_5_2.png' />","<br /><img src='img/pag4_5_3.png' />","<br /><img src='img/pag4_5_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial2_e"},
        trial_duration: function() {
          return mr_timeleft_2;
        },
        on_finish: function(data) {
          mr_timeleft_2 -=data.rt;
          if (mr_timeleft_2 <= 0) {
            ha_timeout_status2 = 1;
          }
        },
        required: true
    };

    var mr_trial2_f={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["12.a"], options:["<br /><img src='img/pag4_6_1.png' />","<br /><img src='img/pag4_6_2.png' />","<br /><img src='img/pag4_6_3.png' />","<br /><img src='img/pag4_6_4.png' />"], horizontal: 'true'}],
        on_finish: function(){
            clearTimeout(mr_timeout_handler1);
        },
        timing_post_trial: 0,
        data: {trialid: "MR_Trial2_f"},
        trial_duration: function() {
          return mr_timeleft_2;
        },
        on_finish: function(data) {
          mr_timeleft_2 -=data.rt;
          if (mr_timeleft_2 <= 0) {
            ha_timeout_status2 = 1;
          }
        },
        required: true
    };

    /* ********************************************************  FIN PAGINA 2 ******************************************************** */

    /* ********************************************************  INICIO PAGINA 3 ******************************************************** */

    var mr_trial3_a={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["13.a"], options:["<br /><img src='img/pag5_1_1.png' />","<br /><img src='img/pag5_1_2.png' />","<br /><img src='img/pag5_1_3.png' />","<br /><img src='img/pag5_1_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial3_a"},
        trial_duration: function() {
          return mr_timeleft_3;
        },
        on_finish: function(data) {
          mr_timeleft_3 -=data.rt;
          if (mr_timeleft_3 <= 0) {
            ha_timeout_status3 = 1;
          }
        },
        required: true
    };

    var mr_trial3_b={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["14.a"], options:["<br /><img src='img/pag5_2_1.png' />","<br /><img src='img/pag5_2_2.png' />","<br /><img src='img/pag5_2_3.png' />","<br /><img src='img/pag5_2_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial3_b"},
        trial_duration: function() {
          return mr_timeleft_3;
        },
        on_finish: function(data) {
          mr_timeleft_3 -=data.rt;
          if (mr_timeleft_3 <= 0) {
            ha_timeout_status3 = 1;
          }
        },
        required: true
    };

    var mr_trial3_c={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["15.a"], options:["<br /><img src='img/pag5_3_1.png' />","<br /><img src='img/pag5_3_2.png' />","<br /><img src='img/pag5_3_3.png' />","<br /><img src='img/pag5_3_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial3_c"},
        trial_duration: function() {
          return mr_timeleft_3;
        },
        on_finish: function(data) {
          mr_timeleft_3 -=data.rt;
          if (mr_timeleft_3 <= 0) {
            ha_timeout_status3 = 1;
          }
        },
        required: true
    };

    var mr_trial3_d={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["16.a"], options:["<br /><img src='img/pag5_4_1.png' />","<br /><img src='img/pag5_4_2.png' />","<br /><img src='img/pag5_4_3.png' />","<br /><img src='img/pag5_4_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial3_d"},
        trial_duration: function() {
          return mr_timeleft_3;
        },
        on_finish: function(data) {
          mr_timeleft_3 -=data.rt;
          if (mr_timeleft_3 <= 0) {
            ha_timeout_status3 = 1;
          }
        },
        required: true
    };

    var mr_trial3_e={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["17.a"], options:["<br /><img src='img/pag5_5_1.png' />","<br /><img src='img/pag5_5_2.png' />","<br /><img src='img/pag5_5_3.png' />","<br /><img src='img/pag5_5_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial3_e"},
        trial_duration: function() {
          return mr_timeleft_3;
        },
        on_finish: function(data) {
          mr_timeleft_3 -=data.rt;
          if (mr_timeleft_3 <= 0) {
            ha_timeout_status3 = 1;
          }
        },
        required: true
    };

    var mr_trial3_f={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["18.a"], options:["<br /><img src='img/pag5_6_1.png' />","<br /><img src='img/pag5_6_2.png' />","<br /><img src='img/pag5_6_3.png' />","<br /><img src='img/pag5_6_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial3_f"},
        trial_duration: function() {
          return mr_timeleft_3;
        },
        on_finish: function(data) {
          mr_timeleft_3 -=data.rt;
          if (mr_timeleft_3 <= 0) {
            ha_timeout_status3 = 1;
          }
        },
        required: true
    };

    /* ********************************************************  FIN PAGINA 3 ******************************************************** */

    /* ********************************************************  INICIO PAGINA 4 ******************************************************** */

    var mr_trial4_a={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["19.a"], options:["<br /><img src='img/pag6_1_1.png' />","<br /><img src='img/pag6_1_2.png' />","<br /><img src='img/pag6_1_3.png' />","<br /><img src='img/pag6_1_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial4_a"},
        trial_duration: function() {
          return mr_timeleft_4;
        },
        on_finish: function(data) {
          mr_timeleft_4 -=data.rt;
          if (mr_timeleft_4 <= 0) {
            ha_timeout_status4 = 1;
          }
        },
        required: true
    };

    var mr_trial4_b={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["20.a"], options:["<br /><img src='img/pag6_2_1.png' />","<br /><img src='img/pag6_2_2.png' />","<br /><img src='img/pag6_2_3.png' />","<br /><img src='img/pag6_2_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial4_b"},
        trial_duration: function() {
          return mr_timeleft_4;
        },
        on_finish: function(data) {
          mr_timeleft_4 -=data.rt;
          if (mr_timeleft_4 <= 0) {
            ha_timeout_status4 = 1;
          }
        },
        required: true
    };

    var mr_trial4_c={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["21.a"], options:["<br /><img src='img/pag6_3_1.png' />","<br /><img src='img/pag6_3_2.png' />","<br /><img src='img/pag6_3_3.png' />","<br /><img src='img/pag6_3_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial4_c"},
        trial_duration: function() {
          return mr_timeleft_4;
        },
        on_finish: function(data) {
          mr_timeleft_4 -=data.rt;
          if (mr_timeleft_4 <= 0) {
            ha_timeout_status4 = 1;
          }
        },
        required: true
    };

    var mr_trial4_d={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["22.a"], options:["<br /><img src='img/pag6_4_1.png' />","<br /><img src='img/pag6_4_2.png' />","<br /><img src='img/pag6_4_3.png' />","<br /><img src='img/pag6_4_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial4_d"},
        trial_duration: function() {
          return mr_timeleft_4;
        },
        on_finish: function(data) {
          mr_timeleft_4 -=data.rt;
          if (mr_timeleft_4 <= 0) {
            ha_timeout_status4 = 1;
          }
        },
        required: true
    };

    var mr_trial4_e={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["23.a"], options:["<br /><img src='img/pag6_5_1.png' />","<br /><img src='img/pag6_5_2.png' />","<br /><img src='img/pag6_5_3.png' />","<br /><img src='img/pag6_5_4.png' />"], horizontal: 'true'}],
        timing_post_trial: 0,
        data: {trialid: "MR_Trial4_e"},
        trial_duration: function() {
          return mr_timeleft_4;
        },
        on_finish: function(data) {
          mr_timeleft_4 -=data.rt;
          if (mr_timeleft_4 <= 0) {
            ha_timeout_status4 = 1;
          }
        },
        required: true
    };

    var mr_trial4_f={
        type: "survey-multi-selectmr",
        questions:[{prompt: ["24.a"], options:["<br /><img src='img/pag6_6_1.png' />","<br /><img src='img/pag6_6_2.png' />","<br /><img src='img/pag6_6_3.png' />","<br /><img src='img/pag6_6_4.png' />"], horizontal: 'true'}],
        on_finish: function(){
            clearTimeout(mr_timeout_handler2);
        },
        timing_post_trial: 0,
        data: {trialid: "MR_Trial4_f"},
        trial_duration: function() {
          return mr_timeleft_4;
        },
        on_finish: function(data) {
          mr_timeleft_4 -=data.rt;
          if (mr_timeleft_4 <= 0) {
            ha_timeout_status4 = 1;
          }
        },
        required: true
    };

    /* ********************************************************  FIN PAGINA 4 ******************************************************** */
//Bloque Condicional

var mr_trial1_a_condicional = {
    timeline: [mr_trial1_a],
    conditional_function: function(){
        if(mr_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial1_b_condicional = {
    timeline: [mr_trial1_b],
    conditional_function: function(){
        if(mr_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial1_c_condicional = {
    timeline: [mr_trial1_c],
    conditional_function: function(){
        if(mr_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial1_d_condicional = {
    timeline: [mr_trial1_d],
    conditional_function: function(){
        if(mr_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial1_e_condicional = {
    timeline: [mr_trial1_e],
    conditional_function: function(){
        if(mr_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial1_f_condicional = {
    timeline: [mr_trial1_f],
    conditional_function: function(){
        if(mr_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial2_a_condicional = {
    timeline: [mr_trial2_a],
    conditional_function: function(){
        if(mr_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial2_b_condicional = {
    timeline: [mr_trial2_b],
    conditional_function: function(){
        if(mr_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial2_c_condicional = {
    timeline: [mr_trial2_c],
    conditional_function: function(){
        if(mr_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial2_d_condicional = {
    timeline: [mr_trial2_d],
    conditional_function: function(){
        if(mr_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial2_e_condicional = {
    timeline: [mr_trial2_e],
    conditional_function: function(){
        if(mr_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial2_f_condicional = {
    timeline: [mr_trial2_f],
    conditional_function: function(){
        if(mr_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial3_a_condicional = {
    timeline: [mr_trial3_a],
    conditional_function: function(){
        if(mr_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial3_b_condicional = {
    timeline: [mr_trial3_b],
    conditional_function: function(){
        if(mr_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial3_c_condicional = {
    timeline: [mr_trial3_c],
    conditional_function: function(){
        if(mr_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial3_d_condicional = {
    timeline: [mr_trial3_d],
    conditional_function: function(){
        if(mr_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial3_e_condicional = {
    timeline: [mr_trial3_e],
    conditional_function: function(){
        if(mr_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial3_f_condicional = {
    timeline: [mr_trial3_f],
    conditional_function: function(){
        if(mr_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial4_a_condicional = {
    timeline: [mr_trial4_a],
    conditional_function: function(){
        if(mr_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial4_b_condicional = {
    timeline: [mr_trial4_b],
    conditional_function: function(){
        if(mr_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial4_c_condicional = {
    timeline: [mr_trial4_c],
    conditional_function: function(){
        if(mr_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial4_d_condicional = {
    timeline: [mr_trial4_d],
    conditional_function: function(){
        if(mr_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial4_e_condicional = {
    timeline: [mr_trial4_e],
    conditional_function: function(){
        if(mr_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var mr_trial4_f_condicional = {
    timeline: [mr_trial4_f],
    conditional_function: function(){
        if(mr_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

// Creacion de timeline e inclusion de trials

rotacion_mental_experiment = [];

if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  rotacion_mental_experiment.push({
    type: 'fullscreen',
    fullscreen_mode: true
  });
}

rotacion_mental_experiment.push(mr_instruct);
rotacion_mental_experiment.push(mr_trialstarter);
rotacion_mental_experiment.push(mr_prueba1);
rotacion_mental_experiment.push(mr_prueba2_a);
rotacion_mental_experiment.push(mr_prueba2_b);
rotacion_mental_experiment.push(mr_prueba2_c);

// Pagina 1
rotacion_mental_experiment.push(mr_trial1_a_condicional);
rotacion_mental_experiment.push(mr_trial1_b_condicional);
rotacion_mental_experiment.push(mr_trial1_c_condicional);
rotacion_mental_experiment.push(mr_trial1_d_condicional);
rotacion_mental_experiment.push(mr_trial1_e_condicional);
rotacion_mental_experiment.push(mr_trial1_f_condicional);
// Pagina 2
rotacion_mental_experiment.push(mr_trial2_a_condicional);
rotacion_mental_experiment.push(mr_trial2_b_condicional);
rotacion_mental_experiment.push(mr_trial2_c_condicional);
rotacion_mental_experiment.push(mr_trial2_d_condicional);
rotacion_mental_experiment.push(mr_trial2_e_condicional);
rotacion_mental_experiment.push(mr_trial2_f_condicional);
// Pagina 3
rotacion_mental_experiment.push(mr_trial3_a_condicional);
rotacion_mental_experiment.push(mr_trial3_b_condicional);
rotacion_mental_experiment.push(mr_trial3_c_condicional);
rotacion_mental_experiment.push(mr_trial3_d_condicional);
rotacion_mental_experiment.push(mr_trial3_e_condicional);
rotacion_mental_experiment.push(mr_trial3_f_condicional);
// Pagina 4
rotacion_mental_experiment.push(mr_trial4_a_condicional);
rotacion_mental_experiment.push(mr_trial4_b_condicional);
rotacion_mental_experiment.push(mr_trial4_c_condicional);
rotacion_mental_experiment.push(mr_trial4_d_condicional);
rotacion_mental_experiment.push(mr_trial4_e_condicional);
rotacion_mental_experiment.push(mr_trial4_f_condicional);
