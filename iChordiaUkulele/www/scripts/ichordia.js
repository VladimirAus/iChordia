// JavaScript Document
var iChordiaUkulele = {
	getDefaultData: function() {
		return [
			[0, 0, [0,0,0,3]],
			[0, 1, [0,0,0,0]],
			[0, 2, [0,0,0,1]],
			[0, 3, [0,2,0,1]],
			[0, 4, [0,0,0,2]],
			[0, 5, [0,3,3,3]],
			[0, 6, [0,3,3,0]],
			[0, 7, [3,3,3,3]],
			[0, 8, [5,3,3,5]],
			[1, 0, [1,1,1,4]],
			[1, 1, [1,1,1,1]],
			[1, 2, [1,1,1,2]],
			[1, 3, [1,3,1,2]],
			[1, 4, [1,1,1,3]],
			[1, 5, [5,3,3,3]],
			[1, 6, [1,4,4,1]],
			[1, 7, [1,4,4,2]],
			[1, 8, [1,3,0,4]],
			[2, 0, [2,2,2,0]],
			[2, 1, [2,2,2,2]],
			[2, 2, [2,2,2,3]],
			[2, 3, [2,4,2,3]],
			[2, 4, [2,2,2,4]],
			[2, 5, [2,2,1,0]],
			[2, 6, [2,2,1,2]],
			[2, 7, [2,2,1,3]],
			[2, 8, [2,4,1,5]],
			[3, 0, [0,3,3,1]],
			[3, 1, [3,3,3,3]],
			[3, 2, [3,3,3,4]],
			[3, 3, [0,1,1,1]],
			[3, 4, [3,3,3,5]],
			[3, 5, [3,3,2,1]],
			[3, 6, [3,0,2,1]],
			[3, 7, [3,1,2,1]],
			[3, 8, [3,5,2,6]],
			[4, 0, [4,4,4,2]],
			[4, 1, [1,1,0,2]],
			[4, 2, [1,2,0,2]],
			[4, 3, [1,2,2,2]],
			[4, 4, [1,3,0,2]],
			[4, 5, [0,4,3,2]],
			[4, 6, [4,4,3,4]],
			[4, 7, [0,2,0,2]],
			[4, 8, [0,4,2,2]],
			[5, 0, [2,0,1,0]],
			[5, 1, [2,2,1,3]],
			[5, 2, [2,3,1,0]],
			[5, 3, [2,3,3,3]],
			[5, 4, [2,4,1,3]],
			[5, 5, [1,0,1,3]],
			[5, 6, [1,2,1,3]],
			[5, 7, [1,3,1,3]],
			[5, 8, [0,5,4,3]],
			[6, 0, [3,1,2,1]],
			[6, 1, [3,3,2,4]],
			[6, 2, [3,4,2,4]],
			[6, 3, [1,1,0,1]],
			[6, 4, [3,5,2,4]],
			[6, 5, [2,1,2,0]],
			[6, 6, [2,3,2,4]],
			[6, 7, [2,4,2,4]],
			[6, 8, [1,1,2,0]],
			[7, 0, [0,2,3,0]],
			[7, 1, [0,2,0,2]],
			[7, 2, [0,2,1,2]],
			[7, 3, [2,2,1,2]],
			[7, 4, [0,2,2,2]],
			[7, 5, [0,2,3,1]],
			[7, 6, [0,2,0,1]],
			[7, 7, [0,2,1,1]],
			[7, 8, [2,2,3,1]],
			[8, 0, [5,3,4,3]],
			[8, 1, [1,3,1,3]],
			[8, 2, [1,3,2,3]],
			[8, 3, [3,3,2,3]],
			[8, 4, [1,3,3,3]],
			[8, 5, [4,3,4,2]],
			[8, 6, [1,3,1,2]],
			[8, 7, [1,3,2,2]],
			[8, 8, [3,3,4,2]],
			[9, 0, [2,1,0,0]],
			[9, 1, [2,1,2,0]],
			[9, 2, [0,1,0,0]],
			[9, 3, [0,1,0,2]],
			[9, 4, [1,1,0,0]],
			[9, 5, [2,0,0,0]],
			[9, 6, [2,0,2,0]],
			[9, 7, [0,0,0,0]],
			[9, 8, [2,0,0,2]],
			[10, 0, [3,2,1,1]],
			[10, 1, [0,2,1,1]],
			[10, 2, [1,2,1,1]],
			[10, 3, [1,2,1,3]],
			[10, 4, [3,2,1,0]],
			[10, 5, [3,1,1,1]],
			[10, 6, [3,1,3,1]],
			[10, 7, [1,1,1,1]],
			[10, 8, [3,1,1,3]],
			[11, 0, [4,3,2,2]],
			[11, 1, [1,3,2,2]],
			[11, 2, [2,3,2,2]],
			[11, 3, [2,3,2,4]],
			[11, 4, [4,3,2,1]],
			[11, 5, [4,2,2,2]],
			[11, 6, [1,2,2,2]],
			[11, 7, [2,2,2,2]],
			[11, 8, [4,2,2,4]]
		];
    },
	getNote: function(note, isSharp) {
		var x = "";
		switch (note) {
			case 0: x="C"; break;
			case 1: x=(isSharp)?'C#':'Db'; break;
			case 2: x="D"; break;
			case 3: x=(isSharp)?'C#':'Db'; break;
			case 4: x="E"; break;
			case 5: x="F"; break;
			case 6: x=(isSharp)?'F#':'Gb'; break;
			case 7: x="G"; break;
			case 8: x=(isSharp)?'G#':'Ab'; break;
			case 9: x="A"; break;
			case 10: x=(isSharp)?'A#':'Bb'; break;
			case 11: x="B";

		}
		return x;
	},
	getVariant: function(variant) {
		var x = "";
		switch (variant) {
			case 0: x="maj"; break;
			case 1: x="6"; break;
			case 2: x="7"; break;
			case 3: x="9"; break;
			case 4: x="maj7"; break;
			case 5: x="m"; break;
			case 6: x="m6"; break;
			case 7: x="m7"; break;
			case 8: x="m9"; break;
		}
		return x;
	}
};

var app = {
    // Global vars
	strings: 4,
	frets: 5,
	data: iChordiaUkulele.getDefaultData(),
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
		console.log('ready');
        //document.addEventListener('load', this.onAppReady, false);
		if(window.addEventListener){
			window.addEventListener('load', this.onAppReady,false); //W3C
		}
		else{
			window.attachEvent('onload', this.onAppReady); //IE
		}
	},
	onAppReady: function() {
        //console.log('onDeviceReady');
		app.receivedEvent('appready');
    },
	receivedEvent: function(id) {
		if (id == 'appready') {
			// Init app
			var appContainer = document.getElementById('app');
			var appHeader = document.createElement("div");
			appHeader.id = "app-header";
			appHeader.className = "app-container";
			//appContainer.appendChild(appHeader);
			var appContent = document.createElement("div");
			appContent.id = "app-content";
			appContent.className = "app-container";
			appContent.innerHTML = '<div id="app-content-width"></div>';
			appContainer.appendChild(appContent);
			app.drawChords();
		}
	},
	drawChords: function() {
		var appContent = document.getElementById('app-content-width');
		var lastChord = "0";
		for (chordIndex in app.data) {
			var elemChord = document.createElement("div");
			elemChord.className = "app-ichord";
			if (lastChord != app.data[chordIndex][0]) {
				elemChord.className += " ul-break";
				lastChord = app.data[chordIndex][0];
			}
			elemChord.innerHTML = "<h2>"+iChordiaUkulele.getNote(app.data[chordIndex][0], true) + "" + 
				iChordiaUkulele.getVariant(app.data[chordIndex][1])
				+ "</h2>";
			
			//console.log(chord);
			
			var ulBoard = document.createElement("ul");
			ulBoard.className = "ul-board";
			var ulNotes = document.createElement("ul");
			ulNotes.className = "ul-notes";
			
			chordNotes = app.data[chordIndex][2];
			for(var y=1; y <= app.frets; y++) {
				for(var x=1; x <= app.strings; x++) {
					classListStr = "";
					classListStr += (x == 1)?" edge-left":"";
					classListStr += (x == app.strings-1)?" edge-right":"";
					classListStr += (y == 1)?" edge-top":"";
					classListStr += (y == app.frets)?" edge-bottom":"";
					classNoteHide = (chordNotes[x-1] == y)?'':'-hide';
					//console.log(chordNotes[x-1] +" : "+ y-1);
					if (x < app.strings) {
						ulBoard.innerHTML += '<li class="app-note-hide'+classListStr+'">&bull;</li>';
					}
					ulNotes.innerHTML += '<li class="app-note'+classNoteHide+classListStr+'">&bull;</li>';
				}
			}
			elemChord.appendChild(ulNotes);
			elemChord.appendChild(ulBoard);
			
			appContent.appendChild(elemChord);
		}
	}
};