var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");

var home=document.querySelector(".home");
var colorChangeRed=function() {
    home.classList.add("home1");
}

var home=document.querySelector(".home");
var colorChangeGreen=function() {
    home.classList.add("home2");
}

var home=document.querySelector(".home");
var colorChangeBlue=function() {
    home.classList.add("home3");
}

btn1.addEventListener("click",colorChangeRed);
btn2.addEventListener("click",colorChangeGreen);
btn3.addEventListener("click",colorChangeBlue);
