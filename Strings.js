//string concatination
var hello="hello";
var yourName="saravanapriyan";
alert(hello +"there,"+ yourName);
hello.length();//to find length of character
//tweet or comment
var tweet = prompt("enter your comment");
var tweetcount = tweet.length();
alert("you have writtern"+tweetcount+"characters,you have"+(150-tweetcount)+"character balance");
tweet.slice(0,5);//string slicing