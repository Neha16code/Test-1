 // console.log("Hello world!")
// console.log("Neha singh")
// let a=5;
// let b=10;
// console.log(`Your pay ${a+b}rupees`);
// let color ="red";
// // traffic light system
// if(color === "red"){
// console.log("Stop! light color is red");
// }
// if(color === "yellow"){
//     console.log("Slow down. Light color is yellow");
// }
// if(color === green){
//     console.log("Go. Light color is green")
// }
    
// let marks = 85;
// if(marks >= 80){
//     console.log("A+");
// }
// else if(marks >= 60){
//     console.log("A");
// }
// else if(marks >=33){
//     console.log("B");
// }
// else if(marks <33){
//     console.log("F")
// }
// let size = "XL";
// if(size === "XL"){
//     console.log("price is Rs. 250")
// }
// else if(size === "L"){
//     console.log("price is Rs. 200")
// }
// else if(size === "M"){
//     console.log("price is Rs. 100")
// }
// else{
//     console.log("price is Rs. 50")
// }

// let str = "ample";
// if(str[0]==="a"&& str.length>3){
//     console.log("Good string");
// }
// else{
//     console.log("not a good string")
// }

// let day = 8;
// switch(day){
// case 1:
//     console.log("Monday");
//     break;
//     case 2:
//     console.log("Tuesday");
//     break;
//     case 3:
//     console.log("wednesday");
//     break;
//     case 4:
//     console.log("Thursday");
//     break;
//     case 5:
//     console.log("Friday");
//     break;
//     case 6:
//     console.log("Saturday");
//     break;
//     case 7:
//     console.log("Sunday");
//     break;
//     default:
//         console.log("Invalid")
// }

// alert("This is a simple alert");
// console.log("This is simple log");
// console.error("THis is an error msg")
// console.warn("This is warning");
// prompt("Entwr first name");
// let firstName = prompt("Enter first name");
// let lastName = prompt("Enter last name");
// console.log("welocme",firstName,lastName,"!");

// let num = 23;
// if (num % 10 == 0){
//     console.log("good")
// }
//     else{
//         console.log("bad")
//     }
    

// let uname = prompt("Enter your user name");
// let age = prompt("Enter your age");
// let msg = `${uname} is ${age} yers old`;
// alert(msg); 

// let quarte = 1;
// switch(quarte){
//     case 1:
//         console.log("january, february ,march");
//         break;
//         case 2:
//             comsole.log("april, may , june");
//             break;
//             case 3:
//                 console.log("july, august, september");
//                 break;
//                 case 4:
//                     console.log("october,november,december");
//                     default:
//                         console.log("invalid");
// }

// let str = "apples";
// if ((str[0]=='a' || str[0]=='A') && (str.length>5)){
//     console.log("Golden String");

// }
// else{
//     console.log("Not golden string");
// }
// let a = 5;
// let b = 15;
// let c = 11;
// if(a > b){
//     if(a>c){
//         console.log(a ,"is larger");
//     }
//     else{
//         console.log(c,"is larger");
//     }
// }
// else{
//     if(b>c){
//         console.log(b,"is largest");
//     }
//     else{
//         console.log(c,"is largest");
//     }
// }

// let num1 = 32321;
// let num2 = 698517;
// if((num1%10)== (num2%10)){
//     console.log("number have the same last digit which is ",num1%10);
// }
// else{
//     console.log("numbers don't have the same dighit");

// }
// let operator = prompt('Enter operator (  +, -, * or / ): ');


// let number1 =parseFloat( prompt('Enter first number: '));
// let number2 = parseFloat(prompt('Enter second number: '));

// let result;


// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }


// console.log(`${number1}  ${operator} ${number2} = ${result}`);

// let arr = [7,9,0,-2];
// let n = 3;
// let ans = arr.slice(0,n);
// console.log(ans);
// let arry = [7,9,0,-2];
// let num = 3;
// let answ = arry.slice(arry.lenght-num);
// console.log(answ);

// let strii = prompt("please enter a string");
// if (strii.lenght ==0){
//     console.log("String is empty");

// }
// else{
//     console.log("Strinh is not empty");
// }

// let strr = "ApNACoLlEgE";
// let idx = 3;
// if(str[idx]==str[idx].toLowerCase()){
//     console.log("Character is lower case");

// }
// else{
//     console.log("Character is not lower case");
// }

// let strrr = prompt("please enter a string");
// console.log(`original string = ${strrr}`);
// console.log(`String withoit apaces ${strrr.trim()}`);

// let arrr = ["hello",'a',23,64,99,-6];
// let item = 64;
// if (arrr.indexOf(item) != -1){
//     console.log("Element exists in array");
// }
// else{
//     console.log("Element doesn't exist in array");
// }
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");

// let ni;
// for (let ni = 1;
//     ni<=5; ni++
//  )
//  {
//     console.log(ni);
//  }
//  for (let i = 1;i<=15; i=i+2){
//     console.log(i);
//  }
//  for(i = 2; i<=50; i=i+2){
//     console.log(i);
//  }
//  for (let i = 5; i<=50;i=i+5)
// {
//     console.log(i);
// }

// console.log("print tables")
// let aa = prompt("Write your number"); 
// aa = parseInt(aa);
// for(let i=aa;i<=aa*10;i=i+aa){
//     console.log(i);
// }

// //favorite movie
// let favorite ="Avatar";
// let guess = prompt("Enter your favorite movie");
// while((guess != favorite) && (guess != "quit")){
//     guess = prompt("Wrong guess. please try again");
// }
// if(guess==favorite){
//     console.log("congrats!!");
// }
// else{
//     console.log("Quit");
// }

// let fruits = ["apple","mango","banana","litchi","orange"];
// for(let i = fruits.lenght-1;i>=0;i--){
//     console.log(i,fruits[i]);
// }


// let todo = [];
// let req = prompt("please enter your request");
// console.log(req);

// while(true){
//     if(req == "quit"){
//         console.log("quitting app");
//         break;
//     }
//     if(req == "list"){
//         console.log("----------------");
//         for (let i = 0; i<todo.length;i++){
//             console.log(i,todo[i]);
//         }
//         console.log("-------------");
//     }
//     else if (req == "add"){
//         let task = prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");

//     }
//     else if(req == "delete"){
//         let idx = prompt("please enter the task index");
//         todo.splice(idx,1);
//         console.log(" task delete");
//     }
//     else{
//         console.log("wrong request");
//     }
//     req = prompt("please enter your request");


//     // else if(req == )
// }

// 
// const max= prompt("Enter a maxium number");
// const random = Math.floor(Math.random()*max)+1;

// let guess = prompt("guess the number");

// while(true){
//     if (guess == "quit"){
//         console.log("user quit");
//         break;
//     }
//     if(guess == random){
//         console.log("You are right! congrats!! random number was",random);
//         break;

//     }
//     else if(guess < random){
//         guess = prompt("your guess was too small. please try again");
//     }
//     else{
//         guess = prompt("your guess was too large. please try again");
//     }
// }

// function rollDice(){
//     let rand = Math.floor(Math.random() *6)+1;
//     console.log(rand);
// }
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// function printName(name, age){
//     console.log(`${name}'s age is ${age}. `);
// }
// printName("Neha",20);
// printName("Rimjhim",19);

// function sum(a,b){
//     console.log(a+b);
// }
// sum(1,2);
// sum(55,55);
// sum(60,40);

// function average(a,b,c){
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }
// average(3,3,3);
// average(5,5,5);
// average(10,10,10);

// function printTable(n){
//     for(let i=n; i<=n*10; i+=n){
//         console.log(i);
//     }
// }
// printTable(12);


// function print1ton(n){
//     let sum = 0;

//     for (let i=1; i<=n;i++){
//         sum += i;
//     }
//     return sum;
// }

// print1ton(5);

// let str = ["hi","hello","bye","!"];

// function concat(str){
//     let result;

//     for (let i = 0; i<str.length; i++){
//         result +=str[i];
//     }

//     return result;
// }
// concat();

// console.log("Hello");

// console.log("Part A")

// console.log("Question 1")
// console.log("Hello Worls!!");

// console.log("Question 2")
// let a = 5;
// let b = 10;
// console.log(`Sum is ${a+b}`);

// console.log("Question 3");
// let n = 111;
// if (n%2==0){
//     console.log(`${n} is Even number`);
// }
// else{
//     console.log(`${n} id Odd number`);
// }

// console.log("Question 4");
// let x = 15;
// let y = 19;
// if(x>y){
//     console.log(`${x} is largest number`);
// }
// else{
//     console.log(`${y} is largest number`);
// }

// console.log("Question 5");
// let z = 5;
// console.log(`${z} is ${z**2}`);

// console.log("part B");

// console.log("Question 6");
// let num1 = 10;
// let num2 = 15;
// let temp = 0;
// console.log("Before Swapping");
// console.log(`num1 is ${num1}`);
// console.log(`num2 is ${num2}`);

// console.log("After Swapping");
// // tem = num1;
// temp = num1;
// num1  = num2;
// num2 = temp;

// console.log(`num1 is ${num1}`);
// console.log(`num2 is ${num2}`);




// let nums = [2,3,4,5,3,4,7,8,1];
// let result = nums.reduce((max,el)=>{
//     if (max<el) {
//         return el;
//     }
//     else{
//         return max;
//     }

//     console.log(max);
// });

// // console.log(max);

// let arr = [1,2,3,5,8,9,11,10,55];
// console.log(Math.max(...arr));


// let arr = [1,2,3,5,8,9,11,10,55];
 

// let data ={
//     email : "rimjhimsingh@gmail.com",
//     passsword : "1234",
// };

// let dataCopy = {...data};

// let names = ["rimjhim","rani","raja","golu"];
// let [winner,runnerup,secondRunnerup]=names;

// let a =5;
// let b = 5;
// console.log(`sum is {a+b}`);

// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// for (let i=0;i<arr.length;i++){
//     if(arr[i]== num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// let numbers = 287152;
// let count = 0;
// let copy = numbers;
// while(copy >0){
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(numbers);
// console.log(count);

// let number = 123456789;
// let sum = 0;
// let copyy = number;
// while(copyy >0){
//     digit = copyy %10;
//     sum+= digit;
//     copyy = Math.floor(copyy/10);
// }
// console.log(sum);

// let n = 5;
// let factorial = 1;

// for(let i = 1;i<=n;i++){
//     factorial *= i;
// }
// console.log(`Factorial of ${n} is ${factorial}`);

// let arrr = [2,5,10,4,2,7,1,9];
// let largest = 0;
// for (let i=0;i<arrr.length;i++){
//     if(largest<arrr[i]){
//         largest = arrr[i];
//     }
// }
// console.log(largest);

// let dice = Math.floor(Math.random() *6) +1;
// console.log(dice);

// const car = {
//     name : "Maruti Suzuki",
//     model: "Maruti Suzuki Dzire",
//     color: "white",
// };
// console.log(car.name);
// console.log(car.model);

// const person ={
//     name :"jane Doe",
//     age : 21,
//     city: "New jersey",
// };
// person.city ="New York";
// person.country = "United States";
// console.log(person);

// let arry = [8,9,10,1,2,3,4,5,6,7];
// let numm = 5;
// function getElements(arr,num){
//     for (let i=0; i<arry.length;i++){
//         if(arry[i]>num){
//             console.log(arry[i]);
//         }
//     }
// }
// getElements(arry,numm);

// for(let i =0; i<str.length; i++){
//     let currChar = str[i];
//     if(async.indexof(currChar)== -1){

//         ans += currChar;
//     }
// }

// return ans;

// getUnique(str);


// let start = 100;
// let end = 200;
// function generateRandom(start,end){
//     let diff = end - start;
//     return Math.floor(Math.random() *diff) + start;

// }

// let str = "apnacollege";

// function countVowels(str){
//     let count = 0;
//     for(let i =0; i<str.length; i++){
//         if(
//             str.charAt(i) == "a" ||
//             str.charAt(i) == "e" ||
//             str.charAt(i) == "i" ||
//             str.charAt(i) == "o" ||
//             str.charAt(i) == "u" 

//         ){
//             count++;
//         }
//     }
//     return count;   
// }


// let para1 = document.createElement("p");
// para1.innerText = "Hey I'm red!!";
// document.querySelector("body").append(para1);

// para1.classList.add("red");

// let h3 = document.createElement("h3");
// h3.innerText = "Hey I'm Blue h3!!";
// document.querySelector("body").append(h3);

// h3.classList.add("blue");

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");

// h1.innerText = "I'm in a div";
// para2.innerText = "Me Too";

// div.append(h1);
// div.append(para2);

//  div.classList.add("box");

//  document.querySelector("body").append(div);

//  let btn = document.createElement("btn");
//  let input = document.createElement("input");
//  btn.innerText = "Click me";

//  document.querySelector("body").append(input);
// document.querySelector("body").append (btn);



// let p = document.createElement("p") ;
// p.innerHTML = "Apna College <b>Delta</b> Practice";
// document.querySelector("body").append(p);


// let h2 = document.createElement("h2");
// h2.innerHTML = "<u>DOM Practice</u>";
// document.querySelector("body").append(h2);
// // document.querySelector("body").append(uline);
// h2.classList.add("uline");


// let btnnn = document.querySelector("button");
// console.dir(btnnn);

// btnnn.onclick = function(){
//     alert("Button was clicked");
// };

// function sayHello(){
//     alert("helo");
// }

// btnnn,onclick = sayHello;


// let btn = document.querySelector("button");


// btn.addEventListener("click",function() {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;


//     console.log("Color updated!!");
// });

// function getRandomColor(){
//     let red = Math.floor(Math.random ()*256);
//     let green = Math.floor(Math.random ()*256);
//     let blue = Math.floor(Math.random ()*256);


//     let color = `rgb(${red},${green},${blue})`;
//     return color;

// }


// let p = document.querySelector("p");
// p.addEventListener("click",function(){
//     console.log("Your paragh was clicked!!");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse entered the box");
// });

// let button = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let h2= document.querySelector("h2");

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// button.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h2.addEventListener("click",changeColor);


// let form = document.querySelector("form");

// form.addEventListener("submit",function(event ){
//     event.preventDefault();
//     alert("Form submoitted");
// });

// let inp = document.querySelector("#text");
// let p = document.querySelector("p");

// inp.addEventListener("input",function(){
//     console.log(inp.value);

//     p.innerText = inp.value;
// });

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click",function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(li of lis){
//     li.addEventListener("click",function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }

// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click",function(){
//     let item = document.createElement("li");
//     item.innerText = inp.value;


//     let delBtn = document.createElement("button");
//     delBtn.innerText = "delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     inp.value = "";
// });



// ul.addEventListener("click",function(event){
//     if(event.target.nodeName == "BUTTON"){
//         let listItem = event.target.parentElement;
//         listItem.remove();
//         console.log("delete");
//     }
// });


// let gameSeq=[];
// let userSeq=[];



// let btns = ["yellow","red","green","purple"];

// let started = false;
// let level = 0;

// let h2 = document.querySelector("h2");

// document.addEventListener("keypress",function(){

//     if(started == false){
//         console.log("game is started");
//         started = true;



//         levelUp();
//     }
    
// });

// function gameFlash(btn){
 
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
//     },250);
// }

// function userFlash(btn){
 
//     btn.classList.add("userflash");
//     setTimeout(function (){
//         btn.classList.remove("userflash");
//     },250);
// }


// function levelUp() {
//     userSeq = [];
//      level++;
//      h2.innerText = `Level ${level}`;

// let randomIdx = Math.floor(Math.random()* 3);
// let randomColor = btns[randomIdx];
// let randombtn = document.querySelector(`.${randomColor}`);
// // console.log(randomIdx);
// // console.log(randomColor);
// // console.log(randombtn);
// gameSeq.push(randomColor);
// //console.log(gameSeq);
// gameFlash(randombtn);

// } 
// function checkAns(idx){
//     // console.log("curr level :",level);

//     if(userSeq[idx] === gameSeq[idx]){
//        if(userSeq.length == gameSeq.length){
//         setTimeout(levelUp,1000);
//        }

//     }
//     else{
//         h2.innerHTML = `Game over! Your score was <b>${level} </b> <br>
//          press any to start.`;
//          document.querySelector("body").style.backgroundColor = "red";
//          setTimeout(function(){
//             document.querySelector("body").style.backgroundColor = "white";
//          },150);
//         reset();
//     }
// }

// function btnPress (){
//     console.log(this); 
//         let btn = this;
//     userFlash(btn);
 
//     userColor = btn.getAttribute("id");
//     userSeq.push(userColor);

//     checkAns(userSeq.length - 1); 
    
// }
// let allBtns = document.querySelectorAll(".btn");
// for(btn of allBtns){
//     btn.addEventListener("click",btnPress);
// }

// function reset(){
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
// }

// let h2 = document.querySelector("h2");

// function changeColor(color,delay){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             h2.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed!");
//         },delay);
//     });
// }

// async function demo() {
//     await changeColor("red",1000);
//     await changeColor("orangr",1000);
//     await changeColor("green",1000);
//     changeColor("blue",1000);
// }


// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=> {
//     console.log(res);
// })
// .catch((error) => {
//     console.log("ERRoR -",error);
// });





const form = document.getElementById('studentForm');
const list = document.getElementById('studentList');

const API_URL = '/api/students'; 


async function loadStudents() {
  const res = await fetch(API_URL);
  const students = await res.json();
  list.innerHTML = '';
  students.forEach(s => {
    const li = document.createElement('li');
    li.textContent = `${s.id} - ${s.name} (CGPA: ${s.cgpa})`;
    list.appendChild(li);
  });
}


form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('id').value;
  const name = document.getElementById('name').value;
  const cgpa = document.getElementById('cgpa').value;

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, name, cgpa })
  });

  form.reset();
  loadStudents();
});


loadStudents();






