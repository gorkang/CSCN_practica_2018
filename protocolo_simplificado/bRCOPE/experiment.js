/**
 * CSCN lab
/**
This document was made with test_maker
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

questions = [];    //final timeline

questions_experiment = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>bRCOPE</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Instructions'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>1. Supongo que mi Iglesia por momentos me abandona.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_01'}
};
questions_experiment.push(question01);

var question02 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>2. Trato de comprender que Dios me fortalece a través de ciertas situaciones.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_02'}
};
questions_experiment.push(question02);

var question03 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>3. Pongo en entredicho el poder de Dios.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_03'}
};
questions_experiment.push(question03);

var question04 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>4. Junto con Dios, intento llevar a cabo mis planes.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_04'}
};
questions_experiment.push(question04);

var question05 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>5. Busco la ayuda de Dios, para olvidar mi enojo.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_05'}
};
questions_experiment.push(question05);

var question06 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>6. Busco el amor y el cuidado de Dios.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_06'}
};
questions_experiment.push(question06);

var question07 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>7. Pido perdón por mis pecados.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_07'}
};
questions_experiment.push(question07);

var question08 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>8. Me siento castigado por Dios por mi falta de devoción.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_08'}
};
questions_experiment.push(question08);

var question09 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>9. Pongo en duda el amor que Dios siente por mí.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_09'}
};
questions_experiment.push(question09);

var question10 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>10. Me enfoco en mi religión para dejar de preocuparme por mis problemas.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_10'}
};
questions_experiment.push(question10);

var question11 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>11. Me pregunto qué pude haber hecho para que Dios me castigue de esa manera.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_11'}
};
questions_experiment.push(question11);

var question12 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>12. Me he preguntado si Dios me ha abandonado.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_12'}
};
questions_experiment.push(question12);

var question13 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>13. Me siento convencido que el demonio hace que las cosas pasen.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_13'}
};
questions_experiment.push(question13);

var question14 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>14. Busco la cercanía de Dios.</div>", options: ['Nunca', 'Casi\n Nunca', 'A veces', 'Casi\n Siempre', 'Siempre'], required: true, horizontal: true}],
  data: {trialid: 'bRCOPE_14'}
};
questions_experiment.push(question14);

questions_experiment.unshift(instruction_screen_experiment);
questions.push.apply(questions, questions_experiment)

if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  questions.unshift({
    type: 'fullscreen',
    message: '<p>El experimento entrará en modo pantalla completa</p>',
    button_label: 'Full screen',
    delay_after: 0,
    fullscreen_mode: true
  });
}
