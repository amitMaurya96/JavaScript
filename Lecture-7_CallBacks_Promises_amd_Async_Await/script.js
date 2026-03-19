/*
                    Syns                   |      Async
-------------------------------------------|-------------------------------------------------------------------------------------
1.Each instruction waits for previous      | 1. Some important instructions may get blocked in sync, causes delay in UI
instruction to complete its execution      |    It allows to execute next instructions immediately and doesn't block the flow.




CallBack :- A function which is passed as reference/argument to another function.

CallBack Hell:- Nested callbacks stacked below one another forming pyramid structure, difficult to understand and manage.
  
Promises : Object, solution to callback hell, for eventual completion(either complete or get rejected) of task
           3 states - pending, fullfilled, rejected
           Resolve and Reject are callbacks made by js itself

Handling the promise we get:-
    1. If resolved : promiseName.then(function With Argument ResolveMessage we passed);
    2. If rejected : promiseName.catch(function With Argument ErrorMessage we passed );



Async- Await:-
    Async function returns a promise
    Syntax:

        async function funName(){
            // await Code/another Predefinde_funName_with_PromiseReturn(param1)
            // await Code/another Predefinde_funName_with_PromiseReturn(param2)
        };

        funName();  // call async function


    Await pauses the execution of its surrounding async functions until promise is settled.


IIFE(Immediately Invoked Function Expression):-
    It Invokes the function as soon as it write (async function with No_Name)
    Since we need to to call async function so we use 2 () to immediately invoke it.
    Syntax:-
        (async function (){
            // await Code/another Predefinde_funName_with_PromiseReturn(param1)
            // await Code/another Predefinde_funName_with_PromiseReturn(param2)
        })();

*/









// console.log("Line 1");
// console.log("Line 2");
// setTimeout(()=>{
//     console.log("Line 3 after 2000mS or 2 seconds");
    
// },2000);    // Async code 
// console.log("Line 4");
// console.log("Line 5");


// // Callbacks
// function sum(a,b){
//     return(a+b);
// }

// function calc (a,b, sumCallBack){  
//     setTimeout(()=>{
//         let Sum =sumCallBack(a,b);
//         console.log(`Sum for ${a} and ${b} is ${Sum}`); 
//     }, 2000);  
// }

// // calc(2,5,sum);
// // calc(2,3, sum(3,4));  // Error


// // let we want to hav e more and more data after 2 seconds conjucatively
// function calc1(a,b, calcCallBack){
//     console.log(`Sum for ${a} and ${b} is ${a+b}`); 
//     if(calcCallBack){
//         setTimeout(()=>{
//             calcCallBack();
//         },2000);
//     }
// }

// // CallBack hell example
// calc1(2,4, ()=>{
//     calc1(3,6, ()=>{
//         calc1(4,80);
//     });
// });


// Promises : To reduce the problem of callBack Hell
// let num = false;
// let promise = new Promise((resolve, reject) => {
//     if(num){
//         resolve("Msg you want to show on fulfil the promise ");
//     }else{
//         reject("For some error in completion");
//     }
// });


// Example

// function multiply(a,b, getNextMultiply){
//     return new Promise((resolve, reject)=>{
//         if(getNextMultiply){
//             setTimeout(()=>{
//                 console.log(`Product of ${a} and ${b} is : ${a*b}`);
//                 getNextMultiply();
//             },1000);
//             reject("Not Completed Yet");
//         }else{
//             console.log(`Product of ${a} and ${b} is : ${a*b}`);
//             console.log("Issue Resolve: Function Completed");
//             resolve("Issue Resolve: Function Completed");
//         }
//     });
// }

// let ans = multiply(2,10,()=>{
//     let ans2 = multiply(3,10);
//     console.log(ans2);
//     ans2.then((res)=>{
//         console.log(`Promise resolved with result ${res}`);
//     });
// });

// ans.then((resolveMsg) =>{
//     console.log(`Promise resolved with result ${resolveMsg}`);
// }).catch((errorMsg)=>{
//     console.log(`Promise yet rejected with the error ${errorMsg}`);
// });

// multiply(1,2, ()=>{
//     multiply(2,3,()=>{
//         multiply(3,4);
//     });
// });


// // Promise chaining
// function multiply1(a,b){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(`product of ${a} and ${b} is ${a*b}`);
//             resolve("Promise is resolved");
//         },2000);
//     })
// }

// let final = 
//     multiply1(2,30)
//         .then((res)=>{
//             return multiply1(3,4);
//         })
//         .then((res)=>{
//             return multiply1(5,10);
//         })
//         .then((res)=>{
//             console.log(res);
//         });



// Async- Await
function average(a,b){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(a === undefined || b === undefined) {
                reject("**Data a or b is missing");
            }else{
                console.log(`The average of ${a} and ${b} is: ${(a+b)/2}`);
                resolve('***Promise resolved');
            }
        },4000);
    });
};


async function getAverage() {
    await average(1,)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
            
        });
    await average(2,3)
        .then((res)=>{
            console.log(res);
        });
    await average(2,4)
        .then((res)=>{
            console.log(res);
        });
    await average(4,6)
        .then((res)=>{
            console.log(res);
        });
}

// getAverage();



//IIFE - 

(async function () {
    await average(1,)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
            
        });
    await average(2,3)
        .then((res)=>{
            console.log(res);
        });
    await average(2,4)
        .then((res)=>{
            console.log(res);
        });
    await average(4,6)
        .then((res)=>{
            console.log(res);
        });
}
)();





