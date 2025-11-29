// ====================================================================
// VETOR (Array)
// ====================================================================

// Lista de nomes (Vetor 1)
const nomesFamilia = ["Pai", "Mãe", "Irmão", "Eu", "Vovó"];

// Lista de momentos especiais (Vetor 2)
const momentosEspeciais = [
    "A primeira viagem de férias",
    "O dia em que adotamos o pet",
    "A formatura",
    "O almoço de domingo"
];

// ====================================================================
// MATRIZ
// ====================================================================

// Matriz simples com [nome, idade] de cada familiar
const matrizFamilia = [
    ["Pai", 50],
    ["Mãe", 48],
    ["Irmão", 20],
    ["Eu", 25]
];

// Mostrar a matriz no console (Requisito)
console.log("--- Conteúdo da Matriz [Nome, Idade] ---");
console.log(matrizFamilia);
console.log("-----------------------------------------");

// ====================================================================
// OBJETO
// ====================================================================

// Cria pelo menos 1 objeto que representa um membro da família
const membroFavorito = {
    nome: "Vovó",
    idade: 75,
    relacao: "Avó",
    mensagem: "Obrigado(a) por todo carinho e pelas melhores receitas!"
};

// Exibe o objeto no console para verificação
console.log("--- Objeto Representando um Membro ---");
console.log(membroFavorito);
console.log("--------------------------------------");


// ====================================================================
// FOR (Loop)
// ====================================================================

// Objetivo: Mostrar nomes dos familiares automaticamente no HTML usando um loop.

const ulLista = document.getElementById('lista-familiares');
ulLista.innerHTML = ''; // Limpa o item placeholder

// Loop FOR para percorrer o vetor 'nomesFamilia'
for (let i = 0; i < nomesFamilia.length; i++) {
    // DOM: Criar elementos novos usando document.createElement()
    const novoLi = document.createElement('li');
    
    // DOM: Alterar texto com innerText
    novoLi.innerText = nomesFamilia[i]; 
    ulLista.appendChild(novoLi);
}

// ====================================================================
// WHILE (Loop)
// ====================================================================

// Objetivo: Contador que exibe números especiais no console (ex.: “3 fatos legais sobre minha família”)
let contador = 1;
const limite = 4; // Queremos ir de 1 até 3

console.log("--- WHILE: Fatos Legais sobre Minha Família ---");
while (contador < limite) {
    console.log(`Fato ${contador}: Temos ${momentosEspeciais[contador-1]}!`);
    contador++; 
}
console.log("-----------------------------------------------");


// ====================================================================
// IF / ELSE & EVENTOS (onclick)
// ====================================================================

// Objetivo: Se o usuário clicar em um botão, verificar se uma frase está visível ou não.

const btnCuriosidade = document.getElementById('btn-curiosidade');
const paragrafoSecreto = document.getElementById('paragrafo-secreto');

// EVENTO: onclick (usando addEventListener)
btnCuriosidade.addEventListener('click', function() {
    // IF / ELSE: Use para verificar uma condição.
    if (paragrafoSecreto.style.display === 'none') {
        // DOM: Alterar estilos (mudar display para 'block' para mostrar)
        paragrafoSecreto.style.display = 'block';
        btnCuriosidade.innerText = 'Esconder Curiosidade';
    } else {
        // DOM: Alterar estilos (mudar display para 'none' para esconder)
        paragrafoSecreto.style.display = 'none';
        btnCuriosidade.innerText = 'Mostrar/Esconder Curiosidade';
    }
});


// ====================================================================
// SWITCH & EVENTOS (addEventListener)
// ====================================================================

// Objetivo: Mostrar mensagens conforme uma escolha.

const btnSwitch = document.getElementById('btn-mensagem-switch');
const mensagemSwitch = document.getElementById('mensagem-switch');

// EVENTO: addEventListener
btnSwitch.addEventListener('click', function() {
    // Pede ao usuário para escolher um número de 1 a 4
    const escolha = prompt("Escolha um familiar (1=Pai, 2=Mãe, 3=Irmão, 4=Vovó) para receber uma mensagem especial:");
    let mensagemFinal = "";

    // SWITCH: Use para mostrar mensagens conforme uma escolha.
    switch (escolha) {
        case '1':
            mensagemFinal = "Pai: Sua força e dedicação são nossa maior inspiração!";
            break;
        case '2':
            mensagemFinal = "Mãe: Seu amor e cuidado tornam nossa casa o melhor lugar do mundo!";
            break;
        case '3':
            mensagemFinal = "Irmão: É bom saber que posso contar com você para tudo!";
            break;
        case '4':
            // Usando a mensagem do Objeto que criamos
            mensagemFinal = `${membroFavorito.nome}: ${membroFavorito.mensagem}`; 
            break;
        default:
            mensagemFinal = "Escolha inválida. Tente novamente com 1, 2, 3 ou 4.";
    }

    // DOM: Alterar texto com innerHTML para exibir a mensagem
    mensagemSwitch.innerHTML = `**Mensagem Recebida:** ${mensagemFinal}`;
});


// ====================================================================
// DOM & EVENTOS (onmouseover/onmouseout - funções globais)
// ====================================================================

// Objetivo: Alterar estilos com .style.color usando eventos
// Essas funções são chamadas diretamente no HTML pelo onmouseover e onmouseout
function destacar(elemento) {
    // DOM: Alterar estilos com .style.color
    elemento.style.color = '#FF5722'; // Cor de destaque
    elemento.style.fontWeight = 'bold';
}

function reverter(elemento) {
    // DOM: Alterar estilos com .style.color
    elemento.style.color = 'inherit'; // Retorna à cor padrão
    elemento.style.fontWeight = 'normal';
}