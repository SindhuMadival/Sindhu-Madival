//push
var arr=[1,2,3,4,5,6,7,8,9,10];
arr.push(11);
console.log(arr);

//pop
var arr1=[1,2,3,4,5,6,7,8,9,10];
arr1.pop();
console.log(arr1);

//unshift
var arr6=[1,2,3,4,5,6,7,8,9,10];
arr6.unshift(12);
console.log(arr6);

//shift
var arr7=[1,2,3,4,5,6,7,8,9,10];
arr7.shift();
console.log(arr7);


//slice
var arr3=[1,2,3,4,5,6,7,8,9,10];
var newArr=arr3.slice(2,7);
console.log(newArr);
console.log(arr3);

//splice
var arr2=[1,2,3,4,5,6,7,8,9,10];
arr2.splice(1,8);
console.log(arr2);

//split
var str="It splits a string into an array of substrings";
var arr4=str.split(" ",3);
console.log(arr4);

var a=[];
var b=[];
for(i=10;i<=20;i++) {
    if(i%2==0)
    {
        a.push(i);
    }
    else{
        b.push(i);
    }
}
console.log("odd",b);
console.log("even",a);




