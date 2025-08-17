// Estrarre elementi base
const numeri = [1, 2, 3, 4, 5];

const [a, b, c] = numeri;
console.log(a, b);

// saltare elementi durante il destructuring
console.log(a, c);


// Destructuring con valori predefiniti
const fruits = ["banana", "mela", "kiwi"];
const [
  fruit1 = "default1",
  fruit2 = "default2",
  fruit3 = "default3",
  fruit4 = "default4",
  fruit5 = "default5"
] = fruits;

console.log(fruit1, fruit2, fruit3, fruit4, fruit5);


//Estrazione di propieta base
const Persona = {
    nome : "Altin",
    cognome : "Shala",
    eta : 31
}
const {nome, cognome} = Persona;
console.log(nome, cognome);

// Destructuring con nomi di variabili diversi
const {nome : firstName, cognome : surname} = Persona

console.log(firstName, surname);


// Destructuring con valori predefiniti di oggetti
const {
    nome: nome1 = "DefaultNome",
    cognome: cognome2 = "DefaultCognome",
    eta: eta3 = 0
} = Persona;

console.log(nome1, cognome2, eta3);


// Copia di una arry
const arryOriginal = [1, 2, 3];
const arryCopie = [...arryOriginal];

console.log(...arryCopie);


// Unione di due arry
const arry1 = [1, 2, 3];
const arry2 = [4, 5, 6];

console.log(...arry1, ...arry2);


// Copia di un oggetto con propieta aggiuntive
const oggettoBase = {
    nome : "Altin",
    city : "Brig",
    via : "Bachstr."
}; 

const aggiuntaOggetto = {
    ...oggettoBase,
    nome : "Altin Shala",
    civico : 21
}; 

console.log(aggiuntaOggetto);


// Funzioni con parametri variabili
function somma(...numeri) {
  let risultato = 0;
  for (const numero of numeri) {
    risultato += numero;
  }
  return risultato;
}

console.log(somma(1, 2, 3)); 
console.log(somma(10, 20, 30, 40, 50));


// Destructurin arry con rest operator
const [primo, secondo, ...altri] = [1, 2, 10, 20, 30];

console.log(primo);
console.log(secondo);
console.log(...altri);


// Destructuring oggetto con reste 
const PeronaMe = {
    nome : "Altin ",
    cognome : "Shala",
    eta : 30,
    citta : "Roma",
    via : "Bachstr. 21"
}

const {nome: nomeME, cognome: cognomeME, ...altro} = PeronaMe;
console.log(nomeME, cognomeME, altro);


// Conversion di un oggetto in una stringa JSON
const xsona = { nome : "Altin", cognome : "Shala"};
const jsonString = JSON.stringify(xsona);

console.log(jsonString);


// Conversione di una stringa JSON in un oggetto
const obj = JSON.parse(jsonString);

console.log(obj.nome);
console.log(obj.cognome);


// Manipolaziona di dati JSON
const jsonString1 = '[{"name": "Toni"}, {"name": "Bob"}, {"name": "Rob"}]';

const jsonArry = JSON.parse(jsonString1);

jsonArry.push({"name" : "Altin"});

const modificaJson = JSON.stringify(jsonArry);

console.log(modificaJson);


// Stringa semplice con template literals
const nome2 = "Altin";
const congnome2 = "Shala";

const messaggio = `Ciao, sono ${nome2} ${congnome2}. Piavere di conoscerti!`;
console.log(messaggio);