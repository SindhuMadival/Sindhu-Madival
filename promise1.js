
//creating the promise
let successful=true;
let promise=new Promise(function(resolve, reject) {
if(successful) {
resolve("success");
}
else{
reject("reject");
}
});
console.log(promise);

//then()
let successful1=true;
let promise1=new Promise(function(resolve,reject) {
    resolve("successful");
});
promise1.then(function success(result) {
console.log(result);
})
.then(function success() {
console.log("other function");
})
.then(function success() {
    console.log("next function");
});
console.log(promise1);

//then() and catch()
let successful2=false;
let promise2=new Promise(function(resolve,reject) {
    reject("rejected");
});
promise2.then(function completed(result) {
    console.log(result);
})
.catch(function error(result) {
    console.log(result);
});
console.log(promise2);

//finally
let successful3=true;
let promise3=new Promise(function(resolve,reject) {
    resolve("success");
});
promise3.finally(function hello() {
    console.log("hello world");
});
console.log(promise3);
