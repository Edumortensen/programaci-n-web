let numero=10;
if(numero==2){
    console.log("Numero 1");
}else if(numero==2){
    console.log("Numero 2");
}else if(numero==3){
    console.log("Numero 3");
}else {
    console.log(" no Numero");
}

//EJERCICIO ESTACIONES DEL AÑO

let mes = 4;

if(mes==1||mes==2||mes==3){
    console.log("INVIERNO");
}else if(mes==4||mes==5||mes==6){
    console.log("OTOÑO");
}else if(mes==7||mes==9||mes==10){
    console.log("PRIMAVERA");
}else if(mes==11||mes==12){
    console.log("VERANO");
}else {
    console.log("NINGUNA");
}

//CALCULAR LA HORA DEL DIA
//6AM A 12 AM DIA
//13PM A 18PM TARDE
//19PM A 24PM NOCHE
let hora = 12;
let mensaje;

if(hora>=6 && hora<=11){
    mensaje="Buenos dias";
    console.log(mensaje);
}else if(hora>=12 && hora<=18){
    mensaje="Buenos tardes";
    console.log(mensaje);
}else if(hora>=19 && hora<=23){
    mensaje="Buenos noches";
    console.log(mensaje);
}else if(hora>=24 && hora<=5){
    mensaje="madrugada duerme";
    console.log(mensaje);
}else {
    console.log("NINGUNA");
}


//switch
let meses = 12;
let estacion;

switch(meses) {
    case 1: case 2: case 3:
        estacion = "INVIERNO";
        break;
    case 4: case 5: case 6:
        estacion = "OTOÑO";
        break;
    case 7: case 8: case 9:
        estacion = "PRIMAVERA";
        break;
    case 10: case 11: case 12:
        estacion = "VERANO";
        break;
    default:
        estacion = "valor incorrecto";
}

console.log(estacion);


//ciclos 

//for
const heroes = ["BATMAN", "SPIDEMAN", "BANANA", "APPLEBOY"];
for (let i = 0; i < heroes.length; i++) {
    console.warn(heroes[i]);
}

console.warn("--------------------------");
for (let i  in heroes) {
        console.warn(heroes[i]);
    }

console.warn("--------------------------");
for (let heroe  in heroes) {
        console.warn(heroe);
    }

for(let contador = 0;contador<10;contador++){
    if(contador % 2!=0){
        continue;
    }
    console.log(contador)
}
const carros=["ADS","MAZDA","HONDA","FORD"]
for(let contador = 0;contador<carros.length;contador++){
    if(contador ==3){
        continue;
    }
    console.log(carros[contador]);

}

let i=0;
while(carros[i]){
    if(i==1)
    {
        i++;
        break;
    }
}

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
