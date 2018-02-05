/**
 *
 * A verbal crt test in spanish randomized
 *
 * CSCN lab
 *
 */

/* ********************************* VARIABLES GENERALES ********************************* */

var verbal_crt_experiment_ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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

/* ********************************* FUNCIONES DE APOYO ********************************* */

function* shuffle(array) {
  //Suffles an array
  var i = array.length;
  while (i--) {
    yield array.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
  }
};

onkeydown = function block_fkeys(event) {
  //Block f1 and f5
  var x = event.which || event.keyCode;
  if (x == 112 || x == 116) {
    console.log("Blocked key");
    event.preventDefault();
    return false;
  } else {
    return;
  }
}

function randomize_verbalcrt() {
  //Randomizes the experiments
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

function set_verbalcrt(index2) {
  //Set the experiments
  if (index2 == 1) {
    crt_experiment.push(verbal_crt1);
  }
  if (index2 == 2) {
    crt_experiment.push(verbal_crt2);
  }
  if (index2 == 3) {
    crt_experiment.push(verbal_crt3);
  }
  if (index2 == 4) {
    crt_experiment.push(verbal_crt4);
  }
  if (index2 == 5) {
    crt_experiment.push(verbal_crt5);
  }
  if (index2 == 6) {
    crt_experiment.push(verbal_crt6);
  }
  if (index2 == 7) {
    crt_experiment.push(verbal_crt7);
  }
  if (index2 == 8) {
    crt_experiment.push(verbal_crt8);
  }
  if (index2 == 9) {
    crt_experiment.push(verbal_crt9);
  }
  if (index2 == 10) {
    crt_experiment.push(verbal_crt10);
  }
}

/* ********************************* PANTALLAS DE INICIO Y DESPEDIDA ********************************* */

var screen_crt_experiment = {
  type: 'instructions',
  pages: ['<p><left>crt_experiment<br /></p>'],
  cont_key: [13],
  show_clickable_nav: true,
  data: {
    trialid: "Screen_crt_experiment"
  }
};

/* ********************************* INICIO PRUEBAS ********************************* */
// -----------------------------------------------------------------------------------------
// ----------------------------------- Verbal crt_experiment ------------------------------------------
// -----------------------------------------------------------------------------------------

var verbal_crtexplanation = {
  type: "instructions",
  pages: ["<div class = centerbox>" +
    "<p class = center-block-text>" +
    "(Verbal) En las siguientes p&aacute;ginas vas a ver varios &iacute;tems que difieren en dificultad.<br /><br />" +
    "Responde todos los que puedas." +
    "</p></div>"
  ],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_VCRT"
  }
};

var verbal_crt1 = {
  type: "survey-text",
  preamble: "<div class='crt_experiment_text'>El pap&aacute; de Mar&iacute;a tiene 5 hijas y ning&uacute;n hijo: Nana, Nene, Nini, Nono<br /><br /></div>",
  questions: [{
    prompt: "&iquest;Cu&aacute;l es probablemente el nombre de la quinta hija ?<br /><br />"
  }],
  data: {
    trialid: "VCRT_01"
  }
};

var verbal_crt2 = {
  type: "survey-text",
  preamble: "<div class='crt_experiment_text'>Si estuvieras corriendo una carrera y pasaras a la persona que va en segundo lugar<br /><br /></div>",
  questions: [{
    prompt: "&iquest;En qu&eacute; lugar estar&iacute;as ahora?<br /><br />"
  }],
  data: {
    trialid: "VCRT_02"
  }
};

var verbal_crt3 = {
  type: "survey-text",
  preamble: "<div class='crt_experiment_text'>Es una noche de tormenta y un avi&oacute;n despega desde el aeropuerto JFK en Nueva York. La tormenta empeora y el avi&oacute;n se estrella. La mitad cae en los Estados Unidos y la otra mitad en Canad&aacute;<br /><br /></div>",
  questions: [{
    prompt: "&iquest;En qu&eacute; pa&iacute;s enterrar&iacute;as a los sobrevivientes?<br /><br />"
  }],
  data: {
    trialid: "VCRT_03"
  }
};

var verbal_crt4 = {
  type: "survey-text",
  preamble: "<div class='crt_experiment_text'>Un mono, una ardilla, y un p&aacute;jaro est&aacute;n haciendo una carrera a la punta de una palmera de cocos.<br /><br /></div>",
  questions: [{
    prompt: "&iquest;Qui&eacute;n conseguir&aacute; el pl&aacute;tano primero? &iquest;El mono, la ardilla o el p&aacute;jaro?<br /><br />"
  }],
  data: {
    trialid: "VCRT_04"
  }
};

var verbal_crt5 = {
  type: "survey-text",
  preamble: "<div class='crt_experiment_text'> En una casa de un piso color rosa, hab&iacute;a una persona rosa, un gato rosa, un pez rosa, un computador rosa, una silla rosa, una tabla rosa, un tel&eacute;fono rosa, una ducha rosa<br />&iexcl;Todo era de color rosa!<br /><br /></div>",
  questions: [{
    prompt: "&iquest;De qu&eacute; color son probablemente las escaleras?<br /><br />"
  }],
  data: {
    trialid: "VCRT_05"
  }
};

var verbal_crt6 = {
  type: "survey-text",
  questions: [{
    prompt: "&iquest;Cuantos de cada animal puso Mois&eacute;s en el arca?<br /><br />"
  }],
  minSize: 1,
  data: {
    trialid: "VCRT_06"
  }
};

var verbal_crt7 = {
  type: "survey-text",
  preamble: "<div class='crt_experiment_text'>El viento sopla en direcci&oacute;n oeste. Un tren el&eacute;ctrico viaja hacia el este<br /><br /></div>",
  questions: [{
    prompt: "&iquest;En qu&eacute; direcci&oacute;n cardinal viaja el humo de la locomotora?<br /><br />"
  }],
  data: {
    trialid: "VCRT_07"
  }
};

var verbal_crt8 = {
  type: "survey-text",
  preamble: "<div class='crt_experiment_text'>Si tienes solo un f&oacute;sforo y caminas dentro de una habitaci&oacute;n oscura donde hay aceite de lampara, un peri&oacute;dico y madera<br /><br /></div>",
  questions: [{
    prompt: "&iquest;Qu&eacute; cosa prender&iacute;as primero?<br /><br />"
  }],
  data: {
    trialid: "VCRT_08"
  }
};

var verbal_crt9 = {
  type: "survey-text",
  questions: [{
    prompt: "&iquest;Ser&iacute;a &eacute;tico para un hombre casarse con la hermana de su viuda?<br /><br />"
  }],
  data: {
    trialid: "VCRT_09"
  }
};

var verbal_crt10 = {
  type: "survey-text",
  preamble: "<div class='crt_experiment_text'>&iquest;Cu&aacute;l de las oraciones es correcta?:<br /><br /></div>",
  questions: [{
    prompt: "a) 'La yema del huevo son blancas' o b) 'La yema del huevo es blanca'<br /><br />"
  }],
  data: {
    trialid: "VCRT_10"
  }
};


/* ********************************* INICIALIZACION DE EXPERIMENTO ********************************* */

crt_experiment = [];
if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
  //If not FULLSCREEN enable fullscreen
  crt_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}
randomize_verbalcrt();

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
