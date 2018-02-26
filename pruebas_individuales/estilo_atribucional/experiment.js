/**
@file
@name
 * The experiment 195336
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

var screen_estilo_atribucional_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Estilo atribucional</big></b><br />'+
    "A continuación, usted encontrará una serie de preguntas relacionadas con distintas experiencias de su vida, por favor seleccione la alternativa que más lo represente."+
    '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var likert_scale = ["Completamente <br> en desacuerdo","Moderadamente <br> en desacuerdo","Ligeramente <br> de acuerdo","Moderadamente <br> de acuerdo", "Completamente <br> de acuerdo"];

var survey02 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />El que yo llegue a ser un líder depende principalmente de mis habilidades.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey03 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi vida ha sido influenciada en gran medida por eventos inesperados.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey04 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Yo siento que lo que pasa en mi vida está muy determinado por la gente que tiene poder (padres, jefes, políticos).<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey05 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />El hecho de tener un accidente cuando voy manejando, depende principalmente de mi mismo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey06 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando hago planes, estoy casi seguro de que los llevare a cabo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey07 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Ciertamente, a veces no puedo evitar tener mala suerte con mis asuntos personales.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey08 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Como yo tengo buena suerte, siempre las cosas me salen bien.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey09 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />A pesar de estar bien capacitado, no conseguiré un buen empleo a menos que alguien influyente me ayude.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey10 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />La cantidad de amigos que tengo está determinada por mi propia simpatía.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey11 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />He descubierto que si algo va a suceder, ello sucederá igual independientemente de lo que yo haga.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey12 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Yo creo que los ricos y políticos controlan mi vida de muchas maneras diferentes.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey13 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Si tengo un accidente automovilístico ello se debe a mi mala suerte.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey14 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />La gente como yo tiene muy poca oportunidad de defender sus intereses personales<br>cuando esos intereses entran en conflicto con los grupos poderosos (ricos, políticos).<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey15 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />No siempre es apropiado para mí planear muy por adelantado porque de todas maneras<br> muchas cosas resultan ser asunto de buena o mala suerte.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey16 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />En este país, para uno lograr lo que quiere necesariamente tiene que halagar a alguien.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey17 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />El que yo llegue a ser un líder dependerá de la suerte que yo tenga.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey18 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Yo siento que la gente que tiene algún poder sobre mí (padres, familiares, jefes),<br> trata de decidir lo que sucederá en mi vida.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey19 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />En la mayoría de los casos yo puedo decidir lo que sucederá en mi vida.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey20 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Normalmente soy capaz de defender mis intereses personales.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey21 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Si tengo un accidente cuando voy manejando, toda la culpa es del otro conductor.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey22 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando logro lo que quiero es porque he trabajado mucho en ello.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey23 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando quiero que mis planes me salgan bien los preparo de manera que le den en el<br>gusto a la gente que tiene influencia sobre mi (padres, jefes)<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey24 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mi vida está determinada por mis propias acciones.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey25 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tener pocos o muchos amigos depende del destino de cada uno.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};


// Creacion de timeline e inclusion de trials
estilo_atribucional_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  estilo_atribucional_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
estilo_atribucional_experiment.push(screen_estilo_atribucional_experiment);

estilo_atribucional_experiment.push(survey02);
estilo_atribucional_experiment.push(survey03);
estilo_atribucional_experiment.push(survey04);
estilo_atribucional_experiment.push(survey05);
estilo_atribucional_experiment.push(survey06);
estilo_atribucional_experiment.push(survey07);
estilo_atribucional_experiment.push(survey08);
estilo_atribucional_experiment.push(survey09);
estilo_atribucional_experiment.push(survey10);
estilo_atribucional_experiment.push(survey11);
estilo_atribucional_experiment.push(survey12);
estilo_atribucional_experiment.push(survey13);
estilo_atribucional_experiment.push(survey14);
estilo_atribucional_experiment.push(survey15);
estilo_atribucional_experiment.push(survey16);
estilo_atribucional_experiment.push(survey17);
estilo_atribucional_experiment.push(survey18);
estilo_atribucional_experiment.push(survey19);
estilo_atribucional_experiment.push(survey20);
estilo_atribucional_experiment.push(survey21);
estilo_atribucional_experiment.push(survey22);
estilo_atribucional_experiment.push(survey23);
estilo_atribucional_experiment.push(survey24);
estilo_atribucional_experiment.push(survey25);
