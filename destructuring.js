//default
function newArr(arr="tea") {
    console.log(arr);
}
newArr();



//spread
const consonant=['b','c','d'];
const vowel=['a','e','i','o'];
const  Alphabet=[...consonant, ...vowel];
console.log(Alphabet);

//for
const even=[20,24,28];
for(let evenNumber of even) {
    evenNumber=evenNumber+4;
    console.log(evenNumber);
}

//array destructuring
function newArr1() {
    return [11,12,13];
}
let [x,y,z]=newArr1();
console.log(`${x} ${y} ${z}`);

const hello={
    firstName:"Sindhu",
    lastName:"Madival"
};
const {firstName,lastName}=hello;
console.log(`${firstName} ${lastName}`);
