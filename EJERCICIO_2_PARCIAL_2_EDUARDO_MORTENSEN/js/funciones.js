//FUNCIONES

function miFuncion(a,b){
    console.log("La suma es :"+ (a + b));
    console.log(arguments.length);

}
miFuncion(2,4);

// la palabra return 

function    Mireturn(a ,b){
    return a +b;
}

let resultado = Mireturn(4,5);

console.log(resultado);

//funcion de tipo expresion 
//declaracion de una funcion que es igual a una expresion

let sumar = function (a,b) {return a*b};
resultado = sumar(2,4);
console.log(resultado);
console.log(typeof sumar);

// funciones de tipo self-invoking
//porque son funciones que se llaman a si mismas
//funciones anonimas
// no son muy comunes pero pueden ser utiles en algunos casos
(function(a,b){console.log('Ejecutando la funcion '+ (a+b))})(5,8);

// funciomes anonimas

setTimeout(function(){
    console.log('Hola desde una funcion anomina');
},0000);

const persona = {
    nombre : 'Diego',
    saludar()
    {
        return `Hola, soy ${this.nombre}`
    }
}

console.log(persona.saludar());

//funciones tipo flecha (arrow function)

const sumarValores = (a,b) => a + b;
console.log (sumarValores(1,3));

const operaciones = {sumar: (a,b) => a+b, restar: (a,b) =>a-b,  multiplicar: (a,b) =>a*b}
console.log(operaciones.sumar(7,11));
console.log(operaciones.restar(7,11));
console.log(operaciones.multiplicar(7,11));