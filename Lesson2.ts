/*** DICHIARARE UNA VARIABILE DI TYPESCRIPT ***/
// Per dichiarare le variabili di typescript è necessario dichiarare il tipo prima del valore, separanto il nome variabile dal tipo con un :

let stageName: string = "Hello World"
let roomSize: number = 42
let isComplete: boolean = true

// Tutti i tipi vengono convenzionalmente dichiarati in lowercase!!

/*** ARRAY ***/
// è sbagliato dichiarare un array cosi: 
// let shoppingList: array = ['apple', 'orange', 'banana'];
// La domanda da porsi è: che tipo di dato avrà il mio array?

//Se andremo a creare un array di stringhe:

let shoppingList: string[] = ['apple', 'orange', 'banana']

/*** FUNZIONI ***/
/* Quando si parla di aggiungere types alla funzione è necessario tenere a mente due cose importanti:
* I tuoi parametri
* e cosa stai ritornando dalla funzione
* ad esempio
* 
* Funzione js senza tipi di dato */

let generateFullNameIncomplete = (firstName, lastName) => {
    return firstName + " " + lastName;
}

/* in questa funzione vogliamo quindi ritornare una stringa con nome e cognome insieme
* ma questa funzioone è vulnerabile perchè potrebbe ritornare tipi di dato casuali, come numeri o altro
* quando in realtà vogliamo solo ritornare delle stringhe.
* quindi:

*/
let generateFullName = (firstName: string, lasName: string): string => {
    return firstName + " " + lasName;
}

/*
 * Nel caso sopra abbiamo quindi dichiarato il tipo di dato dei parametri e il tipo di dato che la nostra funzione dovrà ritornare aggiungendo nomefunzione(): string <--
 */


/* DEFINIRE TYPES IN OBJECTS */
// Questo è un normale oggetto:

let person2 = {
    name: 'Peter Parker',
    age: 20,
    activeAvenger: true,
    powers: ['wall-crawl', 'spider-sense', 'web-shootin']
}

/* Gli oggetti sfortunatamente sono molto simili agli array ma devono essere più descrittivi 
*  rispetto a cosa hanno al loro interno, 
*  non puntando quindi semplicemente ad un generico tipo di dato
*  Come fare quindi:
*/

let person3: {
    name: string;
    age: number;
    activeAvenger: boolean;
    powers: string[];
} = {
    name: 'Peter Parker',
    age: 20,
    activeAvenger: true,
    powers: ['wall-crawl', 'spider-sense', 'web-shootin']
}

// L'oggetto di Typescript come si può notare è diverso perchè nella definizione dei tipi presenta dei semicolon ; e non una virgola
// Questa è una convenzione applicata da Typescript


/*** TYPES E INTERFACE ***/

/*** TYPE ***/
// Nella sua forma più semplice il TYPE ti permette di definire un alias che fa riferimento alla forma che il dato dovrà avere una volta creato.

let buttonStylesString: string = 'btn btn-primary'
// Ma oltre la forma possiamo definire cosa dovrà esattamente esserci in quel dato, creando noi il tipo, ad esempio:

type buttonType = 'primary';

// Se scriviamo cosi:

let buttonStyles: buttonType = 'primary'

// Ritornerà corretto
// Ma se scriviamo cosi:
// let buttonStyles2: buttonType = 'danger'; // Errore - Togliere il commento per verificare

// Questa procedura rispecchia un pò la condizione if in javascript:
// if (buttonStyles === 'primary' ||) { allora puoi andare avanti }
//La domanda ora è come definiamo multiple Types in buttonType?
// La risposta è l'operatore UNION (|) che è un pò come l'OR in javascript

type buttonType2 = 'primary' | 'danger' | 'success';

//Adesso dunque possiamo switchare in uno dei seguenti 3 tipi e la variabile funzionerà.

/** INTERFACE **/
// L'INTERFACE è il TYPE ma per gli OBJECTS
// Quando guardiamo all'oggetto precedente che abbiamo definito:

let person4: {
    name: string;
    age: number;
    activeAvenger: boolean;
    powers: string[];
} = {
    name: 'Peter Parker',
    age: 20,
    activeAvenger: true,
    powers: ['wall-crawl', 'spider-sense', 'web-shootin']
}

/* L'oggetto attualmente non è complesso, ma può capitare che altri oggetti possano esserlo e che magari vogliamo condividere la stessa dichiarazione dei tipi con altri oggetti simili e complessi quindi andare a dichiarare
*  nuovamente i tipi risulterebbe ridondante: per questo si crea un'interfaccia o INTERFACE.
*/
interface Hero {
    name: string;
    age: number;
    activeAvenger: boolean;
    powers: string[];
}

// Ed ecco che ora possiamo dichiarare i nostri prossimi oggetti così
let person5: Hero = {
    name: 'Peter Parker',
    age: 20,
    activeAvenger: true,
    powers: ['wall-crawl', 'spider-sense', 'web-shootin']
}

/* POSSIAMO COMBINARE TYPES CON INTERFACES? 
* La risposta è SI!
*/

type ComicUniverse = 'Marvel' | 'DC'

interface HeroWithUniverse {
    name: string;
    age: number;
    activeAvenger: boolean;
    powers: string[];
    universe: ComicUniverse;
}

let person6: HeroWithUniverse = {
    name: 'Peter Parker',
    age: 20,
    activeAvenger: true,
    powers: ['wall-crawl', 'spider-sense', 'web-shootin'],
    universe: 'Marvel'
}