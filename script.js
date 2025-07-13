
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


// Exercise 13 / 14 -->
const numeri = [1, 2, 3, 4, 5, 6, 8, 9];
//console.log(numeri)
let somma = 0;

for(let i = 0; i < numeri.length; i++  ) {
    somma += numeri[i];
}

console.log(somma);

//Exercise 15 -->
const reversNumber0 = [1, 2, 3, 4, 5, 6, 8, 9];

for (let i = reversNumber0.length - 1; i >= 0; i--) {
    console.log(reversNumber0[i]);
}


//Exercise 16 -->
const parole = [];

for (let i = 0; i < 5; i++) {
    const parola = prompt(`Inserisci la parola numero ${i + 1}:`);
    parole.push(parola);
}
for (let i = 0; i < parole.length; i++) {
    if (parole[i].length % 2 !== 0) {
        console.log(parole[i]);
    }
}


//Exercises from 17 to 21 -->
let persona = {
    name:"Gianni",
    age: 43,
    city: "Bologna"
}
console.log(persona.age);
persona.age = 60;
console.log(persona.age);
persona.job = "Developer";
console.log(persona.job);


const entries = Object.entries(persona);

for (let property in persona) {
    let value = persona[property];
    console.log("property " + property + " = " + value);
}


//Exercise 22 -->
function outerFunction(x, y) {
    function innerFunction() {
        return x + y;
    }
    console.log(innerFunction());
} 
outerFunction(1, 1)


//Exercise 23 -->
function outerFunction(x, initialValue) {
    let result = initialValue;

    function innerFunction(y) {
        result += y;
        return result;
    }
    return innerFunction;
} 

const myFunction = outerFunction(1, 2);
console.log(myFunction(3));
console.log(myFunction(3));


//exercise 24 -->
function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const myCounter = createCounter();
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.decrement());
console.log(myCounter.decrement());


//Exercise from 25 to  27-->
let student = {
    name:"Mario",
    age: 21 ,
    grade: 100 ,
    school: "School"
}

console.log(student);   
console.log(Object.keys(student));      
console.log(Object.values(student));     
console.log(Object.entries(student));


//Exercise 28 --> 
const numbers = [1, 2, 3, 4, 5, 81, 69, 12, 11];
numbers.forEach(numero => {
    console.log(numero * 2);
});

const squaredNumbers = numbers.map(numero => numero * numero);
console.log("Output of squerd numbers:", squaredNumbers);


//Exercise 29 -->
const students = [
    {
        name: "Kevin",
        grade: 60
    },
    {
        name: "Shala",
        grade: 59
    },
    {
        name: "Gesu",
        grade: 61
    }
];

let passedStudents = students.filter(student => student.grade >= 60);
console.log(passedStudents);

let passedStudendt = students.find(student => student.grade < 60);
console.log(passedStudendt);


//Exercise 30 -->
const expenses = [45, 55, 66, 77, 88, 99, 12, 34];
const sum = expenses.reduce((acc, current) => acc + current, 0 );
console.log(sum);

const words = ["banana", "apple", "cherry", "date"];
words.sort();
console.log(words)