var app = {
    // Global vars
	currentShuffleNote: 1,
	// Application Constructor
    initialize: function() {
		console.log('initialize');
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
		console.log('bindEvents');
        document.addEventListener('deviceready', this.onDeviceReady, false);
		
		
		
		// While testing not on device - remove for mobile
		$(document).ready(function() {
			//console.log('ready');
			app.receivedEvent('deviceready');
			
			// Setting correct name of the chord and listeners
			app.changeNote(jQuery('#slider-chord').val());
			app.changeVar(jQuery('#slider-chord-variation').val());
			jQuery('#slider-chord').change(function(e) {
				//console.log('Change');
				app.changeNote(jQuery('#slider-chord').val());
			});
			jQuery('#slider-chord-variation').change(function(e) {
				//console.log('Change');
				app.changeVar(jQuery('#slider-chord-variation').val());
			});
		});
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //console.log('onDeviceReady');
		app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //console.log(id);
		if (id == 'deviceready') {
			//console.log('ready');
			// Assign each key with unique id
			jQuery('.keys li').each(function(index, element) {
				var noteElem = jQuery(this);
                var noteVal = note.getNumericValue(noteElem.html());
				if (noteVal > 0) {
					noteElem.attr('id', 'note-'+noteVal);
				}
            });
			this.clearNotes();
			this.setNewChord();
		}
    },
	// on changing note
	changeNote: function(numericVal) {
		this.clearNotes();
		var noteName = note.getNoteValue(numericVal);
		jQuery('h2 .title-chord').html(noteName);
		this.setNewChord();
	},
	// On changing the variation
	changeVar: function(numericVal) {
		this.clearNotes();
		var varName = variation.getVariationValue(numericVal);
		jQuery('h2 .title-variation').html(varName);
		this.setNewChord();
	},
	// Dispay new chord with root note
	setNewChord: function() {
		var chordVal = jQuery('#slider-chord').val()-1;
		var chordVar = jQuery('#slider-chord-variation').val();
		var allVars = variation.getVariationNotesArrays();
		var notes = allVars[chordVar-1];
		
		var rootNote = (chordVal+notes[0] > 12)?(chordVal+notes[0]-12):(notes[0]+chordVal);
		
		// Drawing notes
		for (var i=0; i < notes.length; i++) {
			var tmpNote = (chordVal+notes[i] > 12)?(chordVal+notes[i]-12):(notes[i]+chordVal);
			//console.log(tmpNote);
			var root = (i == 0)?' note-root':'';
			jQuery('#note-'+tmpNote).html(jQuery('#note-'+tmpNote).html() + '<div class="note'+root+'">&nbsp;</div>');
		}
		
		// Root note first functionality
		if (jQuery('#flip-first-root').val() > 0) {
			// shuffle li elements for white keys
			this.shuffleRoll(rootNote);
			// shuffle li elements for black keys
		}
	},
	// Shuffle piano roll if selected
	shuffleRoll: function(newShuffleValue) {
		//var tmpShuffle = (this.currentShuffleNote - newShuffleValue > 0)?(12 - this.currentShuffleNote + newShuffleValue):(newShuffleValue - this.currentShuffleNote);
		//var keysToRemove = (tmpShuffle %  2 == 0)?(tmpShuffle / 2):((tmpShuffle + 1) / 2);
		console.log('To remove: ' + keysToRemove + '; New: ' + (newShuffleValue));
		var i = (newShuffleValue %  2 == 0)?1:0;
		for (i; i < 24; i++) {
			var keysToRemove = (i %  2 == 0)?'keys-black':'keys-white';
			keyNext = jQuery('#'+keysToRemove+' li').first();
			keyNextHtml = document.getElementById(keyNext.attr('id')).outerHTML;
			//console.log(keyNextHtml);
			if (keyNext.attr('id') == 'note-'+newShuffleValue) {
				this.currentShuffleNote = newShuffleValue;
				break;
			}
			//keyNext.
			keyNext.remove();
			jQuery('#'+keysToRemove+' li').first().parent().html(jQuery('#'+keysToRemove+' li').first().parent().html() + keyNextHtml);
			/*
			
			keyBlack = jQuery('#keys-black li').first().clone(true, true);
			jQuery('#keys-white li').first().remove();
			jQuery('#keys-black li').first().remove();
			jQuery('#keys-black li').add(keyBlack);
			*/
		}
		
		 // maybe remove
		/*
		jQuery(selector).each(function(index, element) {
			if (index < noteValue) {
				var elemToCopy = jQuery(this).clone();
				
				jQuery(this).parent().add(elemToCopy);
				jQuery(this).remove();
			}
		});
		*/
	},
	// Clear notes already in place
	clearNotes: function() {
		jQuery('.keys li').each(function(index, element) {
			var value = jQuery(element).html();
			if (value.indexOf("<") >= 0) {
				console.log(jQuery(element).html() + '; pos: ' + value.indexOf("<"));
				jQuery(element).html(value.substr(0,value.indexOf("<")));
			}
		});
	}
};

var note = {
	// Note Constructor
    getNoteArray: function() {
		return ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    },
	getNoteValue: function(numVal) {
		var notes = this.getNoteArray();
		return notes[numVal-1];
    },
	getNumericValue: function(noteVal) {
		var notes = this.getNoteArray();
		for (var i=0; i < notes.length; i++) {
			if (notes[i] == noteVal) {
				return i+1;
			}
		}
		return -1;
    }
}

var variation = {
	// Note Constructor
    getVariationArray: function() {
		return ['', 'm', '7', 'm7', 'maj7', '6', '9', 'dim'];
    },
	getVariationNotesArrays: function() {
		return [
			[1,5,8],
			[1,4,8],
			[1,5,8,11],
			[1,4,8,11],
			[1,5,8,12],
			[1,5,8,10],
			[1,5,8,3],
			[1,4,7]
		];
    },
	getVariationValue: function(numVal) {
		var variations = this.getVariationArray();
		return variations[numVal-1];
    },
	getNumericValue: function(varVal) {
		var variations = this.getVariationArray();
		for (var i=0; i < variations.length; i++) {
			if (variations[i] == varVal) {
				return i+1;
			}
		}
		return -1;
    }
}