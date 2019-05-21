var $ = require('jquery');

module.exports = {
	markDisposable: function(el) {
	    el.setAttribute('data-disposable', '')
	},
	
	/*
	 * Destroys all disposable controls in a container.
	 * The disposable controls should watch the dispose-control 
	 * event.
	 */
	disposeControls: function(container) {
	    var controls = container.querySelectorAll('[data-disposable]')
	    
	    for (var i=0, len=controls.length; i < len; i++) {
	        $(controls[i]).triggerHandler('dispose-control')
	    }
	    if (container.hasAttribute('data-disposable')) {
	        $(container).triggerHandler('dispose-control')
	    }
	}
}