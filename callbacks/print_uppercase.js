var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function upperCase(chunks){
  console.log(chunks.toUpperCase());
};

getHTML(requestOptions, upperCase);