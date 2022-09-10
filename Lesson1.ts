/*** VARIABILI ***/

// La dichiarazione di variabili in Typescript funziona cosi:
let variable1: string = "Hello World";
let variable2: number = 42;
let variable3: boolean = true;

// Le variabili possono essere dichiarate anche senza specificare il tipo
let variable4 = "Hello World";
let variable5 = 42;
let variable6 = true;

// Le variabili possono essere dichiarate anche senza specificare il valore
let variable7: string;
let variable8: number;
let variable9: boolean;

// Le variabili possono essere dichiarate anche senza specificare il tipo e il valore
let variable10;
let variable11;
let variable12;

// Esistono anche le variabili composite specificando il tipo di ogni elemento
let variable13: string[] = ["Hello", "World"];
let variable14: number[] = [1, 2, 3, 4, 5];
let variable15: boolean[] = [true, false, true];

// è possibile anche dichiarare gli array
let variable16: Array<string> = ["Hello", "World"];
let variable17: Array<number> = [1, 2, 3, 4, 5];
let variable18: Array<boolean> = [true, false, true];

// Typescript inoltre fornisce altri Tipi di variabili
let variable19: any = "Hello World"; // any può essere qualsiasi cosa, disabilita il type checking.
let variable20: void = undefined; // void non ha valore
let variable21: null = null; // null non ha valore
let variable22: undefined = undefined; // undefined non ha valore

/***** TUPLE *****/

//Come funziona il tipo Tuple di Typesctript
/*
* Nell'esempio seguente abbiamo due variabili, una di tipo numero ed una di tipo stringa, l'una separata dall'altra, normalmente si farebbe cosi.
*/
var empId: number = 1;
var empName: string = "Steve";        

// Tuple invece permette di separare le variabili in una sola riga e di specificare il tipo di ogni variabile
// Tuple type variable 
var employee: [number, string] = [1, "Steve"];
// Oppure
var person: [number, string, boolean] = [1, "Steve", true];
// Oppure
var user: [number, string, boolean, string] = [1, "Steve", true, "admin"];
// Possiamo anche dichiarare un array di Tuple:
var users: [number, string, boolean, string][] = [[1, "Steve", true, "admin"], [2, "John", false, "user"]];
// Possiamo accedere agli elementi di un Tuple con la notazione [nomeVariabile][indice]

// Qual è la differenza tra un Tuple e un Array?

/*
* Un Tuple è una variabile composta da un numero di elementi, mentre un Array è una variabile composta da un numero di elementi in cui ogni elemento dell'Array è una variabile.
* Tipicamente, il tuple è un array con larghezza fissa e tipi di dato definiti. Si usa infatti il tuple per un array statico e ben definito.
* Ad esempio:
*/

// Ritornerà i 3 valori presenti nell'array
const primaryColors: [string, string, string] = ['#ff0000', '#00ff00', '#0000ff'];
console.log(primaryColors);

//Questa sotto invece ritornerà un errore
// const primaryColors2: [string, string] = ['#ff0000', '#00ff00', '#0000ff']; // Errore -- Togliere il commento per verificare
// throws an error because there's an extra string

// Usando invece un array:
const primaryColors3: string[] = ['#ff0000', '#00ff00', '#0000ff'];
console.log(primaryColors);
// è possibile ritornare qualsiasi quantità di dati di tipo stringa

//In un Tuple, rispetto ad un array possiamo inserire una combinazione di dati:
const primaryColors4: [string, number] = ['#ff0000', 100];

// Perchè abbiamo bisogno dei tuple: Per conservare dati in un array che non cambi, come ad esempio le informazioni personali di un dipendente.

/***** FINE TUPLE *****/

/***** ENUM *****/
// Enum in Typescript è una variabile composta da un numero di elementi, ogni elemento dell'Enum è una variabile con un valore numerico associato.
// Ad esempio:
enum Color {
    Red,
    Green,
    Blue
}
// Ti permette quindi di dare ad un set di valori un nome

/***** FINE ENUM *****/


