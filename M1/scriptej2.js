const ingresoTotalUsuario = parseFloat(prompt("Ingrese el ingreso total:"));

// Verificar si se ingresó un número válido
if (!isNaN(ingresoTotalUsuario) && ingresoTotalUsuario >= 0) {
  calcularPorcentajes(ingresoTotalUsuario);
} else {
  console.log("Por favor, ingrese un monto válido.");
}

function calcularPorcentajes(ingresoTotal) {
    // Calcular los montos en base a los porcentajes
    const gastosNecesarios = ingresoTotal * 0.5;
    const gastosOpcionales = ingresoTotal * 0.3;
    const ahorroInversion = ingresoTotal * 0.2;
  
    // Mostrar los resultados
    console.log(`Gastos necesarios: ${gastosNecesarios}`);
    console.log(`Gastos opcionales: ${gastosOpcionales}`);
    console.log(`Ahorro e inversión: ${ahorroInversion}`);
  }

  