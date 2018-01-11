
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
                type: "survey-multi-choice1",
                timeline:[
                    {
                        questions: [{prompt:"<div class = centerbox>"+
                       "<p class = justified>"+
                       "Mire la siguiente figura. Usted debe escoger cu&aacute;l de las opciones que se encuentran abajo va en el "+
                        "cuadro con un signo de interrogaci&oacute;n. La respuesta correcta es aquella que encaja yendo de "+
                        "izquierda a derecha y yendo de arriba hacia abajo. Usted s&oacute;lo debe mirar de izquierda a derecha y "+
                        "de arriba hacia abajo. No mire diagonalmente. &iquest;Cu&aacute;l de las opciones que se encuentran abajo va en "+
                        "el cuadro con un signo de interrogaci&oacute;n?"+
                       "</p><br /><br /></div>"+
                       "<div class= centered><div class='centered'><img src ='img/1A.png' /></div><br /><br /><div class='centered'><img class='matrizimage' src ='img/1B.png' </img></div>",
                       options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                        data: {trialid: "P_MP_01"},
                        horizontal: true
                        },
                ],
                horizontal: true,
                required: 'true',

                on_finish: function(data){
                   var test = data.responses;
                    if(test =='{"Q0":"<img src=\'img/op5.png\' />"}'){
                        condition1 = true;
                    } else {
                        condition1 = false;
                    }
                }
            };

            var matriz_practice_2={
                type: "survey-multi-choice1",
                timeline:[
                    {
                        questions: [{prompt:"<div class = centerbox>"+
                       "<p class = justified>"+
                       "&Eacute;ste es otro tipo de problema. Los cuadros solo van de izquierda a derecha. La respuesta correcta "+
                        "seguir&aacute; el mismo orden que usted ve en los cuadros. &iquest;Cu&aacute;l de las opciones que se encuentran abajo va "+
                        "en el cuadro con un signo de interrogaci&oacute;n?"+
                       "</p><br /><br /></div>"+
                       "<div class= centered><div class='centered'><img src ='img/2A.png' /></div><br /><br /><div class='centered'><img src ='img/2B.png' </img></div>",
                       options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                        data: {trialid: "P_MP_02"},
                        horizontal: true
                        },
                ],
                horizontal: true,
                required: 'true',

                on_finish: function(data){
                   var test = data.responses;
                    if(test =='{"Q0":"<img src=\'img/op4.png\' />"}'){
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
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/3A.png' /></div><br /><br /><div class='centered'><img class='matrizimage' src ='img/3B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_03"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op3.png\' />"}'){
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
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/4A.png' /></div><br /><br /><div class='centered'><img class='matrizimage' src ='img/4B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_04"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op2.png\' />"}'){
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
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/5A.png' /></div><br /><br /><div class='centered'><img class='matrizimage' src ='img/5B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_05"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op1.png\' />"}'){
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
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/6A.png' /></div><br /><br /><div class='centered'><img class='matrizimage' src ='img/6B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_06"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op5.png\' />"}'){
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
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/7A.png' /></div><br /><br /><div class='centered'><img src ='img/7B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_07"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op3.png\' />"}'){
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
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/8A.png' /></div><br /><br /><div class='centered'><img class='matrizimage' src ='img/8B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_08"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    var matrix_response = data.responses;
                    if(matrix_response =='{{"Q0":"<img src=\'img/op4.png\' />"}'){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz07 = {
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/9A.png' /></div><br /><br /><div class='centered'><img src ='img/9B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_09"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op4.png\' />"}'){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz08 = {
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/10A.png' /></div><br /><br /><div class='centered'><img class='matrizimage' src ='img/10B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_10"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op5.png\' />"}'){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz09 = {
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/11A.png' /></div><br /><br /><div class='centered'><img class='matrizimage' src ='img/11B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_11"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op1.png\' />"}'){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz10 = {
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/12A.png' /></div><br /><br /><div class='centered'><img src ='img/12B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_12"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){;
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op1.png\' />"}'){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz11 = {
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/13A.png' /></div><br /><br /><div class='centered'><img class='matrizimage' src ='img/13B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_13"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op2.png\' />"}'){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz12 = {
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/14A.png' /></div><br /><br /><div class='centered'><img src ='img/14B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_14"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op5.png\' />"}'){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz13 = {
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/15A.png' /></div><br /><br /><div class='centered'><img class='matrizimage' src ='img/15B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_15"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op5.png\' />"}'){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz14 = {
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/16A.png' /></div><br /><br /><div class='centered'><img class='matrizimage' src ='img/16B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_16"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op3.png\' />"}'){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz15 = {
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/17A.png' /></div><br /><br /><div class='centered'><img class='matrizimage' src ='img/17B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_17"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op2.png\' />"}'){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz16 = {
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/18A.png' /></div><br /><br /><div class='centered'><img src ='img/18B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_18"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op1.png\' />"}'){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz17 = {
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/19A.png' /></div><br /><br /><div class='centered'><img src ='img/19B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_19"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op4.png\' />"}'){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz18 = {
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/20A.png' /></div><br /><br /><div class='centered'><img src ='img/20B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_20"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op5.png\' />"}'){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz19 = {
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/21A.png' /></div><br /><br /><div class='centered'><img src ='img/21B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_21"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op2.png\' />"}'){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz20 = {
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/22A.png' /></div><br /><br /><div class='centered'><img class='matrizimage' src ='img/22B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_22"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op3.png\' />"}'){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz21 = {
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/23A.png' /></div><br /><br /><div class='centered'><img class='matrizimage' src ='img/23B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_23"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op1.png\' />"}'){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz22 = {
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/24A.png' /></div><br /><br /><div class='centered'><img src ='img/24B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_24"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op1.png\' />"}'){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz23 = {
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/25A.png' /></div><br /><br /><div class='centered'><img class='matrizimage' src ='img/25B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_25"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op4.png\' />"}'){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz24 = {
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/26A.png' /></div><br /><br /><div class='centered'><img class='matrizimage' src ='img/26B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_26"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op2.png\' />"}'){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz25 = {
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/27A.png' /></div><br /><br /><div class='centered'><img class='matrizimage' src ='img/27B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_27"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op3.png\' />"}'){
                        matrixflag01 = 0;
                    }else{
                        matrixflag01 = matrixflag01+1;
                    }
                }
                };

            var matriz26 = {
                type: "survey-multi-choice1",
                questions: [{prompt:"<div class='centered'><img src ='img/28A.png' /></div><br /><br /><div class='centered'><img src ='img/28B.png' </img></div>",
                options: ["<img src='img/op1.png' />","<img src='img/op2.png' />","<img src='img/op3.png' />","<img src='img/op4.png' />","<img src='img/op5.png' />"]}],
                data: {trialid: "MP_28"},
                horizontal: true,
                required: 'true',
                on_finish: function(data){
                    //data.RUT_Participante = refined_id;
                    var matrix_response = data.responses;
                    if(matrix_response =='{"Q0":"<img src=\'img/op4.png\' />"}'){
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

