// Exercise 1 & 5 ->
class Automobile {
    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;

        this.#calcolaEta(); // chiama il metodo privato
    }

    #calcolaEta() {
        const mostraEta = new Date().getFullYear(); // CORRETTO
        this.eta = mostraEta - this.anno;
    }

    descrizione() {
        return `${this.marca} ${this.modello} (${this.anno}) - Età: ${this.eta} anno`;
    }
}



// Exercise 2 ->
class Chilometraggio extends Automobile {
    constructor(marca, modello, anno, chilometri = 0) {
        super(marca, modello, anno);
        this.chilometri = chilometri;
    }
    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometri += km;
        } else {
            console.log("Not valid for KM.");
        }
    }
    mostraChilomeraggio() {
        return `${this.chilometri} km`;
    }
} 


let auto = new Chilometraggio("Mercedes", "CLA 200", 2024);

console.log(auto.descrizione());
console.log(auto.mostraChilomeraggio());

auto.aggiungiChilometri(150);
console.log(auto.mostraChilomeraggio());


// Exercise 3 ->
class Elettrica extends Automobile {
    constructor(marca, modello, anno, chilometri = 0, autonomia = 300) {
        super(marca, modello, anno);
        this.chilometri = chilometri;
        this.autonomia = autonomia;
    }

    ricarica(km) {
        if (km > 0) {
            this.autonomia += km;
        } else {
            console.log("Out of charge.");
        }
    }

    mostraAutonomia() {
        return `${this.autonomia} km di autonomia`;
    }
}


let carica = new Elettrica("Mercedes", "CLA 200", 2024);carica.ricarica(20);
console.log(carica.descrizione());
console.log(carica.mostraAutonomia()); 
carica.ricarica(10);
console.log(carica.mostraAutonomia());


// Exercise 4 ->
Automobile.prototype.saluta = function() {
    return `Ciao questa e la mia ${this.marca} ${this.modello} del ${this.anno}!`;
    };
let macchina = new Automobile("Mercedes", "CLA 200", 2024);
console.log(macchina.saluta());


// Exercise  ->
