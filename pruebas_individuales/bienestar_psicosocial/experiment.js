/**
@file
@name
 * The experiment 482882
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

var screen_bienestar_psicosocial_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Bienestar psicosocial</big></b><br />'+
    "A continuación, usted encontrará una serie de preguntas relacionadas con distintas experiencias de su vida personal, por favor seleccione la alternativa que más lo represente."+
    '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var likert_scale = ["Completamente<br> en desacuerdo","Moderadamente<br> en desacuerdo","Ligeramente<br> en desacuerdo","Ligeramente<br> de acuerdo","Moderadamente<br> de acuerdo","Completamente<br> de acuerdo"];

var survey01 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando repaso la historia de mi vida estoy contento/a con cómo han resultado las cosas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_01"}
};

var survey02 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />A menudo me siento solo porque tengo pocos amigos íntimos con quienes compartir mis preocupaciones.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_02"}
};

var survey03 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />No tengo miedo de expresar mis opiniones, incluso cuando son opuestas a la mayoría de la gente.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_03"}
};

var survey04 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me preocupa cómo otra gente evalúa las elecciones que he hecho en mi vida.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_04"}
};

var survey05 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me resulta difícil dirigir mi vida hacia un camino que me satisfaga.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_05"}
};

var survey06 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Disfruto haciendo planes para el futuro y trabajar para hacerlos realidad.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_06"}
};

var survey07 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />En general, me siento seguro y positivo conmigo mismo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_07"}
};

var survey08 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />No tengo muchas personas que quieran escucharme cuando necesito hablar.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_08"}
};

var survey09 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tiendo preocuparme sobre lo que otra gente piensa de mí.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_09"}
};

var survey10 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me juzgo por lo que yo creo que es importante, no por los valores que otros piensan que es importante.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_10"}
};

var survey11 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />He sido capaz de construir un hogar y un modo de vida a mi gusto.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_11"}
};

var survey12 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Soy una persona activa al realizar los proyectos que propuse para mí mismo/a.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_12"}
};

var survey13 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Si tuviera la oportunidad, hay muchas cosas de mí mismo que cambiaría.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_13"}
};

var survey14 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Siento que mis amistades aportan muchas cosas.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_14"}
};

var survey15 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tiendo a estar influenciado por la gente con fuertes convicciones.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_15"}
};

var survey16 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />En general, siento que soy responsable de la situación en la que vivo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_16"}
};

var survey17 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me siento bien cuando pienso en lo que he hecho en el pasado y lo que espero hacer en el futuro.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_17"}
};

var survey18 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Mis objetivos en la vida han sido más una fuente de satisfacción que de frustración para mi.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_18"}
};

var survey19 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me gusta la mayor parte de los aspectos de mi personalidad.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_19"}
};

var survey20 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Me parece que la mayoría de las personas tiene más amigos que yo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_20"}
};

var survey21 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tengo confianza en mis opiniones aún si son contrarias al consenso general.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_21"}
};

var survey22 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Las demandas de la vida diaria a menudo me deprimen.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_22"}
};

var survey23 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tengo clara la dirección y el sentido de mi vida.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_23"}
};

var survey24 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />En general, con el tiempo siento que sigo aprendiendo más sobre mi mismo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_24"}
};

var survey25 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />En muchos aspectos, me siento decepcionado de mis logros en la vida.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_25"}
};

var survey26 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />No he experimentado muchas relaciones cercanas y de confianza.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_26"}
};

var survey27 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Es difícil para mí expresar mis propias opiniones en asuntos polémicos.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_27"}
};

var survey28 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Soy bastante bueno/a manejando muchas de mis responsabilidades en la vida diaria.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_28"}
};

var survey29 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />No tengo claro qué es lo que intento conseguir en la vida.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_29"}
};

var survey30 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Hace mucho tiempo que dejé de intentar hacer grandes mejoras o cambios en mi vida.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_30"}
};

var survey31 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />En su mayor parte, me siento orgulloso/a de quien soy y de la vida que llevo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_31"}
};

var survey32 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Sé que puedo confiar en mis amigos, y ellos saben que pueden confiar en mí.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_32"}
};

var survey33 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />A menudo cambio mis decisiones si mis amigos o mi familia están en desacuerdo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_33"}
};

var survey34 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />No quiero intentar nuevas formas de hacer las cosas, mi vida está bien como está.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_34"}
};

var survey35 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Pienso que es importante tener nuevas experiencias que desafíen lo que uno piensa sobre sí mismo y sobre el mundo.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_35"}
};

var survey36 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Cuando pienso en ello, realmente con los años no he mejorado mucho como persona.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_36"}
};

var survey37 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Tengo la sensación de que con el tiempo me he desarrollado mucho como persona .<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_37"}
};

var survey38 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Para mí, la vida ha sido un proceso continuo de estudio, cambio y crecimiento.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_38"}
};

var survey39 = {
  type: "survey-multi-choice1",
  questions: [{prompt: "<div class='justified'><br />Si me sintiera infeliz con mi situación de vida diaria daría los pasos más eficaces para cambiarla.<br /></div>", options: likert_scale, required: true, horizontal: true}],
  data: {trialid: "survey_39"}
};



// Creacion de timeline e inclusion de trials
bienestar_psicosocial_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  bienestar_psicosocial_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
bienestar_psicosocial_experiment.push(screen_bienestar_psicosocial_experiment);

bienestar_psicosocial_experiment.push(survey01);
bienestar_psicosocial_experiment.push(survey02);
bienestar_psicosocial_experiment.push(survey03);
bienestar_psicosocial_experiment.push(survey04);
bienestar_psicosocial_experiment.push(survey05);
bienestar_psicosocial_experiment.push(survey06);
bienestar_psicosocial_experiment.push(survey07);
bienestar_psicosocial_experiment.push(survey08);
bienestar_psicosocial_experiment.push(survey09);
bienestar_psicosocial_experiment.push(survey10);
bienestar_psicosocial_experiment.push(survey11);
bienestar_psicosocial_experiment.push(survey12);
bienestar_psicosocial_experiment.push(survey13);
bienestar_psicosocial_experiment.push(survey14);
bienestar_psicosocial_experiment.push(survey15);
bienestar_psicosocial_experiment.push(survey16);
bienestar_psicosocial_experiment.push(survey17);
bienestar_psicosocial_experiment.push(survey18);
bienestar_psicosocial_experiment.push(survey19);
bienestar_psicosocial_experiment.push(survey20);
bienestar_psicosocial_experiment.push(survey21);
bienestar_psicosocial_experiment.push(survey22);
bienestar_psicosocial_experiment.push(survey23);
bienestar_psicosocial_experiment.push(survey24);
bienestar_psicosocial_experiment.push(survey25);
bienestar_psicosocial_experiment.push(survey26);
bienestar_psicosocial_experiment.push(survey27);
bienestar_psicosocial_experiment.push(survey28);
bienestar_psicosocial_experiment.push(survey29);
bienestar_psicosocial_experiment.push(survey30);
bienestar_psicosocial_experiment.push(survey31);
bienestar_psicosocial_experiment.push(survey32);
bienestar_psicosocial_experiment.push(survey33);
bienestar_psicosocial_experiment.push(survey34);
bienestar_psicosocial_experiment.push(survey35);
bienestar_psicosocial_experiment.push(survey36);
bienestar_psicosocial_experiment.push(survey37);
bienestar_psicosocial_experiment.push(survey38);
bienestar_psicosocial_experiment.push(survey39);
