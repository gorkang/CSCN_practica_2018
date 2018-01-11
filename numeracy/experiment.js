

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

            // Inicio prueba
            var numeracyexplanation={
                type: "instructions",
                pages: ["<div class = centerbox>"+
                       //"<p class = center-block-text>"+
                       "<p>"+
                       "A continuaci&oacute;n debe responder 11 preguntas que servir&aacute;n para evaluar sus habilidades de c&aacute;lculo.<br /><br />"+
                       "Debe leer atentamente cada pregunta y responder la informaci&oacute;n que se solicita.<br /><br />"+
                       "</p></div>"],
                allow_keys: false,
                show_clickable_nav: true,
                timing_post_trial: 50,
                data:{trialid: "Instructions_Numeracy"}
            };

            var numeracy1 = {
                type: "survey-text",
                timeline: [
                    {questions: [{prompt:"<p class='limitnumeracy'>1. Imagina que tiramos un dado no cargado (de seis caras) 1000 veces.<br /> De esas 1000 veces, &iquest;cu&aacute;ntas veces crees que saldr&aacute; un numero par <br />(un 2, un 4 o un 6)?</p>"}],
                    data:{trialid: "LIP_01"}},
                    {questions: [{prompt:"<p class='limitnumeracy'>2. Las probabilidades de ganar un premio de 10 d&oacute;lares en la loter&iacute;a de JUEGA-GANA es del 1%. &iquest;Cu&aacute;nta gente crees que ganar&iacute;a el premio de 10 d&oacute;lares si 1000 personas <br /> compran un boleto de la loter&iacute;a JUEGA-GANA?</p>"}],
                    data:{trialid: "LIP_02"}}//,
                    //{questions: ["<p class='limitnumeracy'>3. La probabilidad de ganar un auto en el RIVERA EDICIONES es de 1 de cada 1000.<br /> &iquest;Que porcentaje de boletos de RIVERA EDICIONES ganan un auto?</p>"], data:{trialid: "LIP_03"}}
                ]
            };

            // Porcentual
            var numeracy1_a = {
                type: "survey-textnum2",
                questions: [{prompt:"<p class='limitnumeracy'>3. La probabilidad de ganar un auto en el RIVERA EDICIONES es de 1 de cada 1000.<br /> &iquest;Que porcentaje de boletos de RIVERA EDICIONES ganan un auto?</p>"}],
                data:{trialid: "LIP_03"}
            };

            var numeracy2 = {
                type: "survey-multi-choice2",
                timeline: [
                           {questions: [{prompt:"4. &iquest;Cu&aacute;l de los siguientes numeros representa el mayor riesgo de padecer una enfermedad?",
                           options: ["a) 1 de cada 100","b) 1 de cada 1000","c) 1 de cada 10"]}]},
                           {questions: [{prompt:"5. &iquest;Cu&aacute;l de los siguientes representa el mayor riesgo de padecer una enfermedad?",
                           options: ["a) 1%","b) 10%","c) 5%"]}]}
                           ],
                required: true
            };

            // Porcentual
            var numeracy3 = {
                type: "survey-textnum2",
                questions: [{prompt:"<p class='limitnumeracy'>6. Si el riesgo de padecer una enfermedad en los proximos 10 a&ntilde;os para una<br /> persona (A) es de 1% y el riesgo para otra persona (B) es el doble, &iquest;cu&aacute;l es<br /> el riesgo para la persona B?</p>"}],
                 data:{trialid: "LIP_06"}
            };

            var numeracy3_a = {
                type: "survey-text",
                timeline: [
                    //normal
                    //{questions: ["<p class='limitnumeracy'>6. Si el riesgo de padecer una enfermedad en los proximos 10 a&ntilde;os para una<br /> persona (A) es de 1% y el riesgo para otra persona (B) es el doble, &iquest;cu&aacute;l es<br /> el riesgo para la persona B?</p>"], data:{trialid: "LIP_06"}},
                    {questions: [{prompt:"<p class='limitnumeracy'>7. Si el riesgo de padecer una enfermedad en los proximos 10 a&ntilde;os para una<br /> persona (A) es de 1 de cada 100 y el riesgo para otra persona (B) es el doble,<br /> &iquest;cu&aacute;l es el riesgo para la persona B?</p>"}],
                    data:{trialid: "LIP_07"}},
                    {questions: [{prompt:"<p class='limitnumeracy'>8. Si el riesgo de padecer una enfermedad es del 10%, de cada 100 personas,<br /> &iquest;cu&aacute;nta gente se puede esperar que enferme?</p>"}],
                    data:{trialid: "LIP_08"}},
                    {questions: [{prompt:"<p class='limitnumeracy'>9. Si el riesgo de padecer una enfermedad es del 10%, de cada 1000 personas,<br /> &iquest;cu&aacute;nta gente se puede esperar que enferme?</p>"}],
                    data:{trialid: "LIP_09"}}
                ]
            };

            var numeracy4 = {
                type: "survey-textnum1",
                questions: [{prompt:"<p class='limitnumeracy'>10. Si el riesgo de padecer una enfermedad es de 20 de cada 100, esto ser&iacute;a lo <br />mismo que tener una probabilidad del</p>"}]
            };

            var numeracy5 = {
                type: "survey-text",
                questions: [{prompt:"<p class='limitnumeracy'>11. La probabilidad de contagiarse con un virus infeccioso es de 0,0005.<br /> De cada 10000 personas, &iquest;cu&aacute;ntas de ellas crees que se contagiar&aacute;n con <br />este virus?</p>"}], data:{trialid: "LIP_11"}
            };

            // Creacion de timeline e inclusion de trials
            numeracy_experiment = [];
            if(window.innerWidth != screen.width || window.innerHeight != screen.height){
              numeracy_experiment.push({
                type: 'fullscreen',
                message: '<p>El experimento entrara en modo pantalla completa</p>',
                button_label: "Pantalla Completa",
                delay_after: 0,
                fullscreen_mode: true
              });
            }
            numeracy_experiment.push(numeracyexplanation);
            numeracy_experiment.push(numeracy1);
            numeracy_experiment.push(numeracy1_a);
            numeracy_experiment.push(numeracy2);
            numeracy_experiment.push(numeracy3);
            numeracy_experiment.push(numeracy3_a);
            numeracy_experiment.push(numeracy4);
            numeracy_experiment.push(numeracy5);
