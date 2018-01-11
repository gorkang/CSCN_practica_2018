var time_left1 = 8000;
var time_left2 = 8000;
var time_left3 = 8000;
var time_left4 = 8000;
var time_left5 = 8000;

var ha_timeout_status1 = 0;
var ha_timeout_status2 = 0;
var ha_timeout_status3 = 0;
var ha_timeout_status4 = 0;
var ha_timeout_status5 = 0;

var timeline_suma = [];
var timeline_resta = [];
var timeline_multiplicacion = [];
var timeline_division = [];
var timeline_operaciones_mixtas = [];

var sumas = [ "1 + 1 =",
              "2 + 1 =",
              "3 + 0 =",
              "4 + 1 =",
              "2 + 3 =",
              "7 + 2 =",
              "3 + 5 =",
              "0 + 7 =",
              "2 + 5 =",
              "4 + 6 =",
              "6 + 3 =",
              "4 + 3 =",
              "8 + 2 =",
              "3 + 6 =",
              "5 + 2 =",
              "3 + 8 =",
              "5 + 7 =",
              "2 + 6 =",
              "7 + 5 =",
              "9 + 4 =",
              "13 + 4 =",
              "7 + 12 =",
              "16 + 8 =",
              "4 + 15 =",
              "17 + 3 =",
              "6 + 15 =",
              "18 + 5 =",
              "3 + 14 =",
              "17 + 8 =",
              "7 + 16 =",
              "17 + 16 =",
              "22 + 13 =",
              "19 + 32 =",
              "34 + 15 =",
              "28 + 27 =",
              "23 + 38 =",
              "39 + 46 =",
              "65 + 33 =",
              "76 + 18 =",
              "54 + 27 ="]

var restas = ["2 - 1 =",
              "3 - 2 =",
              "4 - 0 =",
              "3 - 0 =",
              "5 - 2 =",
              "8 - 3 =",
              "6 - 0 =",
              "9 - 2 =",
              "7 - 5 =",
              "8 - 6 =",
              "7 - 4 =",
              "8 - 7 =",
              "7 - 5 =",
              "8 - 3 =",
              "6 - 5 =",
              "15 - 3 =",
              "13 - 7 =",
              "18 - 6 =",
              "16 - 9 =",
              "17 - 4 =",
              "18 - 6 =",
              "15 - 3 =",
              "16 - 8 =",
              "13 - 2 =",
              "19 - 7 =",
              "28 - 5 =",
              "21 - 9 =",
              "27 - 7 =",
              "25 - 8 =",
              "26 - 9 =",
              "35 - 17 =",
              "48 - 23 =",
              "26 - 19 =",
              "44 - 32 =",
              "23 - 18 =",
              "73 - 48 =",
              "54 - 37 =",
              "87 - 43 =",
              "67 - 49 =",
              "43 - 27 ="]

var multiplicaciones = ["1 x 4 =",
                        "2 x 2 =",
                        "1 x 7 =",
                        "0 x 5 =",
                        "8 x 1 =",
                        "3 x 10 =",
                        "2 x 9 =",
                        "4 x 4 =",
                        "5 x 8 =",
                        "6 x 0 =",
                        "10 x 4 =",
                        "3 x 3 =",
                        "6 x 3 =",
                        "7 x 3 =",
                        "2 x 8 =",
                        "6 x 6 =",
                        "4 x 5 =",
                        "8 x 4 =",
                        "5 x 9 =",
                        "7 x 6 =",
                        "8 x 9 =",
                        "4 x 7 =",
                        "8 x 8 =",
                        "7 x 8 =",
                        "6 x 5 =",
                        "12 x 4 =",
                        "13 x 3 =",
                        "7 x 7 =",
                        "2 x 14 =",
                        "4 x 16 =",
                        "11 x 6 =",
                        "7 x 12 =",
                        "23 x 3 =",
                        "9 x 9 =",
                        "17 x 4 =",
                        "4 x 23 =",
                        "16 x 4 =",
                        "2 x 36 =",
                        "28 x 3 =",
                        "5 x 17 ="]

var divisiones = ["4 : 2 =",
                  "5 : 1 =",
                  "12 : 2 =",
                  "15 : 3 =",
                  "10 : 5 =",
                  "6 : 3 =",
                  "20 : 2 =",
                  "24 : 3 =",
                  "36 : 6 =",
                  "9 : 3 =",
                  "24 : 6 =",
                  "18 : 2 =",
                  "35 : 5 =",
                  "27 : 9 =",
                  "16 : 4 =",
                  "49 : 7 =",
                  "27 : 3 =",
                  "35 : 5 =",
                  "63 : 9 =",
                  "64 : 8 =",
                  "45 : 5 =",
                  "24 : 8 =",
                  "28 : 4 =",
                  "81 : 9 =",
                  "18 : 6 =",
                  "24 : 2 =",
                  "44 : 4 =",
                  "39 : 13 =",
                  "60 : 5 =",
                  "36 : 2 =",
                  "48 : 4 =",
                  "60 : 15 =",
                  "56 : 4 =",
                  "80 : 20 =",
                  "72 : 6 =",
                  "48 : 12 =",
                  "75 : 25 =",
                  "52 : 13 =",
                  "90 : 30 =",
                  "45 : 15 ="]

var operaciones_mixtas = ["2 + 1 =",
                          "2 - 1 =",
                          "2 x 5 =",
                          "4 : 2 =",
                          "3 + 2 =",
                          "8 - 4 =",
                          "9 : 3 =",
                          "4 x 5 =",
                          "7 + 2 =",
                          "9 - 5 =",
                          "15 : 5 =",
                          "3 x 9 =",
                          "10 - 3 =",
                          "5 + 4 =",
                          "5 x 5 =",
                          "8 + 5 =",
                          "24 : 4 =",
                          "13 - 5 =",
                          "7 x 4 =",
                          "9 : 3 =",
                          "17 - 6 =",
                          "8 x 6 =",
                          "6 + 13 =",
                          "18 : 3 =",
                          "19 - 4 =",
                          "24 - 6 =",
                          "15 + 7 =",
                          "4 x 13 =",
                          "33 : 11 =",
                          "3 + 19 =",
                          "36 : 3 =",
                          "6 x 14 =",
                          "43 - 16 =",
                          "4 x 16 =",
                          "37 + 28 =",
                          "37 - 29 =",
                          "42 : 14 =",
                          "5 x 12 =",
                          "67 + 24 =",
                          "64 : 32 ="]

// Funciones de apoyo
function block_fkeys(event){
    var x = event.which || event.keyCode;
    if(x == 112 || x == 113 || x == 114 || x == 115 || x == 116 || x == 117 || x == 118 || x == 119 || x == 120 || x == 121 || x == 122 || x == 123 ){
        event.preventDefault();
        return false;
    }else{
        return;
    }
}

//Inicio pruebas
sumas.forEach(function(operacion){
  timeline_suma.push({
      timeline: [{
        type: "survey-textha",
        questions:[{prompt:'<p>'+operacion+'</p>'}],
        trial_duration: function() {
          return time_left1;
        },
        on_finish: function(data) {
          time_left1 -= data.rt;
          if (time_left1 <= 0) {
            ha_timeout_status1 = 1;
          }
        }
      }],
      conditional_function: function(){
          if(ha_timeout_status1 == 1){
              return false;
          } else {
              return true;
          }
      }
  });
});

restas.forEach(function(operacion){
  timeline_resta.push({
      timeline: [{
        type: "survey-textha",
        questions:[{prompt:'<p>'+operacion+'</p>'}],
        trial_duration: function() {
          return time_left2;
        },
        on_finish: function(data) {
          time_left2 -= data.rt;
          if (time_left2 <= 0) {
            ha_timeout_status2 = 1;
          }
        }
      }],
      conditional_function: function(){
          if(ha_timeout_status2 == 1){
              return false;
          } else {
              return true;
          }
      }
  });
});

multiplicaciones.forEach(function(operacion){
  timeline_multiplicacion.push({
      timeline: [{
        type: "survey-textha",
        questions:[{prompt:'<p>'+operacion+'</p>'}],
        trial_duration: function() {
          return time_left3;
        },
        on_finish: function(data) {
          time_left3 -= data.rt;
          if (time_left3 <= 0) {
            ha_timeout_status3 = 1;
          }
        }
      }],
      conditional_function: function(){
          if(ha_timeout_status3 == 1){
              return false;
          } else {
              return true;
          }
      }
  });
});

divisiones.forEach(function(operacion){
  timeline_division.push({
      timeline: [{
        type: "survey-textha",
        questions:[{prompt:'<p>'+operacion+'</p>'}],
        trial_duration: function() {
          return time_left4;
        },
        on_finish: function(data) {
          time_left4 -= data.rt;
          if (time_left4 <= 0) {
            ha_timeout_status4 = 1;
          }
        }
      }],
      conditional_function: function(){
          if(ha_timeout_status4 == 1){
              return false;
          } else {
              return true;
          }
      }
  });
});

operaciones_mixtas.forEach(function(operacion){
  timeline_operaciones_mixtas.push({
      timeline: [{
        type: "survey-textha",
        questions:[{prompt:'<p>'+operacion+'</p>'}],
        trial_duration: function() {
          return time_left5;
        },
        on_finish: function(data) {
          time_left5 -= data.rt;
          if (time_left5 <= 0) {
            ha_timeout_status5 = 1;
          }
        }
      }],
      conditional_function: function(){
          if(ha_timeout_status5 == 1){
              return false;
          } else {
              return true;
          }
      }
  });
});

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
  data:{trialid: "Instructions_ha01"}
};

var pruebas = {
  timeline: [
    {
      type: 'survey-textha',
      questions:[{prompt:'<p>2 + 4 = </p>'}],
      data:{trialid: "Prueba_ha01"}
    },
    {
      type: 'survey-textha',
      questions:[{prompt:'<p>8 - 4 = </p>'}],
      data:{trialid: "Prueba_ha02"}
    },
    {
      type: 'survey-textha',
      questions:[{prompt:'<p>2 x 2 = </p>'}],
      data:{trialid: "Prueba_ha03"}
    },
    {
      type: 'survey-textha',
      questions:[{prompt:'<p>8 : 4 = </p>'}],
      data:{trialid: "Prueba_ha04"}
    }
  ]
}

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
  data:{trialid: "Instructions_ha02"}
};
/**************   INICIO Pantallas Inter Columnas   *********/

var ha_intercolumna1 = {
  type: "instructions",
  pages: ["<div class = centerbox>"+
         "<p class = center-block-text>"+
         "Haz click en el siguiente bot&oacute;n para comenzar con la siguiente tanda.<br />"+
         "</p></div>"],
  allow_keys: false,
  show_clickable_nav: true,
  data:{trialid: "Instructions_intercolumna"},
  on_start: function(){
      time_left1 = 0;
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
  data:{trialid: "Instructions_intercolumna"},
  on_start: function(){
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
  data:{trialid: "Instructions_intercolumna"},
  on_start: function(){
      time_left4 = 0;
  }
};

function advance(event){
  document.getElementsByName("#jspsych-survey-text-response-0")[0].onkeypress = function(event){
      if (event.keyCode == 13) {
          var btn = document.getElementById("jspsych-survey-text-next");
          btn.click();
          //event.preventDefault();
      }
  };
}

// Creacion de timeline e inclusion de trials
habilidad_matematica_experiment = [];
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  habilidad_matematica_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

/* Trial de Prueba */
habilidad_matematica_experiment.push(ha_explanation01);
habilidad_matematica_experiment.push(pruebas);
/* Columna 1 */
habilidad_matematica_experiment.push(ha_explanation02);
habilidad_matematica_experiment.push({timeline: timeline_suma})
/* Columna 2 */
habilidad_matematica_experiment.push(ha_intercolumna1);
habilidad_matematica_experiment.push({timeline: timeline_resta})
/* Columna 3 */
habilidad_matematica_experiment.push(ha_intercolumna2);
habilidad_matematica_experiment.push({timeline: timeline_multiplicacion})
/* Columna 4 */
habilidad_matematica_experiment.push(ha_intercolumna3);
habilidad_matematica_experiment.push({timeline: timeline_division})
/* Columna 5 */
habilidad_matematica_experiment.push(ha_intercolumna4);
habilidad_matematica_experiment.push({timeline: timeline_operaciones_mixtas})
