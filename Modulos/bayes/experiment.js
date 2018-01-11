var csvData = [];
var formats = [];
var contexts = [];
var responses = [];
var numbers = [];
var questions = [];
var prompts = [];

function readTextFile(file, lista)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                lista.push(allText);
            }
        }
    }
    rawFile.send(null);
};

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



        d3.csv("exceltesteo.csv", function(error, data) {
            if (error) throw error;
            console.log(typeof data[0]); // [{"Hello": "world"}, …]
            for (var i = 0; i < data.length; i++) {
                if (data[i].Participante == id) {
                    csvData.push(data[i]);
                }
            }

            obtainNumbers();

            obtainFormat();

            obtainContext();

            obtainResponse();

            obtainQuestion();

            createPrompt();
            alert(":)");
            createTrial();

        });
        //readTextFile("ITEMS/Bloque1_A_FINAL_V2.csv", csvData);
        bayes_experiment.push(mainexplanation);
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
        readTextFile(path, formats);

/*
        d3.text(path, function(error, data) {
            if (error) throw error;
            formats.push(data);

        });
        */
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
        readTextFile(path, contexts);
        /*
        d3.text(path, function(error, data) {
            if (error) throw error;
            contexts.push(data);

        });
        */
    }
};


function obtainQuestion(){

    var path;
    for (var i = 0; i < csvData.length; i++){
        path ="bayes_materiales/ppv_question/input" ;

        if (csvData[i].IV1 == "Cancer"){
            path += "/ca";
        }
        else /*if (csvData[i].IV1 == "QT")*/ {
            path += "/pr";
        }

        path += "_question.txt";
        readTextFile(path, questions);
    }
};

function obtainResponse(){
    var path;
    for (var i = 0; i < csvData.length; i++){
        path ="bayes_materiales/response_type" ;

        if (csvData[i].IV4 == "QL"){
            path += "/gi";
        }
        else /*if (csvData[i].IV1 == "VIH")*/ {
            path += "/sg";
        }
        path += ".txt";
        readTextFile(path, responses);
        /*
        d3.text(path, function(error, data) {
            if (error) throw error;
            responses.push(data);

        });
        */
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


function createPrompt(){

    var qFormat;
    var qResponse;
    var qNumbers;
    var qQuestion;

    var phrase;
    var reg;

    for (i=0 ; i<csvData.length ; i++){
        phrase = contexts[i];

        qNumbers = numbers[i];
        qFormat = formats[i];
        qResponse = responses[i];
        qQuestion = questions[i];

        for (key in qNumbers){
            /*if (key != "format" && key != "prob"){
            } */
            reg = "\\b" + key; // \bword\b
            qFormat = qFormat.replace(new RegExp(reg, 'g'), qNumbers[key]);

        }
        formats[i] = qFormat;
        phrase += qFormat + qQuestion;
        prompts.push(phrase);

    }
    console.log(csvData.length);
    console.log(numbers);
    console.log(numbers.length);
    console.log(formats);
    console.log(formats.length);
    console.log(contexts);
    console.log(contexts.length);
    console.log(responses);
    console.log(responses.length);
    console.log(questions);
    console.log(questions.length);
    console.log(prompts[0]);
};

function createTrial(){//accordig to response

    console.log("EJJEJEJEJ");
    console.log(csvData.length);

    for (i=0 ; i<csvData.length ; i++){

        console.log(i);

        if (csvData[i].IV4 == "QL"){//gi

            var typeTrial = {
                type: "instructions",
                pages: [prompts[i]],
                allow_keys: false,
                show_clickable_nav: true,
                timing_post_trial: 50,
                on_finish: function(data) {
                    console.log("QL");

                }
            }
        }
        else{//sg

            var typeTrial = {
                type: "instructions",
                pages: [prompts[i]],
                allow_keys: false,
                show_clickable_nav: true,
                timing_post_trial: 50,
                on_finish: function(data) {
                    console.log("SG");

                }
            }
        }

        var new_timeline = {
            timeline:[typeTrial]
        }

        jsPsych.pauseExperiment();
        jsPsych.addNodeToEndOfTimeline(new_timeline, jsPsych.resumeExperiment)

    }
};


var bayes_experiment = [];

bayes_experiment.push(mainexplanation);
bayes_experiment.push(idCsv);
bayes_experiment.push(mainexplanation);
