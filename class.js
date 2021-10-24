//creating javascript class
class Home{
    constructor(name) {
        this.name=name;
    }
}
const homeOne=new Home("Sindhu");
const homeTwo=new Home("Madival");
console.log(homeOne.name);

//methods inside constructor
class Home1{
    constructor(name1) {
        this.name=name1;
        this.hi=function() {
            return this.name;
        };
    }
}
const homethree=new Home1("Sindhu");
const homeFour=new Home1("Sinchana");
console.log(homeFour.hi());

//method inside class
class Home2{
    constructor(name2) {
        this.name=name2;
        
    }
    hii() {
        console.log(this.name);
    }
}
const homefive=new Home2("Chaitra");
const homesix=new Home2("Sinchana");
console.log(homefive.hii());

//getters and setters
class Home3{
    constructor(name3) {
        this.name=name3;
    }
    get Name() {
        return this.name3;
    }
    set Name(y) {
        this .name=y;
    }

}
const homeseven=new Home3("Hello");
console.log(homeseven.name);
homeseven.Name="HI";
console.log(homeseven.name);

//class inheritace
class Home4{
    constructor(name4) {
        this.name=name4;
    }
    good() {
        console.log(`${this.name}`);
    }
}
class Home5 extends Home4{
    constructor(name4) {
        super(name4);
    }
}
let homeeight=new Home5("Good Morning");
console.log(homeeight.good());



//override the method
class Home6{
    constructor(name5) {
        this.name=name5;
        this.lastName="rambo";
    }
    morning() {
        console.log(`${this.name}`);
    }
}
class Home7 extends Home6{
    constructor(name5) {
        super(name5);
        this.lastname="Shrinivas";
    }
    morning() {
        console.log(`${this.lastname}`);
    }

}
let homenine=new Home7("John");
console.log(homenine.morning());


//salary
class Evening{
    constructor(name,dept,salary) {
        this.name=name;
        this.dept=dept;
        this.salary=salary;
    }
}
    var firstuser={
        name:"Sindhu",
        dept:"CSE",
        salary:30000,
        incr:function(){
            console.log(this.salary+2000);
        }
    };
    const evening=new Evening("salary");
    console.log(firstuser.incr());

    var seconduser={
        name:"Sinchana",
        dept:"Civil",
        salary:20000,
        incr1:function(){
        console.log(this.salary+1000);
        }
    };
    const evening1=new Evening("salary");
    console.log(seconduser.incr1());
