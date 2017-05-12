number = 119;

var sha512 = require('js-sha512');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function decode_utf8(s) {
  return decodeURIComponent(s);
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.setDisableHeaderCheck(true);
    xmlHttp.onreadystatechange = function() { 
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.withCredentials = true;
    xmlHttp.setRequestHeader('Cookie', "PHPSESSID=c7c7itrfbg6q14uvg1qje26he6");
    xmlHttp.send(null);
}

count = 0;

httpGetAsync('https://ringzer0team.com/challenges/' + number , function(data) {
  
  // console.log(data);
    index1 = data.indexOf('----- BEGIN MESSAGE -----<br />');
    index2 = data.indexOf('----- END MESSAGE -----');

    word = data.substring(index1 + '----- BEGIN MESSAGE -----<br />'.length, index2);
    word = word.trim();
    console.log(word);

    // index3 = word.indexOf('<br />');
    // word = word.substring(0, index3);

    // word = word.trim();


    
    // console.log(word);
    // console.log(binaryAgent(word));

    // if (word.length > 0 && count == 0) {
    //   count = 1;
    //   var digit = parseInt(word, 2);   
    //   console.log(digit); 

    //   httpGetAsync('https://ringzer0team.com/challenges/' + number + '/' + sha512(word), function(data) {
    //     // console.log(data);
    //   });
    // }

});



