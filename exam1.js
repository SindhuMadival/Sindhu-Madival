async function asyncFunction() {
    let response=await fetch("https://jsonplaceholder.typicode.com/users")
    let data=await response.json();
    console.log(data);
}
asyncFunction();

async function asyncFunction() {
    let response=await fetch("https://jsonplaceholder.typicode.com/todos")
    let data=await response.json();
    console.log(data);
}
asyncFunction();

async function asyncFunction1() {
    let response1=await fetch("https://jsonplaceholder.typicode.com/comments")
    let data1=await response1.json();
    console.log(data1);
}
asyncFunction1();

async function asyncFunction2() {
    let response2=await fetch("https://jsonplaceholder.typicode.com/posts")
    let data2=await response2.json();
    console.log(data2);
}
asyncFunction2();