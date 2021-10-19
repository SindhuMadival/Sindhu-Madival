//create
var btn1=document.getElementById("btn1");
console.log(btn1);
var createElement=function() {
    var newElement=document.createElement("div");
    console.log(newElement);
};
btn1.addEventListener("click",createElement);

//textcontent
var btn2=document.getElementById("btn2");
console.log(btn2);
var createElement=function() {
    var newElement=document.createElement("div");
    newElement.textContent="hello";
    console.log(newElement);
};
btn2.addEventListener("click",createElement);


//append
var btn3=document.getElementById("btn3");
console.log(btn3);
var createElement=function() {
    var newElement=document.createElement("div");
    document.body.appendChild(newElement);
    console.log(newElement);
};
btn3.addEventListener("click",createElement);

//replace
var btn4=document.getElementById("btn4");
console.log(btn4);
var createElement=function() {
    var newElement=document.createElement("div");
    newElement.textContent="hello";
    var append=document.getElementById("appendText");
    var replaceText=document.getElementById("replaceText");
    append.replaceChild(newElement,replaceText);
    console.log(replaceText);
}
btn4.addEventListener("click",createElement);


//remove
var btn5=document.getElementById("btn5");
var createElement=function() {
    var append=document.querySelector(".appendHi");
    var removeText=document.querySelector(".appendHello");
    removeText.removeChild(append);
};
btn5.addEventListener("click",createElement);

