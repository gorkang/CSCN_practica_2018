/*
 * Example plugin template
 */

jsPsych.plugins["plugin-bart"] = (function() {

    var plugin = {};

    plugin.info = {
        name: "plugin-bart",
        parameters: {
            parameter_name: {
                type: jsPsych.plugins.parameterType.STRING, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
                default: "undefined"
            },
            parameter_name: {
                type: jsPsych.plugins.parameterType.STRING,
                default: "undefined"
            }
        }
    }

    plugin.trial = function(display_element, trial) {

        var html = '';
        html += '<div id="bart"></div>';

        // data saving
        var trial_data = {
            parameter_name: 'parameter value'
        };
        display_element.innerHTML = html;


        $(document).ready(function() { // initialize the BART after the page has loaded
            // create a BART with 5 balloons
            $("#bart").bart({
                b: 5, // create 5 balloons
                o: {
                    color: 'green', // color of balloons
                    earnings: 1, // points earned for each pump
                    popprob: 10, // probability of popping; defined as 1 out of popprop
                    //onexplode: myexplode // user-defined function invoked after an explosion
                },
                s: {
                    frmids_pumps: ['pump1', 'pump2', 'pump3', 'pump4', 'pump5'], // IDs for hidden form elements used to save the number of pumps for a given balloon
                    frmids_exploded: ['expl1', 'expl2', 'expl3', 'expl4', 'expl5'], // IDs for hidden form elements used to save whether a balloon exploded
                    //onload: myload, // user-defined function invoked after starting the BART
                    onend: myend // user-defined function invoked after finishing the BART
                }
            });
        });
        var myend = function() {
			var points = 0;
            var puntos = [];
			for(var i = 1; i <= 5; i++) { // run over all balloons
				if(Number($('#expl' + i).attr('value')) == 0) {
                    puntos.push(Number($('#pump' + i).attr('value')));
                    points = points + Number($('#pump' + i).attr('value')); // get information saved to the hidden form element
				}
			}
            var trial_data = {
                totalPoints: points,
                individualPoints: puntos
            };
			console.log('You achieved ' + points + ' points.');
            console.log(trial_data.totalPoints);
            console.log(trial_data.individualPoints);
            jsPsych.finishTrial(trial_data);
        }
        // end trial

    };

    return plugin;
})();
