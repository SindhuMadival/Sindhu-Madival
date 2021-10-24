let odd=[6,7,8];
for(let oddNo of odd) {
    oddNo=oddNo+2;
    console.log(oddNo);
}

var num=[2,3,4,5];
var [a,b,...args]=num;
console.log(args);
console.log(a);