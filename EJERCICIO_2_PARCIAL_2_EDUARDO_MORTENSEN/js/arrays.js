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

let p = [1,2,3,4]
p.push(5);
console.log(p);

//unshift()agrega uno a mas elementos al inicio del arreglo
let u = [1,2,3,4]
u.unshift(5);
console.log(u);

//splice()agrega uno a mas elementos al inicio del arreglo sin eliminar otro
let s =[1,2,3,4]
s.splice(1,0,5) //en la psicion 1 se, 0 valores son eliminados, agrega el valor 5
console.log(s);

// modificar elementos dentro de un array 

//podemos acceder a un elemento directamente por su indice

let i =["Ana","juan","jose","edu"]
i[2] = "Maria";//modifica el elemntos en la posicion 2
console.log(i);

// si deseamos modificar el arreglo de forma inmutable se puede utilizar 
// metodo map()

// crea un nuevo arreglo con los valores modificados
//let arregloMap=['azul', 'rojo','negro','blanco']
let arregloMap=[1,2,3,43]
let arregloNuevo = arregloMap.map(num => num === 43 ? 5 : num)
console.log(arregloNuevo)

//tambien se puede utilizar splice

let z =[1,2,3]
z.splice(1,1,5);
console.log(z)
//eliminar elementos de un array 
//pop() elimina el ultimo elemento del arrglo

let arregloPop=['azul', 'rojo','negro','blanco']
arregloPop.pop();
console.log(arregloPop)

//shift() elimina el ´primer elemento de un array

let arregloShift=['azul', 'rojo','negro','blanco']
arregloShift.shift();
console.log(arregloShift)
//splice para eliminar cualquier elmento de un arreglo
let arregloSplice=['azul', 'rojo','negro','blanco']
arregloSplice.splice(1,2); // elijo posicion 1, elimino la cantidad de elementos 2 desde esa posicion 
console.log(arregloSplice);


