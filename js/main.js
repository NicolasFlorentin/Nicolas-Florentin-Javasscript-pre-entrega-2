const info = {nombre_del_desconocido:"???", nombre_del_usuario:"???",};

alert(info.nombre_del_desconocido + ": " + "hola");

alert(info.nombre_del_usuario + ": " + "¿hola? ¿con quien estoy hablando?");

alert(info.nombre_del_desconocido + ": " + "eso no importa ahora, ¿solo dime? ¿cual es tu nombre?");

let tu_nombre = prompt("esta persona quiere saber tu nombre");

alert(tu_nombre + ": " + "me llamo " + tu_nombre + " ahora dime quien eres tu");

alert("???: puedes llamarme como tu quieras");

let incognito = prompt("esta persona quiere que le pongas un apodo");

alert(tu_nombre + ": " + " okey, voy a llamarte " + incognito);

alert(incognito + ": " + " perfecto voy a ser " + incognito);

alert(tu_nombre + ": " + " okey " + incognito + " quiero irme de aqui asi que si no me dices que es especificamente lo que quieres me largo");

alert(incognito + ": " + " bueno, me presento de una forma mas formal... Soy el dios de las matematicas y te elegi a ti para jugar un pequeño juego");

function despedida(a1, a2, a3, a4, a5, a6, a7){

    alert(a1 + " " + a2 + " " + a3 + " " + a4 + " " + a5 + " " + a6 + " " + a7)

    despedida(rechazo, amenaza, incomodida, incomodida2, incomodida3, peticion, pregunta);
}

let rechazo = alert(tu_nombre + ": " + " no gracias, no tengo intenciones de jugar a nada, me largo");

let amenaza = alert(incognito + ": " + " ¿crees que puedes salir de aqui?, intentalo");

let incomodida = alert(tu_nombre + ": " + "...");

let incomodida2 = alert(tu_nombre + ": " + "...");

let incomodida3 = alert(tu_nombre + ": " + "Mmm");

let peticion = alert(incognito + ": " + "por favor has lo que te digo");

let pregunta = alert(incognito + ": " + "¿jugamos?");

const holas = [incognito + ": " + "\n" + "hola" + "\n" + "hola" + "\n" + "hola" + "\n" + "hola" + "\n" + "hola"];

const holasFinales = holas.slice(0, 4);

alert(holasFinales);

alert(tu_nombre + ": " + "¡QUIERO IRME DE AQUI!");

alert(incognito + ": " + "solo tienes 2 opciones:");

let opciones = prompt(incognito + ": " + "para jugar escribe SI");

while(opciones != "SI"){

    if (opciones.toUpperCase() == "SI"){
        alert("Perfecto... JUGUEMOS");
        break;
    }

    alert(incognito + ": " + "no es la respuesta correcta :)");
    opciones = prompt(incognito + ": " + "intenta de nuevo");
}

alert(tu_nombre + ": " + "okey, juguemos tu maldito juego");

alert(incognito + ": " + "vamos a dejar que eligas un numero:");

let numeroingresado1 = prompt("escribe un numero");

alert(incognito + ": " + "ahora escribe otro numero");

let numeroingresado2 = prompt("escribe un numero");

alert(incognito + ": " + "perfecto, ahora" + " ¿" + "cuanto es " + numeroingresado1 + " x " + numeroingresado2 + "? ");

let respuesta1 = numeroingresado1 * numeroingresado2;

let incognita = prompt(incognito + ": " + "solo hay una respuesta...");

while(incognita != respuesta1){

    if (incognita.toUpperCase() == respuesta1){
        alert("Perfecto");
        break;
    }

    alert(incognito + ": " + "no es la respuesta correcta :)");
    incognita = prompt(incognito + ": " + "intenta otra vez");
}

alert(incognito + ": " + "perfecto, ahora hagamos el siguente juego");

alert(tu_nombre + ": " + "okey");

function asignarOperacion(tipoOperacion) {
    if (tipoOperacion == "suma") {
        return (a, b) => a + b;
    } else if (tipoOperacion == "resta") {
        return (a, b) => a - b;
    } else if (tipoOperacion == "multiplicacion") {
        return (a, b) => a * b;
    } else if (tipoOperacion == "division") {
        return (a, b) => a / b;
    } else {
        return 0;
    }
}

let respuesta3 = parseFloat(prompt(incognito + ": " + "escribe un nuevo numero:"));

alert(incognito + ": " + "okey, ahora otro numero");

let respuesta4 = parseFloat(prompt("Ingrese su numero:"));

const operacionSuma = asignarOperacion("suma");

let valor = operacionSuma(respuesta3, respuesta4);

alert(incognito + ": " + "esos dos numeros se acaban de sumar y el resultado es este: " + valor  + " ahora vas a tener que saber cuanto es multiplicar este numero por 3");

let superrespuesta = valor * 3;

let supervalor = prompt("¿cuanto es? " + valor + " x " + 3);

while(supervalor != superrespuesta){

    if (supervalor.toUpperCase() == superrespuesta){
        alert("Perfecto");
        break;
    }

    alert(incognito + ": " + "no es la respuesta correcta :)");
    supervalor = prompt(incognito + ": " + "intenta de nuevo");
}

alert("genial, te felicito ya eres libre")