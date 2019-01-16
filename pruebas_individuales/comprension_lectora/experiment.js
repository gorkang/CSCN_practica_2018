/**
@file
@name
 * The experiment ansiedad matematica
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

var screen_comprension_lectora_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Comprension lectora</big></b><br />'+
    "A continuaci&oacute;n realizar&aacute;s un test de comprensi&oacute;n, es decir, una prueba para valorar la comprensi&oacute;n<br />"+
    "cuando leen los textos. El test consiste en leer dos textos de una p&aacute;gina cada uno, y despu&eacute;s<br />"+
    "constestar unas preguntas. Para contestar, debes elegir una alternativa entre cuatro<br />"+
    "respuestas posibles teniendo en cuenta que solamente una de ellas es correcta. Marcar&aacute;s la<br />"+
    "alternativa correcta.<br /><br />"+
    "     En resumen, para hacer el test debes hacer lo siguiente:<br />"+
    "     1) Lee el primer texto<br />"+
    "     2) Constesta las preguntas marcando la respuesta correcta.<br />"+
    "     3) Cuando termines el primer texto haz lo mismo con el segundo<br /><br /><br />"+
    "Haz click en el siguiente bot&oacute;n para continuar"+
    '</p>'],
    data:{trialid: "Screen_WM"},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var cl_texto1 = {
    type: "instructions",
    pages: ["<div class = centerbox>"+
           "<p class = cl_text>"+
           "<span class='titulo'>Texto 1:  El Ping&#252;ino</span><br /><br /><br />"+
           "El ping&#252;ino es un ave que se cuenta por millones y que no conoce el hemisferio Norte. Vive en lugares muy diversos. S&oacute;lo algunas especies se han adaptado a lugares c&aacute;lidos como las islas Gal&aacute;pagos, pero la gran mayor&iacute;a de los ping&#252;inos prefiere las regiones fr&iacute;as de Sudam&eacute;rica, y de continentes como &Aacute;frica, Australia y sobre todo, la Ant&aacute;rtida, que es su h&aacute;bitat m&aacute;s com&uacute;n ya que no hay sol la mayor parte del a&ntilde;o. Los cient&iacute;ficos han descrito 17 especies. Los m&aacute;s peque&ntilde;os son los ping&#252;inos azules que viven en Australia y miden 40 cent&iacute;metros. La especie m&aacute;s grande es el elegante ping&#252;ino Emperador, enigm&aacute;tico habitante de la eterna noche invernal del Polo Sur, que llega a medir hasta 130 cent&iacute;metros y puede pesar m&aacute;s de 30 kilos.<br /><br />"+
           "En lo que coinciden todos los ping&#252;inos es en el recubrimiento de su cuerpo. Tienen una espesa capa de grasa y sobre ella un abrigo de plumas cortas y muy densas colocadas de tal manera que forman c&aacute;maras de aire aislantes del fr&iacute;o ambiente. Tambi&eacute;n coinciden en su solidaridad, es decir,  se ayudan unos a otros, incluso sin ser de la misma familia, lo que les permite hacer frente a los paisajes hostiles y climas duros en los que viven.<br /><br />"+
           "Pero lo m&aacute;s enternecedor y original es su comportamiento reproductor. Los ping&#252;inos Adelia, una de las especies de ping&#252;inos ant&aacute;rticos, incuban sus huevos y cr&iacute;an a sus peque&ntilde;os turn&aacute;ndose el macho y la hembra. Suelen formar parejas estables con baj&iacute;simo n&uacute;mero de divorcios. Mientras uno se queda con el huevo, el otro progenitor se aleja hasta el agua para buscar comida. Despu&eacute;s del nacimiento, ambos padres siguen compartiendo el cuidado de los polluelos y la b&uacute;squeda de comida. Comen peces y krill, un crust&aacute;ceo parecido a diminutas gambas muy abundante en las aguas del Polo Sur y que sirve tambi&eacute;n de alimento para las ballenas.<br /><br />"+
           "Sin embargo, en el caso del ping&#252;ino Emperador, otra de las especies ant&aacute;rticas, es el padre el que asume toda la incubaci&oacute;n del huevo durante nueve semanas. En ese tiempo, la madre se marcha a la costa en busca de algo para comer. No es un viaje de placer, tendr&aacute; que poner los cinco sentidos en sus traves&iacute;as para no ser devorada por alguno de sus peores enemigos. En el agua, el peligro mayor son las orcas; en el borde del casquete polar tambi&eacute;n acechan las focas Leopardo, animales grandes y solitarios, con cara de pocos amigos. Ambos disfrutan enormemente zamp&aacute;ndose ping&#252;inos. Mientras la madre est&aacute; fuera, el padre sobrevive echando mano de sus michelines, o reservas de grasa.<br /><br />"+
           "Una vez que nace el polluelo del ping&#252;ino Emperador, viene a darle el relevo su esposa, que asume la cr&iacute;a del peque&ntilde;o durante seis semanas. Durante ese tiempo, el macho emprende largas y pesad&iacute;simas caminatas de hasta 160 kil&oacute;metros en busca de la gran mariscada que le reponga de la paternidad; cuidar el huevo le ha supuesto perder hasta un tercio de su peso corporal. Cuando el peque&ntilde;o ya ha cumplido alrededor de 7 semanas, lo llevan a las guarder&iacute;as que se montan en las enormes comunidades de ping&#252;inos del Polo Sur, bajo la atenta vigilancia de unos pocos adultos responsables. De esta forma ambos miembros de la pareja pueden marcharse en busca de comida.<br /><br /></p></div><br /><br />"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Reading1"}
};

var cl_1 = {
    type: "survey-multi-choice-vertical",
    questions: [{prompt:"<p class = titulo>1. &iquest;Qu&eacute; forma c&aacute;maras de aire en los ping&#252;inos?</p>", options: ["a) Las plumas que recubren su cuerpo","b) La capa de grasa que recubre el cuerpo","c) Un abrigo de pelo que tapa su cuerpo","d) Una piel especial que recubre su cuerpo"], required: true}],
    data: {trialid:[["CL_1"]]}
};

var cl_2 = {
    type: "survey-multi-choice-vertical",
    questions: [{prompt:"<p class = titulo>2. &iquest;Qu&eacute; tienen en com&uacute;n todos los ping&#252;inos?</p>", options: ["a) El continente donde viven y el recubrimiento de su cuerpo","b) El recubrimiento y el tama&ntilde;o de su cuerpo","c) La ayuda que se prestan y el tama&ntilde;o de su cuerpo","d) El recubrimiento de su cuerpo y la ayuda que se prestan"], required: true}],
    data: {trialid:[["CL_2"]]}
};

var cl_3 = {
    type: "survey-multi-choice-vertical",
    questions: [{prompt:"<p class = titulo>3. Los ping&#252;inos Adelia tienen un comportamiento reproductor original porque:</p>", options: ["a) Los ping&#252;inos Adelia cr&iacute;an e incuban sus huevos","b) Los padres se ayudan para incubar y cuidar a las cr&iacute;as","c) Son los machos Adelia los que incuban los huevos","d) Cambian de pareja mientras cuidan de los huevos"], required:true}],
    data: {trialid:[["CL_3"]]}
};

var cl_4 = {
    type: "survey-multi-choice-vertical",
    questions: [{prompt:"<p class = titulo>4. El krill es:</p>", options: ["a) Un peque&ntilde;o pez que sirve de alimento a ping&#252;inos y ballenas","b) Un crust&aacute;ceo que se alimenta de peces y vive en el Polo Sur","c) Una especie de gamba que sirve de alimento a los ping&#252;inos","d) Un cr&uacute;staceo que se alimenta de gambas, al igual que los ping&#252;ino"], required:true}],
    data: {trialid:[["CL_4"]]}
};

var cl_5 = {
    type: "survey-multi-choice-vertical",
    questions: [{prompt:"<p class = titulo>5. &iquest;Qu&eacute; hacen los ping&#252;inos Emperador nada m&aacute;s nacer la cr&iacute;a?</p>", options: ["a) Los padres cuidan juntos del peque&ntilde;o durante varias semanas","b) El macho cuida a la cr&iacute;a y la hembra busca comida","c) Dejan a la cr&iacute;a al cuidado de adultos responsables y van a buscar comida","d) La hembra cuida a la cr&iacute;a mientras el macho se va a buscar comida"], required:true}],
    data: {trialid:[["CL_5"]]}
};

var cl_6 = {
  type: "survey-multi-choice-vertical",
  questions: [{prompt:"<p class = titulo>6. Entre los ping&#252;inos Emperador la incubaci&oacute;n del huevo la realiza:</p>", options:["a)El ping&#252;ino Emperador macho","b) Primero el macho y luego la hembra, indistintamente","c) El macho o la hembra","d) Primero la hembra y luego el macho"], required: true}],
  data: {trialid:[["CL_6"]]}
};

var cl_7 = {
  type: "survey-multi-choice-vertical",
  questions: [{prompt:"<p class = titulo>7. &iquest;Qu&eacute; animales se comen a los ping&#252;inos?</p>", options:["a)El ping&#252;ino Emperador macho incuba los huevos","b) El macho y la hembra se turnan para cuidar a sus hijos","c) Ping&#252;inos adultos cuidan de grupos de ping&#252;inos peque&ntilde;os","d) Pueden hacer frente a paisajes hostiles y climas muy duros"], required: true}],
  data: {trialid:[["CL_7"]]}
};

var cl_8 = {
  type: "survey-multi-choice-vertical",
  questions: [{prompt:"<p class = titulo>8. Un ejemplo de la solidaridad de los ping&#252;inos Emperador es que:</p>", options:["a)Porque el peque&ntilde;o ping&#252;ino ya puede vivir solo","b) Porque hay ping&#252;inos que habitan en el Polo Sur","c) Porque dejan a la cr&iacute;a escondida","d) Porque otros ping&#252;inos adultos cuidan de sus hijos"], required: true}],
  data: {trialid:[["CL_8"]]}
};

var cl_9 = {
  type: "survey-multi-choice-vertical",
  questions: [{prompt:"<p class = titulo>9. &iquest;Por qu&eacute; el macho y la hembra de ping&#252;inos Emperador pueden marcharse juntos en busca de comida?</p>", options:["a)Porque el peque&ntilde;o ping&#252;ino ya puede vivir solo","b) Porque hay ping&#252;inos que habitan en el Polo Sur","c) Porque dejan a la cr&iacute;a escondida","d) Porque otros ping&#252;inos adultos cuidan de sus hijos"], required: true}],
  data: {trialid:[["CL_9"]]}
};

var cl_10 = {
  type: "survey-multi-choice-vertical",
  questions: [{prompt:"<p class = titulo>10. Los ping&#252;inos Emperador y los ping&#252;inos Adelia se diferencian en:</p>", options:["a)La forma de organizar el cuidado de las cr&iacute;as","b) El lugar donde viven","c) El recubrimiento de su cuerpo para aislarse del fr&iacute;o","d) La clase de alimentos que comen "], required: true}],
  data: {trialid:[["CL_10"]]}
};

var cl_texto2 = {
    type: "instructions",
    pages: ["<div class = centerbox>"+
           "<p class = cl_text>"+
           "<span class='titulo'>Texto 2:  Los  Sioux</span><br /><br /><br />"+
           "Hace m&aacute;s de doscientos a&ntilde;os, en la mayor parte del territorio de Am&eacute;rica del Norte habitaban los sioux en campamentos de tiendas, igual que otros indios de las praderas. Viv&iacute;an pac&iacute;ficamente y su principal riqueza eran los bisontes, de los que obten&iacute;an carne para alimentarse, pieles para abrigarse y huesos con los que fabricaban utensilios de uso cotidiano. "+
           "La historia de los sioux est&aacute; llena de guerras y conflictos. Las batallas m&aacute;s famosas tuvieron lugar en la segunda mitad del siglo XIX. Varios hechos hostiles de los colonos y el Gobierno estadounidense provocaron conflictos sangrientos. Los colonos blancos buscando tierras y los mineros en busca de oro iniciaron una continua invasi&oacute;n de los territorios indios, matando muchos reba&ntilde;os de bisontes. El gobierno intent&oacute; encerrar a los sioux en reservas. Todo ello fue provocando actos feroces y salvajes por parte de los indios. Era un intento de recuperar su propia tierra y su libertad.<br /><br />"+
           "En 1863, las tropas de ej&eacute;rcito expulsaron a todas las tribus que viv&iacute;an en Minnessota, la tierra de sus antepasados. Dos a&ntilde;os m&aacute;s tarde el ej&eacute;rcito estableci&oacute; una l&iacute;nea fortificada a lo largo del r&iacute;o Missouri que manten&iacute;a a los sioux alejados de las grandes manadas de bisontes y de las minas de oro. Grupos de guerreros sioux acosaron durante tres a&ntilde;os las zonas fortificadas por el ej&eacute;rcito.<br /><br />"+
           "En 1868, el Gobierno se vio obligado a firmar la paz y emprendi&oacute; una pol&iacute;tica de ayuda econ&oacute;mica y cultural a los indios que aceptaron establecerse en las reservas. Pero la paciencia de los indios se acab&oacute; cuando las tropas  del general Custer penetraron en territorio sioux para proteger a los mineros llegados en busca de oro. En 1876 un grupo de indios tendi&oacute; una emboscada mortal a las tropas de Custer cuando &eacute;stas se dispon&iacute;an a atacar un campamento. Ning&uacute;n blanco sobrevivi&oacute;. Esta sangrienta batalla produjo una fuerte reacci&oacute;n del Gobierno. Los sioux sufrieron nuevas reducciones en su territorio, y sus condiciones de vida empeoraron.<br /><br />"+
           "La &uacute;ltima resistencia armada de los sioux tuvo lugar en 1890, y estuvo ligada a la aparici&oacute;n de un movimiento religioso llamado 'La Danza del Esp&iacute;ritu'. El movimiento promet&iacute;a la vuelta de los reba&ntilde;os de bisontes y la expulsi&oacute;n de los colonos. Esta creencia se extendi&oacute; de una tribu a otra y se reanudaron las luchas sangrientas contra los blancos. El movimiento suscit&oacute; verdadero terror entre los colonos, que pidieron la intervenci&oacute;n del Gobierno.<br /><br />"+
           "En diciembre de 1890 un grupo de indios rebeldes cay&oacute; en una emboscada y toda la tribu fue exterminada, incluidos ancianos, mujeres y ni&ntilde;os. Esta atrocidad signific&oacute; el fin de las revueltas sioux. En ese momento los indios se vieron forzados a aceptar las condiciones del Gobierno americano. En la actualidad, la mayor&iacute;a de los sioux viven pobremente en las reservas de Dakota del Norte y del Sur.<br /><br /></p></div><br /><br />"],
    allow_keys: false,
    show_clickable_nav: true,
    timing_post_trial: 50,
    data:{trialid: "Reading2"}
};

var cl_11 = {
  type: "survey-multi-choice-vertical",
  questions: [{prompt:"<p class = titulo>1. &iquest;De qu&eacute; viv&iacute;an principalmente los sioux?</p>", options:["a)De utensilios de uso cotidiano","b) De los bisontes","c) De pieles y huesos","d) De campamentos de tiendas"], required: true}],
  data: {trialid:[["CL_11"]]}
};

var cl_12 = {
  type: "survey-multi-choice-vertical",
  questions: [{prompt:"<p class = titulo>2. Hasta hace m&aacute;s de 200 a&ntilde;os los sioux viv&iacute;an pac&iacute;ficamente porque:</p>", options:["a)Conviv&iacute;an junto a otros indios de las praderas","b) Habitaban en campamentos de tiendas situados en las praderas","c) Sus tierras todav&iacute;a no hab&iacute;an sido invadidas por los blancos","d) Hab&iacute;a grandes manadas de bisontes, de los que obten&iacute;an alimento"], required: true}],
  data: {trialid:[["CL_12"]]}
};

var cl_13 = {
  type: "survey-multi-choice-vertical",
  questions: [{prompt:"<p class = titulo>3. El gobierno intent&oacute; inicialmente encerrar a los sioux en las reservas para que:</p>", options:["a)Los colonos y los mineros ocuparan las tierras indias","b) Los indios recuperaran su tierra y su libertad","c) Muchos reba&ntilde;os de bisontes fueran eliminados","d) Los indios provocaran actos salvajes"], required: true}],
  data: {trialid:[["CL_13"]]}
};

var cl_14 = {
  type: "survey-multi-choice-vertical",
  questions: [{prompt:"<p class = titulo>4. Los indios en un intento de recuperar su libertad:</p>", options:["a)Pactaron con el gobierno para vivir en las reservas","b) Fueron encerrados en reservas por el gobierno","c) Cometieron actos feroces contra los colonos","d) Fueron expulsados de Minnessota en 1863"], required: true}],
  data: {trialid:[["CL_14"]]}
};

var cl_15 = {
  type: "survey-multi-choice-vertical",
  questions: [{prompt:"<p class = titulo>5. &iquest;Qu&eacute; manten&iacute;a alejados a los sioux de las manadas de bisontes?</p>", options:["a)Minnessota, la tierra de sus antepasados","b) Las minas de oro de los colonos","c) El cauce del r&iacute;o Missouri","d) Una l&iacute;nea fortificada del ej&eacute;rcito"], required: true}],
  data: {trialid:[["CL_15"]]}
};

var cl_16 = {
  type: "survey-multi-choice-vertical",
  questions: [{prompt:"<p class = titulo>6. A lo largo de la historia, &iquest;por qu&eacute; se enfrentaron los sioux a los blancos?</p>", options:["a)Porque los blancos les quitaban las tierras a los indios","b) Porque el ej&eacute;rcito americano asesin&oacute; a una tribu de indios","c) Porque apareci&oacute; el movimiento religioso 'La Danza del Esp&iacute;ritu'","d) Porque los sioux derrotaron a las tropas de Custer"], required: true}],
  data: {trialid:[["CL_16"]]}
};

var cl_17 = {
  type: "survey-multi-choice-vertical",
  questions: [{prompt:"<p class = titulo>7. &iquest;Qui&eacute;n no sobrevivi&oacute; en 1876?</p>", options:["a)Un grupo de indios","b) Un grupo de mineros blancos","c) Todo un campamento indio","d) Los soldados de Custer"], required: true}],
  data: {trialid:[["CL_17"]]}
};

var cl_18 = {
  type: "survey-multi-choice-vertical",
  questions: [{prompt:"<p class = titulo>8. En resumen, la causa de las guerras entre los indios y el gobierno americano desde 1868 hasta 1876 fue que:</p>", options:["a)El gobierno firm&oacute; la paz y emprendi&oacute; una pol&iacute;tica de ayuda a los indios","b) En 1876 un grupo de indios tendi&oacute; una emboscada a las tropas de Custer","c) El gobierno no cumpli&oacute; los acuerdos que hab&iacute;a firmado con los indios","d) Las condiciones de vida de los sioux empeoraron tras la guerra con el ej&eacute;rcito"], required: true}],
  data: {trialid:[["CL_18"]]}
};

var cl_19 = {
  type: "survey-multi-choice-vertical",
  questions: [{prompt:"<p class = titulo>9. &iquest;Con qu&eacute; estuvieron relacionadas las &uacute;ltimas rebeliones sioux?</p>", options:["a)Con un movimiento religioso indio","b) Con las luchas sangrientas entre los blancos","c) Con una emboscada mortal a las tropas de Custer","d) Con unos esp&iacute;ritus religiosos que danzaban"], required: true}],
  data: {trialid:[["CL_19"]]}
};

var cl_20 = {
  type: "survey-multi-choice-vertical",
  questions: [{prompt:"<p class = titulo>10. Las luchas de los sioux terminaron definitivamente cuando:</p>", options:["a)Apareci&oacute; un movimiento religioso llamado 'La Danza del Esp&iacute;ritu'","b) Los indios rebeldes aceptaron vivir en Dakota del Norte y del Sur","c) Los sioux cometieron una atrocidad en una revuelta","d) Una tribu de indios rebeldes fue exterminada"], required: true}],
  data: {trialid:[["CL_20"]]}
};

// Creacion de timeline e inclusion de trials
comprension_lectora_experiment = [];    //timeline

//if the experiment isn't in fullscreen, add trial to make it fullscreen
if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  comprension_lectora_experiment.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

//add the trials to the timeline
comprension_lectora_experiment.push(screen_comprension_lectora_experiment);

comprension_lectora_experiment.push(cl_texto1);
comprension_lectora_experiment.push(cl_1);
comprension_lectora_experiment.push(cl_2);
comprension_lectora_experiment.push(cl_3);
comprension_lectora_experiment.push(cl_4);
comprension_lectora_experiment.push(cl_5);
comprension_lectora_experiment.push(cl_6);
comprension_lectora_experiment.push(cl_7);
comprension_lectora_experiment.push(cl_8);
comprension_lectora_experiment.push(cl_9);
comprension_lectora_experiment.push(cl_10);
comprension_lectora_experiment.push(cl_texto2);
comprension_lectora_experiment.push(cl_11);
comprension_lectora_experiment.push(cl_12);
comprension_lectora_experiment.push(cl_13);
comprension_lectora_experiment.push(cl_14);
comprension_lectora_experiment.push(cl_15);
comprension_lectora_experiment.push(cl_16);
comprension_lectora_experiment.push(cl_17);
comprension_lectora_experiment.push(cl_18);
comprension_lectora_experiment.push(cl_19);
comprension_lectora_experiment.push(cl_20);
