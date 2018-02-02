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

// Inicio prueba
var instructions1_1 = {
  type: "instructions",
  pages: ['1. Alguna vez en su vida ¿Ha consumido alguna de las siguientes sustancias? (SIN RECETA O INDICACIÓN MÉDICA):'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_oms_assist"
  }
};

var instructions1_2 = {
  type: "instructions",
  pages: ['1.2. ¿tampoco cuando iba al colegio?'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_oms_assist"
  }
};

var instructions2 = {
  type: "instructions",
  pages: ['2. Cuándo fue la última vez que consumió (SIN RECETA O INDICACIÓN MÉDICA):'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_oms_assist"
  }
};

var instructions3 = {
  type: "instructions",
  pages: ['3. En los últimos 3 meses ¿Con qué frecuencia ha consumido:'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_oms_assist"
  }
};

var instructions4 = {
  type: "instructions",
  pages: ['4. En los últimos tres meses ¿con que frecuencia ha tenido fuertes deseos o ansias de consumir?:'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_oms_assist"
  }
};

var instructions5 = {
  type: "instructions",
  pages: ['5. En los últimos tres meses ¿con qué frecuencia ha tenido problemas de salud, sociales, legales o económicos debido al consumo de:'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_oms_assist"
  }
};

var instructions6 = {
  type: "instructions",
  pages: ['6. En los últimos tres meses ¿con qué frecuencia ha tenido problemas para cumplir con sus obligaciones habituales a causa del consumo de:'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_oms_assist"
  }
};

var instructions7 = {
  type: "instructions",
  pages: ['7. ¿Alguna vez amigos, familiares o alguien más le han mostrado preocupación por su consumo de:'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_oms_assist"
  }
};

var instructions8 = {
  type: "instructions",
  pages: ['8. ¿Alguna vez ha intentado controlar, reducir o dejar de consumir y no lo ha logrado?'],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 50,
  data: {
    trialid: "Instructions_oms_assist"
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

oms_assist = [];

if (window.innerWidth != screen.width || window.innerHeight != screen.height) {
  //If not FULLSCREEN enable fullscreen
  oms_assist.push({
    type: 'fullscreen',
    message: '<p>El experimento entrara en modo pantalla completa</p>',
    button_label: "Pantalla Completa",
    delay_after: 0,
    fullscreen_mode: true
  });
}

oms_assist.push(instructions1_1);

for (var drug in drugs) {
  oms_assist.push({
    type: "survey-multi-choice",
    questions: [{
      prompt: "<div class='justified'><br/>" + drugs[drug].name + "<br/></div>",
      options: yes_or_no,
      required: true
    }],
    data: {
      trialid: "oms_assist_yes_or_no",
      drug: drug
    },
    on_finish: function(data) {
      if (data.responses == '{"Q0":"No"}') {
        drugs[data.drug].used = false;
      } else if (data.responses == '{"Q0":"Si"}') {
        drugs[data.drug].used = true;
      }
    }
  })
}

oms_assist.push({
  type: "survey-text",
  questions: [{
    prompt: "<div class='justified'><br/>" + "Otros" + "<br/></div>"
  }],
  data: {
    trialid: "oms_assist_yes_or_no_",
    drug: "Otro"
  },
  on_finish: function(data) {
    if (data.responses != '{"Q0":""}' && data.responses != '{"Q0":"No"}') {
      drugs[data.responses.substr(7, data.responses.length - 9)] = {
        name: data.responses.substr(7, data.responses.length - 9),
        used: true
      };
      data.drug = data.responses.substr(7, data.responses.length - 9);
    }
  }
})

school_timeline = [];

school_timeline.push(instructions1_2);

for (var drug in drugs) {
  school_timeline.push({
    type: "survey-multi-choice",
    questions: [{
      prompt: "<div class='justified'><br/>" + drugs[drug].name + "<br/></div>",
      options: yes_or_no,
      required: true
    }],
    data: {
      trialid: "oms_assist_yes_or_no_school_",
      drug: drug
    },
    on_finish: function(data) {
      if (data.responses == '{"Q0":"No"}') {
        drugs[data.drug].used = false;
      } else if (data.responses == '{"Q0":"Si"}') {
        drugs[data.drug].used = true;
      }
    }
  })
}

school_timeline.push({
  type: "survey-text",
  questions: [{
    prompt: "<div class='justified'><br/>" + "Otros" + "<br/></div>"
  }],
  data: {
    trialid: "oms_assist_yes_or_no_school_" + "otros"
  },
  on_finish: function(data) {
    if (data.responses != '{"Q0":""}' && data.responses != '{"Q0":"No"}') {
      drugs[data.responses.substr(7, data.responses.length - 9)] = {
        name: data.responses.substr(7, data.responses.length - 9),
        used: true
      };
      data.drug = data.responses.substr(7, data.responses.length - 9);
    }
  }
})

oms_assist.push({
  timeline: school_timeline,
  conditional_function: function() {
    all_drugs_no = true;
    for (var drug in drugs) {
      if (drugs[drug].used) {
        all_drugs_no = false;
      }
    }
    return all_drugs_no;
  }
})



main_timeline = []

main_timeline.push(instructions2);

for (var drug in drugs) {
  main_timeline.push({
    timeline: [{
      type: "survey-multi-choice",
      questions: [{
        prompt: "<div class='justified'><br/>" + drugs[drug].name + "<br/></div>",
        options: when_year,
        required: true
      }],
      data: {
        trialid: "oms_assist_when_year",
        drug: drug
      }
    }],
    conditional_function: function() {
      return drugs[this.timeline[0].trial().data.drug].used;
    }
  })
}

main_timeline.push({
  timeline: [{
    type: "survey-multi-choice",
    questions: [{
      prompt: "To be filled at start of trial",
      options: when_year,
      required: true
    }],
    data: {
      trialid: "oms_assist_when_year",
      drug: "Other"
    },
    on_start: function(trial) {
      trial.questions[0].prompt = "<div class='justified'><br/>" + other_drug.name + "<br/></div>";
      trial.data.drug = other_drug.name;
    }
  }],
  conditional_function: function() {
    drugs_array = Object.keys(drugs)
    if (drugs_array[drugs_array.length - 1] != "Opiaceos") {
      console.log(this.timeline[0].trial());
      other_drug = drugs[drugs_array[drugs_array.length - 1]];
      return true;
    } else {
      other_drug = false;
      return false;
    }
  }
});

skip_to_7 = true;
main_timeline.push(instructions3);

for (var drug in drugs) {
  main_timeline.push({
    timeline: [{
      type: "survey-multi-choice",
      questions: [{
        prompt: "<div class='justified'><br/>" + drugs[drug].name + "<br/></div>",
        options: frequency_three_months,
        required: true
      }],
      data: {
        trialid: "oms_assist_frequency_three_months_urge",
        drug: drug
      },
      on_finish: function(data) {
        if (data.responses != '{"Q0":"Nunca"}') {
          skip_to_7 = false
        }
      }
    }],
    conditional_function: function() {
      return drugs[this.timeline[0].trial().data.drug].used;
    }
  })
}


main_timeline.push({
  timeline: [{
    type: "survey-multi-choice",
    questions: [{
      prompt: "To be filled at start of trial",
      options: frequency_three_months,
      required: true
    }],
    data: {
      trialid: "oms_assist_frequency_three_months_urge",
      drug: "Other"
    },
    on_finish: function(data) {
      if (data.responses != '{"Q0":"Nunca"}') {
        skip_to_7 = false
      }
    },
    on_start: function(trial) {
      trial.questions[0].prompt = "<div class='justified'><br/>" + other_drug.name + "<br/></div>";
      trial.data.drug = other_drug.name;
    }
  }],
  conditional_function: function() {
    if (other_drug != false) {
      return true;
    } else {
      return false;
    }
  }
})


timeline_4_to_6 = []

timeline_4_to_6.push(instructions4);

for (var drug in drugs) {
  timeline_4_to_6.push({
    timeline: [{
      type: "survey-multi-choice",
      questions: [{
        prompt: "<div class='justified'><br/>" + drugs[drug].name + "<br/></div>",
        options: frequency_three_months,
        required: true
      }],
      data: {
        trialid: "oms_assist_frequency_three_months_urge",
        drug: drug
      }
    }],
    conditional_function: function() {
      return drugs[this.timeline[0].trial().data.drug].used;
    }
  })
}

timeline_4_to_6.push({
  timeline: [{
    type: "survey-multi-choice",
    questions: [{
      prompt: "To be filled at start of trial",
      options: frequency_three_months,
      required: true
    }],
    data: {
      trialid: "oms_assist_frequency_three_months_urge",
      drug: "Other"
    },
    on_start: function(trial) {
      trial.questions[0].prompt = "<div class='justified'><br/>" + other_drug.name + "<br/></div>";
      trial.data.drug = other_drug.name;
    }
  }],
  conditional_function: function() {
    if (other_drug != false) {
      return true;
    } else {
      return false;
    }
  }
})

timeline_4_to_6.push(instructions5);

for (var drug in drugs) {
  timeline_4_to_6.push({
    timeline: [{
      type: "survey-multi-choice",
      questions: [{
        prompt: "<div class='justified'><br/>" + drugs[drug].name + "<br/></div>",
        options: frequency_three_months,
        required: true
      }],
      data: {
        trialid: "oms_assist_frequency_three_months",
        drug: drug
      },
    }],
    conditional_function: function() {
      return drugs[this.timeline[0].trial().data.drug].used;
    }
  })
}

timeline_4_to_6.push({
  timeline: [{
    type: "survey-multi-choice",
    questions: [{
      prompt: "To be filled at start of trial",
      options: frequency_three_months,
      required: true
    }],
    data: {
      trialid: "oms_assist_frequency_three_months",
      drug: "Other"
    },
    on_start: function(trial) {
      trial.questions[0].prompt = "<div class='justified'><br/>" + other_drug.name + "<br/></div>";
      trial.data.drug = other_drug.name;
    }
  }],
  conditional_function: function() {
    if (other_drug != false) {
      return true;
    } else {
      return false;
    }
  }
})

timeline_4_to_6.push(instructions6);

for (var drug in drugs) {
  timeline_4_to_6.push({
    timeline: [{
      type: "survey-multi-choice",
      questions: [{
        prompt: "<div class='justified'><br/>" + drugs[drug].name + "<br/></div>",
        options: frequency_three_months,
        required: true
      }],
      data: {
        trialid: "oms_assist_frequency_three_months",
        drug: drug
      },
    }],
    conditional_function: function() {
      return drugs[this.timeline[0].trial().data.drug].used;
    }
  })
}

timeline_4_to_6.push({
  timeline: [{
    type: "survey-multi-choice",
    questions: [{
      prompt: "To be filled at start of trial",
      options: frequency_three_months,
      required: true
    }],
    data: {
      trialid: "oms_assist_frequency_three_months",
      drug: "Other"
    },
    on_start: function(trial) {
      trial.questions[0].prompt = "<div class='justified'><br/>" + other_drug.name + "<br/></div>";
      trial.data.drug = other_drug.name;
    }
  }],
  conditional_function: function() {
    if (other_drug != false) {
      return true;
    } else {
      return false;
    }
  }
})

main_timeline.push({
  timeline: timeline_4_to_6,
  conditional_function: function() {
    return !skip_to_7;
  }
})

main_timeline.push(instructions7);

for (var drug in drugs) {
  main_timeline.push({
    timeline: [{
      type: "survey-multi-choice",
      questions: [{
        prompt: "<div class='justified'><br/>" + drugs[drug].name + "<br/></div>",
        options: yes_or_no_three_months,
        required: true
      }],
      data: {
        trialid: "oms_assist_yes_or_no_three_months_consern",
        drug: drug
      },
    }],
    conditional_function: function() {
      return drugs[this.timeline[0].trial().data.drug].used;
    }
  })
}

main_timeline.push({
  timeline: [{
    type: "survey-multi-choice",
    questions: [{
      prompt: "To be filled at start of trial",
      options: yes_or_no_three_months,
      required: true
    }],
    data: {
      trialid: "oms_assist_yes_or_no_three_months_consern",
      drug: "Other"
    },
    on_start: function(trial) {
      trial.questions[0].prompt = "<div class='justified'><br/>" + other_drug.name + "<br/></div>";
      trial.data.drug = other_drug.name;
    }
  }],
  conditional_function: function() {
    if (other_drug != false) {
      return true;
    } else {
      return false;
    }
  }
})

main_timeline.push(instructions8);

for (var drug in drugs) {
  main_timeline.push({
    timeline: [{
      type: "survey-multi-choice",
      questions: [{
        prompt: "<div class='justified'><br/>" + drugs[drug].name + "<br/></div>",
        options: yes_or_no_three_months,
        required: true
      }],
      data: {
        trialid: "oms_assist_yes_or_no_three_months_stop",
        drug: drug
      },
    }],
    conditional_function: function() {
      return drugs[this.timeline[0].trial().data.drug].used;
    }
  })
}

main_timeline.push({
  timeline: [{
    type: "survey-multi-choice",
    questions: [{
      prompt: "To be filled at start of trial",
      options: yes_or_no_three_months,
      required: true
    }],
    data: {
      trialid: "oms_assist_yes_or_no_three_months_stop",
      drug: "Other"
    },
    on_start: function(trial) {
      trial.questions[0].prompt = "<div class='justified'><br/>" + other_drug.name + "<br/></div>";
      trial.data.drug = other_drug.name;
    }
  }],
  conditional_function: function() {
    if (other_drug != false) {
      return true;
    } else {
      return false;
    }
  }
})

oms_assist.push({
  timeline: main_timeline,
  conditional_function: function() {
    some_drugs_yes = false;
    for (var drug in drugs) {
      if (drugs[drug].used) {
        some_drugs_yes = true;
      }
    }
    return some_drugs_yes;
  }
})
