
var questions = [];


var mainexplanation={
    type: "instructions",
    pages: ["<div class = centerbox>"+
           "<p class = center-block-text>"+
           "Gracias por participar en este estudio.<br /><br />"+
           "A continuaci&oacute;n te presentaremos una serie de preguntas, mediante textos, im&aacute;genes o audio.<br /><br />"+
           "Cada bloque de preguntas tiene sus propias instrucciones, que ver&aacute;s al inicio de cada uno.<br /><br />"+
           "Para empezar, haz click en el siguiente bot&oacute;n.<br />"+
           "</p></div>"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Welcome_Screen"},
    on_finish: function(data){
        console.log(questions[0]);

    }
};

var idCsv={
    type:"survey-textID",
    questions: [{prompt: "Ingrese su ID:"}],
    on_finish: function(data){
        var id = this.input;
        console.log(id);



        d3.csv("ITEMS/Bloque1_A_FINAL_V2.csv", function(error, data) {
            if (error) throw error;
            console.log(typeof data[0]); // [{"Hello": "world"}, …]
            for (i = 0; i < data.length; i++) {
                if (data[i].Participante == id){
                    questions.push(data[i]);
                }
            }
            console.log(questions[0]);
        });

    }
};


var bayes_experiment = [];

bayes_experiment.push(mainexplanation);
bayes_experiment.push(idCsv);
bayes_experiment.push(mainexplanation);
