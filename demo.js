// function area(l,b)
// {
//    var a=l*b
//     console.log("this area is:"+a) 
// }
// var length=10
// var breath=20

// area(l,b)



                 // commit-9    






// printf();
// cout()
// System.out.println()
// console.writeLine();
// print("", 1, true or false, 0.4, '')


// console.log("Welcome to javascript world");
//  console.log("I like js");

//  window.alert("This is javascipt");
//  window.prompt("this is javascript");

//   document.getElementById("myH1").textContent = "Welcome to javascript";

//  document.getElementById("myP").textContent = "i like js";


//  let firstName = "Ganesh";
//  let favNum1 = 10.7;
//  let favNum2 = 10;
//  let isStudent = true;


//  console.log(firstName);
//  console.log(favNum1);
//  console.log(favNum2);
//  console.log(isStudent);
 
 
//  console.log(typeof firstName);
//  console.log(typeof favNum1);
//  console.log(typeof favNum2);
//  console.log(typeof isStudent);






           // commit-10






//   let empCount = 31;

//           31       1 = 32
// empCount = empCount + 1;
// empCount = empCount - 1;
// empCount = empCount * 2;
// empCount = empCount / 2;
// empCount = empCount ** 2;
// empCount = empCount % 2;

//  let extraEmployee = empCount  % 3;

// agumeneted assigment operator 
// empCount += 1;
// empCount -= 1;
// empCount *= 1;
// empCount /= 1;
// empCount %= 1;
//  console.log(empCount);
//  console.log(extraEmployee);

//  let empCount = 31;

//  empCount++;
//  empCount--;

//  console.log(empCount);


//  let result = 1 + 2 * 3 + 4 ** 2;

// let result = 1 + 2 * 3 + 16;

// let result = 1 + 6 + 16;

// let result = 7 + 16;

// let result = 23;

// result = 12 % 5 + 8 / 2;
// let result = 2 + 8 / 2;
// let result = 2 + 4;
// let result = 6;

// let result = 6 / 2 ** (2 * 5);

// console.log(result);




//  let username;

//  username = window.prompt("what is your username? ");

// console.log(username);

//  let username;
//  document.getElementById("mySubmit").onclick = function() {
//        username = document.getElementById("myText").value;
//        username = document.getElementById("myH1").textContent = `Welcome ${username}`;
//       console.log(username);
//  }



//  let username = "siva";

//  console.log(`hello ${username}`);

//  let age = window.prompt("How old are you");
//  age = Number(age);
//  age += 1;
//  console.log(age);

//  console.log(age, typeof age);

//  let x = "veg rice";
//  let y = "veg rice";
//  let z = "veg rice";

// let x = "1ertyuio11";
// let y = "0";
// let z = "0";

// y=Number(y);

// let x = "";
// let y = "";
// let z = "";

// let x;
// let y;
// let z;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

//  console.log(x, typeof x);
//  console.log(y, typeof y);
//  console.log(z, typeof z);


// constPI = 3.14159;
// let radius;
// let circumference;
// radius = window.prompt(`Enter the radius of circle`);
// radius = Number(radius);
// circumference = 2 * PI * radius;

// console.log(circumference);  
        

// let add;
// let value;
// add= window.prompt("Enter the value 1 of add");
// value= window.prompt("Enter the value 2 of add");
// add=Number(add);
// value=Number(value);
// console.log(add + value);

//---------------------------commit-11---------------------------


// let x = 3.21;
// let x = 3.99;
// let x = 3;
// let y = 2;
// let z = 1;
// z = Math.round(x);
// z = Math.floor(x); // roubd down
// z = Math.ceil(x); round up
// z = Math.trunc(x);
// z = Math.pow(y, x);
// z = Math.sqrt(x);
// z = Math.abs(x);
// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);
// console.log(min);

// let isStudent = true;

// if(isStudent) {
//     console.log("You are a student");
// } else {
//      console.log("You are a not student");
// }

// let age = 19;
// let hasLicense = true;

// if(age >= 18) {
//    console.log("You are old enough to drive");

//    if(hasLicense) {
//       console.log("you have your lisence");
//    } else {
//     console.log("you do not have lisense yet");
//    }

// } else {
//      console.log("You must be 18+ to have alisense");
// }

// let age =-1;
// // false
// if(age >= 110) {
//     console.log("you are too old to vote");
//     // false
// } else if(age >= 18) {
//     console.log("you are old enough to vote");
// } else if(age < 0) {
//      console.log("your age cant be 0");
// } else {
//     console.log("you must ve 18+ to vote");
// }

// let myCheckbox = document.getElementById("myCheckbox");
// let visaBtn = document.getElementById("visaBtn");
// let mastercardBtn = document.getElementById("mastercardBtn");
// let rupayBtn = document.getElementById("rupayBtn");
// let mySubmit = document.getElementById("mySubmit");
// let subResult = document.getElementById("subResult");
// let paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function () {
//   if (myCheckbox.checked) {
//     subResult.textContent = `you are subscribed!!!`;
//   } else {
//     subResult.textContent = `you are not subscribed!!!`;
//   }
//   if (visaBtn.checked) {
//     paymentResult.textContent = 'visa payment';
//   } else if (mastercardBtn.checked) {
//     paymentResult.textContent = 'mastercard payment';
//   } else if (rupayBtn.checked) {
//     paymentResult.textContent = 'rupay payment';
//   } else {
//     paymentResult.textContent = 'select your payment method';
//   }
// };




//-------------------------------------------------commit-13-----------------------------------------------------------




// let day = 8;

// switch(day) {

//   case 1:
//        console.log("Its is monday");
//        break;
//   case 2:
//        console.log("Its is Tuesday");
//        break;
//   case 3:
//        console.log("Its is wednesday");
//        break;
//   case 4:
//        console.log("Its is Thursday");
//        break;
//   case 5:
//        console.log("Its is Friday");
//        break;
//   case 6:
//        console.log("Its is Sauturday");
//        break;
//   case 7:
//        console.log("Its is Sunday");
//        break;
//   default:
//     console.log("Incorrect Input");

// }

// let mark = 10;
// let grade;

// switch (true) {
//   case mark >= 90:
//     grade = "A";
//     break;
//   case mark >= 80:
//     grade = "B";
//     break;
//   case mark >= 70:
//     grade = "C";
//     break;
//   case mark >= 50:
//     grade = "D";
//     break;
//   default:
//     grade = "E";
// }


// console.log(grade);


//              013456789             
// let userName = "Siva Kumar";   // length = 10 index = length - 1 = 0 to 9 

// userName.charAt(0);
// console.log(userName.charAt(0));
// userName.indexOf("s");
// console.log(userName.indexOf("a"));
// console.log(userName.lastIndexOf("a"));
// console.log(userName.length);
// userName = userName.toLowerCase();
// console.log(userName);
// userName = userName.toUpperCase();
// console.log(userName);
// userName = userName.repeat(5);
// console.log(userName);



// let userName = " Siva Kumar";  

// let result = userName.startsWith(" ");

// if(result) {
//     console.log("Your username can begin with ' ' ");
// } else {
//     console.log(userName);
// }

// console.log(result);
// let userName = "Siva Kumar ";  

// let result = userName.endsWith(" ");

// if(result) {
//     console.log("Your username can ends with ' ' ");
// } else {
//     console.log(userName);
// }

// console.log(result);

// let userName = "Siva$Kumar"; 

// let result = userName.includes("$");

// if(result) {
//     console.log("Your username can include with ' ' ");
// } else {
//     console.log(userName);
// }

// console.log(result);

// let phoneNumber = "91-99940-30296";
// phoneNumber = phoneNumber.replaceAll("-", "_");
// console.log(phoneNumber);

// let phoneNumber = "91-99940-30";
// phoneNumber = phoneNumber.padStart(20, "0");
// console.log(phoneNumber);

// let phoneNumber = "91-99940-30";
// phoneNumber = phoneNumber.padEnd(20, "0");
// console.log(phoneNumber);

// const fullName = "Ganesh Kumar";

// let firstName = fullName.slice(0, 4);
// let lastName = fullName.slice(5, 10);
// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);


// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);

// email - dinesh123@gmail.com

// Enter the Email 

// submit 

// your username is dinesh123






// function getUsername() {
//     let email = document.getElementById("email").value;

//     let username = email.slice(0, email.indexOf("@"));

//     document.getElementById("result").textContent =
//         "Your username is " + username;
// }


// let a=10;
// let b=5;
// let operator="+";
// let answer;

// switch(operator){
//     case "+":
//     answer=a+b
//     break;
//     case "-":
//     answer=a-b
//     break;
//     case "*":
//     answer=a*b
//     break;
//     case "/":
//     answer=a/b
//     break;
//     default:
//     answer="invalid operator"
//     break;
// }

// console.log(answer);



//----------------------------------------------------commit-14-----------------------------------


// let username = window.prompt("Enter your username: ");

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();

// username = letter + extraChars;

// console.log(username);

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);



// const temp = 200;

// if(temp < 0) {
//    console.log("The weather is good");
// } else if(temp <= 30) {
//     console.log("The weather is good");
// } else {
//      console.log("The weather is bad");
// }
// true 
// 200  > 0    20 < 30 - true
// if(temp > 0 && temp <= 30) {
//    console.log("The weather is good");
// } else {
//      console.log("The weather is bad");
// }

//  false         false
// if(temp <= 0 || temp > 30) {
//    console.log("The weather is bad");
// } else {
//      console.log("The weather is good");
// }



// const isSunny = true;

// if(!isSunny) {
//     console.log("It is sunny");
// } else {
//     console.log("It is cloudy");
// }

//   TRUE
// const PI = "3.14";

// if(PI === "3.14") {
//    console.log("That is PI");
// } else {
//  console.log("That is NOT PI");
// }



//TRUE
// const PI = 3.14;

// if(PI === 3.14) {
//    console.log("That is PI");
// } else {
//  console.log("That is NOT PI");
// }


// FALSE
// const PI = "3.14";

// if(PI === 3.14) {
//    console.log("That is PI");
// } else {
//  console.log("That is NOT PI");
// }


// FALSE
// const PI = 3.14;

// if(PI === "3.14") {
//    console.log("That is PI");
// } else {
//  console.log("That is NOT PI");
// }

    // const PI = "3.14";
    // if(PI !== 3.14) {
    //    console.log("That is PI");
    // } else {
    //  console.log("That is NOT PI");
    // }

// let username = "siva";


// while(username === "") {
//     console.log("You dont enter your name");
// }

// console.log(`hello ${username}`);

// let i = 1;

//     //            false(false-stop) 
//     //  1st   2nd(true) 4th           
// for(let i = 1; i <= 10; i++) {
//     // 3rd - execute the code indise the curly braces 
//      console.log(i);
// }



//     //            false(false-stop) 
//     //  1st   2nd(true) 4th           
// for(let i = 10; i > 0; i--) {
//     // 3rd - execute the code indise the curly braces 
//      console.log(i + "*****");
//     //  console.log(i + "*****");
// }




//---------------------------------------commit-15------------------------------------



    //  1st   2st(true)       8th
//  for(let i = 0; i < 5;       i++) {  // outer loop
//     // 3rd step
//      console.log(`The current value is : ${i}`);
//      //     4th        5th(true)    7th
//       for(let j = 0; j < 5;        j++) {
//           // 6th step
//           console.log(`j: ${j}`);
//       }

//       console.log("---------------------------");
//  }

// 0 x 0 = 0
// 0 x 1 = 0

//  for(let i = 0; i < 10;       i++) {  // outer loop
//     // 3rd step
//      console.log(`The current value is of i : ${i}`);
//      //     4th        5th(true)    7th
//       for(let j = 0; j < 10;        j++) {
//           // 6th step
//           console.log(`${i} x ${j} = ${i * j}`);
//       }

//       console.log("---------------------------");
//  }

// const storeInventory = [
//     // 0 - i 
//     // j = 0           j = 1          j = 2
//   ["Item: Computer", "Price: 20000", "Inventory: 10"],

//   // 1
//   ["Item: IPhone17", "Price: 50000", "Inventory: 5"],

//   // 2
//   ["Item: Earphones", "Price: 5000", "Inventory: 15"]
// ];

// //     1step             2sd step           3
// for(let i = 0; i < storeInventory.length; i++) {

//     // 3rd step 
//     if(i > 0) {
//         console.log("-------------");
//     }
//     //    4th j = 0    //             0
//     for(let j = 0; j < storeInventory[i].length; j++) {
//         //                       2  2
//       console.log(storeInventory[i][j]);
//     }
 
// }



//  0 = i,  j = 0, 1, 2, 3, 4
//  1 = i,  j = 0, 1, 2, 3, 4
//
//
//
//
//
//----------------------------------------commit-16---------------------------------



// //                   parameters
// function happyBirthday(username, age) {
//   console.log("Happy Birthday to you");
//   console.log("Happy Birthday to you");
//   console.log(`Happy Birthday dear ${username}`);
//   console.log("Happy Birthday to you");
//   console.log(`you are ${age} years old`);

//    XPathResult;
// }

// //                arguments
// happyBirthday("Siva kumar", 25);
// happyBirthday("Ganesh", 26);



// function boolean add(x , y) {
//     let result = true or false;
//     return result;
// }
// function add(x , y) {
//     return x + y;
// }

// function mul(x , y) {
//     return x * y;
// }

// function isEven(number) {
//     if(number % 2 === 0) {
//          return true;
//     } else {
//         return false;
//     }

//     // return number % 2 === 0 ? true : false;
// }

// let result = isEven(6);

// console.log(result);


//odd number check

// function isodd(number) {

//      return number % 2 !== 0 ? true : false;
// }

// let result = isodd(6);

// console.log(result);

 //check prime number

// function isPrime(number) {
//     if (number < 2) {
//         return false;
//     }

//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isPrime(7));   // true
// console.log(isPrime(10));  // false
// console.log(isPrime(33));  // false


//create a function to extract the username from the email address

// function getUsername(email) {
//     return email.split("@")[0];
// }

// console.log(getUsername("jayashri@gmail.com"));




// function isValidEmail(email) {
//     if(email.includes("@")) {
//         return true;
//     } else {
//         return false;
//     }
// }

// add(20, 30) = 50

// let addAnswer = add(20, 30);
// let mulAnswer = mul(20, 30);
// let evenAnswer = isEven(11);
// let emailCheckAnswer = isValidEmail("ganesh989@gmail.com");

// console.log(addAnswer);
// console.log(mulAnswer);
// console.log(evenAnswer);
// console.log(emailCheckAnswer);

// return result

// let x = 1;
// let x = 2;
//  let x = 100;
// function func1() {
//     // let x = 3;
//     console.log(x);
// }
// function func2() {
//     // let y = 1;
//     // console.log(y);
//     // let x = 4;
//     console.log(x);
// }

// func1();
// func2();

//------------------------------------commit-17------------------------------------




//             0         1          2        
// let fruits = ["apple", "orange", "banana"];

//      i = 2                    2 > 0  4th -1
// for(let i = fruits.length - 1; i >= 0; i--) {

//     // 3rd step       2 1  0
//     console.log(fruits[i]);
// }

// fruits.sort().reverse();

// for(let fruit of fruits) {
//     console.log(fruit);
// }

// fruits.push("coconut");
// fruits.pop("coconut");
// fruits.unshift("coconut");
// fruits.shift();

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("apple");
// let index = fruits.indexOf("banana");
// console.log(numOfFruits);
// console.log(index);
// console.log(fruits);



// fruits[2] = "coconut";

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);


// let numbers = [1, 2, 3, 4, 5, 6];
// let maximum = Math.max(...numbers);
// console.log(...numbers);
// console.log(numbers);
// console.log(maximum);


// let username = "Ganesh Kumar";


// let fruits = ["apple", "orange", "banana"];
// let numOfFruits = [...fruits]


// // let letters = [...username].join("");
// console.log(numOfFruits);



// let fruits = ["apple", "orange", "banana"];
// let veggies = ["carrits", "oninon", "tomato"];



// let foods = [...fruits, ...veggies, "eggs", "milk"];

// console.log(foods);
// let fruits = ["apple", "orange", ""];

// function openKitchen(...foods) {
//     console.log(...foods);
// }

// function getFood(...foods) {
//     return foods;
// }

// const food1 = "veg rice"; 
// const food2 =  "chicken rice";
// const food3 =  "sambar rice";
// const food4 =  "dosa";
// const food5 = "idly";

// openKitchen(food1, food2, food3, food4, food5);

// const foods = getFood(food1, food2, food3, food4, food5);

// console.log(foods);


// function sum(...numbers) {
//     let result = 0;

//     for(let number of numbers) {
//         result += number;
//     }

//     return result;
// }

// const total = sum(1, 3, 4, 5, 6, 7);

// console.log(`your total is ₹${total}`);

// find the average of the number 

// function combineString(...strings) {
//     return strings.join(" ");
// }

// const fullName = combineString("Ms", "maria", "margrette", "101");

// console.log(fullName);


//------------------------------------commit-18---------------------------------------





// hello(wait);


// // 5seconds
// function hello(callback) {
//     console.log("Hello siva");
//     callback();
// }

// function leave() {
//     console.log("Leave siva");
// }

// function wait() {
//    console.log("Wait siva");
// }

// function goodBye() {
//   console.log("Good by siva");
// }


// sum(displayWebpage, 4, 2); 

// function sum(callback, x, y) {
//     let result = x + y;
//     callback(result);
// }
// //                         6
// function displayConsole(result) {
//     console.log(result);
// }

// function displayWebpage(result) {
//      document.getElementById("myH1").textContent = result;
// }


//----------------------------------commit-19--------------------------------------


// let numbers = [1, 2, 3, 4, 5, 6];


// numbers.forEach(double);
// numbers.forEach(square);
// numbers.forEach(display);

                
// function double(element, index, array) {
//    array[index] = element * 2;
// }

// function square(element, index, array) {
//     array[index] = Math.pow(element, 2)
// }

// function display(element) {
//   console.log(element);
// }

//                 0        1         2         3
// let fruits = ["apple", "orange", "banana", "pineapple"];


// function upperCase(element, index, array) {
//    array[index] = element.toUpperCase();
// }

// function capitilize(element, index, array) {
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }


// // fruits.forEach(upperCase);
// fruits.forEach(capitilize);
// fruits.forEach(display);

// function display(element) {
//   console.log(element);
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers);

// //               [1, 4, 9, 16, 25, 36]
// const squares = numbers.map(square);

// function square(element) {
//     return Math.pow(element, 2);
// }


// const students = ["siva", "ganesh", "aslam"];

// const upperResult = students.map(upperCase);

// console.log(upperResult);


// function upperCase(students) {
//     return students.toUpperCase();
// }


// console.log(squares);


// const dates = ["2016-1-10", "2025-2-20", "2026-3-30"];

// dates = "2202-4-30";
// console.log(dates.split("-"));


// const formatedDates = dates.map(formatDates);

// console.log(formatedDates);


// function formatDates(element) {
//     const parts = element.split("-");
//     return `${parts[2]}/${parts[1]}/${parts[0]}`;
    
// }

// formatDates();







// for each triple the value.

// let number=[1,2,3,4,5,6]

// number.forEach(triple);
// number.forEach(display);

// function triple(element,index,array){

//   array[index]=element+element+element;

// }

// function display(element){
//   console.log(element)
// }




// }

// square value .

// const numbers=[1,2,3,4,5,6];

// function square(element){
//   return Math.pow(element,2);
// }

// console.log(numbers.map(square));


// cubic value .

// const numbers=[1,2,3,4,5,6];

// function square(element){
//   return Math.pow(element,3);
// }

// console.log(numbers.map(square));

// uperCase to lowerCase

// const names=['NAVEEN','JAYASHRI','SHYLA','MARIYA','SIVA'];

// function uppertolower(elements){
//   return elements.toLowerCase()
// }

// console.log(names.map(uppertolower));



// first letter lower case

// const names=['NAVEEN','JAYASHRI','SHYLA','MARIYA','SIVA'];

// function firsttolower(element){
//   return element[0].toLowerCase() + element.slice(1)
// }

// let result = names.map(firsttolower);

// console.log(result);


// function displaywebpage(result){
//   document.getElementById("array").textContent=result
// }

// displaywebpage(result)






// let numbers = [1, 2, 3, 4, 5, 6, 7];

// let evenNumbers = numbers.filter(isEven);

// console.log(evenNumbers);

// function isEven(element) {
//     return element % 2 === 0;
// }


// const ages = [10, 16, 17, 18, 20, 70, 60];

// const adults = ages.filter(isAdult)

// console.log(adults);

// function isAdult(element) {
//     return element >= 18;
// }

// const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut", "pineapplle"];

// const shortWords = words.filter(getShortWords);

// console.log(shortWords);

// function getShortWords(element) {
//     return element.length <= 6;
// }


// const prices = [200, 10, 80, 1000, 400];


// const total = prices.reduce(sum);

// console.log(`the total ₹${total.toFixed(2)}`);

// //             1690        
// function sum(previous, element) {
//     return previous + element;
// }


// const grades = [75, 50, 90, 60, 65, 95];

// const maximum = grades.reduce(getMax);

// console.log(maximum);

// function getMax(accum, element) {
//     return Math.max(accum, element);
// }



// odd number


// let numbers = [1, 2, 3, 4, 5, 6, 7];

// let oddNumbers = numbers.filter(isodd);

// console.log(oddNumbers);

// function isodd(element) {
//     return element % 2 !== 0;
// }


// to find the child 

// const ages = [10, 16, 17, 18, 20, 70, 60];

// const child = ages.filter(isChild);

// console.log(child);

// function isChild(element) {
//     return element < 18;
// }

//to find the longword length


// const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut", "pineapplle"];

// const longWords = words.filter(getLongWords);

// console.log(longWords);

// function getLongWords(element) {
//     return element.length > 6;
// }



// to find the minimum value in the array

// const grades = [75, 50, 90, 60, 65, 95];

// const minimum = grades.reduce(getMin);

// console.log(minimum);

// function getMin(accum, element) {
//     return Math.min(accum, element);
// }