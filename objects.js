function Increment(user_name,user_department,user_salary) {
    (this.name=user_name),
    (this.department=user_department),
    (this.salary=user_salary);
    (this.increment=function() {
        console.log(this.salary+2000);
 
    });

    (this.increment1=function() {
        console.log(this.salary+2000);
 
    });
}
const firstUser=new Increment("hello","abc",20000);
const secondUser=new Increment("hi","xyz",30000);
console.log(firstUser.salary);
console.log(firstUser.increment());
console.log(secondUser.salary);
console.log(secondUser.increment1());



//
function salary() {
    console.log(this.name,this.dept,this.salary);
}

var thirduser={
    name:"Sindhu",
    dept:"CSE",
    salary:40000,
    incr:function(){
        console.log(thirduser.salary);
        console.log(this.salary+1000);
    }
};
var fourthuser={
    name:"Sinchana",
    dept:"Civil",
    salary:10000,
    incr1:function(){
    console.log(fourthuser.salary);
    console.log(this.salary+1000);
    }
};


console.log(thirduser.incr());
console.log(fourthuser.incr1());

