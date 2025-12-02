let resultado = document.querySelector("#contexto");

function mostrarInfo(texto) {
    if (resultado) resultado.textContent = texto;
}

const familiares = [
    { id: "gregori", texto: "Grégori é meu irmão. Gosta de futebol e de música." },
    { id: "rosa", texto: "Rosa é minha mãe. Sempre acolhedora e carinhosa." },
    { id: "cezar", texto: "Cezar é meu pai. Ensina com paciência e bom humor." }
];

familiares.forEach(item => {
    const btn = document.querySelector(`#${item.id}`);
    if (btn) {
        btn.addEventListener("click", () => mostrarInfo(item.texto));
    }
});
botao3.onclick = function () {

    mostrarInfo("Meu pai se chama Cezar. é um pai muito bom, ele e meu vô me ensinaram a pescar,.");

};
