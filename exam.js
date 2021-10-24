let promise=new Promise(function(resolve,reject) {
    setTimeout(function() {
        resolve("successful");
    },6000);
});
async function helloWorld() {
       let abc=await promise;
       console.log(abc);
}
fetch("/readme.txt")
       .then((response)=>response.text())
       .then((data)=>console.log(data));
helloWorld();