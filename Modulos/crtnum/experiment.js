
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
            var crtNumintro={
                type: "instructions",
                pages: ["<div class = centerbox>"+
                       //"<p class = center-block-text>"+
                       "<p>"+
                       "CRT-V.<br /><br />"+
                       "Presiona ENTER para continuar<br /><br />"+
                       "</p></div>"],
                allow_keys: true,
                show_clickable_nav: true,
                timing_post_trial: 50,
                data:{trialid: "Intro_crtNum"}
            };

            var crtNumexplanation={
                type: "instructions",
                pages: ["<div class = centerbox>"+
                       //"<p class = center-block-text>"+
                       "<p>"+
                       "En las siguientes p&aacute;ginas vas a ver varios &iacute;tems que difieren en dificultad.<br /><br />"+
                       "Responde todos los que puedas<br /><br />"+
                       "</p></div>"],
                allow_keys: false,
                show_clickable_nav: true,
                timing_post_trial: 50,
                data:{trialid: "Instructions_crtNum"}
            };

            var crtNum1 = {
                type: "survey-text",
                endword: "pesos",
                timeline: [
                    {questions: [{prompt:"<p class='limitnumeracy'>1. Un bate y una pelota cuestan $1.100 en total. El bate cuesta $1.000 m&aacute;s que la pelota., &iquest;Cu&aacute;nto cuesta la pelota?</p>"}], data:{trialid: "LIP_01"}},
                    //{questions: ["<p class='limitnumeracy'>3. La probabilidad de ganar un auto en el RIVERA EDICIONES es de 1 de cada 1000.<br /> &iquest;Que porcentaje de boletos de RIVERA EDICIONES ganan un auto?</p>"], data:{trialid: "LIP_03"}}
                ]
            };
            var crtNum2 = {
                type: "survey-text",
                endword: "dias",
                timeline: [
                    {questions: [{prompt:"<p class='limitnumeracy'>2. Si Jos&eacute; puede beber un barril de agua en 6 d&iacute;as y Mar&iacute;a puede beber un barril de agua en 12 d&iacute;as, &iquest;Cu&aacute;nto se demorar&iacute;an en tomar un barril de agua juntos?</p>"}], data:{trialid: "LIP_02"}},
                    //{questions: ["<p class='limitnumeracy'>3. La probabilidad de ganar un auto en el RIVERA EDICIONES es de 1 de cada 1000.<br /> &iquest;Que porcentaje de boletos de RIVERA EDICIONES ganan un auto?</p>"], data:{trialid: "LIP_03"}}
                ]
            };
            var crtNum3 = {
                type: "survey-text",
                endword: "minutos",
                timeline: [
                    {questions: [{prompt:"<p class='limitnumeracy'>3. Si 5 m&aacute;quinas demoran 5 minutos en hacer 5 aparatos., &iquest;Cu&aacute;nto tiempo se demorar&iacute;an 100 m&aacute;quinas en hacer 100 aparatos?</p>"}], data:{trialid: "LIP_03"}},
                    //{questions: ["<p class='limitnumeracy'>3. La probabilidad de ganar un auto en el RIVERA EDICIONES es de 1 de cada 1000.<br /> &iquest;Que porcentaje de boletos de RIVERA EDICIONES ganan un auto?</p>"], data:{trialid: "LIP_03"}}
                ]
            };
            var crtNum4 = {
                type: "survey-text",
                endword: "estudiantes",
                timeline: [
                    {questions: [{prompt:"<p class='limitnumeracy'>4. Pedro recibi&oacute; tanto la quinceava nota m&aacute;s alta como la quinceava nota m&aacute;s baja en su clase, &iquest;Cu&aacute;ntos estudiantes hay en la clase?</p>"}], data:{trialid: "LIP_04"}},
                    //{questions: ["<p class='limitnumeracy'>3. La probabilidad de ganar un auto en el RIVERA EDICIONES es de 1 de cada 1000.<br /> &iquest;Que porcentaje de boletos de RIVERA EDICIONES ganan un auto?</p>"], data:{trialid: "LIP_03"}}
                ]
            };
            var crtNum5 = {
                type: "survey-text",
                endword: "pesos",
                timeline: [
                    {questions: [{prompt:"<p class='limitnumeracy'>5. Un hombre compra un cerdo a $60.000, lo vende a $70.000, lo vuelve a comprar por $80.000 y finalmente lo vende por $90.000. &iquest;cu&aacute;nto ha ganado?</p>"}], data:{trialid: "LIP_05"}}//,
                    //{questions: ["<p class='limitnumeracy'>3. La probabilidad de ganar un auto en el RIVERA EDICIONES es de 1 de cada 1000.<br /> &iquest;Que porcentaje de boletos de RIVERA EDICIONES ganan un auto?</p>"], data:{trialid: "LIP_03"}}
                ]
            };



            var crtNum6 = {
                type: "survey-multi-choice2",
                timeline: [
                           {questions: [{prompt:"6.Sim&oacute;n decide invertir $8.000.000 en el mercado de acciones un d&iacute;a a inicios de 2008."+
                           " Seis meses despu&eacute;s de haber invertido, el 17 de julio, las acciones que hab&iacute;a comprado bajaron un 50%."+
                           "Afortunadamente para Sim&oacute;n, desde el 17 de julio hasta el 17 de octubre, las acciones que hab&iacute;a comprado subieron un 75%."+
                           " En este momento, Sim&oacute;n ha:",
                            options: ["a) No ha ganado ni perdido dinero",
                            "b) Ha ganado dinero",
                            "c) Ha perdido dinero"]}]}
                           ],
                required: true
            };


            var crtNum3_a = {
                type: "survey-text",
                endword: "dias",
                timeline: [
                    //normal
                    //{questions: ["<p class='limitnumeracy'>6. Si el riesgo de padecer una enfermedad en los proximos 10 a&ntilde;os para una<br /> persona (A) es de 1% y el riesgo para otra persona (B) es el doble, &iquest;cu&aacute;l es<br /> el riesgo para la persona B?</p>"], data:{trialid: "LIP_06"}},
                    {questions: [{prompt:"<p class='limitnumeracy'>7. En un lago hay un manto de hojas de lirios. Cada d&iacute;a el manto dobla su tama&ntilde;o."+
                    "Si el manto de lirios se demora 48 d&iacute;as en cubrir el lago completo"+
                    "&iquest;cu&aacute;nto se demorar&iacute;a el manto de lirios en cubrir la mitad del lago</p>"}], data:{trialid: "LIP_06"}}
                ]
            };


            // Creacion de timeline e inclusion de trials
            crtNum_experiment = [];
            crtNum_experiment.push(crtNumintro);

            crtNum_experiment.push(crtNumexplanation);
            crtNum_experiment.push(crtNum1);

            crtNum_experiment.push(crtNum2);
            crtNum_experiment.push(crtNum3);
            crtNum_experiment.push(crtNum4);
            crtNum_experiment.push(crtNum5);
            crtNum_experiment.push(crtNum6);

            crtNum_experiment.push(crtNum3_a);
