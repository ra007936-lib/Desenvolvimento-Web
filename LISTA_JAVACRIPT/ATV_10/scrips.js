function calcularSoma(){
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);

    let soma = n1 + n2;

    document.getElementById("resultadoCalculo").innerText = soma;
}

function calcularSubtracao(){
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);

    let subtracao = n1 - n2;

    document.getElementById("resultadoCalculo").innerText = subtracao;
}

function calcularMultiplicacao(){
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);

    let multiplicacao = n1 * n2;

    document.getElementById("resultadoCalculo").innerText = multiplicacao;
}

function calcularDivisao(){
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);

    let divisao = n1 / n2;

    document.getElementById("resultadoCalculo").innerText = divisao;
}