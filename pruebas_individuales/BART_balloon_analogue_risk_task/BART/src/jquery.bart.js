/**
 * BART - jQuery plugin for creating the a Ballon Analogue Risk Task
 *
 * @author    Timo Gnambs <timo@gnambs.at>
 * @copyright (c) 2013-2016 Timo Gnambs (http://timo.gnambs.at)
 * @license   Dual licensed under the MIT and GPL licenses:
 *              http://www.opensource.org/licenses/mit-license.php
 *              http://www.gnu.org/licenses/gpl.html
 * @requires  jQuery v3.0.0
 * @requires  jCanvas v16.06.06
 * @version   2013-05-08
 * @changelog: - 2016-06-27:	updated to jQuery v3.0.0 and jCanvas v16.06.06
 */


(function($) {
    
    /**
     * Creates a Ballon Analogue Risk Task (BART). For more information see:
     *  Lejuez, C. W., Read, J. P., Kahler, C. W., Richards, J. B., Ramsey, S. E., & Stuart, G. L. (2002). 
     *      Evaluation of a behavioral measure of risk taking: The Balloon Analogue Risk Task (BART). 
     *      Journal of Experimental Psychology, 8, 75–84.
     *
     * NOTE: There is no warranty at all that this online test does indeed and can measure
     *       the same construct as the orignial test. If you use this script do it on your own risk!
     *
     * Instruction:
     * The script is invoked by including the following three script files and one style file in the head
     * section of your html file and initialising the script as shown in the examples:
     *   jquery-3.0.0.min.js    (the script library for DOM manipulation)
     *   jcanvas.min.js         (jquery plugin for canvas manipulation)
     *   jquery.bart.js         (the actual script to generate the BART)
     *   jquery.bart.css        (required styles for the BART to display correctly)
     *
     * @example  $('#bart').bart(5);
     * @desc     Creates the BART with the default settings containing 5 balloons
     * @example  $('#bart').bart( {s: settings, b: 5} );
     * @desc     Creates the BART with your global settings as defined in the variable 'settings' 
     *           containing 5 balloons
     * @example  $('#bart').bart( {b: 10, o: opts} );
     * @desc     Creates the BART with 10 balloons and your balloon settings as defined in the variable 'opts'
     * @example  $('#bart').bart( [{b: 3, o: opts1}, {b: 7, o: opts2}] );
     * @desc     Creates the BART with 3 balloons using the balloon settings as defined in the variable 'opts1'
     *           and 7 balloons using the balloon settings as defined in the variable 'opts2'
     * @example  $('#bart').bart( {s: settings, b: [{b: 3, o: opts1}, {b: 7, o: opts2}]} );
     * @desc     Creates the BART with your global settings asd defined in the variable 'settings';
     *           3 balloons are created using the balloon settings as defined in the variable 'opts1'
     *           and 7 balloons are created using the balloon settings as defined in the variable 'opts2'
     *
     * @param    Object          s           An object defining the appearance of the BART;
     *                                       NOTE: all settings are optional
     * @option   Object          balloon             Default settings for a ballon (see param o for more details)
     * @option   String          bgcol               Background color of complete board 
     * @option   Number          w                   Width of complete board (in pixel)
     * @option   Number          h                   Height of complete board (in pixel)
     * @option   Boolean         showpumpcount       Display number of pumps for current balloon on board 
     * @option   Boolean         showballooncount    Display number of bullonons on board
     * @option   Boolean         showcurrentearned   Display potential earnings for current balloon on board
     * @option   Boolean         showtotalearned     Display total earnings for all balloons on board
     * @option   Boolean         showpopprob         Display probability of explosion for next pump
     * @option   Boolean         showpumpsused       Display percentage of used pumps
     * @option   Boolean         sounds              Use sounds
     * @option   String          sndpath             Path to sound files
     * @option   Number          earning             Initial earnings on start
     * @option   Array<String>   frmids_pumps        Array with unique IDs for the newly created form elements saving
     *                                               the number of pumps for a given balloon
     *                                               If left blank, the IDs are created automatically as:
     *                                               'BARTpump' + number of balloon 
     * @option   Array<String>   frmids_exploded     Array with unique IDs for the newly created form elements saving
     *                                               the explosion status: 1 = balloon exploded, 0 = no explosion
     *                                               If left blank, the IDs are created automatically as:
     *                                               'BARTexploded' + number of balloon 
     * @option   Array<String>   frmids_time         Array with unique IDs for the newly created form elements saving
     *                                               the mean latency between pumps for each balloon (excluding time before first pump)
     *                                               If left blank, the IDs are created automatically as:
     *                                               'BARTtime' + number of balloon 
     * @option   Function        onload              A hook to run a specific function before loading the BART
     * @option   String          txt_cashin          Text to display on the 'Cash in' button
     * @option   String          txt_inflate         Text to display on the 'Inflate' button
     * @option   String          txt_next            Text to display on the 'Next' button
     * @option   String          txt_balloon_number  Text for balloon number
     * @option   String          txt_current_earned  Text for current earnings
     * @option   String          txt_total_earned    Text for total earnings
     * @option   String          txt_prob_explosion  Text for probability of explosion
     * @option   String          txt_pumps_used      Text for percentage of used pumps
     * @option   String          txtEnd              Text to display on the last page
     *
     * @param    Number          b                   Number of balloons to create
     * @param    Array<Object>   b                   An Array of objects defining different balloon types:
     * @option   Number          b                   Number of balloons to create
     * @option   Object          o                   Settings for balloons (see param o for more details)
     *
     * @param    Object          o                   Settings for a balloon
     * @option   Number          earnings            Potential earnings for each pump
     * @option   Number          popprob             Probability of popping; defined as 1 out of poppprop
     * @option   Number          radius              Balloon radius
     * @option   Number          increment           Increment size of balloon after each pump
     * @option   String          color               Main color of balloon
     * @option   String          stroke_style        Color of balloon stroke
     * @option   Number          stroke_width        Stroke width of balloon
     * @option   Number          gradient_radius     Radius of color gradient
     * @option   String          gradient_color      Color of gradient
     * @option   Number          tie_width           Width of balloon tie
     * @option   Function        onstart             A hook to run a specific function when initializing a new balloon
     * @option   Function        oninflate           A hook to run a specific function after inflating a balloon
     * @option   Function        onexplode           A hook to run a specific function after exploding a balloon
     *
     * @type     jQuery
     * @name     bart
     * @author   Timo Gnambs <timo@gnambs.at>
     */
    $.fn.bart = function( method ) {
            
        // default options
        var opts = {
            balloon: {                       // default settings for a balloon
                earnings:        0.05,       // potential earnings for each pump
                popprob:         128,        // probability of popping (as 1 out of X)
                radius:          48,         // balloon size
                increment:       0.01,       // increment size of balloon at each pump
                color:           '#DA110D',  // color of balloon
                stroke_style:    '#000000',  // color of balloon stroke
                stroke_width:    3,          // width of balloon stroke
                gradient_radius: 3,          // relative size of gradient
                gradient_color:  '#E1E1E1',  // color of balloon gradient
                gradient_factor: 0.3,        // overlay factor of gradient
                width_factor:    0.03333,    //
                height_factor:   0.4,        //
                tie_width:       8,          // width of tie
                onstart: function() {},      // function to run on new balloon
                oninflate: function() {},    // function to run after inflation
                onexplode: function() {}     // function to run after explosion
            },
            bgcol:               '#FFF',     // background color for complete board
            w:                   600,        // width of board (in pixel)
            h:                   600,        // height of board (in pixel)
            showpumpcount: true,             // show number of pumps on board
            showballooncount:  true,         // show number of balloons on board
            showcurrentearned: true,         // show potential earnings on board
            showtotalearned: true,           // show total earnings on board
            showpopprob: false,              // show probability of explosion
            showpumpsused: false,            // show percentage of pumps used
            sounds: true,                    // play sounds
            earned: 0,                       // initial earnings
            sndpath: 'sounds/',              // path to sound files
            randomize:       true,           // randomize order of balloons
            frmid:           'bartdat',      // hidden form element to save all data to
            separator:       [':', ';'],     // value separators in hidden form field (0: within in balloon, 1: between ballons)
            frmids_pumps:    [],  // optional ids of hidden form elements to save 
                                             //    number of pumps for each balloon
            frmids_exploded: [],  // optional ids of hidden form elements to save 
                                             //    number of explosions for each balloon
            frmids_time:     [],             // optional ids of hidden form elements to save 
                                             //    mean latency between pumps (excluding time before first pump)
            txt_cashin: '$$ Cash in $$',     // text on 'Cash in' button
            txt_inflate: 'Inflate balloon',  // text on 'Inflate' button
            txt_next:    'Next balloon',     // text on 'Next' button
            txt_balloon_number: 'Balloon number: ',          // text for balloon number
            txt_number_of_pumps: 'Number of pumps: ',        // text for number of pumps
            txt_current_earned: 'Current earned: ',          // text for current earnings
            txt_total_earned: 'Total earned: ',              // text for total earnings
            txt_prob_explosion: 'Probability of explosion:', // text for probability of explosion
            txt_pumps_used: 'Max. available pumps used:',    // text for percentage of used pumps
            onload:    function() {},        // function to run before loading the script 
            onend:    function() {}          // function to run after finishing the last balloon 
        };
        
        var canvas = null, snds = {}, r = [];

        
        /****************************/
        // set user defined options //
        /****************************/
        
        var args = arguments[0] || {};
            
        // global settings
        opts = $.extend(true, opts, args.s || {});

        // create balloon definitions
        var bs = [];           // result set with balloons
        if($.type(args) == 'number' | $.type(args) == 'array') args = {b: args};
        if($.type(args.b) == 'number') {                            // number given 
            var bopts = $.extend(true, opts.balloon, args.o || {}); // default balloon settings
            for(var i = 1; i <= args.b; i++) {
                bs[i-1] = $.extend(true, {}, bopts);
                bs[i-1].id = i;
            }
        } else if($.type(args.b) == 'array') {                     // array of different balloon settings
            var bopts, cnt = 0;
            for(var i = 0; i < args.b.length; i++) { 
                if($.type(args.b[i]) == 'number') args.b[i] = {b: args.b[i]};
                if($.type(args.b[i].b) == 'number') {
                    bopts = $.extend(true, opts.balloon, args.b[i].o || {});
                    for(var j = 1; j <= args.b[i].b; j++) {
                        bs[cnt] = $.extend(true, {}, bopts);
                        bs[cnt].id = cnt+1;
                        cnt++;
                    }
                }
            }
        } else {
            alert('Configuration error: No balloon definitions! Aborting.');
            return this;
        }
        if(opts.randomize) bs.sort(randOrder);
   
        
        /****************************/
        // set up form ids          //
        /****************************/
        
        for(var i = 0; i < bs.length; i++) {
            if(opts.frmids_pumps[i] === undefined) opts.frmids_pumps[i] = 'BARTpumps'+(i+1);
            if(opts.frmids_exploded[i] === undefined) opts.frmids_exploded[i] = 'BARTexploded'+(i+1);
            if(opts.frmids_time[i] === undefined) opts.frmids_time[i] = 'BARTtime'+(i+1);
        }
        
        
        /****************************/
        // buffer sounds            //
        /****************************/
        
        if(opts.sounds == true) {
            if((new Audio()).canPlayType('audio/mpeg') != "") {   // mp3 for IE
                snds.inflate = (new Audio(opts.sndpath + 'inflate.mp3'));
                snds.explode = (new Audio(opts.sndpath + 'explode.mp3'));
                snds.cashin = (new Audio(opts.sndpath + 'collect.mp3'));
            } else if((new Audio()).canPlayType('audio/x-wav')) { // wav for the rest
                snds.inflate = (new Audio(opts.sndpath + 'inflate.wav'));
                snds.explode = (new Audio(opts.sndpath + 'explode.wav'));
                snds.cashin = (new Audio(opts.sndpath + 'collect.wav'));
            }
        }
 
        
        /**
         * Create a new Balloon
         *
         * @param   Object  settings for balloon
         */
        balloon = function(s) {
            
            s = $.extend(true, opts.balloon, s || {});
            s.pumps = -1;
            s.exploded = false;
            s.earned = 0;
            s.popseq = [];
            s.time = [];
            for (var i=1; i <= s.popprob; i++) s.popseq.push(i);
            s.popseq.sort(randOrder);               // randomized
                
            // apply settings to object
            var me = this;
            $.each(s, function(k,v) { me[[k]] = v; });
            
            // on balloon hook
            this.onstart();
            
        }
        
        
        /**
         * Inflate the balloon 
         *
         * @param   Object      jQuery canvas object to draw on
         * @author              Logan Franken & Timo Gnambs
         * @source              adapted from http://www.loganfranken.com/blog/64/html5-canvas-balloon/
         */
        balloon.prototype.inflate = function(canvas) {
            
            // center of canvas
            var centerX = (canvas.width() - 200) / 2;
            var centerY = canvas.height() / 2 - (this.radius+this.radius * this.height_factor)/4;
            
            // degree of curving
            var handleLength = (4 * (Math.sqrt(2) - 1))/3 * this.radius;
            
            // bottom Y of balloon
            var balloonBottomY = centerY + this.radius + (this.radius * this.height_factor);

            // remove existing balloon
            canvas.removeLayerGroup('balloon').drawLayers();

            // draw tie as triangle
            canvas.drawPolygon({ strokeStyle: this.stroke_style, 
                                 strokeWidth: this.stroke_width, 
                                 fillStyle: this.color,
                                 x: centerX,
                                 y: balloonBottomY + (this.tie_width / 2), 
                                 radius: this.tie_width, 
                                 sides: 3,
                                 layer: true,
                                 name: 'tie',
                                 groups: ['balloon'] });
                                 
            // create color gradient for balloon
            var grad = canvas.createGradient({ x1: centerX + (this.radius/this.gradient_radius), 
                                               y1: centerY - (this.radius/this.gradient_radius),
                                               r1: this.gradient_radius, 
                                               r2: this.radius + (this.radius * this.height_factor), 
                                               x2: centerX, 
                                               y2: centerY,
                                               c1: this.gradient_color,
                                               c2: this.color, 
                                               s2: this.gradient_factor });

            // draw balloon
            canvas.drawBezier({ strokeStyle: this.stroke_style, 
                                strokeWidth: this.stroke_width, 
                                fillStyle: grad,
                                x1:  centerX - this.radius,  // start of top left curve
                                y1:  centerY,
                                cx1: centerX - this.radius,  // top left curving
                                cy1: centerY - handleLength - (this.radius * this.width_factor),
                                cx2: centerX - handleLength,
                                cy2: centerY - this.radius,
                                x2:  centerX,                // end of top left curve
                                y2:  centerY - this.radius,
                                cx3: centerX + handleLength + (this.radius * this.width_factor), // top right curving
                                cy3: centerY - this.radius,
                                cx4: centerX + this.radius, 
                                cy4: centerY - handleLength,
                                x3:  centerX + this.radius,  // end of top right curve
                                y3:  centerY,
                                cx5: centerX + this.radius,  // bottom right curving
                                cy5: centerY + handleLength,
                                cx6: centerX + handleLength, 
                                cy6: balloonBottomY,
                                x4:  centerX,                // end of bottom right curve
                                y4:  balloonBottomY,
                                cx7: centerX - handleLength, // bottom left curving
                                cy7: balloonBottomY,
                                cx8: centerX - this.radius, 
                                cy8: centerY + handleLength,
                                x5:  centerX - this.radius,  // end of bottom left curve
                                y5:  centerY,
                                layer: true,
                                name: 'bubble', 
                                groups: ['balloon'] });
            
            // increase number of pumps
            this.pumps = this.pumps + 1;
        
            // calculate current earnings
            this.earned = (new Number(this.pumps * this.earnings)).toFixed(2);
            
            // add time stamp of pump
            this.time.push($.now());
                                
            // sound
            if(opts.sounds == true & this.pumps > 0) {
                if((new Audio()).canPlayType("audio/mpeg") != "") {   // mp3 for IE
                    (new Audio(opts.sndpath + 'inflate.mp3')).play();
                } else if((new Audio()).canPlayType("audio/x-wav")) { // wav for the rest
                    (new Audio(opts.sndpath + 'inflate.wav')).play();
                }
            }
            
            // on inflate hook
            this.oninflate();
            
        }
        
        
        /**
         * Explode the balloon
         *
         * @param   Object      jQuery canvas object to draw on
         */
        balloon.prototype.explode = function(canvas) {
            
            // remove balloon
            canvas.removeLayerGroup('balloon').drawLayers();
            
            // sound
            if(opts.sounds == true) {
                snds.explode.play();
            }
            
            // set explosion state
            this.exploded = true;
            
            // increase number of pumps
            this.pumps = this.pumps + 1;
            
            // current earnings
            this.earned = 0;

            // add time stamp of pump
            this.time.push($.now());
            
            // save results
            this.save();
            
            // on explode hook
            this.onexplode();
            
        }
                
        /**
         * Save results
         */
        balloon.prototype.save = function() {
            
            // individual result string
            $('#' + opts.frmids_pumps[this.id-1]).attr( { value: this.pumps } );
            $('#' + opts.frmids_exploded[this.id-1]).attr( { value: (this.exploded)*1 } );
            for(var i = 1, t = 0; i < this.time.length; i ++)  t += this.time[i] - this.time[i-1];
            if(this.pumps > 1) t = Math.round(t / (this.pumps-1));
            else t = -9;            
            $('#' + opts.frmids_time[this.id-1]).attr( { value: t });
            
            // complete result string
            var r = $('#' + opts.frmid).val();
            r = r + ([this.id, this.pumps, (this.exploded)*1, t]).join(opts.separator[0]);
            r = r +  opts.separator[1];
            $('#' + opts.frmid).val(r);
        }
        
        
        /**
         * Return a random number to sort an array randomly
         *
         * @return int
         */
        function randOrder () {
            return (Math.round(Math.random())-0.5);
        }
        
        
        return this.first().each(function() {
                
            // on load hook
            opts.onload();
                
            // set up html structure 
            $(this)
                .css({                       // wrapper
                    width:              opts.w + 'px',                         
                    height:             opts.h + 'px',
                    'background-color': opts.bgcol,
                    overflow:           'hidden'
                });
            canvas = $('<canvas>')
                .attr({   // canvas
                    width:  opts.w + 'px',       
                    height: opts.h - 100 + 'px',
                    margin: 0 
                })
                .css({ 
                    'background-color': opts.bgcol 
                })
                .appendTo(this);
            var divBottom = $('<div>').addClass('BARTbottom');  // footer
            divBottom
                .css({ 
                    width:  opts.w + 'px', 
                    height: '100px' })
                .appendTo(this);
            
            // create hidden form fields for all response data
            $('<input>').attr({ type: 'hidden',
                                value: '',
                                id:    opts.frmid,
                                name:  opts.frmid 
                        })
                        .insertAfter(canvas);
            
            // create hidden form fields for number of pumps (one for each balloon)
            $.each(opts.frmids_pumps, function(i,j) {
                $('<input>').attr({ type: 'hidden',
                                    value: '0',
                                    id:    j,
                                    name:  j 
                            })
                            .insertAfter(canvas);
            });
            
            // create hidden form fields for number of explosions (one for each balloon)
            $.each(opts.frmids_exploded, function(i,j) {
                $('<input>').attr({ type: 'hidden',
                                    value: '0',
                                    id:    j,
                                    name:  j 
                            })
                            .insertAfter(canvas);
            });
            
            // create hidden form fields for reaction time (one for each balloon)
            $.each(opts.frmids_time, function(i,j) {
                $('<input>').attr({ type: 'hidden',
                                    value: '0',
                                    id:    j,
                                    name:  j 
                            })
                            .insertAfter(canvas);
            });
        
            // number of balloons
            if(opts.showballooncount == true) {
                canvas.drawText({
                    x:         opts.w - 150,
                    y:         50,
                    layer:     true,
                    name:      'balnum',
                    fillStyle: '#000',
                    font:      '14pt Verdana, sans-serif',
                    text:      opts.txt_balloon_number + ' 1 / ' + bs.length
                });
            }
                
            // total earnings
            var bottomY = opts.h - 200;
            if(opts.showtotalearned == true) {
                canvas.drawText({
                    x:         opts.w - 150,
                    y:         bottomY,
                    layer:     true,
                    name:      'totearn',
                    fillStyle: '#000',
                    font:      '14pt Verdana, sans-serif',
                    text:      opts.txt_total_earned + '0.00'
                });
                bottomY -= 50;
            }
                
            // number of pumps
            if(opts.showpumpcount == true) {
                canvas.drawText({
                    x:         opts.w - 150,
                    y:         bottomY,
                    layer:     true,
                    name:      'pumpnum',
                    fillStyle: '#000',
                    font:      '14pt Verdana, sans-serif',
                    text:      opts.txt_number_of_pumps + '0'
                });
                bottomY -= 50;
            }
                
            // current earnings
            if(opts.showcurrentearned == true) {
                canvas.drawText({
                    x:         opts.w - 150,
                    y:         bottomY,
                    layer:     true,
                    name:      'curearn',
                    fillStyle: '#000',
                    font:      '14pt Verdana, sans-serif',
                    text:      opts.txt_current_earned + '0.00'
                });
            }

            // probability of explosion
            if(opts.showpopprob == true) {
                canvas.drawText({
                    x:         opts.w - 150,
                    y:         200,
                    layer:     true,
                    name:      'popprob',
                    fillStyle: '#000',
                    font:      '14pt Verdana, sans-serif',
                    text:      opts.txt_prob_explosion + "\n\n" + 
                               (new Number(Math.round(10000/bs[0].popprob)/100)).toFixed(2) + '%'
                });
            }
            
            // available pumps used
            if(opts.showpumpsused == true) {
                canvas.drawText({
                    x:         opts.w - 150,
                    y:         200,
                    layer:     true,
                    name:      'pumuse',
                    fillStyle: '#000',
                    font:      '14pt Verdana, sans-serif',
                    text:      opts.txt_pumps_used + "\n\n" + '0%'
                });
            }
               
            // inflate balloon button
            var butInflate = $('<input>')
                .addClass('BARTinflate')
                .appendTo(divBottom)
                .attr({
                    value: opts.txt_inflate, 
                    type: 'button'
                })
                .css({ 
                    width:  '200px',
                    height: '90px',
                    margin: '0 20px' 
                })
                .on('click.bart', function(e) {
                        
                    // check for explosion
                    bal.popseq.sort(randOrder);
                    if(bal.popseq.shift() == 1) {
                    
                        // explode balloon
                        bal.explode(canvas);
                            
                        // show/hide buttons
                        butInflate.hide();
                        butCashin.hide();
                        if(balcnt+1 < bs.length) butNext.show();
                        else opts.onend();
                            
                        
                    } else {
                        
                        // inflate balloon
                        bal.radius = bal.radius * (1 + bal.increment);
                        bal.tie_width = bal.tie_width * (1 + bal.increment);
                        bal.inflate(canvas);    
                            
                    }
                        
                    // update counts
                    if(opts.showpumpcount) {
                        canvas.setLayer('pumpnum', { text: opts.txt_number_of_pumps + bal.pumps });
                    }
                    if(opts.showcurrentearned) {
                        canvas.setLayer('curearn', { text: opts.txt_current_earned + 
                                                            (new Number(bal.earned)).toFixed(2) });
                    }
                    if(opts.showpopprob) {
                        canvas.setLayer('popprob', { text: opts.txt_prob_explosion + "\n\n" + 
                                                          (new Number(Math.round(10000/bal.popseq.length)/100)).toFixed(2) + '%' });
                    }
                    if(opts.showpumpsused) {
                        canvas.setLayer('pumuse', { text: opts.txt_pumps_used + "\n\n" + 
                                                          (Math.round((bal.popprob-bal.popseq.length)/bal.popprob*100)) + '%' });
                    }
                    if(opts.showpumpcount | opts.showcurrentearned | opts.showpopprob | opts.showpumpsused) {
                        canvas.drawLayers();
                    }
                
                });
                
            // next in button
            var butNext = $('<input>')
                .addClass('BARTnext')
                .appendTo(divBottom)
                .attr({ 
                    value:   opts.txt_next, 
                    type:    'button'
                })
                .css({ 
                    width:  '200px',
                    height: '90px',
                    margin: '0 20px' 
                })
                .hide()
                .on('click.bart', function(e) {
                        
                // next ballon
                balcnt++;
                bal = new balloon( bs[balcnt] );
                bal.inflate(canvas);
                        
                // update counts
                if(opts.showpumpcount) {
                    canvas.setLayer('pumpnum', { text: opts.txt_number_of_pumps + '0' });
                }
                if(opts.showcurrentearned) {
                    canvas.setLayer('curearn', { text: opts.txt_current_earned + '0.00' });
                }
                if(opts.showballooncount) {
                    canvas.setLayer('balnum', { text: opts.txt_balloon_number + 
                                                        (balcnt+1) + ' / ' + bs.length });
                }
                if(opts.showpopprob) {
                    canvas.setLayer('popprob', { text: opts.txt_prob_explosion + "\n\n" + 
                                                       (new Number(Math.round(10000/bs[balcnt].popprob)/100)).toFixed(2) + '%' });
                }
                if(opts.showpumpsused) {
                    canvas.setLayer('pumpuse', { text: opts.txt_pumps_used + "\n\n" + '0%' });
                }
                if(opts.showpumpcount | opts.showcurrentearned | opts.showballooncount | opts.showpopprob | opts.showpumpsused) {
                    canvas.drawLayers();
                }
                            
                // show/hide buttons
                butInflate.show();
                butCashin.show();
                butNext.hide();
                
            });
                                                  
            // cash in button
            var butCashin = $('<input>')
                .addClass('BARTcashin')
                .appendTo(divBottom)
                .attr({ 
                    value: opts.txt_cashin, 
                    type:  'button'
                })
                .css({
                    width:  '200px',
                    height: '90px',
                    margin: '0 20px' 
                })
                .on('click.bart', function(e) {
                       
                    // update counts
                    opts.earned = (opts.earned*1 + bal.earned*1).toFixed(2);
                    if(opts.showtotalearned) {
                        canvas.setLayer('totearn', { text: opts.txt_total_earned + opts.earned }).drawLayers();
                    }
                        
                    // show/hide buttons
                    butInflate.hide();
                    butCashin.hide();
                    bal.save();
                    if(balcnt+1 < bs.length) butNext.show();
                    else opts.onend();
                        
                    // sound
                    if(opts.sounds == true) {
                        snds.cashin.play();
                    }
                        
                });
                
                
                // draw first ballon
                var balcnt = 0;
                bal = new balloon( bs[0] );
                bal.inflate(canvas);
                    
            });   
            
        };
    
})(jQuery);

