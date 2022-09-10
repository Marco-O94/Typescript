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

// Typescripot inoltre fornisce altri Tipi di variabili
let variable19: any = "Hello World"; // any può essere qualsiasi cosa
let variable20: void = undefined; // void non ha valore
let variable21: null = null; // null non ha valore
let variable22: undefined = undefined; // undefined non ha valore