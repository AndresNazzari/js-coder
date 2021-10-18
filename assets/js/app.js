/*************************************/
/***** EJERCICIO DESAFIO CLASE 4 y 5 *****/

/**************************************************************
*        ENTIDAD
***************************************************************/
class producto {
    constructor(nombre, costo, tipoIva, iva, precio) {
        this.nombre = nombre;
        this.costo = costo;
        this.tipoIva = tipoIva;
        this.iva = iva;
        this.precio = precio;
    }
}

/**************************************************************
*        VARIABLES Y CONSTANTES
***************************************************************/
const IVA105 = 0.105;
const IVA21 = 0.21;
let productos = [{ nombre: "gatito", costo: 1000, tipoDeIva: 0.21, iva: 210, precio: 1210 }, { nombre: "gatito mas lindo", costo: 100, tipoDeIva: 0.21, iva: 21, precio: 121 }, { nombre: "mega gatito", costo: 200, tipoDeIva: 0.21, iva: 42, precio: 242 }];
/*{ nombre: "c", costo: 1000, tipoDeIva: 0.21, iva: 210, precio: 1210 }, { nombre: "z", costo: 100, tipoDeIva: 0.21, iva: 21, precio: 121 }, { nombre: "a", costo: 200, tipoDeIva: 0.21, iva: 42, precio: 242 }*/

/**************************************************************
*        FUNCIONES
***************************************************************/
function agregarProducto() {
    console.log("funcion agregarProducto")
    let nombre = prompt("Ingrese el nombre del nuevo producto")
    let costo = parseInt(prompt("Ingrese el costo del producto para poder calcular el precio final"))
    let tipoDeIva = parseInt(prompt("Ingrese 1 si el iva es 10,5% o 2 si el iva es 21%"))
    while (isNaN(costo) || isNaN(tipoDeIva) || tipoDeIva < 1 || tipoDeIva > 2) {
        if (isNaN(costo)) {
            alert("Debe ingresar un numero para el costo");
            costo = parseInt(prompt("Ingrese el costo del producto para poder calcular el precio final"));
        } else if (isNaN(tipoDeIva) || tipoDeIva < 1 || tipoDeIva > 2) {
            alert("El valor ongresado para el tipo de iva debe ser 1 o 2.");
            tipoDeIva = parseInt(prompt("IngreIngrese 1 si el iva es 10,5% o 2 si el iva es 21%"));
        }
    };
    /*Calcular el IVA*/
    let iva = costo * (tipoDeIva == 1 ? IVA105 : IVA21).toFixed(2);
    /*Calcular el precio dependiendo del iva*/
    let precio = costo + iva;
    /*Agrega el producto al array*/
    productos.push(new producto(nombre, costo, tipoDeIva == 1 ? IVA105 : IVA21, iva, precio));
    console.log(productos);

    const ultimoAltaContainer = document.querySelector("#ultimoAltaContainer")
    if (ultimoAltaContainer != null) {
        limpiarUltimoAlta(ultimoAltaContainer);
    }

    const h2 = document.createElement("h2")
    h2.textContent = `Ultimo porducto ingresado ${nombre}`
    ultimoAltaContainer.appendChild(h2)

    const pcosto = document.createElement("p")
    pcosto.textContent = `El costo del produto es $${costo}`
    ultimoAltaContainer.appendChild(pcosto)

    const pprecio = document.createElement("p")
    pprecio.textContent = `El precio del produto es $${precio}`
    ultimoAltaContainer.appendChild(pprecio)
}

function limpiarUltimoAlta(ultimoAltaContainer) {
    while (ultimoAltaContainer.firstChild) {
        ultimoAltaContainer.removeChild(ultimoAltaContainer.firstChild);
    }
}

function ordenadosNombre() {
    productos.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1
        }
        if (a.nombre < b.nombre) {
            return -1
        }
        return 0
    })
    console.log("Productos ordenados por Nombre");
    console.log(productos)
}

function calcularTotales() {
    let precioTotal = 0
    let costoTotal = 0
    productos.forEach(obj => {
        precioTotal = precioTotal + obj.precio;
    });
    productos.forEach(obj => {
        costoTotal = costoTotal + obj.costo;
    });
    console.log(`El Costo total de los productos es ${costoTotal}`);
    console.log(`El Precio total de los productos es ${precioTotal}`);
}

function imprimir() {
    if (productos.length > 0) {
        ordenadosNombre();
        calcularTotales();
        const tarjetas = document.querySelector("#tarjetas");
        tarjetas.setAttribute("class", "d-flex")
        productos.forEach(item => {
            const card = document.createElement("div")
            card.setAttribute("class", "card")
            card.setAttribute("style", "width: 18rem;")

            const img = document.createElement("img")
            img.setAttribute("src", "http://placekitten.com/200/200")
            img.setAttribute("class", "card-img-top")

            const cardBody = document.createElement("div")
            cardBody.setAttribute("class", "card-body")

            const h5 = document.createElement("h5")
            h5.setAttribute("class", "card-title")
            h5.innerHTML = item.nombre

            const pTarjeta = document.createElement("p")
            pTarjeta.setAttribute("class", "card-text")
            pTarjeta.innerHTML = `Precio $${item.precio}`

            cardBody.appendChild(h5)
            cardBody.appendChild(pTarjeta)
            card.appendChild(img)
            card.appendChild(cardBody)
            tarjetas.appendChild(card)

            /*<div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class ="card-body">
                    <h5 class ="card-title">Card title</h5>
                    <p class ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class ="btn btn-primary">Go somewhere</a>
                </div>
            </div >*/

        })

    } else {
        alert("No hay productos para mostrar");
    }
}


/**************************************************************
*        LOGICA
***************************************************************/
document.querySelector("#cargarProducto").addEventListener("click", () => {
    agregarProducto()
})

document.querySelector("#imprimir").addEventListener("click", () => {
    imprimir()
})






/*************************************/
/***** EJERCICIO DESAFIO CLASE 4 *****/
/* Consigna: codifica al menos tres funciones cuyas instrucciones permitan resolver un problema particular, segmentado en tareas.
La información a procesar debe ser ingresada por el usuario, y el resultado del procesamiento visualizado en una salida.
>>Aspectos a incluir en el entregable:
Archivo HTML y archivo JavaScript referenciados, que incluyan la definición y llamada de al menos tres funciones.*/
/*
const IVA105 = 0.105
const IVA20 = 0.21

function pedirValoresIniciales() {
    costo = parseInt(prompt("Ingrese el costo del producto para poder calcular el precio final"))
    tipoDeIva = parseInt(prompt("Ingrese 1 si el iva es 10,5% o 2 si el iva es 21%"))
    while (isNaN(costo) || isNaN(tipoDeIva) || tipoDeIva < 1 || tipoDeIva > 2) {
        if (isNaN(costo)) {
            alert("Debe ingresar un numero para el costo");
            costo = parseInt(prompt("Ingrese el costo del producto para poder calcular el precio final"));
        } else if (isNaN(tipoDeIva) || tipoDeIva < 1 || tipoDeIva > 2) {
            alert("El valor ongresado para el tipo de iva debe ser 1 o 2.");
            tipoDeIva = parseInt(prompt("IngreIngrese 1 si el iva es 10,5% o 2 si el iva es 21%"));
        }
    };
    let resp = [costo, tipoDeIva]
    return resp
}

function calcularIva(costoIva) {
    let iva
    if (costoIva[1] == 1) {
        iva = costoIva[0] * IVA105
        return iva
    } else if (costoIva[1] == 2) {
        iva = costoIva[0] * IVA20
        return iva
    }
}
function calcularPrecio(costoIva, iva) {
    let precio = costoIva[0] + iva
    return precio
}
function main() {
    costoIva = pedirValoresIniciales()
    iva = calcularIva(costoIva)
    precio = calcularPrecio(costoIva, iva)
    alert(`El costo del producto ingresado es ${costoIva[0]}, y de acuerdo al tipo de iva indicado, el iva es de ${iva} y el precio final es ${precio}`)
}



main();


*/


/*************************************/
/***** EJERCICIO DESAFIO CLASE 3 *****/
/* Ejemplo:
Pedir número mediante prompt y sumarle otro número en cada repetición, realizando una salida por cada resultado
Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.
Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada*/
/*
let numeroBase = parseInt(prompt("Ingrese un numero"));
let numeroRepeticiones = parseInt(prompt("Ingrese cuantas veces quiere sumarle algun valor al numero anterior"));

while (isNaN(numeroBase) || isNaN(numeroRepeticiones)) {
    if (isNaN(numeroBase)) {
        alert("Debe ingresar un numero para el Numero Base");
        numeroBase = parseInt(prompt("Ingrese un numero Base"));
    } else if (isNaN(numeroRepeticiones)) {
        alert("Debe ingresar un numero para la cantidad de repeticiones");
        numeroBase = parseInt(prompt("Ingrese un la cantidad de repeticiones"));
    }
};

for (let i = 0; i < numeroRepeticiones; i++) {
    let numeroSumar = parseInt(prompt("Ingrese un cuanto le quiere sumar al numero"));
    while (isNaN(numeroSumar)) {
        alert("Debe ingresar un numero");
        numeroSumar = parseInt(prompt("Ingrese un cuanto le quiere sumar al numero"));
    };
    resultado = numeroBase + numeroSumar
    iteracionesRestantes = numeroRepeticiones - i - 1
    alert(`El numero Base ingresado era ${numeroBase}, en esta iteracion se le sumo ${numeroSumar}. Quedan ${iteracionesRestantes} iteraciones.`)
}
alert(`El numero Base ingresado era ${numeroBase}, hubo ${iteracionesRestantes} iteraciones. El resultado final fue ${resultado}`)

*/

/*************************************/
/***** EJERCICIO DESAFIO CLASE 2 *****/
/*
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
    if (palabra == "Hola") {
        alert("La palabra ingresada es Hola")
    } else {
        alert("La palabra no coincide con el registro")
    }
}

/*devolucion: Hola Andres, buen trabajo, te hubieras podido ahorrar codigo poniendo: while (isNaN(respuesta) && respuesta < 1 && respuesta > 2)*/



/*************************************/
/***** EJERCICIO DESAFIO CLASE 1******/
/*
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