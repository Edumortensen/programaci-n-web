// Variables básicas
var nombre = "Ricardo"; // Declaración de una variable con var
var edad;               // Declaración sin inicialización
edad = 25;              // Inicialización posterior
let apellido = "Vargas"; // Declaración con let
console.log("Mi nombre es: " + nombre + " " + apellido); // Concatenación de strings
console.log("Mi edad es: " + edad); // Impresión de una variable

// Operaciones aritméticas básicas
let x = 10; 
let y = 20; 
let z = x + y; // Suma de dos variables
console.log(z); // Resultado de la suma

// Datos tipo string
let nombrePersona = "Ricardo"; // String simple
console.log(nombrePersona);

let nombrePersona1; 
nombrePersona1 = "Carlos"; // Asignación posterior
console.log(nombrePersona1);

let numero = 1000; // Dato numérico
console.log(numero);

// Objetos en JavaScript
let personas = {
    nombre: "Carla", 
    apellido: "Ponce",
    edad: 15
};
console.log(personas); // Impresión del objeto

// Uso del operador typeof
let let1 = "Pacardo"; // Tipo string
console.log(typeof let1);

let let2 = 1; // Tipo number
console.log(typeof let2);

let let3 = true; // Tipo boolean
console.log(typeof let3);

let let4 = BigInt(123); // Tipo BigInt
console.log(typeof let4);

let let5 = [1, 2, 3, 4, 5, 6, 7, 8]; // Tipo array
console.log(typeof let5); // Nota: typeof devuelve "object" para arrays

let let6 = Number(123); // Tipo number
console.log(typeof let6);

function nadar() {}; // Tipo función
console.log(typeof nadar);

let simbol = Symbol("114567632"); // Tipo symbol
console.log(typeof simbol);

// Uso de clases
class persona {
    constructor(nombres, apellidos, edads) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.edads = edads;
    }
}
console.log(typeof persona); // Tipo function (clases son funciones especiales)

let varia; // Declaración sin valor asignado
console.log(typeof varia); // undefined

let varia1 = null; 
console.log(typeof varia1); // object (peculiaridad de JavaScript)

let autos = ["BMW", "MERCEDES", "CH"]; // Arreglo de strings
console.log(autos); 
console.log(typeof autos); // object

let cadena = ""; // String vacío
console.log(typeof cadena); // string

// Nombres de variables válidos
let nombresCompletos = "ricardo vargas"; 
let nombres_Completos = "ricardo vargas";
let $nombresCompletos = "ricardo vargas"; // Uso de "$" en nombres de variables

// Operaciones matemáticas
let num1 = 12;
let num2 = 132;
console.log(num1 + num2); // Suma
console.log(num1 * num2); // Multiplicación
console.log(num1 / num2); // División
console.log(num1 ** num2); // Potencia

// Incremento y decremento
let num3 = 3, num4 = 10;
let total = num3 + num4;

total = ++num3; // Incremento antes de usar el valor
console.log(total);
console.log(num3);

total = num3++; // Incremento después de usar el valor
console.log(total);
console.log(num3);

total = num3--; // Decremento después de usar el valor
console.log(total);
console.log(num3);

total = --num3; // Decremento antes de usar el valor
console.log(total);
console.log(num3);

// Precedencia de operadores
let pre1 = 2, pre2 = 3, pre3 = 4, pre4 = 5;

let pre5 = (pre1 + pre2) * pre3; // Uso de paréntesis para alterar la precedencia
console.log(pre5);

let pre6 = pre3 * (pre1 + pre2); 
console.log(pre6);

let pre7 = pre1 + pre2 * pre3; // Precedencia sin paréntesis
console.log(pre7);

let pre8 = (pre1 * pre3) + pre2 * pre4 / (pre1 + pre2);
console.log(pre8);

// Operadores de asignación
let operador1 = 3, operador2 = 2;
operador1 += operador2; // Suma y asignación
console.log(operador1);

operador1 -= operador2; // Resta y asignación
console.log(operador1);

// Operadores de comparación
console.log(5 == '5'); // Igualdad no estricta
console.log(5 != '5'); // Desigualdad no estricta
console.log(5 === '5'); // Igualdad estricta
console.log(5 !== '5'); // Desigualdad estricta
console.log(10 > 5);  // Mayor que
console.log(10 <= 5); // Menor o igual que

let operador3 = 3, operador4 = 5;

if (operador3 == operador4) { // Comparación con if-else
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}

// Determinar si un número es par o impar
let numero9 = 15;
if (numero9 % 2 == 0) {
    console.log("es par");
} else {
    console.log("no es par");
}

// Determinar si es mayor de edad
let numero10 = 10;
if (numero10 >= 18) {
    console.log("mayor");
} else {
    console.log("menor");
}

// Par e impar en un arreglo
let numeros11 = [12, 14, 16, 11, 3, 7, 9];
let pares = 0, impares = 0;

for (let i = 0; i < numeros11.length; i++) { // Iteración con bucle for
    if (numeros11[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
console.log(`Cantidad de números pares: ${pares}`);
console.log(`Cantidad de números impares: ${impares}`);

// Rango de valores
let s = 11;
let valMin = 12, valMax = 20;

if (s >= valMin && s <= valMax) { // Rango con AND
    console.log("el valor dentro del rango");
} else {
    console.log("el valor fuera del rango");
}

if (s >= valMin || s <= valMax) { // Rango con OR
    console.log("el valor dentro del rango");
} else {
    console.log("el valor fuera del rango");
}

// Operador ternario
let resultado = (s >= valMin && s <= valMax) ? "El valor está dentro del rango" : "El valor está fuera del rango";
console.log(resultado);

// Conversión de números
let minumero = "20";
console.log(typeof minumero); // string
let minumero2 = Number(minumero);
console.log(typeof minumero2); // number

let minumero3 = parseInt(minumero);
console.log(typeof minumero3); // number

console.log(parseInt("42px")); // Extrae el número entero
console.log(parseInt("3.141234")); // Convierte a entero
console.log(parseInt("abc")); // NaN (no válido)

console.log(Number("42px")); // NaN (conversion estricta)
console.log(Number("3.141234")); // Conversión completa
console.log(Number("abc")); // NaN

// Conversión de tipos booleanos y valores especiales
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

if(isNaN(minumero2)){
    console.log("no es un numero");
}else{
    console.log(" es un numero");
}
console.log(isNaN(minumero2));
console.log(minumero2);

if(undefined == minumero2){
    console.log("no es un numero");
}else{
    console.log("es un numero");
}







