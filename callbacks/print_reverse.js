//do i need the file extension here?
var getHTML = require('./http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function reverse(chunks) {
console.log(chunks.split('').reverse().join(''));
  };

//(requestOptions, lowerCase);
getHTML(requestOptions, reverse);


  // var string = chunks;
  // var splitString = string.split("");
  // var reverseArray = splitString.reverse();
  // var joinArray = reverseArray.join("");
  //   console.log(chunks);