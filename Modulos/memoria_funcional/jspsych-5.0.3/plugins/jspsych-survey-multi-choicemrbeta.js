/**
 * jspsych-survey-multi-choicemrbeta
 * a jspsych plugin for multiple choice survey questions
 *
 * Shane Martin
 *
 * documentation: docs.jspsych.org
 *
 */


jsPsych.plugins['survey-multi-choicemrbeta'] = (function() {

  var plugin = {};

  plugin.trial = function(display_element, trial) {

    var plugin_id_name = "jspsych-survey-multi-choicemrbeta";
    var plugin_id_selector = '#' + plugin_id_name;
    var _join = function( /*args*/ ) {
      var arr = Array.prototype.slice.call(arguments, _join.length);
      return arr.join(separator = '-');
    }

    // trial defaults
    trial.preamble = typeof trial.preamble == 'undefined' ? "" : trial.preamble;
    trial.required = typeof trial.required == 'undefined' ? true : trial.required;
    //trial.required = typeof trial.required == 'undefined' ? null : trial.required;
    trial.horizontal = typeof trial.required == 'undefined' ? true : trial.horizontal;
    //trial.horizontal = typeof trial.required == 'undefined' ? false : trial.horizontal;
    
    trial.timing_response = trial.timing_response || -1;
    var setTimeoutHandlers = [];

    // if any trial variables are functions
    // this evaluates the function and replaces
    // it with the output of the function
    trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);

    // form element
    var trial_form_id = _join(plugin_id_name, "form");
    display_element.append($('<form>', {
      "id": trial_form_id
    }));
    var $trial_form = $("#" + trial_form_id);

    // show preamble text
    var preamble_id_name = _join(plugin_id_name, 'preamble');
    $trial_form.append($('<div>', {
      "id": preamble_id_name,
      "class": preamble_id_name
    }));
    $('#' + preamble_id_name).html(trial.preamble);

    // add multiple-choicemrbeta questions
    for (var i = 0; i < trial.questions.length; i++) {
      // create question container
      var question_classes = [_join(plugin_id_name, 'question')];
      //if (trial.horizontal) {
        question_classes.push(_join(plugin_id_name, 'horizontal'));
      //}

      $trial_form.append($('<div>', {
        "id": _join(plugin_id_name, i),
        "class": question_classes.join(' ')
      }));

      var question_selector = _join(plugin_id_selector, i);

      // add question text
      $(question_selector).append(
        '<p class="' + plugin_id_name + '-text survey-multi-choicemrbeta">' + trial.questions[i] + '</p>'
      );

      // create option radio buttons
      for (var j = 0; j < trial.options[i].length; j++) {
        var option_id_name = _join(plugin_id_name, "option", i, j),
          option_id_selector = '#' + option_id_name;

        // add radio button container
        $(question_selector).append($('<div>', {
          "id": option_id_name,
          "class": _join(plugin_id_name, 'option')
        }));

        // add label and question text
        var option_label = '<label class="' + plugin_id_name + '-text">' + trial.options[i][j] + '</label>';
        $(option_id_selector).append(option_label);

        // create radio button
        var input_id_name = _join(plugin_id_name, 'response', i);
        $(option_id_selector + " label").prepend('<input type="checkbox" name="' + input_id_name + '" value="' + trial.options[i][j] + '">');
        //$(option_id_selector + " label").prepend('<input type="checkbox" name="" value="' + trial.options[i][j] + '">');
        //$(option_id_selector + " label").prepend('<input type="radio" name="' + input_id_name + '" value="' + trial.options[i][j] + '">');
        
        /*INICIO MOD PARA LIMITE DE RESPUESTAS*/
        /*
        $('input[type=checkbox]').change(function(e){
          if ($('input[type=checkbox]:checked').length > 2) {
               $(this).prop('checked', false)
               alert("allowed only 3");
          }
       })
        */
       /*FIN MOD PARA LIMITE DE RESPUESTAS*/
      }
      
      if (trial.required && trial.required[i]) {
        // add "question required" asterisk
        $(question_selector + " p").append("<span class='required'> </span>");

        // add required property
        $(question_selector + " input:radio").prop("required", true);
      }
    }
    
    //***************************************************************modificacion*********************************************************
    $trial_form.append($('<p>'));
    //***************************************************************modificacion*********************************************************
    
    // add submit button
    $trial_form.append($('<input>', {
      'type': 'submit',
      'id': plugin_id_name + '-next',
      'class': plugin_id_name + ' jspsych-btn1',
      'value': 'Guardar Respuestas'
    }));
    
    //***************************************************************modificacion*********************************************************
    $trial_form.append($('<p>'));
    //***************************************************************modificacion*********************************************************
    
    $trial_form.submit(function(event) {

      event.preventDefault();

      // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // create object to hold responses
      
      var question_data = {};
      $("div." + plugin_id_name + "-question").each(function(index) {
        var id = "Q" + index;
        var val = [];
        /*
        for (var j = 0; j < trial.options[index].length; j++) {
          
          if($('jspsych-survey-multi-choicemrbeta-response-'+j).is(':checked')){
            console.log("agregado");
            val.push($(this).attr("value"));
          }
         }*/
        //val.push($(this).find("input:checkbox:checked").val());
        //var val = $(this).find("input:radio:checked").val();
        //val.push($('.messageCheckbox:checked').val());
        //console.log(document.getElementsByName('jspsych-survey-multi-choicemrbeta-response-0').checked);
        var a = $(".jspsych-survey-multi-choicemrbeta-option");
        console.log(a.children);
        
        $(this).find("input:checkbox:checked").each(function(){        
          console.log(index);
           //console.log(val[this.index] = $(this).val());
           //val.push($(this).val());
           val.push($(this).attr("value"));
         });
        
        var obje = {};
        obje[id] = val;
        $.extend(question_data, obje);
        
        //$(this).find("input:checkbox:checked").each
        
        //return false;
        
      });

      // save data
      var trial_data = {
        "rt": response_time,
        "responses": JSON.stringify(question_data)
      };

      display_element.html('');

      // next trial
      jsPsych.finishTrial(trial_data);
    });
    
    var end_trial = function() {
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // kill any remaining setTimeout handlers
      /*
      for (var i = 0; i < setTimeoutHandlers.length; i++) {
        clearTimeout(setTimeoutHandlers[i]);
      }
*/
      // kill keyboard listeners
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }

      // gather the data to store for the trial
      var trial_data = {
        "rt": response_time
      };

      //jsPsych.data.write(trial_data);

      // clear the display
      display_element.html('');

      // move on to the next trial
      //jsPsych.endCurrentTimeline();
      jsPsych.finishTrial(trial_data);
    };

    var startTime = (new Date()).getTime();
    
    if (trial.tiiming_response < 0){ end_trial();}
    if (trial.timing_response > 0) {
      var t2 = setTimeout(function() {
        end_trial();
      }, trial.timing_response);
      setTimeoutHandlers.push(t2);
    }
    
  };

  return plugin;
})();
