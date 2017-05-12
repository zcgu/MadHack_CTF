number = 32;

var sha512 = require('js-sha512');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

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
  
    index1 = data.indexOf('----- BEGIN MESSAGE -----<br />');
    index2 = data.indexOf('----- END MESSAGE -----');

    word = data.substring(index1 + '----- BEGIN MESSAGE -----<br />'.length, index2);
    word = word.trim();

    index3 = word.indexOf('<br />');
    word = word.substring(0, index3);
      console.log(word); 

      num1 = word.substring(0, word.indexOf('+')).trim();
      
      num1 = parseInt(num1, 10);
      num2 = word.substring(word.indexOf('+') + 4, word.indexOf('-')).trim();
      console.log(num2);
      num2 = parseInt(word, 16);
      num3 = word.substring(word.indexOf('-') + 2, word.indexOf('=')).trim();
      console.log(num3);
      num3 = parseInt(num3, 2);

      console.log(num1, num2, num3);



    if (num1 && count == 0) {
      count = 1;
      // var digit = parseInt(word, 2);   
      res = num1 + num2 - num3;
      httpGetAsync('https://ringzer0team.com/challenges/' + number + '/' + res , function(data) {
        console.log(data);
        });
    }

});
