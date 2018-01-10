var csvData = [];
var formats = [];
var contexts = [];
var responses = [];
var numbers = [];

var mainexplanation = {
    type: "instructions",
    pages: ["<div class = centerbox>" +
        "<p class = center-block-text>" +
        "Gracias por participar en este estudio.<br /><br />" +
        "A continuaci&oacute;n te presentaremos una serie de preguntas, mediante textos, im&aacute;genes o audio.<br /><br />" +
        "Cada bloque de preguntas tiene sus propias instrucciones, que ver&aacute;s al inicio de cada uno.<br /><br />" +
        "Para empezar, haz click en el siguiente bot&oacute;n.<br />" +
        "</p></div>"
    ],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data: {
        trialid: "Welcome_Screen"
    },
    on_finish: function(data) {
        console.log(csvData[0]);

    }
};

var idCsv = {
    type: "survey-textID",
    questions: [{
        prompt: "Ingrese su ID:"
    }],
    on_finish: function(data) {
        var id = this.input;
        console.log(id);



        d3.csv("ITEMS/Bloque1_A_FINAL_V2.csv", function(error, data) {
            if (error) throw error;
            console.log(typeof data[0]); // [{"Hello": "world"}, …]
            for (var i = 0; i < data.length; i++) {
                if (data[i].Participante == id) {
                    csvData.push(data[i]);
                }
            }
            console.log(csvData.length);
            obtainFormat();
            console.log(formats);
            obtainContext();
            console.log(contexts);
            obtainResponse();
            console.log(responses);
            obtainNumbers();
            console.log(numbers);
        });

    }
};

function obtainFormat(){
    var path;
    var kind;

    for (var i = 0; i < csvData.length; i++){
        path ="bayes_materiales/presentation_format/" ;

        if (csvData[i].IV4 == "Text"){
            kind = "nfab";
        }
        else /*if (csvData[i].IV1 == "QT")*/ {
            kind = "prre";
        }
        path += kind + "/input" ;

        if (csvData[i].IV1 == "Cancer"){
            path += "/ca_";
        }
        else /*if (csvData[i].IV1 == "VIH")*/ {
            path += "/pr_";
        }
        path += kind + ".txt";

        d3.text(path, function(error, data) {
            if (error) throw error;
            formats.push(data);

        });
    }
};

function obtainContext(){
    var path;
    for (var i = 0; i < csvData.length; i++){
        path ="bayes_materiales/problem_context/input" ;

        if (csvData[i].IV1 == "Cancer"){
            path += "/ca";
        }
        else /*if (csvData[i].IV1 == "VIH")*/ {
            path += "/pr";
        }
        path += "_context.txt";

        d3.text(path, function(error, data) {
            if (error) throw error;
            contexts.push(data);

        });
    }
};

function obtainResponse(){
    var path;
    for (var i = 0; i < csvData.length; i++){
        path ="bayes_materiales/response_type" ;

        if (csvData[i].IV1 == "QL"){
            path += "/gi";
        }
        else /*if (csvData[i].IV1 == "VIH")*/ {
            path += "/sg";
        }
        path += ".txt";

        d3.text(path, function(error, data) {
            if (error) throw error;
            responses.push(data);

        });
    }

};

function obtainNumbers(){

    d3.csv("bayes_materiales/numbers/numbers_bayes.csv", function(error, data) {

        for (i = 0; i < csvData.length; i++){
            for (j=0 ; j < data.length; j++){
                if( data[j].format == csvData[i].IV3 && data[j].prob == csvData[i].IV2 ){
                    numbers.push(data[j]);
                }

            }

        }

    });
};

function prepareText(){
    
}


var bayes_experiment = [];

bayes_experiment.push(mainexplanation);
bayes_experiment.push(idCsv);
bayes_experiment.push(mainexplanation);
