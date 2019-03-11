//do i need the file extension here?
var getHTML = require('./http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function lowerCase(chunks) {
  console.log(chunks.toLowerCase());
  };

//(requestOptions, lowerCase);
getHTML(requestOptions, lowerCase);