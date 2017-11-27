$( document ).ready(function() {
    console.log( "ready!" );
});

var vowCount=0;
var elText = document.getElementById('email').value;

// then reset the vowel count outside of the function, by utilizing the return.
document.getElementById('emailButton').addEventListener('click', function(){
  vowCount = submitText(elText);
  alert("Tot: " + vowCount);
});

// first make the function accept parameters
     function submitText(text) {
       var count=0;
        alert("text: " + text);

        for (var i in text) {
          if (text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u') {
            count++
            alert("vowels: " + count);
          }
        }
        return count;
      }
