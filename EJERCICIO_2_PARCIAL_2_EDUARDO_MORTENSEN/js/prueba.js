// Clase para inventario
class Inventario {
    constructor() {
        this.productos = []; // array vacío para productos
    }

    //agregar un producto al inventario
    agregarProducto(nombre, precio, cantidad, categoria) {
        this.productos.push({ nombre, precio, cantidad, categoria }); // Se agrega un producto al array
    }

    //  ordenar productos de menor a mayor precio
    listarProductosAscendente() {
        return this.productos.sort((a, b) => a.precio - b.precio); // Ordena ascendentemente por precio
    }

    //ordenar productos de mayor a menor precio
    listarProductosDescendente() {
        return this.productos.sort((a, b) => b.precio - a.precio); // Ordena descendentemente por precio
    }

    //filtrar productos por categoría
    filtrarPorCategoria(categoria) {
        return this.productos.filter(p => p.categoria === categoria); // Devuelve los productos que coinciden con la categoría
    }
}

// Clase ventas
class Venta {
    constructor() {
        this.ventas = []; // Almacena las ventas realizadas
        this.ingresosTotales = 0; // Total de ingresos generados
        this.productoVentas = {}; // Contador de cantidad vendida por producto
    }

    //realizar una venta
    realizarVenta(inventario, nombreProducto, cantidad) {
        const producto = inventario.productos.find(p => p.nombre === nombreProducto); // Busca el producto en el inventario

        if (!producto) {
            console.error(`Error: Producto "${nombreProducto}" no encontrado.`); // Si no lo encuentra, muestra un error
            return;
        }

        if (producto.cantidad < cantidad) {
            console.error(`Error: Cantidad insuficiente para el producto "${nombreProducto}".`); // Si no hay suficiente cantidad, muestra un error
            return;
        }

        producto.cantidad -= cantidad; // Reduce la cantidad del producto en el inventario
        const totalVenta = producto.precio * cantidad; // Calcula el total de la venta
        this.ingresosTotales += totalVenta; // Suma a los ingresos totales

        // Registra la venta
        this.ventas.push({ producto: nombreProducto, cantidad, totalVenta, fecha: new Date() });
        this.productoVentas[nombreProducto] = (this.productoVentas[nombreProducto] || 0) + cantidad; // Actualiza el contador de ventas por producto
    }

    // aplicar un descuento en productos de alguna categoría
    aplicarDescuento(inventario, categoria, porcentaje) {
        inventario.productos.forEach(producto => {
            if (producto.categoria === categoria) {
                producto.precio *= (1 - porcentaje / 100); // Aplica el descuento sobre el precio
            }
        });
    }

    // generar un reporte de ventas e inventario
    generarReporte(inventario) {
        console.log("-----------Reporte Detallado------------");
        console.log("Inventario actualizado:", inventario.productos);
        console.log("Ventas realizadas:", this.ventas);
        console.log(`Total de ingresos: $${this.ingresosTotales.toFixed(2)}`);
    }
}

const inventario = new Inventario(); // Crea una instancia de Inventario
const ventas = new Venta(); // Crea una instancia de Venta

// imprimir agregarproductos al inventario
inventario.agregarProducto("Laptop", 1000, 10, "Tecnología");
inventario.agregarProducto("Teléfono", 500, 20, "Tecnología");
inventario.agregarProducto("Camiseta", 20, 50, "Ropa");

// imprimir listar productos ordenados por precio
console.log("Productos ascendentemente:", inventario.listarProductosAscendente());
console.log("Productos descendentemente:", inventario.listarProductosDescendente());

// imprimir filtrar productos por categoría
console.log("Productos en la categoría Tecnología:", inventario.filtrarPorCategoria("Tecnología"));

// imprimir realizarventas
ventas.realizarVenta(inventario, "Laptop", 2);
ventas.realizarVenta(inventario, "Camiseta", 5);
ventas.realizarVenta(inventario, "Teléfono", 1);

// imprimirplicar descuento a productos de tecnología
ventas.aplicarDescuento(inventario, "Tecnología", 10);

// imprimir generar reporte
ventas.generarReporte(inventario);

