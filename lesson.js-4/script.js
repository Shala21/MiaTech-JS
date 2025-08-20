// Funzione di base con callback
function operazione(a, b, callback) {
    const risultato1 = a * b;
    console.log("risultatto della moltiplicazione:", risultato1);
    callback(risultato1);
}
operazione(2, 3, function(valore) {
    console.log("il callback ha ricevuto il valore:" , valore);
})

// Funzione di callback e passaggio di parametri 
function somma(a, b, callback) {
    let risultato = a + b;
    callback(risultato);
}

somma(5, 3, function(risultato) {
    console.log("il risultato della somma è:", risultato);
})


// Callback annidati
function somma(a, b, callback) {
    const risultato = a + b;
    console.log("Somma:", risultato);
    callback(risultato);
}

function moltiplica(a, b, callback) {
    const risultato = a * b;
    console.log("Moltiplicazione:", risultato);
    callback(risultato);
}

function sottrai(a, b, callback) {
    const risultato = a - b;
    console.log("Sottrazione:", risultato);
    callback(risultato);
}

somma(5, 3, function(ris1) {
    moltiplica(ris1, 2, function(ris2) {
        sottrai(ris2, 4, function(ris3) {
            console.log("Risultato finale dopo tutte le operazioni:", ris3);
        });
    });
});
