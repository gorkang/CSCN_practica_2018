var parameters = {};
var parameter_name;
var parameter_value;
if(document.URL.includes("\?")){
  var parameters_string = document.URL.substring(document.URL.search("\\?") + 1);
  while(parameters_string.length > 0){
    parameter_name = parameters_string.substring(0, parameters_string.search("="));
    if(parameters_string.includes("&")){
      parameter_value = parameters_string.substring(parameters_string.search("=") + 1, parameters_string.search("&"));
      parameters_string = parameters_string.substring(parameters_string.search("&") + 1);
    } else{
      parameter_value = parameters_string.substring(parameters_string.search("=") + 1);
      parameters_string = "";
    };
    parameters[parameter_name] = parameter_value;
  };
};
