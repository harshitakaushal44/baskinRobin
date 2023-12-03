//output method

console.log("hello everyone")
// () called paranthesis
// text written under inverted commas "" in output
// keywords=predefined words in js and words= which can written by user
//  = assignmental operator

// datatypes:
// number, string, boolean, null, undefined
// object(object and arrays)-not in use mostly

//1= number
// var a=2;
// console.log(a);
// console.log(typeof a);

// // 2=string
// var a="hello";
// console.log(a);
// console.log(typeof a);

// // 3=boolean
// var a=false;
// console.log(a);
// console.log(typeof a);

// // 4=null
//  var a = null;
//  console.log(a);
// console.log(typeof a);

// 5=undefined (not created)
//  var a;   //declaration 
// console.log(a);
// console.log(typeof a);
//  a=12; //initialization
//  var=12 (dec+ini)
// console.log(a);

// case sensitive 97 != 65
// ASCII code=(a-97) (A-65)
// hello != Hello


// operators
// arithmatical/binary operators   + - / *  % (modulos) **(power)
//  console.log(45/9); modulo division
//  console.log(2%5);
//  console.log(5 ** 3); power
//  var a=45;
//  var b=16;
//  var c=a+b;
//  console.log(c);

// 1. Arithmetic:-
//shorthand += -= /= *= %= **=

// var a=12;
// var b=12;
// // a = a+b;
// a += b //{shorthand operators}  (a=a+b)
// console.log(a);



// incremental/decremental ++ --(post/pre)  ;urinary operator

// var a=12;
// var b=12;
// var c= a++ + ++b;
// console.log(c);
// console.log(a);
// console.log(b);

// 2.conditional/comparisiom operator (boolean) 
//  < > == !=
// >= <= === !=
//console.log(2=="2");    check only operation
//console.log(2 === 2);  check operation and type also
// var a=11;
// var b=12;
// var c = a == b--;      //(c=a == b++) -false a=11 b=13
// console.log(c);
// console.log(a,b);

// 3.logical operators   &&(and) ||(or) !(not)
// falsy values- 0, ''/"", null ,undefined,false
// let a=12;
// let b=34;
// let c=a > 20;
// let d=b > 20;
// console.log(c || d);
//console.log(1 && 2 && 0 && 5);   and stops on false value
// console.log(!true);
// console.log(1 || 0|| 3 || 4);   or stops on true value 
// console.log("john">"johnq");
// console.log("john">"Harry");
// console.log("john"&& "harry")
// console.log("john"|| "harry")
// console.log(0)

// "conditional expression" writtens in 1 line and "conditional statements" written in multiple line and each line is imp
// conditional statements  if, else if, else
// a=12;
// // simple if
// if (a>0){
//     console.log("positive");

// }


// a=0;
// if (a>0){
//     console.log("positive");

// }
// else{
//     console.log("negative");
// }


// ladder / multiple if else
// a=-12;
// if(a>0){
//     console.log("positive");
// }
// else if(a<0){
//     console.log("negative");
// }else{
//     console.log("zero")
// }

// nested if else
// var a= -17;
// if (a > 0) {
//     console.log("positive");
// if ( a%2 === 0) {
//     console.log("even");
// }else {
//     console.log("odd");
// }
// } 
// else if (a < 0){
//     console.log("negative");

// if (a% 2 ===0){
//     console.log("even");
// } else{
//     console.log("odd");
// }
// }

// else{
//     console.log("zero");
// }







// nested convert to ladder/multiple if else
// a=12;
// if(a > 0 && a % 2 === 0) {
//     console.log("positive even");
// }else if (a > 0 && a % 2 !== 0){
//     console.log("positive odd");
// }
// else if(a<0 && a % 2 === 0){
//     console.log("negative even");
// }else if (a<0 && a % 2 !==0){
//     console.log("negative odd")
// }
// else{
//     console.log("zero")
// }



// iterative statements/loops
// static loops (hello..hello)
// dynamic loops(1,2,3,4...)

// loop variable -1
// updation expression - 1+1..+2..
// test//condition expression - 10-xxxx
// body of loop

// types of loop
// entry control - for ,while
// exit control - do while

// entry control-for while
//  var i=1;
// while (i < 11){
//     console.log(i);
//     i++;
// }

// exit control - do while
// var i=1;
// do{
//     console.log(i);
//     i++;
// }
// while(i<11);

// for (for iteration count known)
// for(loop variable ;condition exp; updation exp){
//     body of loop
// }

//  for(var i=1 ; i<11 ;i++){
//     console.log(i);
//  }

//  loop variable
// while(condition exp){      (for not known iteration count)
    // body of loop
    // updation exp;
    // }

    // var i=1;
    // while(i>11){
    //     console.log(i);
    //     i++;
    // }


// loop variable;
// do{
//     body of loop
//     updation exp

// }while (condition exp);

//  var i=1;
// do{
//     console.log(i);
//     i++;
// }while (i<11);

// functions 
// function functioname (parameters..){
//     function body
//     return/console,log(object);
// }

// function mysum(a,b){
//     return a+b;
// }
// var x=mysum(12, 35);  //arguments

// non paramaterized function
// concatination;means add two strings
// {scope}
// paramaterized function


// var x = prompt("enter your name")
// var y = +prompt("enter your age")
// if(y>18){
//     console.log(`helo ${x} you are eligible to vote`);
// }
// else{
//     console.log(`helo ${x} you are not eligible to vote`);
// }


// primitive/non refrence/immutable=which can make their own copy
// (which can not changeable)
// ex= var a = 12;
// var b= a;
// a = 23;
// console.log(a,b);

// references/non-primitive/mmutable=which can not make their own copy
// (which can changeable) 
// var a=[1 ,17, 30 , 45, 20]

// ARRAY 
// CRUD
// (create,repeat,update,delete)
// var arr = []


// function add(a,b){
//     console.log(a+b);
// }


// function sub(a,b){
//     console.log(a-b);
// }
 
// function mul(a,b){
//     console.log(a*b);
// }

// function div(a,b){
//     console.log(a/b);
// }
//  div(4,2);
//  in js function is used as a variable
// first class function

// var arr = [0];
// for (var a = 1; a <= 10; a++){
//     arr.push(a);
// }
// console.log(arr);




// object (triversing)
// var obj = {
//     name: "Anubhav",
//     email: "ANubhav@gmail.com",
//     age: 20,
//     address: "bhopal",
// } //(forin tag)
// for (var key in obj) {
//       console.log(key, obj[key]);
        
//     }

// array destructuring
// var arr = [23, 45, 30, 78, 35, 20];
// var [a, b, c,, d ] = arr;
// console.log(a,b,c,d);

// object destructuring
// var obj = {
//     username : "john",
//     email : "john@doe.com",
// }
// var {username, email, age} = obj;
// console.log(username, email, age);


// SYNCHRONOUS and ASYNCHRONOUS behaviour of JS
// synchronous means continue chlna code k line by line read krna

// sync/async
// async = DOM /setimeout /setimeinterval
// setTimeout(() => {
//     console.log("hello...");
// }, 2000); //time taken in milisecond 2*1000=2000

// var counter = 0;
// var c =setInterval(() => {
//     console.log(counter);
//     counter++;
//     if(counter > 5){
//         clearInterval(c);
//         console.log("stopped...");
//     }
// },1000);

// Js bydefault synchronous
// ASYNCHRONOUS feature of JS is handled by browser(web API) 
// with the help of event loop asynchronous data is transfered in JS from  web API

// handling error in synchronous code of Js
// agr pehle hi code m error hoto code agey run ni hota h is chij se bachne k liye hm trycatch function k use krte h jisse jis line code m error lage vo usme dalde or agey k code bhi chl skta h isse error k bd bhi
// exception handling = handle exception of sync code
// try {
//     var a = 12;
//     var b = 35;
//     var c = a + b;
//     if ( c % 2 !== 0){
//         throw TypeError ("odd values not allowed");
//     }
//     console.log(c);
//     console.log("hellooo...");
// } catch (error) {
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
   
// }
// console.log("hello world")

// AJAX (asynchronous javascript and XML/JSON)   JSON=array of object[{},{},{}]
// bridge/connection b/w bckend and frontend
// data from bckend =API (aplication programming interface ) is given by bckend (deta hai) 
// AJAX by frontend


// promise
// for handling error in asynchronous code
// creation of promise  (then,then,catch)
// use of promise

// Async await (convert asyc code into sync code)
// async function getuser(){
//  try{
//     var res = await fetch(""); //add link from json.com
//     var resp = await res.json(); //to convert code into json (await mns jb tk y line code n chale tb tk agey n bde code) json site>userplaceholder
//     console.log(resp);
//     console.log ("hello");
//  }catch (error){
//     console.log(error);
//  }
// } 
// getuser();

// let/var/const
// var  global scopic variable 
// function {} lexical scopic
// let ,const local scopic variable(mostly used)
// const assign one time 