instructions = "<div>Los parametros de la url son: </div>";
for(var key in parameters){
  instructions += key + ":" + parameters[key] + "<br>";
};

var demo = {
    type: "instructions",
    pages: [instructions],
    data: instructions
};

demo_experiment = [];
demo_experiment.push(demo)
