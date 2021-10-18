var btn=document.getElementById("btn1");
var paraTag=document.querySelector(".home");
console.log(btn);
function parentElement() {
    console.log(paraTag.parentNode);
}
btn.addEventListener("click",parentElement);


var para=document.getElementById("btn2");
var para1=document.querySelector(".abc");
console.log(para);
function firstchild() {
    console.log(para.firstElementChild);
}
btn.addEventListener("click",firstchild);


var btn=document.getElementById("btn3");
var para2=document.querySelector(".abc");
console.log(para2);
function lastchild() {
    console.log(para2.lastElementChild);
}
btn.addEventListener("click",lastchild);
