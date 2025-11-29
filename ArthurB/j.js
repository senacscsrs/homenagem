let resultado = document.querySelector("#contexto");

function mostrarInfo(texto) {
    resultado.textContent = texto;
}

let botao1 = document.querySelector("#benhur");
let botao2 = document.querySelector("#ivone");
let botao3 = document.querySelector("#eusebio");

botao1.onclick = function () {
    mostrarInfo("Ben-hur é meu irmão casula. Sempre jogo bola com ele e ajudo a limpar suas cagadas, como colocar terra na pia.");
};

botao2.onclick = function () {
    mostrarInfo("Ivone é minha mãe. Sempre me ensinou a ter cuidado com as coisas e a respeitar os outros.");
};

botao3.onclick = function () {
    mostrarInfo("Eusébio é meu pai. Ele me motiva e ensina a persistir para ser uma pessoa melhor.");
};


