var rno1=Math.round(Math.random()*10)%6+1;
var rno2=Math.round(Math.random()*10)%6+1;

var rdice="images/dice"+rno1+".png";
var img=document.querySelectorAll("img")[0];

img.setAttribute("src",rdice);
rdice="images/dice"+rno2+".png";

img=document.querySelectorAll("img")[1];
img.setAttribute("src",rdice);

if(rno1>rno2)
    document.querySelector("h1").innerHTML="player 1 wins!!!";
else if(rno1<rno2) 
document.querySelector("h1").innerHTML="player 2 wins!!!";
else
document.querySelector("h1").innerHTML="its a draw";

