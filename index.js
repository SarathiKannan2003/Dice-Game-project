var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage1="dice"+randomNumber1+".png";
var randomImage2="dice"+randomNumber2+".png";
var randomImageSource1="./images/"+randomImage1;
var randomImageSource2="./images/"+randomImage2;
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="player 1 wins 🏁"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent="player 2 wins 🏁"
}
else{
    document.querySelector("h1").textContent="Draw this round"
}
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);