function getDisplayElement() {
  $('<div class = display_stage_background></div>').appendTo('body')
  return $('<div class = display_stage></div>').appendTo('body')
}

var time_left = 8000;
var time_left2 = 8000;
var time_left3 = 8000;
var time_left4 = 8000;
var time_left5 = 8000;

var ha_timeout_status1 = 0;
var ha_timeout_status2 = 0;
var ha_timeout_status3 = 0;
var ha_timeout_status4 = 0;
var ha_timeout_status5 = 0;

// Funciones de apoyo
function block_fkeys(event){
    var x = event.which || event.keyCode;
    if(x == 112 || x == 113 || x == 114 || x == 115 || x == 116 || x == 117 || x == 118 || x == 119 || x == 120 || x == 121 || x == 122 || x == 123 ){
        console.log("Blocked key");
        event.preventDefault();
        return false;
    }else{
        return;
    }
}

// Inicio prueba

var ha_explanation01 = {
    type: "instructions",
    pages: ["<div class = centerbox>"+
           "<p class = center-block-text>"+
           "A continuaci&oacute;n tendr&aacute;s que responder la mayor cantidad de operaciones matem&aacute;ticas (sumas, restas,<br />"+
           "multiplicaciones, y divisiones) en un minuto. La prueba consta de cinco tandas.<br /><br />"+
           "Para responder deber&aacute;s usar el teclado num&eacute;rico. Para avanzar al siguiente ejercicio deber&aacute;s<br />"+
           "usar la tecla enter.<br /><br />"+
           "Intenta resolver los siguientes ejercicios de prueba.<br />"+
           "Haz click en el siguiente bot&oacute;n para avanzar a los ejercicios de prueba.<br />"+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 0,
    data:{trialid: "Instructions_ha01"}
};

var ha_explanation02 = {
    type: "instructions",
    pages: ["<div class = centerbox>"+
           "<p class = center-block-text>"+
           "A continuaci&oacute;n comenzara la prueba, recuerda que debes responder todos los items que puedas<br />"+
           "en un minuto. Una vez que comience la prueba el tiempo comenzar&aacute; a correr autom&aacute;ticamente.<br />"+
           "Si el tiempo se acaba pasar&aacute;s autom&aacute;tica a la siguiente tanda.<br /><br />"+
           "Haz click en el siguiente bot&oacute;n para comenzar.<br />"+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 0,
    data:{trialid: "Instructions_ha02"}
};

/**************   INICIO Columna de Pruebas   *********/

var ha_prueba01 = {
    type: 'survey-textha',
    questions:['<p>2 + 4 = </p>'],
    data:{trialid: "Prueba_ha01"},
    timing_post_trial: 0
};

var ha_prueba02 = {
    type: 'survey-textha',
    questions:['<p>8 - 4 = </p>'],
    data:{trialid: "Prueba_ha02"},
    timing_post_trial: 0
};

var ha_prueba03 = {
    type: 'survey-textha',
    questions:['<p>2 x 2 = </p>'],
    data:{trialid: "Prueba_ha03"},
    timing_post_trial: 0
};

var ha_prueba04 = {
    type: 'survey-textha',
    questions:['<p>8 : 4 = </p>'],
    data:{trialid: "Prueba_ha04"},
    timing_post_trial: 0
};

/**************   FIN Columna de Pruebas   *********/

/**************   INICIO Pantallas Inter Columnas   *********/

var ha_intercolumna1 = {
    type: "instructions",
    pages: ["<div class = centerbox>"+
           "<p class = center-block-text>"+
           "Haz click en el siguiente bot&oacute;n para comenzar con la siguiente tanda.<br />"+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 0,
    data:{trialid: "Instructions_intercolumna"},
    on_start: function(){
      console.log("nfnfknfgnlas");
        time_left = 0;
    }
};

var ha_intercolumna2 = {
    type: "instructions",
    pages: ["<div class = centerbox>"+
           "<p class = center-block-text>"+
           "Haz click en el siguiente bot&oacute;n para comenzar con la siguiente tanda.<br />"+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 0,
    data:{trialid: "Instructions_intercolumna"},
    on_start: function(){
        time_left2 = 0;
    }
};

var ha_intercolumna3 = {
    type: "instructions",
    pages: ["<div class = centerbox>"+
           "<p class = center-block-text>"+
           "Haz click en el siguiente bot&oacute;n para comenzar con la siguiente tanda.<br />"+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 0,
    data:{trialid: "Instructions_intercolumna"},
    on_start: function(){
      console.log("nfnfknfgnlas");
        time_left3 = 0;
    }
};

var ha_intercolumna4 = {
    type: "instructions",
    pages: ["<div class = centerbox>"+
           "<p class = center-block-text>"+
           "Haz click en el siguiente bot&oacute;n para comenzar con la siguiente tanda.<br />"+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 0,
    data:{trialid: "Instructions_intercolumna"},
    on_start: function(){
      console.log("nfnfknfgnlas");
        time_left4 = 0;
    }
};

var ha_intercolumna5 = {
    type: "instructions",
    pages: ["<div class = centerbox>"+
           "<p class = center-block-text>"+
           "Haz click en el siguiente bot&oacute;n para comenzar con la siguiente tanda.<br />"+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 0,
    data:{trialid: "Instructions_intercolumna"},
    on_start: function(){
        time_left5 = 0;
    }
};

/**************   FIN Pantallas Inter Columnas   *********/

/**************   INICIO Columna 1   *********/
var aritm01={
    type: 'survey-textha',
    questions:['<p>1 + 1 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      console.log(data.rt);
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm02={
    type: 'survey-textha',
    questions:['<p>2 + 1 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm03={
    type: 'survey-textha',
    questions:['<p>3 + 0 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      console.log(data.rt);
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm04={
    type: 'survey-textha',
    questions:['<p>4 + 1 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm05={
    type: 'survey-textha',
    questions:['<p>2 + 3 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm06={
    type: 'survey-textha',
    questions:['<p>7 + 2 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm07={
    type: 'survey-textha',
    questions:['<p>3 + 5 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm08={
    type: 'survey-textha',
    questions:['<p>0 + 7 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm09={
    type: 'survey-textha',
    questions:['<p>2 + 5 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
    },
    timing_post_trial: 0
};

var aritm10={
    type: 'survey-textha',
    questions:['<p>4 + 6 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm11={
    type: 'survey-textha',
    questions:['<p>6 + 3 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm12={
    type: 'survey-textha',
    questions:['<p>4 + 3 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm13={
    type: 'survey-textha',
    questions:['<p>8 + 2 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm14={
    type: 'survey-textha',
    questions:['<p>3 + 6 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm15={
    type: 'survey-textha',
    questions:['<p>5 + 2 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm16={
    type: 'survey-textha',
    questions:['<p>3 + 8 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm17={
    type: 'survey-textha',
    questions:['<p>5 + 7 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm18={
    type: 'survey-textha',
    questions:['<p>2 + 6 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm19={
    type: 'survey-textha',
    questions:['<p>7 + 5 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm20={
    type: 'survey-textha',
    questions:['<p>9 + 4 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm21={
    type: 'survey-textha',
    questions:['<p>13 + 4 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm22={
    type: 'survey-textha',
    questions:['<p>7 + 12 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm23={
    type: 'survey-textha',
    questions:['<p>16 + 8 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm24={
    type: 'survey-textha',
    questions:['<p>4 + 15 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm25={
    type: 'survey-textha',
    questions:['<p>17 + 3 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm26={
    type: 'survey-textha',
    questions:['<p>6 + 15 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm27={
    type: 'survey-textha',
    questions:['<p>18 + 5 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm28={
    type: 'survey-textha',
    questions:['<p>3 + 14 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm29={
    type: 'survey-textha',
    questions:['<p>17 + 8 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm30={
    type: 'survey-textha',
    questions:['<p>7 + 16 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm31={
    type: 'survey-textha',
    questions:['<p>17 + 16 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm32={
    type: 'survey-textha',
    questions:['<p>22 + 13 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm33={
    type: 'survey-textha',
    questions:['<p>19 + 32 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm34={
    type: 'survey-textha',
    questions:['<p>34 + 15 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm35={
    type: 'survey-textha',
    questions:['<p>28 + 27 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm36={
    type: 'survey-textha',
    questions:['<p>23 + 38 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm37={
    type: 'survey-textha',
    questions:['<p>39 + 46 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm38={
    type: 'survey-textha',
    questions:['<p>65 + 33 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm39={
    type: 'survey-textha',
    questions:['<p>76 + 18 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm40={
    type: 'survey-textha',
    questions:['<p>54 + 27 = </p>'],
    timing_response: function() {
      return time_left;
    },
    on_finish: function(data) {
      time_left = time_left - data.rt;
      if (time_left <= 0) {
        ha_timeout_status1 = 1;
      }
      alert("HA timeout status1 "+ha_timeout_status1);
      alert("HA timeout status2 "+ha_timeout_status2);
      alert("HA timeout status3 "+ha_timeout_status3);
      alert("HA timeout status4 "+ha_timeout_status4);
      alert("HA timeout status5 "+ha_timeout_status5);
    },
    timing_post_trial: 1000
};

/**************   FIN Columna 1   *********/

/**************   INICIO Columna 2   *********/

var aritm41={
    type: 'survey-textha',
    questions:['<p>2 - 1 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm42={
    type: 'survey-textha',
    questions:['<p>3 - 2 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm43={
    type: 'survey-textha',
    questions:['<p>4 - 0 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm44={
    type: 'survey-textha',
    questions:['<p>3 - 0 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm45={
    type: 'survey-textha',
    questions:['<p>5 - 2 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm46={
    type: 'survey-textha',
    questions:['<p>8 - 3 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm47={
    type: 'survey-textha',
    questions:['<p>6 - 0 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm48={
    type: 'survey-textha',
    questions:['<p>9 - 2 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm49={
    type: 'survey-textha',
    questions:['<p>7 - 5 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm50={
    type: 'survey-textha',
    questions:['<p>8 - 6 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm51={
    type: 'survey-textha',
    questions:['<p>7 - 4 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm52={
    type: 'survey-textha',
    questions:['<p>8 - 7 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm53={
    type: 'survey-textha',
    questions:['<p>7 - 5 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm54={
    type: 'survey-textha',
    questions:['<p>8 - 3 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm55={
    type: 'survey-textha',
    questions:['<p>6 - 5 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm56={
    type: 'survey-textha',
    questions:['<p>15 - 3 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm57={
    type: 'survey-textha',
    questions:['<p>13 - 7 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm58={
    type: 'survey-textha',
    questions:['<p>18 - 6 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm59={
    type: 'survey-textha',
    questions:['<p>16 - 9 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm60={
    type: 'survey-textha',
    questions:['<p>17 - 4 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm61={
    type: 'survey-textha',
    questions:['<p>18 - 6 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm62={
    type: 'survey-textha',
    questions:['<p>15 - 3 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm63={
    type: 'survey-textha',
    questions:['<p>16 - 8 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm64={
    type: 'survey-textha',
    questions:['<p>13 - 2 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm65={
    type: 'survey-textha',
    questions:['<p>19 - 7 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm66={
    type: 'survey-textha',
    questions:['<p>28 - 5 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm67={
    type: 'survey-textha',
    questions:['<p>21 - 9 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm68={
    type: 'survey-textha',
    questions:['<p>27 - 7 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm69={
    type: 'survey-textha',
    questions:['<p>25 - 8 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm70={
    type: 'survey-textha',
    questions:['<p>26 - 9 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm71={
    type: 'survey-textha',
    questions:['<p>35 - 17 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm72={
    type: 'survey-textha',
    questions:['<p>48 - 23 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm73={
    type: 'survey-textha',
    questions:['<p>26 - 19 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm74={
    type: 'survey-textha',
    questions:['<p>44 - 32 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm75={
    type: 'survey-textha',
    questions:['<p>23 - 18 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm76={
    type: 'survey-textha',
    questions:['<p>73 - 48 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm77={
    type: 'survey-textha',
    questions:['<p>54 - 37 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm78={
    type: 'survey-textha',
    questions:['<p>87 - 43 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm79={
    type: 'survey-textha',
    questions:['<p>67 - 49 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm80={
    type: 'survey-textha',
    questions:['<p>43 - 27 = </p>'],
    timing_response: function() {
      return time_left2;
    },
    on_finish: function(data) {
      time_left2 = time_left2 - data.rt;
      if (time_left2 <= 0) {
        ha_timeout_status2 = 1;
      }
    },
    timing_post_trial: 1000
};

/**************   FIN Columna 2   *********/

/**************   INICIO Columna 3   *********/

var aritm81={
    type: 'survey-textha',
    questions:['<p>1 x 4 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm82={
    type: 'survey-textha',
    questions:['<p>2 x 2 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm83={
    type: 'survey-textha',
    questions:['<p>1 x 7 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm84={
    type: 'survey-textha',
    questions:['<p>0 x 5 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm85={
    type: 'survey-textha',
    questions:['<p>8 x 1 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm86={
    type: 'survey-textha',
    questions:['<p>3 x 10 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm87={
    type: 'survey-textha',
    questions:['<p>2 x 9 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm88={
    type: 'survey-textha',
    questions:['<p>4 x 4 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm89={
    type: 'survey-textha',
    questions:['<p>5 x 8 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm90={
    type: 'survey-textha',
    questions:['<p>6 x 0 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm91={
    type: 'survey-textha',
    questions:['<p>10 x 4 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm92={
    type: 'survey-textha',
    questions:['<p>3 x 3 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm93={
    type: 'survey-textha',
    questions:['<p>6 x 3 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm94={
    type: 'survey-textha',
    questions:['<p>7 x 3 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm95={
    type: 'survey-textha',
    questions:['<p>2 x 8 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm96={
    type: 'survey-textha',
    questions:['<p>6 x 6 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm97={
    type: 'survey-textha',
    questions:['<p>4 x 5 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm98={
    type: 'survey-textha',
    questions:['<p>8 x 4 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm99={
    type: 'survey-textha',
    questions:['<p>5 x 9 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm100={
    type: 'survey-textha',
    questions:['<p>7 x 6 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm101={
    type: 'survey-textha',
    questions:['<p>8 x 9 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm102={
    type: 'survey-textha',
    questions:['<p>4 x 7 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm103={
    type: 'survey-textha',
    questions:['<p>8 x 8 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm104={
    type: 'survey-textha',
    questions:['<p>7 x 8 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm105={
    type: 'survey-textha',
    questions:['<p>6 x 5 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm106={
    type: 'survey-textha',
    questions:['<p>12 x 4 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm107={
    type: 'survey-textha',
    questions:['<p>13 x 3 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm108={
    type: 'survey-textha',
    questions:['<p>7 x 7 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm109={
    type: 'survey-textha',
    questions:['<p>2 x 14 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm110={
    type: 'survey-textha',
    questions:['<p>4 x 16 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm111={
    type: 'survey-textha',
    questions:['<p>11 x 6 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm112={
    type: 'survey-textha',
    questions:['<p>7 x 12 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm113={
    type: 'survey-textha',
    questions:['<p>23 x 3 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm114={
    type: 'survey-textha',
    questions:['<p>9 x 9 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm115={
    type: 'survey-textha',
    questions:['<p>17 x 4 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm116={
    type: 'survey-textha',
    questions:['<p>4 x 23 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm117={
    type: 'survey-textha',
    questions:['<p>16 x 4 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm118={
    type: 'survey-textha',
    questions:['<p>2 x 36 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm119={
    type: 'survey-textha',
    questions:['<p>28 x 3 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm120={
    type: 'survey-textha',
    questions:['<p>5 x 17 = </p>'],
    timing_response: function() {
      return time_left3;
    },
    on_finish: function(data) {
      time_left3 = time_left3 - data.rt;
      if (time_left3 <= 0) {
        ha_timeout_status3 = 1;
      }
    },
    timing_post_trial: 1000
};

/**************   FIN Columna 3   *********/

/**************   INICIO Columna 4   *********/

var aritm121={
    type: 'survey-textha',
    questions:['<p>4 : 2 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm122={
    type: 'survey-textha',
    questions:['<p>5 : 1 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm123={
    type: 'survey-textha',
    questions:['<p>12 : 2 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm124={
    type: 'survey-textha',
    questions:['<p>15 : 3 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm125={
    type: 'survey-textha',
    questions:['<p>10 : 5 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm126={
    type: 'survey-textha',
    questions:['<p>6 : 3 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm127={
    type: 'survey-textha',
    questions:['<p>20 : 2 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm128={
    type: 'survey-textha',
    questions:['<p>24 : 3 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm129={
    type: 'survey-textha',
    questions:['<p>36 : 6 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm130={
    type: 'survey-textha',
    questions:['<p>9 : 3 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm131={
    type: 'survey-textha',
    questions:['<p>24 : 6 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm132={
    type: 'survey-textha',
    questions:['<p>18 : 2 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm133={
    type: 'survey-textha',
    questions:['<p>35 : 5 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm134={
    type: 'survey-textha',
    questions:['<p>27 : 9 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm135={
    type: 'survey-textha',
    questions:['<p>16 : 4 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm136={
    type: 'survey-textha',
    questions:['<p>49 : 7 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm137={
    type: 'survey-textha',
    questions:['<p>27 : 3 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm138={
    type: 'survey-textha',
    questions:['<p>35 : 5 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm139={
    type: 'survey-textha',
    questions:['<p>63 : 9 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm140={
    type: 'survey-textha',
    questions:['<p>64 : 8 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm141={
    type: 'survey-textha',
    questions:['<p>45 : 5 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm142={
    type: 'survey-textha',
    questions:['<p>24 : 8 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm143={
    type: 'survey-textha',
    questions:['<p>28 : 4 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm144={
    type: 'survey-textha',
    questions:['<p>81 : 9 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm145={
    type: 'survey-textha',
    questions:['<p>18 : 6 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm146={
    type: 'survey-textha',
    questions:['<p>24 : 2 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm147={
    type: 'survey-textha',
    questions:['<p>44 : 4 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm148={
    type: 'survey-textha',
    questions:['<p>39 : 13 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm149={
    type: 'survey-textha',
    questions:['<p>60 : 5 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm150={
    type: 'survey-textha',
    questions:['<p>36 : 2 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm151={
    type: 'survey-textha',
    questions:['<p>48 : 4 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm152={
    type: 'survey-textha',
    questions:['<p>60 : 15 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm153={
    type: 'survey-textha',
    questions:['<p>56 : 4 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm154={
    type: 'survey-textha',
    questions:['<p>80 : 20 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm155={
    type: 'survey-textha',
    questions:['<p>72 : 6 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm156={
    type: 'survey-textha',
    questions:['<p>48 : 12 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm157={
    type: 'survey-textha',
    questions:['<p>75 : 25 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm158={
    type: 'survey-textha',
    questions:['<p>52 : 13 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm159={
    type: 'survey-textha',
    questions:['<p>90 : 30 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm160={
    type: 'survey-textha',
    questions:['<p>45 : 15 = </p>'],
    timing_response: function() {
      return time_left4;
    },
    on_finish: function(data) {
      time_left4 = time_left4 - data.rt;
      if (time_left4 <= 0) {
        ha_timeout_status4 = 1;
      }
    },
    timing_post_trial: 1000
};

/**************   FIN Columna 4   *********/

/**************   INICIO Columna 5   *********/

var aritm161={
    type: 'survey-textha',
    questions:['<p>2 + 1 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm162={
    type: 'survey-textha',
    questions:['<p>2 - 1 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm163={
    type: 'survey-textha',
    questions:['<p>2 x 5 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm164={
    type: 'survey-textha',
    questions:['<p>4 : 2 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm165={
    type: 'survey-textha',
    questions:['<p>3 + 2 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm166={
    type: 'survey-textha',
    questions:['<p>8 - 4 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm167={
    type: 'survey-textha',
    questions:['<p>9 : 3 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm168={
    type: 'survey-textha',
    questions:['<p>4 x 5 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm169={
    type: 'survey-textha',
    questions:['<p>7 + 2 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm170={
    type: 'survey-textha',
    questions:['<p>9 - 5 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm171={
    type: 'survey-textha',
    questions:['<p>15 : 5 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm172={
    type: 'survey-textha',
    questions:['<p>3 x 9 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm173={
    type: 'survey-textha',
    questions:['<p>10 - 3 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm174={
    type: 'survey-textha',
    questions:['<p>5 + 4 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm175={
    type: 'survey-textha',
    questions:['<p>5 x 5 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm176={
    type: 'survey-textha',
    questions:['<p>8 + 5 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm177={
    type: 'survey-textha',
    questions:['<p>24 : 4 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm178={
    type: 'survey-textha',
    questions:['<p>13 - 5 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm179={
    type: 'survey-textha',
    questions:['<p>7 x 4 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm180={
    type: 'survey-textha',
    questions:['<p>9 : 3 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm181={
    type: 'survey-textha',
    questions:['<p>17 - 6 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm182={
    type: 'survey-textha',
    questions:['<p>8 x 6 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm183={
    type: 'survey-textha',
    questions:['<p>6 + 13 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm184={
    type: 'survey-textha',
    questions:['<p>18 : 3 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm185={
    type: 'survey-textha',
    questions:['<p>19 - 4 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm186={
    type: 'survey-textha',
    questions:['<p>24 - 6 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm187={
    type: 'survey-textha',
    questions:['<p>15 + 7 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm188={
    type: 'survey-textha',
    questions:['<p>4 x 13 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm189={
    type: 'survey-textha',
    questions:['<p>33 : 11 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm190={
    type: 'survey-textha',
    questions:['<p>3 + 19 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm191={
    type: 'survey-textha',
    questions:['<p>36 : 3 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm192={
    type: 'survey-textha',
    questions:['<p>6 x 14 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm193={
    type: 'survey-textha',
    questions:['<p>43 - 16 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm194={
    type: 'survey-textha',
    questions:['<p>4 x 16 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm195={
    type: 'survey-textha',
    questions:['<p>37 + 28 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm196={
    type: 'survey-textha',
    questions:['<p>37 - 29 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm197={
    type: 'survey-textha',
    questions:['<p>42 : 14 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm198={
    type: 'survey-textha',
    questions:['<p>5 x 12 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm199={
    type: 'survey-textha',
    questions:['<p>67 + 24 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

var aritm200={
    type: 'survey-textha',
    questions:['<p>64 : 32 = </p>'],
    timing_response: function() {
      return time_left5;
    },
    on_finish: function(data) {
      time_left5 = time_left5 - data.rt;
      if (time_left5 <= 0) {
        ha_timeout_status5 = 1;
      }
    },
    timing_post_trial: 0
};

/**************   FIN Columna 5   *********/

/**************   Inicio Condiciones HA   *********/

/* Inicio condiciones columna 1 */

var ha_condicional01 = {
    timeline: [aritm02],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional02 = {
    timeline: [aritm03],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional03 = {
    timeline: [aritm04],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional04 = {
    timeline: [aritm05],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional05 = {
    timeline: [aritm06],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional06 = {
    timeline: [aritm07],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional07 = {
    timeline: [aritm08],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional08 = {
    timeline: [aritm09],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional09 = {
    timeline: [aritm10],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional10 = {
    timeline: [aritm11],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional11 = {
    timeline: [aritm12],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional12 = {
    timeline: [aritm13],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional13 = {
    timeline: [aritm14],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional14 = {
    timeline: [aritm15],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional15 = {
    timeline: [aritm16],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional16 = {
    timeline: [aritm17],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional17 = {
    timeline: [aritm18],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional18 = {
    timeline: [aritm19],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional19 = {
    timeline: [aritm20],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional20 = {
    timeline: [aritm21],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional21 = {
    timeline: [aritm22],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional22 = {
    timeline: [aritm23],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional23 = {
    timeline: [aritm24],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional24 = {
    timeline: [aritm25],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional25 = {
    timeline: [aritm26],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional26 = {
    timeline: [aritm27],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional27 = {
    timeline: [aritm28],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional28 = {
    timeline: [aritm29],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional29 = {
    timeline: [aritm30],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional30 = {
    timeline: [aritm31],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional31 = {
    timeline: [aritm32],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional32 = {
    timeline: [aritm33],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional33 = {
    timeline: [aritm34],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional34 = {
    timeline: [aritm35],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional35 = {
    timeline: [aritm36],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional36 = {
    timeline: [aritm37],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional37 = {
    timeline: [aritm38],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional38 = {
    timeline: [aritm39],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional39 = {
    timeline: [aritm40],
    conditional_function: function(){
        if(ha_timeout_status1 == 1){
            return false;
        } else {
            return true;
        }
    }
};

/* Inicio condiciones Columna 2*/

var ha_condicional40 = {
    timeline: [aritm41],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional41 = {
    timeline: [aritm42],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional42 = {
    timeline: [aritm43],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional43 = {
    timeline: [aritm44],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional44 = {
    timeline: [aritm45],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional45 = {
    timeline: [aritm46],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional46 = {
    timeline: [aritm47],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional47 = {
    timeline: [aritm48],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional48 = {
    timeline: [aritm49],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional49 = {
    timeline: [aritm50],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional50 = {
    timeline: [aritm51],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional51 = {
    timeline: [aritm52],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional52 = {
    timeline: [aritm53],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional53 = {
    timeline: [aritm54],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional54 = {
    timeline: [aritm55],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional55 = {
    timeline: [aritm56],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional56 = {
    timeline: [aritm57],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional57 = {
    timeline: [aritm58],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional58 = {
    timeline: [aritm59],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional59 = {
    timeline: [aritm60],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional60 = {
    timeline: [aritm61],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional61 = {
    timeline: [aritm62],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional62 = {
    timeline: [aritm63],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional63 = {
    timeline: [aritm64],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional64 = {
    timeline: [aritm65],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional65 = {
    timeline: [aritm66],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional66 = {
    timeline: [aritm67],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional67 = {
    timeline: [aritm68],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional68 = {
    timeline: [aritm69],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional69 = {
    timeline: [aritm70],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional70 = {
    timeline: [aritm71],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional71 = {
    timeline: [aritm72],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional72 = {
    timeline: [aritm73],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional73 = {
    timeline: [aritm74],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional74 = {
    timeline: [aritm75],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional75 = {
    timeline: [aritm76],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional76 = {
    timeline: [aritm77],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional77 = {
    timeline: [aritm78],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional78 = {
    timeline: [aritm79],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional79 = {
    timeline: [aritm80],
    conditional_function: function(){
        if(ha_timeout_status2 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional80 = {
    timeline: [aritm81],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional81 = {
    timeline: [aritm82],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional82 = {
    timeline: [aritm83],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional83 = {
    timeline: [aritm84],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional84 = {
    timeline: [aritm85],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional85 = {
    timeline: [aritm86],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional86 = {
    timeline: [aritm87],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional87 = {
    timeline: [aritm88],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional88 = {
    timeline: [aritm89],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional89 = {
    timeline: [aritm90],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional90 = {
    timeline: [aritm91],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional91 = {
    timeline: [aritm92],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional92 = {
    timeline: [aritm93],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional93 = {
    timeline: [aritm94],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional94 = {
    timeline: [aritm95],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional95 = {
    timeline: [aritm96],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional96 = {
    timeline: [aritm97],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional97 = {
    timeline: [aritm98],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional98 = {
    timeline: [aritm99],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional99 = {
    timeline: [aritm100],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional100 = {
    timeline: [aritm101],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional101 = {
    timeline: [aritm102],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional102 = {
    timeline: [aritm103],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional103 = {
    timeline: [aritm104],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional104 = {
    timeline: [aritm105],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional105 = {
    timeline: [aritm106],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional106 = {
    timeline: [aritm107],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional107 = {
    timeline: [aritm108],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional108 = {
    timeline: [aritm109],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional109 = {
    timeline: [aritm110],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional110 = {
    timeline: [aritm111],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional111 = {
    timeline: [aritm112],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional112 = {
    timeline: [aritm113],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional113 = {
    timeline: [aritm114],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional114 = {
    timeline: [aritm115],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional115 = {
    timeline: [aritm116],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional116 = {
    timeline: [aritm117],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional117 = {
    timeline: [aritm118],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional118 = {
    timeline: [aritm119],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional119 = {
    timeline: [aritm120],
    conditional_function: function(){
        if(ha_timeout_status3 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional120 = {
    timeline: [aritm121],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional121 = {
    timeline: [aritm122],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional122 = {
    timeline: [aritm123],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional123 = {
    timeline: [aritm124],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional124 = {
    timeline: [aritm125],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional125 = {
    timeline: [aritm126],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional126 = {
    timeline: [aritm127],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional127 = {
    timeline: [aritm128],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional128 = {
    timeline: [aritm129],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional129 = {
    timeline: [aritm130],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional130 = {
    timeline: [aritm131],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional131 = {
    timeline: [aritm132],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional132 = {
    timeline: [aritm133],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional133 = {
    timeline: [aritm134],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional134 = {
    timeline: [aritm135],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional135 = {
    timeline: [aritm136],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional136 = {
    timeline: [aritm137],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional137 = {
    timeline: [aritm138],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional138 = {
    timeline: [aritm139],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional139 = {
    timeline: [aritm140],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional140 = {
    timeline: [aritm141],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional141 = {
    timeline: [aritm142],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional142 = {
    timeline: [aritm143],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional143 = {
    timeline: [aritm144],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional144 = {
    timeline: [aritm145],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional145 = {
    timeline: [aritm146],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional146 = {
    timeline: [aritm147],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional147 = {
    timeline: [aritm148],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional148 = {
    timeline: [aritm149],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional149 = {
    timeline: [aritm150],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional150 = {
    timeline: [aritm151],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional151 = {
    timeline: [aritm152],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional152 = {
    timeline: [aritm153],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional153 = {
    timeline: [aritm154],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional154 = {
    timeline: [aritm155],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional155 = {
    timeline: [aritm156],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional156 = {
    timeline: [aritm157],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional157 = {
    timeline: [aritm158],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional158 = {
    timeline: [aritm159],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional159 = {
    timeline: [aritm160],
    conditional_function: function(){
        if(ha_timeout_status4 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional160 = {
    timeline: [aritm161],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional161 = {
    timeline: [aritm162],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional162 = {
    timeline: [aritm163],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional163 = {
    timeline: [aritm164],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional164 = {
    timeline: [aritm165],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional165 = {
    timeline: [aritm166],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional166 = {
    timeline: [aritm167],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional167 = {
    timeline: [aritm168],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional168 = {
    timeline: [aritm169],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional169 = {
    timeline: [aritm170],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional170 = {
    timeline: [aritm171],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional171 = {
    timeline: [aritm172],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional172 = {
    timeline: [aritm173],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional173 = {
    timeline: [aritm174],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional174 = {
    timeline: [aritm175],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional175 = {
    timeline: [aritm176],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional176 = {
    timeline: [aritm177],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional177 = {
    timeline: [aritm178],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional178 = {
    timeline: [aritm179],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional179 = {
    timeline: [aritm180],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional180 = {
    timeline: [aritm181],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional181 = {
    timeline: [aritm182],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional182 = {
    timeline: [aritm183],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional183 = {
    timeline: [aritm184],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional184 = {
    timeline: [aritm185],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional185 = {
    timeline: [aritm186],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional186 = {
    timeline: [aritm187],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional187 = {
    timeline: [aritm188],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional188 = {
    timeline: [aritm189],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional189 = {
    timeline: [aritm190],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional190 = {
    timeline: [aritm191],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional191 = {
    timeline: [aritm192],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional192 = {
    timeline: [aritm193],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional193 = {
    timeline: [aritm194],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional194 = {
    timeline: [aritm195],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional195 = {
    timeline: [aritm196],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional196 = {
    timeline: [aritm197],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional197 = {
    timeline: [aritm198],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional198 = {
    timeline: [aritm199],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

var ha_condicional199 = {
    timeline: [aritm200],
    conditional_function: function(){
        if(ha_timeout_status5 == 1){
            return false;
        } else {
            return true;
        }
    }
};

/**************   FIN Condiciones HA   *********/

function advance(event){
    $("textarea").keydown(function(event){
        console.log(event.keyCode);
        if (event.keyCode == 13) {
            console.log("User pressed enter. Clicking continue button");
            var btn = document.getElementById("jspsych-survey-textha-next");
            btn.click();
            //event.preventDefault();
        }
    });
}

// Creacion de timeline e inclusion de trials
habilidad_matematica_experiment = [];

/* Trial de Prueba */
habilidad_matematica_experiment.push(ha_explanation01);
habilidad_matematica_experiment.push(ha_prueba01);
habilidad_matematica_experiment.push(ha_prueba02);
habilidad_matematica_experiment.push(ha_prueba03);
habilidad_matematica_experiment.push(ha_prueba04);
habilidad_matematica_experiment.push(ha_explanation02);

/* Columna 1 */
habilidad_matematica_experiment.push(aritm01);
habilidad_matematica_experiment.push(ha_condicional01);
habilidad_matematica_experiment.push(ha_condicional02);
habilidad_matematica_experiment.push(ha_condicional03);
habilidad_matematica_experiment.push(ha_condicional04);
habilidad_matematica_experiment.push(ha_condicional05);
habilidad_matematica_experiment.push(ha_condicional06);
habilidad_matematica_experiment.push(ha_condicional07);
habilidad_matematica_experiment.push(ha_condicional08);
habilidad_matematica_experiment.push(ha_condicional09);
habilidad_matematica_experiment.push(ha_condicional10);
habilidad_matematica_experiment.push(ha_condicional11);
habilidad_matematica_experiment.push(ha_condicional12);
habilidad_matematica_experiment.push(ha_condicional13);
habilidad_matematica_experiment.push(ha_condicional14);
habilidad_matematica_experiment.push(ha_condicional15);
habilidad_matematica_experiment.push(ha_condicional16);
habilidad_matematica_experiment.push(ha_condicional17);
habilidad_matematica_experiment.push(ha_condicional18);
habilidad_matematica_experiment.push(ha_condicional19);
habilidad_matematica_experiment.push(ha_condicional20);
habilidad_matematica_experiment.push(ha_condicional21);
habilidad_matematica_experiment.push(ha_condicional22);
habilidad_matematica_experiment.push(ha_condicional23);
habilidad_matematica_experiment.push(ha_condicional24);
habilidad_matematica_experiment.push(ha_condicional25);
habilidad_matematica_experiment.push(ha_condicional26);
habilidad_matematica_experiment.push(ha_condicional27);
habilidad_matematica_experiment.push(ha_condicional28);
habilidad_matematica_experiment.push(ha_condicional29);
habilidad_matematica_experiment.push(ha_condicional30);
habilidad_matematica_experiment.push(ha_condicional31);
habilidad_matematica_experiment.push(ha_condicional32);
habilidad_matematica_experiment.push(ha_condicional33);
habilidad_matematica_experiment.push(ha_condicional34);
habilidad_matematica_experiment.push(ha_condicional35);
habilidad_matematica_experiment.push(ha_condicional36);
habilidad_matematica_experiment.push(ha_condicional37);
habilidad_matematica_experiment.push(ha_condicional38);
habilidad_matematica_experiment.push(ha_condicional39);

habilidad_matematica_experiment.push(ha_intercolumna1);

/* Columna 2 */
habilidad_matematica_experiment.push(ha_condicional40);
habilidad_matematica_experiment.push(ha_condicional41);
habilidad_matematica_experiment.push(ha_condicional42);
habilidad_matematica_experiment.push(ha_condicional43);
habilidad_matematica_experiment.push(ha_condicional44);
habilidad_matematica_experiment.push(ha_condicional45);
habilidad_matematica_experiment.push(ha_condicional46);
habilidad_matematica_experiment.push(ha_condicional47);
habilidad_matematica_experiment.push(ha_condicional48);
habilidad_matematica_experiment.push(ha_condicional49);
habilidad_matematica_experiment.push(ha_condicional50);
habilidad_matematica_experiment.push(ha_condicional51);
habilidad_matematica_experiment.push(ha_condicional52);
habilidad_matematica_experiment.push(ha_condicional53);
habilidad_matematica_experiment.push(ha_condicional54);
habilidad_matematica_experiment.push(ha_condicional55);
habilidad_matematica_experiment.push(ha_condicional56);
habilidad_matematica_experiment.push(ha_condicional57);
habilidad_matematica_experiment.push(ha_condicional58);
habilidad_matematica_experiment.push(ha_condicional59);
habilidad_matematica_experiment.push(ha_condicional60);
habilidad_matematica_experiment.push(ha_condicional61);
habilidad_matematica_experiment.push(ha_condicional62);
habilidad_matematica_experiment.push(ha_condicional63);
habilidad_matematica_experiment.push(ha_condicional64);
habilidad_matematica_experiment.push(ha_condicional65);
habilidad_matematica_experiment.push(ha_condicional66);
habilidad_matematica_experiment.push(ha_condicional67);
habilidad_matematica_experiment.push(ha_condicional68);
habilidad_matematica_experiment.push(ha_condicional69);
habilidad_matematica_experiment.push(ha_condicional70);
habilidad_matematica_experiment.push(ha_condicional71);
habilidad_matematica_experiment.push(ha_condicional72);
habilidad_matematica_experiment.push(ha_condicional73);
habilidad_matematica_experiment.push(ha_condicional74);
habilidad_matematica_experiment.push(ha_condicional75);
habilidad_matematica_experiment.push(ha_condicional76);
habilidad_matematica_experiment.push(ha_condicional77);
habilidad_matematica_experiment.push(ha_condicional78);
habilidad_matematica_experiment.push(ha_condicional79);

habilidad_matematica_experiment.push(ha_intercolumna2);
/* Columna 3 */
habilidad_matematica_experiment.push(ha_condicional80);
habilidad_matematica_experiment.push(ha_condicional81);
habilidad_matematica_experiment.push(ha_condicional82);
habilidad_matematica_experiment.push(ha_condicional83);
habilidad_matematica_experiment.push(ha_condicional84);
habilidad_matematica_experiment.push(ha_condicional85);
habilidad_matematica_experiment.push(ha_condicional86);
habilidad_matematica_experiment.push(ha_condicional87);
habilidad_matematica_experiment.push(ha_condicional88);
habilidad_matematica_experiment.push(ha_condicional89);
habilidad_matematica_experiment.push(ha_condicional90);
habilidad_matematica_experiment.push(ha_condicional91);
habilidad_matematica_experiment.push(ha_condicional92);
habilidad_matematica_experiment.push(ha_condicional93);
habilidad_matematica_experiment.push(ha_condicional94);
habilidad_matematica_experiment.push(ha_condicional95);
habilidad_matematica_experiment.push(ha_condicional96);
habilidad_matematica_experiment.push(ha_condicional97);
habilidad_matematica_experiment.push(ha_condicional98);
habilidad_matematica_experiment.push(ha_condicional99);
habilidad_matematica_experiment.push(ha_condicional100);
habilidad_matematica_experiment.push(ha_condicional101);
habilidad_matematica_experiment.push(ha_condicional102);
habilidad_matematica_experiment.push(ha_condicional103);
habilidad_matematica_experiment.push(ha_condicional104);
habilidad_matematica_experiment.push(ha_condicional105);
habilidad_matematica_experiment.push(ha_condicional106);
habilidad_matematica_experiment.push(ha_condicional107);
habilidad_matematica_experiment.push(ha_condicional108);
habilidad_matematica_experiment.push(ha_condicional109);
habilidad_matematica_experiment.push(ha_condicional110);
habilidad_matematica_experiment.push(ha_condicional111);
habilidad_matematica_experiment.push(ha_condicional112);
habilidad_matematica_experiment.push(ha_condicional113);
habilidad_matematica_experiment.push(ha_condicional114);
habilidad_matematica_experiment.push(ha_condicional115);
habilidad_matematica_experiment.push(ha_condicional116);
habilidad_matematica_experiment.push(ha_condicional117);
habilidad_matematica_experiment.push(ha_condicional118);
habilidad_matematica_experiment.push(ha_condicional119);


habilidad_matematica_experiment.push(ha_intercolumna3);
/* Columna 4 */
habilidad_matematica_experiment.push(ha_condicional120);
habilidad_matematica_experiment.push(ha_condicional121);
habilidad_matematica_experiment.push(ha_condicional122);
habilidad_matematica_experiment.push(ha_condicional123);
habilidad_matematica_experiment.push(ha_condicional124);
habilidad_matematica_experiment.push(ha_condicional125);
habilidad_matematica_experiment.push(ha_condicional126);
habilidad_matematica_experiment.push(ha_condicional127);
habilidad_matematica_experiment.push(ha_condicional128);
habilidad_matematica_experiment.push(ha_condicional129);
habilidad_matematica_experiment.push(ha_condicional130);
habilidad_matematica_experiment.push(ha_condicional131);
habilidad_matematica_experiment.push(ha_condicional132);
habilidad_matematica_experiment.push(ha_condicional133);
habilidad_matematica_experiment.push(ha_condicional134);
habilidad_matematica_experiment.push(ha_condicional135);
habilidad_matematica_experiment.push(ha_condicional136);
habilidad_matematica_experiment.push(ha_condicional137);
habilidad_matematica_experiment.push(ha_condicional138);
habilidad_matematica_experiment.push(ha_condicional139);
habilidad_matematica_experiment.push(ha_condicional140);
habilidad_matematica_experiment.push(ha_condicional141);
habilidad_matematica_experiment.push(ha_condicional142);
habilidad_matematica_experiment.push(ha_condicional143);
habilidad_matematica_experiment.push(ha_condicional144);
habilidad_matematica_experiment.push(ha_condicional145);
habilidad_matematica_experiment.push(ha_condicional146);
habilidad_matematica_experiment.push(ha_condicional147);
habilidad_matematica_experiment.push(ha_condicional148);
habilidad_matematica_experiment.push(ha_condicional149);
habilidad_matematica_experiment.push(ha_condicional150);
habilidad_matematica_experiment.push(ha_condicional151);
habilidad_matematica_experiment.push(ha_condicional152);
habilidad_matematica_experiment.push(ha_condicional153);
habilidad_matematica_experiment.push(ha_condicional154);
habilidad_matematica_experiment.push(ha_condicional155);
habilidad_matematica_experiment.push(ha_condicional156);
habilidad_matematica_experiment.push(ha_condicional157);
habilidad_matematica_experiment.push(ha_condicional158);
habilidad_matematica_experiment.push(ha_condicional159);

habilidad_matematica_experiment.push(ha_intercolumna4);
/* Columna 5 */
habilidad_matematica_experiment.push(ha_condicional160);
habilidad_matematica_experiment.push(ha_condicional161);
habilidad_matematica_experiment.push(ha_condicional162);
habilidad_matematica_experiment.push(ha_condicional163);
habilidad_matematica_experiment.push(ha_condicional164);
habilidad_matematica_experiment.push(ha_condicional165);
habilidad_matematica_experiment.push(ha_condicional166);
habilidad_matematica_experiment.push(ha_condicional167);
habilidad_matematica_experiment.push(ha_condicional168);
habilidad_matematica_experiment.push(ha_condicional169);
habilidad_matematica_experiment.push(ha_condicional170);
habilidad_matematica_experiment.push(ha_condicional171);
habilidad_matematica_experiment.push(ha_condicional172);
habilidad_matematica_experiment.push(ha_condicional173);
habilidad_matematica_experiment.push(ha_condicional174);
habilidad_matematica_experiment.push(ha_condicional175);
habilidad_matematica_experiment.push(ha_condicional176);
habilidad_matematica_experiment.push(ha_condicional177);
habilidad_matematica_experiment.push(ha_condicional178);
habilidad_matematica_experiment.push(ha_condicional179);
habilidad_matematica_experiment.push(ha_condicional180);
habilidad_matematica_experiment.push(ha_condicional181);
habilidad_matematica_experiment.push(ha_condicional182);
habilidad_matematica_experiment.push(ha_condicional183);
habilidad_matematica_experiment.push(ha_condicional184);
habilidad_matematica_experiment.push(ha_condicional185);
habilidad_matematica_experiment.push(ha_condicional186);
habilidad_matematica_experiment.push(ha_condicional187);
habilidad_matematica_experiment.push(ha_condicional188);
habilidad_matematica_experiment.push(ha_condicional189);
habilidad_matematica_experiment.push(ha_condicional190);
habilidad_matematica_experiment.push(ha_condicional191);
habilidad_matematica_experiment.push(ha_condicional192);
habilidad_matematica_experiment.push(ha_condicional193);
habilidad_matematica_experiment.push(ha_condicional194);
habilidad_matematica_experiment.push(ha_condicional195);
habilidad_matematica_experiment.push(ha_condicional196);
habilidad_matematica_experiment.push(ha_condicional197);
habilidad_matematica_experiment.push(ha_condicional198);
habilidad_matematica_experiment.push(ha_condicional199);
