// Estrarre elementi base
const numeri = [1, 2, 3, 4, 5];

const [a, b, c] = numeri;
console.log(a, b);

// saltare elementi durante il destructing
console.log(a, c);

// Destructing con valori predefiniti
const fruits = ["banana", "mela", "kiwi"];
const [
  fruit1 = "default1",
  fruit2 = "default2",
  fruit3 = "default3",
  fruit4 = "default4",
  fruit5 = "default5"
] = fruits;

console.log(fruit1, fruit2, fruit3, fruit4, fruit5);