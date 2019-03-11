var https = require("https");


function getAndPrintHTMLChunks(){
  var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step1.html"
  };

  https.get(requestOptions, function(response){
    response.setEncoding("utf8");
    response.on("data", function(data){
      console.log("[------------chunk received. Length: ", data.length, "]\n");
      response.on("end", function(){
  console.log("[---response stream complete.---]");
});  //if error (console.log("there was an error: ", error))
});
});
}
getAndPrintHTMLChunks();
