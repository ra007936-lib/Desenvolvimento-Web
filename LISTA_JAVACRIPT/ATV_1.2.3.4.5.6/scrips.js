console.log("Meu primeiro script");

let nome = "Maria";
let idade = "20";
let cidade = "Belo Horizonte";

console.log(nome);
console.log(idade);
console.log(cidade);

console.log(nome,idade,cidade);

let paragrafo = document.getElementById("mensagem");
paragrafo.innerText="JavaScript alterou este texto";

let h2= document.getElementById("titulo");
h2.innerText="Gabriel Soares Martins";
titulo.style.color = "blue";

function saudar(){
    let resposta = document.getElementById("resposta");
    resposta.innerText = "Você clicou no botão!";
    console.log("Olá! O botão foi clicado");
}