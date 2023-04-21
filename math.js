//Declarin the value by all the method to declar variable
a=10;
//This method is called nothing 
var b=20;
//We can also declare variable by var 
let c=30;
//By using let you can also declare a variable
const total=a+b+c;
//const is also use to declare a variable
var mult=a*b*c;

let bin = document.getElementById("one");
bin.innerHTML="This is the sum = " + total;
//This is the sum of the variable 

document.getElementsById("two").innerHTML="This is the mult = " + mult;

document.getElementsByClassName("three").innerHTML="This is division = " + total;