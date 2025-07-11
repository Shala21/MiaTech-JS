/*
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
let outside = 7;
{
    let inside = 3;
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


//Exercise 7 -->   
let word = prompt("insert here any word or text:");

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


//Exercise 10
let numbeR = 5;

if(numbeR < 5) {
    console.log("Number is smaller then 5");
} else {
    console.log("Number is bigger then 5");
}


//Exercise 11 -->
let score = parseInt(prompt("Total score is:"));

if (score > 90 && score < 100) {
    console.log("Very good!");
} else if (score >= 70 && score <= 89) {
    console.log("Good!");
} else if (score >= 60 && score <= 69) {
    console.log("Sufficient");
} else (score <= 59); {
    console.log("Insufficient score!")
} 

//exericise 12 -->
let punteggio =prompt("Total score is:")

switch (punteggio.toUpperCase()) {
    case score > 90 && score < 100 :
        console.log("Excellent score!");
        break;
    case score >= 70 && score <= 89 :
        console.log("Good score");
        break;
    case score >= 60 && score <= 69 :
        console.log("Sufficient score");
        break;
    case score <= 59:
        console.log("Insufficient score");
        break;
    default :
        console.log("Try again!");
}
*/
// Exercise 13
const numeri = [1, 2, 3, 4, 5, 6, 8, 9];
let somma = 0;

for(let i = 0; i < numeri.length; i++  ) {
    somma += numeri[i];
}

console.log(somma);


//Exercise 14
