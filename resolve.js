//resolve
let promise=new Promise(function(resolve,reject) {
    setTimeout(function() {
        resolve("successful");
    },6000);
});
async function helloWorld() {
    let abc=await promise;
    console.log(abc);
}
helloWorld();


//reject
let promise1=new Promise(function(resolve,reject) {
        reject("reject");
});
async function hiWorld() {
    let xyz=await promise1;
    console.log(xyz);
}
hiWorld();

