// Funciones de apoyo
onkeydown = function block_fkeys(event) {
  //Blocks presses of f1 and f6
  var x = event.which || event.keyCode;
  if (x == 112 || x == 116) {
    event.preventDefault();
    return false;
  } else {
    return;
  }
}
var offspring_ammount;

// Inicio prueba

var instructions = {
  type: "instructions",
  pages: ['A continuación se le solicitan algunos datos demográficos para ser empleados como información estadística. Por favor marque las alternativas correspondientes a su situación y complete toda la información, la cual es privada.'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_informacion_sociodemografica"
  }
};



var rut = {
  type: "survey-text-number",
  questions: [{
    prompt: "<div class='justified'><br/>" + 'RUT (sin puntos, guión ni dígito verificador. Ejemplo si el rut es 17.736.727-1 escribir 17736727):' + "<br/></div>",
    required: true
  }],
  endword: "",
  data: {
    trialid: "informacion_sociodemografica_rut"
  }
}

var trials_1_to_6 = [{
    question: ' Nombre de entrevistador'
  },
  {
    question: ' Nombre del participante'
  },
  {
    question: ' Fecha de nacimiento'
  },
  {
    question: ' País de nacimiento'
  },
  {
    question: ' ¿Cuánto tiempo ha vivido en Chile?'
  },
  {
    question: ' Comuna de residencia'
  }
]

var gender = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: "<div class='justified'><br/>" + '7. Género' + "<br/></div>",
    options: ['Femenino', 'Masculino'],
    required: true
  }],
  data: {
    trialid: "informacion_sociodemografica_gender"
  },
  on_finish: function(data){
    if(data.responses == '{"Q0":"Femenino"}'){
      is_female = true;
    }
    else{
      is_female = false;
    }
  }
}

var age = {
  type: "survey-text-number",
  questions: [{
    prompt: "<div class='justified'><br/>" + '8. ¿Cuántos años tiene?' + "<br/></div>",
    required: true
  }],
  endword: "Años",
  data: {
    trialid: "informacion_sociodemografica_age"
  }
}

var civil_state = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: "<div class='justified'><br/>" + '9. ¿Cuál es su estado civil en la actualidad? Marque la alternativa correspondiente.' + "<br/></div>",
    options: ['Soltero/a', 'Casado/a', 'Convive', 'Separado/a (de hecho)', 'Divorciado/a', 'Anulado/a', 'Viudo/a', 'Otro'],
    required: true
  }],
  data: {
    trialid: "informacion_sociodemografica_civil_state"
  }
}

var civil_state_other = {
  type: "survey-text",
  questions: [{
    prompt: "<div class='justified'><br/>" + 'Otro' + "<br/></div>",
    required: true
  }],
  endword: "Años",
  data: {
    trialid: "informacion_sociodemografica_civil_state_other"
  }
}

var married_years = {
  type: "survey-text-number",
  questions: [{
    prompt: "<div class='justified'><br/>" + '10. ¿Cuántos años de matrimonio o convivencia lleva o llevaba con su pareja?' + "<br/></div>",
    required: true
  }],
  endword: "Años",
  data: {
    trialid: "informacion_sociodemografica_married_years"
  }
}

var offspring = {
  type: "survey-text-number",
  questions: [{
    prompt: "<div class='justified'><br/>" + '11. ¿Cuántos hijos tiene?' + "<br/></div>",
    required: true
  }],
  endword: "Hijos",
  data: {
    trialid: "informacion_sociodemografica_offspring"
  },
  on_finish: function(data){
    offspring_ammount = data.responses.substr(7, data.responses.length - 9);
    console.log(offspring_ammount);
  }
}

var offspring_age = {
  type: "survey-text-number",
  questions: [{
    prompt: "<div class='justified'><br/>" + '12. Edades' + "<br/></div>",
    required: true
  }],
  endword: "Años",
  data: {
    trialid: "informacion_sociodemografica_offspring_age"
  },
  on_finish: function(data){
    offspring_ammount -= 1;
  }
}

var pregnant = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: "<div class='justified'><br/>" + '13. Estado maternal' + "<br/></div>",
    options: ['Actualmente embarazada', 'Actualmente en periodo de lactancia'],
    required: true
  }],
  endword: "",
  data: {
    trialid: "informacion_sociodemografica_pregnant"
  }
}

var study = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: "<div class='justified'><br/>" + '14. ¿Cuál es el nivel de educación que alcanzó usted?' + "<br/></div>",
    options: ['1. Educación básica incompleta o inferior.', '2. Básica completa.', '3. Media incompleta.', '4. Media completa / Técnica incompleta.', '5. Universitaria incompleta / Técnica completa', '6. Universitaria completa.', '7. Post Grado (Master, Doctor o equivalente).'],
    required: true
  }],
  endword: "",
  data: {
    trialid: "informacion_sociodemografica_studies"
  }
}

var years_of_studies = {
  type: "survey-text-number",
  questions: [{
    prompt: "<div class='justified'><br/>" + '15. Años de estudio:' + "<br/></div>",
    required: true
  }],
  endword: "Años",
  data: {
    trialid: "informacion_sociodemografica_years_of_studies"
  }
}

var income_studies = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: "<div class='justified'><br/>" + '16. ¿Cuál es el nivel de educación que alcanzó la persona que aporta el ingreso principal de este hogar?' + "<br/></div>",
    options: ['1. Educación básica incompleta o inferior.', '2. Básica completa.', '3. Media incompleta.', '4. Media completa / Técnica incompleta.', '5. Universitaria incompleta / Técnica completa', '6. Universitaria completa.', '7. Post Grado (Master, Doctor o equivalente).'],
    required: true
  }],
  endword: "",
  data: {
    trialid: "informacion_sociodemografica_income_studies"
  }
}

var instructions_goods = {
  type: "instructions",
  pages: ['17. De los siguientes bienes ¿de cuáles dispone su hogar?'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_informacion_sociodemografica"
  }
};

var trials_goods = [{
    question: '1. Automóvil'
  },
  {
    question: '2. Computador'
  },
  {
    question: '3. Horno Microonda.'
  },
  {
    question: '4. Cámara de video filmadora'
  },
  {
    question: '5. Califont u otro sistema de ducha caliente'
  },
  {
    question: '6. Servicio de TV Cable'
  }
]

var home_service = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: "<div class='justified'><br/>" + '18. ¿Cuenta con servicio doméstico?' + "<br/></div>",
    options: ['Si', 'No'],
    required: true
  }],
  data: {
    trialid: "informacion_sociodemografica_home_service"
  }
}

var working = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: "<div class='justified'><br/>" + '19. ¿Usted trabaja remuneradamente?' + "<br/></div>",
    options: ['Si', 'No'],
    required: true
  }],
  data: {
    trialid: "informacion_sociodemografica_working"
  }
}

var months_working = {
  type: "survey-text-number",
  questions: [{
    prompt: "<div class='justified'><br/>" + '20. Durante los últimos 12 meses ¿Cuántos meses ha estado empleado? (incluya trabajos independientes)' + "<br/></div>",
    required: true
  }],
  endword: "Meses",
  data: {
    trialid: "informacion_sociodemografica_months_working"
  }
}

var ocupation = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: "<div class='justified'><br/>" + '21. ¿Cuál es su situación ocupacional actual?' + "<br/></div>",
    options: ['1. Trabaja a tiempo completo', '2. Trabaja a tiempo parcial', '3. Trabaja esporádicamente', '4. Está desempleado/a, pero busca trabajo', '5. Es estudiante', '6. No trabaja, ni busca trabajo', '7. Es dueña/o de casa', '8. Está jubilado/a o pensionado/a', '9. Es rentista', '10. No sabe/No responde'],
    required: true
  }],
  data: {
    trialid: "informacion_sociodemografica_ocupation"
  }
}

var profesion = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: "<div class='justified'><br/>" + '22 .¿Cuál es su profesión o trabajo?' + "<br/></div>",
    options: ['1. Trabajos ocasionales e informales (dueña/o de casa, lavado, aseo, servicio doméstico, ocasional, “pololos”, cuidador de autos, limosna, etc.).', '2. Obrero no calificado, jornalero, servicio doméstico con contrato.', '3. Obrero calificado, capataz, junior, microempresario (kiosco, taxi, comercio menor, ambulantes).', '4. Empleado administrativo medio y bajo, vendedor, secretaria, jefe de sección. Técnico especializado. Profesional independiente de carreras técnicas (contador, analista de sistemas, diseñador, músico). Profesor Primario y Secundario.', '5. Ejecutivo medio (gerente, y subgerente), gerente general de empresa media o pequeña. Profesional dependiente e independiente de carreras tradicionales (abogado, médico, arquitecto, ingeniero, agrónomo).', '6. Alto ejecutivo (gerente general) de empresa grande. Directores de grandes empresas. Empresarios propietarios de empresas medianas y grandes. Profesionales independientes de gran prestigio.', 'Otro'],
    required: true
  }],
  data: {
    trialid: "informacion_sociodemografica_profesion"
  }
}

var profesion_other = {
  type: "survey-text",
  questions: [{
    prompt: "<div class='justified'><br/>" + 'Otro' + "<br/></div>",
    required: true
  }],
  data: {
    trialid: "informacion_sociodemografica_profesion_other"
  }
}

var working_place = {
  type: "survey-text",
  questions: [{
    prompt: "<div class='justified'><br/>" + '23. ¿En qué lugar o tipo de empresa trabaja usted?' + "<br/></div>",
    required: true
  }],
  data: {
    trialid: "informacion_sociodemografica_working_place"
  }
}

var income_profesion = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: "<div class='justified'><br/>" + '24. ¿Cuál es la profesión o trabajo de la persona que aporta el principal ingreso de este hogar?' + "<br/></div>",
    options: ['1. Trabajos ocasionales e informales (dueña/o de casa, lavado, aseo, servicio doméstico, ocasional, “pololos”, cuidador de autos, limosna, etc.).', '2. Obrero no calificado, jornalero, servicio doméstico con contrato.', '3. Obrero calificado, capataz, junior, microempresario (kiosco, taxi, comercio menor, ambulantes).', '4. Empleado administrativo medio y bajo, vendedor, secretaria, jefe de sección. Técnico especializado. Profesional independiente de carreras técnicas (contador, analista de sistemas, diseñador, músico). Profesor Primario y Secundario.', '5. Ejecutivo medio (gerente, y subgerente), gerente general de empresa media o pequeña. Profesional dependiente e independiente de carreras tradicionales (abogado, médico, arquitecto, ingeniero, agrónomo).', '6. Alto ejecutivo (gerente general) de empresa grande. Directores de grandes empresas. Empresarios propietarios de empresas medianas y grandes. Profesionales independientes de gran prestigio.', 'Otro'],
    required: true
  }],
  data: {
    trialid: "informacion_sociodemografica_income_profesion"
  }
}

var income_profesion_other = {
  type: "survey-text",
  questions: [{
    prompt: "<div class='justified'><br/>" + 'Otro' + "<br/></div>",
    required: true
  }],
  data: {
    trialid: "informacion_sociodemografica_income_profesion_other"
  }
}

var income_working_place = {
  type: "survey-text",
  questions: [{
    prompt: "<div class='justified'><br/>" + '25. ¿En qué lugar o tipo de empresa trabaja la persona que aporta el principal ingreso de este hogar?' + "<br/></div>",
    required: true
  }],
  data: {
    trialid: "informacion_sociodemografica_income_working_place"
  }
}

var restricted_living = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: "<div class='justified'><br/>" + '26. ¿Usted ha vivido en algún lugar restringido/supervisado en los últimos 30 días? Como por ejemplo; tratamiento hospitalario, cárcel, etc...' + "<br/></div>",
    options: ['No', 'Detenido o preso en la cárcel', 'Comunidad terapéutica o unidad de internación hospitalaria para tratamiento de Alcohol o drogas', 'Hospital general o clínica privada', 'Hospital o clínica Psiquiátrica', 'Otro'],
    required: true
  }],
  data: {
    trialid: "informacion_sociodemografica_restricted_living"
  }
}

var restricted_living_other = {
  type: "survey-text",
  questions: [{
    prompt: "<div class='justified'><br/>" + 'Otro' + "<br/></div>",
    required: true
  }],
  data: {
    trialid: "informacion_sociodemografica_restricted_living_other"
  }
}

var restricted_living_days = {
  type: "survey-text",
  questions: [{
    prompt: "<div class='justified'><br/>" + '27. ¿Cuántos días ha estado allí?' + "<br/></div>",
    required: true
  }],
  data: {
    trialid: "informacion_sociodemografica_restricted_living_days"
  }
}

var psi_diagnosis = {
  type: "survey-multi-choice1",
  questions: [{
    prompt: '28. Durante los últimos 12 meses ¿Ha sido diagnosticado y/o tratado por algún problema Psicológico o Psiquiátrico?',
    options: ['Si', 'No'],
    required: true
  }],
  data: {
    trialid: "informacion_sociodemografica_psi_diagnosis"
  }
}

var psi_diagnosis_wich = {
  type: "survey-text",
  questions: [{
    prompt: "<div class='justified'><br/>" + '¿Cuál?' + "<br/></div>",
    required: true
  }],
  data: {
    trialid: "informacion_sociodemografica_psi_diagnosis_wich"
  }
}
// Creacion de timeline e inclusion de trials


informacion_sociodemografica = [];

if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
  //If not FULLSCREEN enable fullscreen
  informacion_sociodemografica.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

informacion_sociodemografica.push(instructions);
informacion_sociodemografica.push(rut);

index = 1;
trials_1_to_6.forEach(function(trial) {
  if(index != 5){
    informacion_sociodemografica.push({
      type: "survey-text",
      questions: [{
        prompt: "<div class='justified'><br/>" + trial.question + "<br/></div>",
        required: true
      }],
      data: {
        trialid: "informacion_sociodemografica_" + index
      }
    })
  }
  else{
    informacion_sociodemografica.push({
      type: "survey-text-number",
      questions: [{
        prompt: "<div class='justified'><br/>" + trial.question + "<br/></div>",
        required: true
      }],
      endword: "Años",
      data: {
        trialid: "informacion_sociodemografica_" + index
      }
    })
  }

  index += 1;
})

informacion_sociodemografica.push(gender);

informacion_sociodemografica.push(age);

informacion_sociodemografica.push(civil_state);

informacion_sociodemografica.push({
  timeline: [civil_state_other],
  conditional_function: function(){
    if (jsPsych.data.get().last(1).values()[0].responses == '{"Q0":"Otro"}')
      return true;
    else {
      return false;
    }
  }
})


informacion_sociodemografica.push({
  timeline: [married_years],
  conditional_function: function(){
    if (jsPsych.data.get().last(2).values()[1].responses != '{"Q0":"Soltero/a"}')
      return true;
    else {
      return false;
    }
  }
})

informacion_sociodemografica.push(offspring);

informacion_sociodemografica.push({
  timeline: [offspring_age],
  conditional_function: function(){
    return (offspring_ammount > 0);
  },
  loop_function: function(data){
    return (offspring_ammount > 0);
  }
})

informacion_sociodemografica.push({
  timeline: [pregnant],
  conditional_function: function(){
    return is_female;
  }
})

informacion_sociodemografica.push(study);

informacion_sociodemografica.push(years_of_studies);

informacion_sociodemografica.push(income_studies);

informacion_sociodemografica.push(instructions_goods);

index = 1;
trials_goods.forEach(function(trial) {
  informacion_sociodemografica.push({
    type: "survey-multi-choice1",
    questions: [{
      prompt: "<div class='justified'><br/>" + trial.question + "<br/></div>",
      options: ['Si', 'No'],
      required: true
    }],
    data: {
      trialid: "informacion_sociodemografica_goods_" + index
    }
  })
  index += 1;
})


informacion_sociodemografica.push(home_service);
informacion_sociodemografica.push(working);
informacion_sociodemografica.push(months_working);
informacion_sociodemografica.push(ocupation);
informacion_sociodemografica.push(profesion);

informacion_sociodemografica.push({
  timeline: [profesion_other],
  conditional_function: function(){
    if (jsPsych.data.get().last(1).values()[0].responses == '{"Q0":"Otro"}')
      return true;
    else {
      return false;
    }
  }
})

informacion_sociodemografica.push(working_place);
informacion_sociodemografica.push(income_profesion);

informacion_sociodemografica.push({
  timeline: [income_profesion_other],
  conditional_function: function(){
    if (jsPsych.data.get().last(1).values()[0].responses == '{"Q0":"Otro"}')
      return true;
    else {
      return false;
    }
  }
})

informacion_sociodemografica.push(income_working_place);
informacion_sociodemografica.push(restricted_living);

informacion_sociodemografica.push({
  timeline: [restricted_living_other],
  conditional_function: function(){
    if (jsPsych.data.get().last(1).values()[0].responses == '{"Q0":"Otro"}')
      return true;
    else {
      return false;
    }
  }
})

informacion_sociodemografica.push({
  timeline: [restricted_living_days],
  conditional_function: function(){
    if (jsPsych.data.get().last(2).values()[1].responses == '{"Q0":"No"}')
      return true;
    else {
      return false;
    }
  }
})

informacion_sociodemografica.push(psi_diagnosis);

informacion_sociodemografica.push({
  timeline: [psi_diagnosis_wich],
  conditional_function: function(){
    if (jsPsych.data.get().last(1).values()[0].responses == '{"Q0":"Si"}')
      return true;
    else {
      return false;
    }
  }
})
