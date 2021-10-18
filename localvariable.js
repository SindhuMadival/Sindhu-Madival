//local
function xyz() {

    var x=8;
    //console.log(x);
}

//global
var y=9;
function abc(){
    console.log(y);
   
}
//without using var keyword
"use strict"
function add(a,b){
    sum=a+b;
    console.log(sum)
}
add(5,10);


z=10;

console.log(z);