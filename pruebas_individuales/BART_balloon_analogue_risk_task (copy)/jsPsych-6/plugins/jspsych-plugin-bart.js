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
                default: 1
            },
            probabilities: {
                default: 10
            },
            colors: {
                default: "green"
            },
            eachEarns: {
                default: 1
            },
            manual: {
                default: []
            },
            initialEarn: {
                default: 0
            },
            idOfBallon:{
                default:1
            },
            total:{
                default:1
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
            if (trial.manual) {
                console.log("piola");
            }
        }


        $(document).ready(function() { // initialize the BART after the page has loaded
            // create a BART with 5 balloons
            $("#bart").bart({
                b: 1,
                o: {
                    color: trial.colors, // color of balloons
                    earnings: trial.eachEarns, // points earned for each pump
                    popprob: trial.probabilities, // probability of popping; defined as 1 out of popprop
                },
                s: {
                    showpopprob: true,
                    //onload: myload, // user-defined function invoked after starting the BART
                    onend: myend, // user-defined function invoked after finishing the BART
                    sounds: true, // use sounds
                    sndpath: 'BART/sounds/', // path to sound files
                    earned: trial.initialEarn,
                    manProb: trial.manual,
                    number_of_ballon: trial.idOfBallon,
                    total_of_ballons: trial.total,
                }
            });
        });

        var myend = function() {
            var response_time = (new Date()).getTime(); - startTime;
            var points = [];
            var timesBlow = [];
            for (var i = 1; i <= trial.amount; i++) { // run over all balloons
                timesBlow.push(Number($('#BARTpumps' + i).attr('value')));
                if (Number($('#BARTexploded' + i).attr('value')) == 0) {
                    points.push(Number($('#BARTpumps' + i).attr('value'))); // get information saved to the hidden form element
                } else {
                    points.push(0);
                }
            }

            var trial_data = {
                probability: trial.probabilities,
                rt: response_time,
                color: trial.colors,
                cashEarned: points * trial.eachEarns,// + trial.initialEarn,
                cashTotal: trial.initialEarn + points * trial.eachEarns,
                blows: timesBlow,
            };
            display_element.innerHTML = '';
            console.log("points: " + points);
            console.log("blows: " + timesBlow);
            jsPsych.finishTrial(trial_data);
        }
        // end trial

        var startTime = (new Date()).getTime();
    };

    return plugin;
})();
