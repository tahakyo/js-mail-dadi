// genero due numeri random 
let dadoUtente = Math.floor(Math.random() * 6) + 1;
console.log(dadoUtente);
let dadoComputer = Math.floor(Math.random() * 6) + 1;
console.log(dadoComputer);
// Stabilire il vincitore, in base a chi fa il punteggio più alto
let result;
if (dadoComputer > dadoUtente) {
    result = 'CPU ha vinto';
} else if (dadoComputer < dadoUtente) {
    result = 'Hai vinto';
} else if (dadoComputer === dadoUtente) {
    result = 'Pareggio';
}

console.log(result);