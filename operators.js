//Spread operator(...)
// let arr1=[1,2,3,4,5];
// console.log(arr1);
// let arr2=[...arr1,6,7,8,9]; //...arr1 is spread operator, copying all elements of arr1 to arr2 not the reference/address
// console.log(arr2);
// arr2[2]=10;
// console.log(arr1); //arr1 is not affected
// console.log(arr2);
// arr1[2]=100;
// console.log(arr1); 
// console.log(arr2); //arr2 is not affected

//array
// let arr3=arr1; //arr3 is just a reference to arr1
// arr3[2]=1000;
// console.log(arr1);
// console.log(arr3); //arr1 is affected because arr3 is just a reference to arr1


// let a=[1,2,3,4,5];
// let x=[6,7,8,9];
// let b=[...a,...x];
// console.log(b);

// function spreadExample(values){ 
//     console.log(values);
// }
// spreadExample(...b);


//Rest operator(...)
// function restExample(x,y,...values){ //...values is rest operator
//     console.log(x);                  //1 is stored in x
//     console.log(y);                  //2 is stored in y
//     console.log(values);             //3,4,5,6,7,8,9 is stored in values
// }
// restExample(1,2,3,4,5,6,7,8,9);

// function restExample(...values,x,y){  //error because rest operator should be at the end
//     console.log(x);
//     console.log(y);
//     console.log(values);
// }
// restExample(1,2,3,4,5,6,7,8,9);

//object restoperator
// let a={
//     name:"Mohan",
//     age:21
// }
// let b={
//     name:"soundappan",
//     age:21
// }
// let func=(...objs)=>{
//     console.log(objs);
//     console.log(objs[0].name);
//     console.log(objs[1].name);
// }
// func(a,b);
// let c={...a,...b}; //error because object properties with same name are not allowed
// let b=[...a]; //error because rest operator can only be used with arrays

//destructuring

//array destructuring
// let a=[1,2,3,4,5];
// let [b,c,d,e,f]=a;
// let [b,c,d,e,f,g]=a;
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// let [b,c,d,...e]=a;
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

//object destructuring
// let a={
//     name:"Mohan",
//     age:21,
//     gender:"male",
//     address:"tiruppur"
// }
// let[name,age,gender]=a; //error because object properties are not in order
//let{name,age,gender}=a; //no error because object properties are in order
// let {name,age,...details}=a;
// console.log(name);
// console.log(age);
// console.log(gender);
// console.log(name);
// console.log(age);
// console.log(details);