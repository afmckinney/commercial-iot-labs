var Finder = require('fs-finder');
var files = Finder.from('../modules/').findFiles('*.html');

var blc = require("broken-link-checker");
  
var htmlChecker = new blc.UrlChecker(null, {
    link: function(result) {
        console.log(result.html.index, result.broken, result.html.text, result.url.resolved);
        //-> 0 false "absolute link" "https://google.com/" 
        //-> 1 false "relative link" "https://mywebsite.com/path/to/resource.html" 
        //-> 2 true null "http://fakeurl.com/image.png" 
    },
    complete: function() {
        console.log("done checking!");
    }
});

htmlChecker.enqueue("http://localhost:3000/");

// for (var i=0; i < files.length; i++) {
//     console.log(files[i]);
//     htmlChecker.enqueue(files[i]);
// };
