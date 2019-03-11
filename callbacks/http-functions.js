
var https = require("https");
var chunks="";

module.exports = function getHTML (options, callback){
    https.get(options, function(response){
      response.setEncoding("utf8");
      response.on("data", function(data){
        chunks += data;

      });

      response.on("end", function(){
        console.log("[-*-response stream complete.-*-]");
        callback(chunks);
      });
    });
  }
  function printHTML (html){
    console.log(html);

  }





