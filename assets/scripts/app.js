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


function handleTimeout() {
    console.log("Timed out!");
}

const handleTimeout2 = () => {
    console.log("Timed out.. again!");
};

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
    console.log("More timing out...");
}, 4000);