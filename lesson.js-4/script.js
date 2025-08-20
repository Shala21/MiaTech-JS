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
