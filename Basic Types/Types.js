/* Comenzando con los Tipos Boolean
Es de los tipos de datos mas basicos es simple
es true/false (Verdadero/Falso)*/
var isDone = false;
console.log(isDone);
/* Comenzando con los Tipos Number
Considera los flotantes como number y los bingInt como bigint*/
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//let big: bigint = 100n;
/*Los Famosos Strings, fundamentales en todos
los lenguaje. Se usa la palabra string para definirlos */
var texto = "Aprendiendo como siempre!!";
//color = "Red";
/*Otra forma de trabajar con los string */
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hola, mi nombre es " + fullName + ".\nel mes que viene cumplire " + age;
console.log(sentence);
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
var listado = [1, 2, 3];
var listadoNumerico = [1, 2, 3];
/*Tuplas
En estos tipos de datos debemos pasar los elementos segun su tipo y en el orden declarado al crear la tupla*/
// Declaración de una tupla
var soyUnaTupla;
// Inicializar
soyUnaTupla = ["hello", 10]; // OK
// No inicializa por error en el orden de los elementos pasados.
// soyUnaTupla = [10, "hello"]; // Error
// OK
console.log(soyUnaTupla[0].substring(0));
//La propiedad substring no sirve con los de tipo number.
//console.log(soyUnaTupla[1].substring(1));
// El indice es mas largo que la tupla
// soyUnaTupla[3] = 'Mundo';
