function test_render() {
	/*
	* Send information to flask endpoint with render information.
	*/
	var dt = new Date();
	var isoDate = dt.toISOString();
	var isoDate_sanitize_1 = isoDate.match("(.*?)\\..*")[1];
	var isoDate_sanitize_2 = isoDate_sanitize_1.replace(/[:-]/g, "_");
	var _navigator = {};
	for (var i in navigator) _navigator[i] = navigator[i];

	modernizr_output = feature_detection_modernizer();

	new Fingerprint2().get(function(result, components) {
		var fingerprint = components;

		var output = {
			rendered_dom: new XMLSerializer().serializeToString(document),
			navigator: _navigator,
			timestamp: isoDate_sanitize_2,
			modernizr: modernizr_output,
			fingerprint: fingerprint
		};

		var xhr = new XMLHttpRequest();
		xhr.open("POST", "/endpoint", true);

		xhr.send(JSON.stringify(output));
	});
}

function feature_detection_modernizer() {
	full_list_moderizer_features = [
		"ambientlight",
		"applicationcache",
		"audio",
		"batteryapi",
		"blobconstructor",
		"canvas",
		"canvastext",
		"contenteditable",
		"contextmenu",
		"cookies",
		"cors",
		"cryptography",
		"customelements",
		"customprotocolhandler",
		"customevent",
		"dart",
		"dataview",
		"emoji",
		"eventlistener",
		"exiforientation",
		"flash",
		"forcetouch",
		"fullscreen",
		"gamepads",
		"geolocation",
		"hashchange",
		"hiddenscroll",
		"history",
		"htmlimports",
		"ie8compat",
		"indexeddb",
		"indexeddbblob",
		"input",
		"search",
		"inputtypes",
		"typedarrays",
		"unicoderange",
		"websockets",
		"canvaswinding",
		"getrandomvalues",
		"cssall",
		"cssanimations",
		"appearance",
		"backdropfilter",
		"backgroundblendmode",
		"backgroundcliptext",
		"bgpositionshorthand",
		"bgpositionxy",
		"bgrepeatspace",
		"bgrepeatround",
		"backgroundsize",
		"borderimage",
		"boxshadow",
		"csscalc",
		"csschunit",
		"cssgrid",
		"cssgridlegacy",
		"display-runin",
		"cssescape",
		"cssexunit",
		"flexbox",
		"flexboxlegacy",
		"flexwrap",
		"focuswithin",
		"generatedcontent",
		"hairline",
		"hsla",
		"cssinvalid",
		"lastchild",
		"mediaqueries",
		"nthchild",
		"objectfit",
		"overflowscrolling",
		"csspositionsticky",
		"csspseudotransitions",
		"regions",
		"cssresize",
		"rgba",
		"scrollsnappoints",
		"shapes",
		"subpixelfont",
		"target",
		"textalignlast",
		"csstransforms",
		"csstransformslevel2",
		"userselect",
		"cssvhunit",
		"cssvminunit",
		"willchange",
		"wrapflow",
		"createelementattrs,",
		"createelement-attrs,",
		"documentfragment",
		"hidden",
		"microdata",
		"details",
		"picture",
		"ruby",
		"time",
		"unknownelements",
		"es5array",
		"es5date",
		"es5function",
		"es5object",
		"es5",
		"strictmode",
		"es5string",
		"es5syntax",
		"es5undefined",
		"es6array",
		"arrow",
		"es6collections",
		"contains",
		"generators",
		"es6math",
		"es6number",
		"es6object",
		"promises",
		"es6string",
		"devicemotion,",
		"deviceorientation",
		"oninput",
		"filereader",
		"filesystem",
		"sandbox",
		"seamless",
		"srcdoc",
		"apng",
		"imgcrossorigin",
		"jpeg2000",
		"jpegxr",
		"sizes",
		"srcset",
		"webpalpha",
		"webpanimation",
		"webplossless,",
		"webp-lossless",
		"webp",
		"inputformaction",
		"inputformenctype",
		"inputformmethod",
		"inputformtarget",
		"hovermq",
		"pointermq",
		"beacon",
		"lowbandwidth",
		"speechsynthesis",
		"sessionstorage",
		"stylescoped",
		"svgasimg",
		"svgforeignobject",
		"inlinesvg",
		"smil",
		"videopreload",
		"websocketsbinary"
	];

	modernizr_output = [];

	full_list_moderizer_features.forEach(function(element) {
		if (Modernizr[element]) {
			modernizr_output.push(element + ": Enabled");
		} else {
			modernizr_output.push(element + ": Disabled");
		}
	});

	return modernizr_output;
}

test_render();
