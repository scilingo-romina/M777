var usuarioIngresado = prompt("Ingrese su usuario:");


var contrasenaIngresada = prompt("Ingrese su contraseña:");


if ((usuarioIngresado === "admin" && contrasenaIngresada === "1234") || (usuarioIngresado !== "admin" && contrasenaIngresada === "5678")) {
    alert("Bienvenido " + usuarioIngresado);
} else {
    alert("ERROR, usuario y/o contraseña inválidos");
}