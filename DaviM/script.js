// Espera o HTML carregar antes de rodar o JS (Boa prática)
document.addEventListener('DOMContentLoaded', function() {

    // --- VETOR (Array) ---
    // Lista de nomes e momentos especiais
    const nomesFamiliares = ["Gabriela (Mãe)", "Miguel (Pai)", "Bibiana (Irmã)", "Anita (Irmã)", "Fiapo (Cachorro)"];
    const momentosEspeciais = [
        "Viagens a praia",
        "Almoços em familia",
        "Risadas com vocês",
        "Noites de jogos", 
    ];

    // --- MATRIZ ---
    // Matriz com [nome, parentesco]
    const matrizFamilia = [
        ["Gabriela", "Mãe"],
        ["Miguel", "Pai"],
        ["Bibiana", "Irmã Mais Velha"],
        ["Anita", "Irmã"],
        ["Fiapo", "Cachorro"]
    ];
    // Mostrando a matriz no console
    console.log("--- Minha Matriz Familiar ---");
    console.table(matrizFamilia); // .table deixa visualmente melhor no console

    // --- OBJETO ---
    // Objeto representando um membro da família
    const objPai = {
        nome: "Miguel",
        parentesco: "Pai",
        caracteristica: "Batalhador e legal",
        mostrarDescricao: function() {
            console.log(`Meu pai é o ${this.nome}, ele é ${this.caracteristica}.`);
        }
    };
    // Usando o objeto
    console.log("--- Meu Objeto (Pai) ---");
    console.log(objPai.nome);
    objPai.mostrarDescricao();


    // --- FOR (Loop) e DOM (createElement, innerText, appendChild) ---
    // Usando o 'FOR' para percorrer o vetor 'momentosEspeciais' e adicionar na lista (ul)
    const listaHtml = document.getElementById('lista-momentos');

    for (let i = 0; i < momentosEspeciais.length; i++) {
        // Criando um elemento novo <li>
        let itemLista = document.createElement('li');
        // Adicionando texto ao <li>
        itemLista.innerText = momentosEspeciais[i];
        // Adicionando o <li> dentro da <ul>
        listaHtml.appendChild(itemLista);
    }

    // --- IF / ELSE, EVENTOS (addEventListener) e DOM (.style, .classList) ---
    // Pegando o botão e o parágrafo da mensagem
    const btnMensagem = document.getElementById('btn-mensagem');
    const pMensagem = document.getElementById('mensagem-secreta');

    // Adicionando um "ouvinte de evento" de clique
    btnMensagem.addEventListener('click', function() {
        // Verificando se a mensagem está visível (usando a classe)
        // IF / ELSE
        if (pMensagem.classList.contains('mensagem-escondida')) {
            // Se estiver escondida, mostra
            pMensagem.classList.remove('mensagem-escondida');
            // Alterando o estilo com .style
            pMensagem.style.color = 'darkblue';
            console.log("Mensagem secreta MOSTRADA");
        } else {
            // Se estiver visível, esconde
            pMensagem.classList.add('mensagem-escondida');
            console.log("Mensagem secreta ESCONDIDA");
        }
    });

    // --- WHILE (Loop) ---
    // Exemplo simples para o console
    console.log("--- Loop WHILE ---");
    let contador = 1;
    while (contador <= 3) {
        console.log(`Fato legal #${contador} sobre minha família: Somos muito unidos!`);
        contador++; // Incrementa o contador para evitar loop infinito
    }

}); // Fim do 'DOMContentLoaded'


// --- SWITCH, DOM (innerHTML) e EVENTOS (onclick no HTML) ---
// Esta função é chamada pelos botões (onclick) no HTML
function mostrarMensagem(nome) {
    const pResultado = document.getElementById('resultado-switch');
    let mensagem = "";

    // SWITCH para escolher a mensagem
    switch (nome) {
        case 'Gabriela':
            mensagem = "Mãe, obrigado por ser tão querida e se importar tanto comigo!";
            break;
        case 'Miguel':
            mensagem = "Pai, você é muito legal e admiro sua batalha por nós!";
            break;
        case 'Bibiana':
            mensagem = "Bi, que bom que a gente conversa tanto!";
            break;
        case 'Anita':
            mensagem = "Nita, nossa companhia é demais!";
            break;
        default:
            mensagem = "Escolha alguém especial.";
    }

    // Alterando o texto na página com innerHTML
    pResultado.innerHTML = `<strong>${mensagem}</strong>`;
}