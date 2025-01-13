// OBJETOS
/////////////////////////////////////
//carracteristicas principales de los objetos
// Claves y valores
//las clavews son cadenas o simbolos unicos
// los valores pueden ser de cualquier tipo sean numeros, funciones, cadenas otros tipos de objetos
//Dinamismo
//quiere decir que los objetos se pueden modificar en tiempo de ejecucución, pueden agregarse, modificarse
//o eliminar propiedades de un objeto
//dentro de los objetos se pueden incluir metodos
// los metodos son funciones asoaciadas a un objeto

//objetos ==> propiedades y metodos

let persona = {
    nombre:"Juan",
    apellido:"perez",
    email:"jua1234@gmail.com",
    edad:23
}

console.log(persona);

//incluir metodos en los objetos

let people = {
    name:"Ana",
    lastName:"Jhonson",
    age:45,
    fullname: function(){
        return this.name +" "+this.lastName; //this para acceder a las del objeto
    }
}

console.log(people.fullname());

const people2 ={
    name:"Carol",
    lastName:"Jhonson",
    age:55,
    saludar: function(){
        console.log(`Hey, my name is: ${this.name} `)
        }
}

people2.saludar();

//usando constructor object

const personal = new Object();
personal.nombre ="maria";
personal.apellido="tango"
personal.saludar=function(){
    console.log(`Hello: ${this.nombre}`)
}
console.log(personal.nombre)
personal.saludar();

//usando la clase object.create
// permite crear un objeto basado en un prototipo

const prototipoPersona ={
    saludar: function (){
        console.log(` Hola prototipo, soy ${this.nombre}`)
    }
}

const persona2 = Object.create(prototipoPersona);
persona2.nombre ="Carlos";
persona2.saludar();

//usando clases introducidos desde ES6 hasta la actualidad
//proporcionar una sintaxis mas estructurada para crear objetos
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido=apellido;

    }

    saludar(){
        console.log(`Hola clase soy: ${this.nombre}`)
    }
}

const persona3 =new Persona('Ana','Rios');
persona3.saludar();

//USANDO FUNCIONES CONSTRUCTORAS

// forma clasica, utilizada no muy frecuente 

function Persona1(nombre,apellido){
    this.nombre =nombre;
    this.apellido=apellido;
    this.saludar=function(){
        console.log(`Hola desde clases ${this.nombre +" "+this.apellido}`);
    }
}

const persona4 = new Persona1("Sara","Marcos");
persona4.saludar();

// manipulacion de los datos o de propiedades de los objetos 

//1 Agregar o modificar propiedades

const persona5 = {
    nombre:"Pedro"
}
persona5.nombre = "Juan";
persona5.edad =34;

console.log(persona5);

// eliminar propiedades
delete persona5.edad;
console.log(persona5);

//iterar sobre las propiedades

for (nombrePropiedad in persona5){
    console.log(nombrePropiedad);
    console.log(persona5[nombrePropiedad])
}

for(let clave in persona5){
    console.log(`${clave}:${persona5[clave]}`);
}

console.log('nombre'in persona5);
console.log(persona5.hasOwnProperty('nombre'));

//Metodos utiles para trabajr con objetos
//1. Object.keys()
//Devolver un array con las claves del objeto

console.log(Object.keys(persona5));

//2.Object.values 
//devuelve un array con los valores del objeto
console.log(Object.values(persona5));

//3. Object.entries()
// devuelve claves y valores
console.log(Object.entries(persona5));

//4. Object.assign()
// copia las propiades de un objeto a otro

const copia = Object.assign({}, persona5)
console.log(copia);

//5. Object.freeze()

//Congelar objeto para evitar modificaciones

Object.freeze(persona5);

//Object.seal()
//permite modificar propiedades existentes, pero no agregar o eliminar propiedades

Object.seal(persona5);
persona5.direccion = 'Quito';
delete persona5.nombre;
console.log(persona5)

//Nota:

//Impresión de los valores de un objecto

let personaArray = Object.values(persona5);
console.log(personaArray);

let personaString = JSON.stringify(persona5);
//JSON es una notacion, es un objeto
//stringify convertir a cadena o string cada propiedad 
console.log(personaString);

//METODOS SE usan a manera de buenas practicas
//que permite aceder y modificar objetos
//Acceder a los valores de las propiedades

let personaGET = {
    nombre:'Ana',
    apellido:'CARRS',
    edad:23,
    get nombreCompleto (){ // no es una propiedad es ahora un metodo get
        return this.nombre +''+this.apellido
    }
}

//Metodo set
//establecer o modifucar los valores de los atributos o los objetos


//validacion 

let personaSET = {

    nombre:'Ana',
    apellido:'CARRS',
    edad:23,
    idioma:'Espanol',
    get lang(){
        return this.idioma.toUpperCase();
    },
    get nombreCompleto (){ // no es una propiedad es ahora un metodo get
        return this.nombre +''+this.apellido
    },
    set lang(lang){
        this.idioma= this.lang.toUpperCase();
    }
}

console.log(personaSET);
personaSET.lang='en';
console.log(personaSET.lang);

let personaSET2 = {
    nombre:'Ana',
    apellido:'CARRS',
    edad:23,
    idioma:'Espanol',
     nombreCompleto:function (){ // no es una propiedad es ahora un metodo get
        return this.nombre +''+this.apellido
    },
}

console.log(personaSET2);
personaSET.lang='en';
console.log(personaSET2.lang);

//constructor en JS

//si desea crear más objetos del mismo tipo esto no es posible
//es por ello que se crean constructores

function PersonaFC(nombre,apellido,email){
    this.nombre=nombre;
    this.apellido=apellido;
    this.email=email;
}

let padreFC = new PersonaFC('AAACW', 'AAAEDCE', 'QQVEE');//la variable ya no es variable, ahora es metodo que nos permite crear la función persona
console.log(padreFC);

let madreFC = new PersonaFC('QFWEFDVERE','MUUJER','Carla@gmail.com');//la variable ya no es variable, ahora es metodo que nos permite crear la función persona
console.log(madreFC);

padreFC.tel=1332412244;

console.log(padreFC);

//agregar metodo a una función conastructora

function PersonaFCM(nombre,apellido,email){
    this.nombre=nombre;
    this.apellido=apellido;
    this.email=email;
    this.nombreCompleto = function(){
        return this.nombre+' '+ this.apellido;
    }
}
let padreFCM = new PersonaFCM('QFWEFDVERE','MUUJER','Carla@gmail.com');//la variable ya no es variable, ahora es metodo que nos permite crear la función persona
console.log(padreFCM.nombreCompleto())

let madreFCM = new PersonaFCM('qqqqqqqqqqE','MUUJER','Carla@gmail.com');//la variable ya no es variable, ahora es metodo que nos permite crear la función persona
console.log(madreFCM.nombreCompleto())
//USO DE PROTOTYPE

PersonaFCM.prototype.telefono="111111111111111";
console.log(padreFCM)
console.log(madreFCM)


let personaCALL2 = {
    nombre:'Ana',
    apellido:'CARRS',
     nombreCompleto:function (){ // no es una propiedad es ahora un metodo get
        return this.nombre +' '+this.apellido
    }
}


let personaCALL1 = {
    nombre:'Harry',
    apellido:'CARRS'
}

//metodo call

console.log(personaCALL2.nombreCompleto());

console.log(personaCALL2.nombreCompleto.call(personaCALL1));

//como pasar los parametros a traves de call

let personaCALLp1 = {
    nombre:'Ana',
    apellido:'CARRS',
     nombreCompleto:function (titulo, telefono){ // no es una propiedad es ahora un metodo get
        return titulo+' '+ this.nombre +' '+this.apellido +' '+telefono;

    }}

let personaCALLp2 = {
    nombre:'    qaqqa',
    apellido:'CARRS',
    
        }

console.log(personaCALLp1.nombreCompleto('lic','111111111'))

console.log(personaCALLp1.nombreCompleto.call(personaCALLp2,'qqq','33333333333'))


let personaapply1 = {
    nombre:'Ana',
    apellido:'CARRS',
     nombreCompleto:function (titulo, telefono){ // no es una propiedad es ahora un metodo get
        return titulo+' '+ this.nombre +' '+this.apellido +' '+telefono;

    }}

let personaapply2 = {
    nombre:'    qaqqa',
    apellido:'CARRS',
}

console.log(personaapply1.nombreCompleto('lic','111111111'))

console.log(personaapply1.nombreCompleto.apply(personaapply2,['ing','222222222']))