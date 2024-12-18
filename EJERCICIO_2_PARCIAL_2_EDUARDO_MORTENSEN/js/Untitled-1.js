// Lista inicial de estudiantes con sus nombres y calificaciones
const estudiantes = [
    { nombre: "Ana", calificaciones: [14, 16, 18] },
    { nombre: "Luis", calificaciones: [12, 13, 11] },
    { nombre: "Carla", calificaciones: [8, 9, 10] },
    { nombre: "Juan", calificaciones: [6, 7, 5] },
    { nombre: "Sofía", calificaciones: [17, 19, 20] },
    { nombre: "Pedro", calificaciones: [10, 11, 9] },
    { nombre: "Elena", calificaciones: [15, 14, 16] },
    { nombre: "Mario", calificaciones: [7, 8, 6] },
    { nombre: "Sara", calificaciones: [18, 17, 19] },
    { nombre: "Diego", calificaciones: [13, 14, 12] },
  ];
  
  // Funciones personalizadas para calcular el máximo y mínimo de un array
  const obtenerMaximo = (arr);
  arr.reduce((max, num) => (num > max ? num : max), arr[0]);
  const obtenerMinimo = (arr) => arr.reduce((min, num) => (num < min ? num : min), arr[0]);
  
  // 1. Agregar nuevas calificaciones a los estudiantes
  const nuevasCalificaciones = [5, 10, 15];
  const estudiantesConNuevasCalificaciones = estudiantes.map((estudiante, index) => {
    return {
      ...estudiante,
      calificaciones: [...estudiante.calificaciones, nuevasCalificaciones[index % nuevasCalificaciones.length]],
    };
  });
  
  // 2. Clasificación de los estudiantes
  const estudiantesClasificados = estudiantesConNuevasCalificaciones.map((estudiante) => {
    const promedio = estudiante.calificaciones.reduce((acc, calif) => acc + calif, 0) / estudiante.calificaciones.length;
    let clasificacion;
    if (promedio >= 16) clasificacion = "Excelente";
    else if (promedio >= 12) clasificacion = "Bueno";
    else if (promedio >= 8) clasificacion = "Aprobado";
    else clasificacion = "Reprobado";
  
    return { ...estudiante, promedio, clasificacion };
  });
  
  // 3. Cálculos estadísticos
  const estudiantesConEstadisticas = estudiantesClasificados.map((estudiante) => {
    const maxCalif = obtenerMaximo(estudiante.calificaciones);
    const minCalif = obtenerMinimo(estudiante.calificaciones);
    return { ...estudiante, maxCalif, minCalif };
  });
  
  // 4. Estudiante con peor y mejor promedio
  const peorPromedio = estudiantesConEstadisticas.reduce((peor, actual) => (actual.promedio < peor.promedio ? actual : peor));
  const mejorPromedio = estudiantesConEstadisticas.reduce((mejor, actual) => (actual.promedio > mejor.promedio ? actual : mejor));
  
  // 5. Imprimir resultados
  console.log("Resultados de los estudiantes:");
  estudiantesConEstadisticas.forEach((estudiante) => {
    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`Calificaciones: ${estudiante.calificaciones.join(", ")}`);
    console.log(`Promedio: ${estudiante.promedio.toFixed(2)}`);
    console.log(`Clasificación: ${estudiante.clasificacion}`);
    console.log(`Máxima calificación: ${estudiante.maxCalif}`);
    console.log(`Mínima calificación: ${estudiante.minCalif}`);
    console.log("--------------------------------------");
  });
  
  console.log("Estudiante con peor promedio:", peorPromedio);
  console.log("Estudiante con mejor promedio:", mejorPromedio);
  