function sample1(){
    console.log("Hello World");
    if(true){
    var a=5
    console.log(a);
    } //var is function scoped
    console.log(a); //var is available through out the function
}
function sample(){
    console.log("Hello World");
    if(true){
    let a=5
    console.log(a);
    }
    console.log(a);//let is block scoped
}
sample1();
const b=5;
//b=6 //const is block scoped and cannot be reassigned Error
// sample();Error due to let

var a="hello"
console.log(a);
a=5
console.log(a);
//var is function scoped and can be reassigned
var c=1287368276487n;
console.log(c); //BigInt is used to store large integers
var c=BigInt(123435356)
console.log(c); 
let e=1
// let e=3 //Error due to let cannot be overriden inside same block
let student1={  //object
    name:"John",
    age:20,
    isStudent:true,
}
console.log(student1); //object is a collection of key value pairs
console.log(student1.name); //dot notation
console.log(student1["name"]); //bracket notation

//nested objects
let student2={  //object
    name:["John","marston"],
    age:20,
    isStudent:true,
}
console.log(student2);
console.log(student2.name[0]); //bracket notation
console.log(student2["name"][0]); //bracket notation

let student3={  //object
    name:["John","marston"],
    age:20,
    isStudent:true,
    address:{
        city:"New York",
        state:"NY"
    },
    hello: function()   {
        console.log("Hello");
    }
}
console.log(student3.address.city); //dot notation
console.log(student3["address"]["city"]); //bracket notation
student3.hello();
console.log(student3.hello()); //hello undefined
// console.log(student3);

let student4 = new Object(); //object
student4.name = "Zoro";
student4.age = 21;
student4.isStudent = true;
student4.hello = function() { //method
    console.log("Hello");
}
console.log(student4);
student4.hello(); //Hello 

