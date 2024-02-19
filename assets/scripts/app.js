// import { apiKey } from "./util.js";

// import apiKey from "./util.js";
// import { apiKey, abc as content } from "./util.js";
// import * as util from "./util.js";

// console.log(util.apiKey);
// console.log(content);

// const userMessage = "Hello World!!!";

// console.log(userMessage);
// console.log(userMessage);

// function createGreeting(userName, message = "Hello!") {
// console.log(userName);
// console.log(message);
//   return "Hi, I am " + userName + ". " + message;
// }

// const greeting1 = createGreeting("Max");
// console.log(greeting1);

// const greeting2 = createGreeting("Manuel", "Hello, what's up?");
// console.log(greeting2);

// export default (userName, message) => {
//  console.log("Hello");
//   return userName + message;
// };

// const user = {
//   name: "Max",
//   age: 34,
//   greet() {
//     console.log("Hello!");
//     console.log(this.age);
//   }
// };

// console.log(user.name);
// user.greet();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hi!");
//   }
// }

// const user1 = new User("Manuel", 35);
// console.log(user1);
// user1.greet();

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "Sports");

// console.log(index);

// const editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);

// const userNameData = ["Jacob", "Elordi"]
// const [firstName, lastName] = ["Jacob", "Elordi"]
// console.log("🚀 ~ lastName:", lastName)
// console.log("🚀 ~ firstName:", firstName)

// const user = {
//     name: "Jacob"
//     age: 20
// };

// const name = user.name;
// const age = user.age;


// const {name: userName, age: userAge} = {
//     name: "Jacob";
//     age: 20;
// }

// console.log(userName);
// console.log(userAge);

// const array = [1, 2, 3];
// const arrayCopy = [...array];

// const object = { a: 1, b: 2 };
// const objectCopy = { ...object };

// const user = { name: 'Иван', age: 30 };
// const updatedUser = { ...user, age: 31 };

// console.log(updatedUser); 

// const password = prompt('Your password');

// if (password = "Hello") {
//     console.log("Hello works");
// } else if (password === "hello" {
//     console.log("hello works");
// } else {
//     console.log("Access not granted!");
// }
// const hobbies = ["Sports", "Cooking"]

// for (const hobby of hobbies) {
//     console.log (hobby);
// }


// function handleTimeout() {
//     console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//     console.log("Timed out.. again!");
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//     console.log("More timing out...");
// }, 4000);

// function greeter(greetFn) {
//     greetFn();
// }

// greeter(() => console.log("Hi"));

// function init() {
//     function greet() {
//         console.log("Hi!");
//     }

//     greet();
// }

// const message = “Hello”;

// const hobbies = ["Sports", "Cooking"];
// // hobbies = [];
// hobbies.push("Working");
// console.log(hobbies);

// Function to convert 12Hrs time to 24Hrs time.
// function convertTo24HrsFormat(time) {

//     let timeArray = time.split(':');
//     let hour = Number(timeArray[0]); // Convert hour into number from string

//     if (time.endsWith('PM')) {
//         // if hour is not 12 then add 12 hour.
//         hour = hour !== 12 ? hour + 12 : hour;
//     } else {
//         // if time is AM and if hour is 12 then subtract 12 hour.
//         hour = hour === 12 ? hour - 12 : hour;
//     }
//     time = `${hour.toString().padStart(2, 0)}:${timeArray[1].slice(0, -2)}`;

//     return time;
// }

// function code(t) {
//     if (t === "") {
//         return "";
//     }
//     var length = t.length;
//     var n = 0;
//     while (n * n < length) {
//         n++;
//     }
//     while (t.length < n * n) {
//         t += '\x0B';
//     }
//     var result = "";
//     for (var col = 0; col < n; col++) {
//         for (var row = n - 1; row >= 0; row--) {
//             result += t[row * n + col];
//         }
//         if (col < n - 1) {
//             result += '\n';
//         }
//     }
//     return result;
// }
// function decode(s) {
//     if (s === "") {
//         return "";
//     }
//     var lines = s.split('\n');
//     var n = lines.length;
//     var result = "";
//     for (var col = 0; col < n; col++) {
//         for (var row = 0; row < n; row++) {
//             result += lines[row].charAt(n - col - 1);
//         }
//     }
//     result = result.replace(/\x0B/g, '');
//     return result;
// }

// function DNAStrand(dna) {
//     let result = '';
//     for (i = 0; i < dna.length; i += 1) {
//         switch (dna[i]) {
//             case 'A':
//                 result = result + 'T';
//                 break;
//             case 'T':
//                 result = result + 'A';
//                 break;
//             case 'G':
//                 result = result + 'C';
//                 break;
//             case 'C':
//                 result = result + 'G';
//                 break;
//             default:
//                 return 'Error';
//         }
//     }
//     return result;
// }


// function friend(friends){
//     let friendList = []
//     for (let i = 0; i < friends.length; i += 1) {
//         if (friends[i].length === 4) {
//             friendList.push(friends[i]);
//         }
//     }
//     return friendList;
// }


// const countSheeps = (arrayOfSheep) => arrayOfSheep.filter(Boolean).length


// const getNumbers = (numbers, target, result = [], cache = {}) => {
//   if (cache[target]) return cache[target];
//   if (!target) return result;
//   if (target < 0) return [];

//   for (let n of numbers) {
//     const check = getNumbers(numbers, target - n, [...result, n], cache);
//     cache[target - n] = check;
//     if (check.length) return check;
//   }

//   return [];
// };


// const gcd = (a,b) => b ? gcd(b,a%b) : a ;
// const replicate = length => x => Array.from( { length }, () => x ) ;

// function getNumbers(ns,target) {
//   if ( target % ns.reduce(gcd) )
//     return [];
//   else
//     return function go(nns,target) {
//       if ( target===0 )
//         return [];
//       else if ( nns.length===0 )
//         return null;
//       else {
//         for ( let [n,...ns]=nns, i=target/n|0; i>=0; i-- ) {
//           const r = go( ns, target - i * n );
//           if ( r )
//             return [ ...replicate(i)(n), ...r ];
//         }
//         return null;
//       }
//     } ( ns, target ) || [] ;
// }

// function findNb(m) {
//   var n = 0
//   while (m > 0) m -= ++n**3
//   return m ? -1 : n
// }

// or

// function findNb(m) {
//   let n = 0;
//   let sum = 0;
//   while (sum < m) {
//     n++;
//     sum += Math.pow(n, 3);
//   }
//   return sum === m ? n : -1;
// }

// function solve(game) {
//   let jump=1, swim=2, wasLastMoveJump=false;
//   function canSwim(i){
//     let count=0;
//     while(game[i] == '~'){
//       count++;
//       i++;
//       if(count>swim)return {res: false};
//     }
//     if(count==0)return {res: false};
//     if(game[i]=='#')return {res: false};
//     return {res: true, i};
//   }
//   function canJump(i){
//     if(wasLastMoveJump)return {res: false};
//     if(i+jump>=game.length || ['#','p'].includes(game[i+jump]))return {res: false};
//     let isP = false;
//     for(let j=i+1; j<=i+jump; j++){
//       if(!isP)isP=game[j]=='p';
//       else{
//         if(['#','~'].includes(game[j]))return {res: true, isGameOver: true, status: false}
//       }
//     }
//     return {res: true, isGameOver: isP, status: isP};
//   }
//   let i=1;
//   while(i<game.length){
//     const l = game[i];
//     if(l=='p')return true;
//     if(l=='.'){
//       i++;
//       wasLastMoveJump=false;
//       continue;
//     }
//     if(['o','j'].includes(l)){
//       l=='o' ? swim++ : jump++;
//       i++;
//       wasLastMoveJump=false;
//       continue;
//     }
//     const currentSwim = canSwim(i);
//     if(currentSwim.res){
//       i=currentSwim.i;
//       wasLastMoveJump=false;
//       continue;
//     }
//     const currentJump = canJump(i);
//     if(currentJump.res){
//       if(currentJump.isGameOver)return currentJump.status;
//       wasLastMoveJump=true;
//       i+=jump;
//       continue;
//     }
//     return false
//   }
//   return true;
// }

// function getOptionsCount(target, arr) {
//   const memo = {};

//   function countWays(target) {
//     if (memo[target] !== undefined) {
//       return memo[target];
//     }

//     if (target === "") {
//       return 1;
//     }

//     let count = 0;

//     for (const word of arr) {
//       if (target.startsWith(word)) {
//         const remaining = target.slice(word.length);
//         count += countWays(remaining);
//       }
//     }

//     memo[target] = count;
//     return count;
//   }

//   return countWays(target);
// }

// // Sample usage:
// const result = getOptionsCount("example", ["exa", "exam", "ple"]);
// console.log(result); // Output: 1
