class Automobile {
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
        const annoCorrente = new Date().getFullYear();
        this.eta = annoCorrente - this.anno;
    }

    #incrementaContatore() {
        this.#contatoreChiamate++;
    }

    descrizione() {
        return `${this.marca} ${this.modello} (${this.anno}) - Età: ${this.eta} ${this.eta === 1 ? "anno" : "anni"}`;
    }

    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometri += km;
            this.#incrementaContatore();
        } else {
            console.log("Not valid for KM.");
        }
    }

    mostraChilometraggio() {
        return `${this.chilometri} km`;
    }

    _controllaChilometri() {
        if (this.chilometri > 100000) {
            return "Attenzione: Hai superato i km.";
        }
        return "Chilometraggio sotto controllo.";
    }

    getContatoreChiamate() {
        return this.#contatoreChiamate;
    }

    // Getter per chilometraggio
    get chilometraggio() {
        return this.chilometri;
    }

    // Setter per chilometraggio
    set chilometraggio(nuovoValore) {
        if (nuovoValore >= this.chilometri) {
            this.chilometri = nuovoValore;
        } else {
            console.log("Errore: Non puoi diminuire il chilometraggio.");
        }
    }

    // Exercise 6 methods moved inside the class
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

// Classe Camion che estende Automobile
class Camion extends Automobile {
    constructor(marca, modello, anno, chilometri = 0, caricoMassimoKg) {
        super(marca, modello, anno, chilometri);
        this.caricoMassimo = caricoMassimoKg;   // in kg
        this.caricoAttuale = 0;                 // inizialmente vuoto
    }

    //  Sovrascrive descrizione per includere carico massimo
    descrizione() {
        return `${super.descrizione()} - Carico massimo: ${this.caricoMassimo} kg - Carico attuale: ${this.caricoAttuale} kg`;
    }

    //  Metodo per caricare merce (rispetta il limite)
    carica(kg) {
        if (kg <= 0) {
            console.log("Errore: il carico deve essere positivo.");
            return;
        }

        if (this.caricoAttuale + kg <= this.caricoMassimo) {
            this.caricoAttuale += kg;
            console.log(`Caricati ${kg} kg. Carico attuale: ${this.caricoAttuale} kg`);
        } else {
            console.log("Errore: supereresti il carico massimo!");
        }
    }
}


//carico massimo
const camion1 = new Camion("Volvo", "FH16", 2020, 120000, 25000);

console.log(camion1.descrizione());
// Volvo FH16 (2020) - Età: 5 anni - Carico massimo: 25000 kg - Carico attuale: 0 kg

camion1.carica(10000);
// Caricati 10000 kg. Carico attuale: 10000 kg

camion1.carica(17000);
// Errore: supereresti il carico massimo!

console.log(camion1.descrizione());
// mostra il carico aggiornato


// Crea istanza per automobile e camion + verifica istanza in Automobile
const auto3 = new Automobile("Fiat", "Panda", 2000, 1000000);
const camion2 = new Camion("Iveco", "S-Way", 2025, 0);

console.log(auto3 instanceof Automobile);
console.log(camion2 instanceof Camion);

function verifivaIstanza(obj, classe) {
    return obj instanceof classe;
}
console.log(verifivaIstanza(auto3, Automobile));


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
