// Lista delle email registrate
const emailList = ['ghazgt@hotmail.fr','ghazouani1988@gmail.com'];
console.log(emailList);
// chiedo all'utente di inserire una mail
const userMail = prompt('inserici qui la tua mail');
console.log(userMail);
// controllo se la mail è nella list o no
mailFound = false;

for (let i = 0; i < emailList.length; i++) {
    if (userMail === emailList[i]) {
        mailFound = true;
    }
}
console.log(mailFound);
// Stampo un messaggio per l utente per indiare se la mail è corretta o no
if (mailFound) {
    alert('benvenuto')
} else {
    alert('Accesso negato')
}