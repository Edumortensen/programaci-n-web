// Clase Conductor
class Conductor {
    #licencia;
  
    constructor(nombre, licencia) {
      this.nombre = nombre;
      this.#licencia = licencia;
      this.rutas = [];
    }
  
    registrarRuta(ruta) {
      this.rutas.push(ruta);
    }
  
    obtenerHistorial() {
      return this.rutas;
    }
  }
  
  // Clase Vehículo
  class Vehiculo {
    constructor(modelo, placa, eficienciaCombustible) {
      this.modelo = modelo;
      this.placa = placa;
      this.estado = "disponible";
      this.eficienciaCombustible = eficienciaCombustible; // km/l
    }
  
    asignarConductor(conductor) {
      if (this.estado === "disponible") {
        this.estado = "ocupado";
        console.log(`Conductor ${conductor.nombre} asignado al vehículo ${this.modelo}`);
      } else {
        console.log("Vehículo no disponible");
      }
    }
  
    liberarVehiculo() {
      this.estado = "disponible";
      console.log(`Vehículo ${this.modelo} ahora está disponible.`);
    }
  
    calcularImpactoAmbiental(distancia) {
      const emisiones = (distancia / this.eficienciaCombustible) * 2.4; // kg CO2 aproximados por litro
      console.log(`Impacto ambiental estimado: ${emisiones.toFixed(2)} kg CO2`);
    }
  }
  
  // Clase Ruta
  class Ruta {
    constructor(origen, destino, distancia) {
      this.origen = origen;
      this.destino = destino;
      this.distancia = distancia; // en km
    }
  
    calcularTiempoReal() {
      console.log("Tiempo calculado en base al tráfico actual.");
    }
  
    optimizarRuta() {
      console.log("Ruta optimizada para reducir consumo de combustible.");
    }
  }
  
  // Ejemplo ejecutable
  // Crear un conductor
  const conductor1 = new Conductor("Juan Pérez", "ABCD12345");
  
  // Crear un vehículo
  const vehiculo1 = new Vehiculo("Toyota Corolla", "XYZ-9876", 15); // 15 km/l de eficiencia
  
  // Crear una ruta
  const ruta1 = new Ruta("Quito", "Guayaquil", 420);
  
  // Asignar ruta al conductor
  conductor1.registrarRuta(ruta1);
  
  // Asignar conductor al vehículo
  vehiculo1.asignarConductor(conductor1);
  
  // Mostrar historial de rutas del conductor
  console.log("Historial de rutas del conductor:", conductor1.obtenerHistorial());
  
  // Calcular impacto ambiental de la ruta
  vehiculo1.calcularImpactoAmbiental(ruta1.distancia);
  
  // Liberar el vehículo
  vehiculo1.liberarVehiculo();
  
  