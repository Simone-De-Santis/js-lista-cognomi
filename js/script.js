/*
Ciao ragazzi,
Esercizio di oggi: Lista Cognomi
nome repo: js-lista-cognomi
Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
Consigli del giorno:
Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.
Buon lavoro e buon divertimento!

*/




/*creiamo un array di cognomi  */
var lastName = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
/*prendiamo il riferimento in pagina html dove inserire la lista*/
var listElement = document.getElementById("list")

var surnameUser;
do {
  /*chiediamo il cognome all'utente*/
  var surnameUser = prompt("inserisci il tuo cognome", "De Santis");
  /*controllo se l'inserimento è vuoto o viene inserita una lista vuota con delgi spazzi */
} while (!surnameUser || surnameUser.trim() === (""));

surnameUser = surnameUser.trim()



// | ***********************************

//capitalize metod forzed


var firstLetter = surnameUser.charAt(0).toUpperCase();
var restLetter = surnameUser.substring(1).toLocaleLowerCase();
surnameUser = firstLetter + restLetter;

console.log(firstLetter)




// | ***********************************


/*inseriamo il cognome nell'array */
lastName.push(surnameUser)
/*ordiniamo alfabeticamente i cognomi nell'array  */
/*stampiamo  in log la lista  */
console.table(lastName.sort())
/*identifichiamo la posizione del nuovo utente */
console.log("Il nuovo cognome è in posizione: ", lastName.indexOf(surnameUser) + 1);
/*stampiamo in pagina  */
var listItems = ""
for (var i = 0; i < lastName.length; i++) {
  listItems += "<li>" + lastName[i] + "</li>";
}
listElement.innerHTML = listItems;

var positionElement = document.getElementById("position");
positionElement.innerText = "Il nuovo cognome è in posizione: " + (lastName.indexOf(surnameUser) + 1);


