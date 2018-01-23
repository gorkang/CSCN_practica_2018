

            // Funciones de apoyo
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

            // Inicio prueba
            var graphexplanation={
                type: "instructions",
                pages: ["<div class = centerbox>"+
                       "<p class = center-block-text>"+
                       "A continuaci&oacute;n deber&aacute;s responder 13 preguntas sobre una serie de gr&aacute;ficos que ser&aacute;n presentados.<br /><br />"+
                       "Debes leer atentamente cada pregunta y responder la informaci&oacute;n que se solicita de cada gr&aacute;fico.<br /><br />"+
                       "</p></div>"],
                allow_keys: false,
                show_clickable_nav: true,
                timing_post_trial: 50,
                data:{trialid: "Instructions_GraphLiteracy"}
            };

            var graph_literacy1_a = {
                type: "survey-textglpercent",
                //Importante: los ID asignados a la pregunta 8A y 8B fueron cambiados por 8 y 9 para respetar el orden numerico y optimizar su identificacion en los analisis. Esto implica que el resto de las preguntas posteriores estan sumadas 1 numero. Por ejemplo, la pregunta 10 antes era la 9
                timeline: [
                    /*Pregunta normal*/
                    {preamble: "<p>A continuaci&oacute;n, le presentamos informaci&oacute;n sobre varios tratamientos para el c&aacute;ncer.</p><br /><div class='centered'><img src='img/graph_1.png' /></div>",
                    questions: [{prompt:"<p>&iquest;Qu&eacute; porcentaje de pacientes se han recuperado tras recibir quimioterapia?</p>", required:true}], data:{trialid: "GL_01_a"}}
                ],
                rows: [1],
                columns: [5],
                horizontal: true
            };

            var graph_literacy1_b = {
                type: "survey-text",
                //Importante: los ID asignados a la pregunta 8A y 8B fueron cambiados por 8 y 9 para respetar el orden numerico y optimizar su identificacion en los analisis. Esto implica que el resto de las preguntas posteriores estan sumadas 1 numero. Por ejemplo, la pregunta 10 antes era la 9
                timeline: [
                    /*Pregunta normal*/
                    {preamble: "<p>A continuaci&oacute;n, le presentamos informaci&oacute;n sobre varios tratamientos para el c&aacute;ncer.</p><br /><div class='centered'><img src='img/graph_1.png' /></div>",
                    questions: [{prompt:"<p>&iquest;Qu&eacute; diferencia hay entre el porcentaje de pacientes que se ha recuperado<br /> tras recibir cirug&iacute;a y el porcentaje de paciente de pacientes que se ha recuperado<br /> tras recibir rayos X?</p>", required:true}], data:{trialid: "GL_01_b"}},
                ],
                rows: [1],
                columns: [5],
                horizontal: true
            };

            var graph_literacy2_a= {
                type: "survey-textglpercent",
                //Importante: los ID asignados a la pregunta 8A y 8B fueron cambiados por 8 y 9 para respetar el orden numerico y optimizar su identificacion en los analisis. Esto implica que el resto de las preguntas posteriores estan sumadas 1 numero. Por ejemplo, la pregunta 10 antes era la 9
                timeline: [
                    /*Pregunta normal*/
                    {preamble: "<p>A continuaci&oacute;n, le presentamos informaci&oacute;n sobre varios tipos de c&aacute;ncer.</p><br /><div class='centered'><img src='img/graph_2.png' /></div>",
                    questions: [{prompt:"<p>De entre todas las personas que mueren de c&aacute;ncer, aproximadamente<br /> &iquest;qu&eacute; porcentaje muere de c&aacute;ncer de pulm&oacute;n?</p>", required:true}], data:{trialid: "GL_02_a"}}
                ],
                rows: [1],
                columns: [5],
                horizontal: true
            };

            var graph_literacy2_b= {
                type: "survey-textglpercent",
                //Importante: los ID asignados a la pregunta 8A y 8B fueron cambiados por 8 y 9 para respetar el orden numerico y optimizar su identificacion en los analisis. Esto implica que el resto de las preguntas posteriores estan sumadas 1 numero. Por ejemplo, la pregunta 10 antes era la 9
                timeline: [
                    /*Pregunta normal*/
                    {preamble: "<p>A continuaci&oacute;n, le presentamos informaci&oacute;n sobre varios tipos de c&aacute;ncer.</p><br /><div class='centered'><img src='img/graph_2.png' /></div>",
                    questions: [{prompt:"<p>Aproximadamente, &iquest;qu&eacute; porcentaje de personas que muere por c&aacute;ncer,<br /> fallece por c&aacute;ncer de colon, c&aacute;ncer de mama, y c&aacute;ncer de pr&oacute;stata en conjunto? </p>", required:true}], data:{trialid: "GL_02_b"}}
                ],
                rows: [1],
                columns: [5],
                horizontal: true
            };

            var gl_alt1_1={
                type: "survey-textglpercent",
                timeline:[
                    {
                       preamble: "<p>A continuaci&oacute;n, le presentamos informaci&oacute;n sobre un trastorno llamado Adeolitis.</p><br /><div class='centered'><img src='img/graph_3.png' /></div>",
                       questions: [{prompt:"<p>Aproximadamente, &iquest;qu&eacute; porcentaje de personas sufri&oacute; Adeolitis en el a&ntilde;o 2000?</p>", required:true}], data:{trialid: "GL_03_01"}
                        },
                ],
            };

            var gl_alt1_2={
                type: "survey-multi-choice3",
                timeline:[
                    {
                       preamble: "<p>A continuaci&oacute;n, le presentamos informaci&oacute;n sobre un trastorno llamado Adeolitis.</p><br /><div class='centered'><img src='img/graph_3.png' /></div>",
                       questions: [{prompt:"<p>&iquest;Cu&aacute;ndo se produjo un incremento mayor en el porcentaje de personas que sufre Adeolitis?",
                       options: ["Entre 1975 y 1980","Entre 2000 y 2005","El incremento es igual en ambos intervalos","No lo s&eacute;"], required:true}], data:{trialid: "GL_03_02"}
                        },
                ],
            };

            var gl_alt1_3={
                type: "survey-text",
                timeline:[
                    {
                       preamble: "<p>A continuaci&oacute;n, le presentamos informaci&oacute;n sobre un trastorno llamado Adeolitis.</p><br /><div class='centered'><img src='img/graph_3.png' /></div>",
                       questions: [{prompt:"<p>Haga una estimaci&oacute;n: &iquest;qu&eacute; porcentaje de personas sufrir&aacute; Adeolitis en el a&ntilde;o 2010?</p>", required:true}], data:{trialid: "GL_03_03"}
                        },
                ],
            };

            var graph_literacy3_a={
                type: "survey-text",
                preamble: "<p>En la figura que aparece a continuaci&oacute;n, se representa mediante c&iacute;rculos el n&uacute;mero <br />de hombres y mujeres en un grupo de pacientes que padecen el trastorno X. <br />El n&uacute;mero total de c&iacute;rculos es 100.</p><br /><div class='centered'><img src='img/graph_4.png' /></div>",
                questions: [{prompt:"<p>De entre los 100 pacientes con el trastorno X, &iquest;cu&aacute;ntos son mujeres?</p>", required:true}], data:{trialid: "GL_04_a"}
            };

            var graph_literacy3_b={
                type: "survey-text",
                preamble: "<p>En la figura que aparece a continuaci&oacute;n, se representa mediante c&iacute;rculos el n&uacute;mero <br />de hombres y mujeres en un grupo de pacientes que padecen el trastorno X. <br />El n&uacute;mero total de c&iacute;rculos es 100.</p><br /><div class='centered'><img src='img/graph_4.png' /></div>",
                questions: [{prompt:"<p>&iquest;Cu&aacute;ntos m&aacute;s hombres que mujeres hay entre los 100 pacientes que padecen <br />el trastorno X?</p>", required:true}], data:{trialid: "GL_04_b"}
            };

            var gl_alt2_1_1={
                type: "survey-multi-choice3",
                timeline:[
                        {preamble: "<p>Imagine que ve los siguientes anuncios en las p&aacute;ginas 5 y 12 de una revista, respectivamente.<br />Cada uno de ellos hace referencia a un medicamento diferente para tratar los problemas <br />de coraz&oacute;n, e incluye un gr&aacute;fico mostrando la efectividad del medicamento comparada con <br />la efectividad de un placebo (una pastilla de azucar).</p><br /><div class='centered'><img src='img/graph_5.png' /></div>",
                        questions: [{prompt:"<p>En comparaci&oacute;n con el placebo, &iquest;qu&eacute; tratamiento supone un decremento mayor <br />en el porcentaje de pacientes que fallece?</p>",
                        options: ["Crosicol","Hertinol","Ambos son iguales","No lo s&eacute;"], required:true}], data:{trialid: "GL_05"}}
                ],
            };

            var gl_alt2_1_2={
                type: "survey-multi-choice3",
                timeline:[
                        {preamble: "<p>Imagine que lee los siguientes anuncios en el peri&oacute;dico, uno en la p&aacute;gina 15 y el otro en la <br />p&aacute;gina 17. Cada uno de ellos hace referencia a un tratamiento diferente para la soriasis,<br />e incluye un gr&aacute;fico mostrando la efectividad del tratamiento en dos momentos temporales.</p><br /><div class='centered'><img src='img/graph_6.png' /></div>",
                        questions: [{prompt:"<p>&iquest;Qu&eacute; tratamiento implica un decremento mayor en el porcentaje de pacientes enfermos?</p>",
                        options: ["Apsoriatin","Nopsorian","Ambos son iguales","No lo s&eacute;"], required:true}], data:{trialid: "GL_06"}}
                ],
            };

            var gl_alt2_1_3={
                type: "survey-multi-choice3",
                timeline:[
                        {preamble: "<p>A continuaci&oacute;n, le presentamos informaci&oacute;n sobre dos enfermedades llamadas Coliosis y Tiosis.</p><br /><div class='centered'><img src='img/graph_7.png' /></div>",
                        questions: [{prompt:"<p>&iquest;Qu&eacute; enfermedad presenta un incremento mayor en el porcentaje de personas afectadas <br />entre 1980 y 1990?</p>",
                        options: ["Coliosis","Tiosis","Ambas son iguales","No lo s&eacute;"], required:true}], data:{trialid: "GL_07"}
                        }
                ],
            };

            var graph_literacy3={
                type: "survey-textglpercent",
                preamble: "<p>A continuaci&oacute;n, le presentamos informaci&oacute;n sobre las terapias contra el c&aacute;ncer.</p><br /><div class='centered'><img src='img/graph_8.png' /></div>",
                    questions: [{prompt:"<p>&iquest;Qu&eacute; porcentaje de pacientes con c&aacute;ncer fallece tras recibir quimioterapia? </p>", required:true}], data:{trialid: "GL_08"}
            };

            // Creacion de timeline e inclusion de trials
            graph_literacy_experiment = [];
            if(window.innerWidth != screen.width || window.innerHeight != screen.height){
              graph_literacy_experiment.push({
                type: 'fullscreen',
                message: '<p>El experimento entrara en modo pantalla completa</p>',
                button_label: "Pantalla Completa",
                delay_after: 0,
                fullscreen_mode: true
              });
            }
            graph_literacy_experiment.push(graphexplanation);
            graph_literacy_experiment.push(graph_literacy1_a);
            graph_literacy_experiment.push(graph_literacy1_b);
            graph_literacy_experiment.push(graph_literacy2_a);
            graph_literacy_experiment.push(graph_literacy2_b);
            graph_literacy_experiment.push(gl_alt1_1);
            graph_literacy_experiment.push(gl_alt1_2);
            graph_literacy_experiment.push(gl_alt1_3);
            graph_literacy_experiment.push(graph_literacy3_a);
            graph_literacy_experiment.push(graph_literacy3_b);
            graph_literacy_experiment.push(gl_alt2_1_1);
            graph_literacy_experiment.push(gl_alt2_1_2);
            graph_literacy_experiment.push(gl_alt2_1_3);
            graph_literacy_experiment.push(graph_literacy3);
