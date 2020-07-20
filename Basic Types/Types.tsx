/* Comenzando con los Tipos Boolean 
Es de los tipos de datos mas basicos es simple
es true/false (Verdadero/Falso)*/
let isDone: boolean = false
console.log(isDone)

/* Comenzando con los Tipos Number 
Considera los flotantes como number y los bingInt como bigint*/
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010
let octal: number = 0o744;
//let big: bigint = 100n;

/*Los Famosos Strings, fundamentales en todos 
los lenguaje. Se usa la palabra string para definirlos */

let texto: string = "Aprendiendo como siempre!!";
//color = "Red";

/*Otra forma de trabajar con los string */
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hola, mi nombre es ${fullName}.
el mes que viene cumplire ${age}`

console.log(sentence)

/* let sentence: string =
  "Hello, my name is " +
  fullName +
  ".\n\n" +
  "I'll be " +
  (age + 1) +
  " years old next month."; */

  /*Los Array o arreglos, listados, como quieras llamarlos
  si vienes de otros lenguajes.
  Tenemos los arrays por tipos */

  let listado: number[] = [1, 2, 3];
  let listadoNumerico: Array<number> = [1, 2, 3];

  /*Tuplas 
  En estos tipos de datos debemos pasar los elementos segun su tipo y en el orden declarado al crear la tupla*/

// Declaración de una tupla
let soyUnaTupla: [string, number];
// Inicializar
soyUnaTupla = ["hello", 10]; // OK
// No inicializa por error en el orden de los elementos pasados.
// soyUnaTupla = [10, "hello"]; // Error

// OK comienza la tupla desde el indice del substring
console.log(soyUnaTupla[0].substring(1));

//La propiedad substring no sirve con los de tipo number.
//console.log(soyUnaTupla[1].substring(1));

// El indice es mas largo que la tupla
// soyUnaTupla[3] = 'Mundo';

// Tipos Enum Sirven para otorgar un indice o numero a nuestro conjunto de datos, podemos consultar su posicion haciendo referencia a ellos.
/* enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Red;
console.log(c); */

// Podemos establecer los valores de forma manual.
enum Nombre {
  Javier = 1,
  Claudia = 2,
  Yanina = 4,
}
let n: Nombre = Nombre.Yanina;
console.log(n)

//
enum Color {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color[2];

// Displays 'Green'
console.log(colorName);