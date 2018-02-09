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
            probabilities: {
                default: [10]
            },
            colors: {
                default: ["green"]
            },
            eachEarns: {
                default: [1]
            },
            manual: {
                default: false
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


        var myflate = function() {
            console.log("quepaso");
            if (trial.manual){
                console.log("piola");
            }
        }

        var lista = [];
        for (var i=0; i<trial.amount; i++){
            var chosen = trial.colors[Math.floor(Math.random() * trial.colors.length)];
            var ind = Math.floor(Math.random() * trial.probabilities.length);
            lista.push({
                    b:1,
                    o:{
                        color: chosen,
                        earnings: trial.eachEarns[ind],
                        popprob: trial.probabilities[ind],
                        oninflate: myflate
                    }
                });
        }

        $(document).ready(function() { // initialize the BART after the page has loaded
            // create a BART with 5 balloons
            $("#bart").bart({
                b: lista,
                s: {
                    //showpopprob: true,
                    //onload: myload, // user-defined function invoked after starting the BART
                    onend: myend, // user-defined function invoked after finishing the BART
                    sounds: true,       // use sounds
					sndpath: '../../BART/sounds/', // path to sound files
                    earned:trial.initialEarn
                }
            });
        });

        var myend = function() {
            var response_time = (new Date()).getTime(); - startTime;
            var points = [];
            var timesBlow = [];
            for (var i = 1; i <=trial.amount; i++) { // run over all balloons
                timesBlow.push(Number($('#BARTpumps' + i).attr('value')));
                if (Number($('#BARTexploded' + i).attr('value')) == 0) {
                    points.push(Number($('#BARTpumps' + i).attr('value'))); // get information saved to the hidden form element
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
