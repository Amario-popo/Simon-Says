// button numbers & colors
// green = 1 #4fd327 - #37911c
// blue = 2 #165cdd - #12429c
// yellow = 4 #e9c80e - #ac930b
// red = 3  #f11c1c - #aa1515

const countValue = document.getElementById("count");
const colorPart = document.querySelectorAll(".color-part");
const container = document.querySelector(".container");
const startButton = document.querySelector("#start");
const result = document.querySelector("#result");
const wrapper = document.querySelector(".wrapper");



// random int generator for random simon says solution
// const random_Numbers = [];

// function random_int() {
// generate the number
// var random_int = Math.floor(Math.random() * 4) + 1; // Random number between 1 and 4
// push to empty array
// random_Numbers.push(random_int);
// show array in console log
// console.log(random_Numbers);
// turn counter
// document.getElementById("count").innerHTML = array_Length = random_Numbers.length;
// }

// function sequence() {
  // generate the random number
  // var random_int = Math.floor(Math.random() * 4) + 1; // Random number between 1 and 4
  // random_Numbers.push(random_int);
  // console.log(random_Numbers);
  // document.getElementById("count").innerHTML = array_Length = random_Numbers.length;


// }










//<p id="demo"></p>

// <script>
//     document.getElementById("demo").innerHTML = 5 + 6;
// </script>

// // colors
// const colors = {
//     color1: {
//         current:"#32831a",
//         new: "#4fd327",
//     },
//     color2: {
//         current:"#12429c",
//         new: "#165cdd",
//     },
//     color3: {
//         current:"#ac930b",
//         new: "#e9c80e",
//     },
//     color4: {
//         current:"#aa1515",
//         new: "#f11c1c",
//     },
// };

// let randomColors = [];
// let pathGeneratorBool = false;




















































































































































































































  
//   //Function to decide the sequence
// const pathGenerate = () => {
//   randomColors.push(generateRandomValue(colors));
//   count = randomColors.length;
//   pathGeneratorBool = true;
//   pathDecide(count);
// };
// //Function to get a random value from object
// const generateRandomValue = (obj) => {
//   let arr = Object.keys(obj);
//   return arr[Math.floor(Math.random() * arr.length)];
// };
// //Function to play the sequence
// const pathDecide = async (count) => {
//   countValue.innerText = count;
//   for (let i of randomColors) {
//     let currentColor = document.querySelector(`.${i}`);
//     await delay(500);
//     currentColor.style.backgroundColor = `${colors[i]["new"]}`;
//     await delay(600);
//     currentColor.style.backgroundColor = `${colors[i]["current"]}`;
//     await delay(600);
//   }
//   pathGeneratorBool = false;
// };
// //Delay for blink effect
// async function delay(time) {
//   return await new Promise((resolve) => {
//     setTimeout(resolve, time);
//   });
// }
// //When user click on the colors
// colorPart.forEach((element) => {
//   element.addEventListener("click", async (e) => {
//     //if user clicks the same color then next level
//     if (pathGeneratorBool) {
//       return false;
//     }
//     if (e.target.classList[0] == randomColors[clickCount]) {
//       //Color blick effect on click
//       e.target.style.backgroundColor = `${
//         colors[randomColors[clickCount]]["new"]
//       }`;
//       await delay(500);
//       e.target.style.backgroundColor = `${
//         colors[randomColors[clickCount]]["current"]
//       }`;
//       //User click
//       clickCount += 1;
//       //Next level if number of valid clicks == count
//       if (clickCount == count) {
//         clickCount = 0;
//         pathGenerate();
//       }
//     } else {
//       lose();
//     }
//   });
// });
// //Function when player executes wrong sequence
// const lose = () => {
//   result.innerHTML = `<span> Your Score: </span> ${count}`;
//   result.classList.remove("hide");
//   container.classList.remove("hide");
//   wrapper.classList.add("hide");
//   startButton.innerText = "Play Again";
//   startButton.classList.remove("hide");
// };