

alert("Welcome to our Website")


var name = prompt("What is your name ?")

console.log(name)
var numofwatch = prompt(" How old were you when you watch your fav anime?")

function numofwatchfun (num){
var output= ''
for (var i =0 ; i < num ; i++){

console.log(output);
  output = "I WAS "+  numofwatch  + "  WHEN I WATCHED MY FAV ANIME"
}
 return output;


}
document.write(numofwatchfun(numofwatch))


 function animefun(){

var like = prompt("Do like Anime ? (yes, No) ")
while(like != "Yes"&&like != "yes"&&like != "No"&&like != "no"){ var like = prompt("Do like Anime ? (yes, No) ")}
  

    if( like == "yes"|| like == "Yes"){

var favanime = prompt ("What is your fav anime?")

var prefer = prompt("Now, Which one of these Anime do you prefer ? (1 - Pokemon ,2- Detective Conan) select 1 or 2 ")

while(prefer != "1" && prefer != "2"){
  prefer = prompt("Now, Which one of these Anime do you prefer ? (1 - Pokemon ,2- Detective Conan) select 1 or 2 ")}

  if ( prefer == "1"){
var times= prompt("how many time you wish to see it on my page ")
while (times >=  5 || times <= 1)
{ times= prompt ("please enter number less than 6") }

for(var i = 1 ; i <= times; i++) {
document.write("<div>" + "<h3>" + prefer +"</h3>" + "<img src='https://i.ytimg.com/vi/8TbMTpBF2Hg/maxresdefault.jpg' alt='Detective Conan'>" + "</div>")
}}
else {
var times= prompt("how many time you wish to see it on my page ")
while (times >=  5 || times <= 1)
{times= prompt ( "please enter number less than 6") }

for(var j = 1 ; j <= times; j++) {
document.write("<div>" + "<h3>" + prefer +"</h3>" + "<img src='https://sha3la.s3-accelerate.amazonaws.com/2021/01/1800.png' alt='Pokemon'>" + "</div>")
}


  }


    }






   else  {
        alert("Unfortunatly, take a look at our webpage, maybe you will change your mind")

   }
  


 }
 
animefun();





/*alert("Welcome to our Website")


var name = prompt("What is your name ?")

console.log(name)


var favanime = prompt ("What is your fav anime?")

if ( favanime == "Pokemon")
{
  alert("You Entered Pokemon ")
}
else{
  document.write( favanime)
}*/