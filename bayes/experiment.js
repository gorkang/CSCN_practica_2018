<!doctype html>
<html>
    <head>
        <title>Modulo Bayes</title>
        <!-- INICIO llamadas de JS, JQuery y CSS -->
        
        <!--
        Notas:
        * Este template asume que el archivo HTML a ejecutar, se encuentra en el mismo directorio que las
        carpetas de JsPsych, de imagenes y otros recursos a utilizar. Si se desea emplear otra estructura para
        ordenar las carpetas, se deben realizar los cambios respectivos en las llamadas a dichos recursos.
        * Si bien se listan todos los plugins empleados en la bateria completa, cuando se quiere ejecutar un modulo
        en particular, no es necesario que esten todas, para lo cual basta con dejar las que se requieren y borrar
        el resto.
        * Dado que la distribucion de elementos e imagenes en pantallas esta fijada para resoluciones de 1920x1080,
        hay elementos que se veran de forma erronea en otras resoluciones. Para corregir esto, se deben editar los
        valores respectivos en el archivo style.css
        * Para cumplir los requerimientos de cada prueba, los archivos javascript de varios plugin fueron
        modificados de distinta forma, por lo tanto, se recomienda emplear la carpeta que contiene los plugins
        modificados. En caso contrario, los experimentos pueden no comportarse de la forma esperada, o
        bien, simplemente no funcionar.
        -->
        
        <!-- JQuery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <!-- Libreria principal JsPsych -->
        <script src="jspsych-5.0.3/jspsych.js"></script>
        
        <!-- Plugin para recibir texto estilo survey -->
        <script src="jspsych-5.0.3/plugins/jspsych-survey-text.js"></script>
        <!-- Plugin custom bayes -->
        <script src="jspsych-5.0.3/plugins/jspsych-survey-textbayes.js"></script>
        <!-- Plugin custom numeracy -->
        <script src="jspsych-5.0.3/plugins/jspsych-survey-textnum1.js"></script>
        <!-- Plugin custom crt 1 -->
        <script src="jspsych-5.0.3/plugins/jspsych-survey-textcrt1.js"></script>
        <!-- Plugin custom crt 2 -->
        <script src="jspsych-5.0.3/plugins/jspsych-survey-textcrt2.js"></script>
        <!-- Plugin custom crt 3 -->
        <script src="jspsych-5.0.3/plugins/jspsych-survey-textcrt3.js"></script>
        <!-- Plugin curtom habilidad aritmetica -->
        <script src="jspsych-5.0.3/plugins/jspsych-survey-textha.js"></script>
        <!-- Plugin para desplegar elementos tipo instrucciones -->
        <script src="jspsych-5.0.3/plugins/jspsych-instructions.js"></script>
        <!-- Plugin para recibir texto estilo survey multi choice -->
        <script src="jspsych-5.0.3/plugins/jspsych-survey-multi-choice.js"></script>
        <!-- Plugin custom multi choice 1 -->
        <script src="jspsych-5.0.3/plugins/jspsych-survey-multi-choice1.js"></script>
        <!-- Plugin custom multi choice 2 -->
        <script src="jspsych-5.0.3/plugins/jspsych-survey-multi-choice2.js"></script>
        <!-- Plugin custom multi choice 3 -->
        <script src="jspsych-5.0.3/plugins/jspsych-survey-multi-choice3.js"></script>
        <!-- Plugin custom multi choice bayes -->
        <script src="jspsych-5.0.3/plugins/jspsych-survey-multi-choicebayes.js"></script>
        <!-- Plugin custom multi choice mental rotation -->
        <script src="jspsych-5.0.3/plugins/jspsych-survey-multi-choicemrbeta.js"></script>
        <!-- Plugin custom single audio -->
        <script src="jspsych-5.0.3/plugins/jspsych-single-audio.js"></script>
        <!-- Plugin para llamar funciones -->
        <script src="jspsych-5.0.3/plugins/jspsych-call-function.js"></script>
        <!-- Plugin para incrustar HTML -->
        <script src="jspsych-5.0.3/plugins/jspsych-html.js"></script>
        
        <script src="jspsych-5.0.3/plugins/jspsych-single-stim.js"></script>
        
        <!-- Documento CSS principal -->
        <link rel="stylesheet" type="text/css" href="style.css">
        
        <!-- Libreria para alertas customizadas + CSS respectivo -->
        <script src="dist/sweetalert.min.js"></script>
        <link rel="stylesheet" type="text/css" href="dist/sweetalert.css">
        
        <!-- FIN llamadas de JS, JQuery y CSS -->
    </head>
    <body>
        <script>
            // Puedes escribir el codigo de tu experimento debajo de esta linea

        </script>
    </body>
</html>