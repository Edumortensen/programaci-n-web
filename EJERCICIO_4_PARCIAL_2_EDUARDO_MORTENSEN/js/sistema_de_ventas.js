class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio, categoria, stock = 0) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio > 0 ? precio : 'NA';
        this._categoria = categoria;
        this._stock = stock >= 0 ? stock : 'NA';

        if (precio <= 0 || stock < 0) {
            console.log(`El producto "${nombre}" no se ha creado porque tiene precio o stock inválido.`);
        }
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        if (precio > 0) {
            this._precio = precio;
        } else {
            console.log(`El precio del producto "${this._nombre}" no puede ser negativo o cero.`);
        }
    }

    get categoria() {
        return this._categoria;
    }

    set categoria(categoria) {
        this._categoria = categoria;
    }

    get stock() {
        return this._stock;
    }

    set stock(stock) {
        if (stock >= 0) {
            this._stock = stock;
        } else {
            console.log(`El stock del producto "${this._nombre}" no puede ser negativo.`);
        }
    }

    reducirStock(cantidad) {
        if (cantidad > 0 && cantidad <= this._stock) {
            this._stock -= cantidad;
            if (this._stock === 0) {
                console.log(`El producto "${this._nombre}" ha sido eliminado porque se quedó sin stock.`);
            }
        } else {
            console.log(`No hay suficiente stock para el producto: ${this._nombre}`);
        }
    }

    toString() {
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}, categoría: ${this._categoria}, stock: ${this._stock}`;
    }
}

class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto) {
        if (producto._precio === 'NA' || producto._stock === 'NA') {
            console.log(`No se puede agregar el producto "${producto.nombre}" por precio o stock inválido.`);
            return;
        }

        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            if (producto.stock > 0) {
                producto.reducirStock(1); // Disminuye el stock del producto
                this._productos.push(producto);
            } else {
                console.log(`El producto "${producto.nombre}" no tiene suficiente stock y no se puede agregar.`);
            }
        } else {
            console.log('No se pueden agregar más productos a la orden');
        }
    }

    calcularTotal() {
        let totalVenta = 0;
        for (const producto of this._productos) {
            let precioFinal = producto.precio;
            if (producto.categoria === 'electrónica') {
                precioFinal *= 0.9; // 10% de descuento
            }
            totalVenta += precioFinal;
        }
        return totalVenta;
    }

    calcularImpuestos() {
        const totalVenta = this.calcularTotal();
        const impuestos = totalVenta * 0.16;
        return impuestos;
    }

    mostrarOrden() {
        this._productos.sort((a, b) => b.precio - a.precio);

        let productosOrden = '';
        for (const producto of this._productos) {
            productosOrden += `\n{${producto.toString()}}`;
        }

        const totalConImpuestos = this.calcularTotal() + this.calcularImpuestos();

        console.log(`Orden: ${this._idOrden}, Total sin impuestos: ${this.calcularTotal()}, Impuestos: ${this.calcularImpuestos()}, Total con impuestos: ${totalConImpuestos}, Productos: ${productosOrden}`);
    }
}

// Pruebas
let producto1 = new Producto('pantalón', 100, 'ropa', 1);
let producto2 = new Producto('camisa', 200, 'ropa', 5);
let producto3 = new Producto('laptop', 1500, 'electrónica', 2);
let producto4 = new Producto('celular', 800, 'electrónica', 3);
let producto5 = new Producto('reloj', 400, 'accesorios', 4);
let producto6 = new Producto('tablet', -200, 'electrónica', -20); // Producto inválido

let orden1 = new Orden();

orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);

orden1.mostrarOrden();

let orden2 = new Orden();

orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);

orden2.mostrarOrden();

console.log(producto1.toString());
console.log(producto6.toString());


// Descuento por Categoria:
//crear una nueva propiedad categoria en la clase Producto
//los productos de la categoria electronica deben tener un descuento del 10% al calcular el total de la venta
//aplicación de impuestos
//implementar un metodo calcularImpuestos() en la clase orden para que qgrege un impiesto 
//listar los productos de forma descendente 
//restriccion adicional 
//asegurar de que los precios no sean negativos














    //modificador denominado static se utliliza para acceder a traves de la clase

    //los metodos o propiedades estaticas no requieres  que se cree una instancia 

class Calculadora {
    static suma(a,b){
        return a + b;
    }
}

console.log(Calculadora.suma(5,3));
const cal = new Calculadora();


// el modificador static en javascript es una herramienta clave para definir funciones y propiedades compartidas sin necesidad de crear algun tipo de instancia
