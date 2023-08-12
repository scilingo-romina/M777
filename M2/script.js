var nombre = prompt("Ingrese su nombre:");


var edad = parseInt(prompt("Ingrese su edad:"));


if (edad >= 18) {
    
    alert("Bienvenido, " + nombre + ". ¡Puede ingresar, es mayor de edad!");
    
} else {
    
    alert("Lo siento, " + nombre + ". No puede ingresar porque es menor de edad.");
}