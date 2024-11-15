"use strict";

let historial = [];

// la funcion calculadora nos permite seleccionar el tipo de operacion que queremos realizar, además también nos permite ver el historial
// en todos los casos ya sea para comprobar el resultado o ver el historial, se debe dar a salir.
function calculadora() {
    let continuar = true;

    while (continuar) {
        let tipo = prompt(`
            Selecciona la operación que deseas realizar:
            1. Suma
            2. Resta
            3. Multiplicación
            4. División
            5. Raíz Cuadrada
            6. Ver Historial
            7. Salir
        `);

        if (tipo === '7') {
            continuar = false;
            console.log("Calculadora cerrada.");
            break;
        } else if (tipo === '6') {
            mostrarHistorial();
            continue;
        }

        let num1 = validarInput("Introduce el primer número:");
        let num2 = (tipo !== '5') ? validarInput("Introduce el segundo número:") : null;

        operacion(num1, num2, tipo);
    }
}
//la función validarInput sirve para validar los inputs de los usuarios, es decir, para asegurarse de que el usuario haya introducido un número.
function validarInput(mensaje) {
    let numero;
    do {
        numero = prompt(mensaje);
        if (isNaN(numero) || numero === null || numero === "") {
            console.log("Número inválido, por favor introduce un número válido.");
        }
    } while (isNaN(numero) || numero === null || numero === "");
    return parseFloat(numero);
}

//la función operacion sirve para realizar las operaciones matemáticas que el usuario desee.
function operacion(num1, num2, tipo) {
    let resul;

    switch (tipo) {
        case '1':
            resul = num1 + num2;
            console.log(`Resultado de la suma: ${resul}`);
            break;
        case '2':
            resul = num1 - num2;
            console.log(`Resultado de la resta: ${resul}`);
            break;
        case '3':
            resul = num1 * num2;
            console.log(`Resultado de la multiplicación: ${resul}`);
            break;
        case '4':
            if (num2 === 0) {
                console.log("Error: No se puede dividir entre cero.");
                return; 
            }
            resul = num1 / num2;
            console.log(`Resultado de la división: ${resul}`);
            break;
        case '5':
            if (num1 < 0) {
                console.log("Error: No se puede calcular la raíz cuadrada de un número negativo.");
                return; 
            }
            resul = Math.sqrt(num1);
            console.log(`Resultado de la raíz cuadrada: ${resul}`);
            break;
        default:
            console.log("Operación no válida. Por favor, selecciona una opción válida.");
            return;
    }
    // si la operación se ha realizado correctamente vuelve al menu del prompt permitiendo volver a realizar una operación
    //todas ellas se guardan en el historial.
    guardarHistorial({ operacion: tipo, num1, num2, resul });
}

function guardarHistorial(operacion) {
    historial.push(operacion);
}
// la función mostrarHistorial muestra el historial de operaciones realizadas, si no hay operaciones muestra un mensaje.
function mostrarHistorial() {
    if (historial.length === 0) {
        console.log("No hay operaciones en el historial.");
    } else {
        console.log("Historial de operaciones:");
        for (let i = 0; i < historial.length; i++) {
            let op = historial[i];
            console.log(`${i + 1}. Operación: ${operacionEscrita(op.operacion)}, Números: ${op.num1}, ${op.num2 !== null ? op.num2 : ''}, Resultado: ${op.resul}`);
        }
    }
}
// la función operacionEscrita devuelve una cadena con la operación realizada.
function operacionEscrita(tipo) {
    switch (tipo) {
        case '1': return "Suma";
        case '2': return "Resta";
        case '3': return "Multiplicación";
        case '4': return "División";
        case '5': return "Raíz Cuadrada";
        default: return "Desconocida";
    }
}


calculadora();
