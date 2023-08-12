function calcularPuntoEquilibrio() {
    var costosFijos = parseFloat(prompt("Ingrese los costos fijos:"));
    var precioVenta = parseFloat(prompt("Ingrese el precio de venta:"));
    var costosVariables = parseFloat(prompt("Ingrese los costos variables:"));

    if (isNaN(costosFijos) || isNaN(precioVenta) || isNaN(costosVariables)) {
        console.log("Por favor ingrese valores numéricos válidos.");
        return;
    }

    var puntoEquilibrio = costosFijos / (precioVenta - costosVariables);
    console.log("El punto de equilibrio es: " + puntoEquilibrio);
}

calcularPuntoEquilibrio();