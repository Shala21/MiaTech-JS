
// Exercise 1 -->
let name = "Altin"
const person = "Shala"

    console.log(name);
    console.log(person);

//Exercise 2 -->
let num = 5;
console.log(num);

num = "Altin";
console.log(num);

//Exercise 3 -->
let number = 21;
{
    let number = 3;
    console.log("This number is shown inside brackets:", number);
}

console.log("This number is shown outside brackets:", number);

//Exercise 4 -->
var outside = 7;
{
    var inside = 3;
    console.log(inside);
}

console.log(outside);

//Exercise 5 -->
for (let numEven = 1; numEven <= 20; numEven++) {
    if (numEven % 2 === 0) {
        console.log(numEven);
    }
}

//Exercise 6 -->
let i = 10;
while (i >= 1) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i--;
}

/*
//Exercise 7 -->   
let word = prompt("insert here your any word or text:");

//Exercise 8 -->
console.log(word.length);

//Exercise 9 -->
let parola;

do {
  parola = prompt("Insert a word with 5 letters:");
  if (parola === null) {
    console.log("Operation annuled.");
    break;
  }
} while (parola.length < 5);

if (parola !== null) {
  console.log("Your word is:", parola);
}
*/
/*
//Exercise 10 -->
let score = parseInt(prompt("Total score is:"));

if(score > 90 && score < 100) {
    console.log("Very good!");
} else if (score >= 70 && score <= 89) {
    console.log("Good!");
} else if (score >= 60 && score <= 69) {
    console.log("Sufficient");
} else (score <= 59); {
    console.log("Insufficient score!")
} 
*/

//exericise 11 -->
let punteggio =prompt("Insert here your score (A, B, C, D, E): ")

switch (punteggio.toUpperCase()) {
    case "A":
        console.log("Excellent score!");
        break;
    case "B":
        console.log("Good score");
        break;
    case "C":
        console.log("Sufficient score");
        break;
    case "D":
    case "E":
        console.log("Insufficient score");
        break;
    default :
        console.log("Try again!");
}