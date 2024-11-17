

 var x = 98;
 function getname() {
     console.log("Namaste -javascript");  
 }
 getname();
 console.log(x);
 console.log(getname);


// examples of closusers
function x() {
    var i = 1;
    setTimeout(function () {
        console.log(i);
    },5000);
console.log("Namaste-Javascript 🙏");

}
x()

// 2nd example of the clouser behaviour

function x() {
     
    for (var i = 0; i <= 5; i++){
        setTimeout(function () {
            console.log(i);
            
        },i*1000)
    }
    console.log("namaste-javascript");
    
}
x();

function x() {
    for (let i = 1; i <= 5; i++){
        setTimeout(function () {
            console.log(i);
            
        },1000)
    }
}
x()

function x() {
    var i = prompt("Enter the timer u want to set")
    for ( i = 1; i <= 60; i++){
        function close(i) {
            setTimeout(() => {
                console.log(i);
                
            },1000)
        }
        close(i)
    }
}
x();

function outer() {
    // var a = 10;
    function inner() {
        console.log(a);
        
    }
    let a = 20;
    return inner;
}
var outerring = outer()();
console.log(outerring);


// Data encapsulation example for clousers*/

function counterincrement() {
    var count = 0;
    function counter() {
        count++;
        console.log(count);
    }
    return counter;
}
var count1 = counterincrement()
// console.log(count1);
count1();
count1();
count1();
count1();
var count2 = counterincrement();
count2();

/*Call-back-function*/

 setTimeout(function () {
     console.log("time-out");
  
 },5000);
 function x(y) {
     console.log("x");
     y();
 }
 x(function y() {
   console.log("y");
 });
/*make a method that abstract the method*/

const radius = [2, 4, 8, 9];
const area = function (radius) {
    return Math.PI * radius * radius;
}
const curcumfrience = function (radius) {
    return Math.PI * 2 * radius;
}
const diameter = function (radius){
    return 2 * radius;
}

// Now we are calculating all the method
const calculate = function (logic, radius) {
    const output = [];
    for (var i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}


console.log(calculate(area, radius));
console.log(calculate(curcumfrience,radius));

console.log(calculate);





























































































