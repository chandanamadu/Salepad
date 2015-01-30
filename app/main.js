
// define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'fastclick', 'durandal.forge'], 
// 	function(system, app, viewLocator, FastClick, durandalForge){

// 	var init = durandalForge.init;

// 	init();

// 	FastClick.attach(document.body);
	
// 	//>>excludeStart("build");
// 	system.debug(true);
// 	//>>excludeEnd("build");

// 	app.title = 'Durandal Starter Kit';

// 	app.configurePlugins({
// 	    router:true,
// 	    dialog: true,
// 	});

// 	app.start().then(function() {
// 	    //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
// 	    //Look for partial views in a 'views' folder in the root.
// 	    viewLocator.useConvention();

// 	    //Show the app by setting the root view model for our application with a transition.
// 	    app.setRoot('shell/shell', 'motion');
// 	});

// });

import system from 'durandal/system';
import app from 'durandal/app';
import viewLocator from 'durandal/viewLocator';
import {init} from 'durandal.forge';
//import {Q} from 'q';
// import Q from 'q';
// import breeze from 'breeze';

init();

//>>excludeStart("build");
system.debug(true);
//>>excludeEnd("build");

app.title = 'Durandal Starter Kit';

app.configurePlugins({
    router:true,
    dialog: true,
    widget: true
});

app.start().then(function() {
    //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
    //Look for partial views in a 'views' folder in the root.
    viewLocator.useConvention();

    //Show the app by setting the root view model for our application with a transition.
    app.setRoot('shell/shell', 'motion');
});





