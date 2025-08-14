class Automobile {
    // Exercise 1 - 2 & 5 -  ->
    #contatoreChiamate;

    constructor(marca, modello, anno, chilometri = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometri = chilometri;

        this.#calcolaEta();
        this.#contatoreChiamate = 0;
    }
    // Aggiungi getters 
    get chilometraggio() {
        return `${this.chilometraggio}`;
    }
    // Aggiungi setters
    

    #calcolaEta() {
        const mostraEta = new Date().getFullYear();
        this.eta = mostraEta - this.anno;
    }

    // Metodo privato per incrementare il contatore
    #incrementaContatore() {
        this.#contatoreChiamate++;
    }

    descrizione() {
        return `${this.marca} ${this.modello} (${this.anno}) - Età: ${this.eta} ${this.eta === 1 ? "anno" : "anni"}`;
    }

    // il metodo privato qui dentro
    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometri += km;
            this.#incrementaContatore();  
        } else {
            console.log("Not valid for KM."); 
        }
    }

    mostraChilomeraggio() {
        return `${this.chilometri} km`;
    }

    _controllaChilometri() {
        if (this.chilometri > 100000) {
            return "Attenzione: Hai superato i km.";
        }
        return "Chilometraggio sotto controllo.";
    }

    // Exercise 6 ->
    static ConfrontaChilometraggio(auto1, auto2) {
        if (auto1.chilometri > auto2.chilometri) {
            return `${auto1.marca} ${auto1.modello} ha più chilometri di ${auto2.marca} ${auto2.modello}`;
        } else if (auto1.chilometri < auto2.chilometri) {
            return `${auto2.marca} ${auto2.modello} ha più chilometri di ${auto1.marca} ${auto1.modello}`;
        } else {
            return `Entrambe le auto hanno lo stesso chilometraggio`;
        }
    }

    getNumeroChiamate() {
        return this.#contatoreChiamate;
    }
    // metodo pubblico per mostrare il contatore
    mostraContatoreChiamate() {
        return this.#contatoreChiamate;
    }
}

// Test
let macc = new Automobile("Mercedes", "CLA 200", 2024);
macc.aggiungiChilometri(143341);
macc.aggiungiChilometri(22);
macc.aggiungiChilometri(36473);
macc.aggiungiChilometri(4547454);
console.log(macc.getNumeroChiamate());  // Output 4
console.log(macc.mostraContatoreChiamate());  // Deve anche mostrare 4


let auto1 = new Automobile("Mercedes", "CLA 200", 2024, 100000);
let auto2 = new Automobile("BMW", "Serie 1", 2021, 1000);

console.log(Automobile.ConfrontaChilometraggio(auto1, auto2));

// Exercise 3 ->
class Elettrica extends Automobile {
    constructor(marca, modello, anno, chilometri = 0, autonomia = 300) {
        super(marca, modello, anno, chilometri);
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

    mostraAvvisochilometri() {
        return `Avviso ${this._controllaChilometri()}`;
    }
}

let carica = new Elettrica("Mercedes", "CLA 200", 2020, 120000);
carica.ricarica(20);
console.log(carica.descrizione());
console.log(carica.mostraAutonomia());
carica.ricarica(11);
console.log(carica.mostraAutonomia());
console.log(carica.mostraAvvisochilometri());

// Exercise 4 ->
Automobile.prototype.saluta = function() {
    return `Ciao questa e la mia ${this.marca} ${this.modello} del ${this.anno}!`;
};

let macchina = new Automobile("Mercedes", "CLA 200", 2024);
console.log(macchina.saluta());
