/**
@file
@name
 * The experiment 388615
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

onkeydown = function block_fkeys(event){
    var x = event.which || event.keyCode;
    if(x == 112 || x == 116){
        console.log("Blocked key");
        event.preventDefault();
        return false;
    }else{
        return;
    }
}

var screen_escala_experiencias_disociativas_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Escala experiencias disociativas</big></b><br />'+
    "Este cuestionario consiste de 28 preguntas sobre experiencias que UD. "+
     "puede tener en su vida diaria: Nos interesa cuan a menudo UD. tiene "+
     "estas experiencias. <br>"+
     "Es importante, sin embargo, que sus respuestas muestren con qué "+
     "frecuencia estas experiencias le suceden cuando UD. no está bajo la "+
     "influencia del alcohol o drogas. <br>"+
     "Para responder las preguntas, por favor determine en qué grado la "+
     "experiencia descrita en la pregunta se aplica a UD. y circule el número "+
     "que muestre qué porcentaje del tiempo UD tiene la experiencia.<br>"+
    '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};


var likert_scale = ["0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%"];

var survey02 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas tienen la experiencia de "+
"manejar un automóvil y de repente "+
"percatarse de que no recuerdan qué ha "+
"pasado durante todo o parte del viaje. ",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};
var survey03 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas encuentran que a veces "+
"estan escuchando a alguien hablar y de "+
"repente se percatan que no estaban "+
"escuchando parte o todo de lo que se estaba diciendo. ",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey04 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas tienen la experiencia de "+
"encontrarse a sí mismos en un lugar y no "+
"tener idea de cómo llegaron allí.",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey05 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas tienen la experiencia de "+
"encontrase a sí mismos vestidos con ropa "+
"que no recuerdan habérsela puesto.",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey06 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas tienen la experiencia de "+
"encontrar nuevas cosas entre sus "+
"pertenencias que no recuerdan haber "+
"comprado.",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey07 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas en ocasiones encuentran "+
"que son abordados por personas que no "+
"conocen quien lo llama por otro nombre o "+
"insiste en que se han conocido antes. ",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey08 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas a veces tienen la "+
"experiencia de sentirse como si estuvieran "+
"cerca de ellos o viéndose a si mismos y en "+
"realidad se ven a si mismos como si "+
"estuvieran mirando a otra persona.",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey09 = {
  type: "survey-multi-choice1",
  preamble:"A algunas personas se les ha dicho que en "+
"ocasiones no reconocen amigos o "+
"miembros de su familia. ",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey10 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas encuentran que no "+
"tienen recuerdos de algunos eventos "+
"importantes de su vida (por ejemplo, una "+
"boda o graduación).",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey11 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas tienen la experiencia de "+
"haber sido acusados de mentir cuando "+
"ellos no creen haber mentido.",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey12 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas tienen la experiencia de "+
"mirarse en el espejo y no reconocerse a sí "+
"mismos.",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey13 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas tienen la experiencia de "+
"sentir que otras personas, objetos y el"+
"mundo alrededor de ellos no es real.",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey14 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas tienen la experiencia de "+
"que sus cuerpos no les pertenecen a ellos.",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey15 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas tienen la experiencia de "+
"que en ocasiones estan recordando un "+
"evento pasado tan vividamente que sienten"+
"como si estuvieran re-viviendo ese evento.",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey16 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas tienen la experiencia de "+
"no estar seguros de si las cosas que ellos "+
"recuerdan sucedieron realmente o si solo "+
"lo soñaron.",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey17 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas tienen la experiencia de "+
"estar en un sitio familiar pero encontrarlo "+
"como extraño o desconocido.",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey18 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas encuentran que cuando "+
"estan viendo televisión o una película "+
"estan tan absortos en la historia que no se dan cuenta de otros eventos que suceden a su alrededor.",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey19 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas encuentran que se "+
"involucran tanto en una fantasía que "+
"sienten como si realmente les estuviera sucediendo a ellos.",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey20 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas encuentran que en "+
"ocasiones son capaces de ignorar el dolor.",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey21 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas encuentran que en "+
"ocasiones estan mirando fijamente al "+
"espacio, sin pensar en nada, y no se percatan del paso del tiempo.",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey22 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas en ocasiones encuentran "+
"que cuando estan solos hablan en voz alta "+
"a si mismos.",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey23 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas encuentran que en una "+
"situación ellos pueden actuar tan diferente "+
"comparado con otra situación que sienten casi como si fueran dos personas diferentes.",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey24 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas en ocasiones encuentran que en ciertas situaciones son capaces de "+
"hacer cosas con tal facilidad y espontaneidad que usualmente serían "+
"difíciles para ellos (por ejemplo, deportes, trabajo, situaciones sociales, etc.).",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey25 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas en ocasiones encuentran "+
"que no pueden recordar si han hecho algo o que solo pensaron en hacerlo (por "+
"ejemplo, no saber si han enviado una carta o solo haber pensado en enviarla).",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey26 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas encuentran evidencias de haber hecho cosas que no recuerdan haber hecho.",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey27 = {
  type: "survey-multi-choice1",
  preamble:"Algunas persona encuentran escritos, dibujos o notas entre sus pertenencias que "+
"ellos deben haber hecho pero no pueden recordar haberlas hecho.",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey28 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas a veces encuentran que escuchan voces dentro de su cabeza que "+
"les dice que hagan cosas o comentarios sobre cosas que ellos están haciendo.",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey29 = {
  type: "survey-multi-choice1",
  preamble:"Algunas personas a veces sienten como si estuvieran mirando al mundo a través de "+
"una niebla de manera que las personas y objetos parecen alejados o borrosos.",
  questions: [{prompt: "<div class='justified'><br />Marque qué porcentaje del tiempo le sucede esto a UD.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};


// Creacion de timeline e inclusion de trials
escala_experiencias_disociativas_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  escala_experiencias_disociativas_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
escala_experiencias_disociativas_experiment.push(screen_escala_experiencias_disociativas_experiment);

escala_experiencias_disociativas_experiment.push(survey02);
escala_experiencias_disociativas_experiment.push(survey03);
escala_experiencias_disociativas_experiment.push(survey04);
escala_experiencias_disociativas_experiment.push(survey05);
escala_experiencias_disociativas_experiment.push(survey06);
escala_experiencias_disociativas_experiment.push(survey07);
escala_experiencias_disociativas_experiment.push(survey08);
escala_experiencias_disociativas_experiment.push(survey09);
escala_experiencias_disociativas_experiment.push(survey10);
escala_experiencias_disociativas_experiment.push(survey11);
escala_experiencias_disociativas_experiment.push(survey12);
escala_experiencias_disociativas_experiment.push(survey13);
escala_experiencias_disociativas_experiment.push(survey14);
escala_experiencias_disociativas_experiment.push(survey15);
escala_experiencias_disociativas_experiment.push(survey16);
escala_experiencias_disociativas_experiment.push(survey17);
escala_experiencias_disociativas_experiment.push(survey18);
escala_experiencias_disociativas_experiment.push(survey19);
escala_experiencias_disociativas_experiment.push(survey20);
escala_experiencias_disociativas_experiment.push(survey21);
escala_experiencias_disociativas_experiment.push(survey22);
escala_experiencias_disociativas_experiment.push(survey23);
escala_experiencias_disociativas_experiment.push(survey24);
escala_experiencias_disociativas_experiment.push(survey25);
escala_experiencias_disociativas_experiment.push(survey26);
escala_experiencias_disociativas_experiment.push(survey27);
escala_experiencias_disociativas_experiment.push(survey28);
escala_experiencias_disociativas_experiment.push(survey29);
