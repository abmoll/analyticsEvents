$(document).ready(function() {
  console.log("ready!");
});
var count = 0;
// $(document).on('keydown', function() {
//   var text = document.getElementById('email').value;
//   countVowels(text);
//   })

//$('#text-box').on('click',function(event)

// function submitEmail() {
//   var emailAddr = document.getElementById('email').value;
//   countVowels(emailAddr);
// }

function logMetrics() {
  console.log("Highest Scroll Percent: " + highestScroll);
  console.log("Vowel Count: " + count);
}

// window.onbeforeunload = function(){
//   myfun();
//   return 'Are you sure you want to leave?';
//   alert("bye");
// };

$(window).bind('beforeunload', function() {
  logMetrics();
  return 'Are you sure you want to leave?';
});

// function countVowels(text) {
//   for (var i in text) {
//     //for (var i=0; i<text.length; i++) {
//     if (text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u') {
//       count++
//     }
//   }
//   alert("vowels: " + count);
//   return count;
// }

var startTime, endTime;

function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds
  var seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
}
var highestScroll = 0;

$(window).on('scroll', function() {
  var s = $(window).scrollTop(),
    d = $(document).height(),
    c = $(window).height();

  var scrollPercent = (s / (d - c)) * 100;
  if (highestScroll < scrollPercent) {
    highestScroll = scrollPercent;
  }

  console.clear();
  console.log("Scroll Percent: " + scrollPercent);
  console.log("Highest Scroll Percent: " + highestScroll);
})

var mouseenterTime = 0;
var mouseoverTime = 0;

function recordLink() {
  var link = $('#bVisit').attr("href");
  alert(link);
}

function recordRest() {
  var link = $('#bRestaurants').attr("href");
  alert(link);
}

$( "#email" ).keypress(function(event) {
  if (event.which == 97 || event.which == 101 || event.which == 105 || event.which == 111 || event.which == 117) {
    count++
  }
  console.log(count);
  return count;
});

$(".title-bar").on('mouseenter mouseleave', function(event) {
  var currentTime = new Date();
  if (event.type === 'mouseenter') {
    mouseenterTime = currentTime.getTime();
    //console.log('mouseenterTime (#1): ' + mouseenterTime);
  } else if (event.type === 'mouseleave') {
    //console.log('mouseenterTime (#2): ' + mouseenterTime);
    var mouseoverTime = currentTime.getTime() - mouseenterTime;
    console.log("Title-bar: mouseover time was: " + (mouseoverTime / 1000) + " seconds");

  }
})

$(document).on('mouseenter mouseleave', function(event) {
  var currentTime = new Date();
  if (event.type === 'mouseenter') {
    mouseenterTime = currentTime.getTime();
    //console.log('mouseenterTime (#1): ' + mouseenterTime);
  } else if (event.type === 'mouseleave') {
    //console.log('mouseenterTime (#2): ' + mouseenterTime);
    var mouseoverTime = currentTime.getTime() - mouseenterTime;
    console.log('Page: mouseover time was: ' + (mouseoverTime / 1000) + " seconds");

  }
})
