// Arrays

// Creación de un array vacío con 10 espacios
const arr = new Array(10); 

// Creación de un array vacío usando la sintaxis literal
const arr1 = []; 
console.log(arr1);

// Array de números
const numeros = [1, 2, 3, 4, 5];

// Array de colores
let colores = ["rojo", "verde", "blanco"];

// Array de videojuegos
let videojuegos = ["spiderwitch", "gta1", "gta2"];
console.log(videojuegos[0]); // Imprime el primer videojuego

// Array con diferentes tipos de datos
let arregloCosas = [
    true,
    123,
    "fernando",
    2 + 3,
    ["casa", 456]
];
console.log(arregloCosas); // Imprime el array completo

// Uso de map para calcular los cuadrados de un array
let numeroMap = [1, 2, 3, 4, 5];
let cuadrados = numeroMap.map(num => num * num);
console.log(cuadrados); // Imprime los cuadrados de los números