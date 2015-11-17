(function() {
    for (i=0; i<30; i++) {
        var element = document.getElementById("code" + i);
	
        if (element == null) { continue; }

        CodeMirror.fromTextArea(element, {
            lineNumbers: true,
            matchBrackets: true,
            continueComments: "Enter",
            extraKeys: {"Ctrl-Q": "toggleComment"}
        });
    };
})();


