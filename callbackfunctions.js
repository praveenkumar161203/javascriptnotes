// function dog(cat){  //this is a function that takes a callback function as an argument
//     setTimeout(()=>{ //setTimeout is a function that takes two arguments, a callback function and a time in milliseconds
//         console.log("Jack the dog"); 
//         cat(); //this is a function call that calls the callback function that was passed as an argument to the dog function
//     },2000); //2000 milliseconds is 2 seconds
    
// }
// function cat(){ 
    //     console.log("Rose the cat");
    // }
// dog(cat); //this is a function call that passes the cat function as an argument to the dog function


// function attendance(lunch){
    //     setTimeout(()=>{
        //         console.log("Attendance taken");
        //         lunch(goingToHome);
        //     },2000);
        // }
        // function lunch(){
//     setTimeout(()=>{
//         console.log("Lunch served");
//         goingToHome();
//     },2000);
// }
// function goingToHome()
// {
    //     console.log("Going to home");
    // }
    // console.log("Day started");
    // attendance(lunch);
    // setTimeout(()=>{console.log("Day completed")
    // },5000);
    
    
    
    // var attendance=(lunch)=>{ 
        //     setTimeout(()=>{    
//         console.log("Attendance taken");
//         lunch(goingToHome);
//     },2000);
// }
// var lunch=(goingToHome)=>{
//     setTimeout(()=>{
        
    //         console.log("Lunch served");
    //         goingToHome();
    //     },2000)
    // }
    // var goingToHome=()=>{
        //     setTimeout(()=>{
//         console.log("Going to home");
//     },2000)
// }
// attendance(()=>{
    //     lunch(()=>{
        //         goingToHome(()=>{
            //             console.log("Day completed")
            // })
            // })
            // });
            
//     let res=true
//     var brain=(res)=>{
//         return new Promise((success,failure)=>{
//         if(res){
//             success("Brain is working");
//         }
//         else{
//             failure("Brain is not working");
//         }
//     });

// }
// brain(res).then((success)=>{console.log(success);}).catch((failure)=>{console.error(failure);})


// var attendance=()=>{
//     return new Promise((success,failure)=>{
//         setTimeout(()=>{
//             let res=true;
//             if(res){
//                 success("Attendance taken");
//             }
//             else{
//                 failure("Attendance not taken");
//             }
//         },2000);
//     })
// }
// var lunch=()=>{
//     return new Promise((success,failure)=>{
//         setTimeout(()=>{
//             let res=true;
//             if(res){
//                 success("Lunch taken");
//             }
//             else{
//                 failure("Lunch not taken");
//             }},2000);
//         })
//     }
// var goingToHome=()=>{
//     return new Promise((success,failure)=>{
//         setTimeout(()=>{
//             let res=true;
//             if(res)
//             {
//                 success("Going to home");
//             }
//             else{
//                 failure("Not going to home");
//             }
//     },2000)
// })
// }
// attendance().then((output)=>{
//     console.log(output); 
//     return lunch()
// }).then((output)=>{
//     console.log(output); 
//     return goingToHome()
// }).then((output)=>{console.log(output); 
//     console.log("Day completed")
// }).catch((err)=>console.error(err));

// async function finalDay(){
//     try{
//     let att =await attendance();
//     console.log(att);
//     let lun =await lunch();
//     console.log(lun);
//     let go =await goingToHome();
//     console.log(go)
//     } catch(error){
//         console.log(error);
//     }
// }
// finalDay();


// var processFile=(name,callback)=>{
//     console.log(`File ${name} is processed`);
//     setTimeout(()=>{
//         console.log(`File ${name} got downloaded`);
//         callback(name);
//     },2000);
// }
// var downloadFile=(name)=>{
//     console.log(`File ${name} Download completed`);
// }
// processFile("abc",downloadFile)



var processFile=(name,callback)=>{
console.log(`File ${name} is processed`);
setTimeout(()=>{
callback(name);
},2000)
}

var downloadFile=(name)=>{
console.log(`File ${name} got downloaded`);
setTimeout(()=>{
    console.log(`File ${name} download completed`);
})
}
processFile("abc",downloadFile);
