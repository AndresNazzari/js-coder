
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let edad = parseInt(prompt("Ingrese su edad"));


while (isNaN(edad)) {
    alert("Debe ingresar un numero");
    edad = parseInt(prompt("Ingrese su edad"));
};

mensaje = `Su nombre es ${nombre} ${apellido} y tiene ${edad} años`;
alert(mensaje);