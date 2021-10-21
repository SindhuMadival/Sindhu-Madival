//concat
let a=[3,4,5];
let b=[7,8,9];
let concat=a.concat(b);
console.log(concat);

//left to right
let a1=[2,3,5,6,7,8];
console.log(a1.indexOf(7));

//right to left
let a2=[2,3,5,6,7,8,9];
console.log(a2.lastIndexOf(8));

//include
let one=[2,3,5,6,7,8,9];
console.log(one.includes(8));

//tostring
let x=["Sindhu","Lavanya","Misriya"];
let y=x.toString();
console.log(y);

//array
let c=["vowels","consonant"];
let d=Array.isArray(c);
console.log(d);
console.log(typeof c);

//foreach
let s=[11,12,13];
let t=[21,21,23];
let u=s.forEach(function(item) {
    return console.log(`${item+3}`);
});
console.log(u);

//map
let m=[7,8,9,6,5,4];
let n=m.map(function(item) {
    return ++item;
});
console.log(n);

//filter
let e=[3,4,5,6,7,8];
let f=e.filter(function(item) {
return item%2==0;
});
console.log(f);

//foreach arrow
let v=[9,8,7,6,5,4];
let g=v.forEach((item)=>{
    console.log(`${item+1}`);
});

//filter arrow
let p=[1,2,3,4,5,6];
let j=p.filter((p)=> p%2==0);
console.log(j);

//map arrow
let o=[6,5,4,9,8];
let z=o.map((item)=>{
    return ++item;
});
console.log(z);
