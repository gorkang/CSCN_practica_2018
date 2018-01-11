

            /* ********************************* VARIABLES GENERALES ********************************* */

            var verbal_crt_experiment_ids = [1,2,3,4,5,6,7,8,9,10];
            var first_verbalcrt = 0;
            var second_verbalcrt = 0;
            var third_verbalcrt = 0;
            var fourth_verbalcrt = 0;
            var fifth_verbalcrt = 0;
            var sixth_verbalcrt = 0;
            var seventh_verbalcrt = 0;
            var eighth_verbalcrt = 0;
            var nineth_verbalcrt = 0;
            var tenth_verbalcrt = 0;

            var crt_experiment_ids = [1,2,3,4,5,6,7];
            var first_crt_experiment = 0;
            var second_crt_experiment = 0;
            var third_crt_experiment = 0;
            var fourth_crt_experiment = 0;
            var fifth_crt_experiment = 0;
            var sixth_crt_experiment = 0;
            var seventh_crt_experiment = 0;

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

            function randomize_verbalcrt() {
                sorted_verbal_ids = [];
                sorted_verbal_ids = shuffle(verbal_crt_experiment_ids);
                console.log(sorted_verbal_ids);
                first_verbalcrt = sorted_verbal_ids.next().value;
                second_verbalcrt = sorted_verbal_ids.next().value;
                third_verbalcrt = sorted_verbal_ids.next().value;
                fourth_verbalcrt = sorted_verbal_ids.next().value;
                fifth_verbalcrt = sorted_verbal_ids.next().value;
                sixth_verbalcrt = sorted_verbal_ids.next().value;
                seventh_verbalcrt = sorted_verbal_ids.next().value;
                eighth_verbalcrt = sorted_verbal_ids.next().value;
                nineth_verbalcrt = sorted_verbal_ids.next().value;
                tenth_verbalcrt = sorted_verbal_ids.next().value;
            }

            function set_verbalcrt(index2){
               if (index2 == 1){ crt_experiment.push(verbal_crt1); }
               if (index2 == 2){ crt_experiment.push(verbal_crt2); }
               if (index2 == 3){ crt_experiment.push(verbal_crt3); }
               if (index2 == 4){ crt_experiment.push(verbal_crt4); }
               if (index2 == 5){ crt_experiment.push(verbal_crt5); }
               if (index2 == 6){ crt_experiment.push(verbal_crt6); }
               if (index2 == 7){ crt_experiment.push(verbal_crt7); }
               if (index2 == 8){ crt_experiment.push(verbal_crt8); }
               if (index2 == 9){ crt_experiment.push(verbal_crt9); }
               if (index2 == 10){ crt_experiment.push(verbal_crt10); }
            }

            function randomize_crt_experiment() {
                sorted_crt_experiment_ids = [];
                sorted_crt_experiment_ids = shuffle(crt_experiment_ids);
                console.log(sorted_crt_experiment_ids);
                first_crt_experiment = sorted_crt_experiment_ids.next().value;
                second_crt_experiment = sorted_crt_experiment_ids.next().value;
                third_crt_experiment = sorted_crt_experiment_ids.next().value;
                fourth_crt_experiment = sorted_crt_experiment_ids.next().value;
                fifth_crt_experiment = sorted_crt_experiment_ids.next().value;
                sixth_crt_experiment = sorted_crt_experiment_ids.next().value;
                seventh_crt_experiment = sorted_crt_experiment_ids.next().value;
            }

            function set_crt_experiment(index3){
               if (index3 == 1){ crt_experiment.push(crt1); }
               if (index3 == 2){ crt_experiment.push(crt2); }
               if (index3 == 3){ crt_experiment.push(crt3); }
               if (index3 == 4){ crt_experiment.push(crt4); }
               if (index3 == 5){ crt_experiment.push(crt5); }
               if (index3 == 6){ crt_experiment.push(crt6); }
               if (index3 == 7){ crt_experiment.push(crt7); }
            }

            /* ********************************* PANTALLAS DE INICIO Y DESPEDIDA ********************************* */

            var screen_crt_experiment = {
                type: 'instructions',
                pages: ['<p><center>crt_experiment<br /><br />Presiona la tecla ENTER para continuar.</center></p>'],
                cont_key: [13],
                show_clickable_nav: true,
                data:{trialid: "Screen_crt_experiment"},
                on_trial_start: function(){
                    bloquear_enter = 0;
                }
            };

            var screen_goodbye = {
                type: 'instructions',
                pages: ['<p><center>Hemos terminado, excelente trabajo.<br /><br />Muchas gracias por su colaboraci&oacute;n.<br /><br />Por favor, llame al examinador.'],
                cont_key: [13],
                show_clickable_nav: true,
                data:{trialid: "Screen_goodbye"},
                on_trial_start: function(){
                    bloquear_enter = 0;
                }
            }

            /* ********************************* INICIO PRUEBAS ********************************* */

            // -----------------------------------------------------------------------------------------
            // ----------------------------------- crt_experiment -------------------------------------------------
            // -----------------------------------------------------------------------------------------

            var crtexplanation={
                type: "instructions",
                pages: ["<div class = centerbox>"+
                       "<p class = center-block-text>"+
                       "En las siguientes p&aacute;ginas vas a ver varios &iacute;tems que difieren en dificultad.<br /><br />"+
                       "Responde todos los que puedas."+
                       "</p></div>"],
                allow_keys: false,
                show_clickable_nav: true,
                timing_post_trial: 50,
                data:{trialid: "Instructions_crt_experiment"}
            };

            var crt1 = {
                type: "survey-textcrt1",
                preamble: "<div class='crt_experiment_text'>Un bate y una pelota cuestan $1.100 en total. El bate cuesta $1.000 m&aacute;s que la pelota.<br /><br /></div>",
                questions: [{prompt:"&iquest;Cu&aacute;nto cuesta la pelota?<br /><br />"}],
                data: {trialid: "crt_experiment_01"}
            };

            var crt2 = {
                type: "survey-textcrt2",
                preamble: "<div class='crt_experiment_text'>Si 5 m&aacute;quinas demoran 5 minutos en hacer 5 aparatos.<br /><br /></div>",
                questions: [{prompt:"&iquest;Cu&aacute;nto tiempo se demorar&iacute;an 100 m&aacute;quinas en hacer 100 aparatos?<br /><br />"}],
                data: {trialid: "crt_experiment_02"}
            };

            var crt3 = {
                type: "survey-textcrt3",
                preamble: "<div class='crt_experiment_text'>En un lago hay un manto de hojas de lirios. Cada d&iacute;a el manto dobla su tama&ntilde;o. <br />Si el manto de lirios se demora 48 d&iacute;as en cubrir el lago completo,<br /><br /></div>",
                questions: [{prompt:"&iquest;cu&aacute;nto se demorar&iacute;a el manto de lirios en cubrir la mitad del lago?<br /><br />"}],
                data: {trialid: "crt_experiment_03"}
            };

            var crt4 = {
                type: "survey-textcrt3",
                preamble: "<div class='crt_experiment_text'>Si Jos&eacute; puede beber un barril de agua en 6 d&iacute;as y Mar&iacute;a puede beber un barril de agua en 12 d&iacute;as<br /><br /></div>",
                questions: [{prompt:"&iquest;Cu&aacute;nto se demorar&iacute;an en tomar un barril de agua juntos?<br /><br />"}],
                data: {trialid: "crt_experiment_04"}
            };

            var crt5 = {
                type: "survey-textcrt4",
                preamble: "<div class='crt_experiment_text'>Pedro recibi&oacute; tanto la quinceava nota m&aacute;s alta como la quinceava nota m&aacute;s baja en su clase<br /><br /></div>",
                questions: [{prompt:"&iquest;Cu&aacute;ntos estudiantes hay en la clase?<br /><br />"}],
                data: {trialid: "crt_experiment_05"}
            };

            var crt6 = {
                type: "survey-textcrt1",
                preamble: "<div class='crt_experiment_text'>Un hombre compra un cerdo a $60.000, lo vende a $70.000, lo vuelve a comprar por $80.000 <br />y finalmente lo vende por $90.000<br /><br /></div>",
                questions: [{prompt:"&iquest;cu&aacute;nto ha ganado?<br /><br />"}],
                data: {trialid: "crt_experiment_06"}
            };

            var crt7 = {
                type: "survey-multi-choice",
                timeline:[
                    {
                        questions: [{prompt:"<div class = centerbox>"+
                       "<p class = justified>"+
                       "Sim&oacute;n decide invertir $8.000.000 en el mercado de acciones un d&iacute;a a inicios de 2008. Seis<br />"+
                       "meses despu&eacute;s de haber invertido, el 17 de julio, las acciones que hab&iacute;a comprado bajaron un"+
                       "50%. Afortunadamente para Sim&oacute;n, desde el 17 de julio hasta el 17 de octubre, las acciones que"+
                       "hab&iacute;a comprado subieron un 75%. En este momento, Sim&oacute;n ha:"+
                       "</p><br /><br /></div>",
                       options: ["1. No ha ganado ni perdido dinero","2. Ha ganado dinero","3. Ha perdido dinero"]}],
                        data: {trialid: "crt_experiment_07"},
                        horizontal: true
                        },
                ],
                required: 'true'
            };

            // -----------------------------------------------------------------------------------------
            // ----------------------------------- Verbal crt_experiment ------------------------------------------
            // -----------------------------------------------------------------------------------------

            var verbal_crtexplanation={
                type: "instructions",
                pages: ["<div class = centerbox>"+
                       "<p class = center-block-text>"+
                       "(Verbal) En las siguientes p&aacute;ginas vas a ver varios &iacute;tems que difieren en dificultad.<br /><br />"+
                       "Responde todos los que puedas."+
                       "</p></div>"],
                allow_keys: false,
                show_clickable_nav: true,
                timing_post_trial: 50,
                data:{trialid: "Instructions_VCRT"}
            };

            var verbal_crt1 = {
                type: "survey-text",
                preamble: "<div class='crt_experiment_text'>El pap&aacute; de Mar&iacute;a tiene 5 hijas y ning&uacute;n hijo: Nana, Nene, Nini, Nono<br /><br /></div>",
                questions: [{prompt:"&iquest;Cu&aacute;l es probablemente el nombre de la quinta hija ?<br /><br />"}],
                data: {trialid: "VCRT_01"}
            };

            var verbal_crt2 = {
                type: "survey-text",
                preamble: "<div class='crt_experiment_text'>Si estuvieras corriendo una carrera y pasaras a la persona que va en segundo lugar<br /><br /></div>",
                questions: [{prompt:"&iquest;En qu&eacute; lugar estar&iacute;as ahora?<br /><br />"}],
                data: {trialid: "VCRT_02"}
            };

            var verbal_crt3 = {
                type: "survey-text",
                preamble: "<div class='crt_experiment_text'>Es una noche de tormenta y un avi&oacute;n despega desde el aeropuerto JFK en Nueva York. La<br />tormenta empeora y el avi&oacute;n se estrella. La mitad cae en los Estados Unidos y la otra mitad en<br />Canad&aacute;<br /><br /></div>",
                questions: [{prompt:"&iquest;En qu&eacute; pa&iacute;s enterrar&iacute;as a los sobrevivientes?<br /><br />"}],
                data: {trialid: "VCRT_03"}
            };

            var verbal_crt4 = {
                type: "survey-text",
                preamble: "<div class='crt_experiment_text'>Un mono, una ardilla, y un p&aacute;jaro est&aacute;n haciendo una carrera a la punta de una palmera de cocos.<br /><br /></div>",
                questions: [{prompt:"&iquest;Qui&eacute;n conseguir&aacute; el pl&aacute;tano primero? &iquest;El mono, la ardilla o el p&aacute;jaro?<br /><br />"}],
                data: {trialid: "VCRT_04"}
            };

            var verbal_crt5 = {
                type: "survey-text",
                preamble: "<div class='crt_experiment_text'> En una casa de un piso color rosa, hab&iacute;a una persona rosa, un gato rosa, un pez rosa, un<br />computador rosa, una silla rosa, una tabla rosa, un tel&eacute;fono rosa, una ducha rosa<br />&iexcl;Todo era de color rosa!<br /><br /></div>",
                questions: [{prompt:"&iquest;De qu&eacute; color son probablemente las escaleras?<br /><br />"}],
                data: {trialid: "VCRT_05"}
            };

            var verbal_crt6 = {
                type: "survey-text",
                questions: [{prompt:"&iquest;Cuantos de cada animal puso Mois&eacute;s en el arca?<br /><br />"}],
                data: {trialid: "VCRT_06"}
            };

            var verbal_crt7 = {
                type: "survey-text",
                preamble: "<div class='crt_experiment_text'>El viento sopla en direcci&oacute;n oeste. Un tren el&eacute;ctrico viaja hacia el este<br /><br /></div>",
                questions: [{prompt:"&iquest;En qu&eacute; direcci&oacute;n cardinal viaja el humo de la locomotora?<br /><br />"}],
                data: {trialid: "VCRT_07"}
            };

            var verbal_crt8 = {
                type: "survey-text",
                preamble: "<div class='crt_experiment_text'>Si tienes solo un f&oacute;sforo y caminas dentro de una habitaci&oacute;n oscura donde hay aceite de lampara, un peri&oacute;dico y madera<br /><br /></div>",
                questions: [{prompt:"&iquest;Qu&eacute; cosa prender&iacute;as primero?<br /><br />"}],
                data: {trialid: "VCRT_08"}
            };

            var verbal_crt9 = {
                type: "survey-text",
                questions: [{prompt:"&iquest;Ser&iacute;a &eacute;tico para un hombre casarse con la hermana de su viuda?<br /><br />"}],
                data: {trialid: "VCRT_09"}
            };

            var verbal_crt10 = {
                type: "survey-text",
                preamble: "<div class='crt_experiment_text'>&iquest;Cu&aacute;l de las oraciones es correcta?:<br /><br /></div>",
                questions: [{prompt:"a) 'La yema del huevo son blancas' o b) 'La yema del huevo es blanca'<br /><br />"}],
                data: {trialid: "VCRT_10"}
            };


            /* ********************************* INICIALIZACION DE EXPERIMENTO ********************************* */

            crt_experiment = [];
            if(window.innerWidth != screen.width || window.innerHeight != screen.height){
              crt_experiment.push({
                type: 'fullscreen',
                fullscreen_mode: true
              });
            }
            randomize_verbalcrt();
            randomize_crt_experiment();

            // crt_experiment

            crt_experiment.push(screen_crt_experiment);

            crt_experiment.push(verbal_crtexplanation);

            set_verbalcrt(first_verbalcrt);
            set_verbalcrt(second_verbalcrt);
            set_verbalcrt(third_verbalcrt);
            set_verbalcrt(fourth_verbalcrt);
            set_verbalcrt(fifth_verbalcrt);
            set_verbalcrt(sixth_verbalcrt);
            set_verbalcrt(seventh_verbalcrt);
            set_verbalcrt(eighth_verbalcrt);
            set_verbalcrt(nineth_verbalcrt);
            set_verbalcrt(tenth_verbalcrt);

            //crt_experiment.push(crtexplanation);

            //set_crt_experiment(first_crt_experiment);
            //set_crt_experiment(second_crt_experiment);
            //set_crt_experiment(third_crt_experiment);
            //set_crt_experiment(fourth_crt_experiment);
            //set_crt_experiment(fifth_crt_experiment);
            //set_crt_experiment(sixth_crt_experiment);
            //set_crt_experiment(seventh_crt_experiment);

            crt_experiment.push(screen_goodbye);
