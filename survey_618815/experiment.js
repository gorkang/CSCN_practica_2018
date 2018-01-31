// Funciones de apoyo
onkeydown = function block_fkeys(event) {
  //Blocks presses of f1 and f6
  var x = event.which || event.keyCode;
  if (x == 112 || x == 116) {
    console.log("Blocked key");
    event.preventDefault();
    return false;
  } else {
    return;
  }
}

skip_to_7 = true;

// Inicio prueba
var instructions1_1 = {
  type: "instructions",
  pages: ['1. Alguna vez en su vida ¿Ha consumido alguna de las siguientes sustancias? (SIN RECETA O INDICACIÓN MÉDICA):'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_survey_618815"
  }
};

var instructions1_2 = {
  type: "instructions",
  pages: ['1.2. ¿tampoco cuando iba al colegio?'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_survey_618815"
  }
};

var instructions2 = {
  type: "instructions",
  pages: ['2. Cuándo fue la última vez que consumió (SIN RECETA O INDICACIÓN MÉDICA):'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_survey_618815"
  },
  on_start: function() {
    for (var drug in drugs) {
      survey_618815.push({
        type: "survey-multi-choice1",
        questions: [{
          prompt: "<div class='justified'><br/>" + drugs[drug].name + "<br/></div>",
          options: when_year,
          required: true,
          horizontal: true
        }],
        data: {
          trialid: "survey_618815_when_year_" + drugs[drug].name
        },
      })
    }
    survey_618815.push(instructions3);
  }
};

var instructions3 = {
  type: "instructions",
  pages: ['3. En los últimos 3 meses ¿Con qué frecuencia ha consumido:'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_survey_618815"
  },
  on_start: function() {
    for (var drug in drugs) {
      survey_618815.push({
        type: "survey-multi-choice1",
        questions: [{
          prompt: "<div class='justified'><br/>" + drugs[drug].name + "<br/></div>",
          options: frequency_three_months,
          required: true,
          horizontal: true
        }],
        data: {
          trialid: "survey_618815_frequency_three_months_" + drugs[drug].name
        },
        on_finish: function(data) {
          if (data.responses != '{"Q0":"Nunca"}') {
            skip_to_7 = false
          }
        }
      })
    }
    survey_618815.push(instructions4);
  }
};

var instructions4 = {
  type: "instructions",
  pages: ['4. En los últimos tres meses ¿con que frecuencia ha tenido fuertes deseos o ansias de consumir?:'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_survey_618815"
  },
  on_start: function() {
    for (var drug in drugs) {
      survey_618815.push({
        timeline: [{
          type: "survey-multi-choice1",
          questions: [{
            prompt: "<div class='justified'><br/>" + drugs[drug].name + "<br/></div>",
            options: frequency_three_months,
            required: true,
            horizontal: true
          }],
          data: {
            trialid: "survey_618815_frequency_three_months_" + drugs[drug].name
          },
        }],
        conditional_function: function() {
          return skip_to_7;
        }
      })
    }
    survey_618815.push(instructions5);
  }
};

var instructions5 = {
  type: "instructions",
  pages: ['5. En los últimos tres meses ¿con qué frecuencia ha tenido problemas de salud, sociales, legales o económicos debido al consumo de:'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_survey_618815"
  },
  on_start: function() {
    for (var drug in drugs) {
      survey_618815.push({
        timeline: [{
          type: "survey-multi-choice1",
          questions: [{
            prompt: "<div class='justified'><br/>" + drugs[drug].name + "<br/></div>",
            options: frequency_three_months,
            required: true,
            horizontal: true
          }],
          data: {
            trialid: "survey_618815_frequency_three_months_" + drugs[drug].name
          },
        }],
        conditional_function: function() {
          return skip_to_7;
        }
      })
    }
    survey_618815.push(instructions6);
  }
};

var instructions6 = {
  type: "instructions",
  pages: ['6. En los últimos tres meses ¿con qué frecuencia ha tenido problemas para cumplir con sus obligaciones habituales a causa del consumo de:'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_survey_618815"
  },
  on_start: function() {
    for (var drug in drugs) {
      survey_618815.push({
        timeline: [{
          type: "survey-multi-choice1",
          questions: [{
            prompt: "<div class='justified'><br/>" + drugs[drug].name + "<br/></div>",
            options: frequency_three_months,
            required: true,
            horizontal: true
          }],
          data: {
            trialid: "survey_618815_frequency_three_months_" + drugs[drug].name
          },
        }],
        conditional_function: function() {
          return skip_to_7;
        }
      })
    }
    survey_618815.push(instructions7);
  }
};

var instructions7 = {
  type: "instructions",
  pages: ['7. ¿Alguna vez amigos, familiares o alguien más le han mostrado preocupación por su consumo de:'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_survey_618815"
  },
  on_start: function() {
    for (var drug in drugs) {
      survey_618815.push({
        type: "survey-multi-choice1",
        questions: [{
          prompt: "<div class='justified'><br/>" + drugs[drug].name + "<br/></div>",
          options: yes_or_no_three_months,
          required: true,
          horizontal: true
        }],
        data: {
          trialid: "survey_618815_yes_or_no_three_months_" + drugs[drug].name
        },
      })
    }
    survey_618815.push(instructions8);
  }
};

var instructions8 = {
  type: "instructions",
  pages: ['8. ¿Alguna vez ha intentado controlar, reducir o dejar de consumir y no lo ha logrado?'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_survey_618815"
  },
  on_start: function() {
    for (var drug in drugs) {
      survey_618815.push({
        type: "survey-multi-choice1",
        questions: [{
          prompt: "<div class='justified'><br/>" + drugs[drug].name + "<br/></div>",
          options: yes_or_no_three_months,
          required: true,
          horizontal: true
        }],
        data: {
          trialid: "survey_618815_yes_or_no_three_months_" + drugs[drug].name
        },
      })
    }
  }
};

yes_or_no = ['Si', 'No'];
when_year = ['Nunca', 'Durante el último mes', 'Hace más de un mes pero menos de un año', 'Hace más de un año'];
frequency_three_months = ['Nunca', '1 o 2 veces', 'Mensualmente', 'Semanalmente', 'Diariamente o casi a diario']
yes_or_no_three_months = ['No, nunca', 'Si, en los últimos 3 meses.', 'Se, pero no en los últimos 3 meses']

var drugs = {
  Tabaco: {
    name: 'Tabaco'
  },
  Bebidas_alcoholicas: {
    name: 'Bebidas alcohólicas'
  },
  Marihuana: {
    name: 'Marihuana'
  },
  Cocaina: {
    name: 'Cocaína'
  },
  Anfetaminas_u_otros: {
    name: 'Anfetaminas u otro tipo de estimulantes'
  },
  Inhalantes: {
    name: 'Inhalantes'
  },
  Tranquilizantes_o_pastillas: {
    name: 'Tranquilizantes o pastillas para dormir'
  },
  Alucinogenos: {
    name: 'Alucinógenos'
  },
  Opiaceos: {
    name: 'Opiáceos'
  }
}


// Creacion de timeline e inclusion de trials

survey_618815 = [];

if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
  //If not FULLSCREEN enable fullscreen
  survey_618815.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

survey_618815.push(instructions1_1);

for (var drug in drugs) {
  survey_618815.push({
    type: "survey-multi-choice1",
    questions: [{
      prompt: "<div class='justified'><br/>" + drugs[drug].name + "<br/></div>",
      options: yes_or_no,
      required: true,
      horizontal: true
    }],
    data: {
      trialid: "survey_618815_yes_or_no_" + drugs[drug].name,
      name: drug
    },
    on_finish: function(data) {
      console.log(data)
      if (data.responses == '{"Q0":"No"}') {
        drugs[data.name].used = false;
      } else if (data.responses == '{"Q0":"Si"}') {
        drugs[data.name].used = true;
      }
    }
  })
}

survey_618815.push({
  type: "survey-text",
  questions: [{
    prompt: "<div class='justified'><br/>" + "Otros" + "<br/></div>"
  }],
  data: {
    trialid: "survey_618815_yes_or_no_" + "Otros"
  },
  on_finish: function(data) {
    if (data.responses != '{"Q0":""}' && data.responses != '{"Q0":"No"}') {
      drugs[data.responses.substr(7, data.responses.length - 9)] = {
        name: data.responses.substr(7, data.responses.length - 9)
      };
    }
  }
})

survey_618815.push(instructions1_2);

for (var drug in drugs) {
  survey_618815.push({
    type: "survey-multi-choice1",
    questions: [{
      prompt: "<div class='justified'><br/>" + drugs[drug].name + "<br/></div>",
      options: yes_or_no,
      required: true,
      horizontal: true
    }],
    data: {
      trialid: "survey_618815_yes_or_no_school_" + drugs[drug].name,
      name: drug
    },
    on_finish: function(data) {
      if (data.responses == '{"Q0":"No"}' && drugs[drug].used == false) {
        drugs[data.name].used = false;
      } else if (data.responses == '{"Q0":"Si"}') {
        drugs[data.name].used = true;
      }
      if (drugs[data.name].used == false) {
        delete(drugs[data.name]);
      }
    }
  })
}

survey_618815.push({
  type: "survey-text",
  questions: [{
    prompt: "<div class='justified'><br/>" + "Otros" + "<br/></div>"
  }],
  data: {
    trialid: "survey_618815_yes_or_no_" + "Otros"
  },
  on_finish: function(data) {
    if (data.responses != '{"Q0":""}' && data.responses != '{"Q0":"No"}') {
      drugs[data.responses.substr(7, data.responses.length - 9)] = {
        name: data.responses.substr(7, data.responses.length - 9)
      };
    }
  }
})

drugs_is_not_empty = false;
for(drug in drugs){
  drugs_is_not_empty = true;
}
if(drugs_is_not_empty){
  survey_618815.push(instructions2);
}
