/**
@file
@name
 * The experiment Bayes
 *
 * CSCN lab
 *
 */

/**
Blocks f1 and f5
@name block_fkeys
@function
@param {event}  event

*/
onkeydown = function block_fkeys(event) {
  var x = event.which || event.keyCode;
  if (x == 112 || x == 116) {
    console.log("Blocked key");
    event.preventDefault();
    return false;
  } else {
    return;
  }
}

var csvData = []; // objects representing trial related data
var formats = {}; // strings with the format of each question
var contexts = {}; // strings with the context of each question
var responses = {}; // strings with the response of each question
var numbers = {}; // objects with the numbers of each question
var questions = {}; // strings with the question of each question
var prompts = []; // strings with the prompt of each question
var threads = []; // proccess reading a text file
var number_of_calls = 0; // number of process reading a textfile
var done = false; //indicates if all the proccess ended

/**
Reads the text in a file
@name readTextFile
@async
@function
@param {event}  file
@param {Array}  lista
@param {Integer}  index
@return {XMLHttpRequest} raw File

*/
function readTextFile(file, lista, index) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        lista[index] = allText;
        //post in window the message "done"
        window.postMessage("done", '*');
      }
    }
  }
  return rawFile;
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

function generate_questions() {
  d3.csv("items_bayes.csv", function(error, data) {
    if (error) throw error;
    for (var i = 0; i < data.length; i++) {
      csvData.push(data[i]);
    }
    obtainNumbers();
    window.addEventListener("message", function(event) {
      if (event.data == "done") {
        number_of_calls -= 1;
        if (number_of_calls == 0) {
          createPrompt();
          createTrial();
          jsPsych.finishTrial();
        }
      }
    })
    obtainNumbers(); //obtain the number (and inside of the function,the rest of the info)

    //if a proccess is done, update the number of calls left to do
    window.addEventListener("message", function(event) {
      if (event.data == "done") {
        number_of_calls -= 1;
        if (number_of_calls == 0) { //if all the process ended, continue to make the trial

          createPrompt();
          createTrial();
          jsPsych.finishTrial();
        }
      }
    });
    //if window has the message "number_got", executes the processes
    window.addEventListener("message", function(event) {
      if (event.data == "numbers_got") {
        number_of_calls = threads.length;
        threads.forEach(function(thread) {
          thread.send();
        })
      }
    });
  });
}

/**
Obtain formats of each trial
@name obtainFormat
@function
*/
function obtainFormat() {
  var path;
  var kind;

  //for each trial, make the corresponding path to file and read the data
  for (var i = 0; i < csvData.length; i++) {
    path = "bayes_materiales/presentation_format/" + csvData[i].presentation_format;


    if (csvData[i].presentation_format == "pifb") {
      path += "/final/fb_" + csvData[i].problem_context + "_" + csvData[i].prob + ".png";
      //ads the path to the image to the dictionary
      formats[i] = path;
    } else {
      path += "/input/" + csvData[i].problem_context + "_" + csvData[i].presentation_format + ".txt";
      //adds the process of reading the text to the list of process
      threads.push(readTextFile(path, formats, i));
    }
  }
};

/**
Obtain context of each trial
@name obtainContext
@function
*/
function obtainContext() {
  var path;
  //for each trial, make the corresponding path to file and read the data
  for (var i = 0; i < csvData.length; i++) {
    path = "bayes_materiales/problem_context/input/" + csvData[i].problem_context + "_context.txt";
    //adds the process of reading the text to the list of process
    threads.push(readTextFile(path, contexts, i));
  }
};

/**
Obtain question of each trial
@name obtainQuestion
@function
*/
function obtainQuestion() {

  var path;
  //for each trial, make the corresponding path to file and read the data
  for (var i = 0; i < csvData.length; i++) {
    path = "bayes_materiales/ppv_question/input/" + csvData[i].problem_context + "_question.txt";
    //adds the process of reading the text to the list of process
    threads.push(readTextFile(path, questions, i));
  }
};

/**
Obtain data of trials and generates them
@name obtainResponse
@function
*/
function obtainResponse() {
  var path;
  //for each trial, make the corresponding path to file and read the data
  for (var i = 0; i < csvData.length; i++) {
    path = "bayes_materiales/response_type/" + csvData[i].response_type + ".txt";
    //adds the process of reading the text to the list of process
    threads.push(readTextFile(path, responses, i));
  }

};

/**
Obtain numbers of each question
@name obtainNumbers
@function
*/
function obtainNumbers() {


  d3.csv("bayes_materiales/numbers/numbers_bayes.csv", function(error, data) {
    //for each trial, obtain the corresponding numbers and adds the to the dictionary
    for (i = 0; i < csvData.length; i++) {
      for (j = 0; j < data.length; j++) {
        if (data[j].format == csvData[i].presentation_format && data[j].prob == csvData[i].prob) {

          numbers[i] = data[j];
        }

      }

    }
    //after obtaining the numbers, obtain the rest of the info
    obtainFormat();
    obtainContext();
    obtainResponse();
    obtainQuestion();
    //puts in window the message "nnumbers_got"
    window.postMessage("numbers_got", '*');
  });
};

/**
Create the prompt of each trial
@name createPrompt
@function
*/
function createPrompt() {

  var qFormat;
  var qResponse;
  var qNumbers;
  var qQuestion;

  var phrase;
  var reg;
  //for each trial, make the corresponding path to file and read the data
  for (i = 0; i < csvData.length; i++) {
    phrase = contexts[i];

    qNumbers = numbers[i];
    qFormat = formats[i];
    qResponse = responses[i];
    qQuestion = questions[i];


    if (csvData[i].presentation_format == "pifb") { // if is an image
      phrase += "<img src='" + qFormat + "'/>" + qQuestion;
    } else {
      //
      qFormat = "<br><br>" + qFormat + "<br><br>";
      for (key in qNumbers) {

        //replace the keywords with its corresponding numeric value using regular expressions
        reg = "\\b" + key; // \bword\b
        qFormat = qFormat.replace(new RegExp(reg, 'g'), qNumbers[key]);

      }
      formats[i] = qFormat;
      phrase += qFormat + qQuestion;
    }

    //add the formats to the list
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
  console.log(prompts);
};

/**
Creates the trials and adds them to the timeline
@name createTrial
@function
*/
function createTrial() { //accordig to response

  var temp = "";


  for (i = 0; i < csvData.length; i++) {

    //create trial with the intro to the question
    var introToTrial = {
      type: 'instructions',
      pages: ['Pregunta ' + (i + 1)],
      show_clickable_nav: true
    }

    if (csvData[i].response_type == "gi") { //create the trial of type "gi"
      //parse the responses and converts them to a list that jsPsych understands
      if (temp == "") {
        var temp = responses[i].split(/\s\s+/);
        for (j = 0; j < (temp.length / 2) - 1; j++) {
          temp[j] += "<br>" + temp[j + Math.floor(temp.length / 2)]
        }
        temp = temp.splice(0, (temp.length / 2));
      }

      var typeTrial = {
        type: "survey-multi-choice",
        questions: [{
          prompt: prompts[i],
          options: temp,
          required: true,
          horizontal: true
        }],
        on_finish: function(data) {
          console.log("QL");
        }
      }

    } else { //create the trial of type "sg"

      var typeTrial = {
        type: "fill-in-blanks",
        preamble: prompts[i],
        fill_in_type: "number",
        fill_in_text: responses[i]
      }
    }

    //create a temporal timeline with the intro trial and the question trials
    //and append the temporal timeline to the definitive timeline
    var new_timeline = {
      timeline: [introToTrial, typeTrial]
    }

    jsPsych.pauseExperiment();
    jsPsych.addNodeToEndOfTimeline(new_timeline, jsPsych.resumeExperiment)

  }
};


var bayes_experiment = []; //definitive timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
  bayes_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
bayes_experiment.push(mainexplanation);
generate_questions();
