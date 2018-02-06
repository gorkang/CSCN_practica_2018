/*
 * Example plugin template
 */

jsPsych.plugins["plugin-bart"] = (function() {

    var plugin = {};

    plugin.info = {
        name: "plugin-bart",
        parameters: {
            amount: {
                type: jsPsych.plugins.parameterType.INT, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
                default: 5
            },
            probability: {
                type: jsPsych.plugins.parameterType.INT,
                default: 10
            },
            color: {
                type: jsPsych.plugins.parameterType.STRING,
                default: "green"
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

        var idPump = [];
        var idExp = [];
        for (var j=0; j < trial.amount; j++){
            idPump.push("pump"+ (j+1));
            idExp.push("expl"+ (j+1));
        }

        $(document).ready(function() { // initialize the BART after the page has loaded
            // create a BART with 5 balloons
            $("#bart").bart({
                b: trial.amount, // create 5 balloons
                o: {
                    color: trial.color, // color of balloons
                    earnings: 1, // points earned for each pump
                    popprob: trial.probability, // probability of popping; defined as 1 out of popprop
                    //onexplode: myexplode // user-defined function invoked after an explosion
                },
                s: {
                    frmids_pumps: idPump, // IDs for hidden form elements used to save the number of pumps for a given balloon
                    frmids_exploded: idExp, // IDs for hidden form elements used to save whether a balloon exploded
                    //onload: myload, // user-defined function invoked after starting the BART
                    onend: myend // user-defined function invoked after finishing the BART
                }
            });
        });
        var myend = function() {
            var response_time = (new Date()).getTime(); - startTime;
            var points = [];
            var timesBlow = [];
            for (var i = 1; i <=trial.amount; i++) { // run over all balloons
                timesBlow.push(Number($('#pump' + i).attr('value')));
                if (Number($('#expl' + i).attr('value')) == 0) {
                    points.push(Number($('#pump' + i).attr('value'))); // get information saved to the hidden form element
                } else {
                    points.push(0);
                }
            }
            var results = {
                tPoints: points,
                blows: timesBlow
            };

            var trial_data = {
                rt: response_time,
                responses: JSON.stringify(results)
            };
            display_element.innerHTML = '';
            console.log("points: " + results.tpoints);
            console.log("blows: " + results.blows);
            jsPsych.finishTrial(trial_data);
        }
        // end trial

        var startTime = (new Date()).getTime();
    };

    return plugin;
})();
