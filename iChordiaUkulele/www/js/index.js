/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
		
    }
};

var iChordia = {
    // Application Constructor
    initialize: function() {
    this.buildChords();
    },
    // Build chords
    buildChords: function() {
        iMatrix = jQuery('.iInstrument').attr('iInstrument').split('-');
        jQuery('.iInstrument .iChord').each(function(index) {
            var notes = jQuery(this).attr('iChord').split('-');
            // TODO: add check for the same number of strings
            var noteCode = '<ul class="iNotes processed"><h3>'+jQuery(this).attr('iName')+'</h3>';
            var chordCode = '<ul class="iChord processed"><h3>'+jQuery(this).attr('iName')+'</h3>';
            for(var cRow = 0; cRow <= iMatrix[1]; cRow++) {
                for(var cCol = 0; cCol < iMatrix[0]; cCol++) {
                    
                    
                    // Note match
                    var noteVal = "&nbsp;";
                    
                    if ((notes[cCol] == (cRow)) && (0 < notes[cCol]) && (6 > notes[cCol])) {
                        noteVal = ' note-full';
                    }
                                            
                    // First & last class
                    var cellClass = "cell" + " row-" + cRow + " col-" + cCol;
                    if (cCol == 0) {
                        cellClass += ' startrow';
                    }
                    else if (cCol+1 == iMatrix[0]) {
                         cellClass += ' endrow';
                    }
                    //noteCode += '<li class="'+ cellClass +'">'+noteVal+'</li>';
                    chordCode += '<li class="'+ cellClass +'"><div class="note'+noteVal+'"></note></li>';
                }
            }
            noteCode += '</ul>';
            chordCode += '</ul>';
            //jQuery(this).append(noteCode);
            jQuery(this).append(chordCode);
        });
    }
};