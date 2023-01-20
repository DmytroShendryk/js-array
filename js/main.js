let num1 = prompt("enter your number from 0 - 10"),
num2 = prompt("enter your number from 0 - 10"),
num3 = prompt("enter your number from 0 - 10"),
num4 = prompt("enter your number from 0 - 10"),
num5 = prompt("enter your number from 0 - 10"),
num6 = prompt("enter your number from 0 - 10"),
num7 = prompt("enter your number from 0 - 10"),
num8 = prompt("enter your number from 0 - 10");
let myArr = [num1, num2, num3, num4, num5, num6, num7, num8];
let secondArr = myArr.splice (2, 4);
console.log(myArr);
console.log(secondArr);