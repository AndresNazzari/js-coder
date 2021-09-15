/* EJERCICIO DESAFIO CLASE 1
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let edad = parseInt(prompt("Ingrese su edad"));


while (isNaN(edad)) {
    alert("Debe ingresar un numero");
    edad = parseInt(prompt("Ingrese su edad"));
};

mensaje = `Su nombre es ${nombre} ${apellido} y tiene ${edad} años`;
alert(mensaje);
*/

/* EJERCICIO DESAFIO CLASE 2 */

let respuesta = parseInt(prompt("Si quiere analizar un numero ingrese '1', si quiere analizar una palabra ingrese '2'"));

while (isNaN(respuesta)) {
    alert("Debe ingresar una opcion valida: 1 o 2");
    respuesta = parseInt(prompt("Si quiere analizar un numero ingrese '1', si quiere analizar una palabra ingrese '2'"))
};

if (respuesta === 1 || respuesta === 2) {
    switch (respuesta) {
        case 1:
            let numero = parseInt(prompt("Ingrese el numero a analizar"))

            while (isNaN(numero)) {
                alert("Debe ingresar unnumero");
                numero = parseInt(prompt("Ingrese el numero a analizar"))
            }

            analizaNumero(numero);
            break
        case 2:
            let palabra = prompt("Ingrese la palabra a analizar")
            analizaPalabra(palabra);
            break
    }
} else {
    alert("Opcion invalida");
}

function analizaNumero(numero) {
    if ((numero >= 10 && numero <= 50) || numero > 100) {
        alert("El numero ingresado esta entre 10 y 50 o es mayor a 1000")
    } else {
        alert("El numero ingresado es menor a 10, o mayor que 50")
    }
}

function analizaPalabra(palabra) {
    if (palabra === "Hola") {
        alert("La palabra ingresada es Hola")
    } else {
        alert("La palabra no coincide con el registro")
    }
}