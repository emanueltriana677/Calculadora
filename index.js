function suma() {
    let num1 = parseFloat(document.getElementById("valor1").value);
    let num2 = parseFloat(document.getElementById("valor2").value);

    let resultado = num1 + num2;

    document.getElementById("resultado").innerHTML = resultado;
}

function resta() {
    let num1 = parseFloat(document.getElementById("valor1").value);
    let num2 = parseFloat(document.getElementById("valor2").value);

    let resultado = num1 - num2;

    document.getElementById("resultado").innerHTML = resultado;
}

function multiplicacion() {
    let num1 = parseFloat(document.getElementById("valor1").value);
    let num2 = parseFloat(document.getElementById("valor2").value);

    let resultado = num1 * num2;

    document.getElementById("resultado").innerHTML = resultado;
}

function division() {
    let num1 = parseFloat(document.getElementById("valor1").value);
    let num2 = parseFloat(document.getElementById("valor2").value);

    if (num2 === 0) {
        document.getElementById("resultado").innerHTML = "No se puede dividir por 0";
    } else {
        let resultado = num1 / num2;
        document.getElementById("resultado").innerHTML = resultado;
    }
}