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
var surname = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

/*chiediamo il cognome all'utente*/
var surnameUser = prompt("inserisci il tuo cognome");
/*inseriamo il cognome nell'array */
surname.push(surnameUser)
/*ordiniamo alfabeticamente i cognomi nell'array  */
console.table(surname.sort())
/*stampiamo in pagina e il log la lista  */
/*identifichiamo la posizione del nuovo utente */



