//ID
var sum=document.getElementById("btn");
console.log(sum);
var add=function() {
    alert("HI EVERYONE");
};
sum.addEventListener("click",add);

//Classname
var home=document.getElementsByClassName("home");
console.log(home);

//tagname
var home=document.getElementsByTagName("p");
console.log(home);

//query selector
var home=document.querySelector(".home");
console.log(home);

//query selector all
var home=document.querySelectorAll(".home");
console.log(home);

