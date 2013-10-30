Package.describe({
	summary: "Paymill Node package (by Thomas Schaaf) and Paymill's Bridge.js repackaged for meteor."
});

Npm.depends({ "paymill-node": "0.0.4" });

Package.on_use(function (api) {
	
	 // ensure backwards compatibility with Meteor pre-0.6.5
	if (api.export){
	    api.export('METEORPAYMILL');
	}
    
	api.add_files('paymill_bridge.js', 'client');
	api.add_files('paymill_node.js', 'server');
});
