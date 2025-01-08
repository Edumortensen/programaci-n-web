const inventario = {
    manzanas: { nombre: "Manzanas", precio: 1.2, cantidad: 100 },
    naranjas: { nombre: "Naranjas", precio: 1.5, cantidad: 80 },
    platanos: { nombre: "Plátanos", precio: 1.0, cantidad: 120 },
    peras: { nombre: "Peras", precio: 1.8, cantidad: 60 }
};

Object.seal(inventario);

function venderProducto(nombre, cantidad) {
    const producto = inventario[nombre];
    if (!producto) {
        console.log(`Error: El producto "${nombre}" no existe en el inventario.`);
        return;
    }
    if (producto.cantidad < cantidad) {
        console.log(`Error: No hay suficiente stock de "${nombre}". Stock disponible: ${producto.cantidad}.`);
        return;
    }
    if (producto.precio <= 0) {
        console.log(`Error: El precio del producto "${nombre}" no es válido para realizar una venta.`);
        return;
    }
    const valorCompra = producto.precio*0.9*cantidad;

    producto.cantidad -= cantidad;
    console.log(`Venta realizada: ${cantidad} unidad(es) de "${nombre}" vendidas. Valor total: $${valorCompra.toFixed(2)}. Stock restante: ${producto.cantidad}.`);
}

function aplicarDescuento(porcentaje) {
    const descuento = porcentaje / 100;
    for (const clave in inventario) {
        const producto = inventario[clave];
        producto.precio -= producto.precio * descuento;
        if (producto.precio < 0) {
            console.log("precio invalido")
            producto.precio = 0;
        }
    }
    console.log(`Descuento del ${porcentaje}% aplicado a todos los productos.`);
}

console.log("Inventario inicial:");
console.log(inventario);

venderProducto("manzanas", 10);
venderProducto("naranjas", 54); 
venderProducto("uvas", 22); 
aplicarDescuento(10);
venderProducto("platanos", 10); 

console.log(inventario);

