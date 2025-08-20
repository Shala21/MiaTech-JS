// Funzione di base con callback
function somma(a, b, callback) {
    let risultato = a + b;
    callback(risultato);
}

somma(5, 3, function(risultato) {
    console.log("il risultato della somma è:", risultato);
})

