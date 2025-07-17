
// more i.e. for js


//output my name
const name = 'Altin';
console.log(name);


// saying ciao to console.log
function saulta() {
    console.log('ciao');
}

saulta();


//using reverse 
function reverseString(alt) {
    return alt.split("").reverse().join("");
}

const alt = reverseString("Altin");
console.log(alt);


// define ex.

function getProperty(obj, propertyName) {
    return obj[propertyName];
}
 const pers = {
    nome: "Marco",
    età: 25,
    città: "Milano"
};
const risultato = getProperty(pers, "età");
console.log(risultato); 


//this the same ex. but harder

function getSafeProperty(obj, propertyName, defaultValue) {
    // Scrivi qui il codice
    if (propertyName in obj) {
        return obj[propertyName];
    } else {
        return defaultValue
    }
}

const libro = {
    titolo: "Il Nome della Rosa",
    autore: "Umberto Eco",
    stile: "romantico"
};

const risultato1 = getSafeProperty(libro, "autore", "Autore sconosciuto");
console.log(risultato1); // Deve stampare: Umberto Eco

const risultato2 = getSafeProperty(libro, "anno", "Anno non disponibile");
console.log(risultato2); // Deve stampare: Anno non disponibile


// more and more exercises

function getOrAddProperty(obj, propertyName, defaultValue) {
    // Scrivi qui il codice
    if (propertyName in obj) {
        return obj[propertyName];
    } else {
        obj[propertyName] = defaultValue; //
        return defaultValue;
    }
}

const film = {
    titolo: "Inception",
    regista: "Christopher Nolan"
};

const valore1 = getOrAddProperty(film, "regista", "Sconosciuto");
console.log(valore1); // Deve stampare: Christopher Nolan

const valore2 = getOrAddProperty(film, "anno", 2010);
console.log(valore2); // Deve stampare: 2010

console.log(film); // Deve stampare: { titolo: "Inception", regista: "Christopher Nolan", anno: 2010 }



// more & more

function aggiungiSeManca(array, valore) {
    // Scrivi qui il codice
    if (array.includes(valore)) {
        return array;
    } else {
        array.push(valore);
        return array;
    }
}

const nomi = ["Anna", "Luca", "Marco"];

const risultato3 = aggiungiSeManca(nomi, "Luca");
console.log(risultato3); // ["Anna", "Luca", "Marco"]

const risultato4 = aggiungiSeManca(nomi, "Giulia");
console.log(risultato4); // ["Anna", "Luca", "Marco", "Giulia"]




/////////////////////////////////////////////////////////////////////////////////////////////


// Exercise 1: Check Data Type
// Create a function that checks what type of data is passed to it and returns a string with the type name.
function checkType(value) {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    return typeof value;
}

console.log(checkType(42));
console.log(checkType("ciao"));
console.log(checkType([1, 2, 3]));


// Exercise 2: Create Person Object
// Create a function that takes name, age, and city as parameters and returns a person object.
function createPerson(name, age, city) {
    return { name, age, city };
}
const data = createPerson("Altin", 31, "Brig");
console.log(data);

// Exercise 3: Count Array Elements
// Create a function that counts how many elements are in an array and returns the count.
function countElements(arr) {
    return arr.length;
}

const arr = [1, 2, 3, 4, 5, 7];
const number = arr.length;
console.log(arr.length);
console.log(countElements(arr));

// Exercise 4: Add Numbers
// Create a function that takes two numbers and returns their sum.
function addNumbers(a, b) {
    return a + b;
}

const add = [1, 2, 3, 4 ];
add.push(5);
console.log(add);

// Exercise 5: Find Largest Number
// Create a function that takes an array of numbers and returns the largest number.
function findLargest(numbers) {
    return Math.max(...numbers);
}

const max = findLargest([2, 4, 6, 8, 10]);
console.log(max);


// Exercise 6: Filter Even Numbers
// Create a function that takes an array of numbers and returns a new array with only the even numbers.
function filterEven(numbers) {
    return numbers.filter(num => num % 3 === 0);
}
const isEvenNumeri = filterEven([1, 2, 3, 4, 5, 6]);
console.log(isEvenNumeri);

// Exercise 7: Get Object Property
// Create a function that takes an object and a property name, and returns the value of that property.
function getProperty(obj, propertyName) {
    return obj[propertyName];
}

// Exercise 9: Reverse String
// Create a function that takes a string and returns it reversed.
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Exercise 10: Count Object Properties
// Create a function that takes an object and returns how many properties it has.
function countProperties(obj) {
    return Object.keys(obj).length;
}
// Exercise 11: Is Property Present
// Create a function that checks if an object contains a certain property and returns true or false.
function hasProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
}

// Exercise 12: Double Array Values
// Create a function that receives an array of numbers and returns a new array with the values doubled.
function doubleValues(arr) {
    return arr.map(n => n * 2);
}

// Exercise 13: Get First Element
// Create a function that returns the first element of an array, or null if the array is empty.
function getFirst(arr) {
    return arr.length > 0 ? arr[0] : null;
}

// Exercise 14: Merge Two Objects
// Create a function that merges two objects into one.
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// Exercise 15: Remove Duplicates
// Create a function that receives an array and returns a new array without duplicates.
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Exercise 16: Is Array Empty
// Create a function that checks if an array is empty.
function isEmptyArray(arr) {
    return arr.length === 0;
}

// Exercise 17: Multiply Object Values
// Create a function that takes an object with numeric values and returns a new object with those values multiplied by 2.
function multiplyValues(obj) {
    const result = {};
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            result[key] = obj[key] * 2;
        }
    }
    return result;
}

// Exercise 18: Get Keys
// Create a function that returns all the keys of an object in an array.
function getKeys(obj) {
    return Object.keys(obj);
}
// Exercise 19: Capitalize String
// Create a function that takes a string and returns it with the first letter capitalized.
function capitalize(str) {
    if (str.length === 0) return '';
    return str[0].toUpperCase() + str.slice(1);
}

// Exercise 20: Is Number Positive
// Create a function that takes a number and returns true if it's positive, false otherwise.
function isPositive(num) {
    return num > 0;
}