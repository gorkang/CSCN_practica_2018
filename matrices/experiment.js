
            /* ********************************* VARIABLES GENERALES ********************************* */

            // Variables de matrices_experiment
            var test = "";
            var condition1 = false;
            var condition2 = false;

            var matrixflag01 = 0;
            var matrixflag02 = 0;
            var matrixflag03 = 0;

            var bloquear_enter = 0; // 0 = permitir, 1 = bloquear

            /* ********************************* FUNCIONES DE APOYO ********************************* */

            function* shuffle(array) {
                    var i = array.length;
                    while (i--) {
                        yield array.splice(Math.floor(Math.random() * (i+1)), 1)[0];
                    }
            };

             // Bloqueo de teclas
             onkeydown = function block_fkeys(event){
                 var x = event.which || event.keyCode;
                 if(x == 111 || x == 116){
                     console.log("Blocked key");
                     event.preventDefault();
                     return false;
                 }else{
                     return;
                 }
             }

            // Bloqueo de Enter
            function block_enter(event){
                var x = event.which || event.keyCode;
                if(x == 13){
                    console.log("Blocked enter key");
                    event.preventDefault();
                    return false;
                }else{
                    return;
                }
            }

            /* ********************************* PANTALLAS DE INICIO Y DESPEDIDA ********************************* */

            var screen_matrices_experiment = {
                type: "instructions",
                pages: ['<p><center>matrices_experiment<br /><br />Presiona la tecla ENTER para continuar.</center></p>'],
                cont_key: [13],
                show_clickable_nav: true,
                data:{trialid: "Screen_matrices_experiment"},
                on_trial_start: function(){
                    bloquear_enter = 0;
                }
            };

            var screen_goodbye = {
                type: "instructions",
                pages: ['<p><center>Hemos terminado, excelente trabajo.<br /><br />Muchas gracias por su colaboraci&oacute;n.<br /><br />Por favor, llame al examinador.'],
                cont_key: [13],
                show_clickable_nav: true,
                data:{trialid: "Screen_goodbye"},
                on_trial_start: function(){
                    bloquear_enter = 0;
                }
            }

            /* ********************************* INICIO PRUEBAS ********************************* */

            // ----------------------------------------------------------------------------------------------
            // ----------------------------------- matrices_experiment -------------------------------------------------
            // ----------------------------------------------------------------------------------------------

            /* Texto Inicial */

            var matrizexplanation={
                type: "instructions",
                pages: ["<div class = centerbox>"+
                       "<p class = center-block-text>"+
                       "A continuaci&oacute;n, le presentaremos una serie de figuras, donde cada una muestra un patr&oacute;n l&oacute;gico.<br />"+
                       "Tendr&aacute; que elegir entre 5 alternativas para completar cada patr&oacute;n."+
                       "</p></div>"],
                allow_keys: false,
                show_clickable_nav: true,
                timing_post_trial: 50,
                data:{trialid: "Instructions_Matriz"}
            };

            /* *************************** */
            /* INICIO BLOQUES DE PRACTICA */

            var matriz_practice_1={
                type: "html-button-response",
                stimulus:"<div class = centerbox>"+
                  "<p class = justified>"+
                  "Mire la siguiente figura. Usted debe escoger cu&aacute;l de las opciones que se encuentran abajo va en el "+
                  "cuadro con un signo de interrogaci&oacute;n. La respuesta correcta es aquella que encaja yendo de "+
                  "izquierda a derecha y yendo de arriba hacia abajo. Usted s&oacute;lo debe mirar de izquierda a derecha y "+
                  "de arriba hacia abajo. No mire diagonalmente. &iquest;Cu&aacute;l de las opciones que se encuentran abajo va en "+
                  "el cuadro con un signo de interrogaci&oacute;n?"+
                  "</p><br /><br /></div>"+
                  "<div class= centered><div class='centered'><img src ='img/1A.png' /></div>",
                choices: ["<img src='img/1B_1.png' style='width: 100%'/>","<img src='img/1B_2.png' style='width: 100%'/>","<img src='img/1B_3.svg' style='width: 100%'/>","<img src='img/1B_4.png' style='width: 100%'/>","<img src='img/1B_5.png' style='width: 100%' />"],
                button_html: '<button class="jspsych-matrix-button">%choice%</button>',
                data: {trialid: "P_MP_01"},
                margin_horizontal: '1%',
                on_finish: function(data){
                   var test = data.button_pressed;
                    if(test == 4){
                        condition1 = true;
                    } else {
                        condition1 = false;
                    }
                }
            };

            var matriz_practice_2={
                type: "html-button-response",
                stimulus:"<div class = centerbox>"+
                  "<p class = justified>"+
                  "&Eacute;ste es otro tipo de problema. Los cuadros solo van de izquierda a derecha. La respuesta correcta "+
                  "seguir&aacute; el mismo orden que usted ve en los cuadros. &iquest;Cu&aacute;l de las opciones que se encuentran abajo va "+
                  "en el cuadro con un signo de interrogaci&oacute;n?"+
                  "</p><br /><br /></div>"+
                  "<div class= centered><div class='centered'><img src ='img/2A.png' /></div>",
                choices: ["<img src='img/2B_1.png' />","<img src='img/2B_2.png' />","<img src='img/2B_3.png' />","<img src='img/2B_4.png' />","<img src='img/2B_5.png' />"],
                button_html: '<button class="jspsych-matrix-button">%choice%</button>',
                data: {trialid: "P_MP_02"},
                margin_horizontal: '1%',
                on_finish: function(data){
                   var test = data.button_pressed;
                    if(test == 3){
                        condition2 = true;
                    } else {
                        condition2 = false;
                    }
                }
            };

            var m_wrong1 = {
                type: "instructions",
                show_clickable_nav: true,
                pages: ["<div class = matrizlimit><div class= centered><div class='centered'><img src ='img/1A.png' /></div><br /><br /><div class='centered'><img src ='img/1B.png' </img></div><br /><br /><div class='matrizfeedback'>Eso no es correcto. <br />Para responder correctamente debe mirar de izquierda a derecha en la fila de arriba.<br /><br />"+
                         "Cuando usted mira la fila de arriba la estrella azul cambia a un circulo amarillo. <br />"+
                         "Esto quiere decir que cuando usted va de izquierda a derecha en la fila de abajo la estrella azul tambi&eacute;n deberia cambiar a un circulo amarillo.<br /><br />"+
                         "Para obtener la respuesta correcta yendo de arriba hacia abajo, usted debe mirar los cuadros de la columna izquierda. "+
                         "Cuando usted va de arriba hacia abajo en la primera columna los cuadros tienen la misma forma y el mismo color: estrellas azules. <br /><br />"+
                         "Esto quiere decir que cuando usted va de arriba hacia abajo en la columna derecha los cuadros tambi&eacute;n deberian tener la misma forma y el mismo color: circulo amarillo. "+
                         "Usted obtiene la misma respuesta yendo de izquierda a derecha y yendo de arriba hacia abajo.<br /><br /><br /><br />Presione una tecla para continuar<br /><br /><br /><br /></div>"]
            };

            var m_right1 = {
                type: "instructions",
                show_clickable_nav: true,
                pages: ["<div class = matrizlimit><div class= centered><div class='centered'><img src ='img/1A.png' /></div><br /><br /><div class='centered'><img src ='img/1B.png' </img></div><br /><br /><div class='matrizfeedback'>Eso es correcto.<br />Cuando usted va de izquierda a derecha en la fila de arriba la estrella azul cambia a un circulo amarillo. <br /><br />"+
                         "Esto quiere decir que cuando usted va de izquierda a derecha en la fila de abajo la estrella azul tambi&eacute;n deberia cambiar a un circulo amarillo. "+
                         "Cuando usted va de arriba hacia abajo en la primera columna los cuadros tienen la misma forma y el mismo color: estrellas azules. <br /><br />"+
                         "Esto quiere decir que cuando usted va de arriba hacia abajo en la segunda columna los cuadros tambi&eacute;n deben tener la misma forma y el mismo color: circulos amarillos. "+
                         "Usted obtiene la misma respuesta yendo de izquierda a derecha y yendo de arriba hacia abajo.<br /><br /><br /><br />Presione una tecla para continuar<br /><br /><br /><br /></div>"]
            };

            var m_wrong2 = {
                type: "instructions",
                show_clickable_nav: true,
                pages: ["<div class = matrizlimit><div class= centered><div class='centered'><img src ='img/2A.png' /></div><br /><br /><div class='centered'><img src ='img/2B.png' </img></div><br /><br /><div class='matrizfeedback'>Eso no es correcto. <br />Cuando usted mira los cuadros de izquierda a derecha, usted puede ver que ellos<br />"+
                         "est&aacute;n en el siguiente orden: c&iacute;rculo grande, c&iacute;rculo peque&ntilde;o, c&iacute;rculo grande, c&iacute;rculo peque&ntilde;o, c&iacute;rculo grande.<br /><br />"+
                         "El c&iacute;rculo peque&ntilde;o va en el cuadro con un signo de interrogaci&oacute;n porque es la opci&oacute;n que mantiene el orden: un c&iacute;rculo peque&ntilde;o va luego de un c&iacute;rculo grande.<br />"+
                         "<br /><br /><br /><br />Presione una tecla para continuar<br /><br /><br /><br /></div>"]
            };

            var m_right2 = {
                type: "instructions",
                show_clickable_nav: true,
                pages: ["<div class = matrizlimit><div class= centered><div class='centered'><img src ='img/2A.png' /></div><br /><br /><div class='centered'><img src ='img/2B.png' </img></div><br /><br /><div class='matrizfeedback'>Eso es correcto.<br />Cuando usted mira los cuadros de izquierda a derecha, puede ver que ellos siguen este orden: "+
                         "c&iacute;rculo grande, c&iacute;rculo peque&ntilde;o, c&iacute;rculo grande, c&iacute;rculo peque&ntilde;o, c&iacute;rculo grande. <br /><br />"+
                         "El c&iacute;rculo peque&ntilde;o va en el cuadro con un signo de interrogaci&oacute;n porque es lo que mantiene el mismo orden que los anteriores.<br /><br />"+
                         "<br /><br /><br /><br />Presione una tecla para continuar<br /><br /><br /><br /></div>"]
            };

            var m_conditional1_1 = {
                timeline: [m_wrong1],
                conditional_function: function(data){
                    if(condition1 === false){
                        return true;
                    } else {
                        return false;
                    }
                }
            };

            var m_conditional1_2 = {
                timeline: [m_right1],
                conditional_function: function(data){
                    if(condition1 === true){
                        return true;
                    } else {
                        return false;
                    }
                }
            };

            var m_conditional2_1 = {
                timeline: [m_wrong2],
                conditional_function: function(data){
                    if(condition2 === false){
                        return true;
                    } else {
                        return false;
                    }
                }
            };

            var m_conditional2_2 = {
                timeline: [m_right2],
                conditional_function: function(data){
                    if(condition2 === true){
                        return true;
                    } else {
                        return false;
                    }
                }
            };

            var matrizstarter={
                type: "instructions",
                pages: ["<div class = centerbox>"+
                       "<p class = center-block-text>"+
                       "Ahora deber&aacute; seguir respondiendo, pero no recibir&aacute; avisos indicando <br />si su respuesta es correcta o incorrecta.<br /><br />"+
                       "</p></div>"],
                allow_keys: false,
                show_clickable_nav: true,
                timing_post_trial: 50,
                data:{trialid: "Instructions_Matriz"}
            };

            /* *************************** */
            /* FIN BLOQUES DE PRACTICA */

            var matriz01 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/3A.png' /></div>",
                choices: ["<img src='img/3B_1.png' />","<img src='img/3B_2.png' />","<img src='img/3B_3.png' />","<img src='img/3B_4.png' />","<img src='img/3B_5.png' />"],
                button_html: '<button class="jspsych-matrix-button">%choice%</button>',
                data: {trialid: "MP_03"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 2){
                        matrixflag01 = 0;
                        matrixflag02 +=1;
                        matrixflag03 +=1;
                    }else{
                        matrixflag01 = matrixflag01+1;
                        matrixflag02 = 0;
                        matrixflag03 =0;
                    }
                }
                };

            var matriz02 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/4A.png' /></div>",
                choices:["<img src='img/4B_1.png' />","<img src='img/4B_2.png' />","<img src='img/4B_3.png' />","<img src='img/4B_4.png' />","<img src='img/4B_5.png' />"],
                data: {trialid: "MP_04"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 1){
                        matrixflag01 = 0;
                        matrixflag02 +=1;
                        matrixflag03 +=1;
                    }else{
                        matrixflag01 = matrixflag01+1;
                        matrixflag02 =0;
                        matrixflag03 =0;
                    }
                }
                };

            var matriz03 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/5A.png' /></div>",
                choices:["<img src='img/5B_1.png' />","<img src='img/5B_2.png' />","<img src='img/5B_3.png' />","<img src='img/5B_4.png' />","<img src='img/5B_5.png' />"],
                data: {trialid: "MP_05"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 0){
                        matrixflag01 = 0;
                        matrixflag02 +=1;
                        matrixflag03 +=1;
                    }else{
                        matrixflag01 = matrixflag01+1;
                        matrixflag02 =0;
                        matrixflag03 =0;
                    }
                }
                };
/*************************************************************************************************************************************/
            var matriz04 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/6A.png' /></div>",
                choices:["<img src='img/6B_1.png' />","<img src='img/6B_2.png' />","<img src='img/6B_3.png' />","<img src='img6/B_4.png' />","<img src='img/6B_5.png' />"],
                data: {trialid: "MP_06"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 4){
                        matrixflag01 = 0;
                        matrixflag02 =3;
                        matrixflag03 +=1;
                    }else{
                        matrixflag01 = matrixflag01+1;
                        matrixflag02 =0;
                        matrixflag03 =0;
                    }
                }
                };

            var matriz05 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/7A.png' /></div><img src ='img/7B.png' </img></div>",
                choices:["<img src='img/7B_1.png' />","<img src='img/7B_2.png' />","<img src='img/7B_3.png' />","<img src='img/7B_4.png' />","<img src='img/7B_5.png' />"],
                data: {trialid: "MP_07"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 2){
                        matrixflag01 = 0;
                        matrixflag02 =3;
                        matrixflag03 =3;
                    }else{
                        matrixflag01 = matrixflag01+1;
                        matrixflag02 =0;
                        matrixflag03 =0;
                    }
                }
                };


/*************************************************************************************************************************************/

            var matriz06 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/8A.png' /></div>",
                choices:["<img src='img/8B_1.png' />","<img src='img/8B_2.png' />","<img src='img/8B_3.png' />","<img src='img/8B_4.png' />","<img src='img/8B_5.png' />"],
                data: {trialid: "MP_08"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    var matrix_response = data.button_pressed;
                    if(matrix_response =='{{"Q0":"<img src=\'img/op4.png\' />"}'){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz07 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/9A.png' /></div><img src ='img/9B.png' </img></div>",
                choices:["<img src='img/9B_1.png' />","<img src='img/9B_2.png' />","<img src='img/9B_3.png' />","<img src='img/9B_4.png' />","<img src='img/9B_5.png' />"],
                data: {trialid: "MP_09"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 3){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz08 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/10A.png' /></div>",
                choices:["<img src='img/10B_1.png' />","<img src='img/10B_2.png' />","<img src='img/10B_3.png' />","<img src='img/10B_4.png' />","<img src='img/10B_5.png' />"],
                data: {trialid: "MP_10"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 4){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz09 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/11A.png' /></div>",
                choices:["<img src='img/11B_1.png' />","<img src='img/11B_2.png' />","<img src='img/11B_3.png' />","<img src='img/11B_4.png' />","<img src='img/11B_5.png' />"],
                data: {trialid: "MP_11"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 0){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz10 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/12A.png' /></div>",
                choices:["<img src='img/12B_1.png' />","<img src='img/12B_2.png' />","<img src='img/12B_3.png' />","<img src='img/12B_4.png' />","<img src='img/12B_5.png' />"],
                data: {trialid: "MP_12"},
                margin_horizontal: '1%',
                on_finish: function(data){;
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 0){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz11 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/13A.png' /></div>",
                choices:["<img src='img/13B_1.png' />","<img src='img/13B_2.png' />","<img src='img/13B_3.png' />","<img src='img/13B_4.png' />","<img src='img/13B_5.png' />"],
                data: {trialid: "MP_13"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 1){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz12 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/14A.png' /></div>",
                choices:["<img src='img/14B_1.png' />","<img src='img/14B_2.png' />","<img src='img/14B_3.png' />","<img src='img/14B_4.png' />","<img src='img/14B_5.png' />"],
                data: {trialid: "MP_14"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 4){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz13 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/15A.png' /></div>",
                choices:["<img src='img/15B_1.png' />","<img src='img/15B_2.png' />","<img src='img/15B_3.png' />","<img src='img/15B_4.png' />","<img src='img/15B_5.png' />"],
                data: {trialid: "MP_15"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 4){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz14 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/16A.png' /></div>",
                choices:["<img src='img/16B_1.png' />","<img src='img/16B_2.png' />","<img src='img/16B_3.png' />","<img src='img/16B_4.png' />","<img src='img/16B_5.png' />"],
                data: {trialid: "MP_16"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 2){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz15 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/17A.png' /></div>",
                choices:["<img src='img/17B_1.png' />","<img src='img/17B_2.png' />","<img src='img/17B_3.png' />","<img src='img/17B_4.png' />","<img src='img/17B_5.png' />"],
                data: {trialid: "MP_17"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 1){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz16 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/18A.png' /></div>",
                choices:["<img src='img/18B_1.png' />","<img src='img/18B_2.png' />","<img src='img/18B_3.png' />","<img src='img/18B_4.png' />","<img src='img/18B_5.png' />"],
                data: {trialid: "MP_18"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 0){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz17 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/19A.png' /></div>",
                choices:["<img src='img/19B_1.png' />","<img src='img/19B_2.png' />","<img src='img/19B_3.png' />","<img src='img/19B_4.png' />","<img src='img/19B_5.png' />"],
                data: {trialid: "MP_19"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 3){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz18 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/20A.png' /></div>",
                choices:["<img src='img/20B_1.png' />","<img src='img/20B_2.png' />","<img src='img/20B_3.png' />","<img src='img/20B_4.png' />","<img src='img/20B_5.png' />"],
                data: {trialid: "MP_20"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 4){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz19 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/21A.png' /></div>",
                choices:["<img src='img/21B_1.png' />","<img src='img/21B_2.png' />","<img src='img/21B_3.png' />","<img src='img/21B_4.png' />","<img src='img/21B_5.png' />"],
                data: {trialid: "MP_21"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 1){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz20 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/22A.png' /></div>",
                choices:["<img src='img/22B_1.png' />","<img src='img/22B_2.png' />","<img src='img/22B_3.png' />","<img src='img/22B_4.png' />","<img src='img/22B_5.png' />"],
                data: {trialid: "MP_22"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 2){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz21 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/23A.png' /></div>",
                choices:["<img src='img/23B_1.png' />","<img src='img/23B_2.png' />","<img src='img/23B_3.png' />","<img src='img/23B_4.png' />","<img src='img/23B_5.png' />"],
                data: {trialid: "MP_23"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 0){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz22 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/24A.png' /></div>",
                choices:["<img src='img/24B_1.png' />","<img src='img/24B_2.png' />","<img src='img/24B_3.png' />","<img src='img/24B_4.png' />","<img src='img/24B_5.png' />"],
                data: {trialid: "MP_24"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 0){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz23 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/25A.png' /></div>",
                choices:["<img src='img/25B_1.png' />","<img src='img/25B_2.png' />","<img src='img/25B_3.png' />","<img src='img/25B_4.png' />","<img src='img/25B_5.png' />"],
                data: {trialid: "MP_25"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 3){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz24 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/26A.png' /></div>",
                choices:["<img src='img/26B_1.png' />","<img src='img/26B_2.png' />","<img src='img/26B_3.png' />","<img src='img/26B_4.png' />","<img src='img/26B_5.png' />"],
                data: {trialid: "MP_26"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 1){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz25 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/27A.png' /></div>",
                choices:["<img src='img/27B_1.png' />","<img src='img/27B_2.png' />","<img src='img/27B_3.png' />","<img src='img/27B_4.png' />","<img src='img/27B_5.png' />"],
                data: {trialid: "MP_27"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 2){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz26 = {
                type: "html-button-response",
                stimulus:"<div class='centered'><img src ='img/28A.png' /></div>",
                choices:["<img src='img/28B_1.png' />","<img src='img/28B_2.png' />","<img src='img/28B_3.png' />","<img src='img/28B_4.png' />","<img src='img/28B_5.png' />"],
                data: {trialid: "MP_28"},
                margin_horizontal: '1%',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.button_pressed;
                    if(matrix_response == 3){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz_condicional_99 = {
                timeline: [matriz01],
                conditional_function: function(){
                    if(matrixflag01 == 3 || (matrixflag02 >=2 && matrixflag03 >=2)){
                        return false;
                    } else {
                        return true;
                    }
                }
            };


            var matriz_condicional_v00 = {
                timeline: [matriz02],
                conditional_function: function(){
                    if(matrixflag01 == 3 || (matrixflag02 >=2 && matrixflag03 >=2)){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional_v1 = {
                timeline: [matriz03],
                conditional_function: function(){
                    if(matrixflag01 == 3 || (matrixflag02 >=2 && matrixflag03 >=2)){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional00 = {
                timeline: [matriz02],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional01 = {
                timeline: [matriz03],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional_v2 = {
                timeline: [matriz04],
                conditional_function: function(){
                    if(matrixflag01 == 3 || (matrixflag02 >=2 && matrixflag03 >=2)){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional02 = {
                timeline: [matriz04],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };
/*------------------------------------------------------------------------------------------*/
            var errorIn4 = {
                timeline : [matriz_condicional_v1, matriz_condicional_v00, matriz_condicional_99],
                loop_function: function(data){
                    if(matrixflag02<2 && matrixflag01 <3){
                        console.log(matrixflag01);
                        return true;
                    } else {
                        return false;
                    }
                }
            };

            var matriz_condicional03 = {
                timeline: [matriz05],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };


            var errorIn5 = {
                timeline : [matriz_condicional_v2, matriz_condicional_v1, matriz_condicional_v00, matriz_condicional_99],
                loop_function: function(data){
                    if(matrixflag03<2 && matrixflag01 <3){
                        return true;
                    } else {
                        return false;
                    }
                }
            };

/*____________________________________________________________________________________________________*/

            var matriz_condicional04 = {
                timeline: [matriz06],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };


            var matriz_condicional05 = {
                timeline: [matriz07],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional06 = {
                timeline: [matriz08],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional07 = {
                timeline: [matriz09],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional08 = {
                timeline: [matriz10],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional09 = {
                timeline: [matriz11],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional10 = {
                timeline: [matriz12],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional11 = {
                timeline: [matriz13],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional12 = {
                timeline: [matriz14],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional13 = {
                timeline: [matriz15],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional14 = {
                timeline: [matriz16],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional15 = {
                timeline: [matriz17],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional16 = {
                timeline: [matriz18],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional17 = {
                timeline: [matriz19],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional18 = {
                timeline: [matriz20],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional19 = {
                timeline: [matriz21],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional20 = {
                timeline: [matriz22],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional21 = {
                timeline: [matriz23],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional22 = {
                timeline: [matriz24],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional23 = {
                timeline: [matriz25],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            var matriz_condicional24 = {
                timeline: [matriz26],
                conditional_function: function(){
                    if(matrixflag01 == 3){
                        return false;
                    } else {
                        return true;
                    }
                }
            };

            /* ********************************* INICIALIZACION DE EXPERIMENTO ********************************* */

            matrices_experiment = [];
            if(window.innerWidth != screen.width || window.innerHeight != screen.height){
              matrices_experiment.push({
                type: 'fullscreen',
                message: '<p>El experimento entrara en modo pantalla completa</p>',
                button_label: "Pantalla Completa",
                delay_after: 0,
                fullscreen_mode: true
              });
            }
            // matrices_experiment
            matrices_experiment.push(screen_matrices_experiment);
            matrices_experiment.push(matrizexplanation);
            matrices_experiment.push(matriz_practice_1);
            matrices_experiment.push(m_conditional1_1);
            matrices_experiment.push(m_conditional1_2);
            matrices_experiment.push(matriz_practice_2);
            matrices_experiment.push(m_conditional2_1);
            matrices_experiment.push(m_conditional2_2);
            matrices_experiment.push(matrizstarter);

            matrices_experiment.push(matriz01);
            matrices_experiment.push(matriz_condicional00);
            matrices_experiment.push(matriz_condicional01);
            matrices_experiment.push(matriz_condicional02);

            matrices_experiment.push(errorIn4);

            matrices_experiment.push(matriz_condicional03);

            matrices_experiment.push(errorIn5);

            matrices_experiment.push(matriz_condicional04);
            matrices_experiment.push(matriz_condicional05);
            matrices_experiment.push(matriz_condicional06);
            matrices_experiment.push(matriz_condicional07);
            matrices_experiment.push(matriz_condicional08);
            matrices_experiment.push(matriz_condicional09);
            matrices_experiment.push(matriz_condicional10);
            matrices_experiment.push(matriz_condicional11);
            matrices_experiment.push(matriz_condicional12);
            matrices_experiment.push(matriz_condicional13);
            matrices_experiment.push(matriz_condicional14);
            matrices_experiment.push(matriz_condicional15);
            matrices_experiment.push(matriz_condicional16);
            matrices_experiment.push(matriz_condicional17);
            matrices_experiment.push(matriz_condicional18);
            matrices_experiment.push(matriz_condicional19);
            matrices_experiment.push(matriz_condicional20);
            matrices_experiment.push(matriz_condicional21);
            matrices_experiment.push(matriz_condicional22);
            matrices_experiment.push(matriz_condicional23);
            matrices_experiment.push(matriz_condicional24);

            matrices_experiment.push(screen_goodbye);
