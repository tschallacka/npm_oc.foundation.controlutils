var $ = require('jquery');

module.exports = {
	markDisposable: function(el) {
            if(el instanceof $) {
               el = el.get(0);
	    }
	    el.setAttribute('data-disposable', '')
	},
	
	/*
	 * Destroys all disposable controls in a container.
	 * The disposable controls should watch the dispose-control 
	 * event.
	 */
	disposeControls: function(container) {
	    if(container instanceof $) {
		container = container.get(0);
	    }
	    var controls = container.querySelectorAll('[data-disposable]')
	    
	    for (var i=0, len=controls.length; i < len; i++) {
	        $(controls[i]).triggerHandler('dispose-control')
	    }
	    if (container.hasAttribute('data-disposable')) {
	        $(container).triggerHandler('dispose-control')
	    }
	}
}
