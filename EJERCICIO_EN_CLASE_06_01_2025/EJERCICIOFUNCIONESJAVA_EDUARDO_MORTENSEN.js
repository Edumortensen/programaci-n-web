// Función declarada para calcular el promedio
function calcularPromedio(num1, num2, num3) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
        throw new Error('Todos los parámetros deben ser números.');
    }
    return (num1 + num2 + num3) / 3;
}

// Función expresada para determinar el mayor de dos números
const determinarMayor = function(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Ambos parámetros deben ser números.');
    }
    return num1 > num2 ? num1 : num2;
};

// Función flecha para verificar si un número es par
const esPar = (num) => {
    if (typeof num !== 'number') {
        throw new Error('El parámetro debe ser un número.');
    }
    return num % 2 === 0;
};

// Función anónima autoejecutable
(function() {
    try {
        // Valores de ejemplo
        const promedio = calcularPromedio(2, 20, 30);
        console.log(`El promedio es: ${promedio}`);
       
        const mayor = determinarMayor(15, 25);
        console.log(`El número mayor es: ${mayor}`);

        const paridad = esPar(10);
        console.log(`¿El número es par?: ${paridad}`);
    } catch (error) {
        console.error(error.message);
    }
})();