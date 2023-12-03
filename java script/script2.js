//1. accept the number from a user
// var a=1;
// console.log(a);

//2.display three string 
// console.log("Name Is James");

//3.display float number with 2 decimal places using print()

//4.sum of two integers
// var a=2;
// var b=3;
// var c=a+b;
// console.log(c);

// accept two integers froem user and print the sum
// var a=4;
// var b=5



// accept two number from the user and print sum
// e.g =the sum of x and y is z
// var x = + prompt("enter number 1");
// var y = + prompt("enter number 2");
// var z = x + y;
// console.log(`the sum of ${x} and ${y} is ${z}`);

// write name and age from user
// var name = prompt("enter your name");
// var age = +prompt("enter your age");
// console.log(`hello ${name} , your age is ${age} years old.`);


// accept three integers from the user and check all are equal,two are equal ,no one are equal

// var x = +prompt("enter number 1");
// var y = +prompt("enter number 2");
// var z = +prompt("enter number 3");
// if (x === y && y===z && z ===x){
//     console.log("all inputs are equal");
// }
// else if (x==y || y==z || z==x){
//     console.log("two inputs are equal");
// }
// else{
//     console.log ("no input is equal")
// }

// check and compare 
// 1.accept two integers and find which is greater 
// 2. accept three integers and find which is greater and lowest
// 3. arrange three inputs in ascending order
// var x = +prompt("enter number 1");
// var y = +prompt("enter number 2");
// if (x > y){
//     console.log(`greatest number is ${x}`);
// }
// else{
//     console.log(`greatest number is ${y}`);
// }


// var x = +prompt("enter number 1");
// var y = +prompt("enter number 2");
// var x = +prompt("enter number 3");
// if(x> y && x >z){
//     console.log(`${a} is greatest`);
// }
// else if (y>x && y>z){
//     console.log(`${b} is greatest`);
// } 
// else{
//     console.log(`${c} is greatest`);
// }

// wap to print "good morning" sir/maam according to the gender given in the input
// inputs:m/M f/F
// output:good morning sir/ma'am

// var x = prompt("enter your gender");
// if(x=== "Male" || x==="male"){
//     console.log(`GOOD MORNING SIR`);
// }
// else if(x === "Female" || x==="female"){
//     console.log(`GOOD MORNING MAAM`);
// }
// else{
//     console.log(`invalid input`);
// }

// WAP to take integer and check weather the number is even or odd
// var x = +prompt("enter any number");
// if(x%2===0){
//     console.log(`number is even`)
// }
// else{
//     console.log(`number is odd`)
// }

// wap to take user name and age and check weather voting eligibility
// output: Hello JOHN, your can 2 more years
// var x = prompt("enter your name");
// var y = prompt("enter your age")

// if (y >17){
//     console.log(`hello ${x}, you are eligible to vote`);
// }
// else{
//     console.log(`hello ${x}, you are not eligible to vote for more than ${18-y}`)
// }



// WAP to check weather the given input is vowel or consonant
// var x = prompt("enter any alphabet");
// if(x=="a" || x=="e" || x=="i" || x=="o" || x=="u" ){
//     console.log(`${x} is vowel`);
// }
// else{
//     console.log(`${x} is consonant`);
// }


// WAP to find compound interest
// var p = +prompt("enter initial principal");
// var r = +prompt("enter interest rate");
// var n = +prompt("enter number of times interest applied per time period");
// var t = +prompt("enter number of time period");
// // var a = ("amount")
// if(a= [p*(1+r/n)^n*t]){
//     console.log(`compound interest of ${a}`);
// }


// WAP to check out which year is leap year
// var x = +prompt("enter any year");
// if( x % 4 == 0 || x % 400 ==0){
//     console.log(`${x} is a leap year`);
// }else{
//     console.log(`${x} is not a leap year`);
// }

// wap to print N natural numbers
// var n=23;
// for(var i=1; i<=n; i++ ){
//     console.log(i);
// }

// var i=1;
// while(i<=n){
//     console.log(i);
//     i++;
// }

// wap to print reverse loop upto n
// var n=23;
// for( var i=23; i>=1; i--){
//     console.log(i)
// }

// var i=n;
// while(i>=1){
//     console.log(i);
//     i--;
// }


// Wap to print the table of given number
// var n=3;
// for(var i=1; i<=10; i++){
//     console.log(`${n}*${i}=${n*i}`);
// }

// var n=5;
// var i=1;
// while( i<=10){
//     console.log(`${n}*${i}=${n*i}`);
//     i++;
// }

// wap to sum of n natural number
// var n=6;
// var sum =0;
// for(var i=1; i<=n; i++){
//     // sum =sum+i;
//     sum += i;
// }
// console.log(sum);


// wap to print factorial of the given number
// var n=5;
// var f=1;
// for(var i=1; i<=n; i++){
//     f *= i;
// }
// console.log(f);

// print the sum of all even and odd numbers in a range seperatly
var n = 15;
var even = 0;
var odd = 0;
for(var i=1; i<=n; i++){
    if(i%2 == 0){
        console.log(i);
        even += 0;
    }
    else{
        console.log(i);
    }
}





