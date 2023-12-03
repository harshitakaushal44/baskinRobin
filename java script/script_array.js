// Array
// object -> object/array
//[1,2,3,4,"john" , true, [1,2,3,4]] -> array
// {key:"value", name:"john", age:21} ->object

// types of js
// 1. primitive/non-refrence/immutable = which can make their own copy (which can not be change)
// 2. refrence/non-primitive/mutable = which can not make their own copy (which can be change)

// var a = 12;
// var b = a;
// a = 97;
//  console.log(a,b); //primitive; updated value not change; immutable

// var a = { name:"rahul"};
// var b = a;
// a.name = "yash";
// console.log(a,b); //refrence; updated value can be change; mutable

// array
// [21,"hello".true,[],{},function() {}]

// CRUD
// var arr = []
// "c" = create
//  var arr = [67,45,89,9,76,45,23,12,6];

// "r" = read
//  console.log(arr);
//  console.log(arr[7]); //arrayname[index]
//  console.log(arr.at(-2)); //arrayname.at[index]

// "u"=update
// arr[2] = 45;
// console.log(arr);

// "d"=delete
// delete arr[4];
// console.log(arr);

// array mutable methods
// var arr = [34,45,23,90,87,12,56,44];
// console.log(arr);

// adding the elements in an array
// var l = arr.push(123, 234); //add elements at the last of an array
// var l = arr.unshift(101, 121); //add elements at the begnning of an array

// deleting an element from an array
// var l = arr.pop(); //delete element form last
// var l = arr.shift(); //delete element from start
// var l = arr.splice(2,2); //delete  bich k number del. krna hoto[index,no.of index can be delete]
// console.log(arr);

// iterating over the array
// 1 method
// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// 2 method
// for (var i of arr) {
//     console.log(i);
// }

// 3 method
// arr.forEach(function (element, index) {
//     console.log(element,index);
// });

// how to copy an array
// var arr = [43,90,89,76,43,87,67,19,27];
// console.log(arr);
// var copyarr = [...arr];  //spread operator
// copyarr[0] = 69;
// console.log(arr);
// console.log(copyarr);

// changing array values immutably
// var arr = [32,90,76,56,34,78,34,29];
// var newarr = [];
// console.log(arr);
// arr.forEach(function (e,i) {
//     newarr.push(e*2);
// });
// console.log("original",arr);
// console.log("new",newarr);



// changing value immutably (in original copy)
// triverse

// (...{"spread operators"})
// rest operator in functions (for dynamic function )
// variable length parameters/arguments in function
// function hobbie(name, ...h){
//     console.log(name,h);
// }
// hobbie("kashyap", "one", "two","three","four");

