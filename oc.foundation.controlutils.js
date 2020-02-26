var $ = require('jquery');

module.exports = {
	markDisposable: function(el) {
        if(!(el instanceof $)) {
        	el = $(el)
	    }
	    el.attr('data-disposable', '')
	},
	
	/*
	 * Destroys all disposable controls in a container.
	 * The disposable controls should watch the dispose-control 
	 * event.
	 */
	disposeControls: function(container) {
		
	    if(!(container instanceof $)) {
	    	container = $(container);
	    }
	    var controls = container.find('[data-disposable]')
	    controls.triggerHandler('dispose-control');
	    
	    if (container.is('[data-disposable]')) {
	    	container.triggerHandler('dispose-control')
	    }
	}
}
