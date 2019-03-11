var https = require("https");
  var chunks = "";

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

function getAndPrintHTML(options) {


https.get(requestOptions, function(response){

    response.setEncoding("utf8");
    response.on("data", function(data){
      chunks += data;
      console.log(chunks);
    });
      response.on("end", function(){
      console.log("[-*-response stream complete.-*-]");
console.log(chunks);
      });
    });
}


getAndPrintHTML();

