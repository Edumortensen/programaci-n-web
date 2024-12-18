// TALLER EN CLASE

const estudiantes = [
    { nombre: "Ana", calificaciones: [14, 16, 18, 10] },
    { nombre: "Luis", calificaciones: [12, 13, 11, 5] },
    { nombre: "Carla", calificaciones: [8, 9, 10, 15] },
    { nombre: "Juan", calificaciones: [6, 7, 5, 5] },
    { nombre: "Sofía", calificaciones: [17, 19, 20, 10] },
    { nombre: "Pedro", calificaciones: [10, 11, 9, 15] },
    { nombre: "Elena", calificaciones: [15, 14, 16, 5] },
    { nombre: "Mario", calificaciones: [7, 8, 6, 10] },
    { nombre: "Sara", calificaciones: [18, 17, 19, 15] },
    { nombre: "Diego", calificaciones: [13, 14, 12, 5] },
  ];
  
  for (let i = 0; i < estudiantes.length; i++) {
    const calificaciones = estudiantes[i].calificaciones;
    let suma = 0;
    for (let j = 0; j < calificaciones.length; j++) {
      suma += calificaciones[j];
    }
    const promedio = suma / calificaciones.length;
    let clasificacion;
    if (promedio >= 16)
        { 
        clasificacion = "Excelente";
    }
    else if (promedio >= 12) 
        {
            clasificacion = "Bueno";
        }
    else if (promedio >= 8)
        {
            clasificacion = "Aprobado";
        } 
    else 
    {
        clasificacion = "Reprobado";
    }
    estudiantes[i].promedio = promedio;
    estudiantes[i].clasificacion = clasificacion;
  }
 
  for (let i = 0; i < estudiantes.length; i++) 
    {
    const calificaciones = estudiantes[i].calificaciones;
    let maxCalif = calificaciones[0];
    let minCalif = calificaciones[0];
    for (let j = 1; j < calificaciones.length; j++) {
      if (calificaciones[j] > maxCalif) 
        {
            maxCalif = calificaciones[j];
        }
      else if (calificaciones[j] < minCalif)
        {
            minCalif = calificaciones[j];
        } 
    }
    estudiantes[i].maxCalif = maxCalif;
    estudiantes[i].minCalif = minCalif;
  }

  let peorPromedio = estudiantes[0];
  let mejorPromedio = estudiantes[0];
  for (let i = 1; i < estudiantes.length; i++) 
    {
    if (estudiantes[i].promedio < peorPromedio.promedio)
        { 
            peorPromedio = estudiantes[i];
        }
    if (estudiantes[i].promedio > mejorPromedio.promedio)
        { 
            mejorPromedio = estudiantes[i];
        }
  }
  
  console.log("Resultados de los estudiantes:");
  for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`Calificaciones:`, estudiante.calificaciones);
    console.log(`Promedio:`, estudiante.promedio);
    console.log(`Clasificación: ${estudiante.clasificacion}`);
    console.log(`Máxima calificación: ${estudiante.maxCalif}`);
    console.log(`Mínima calificación: ${estudiante.minCalif}`);
    console.log("------------------------------------------");
  }
  
  console.log("Estudiante con peor promedio:", peorPromedio);
  console.log("Estudiante con mejor promedio:", mejorPromedio);
  