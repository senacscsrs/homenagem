const nomesFamilia = ["Pai", "Mãe", "Irmão A", "Irmão B", "Irmã C", "Madrasta", "Primo"];
const momentosEspeciais = [
    "Viagem inesquecível para a praia", 
    "Aquele Natal mágico em família", 
    "Aniversário surpresa do meu pai",
    "A primeira vez que ensinei meu irmão a andar de bicicleta"
];
const dadosFamiliares = [
    ["Pai", 50],
    ["Mãe", 48],
    ["Irmão A", 22],
    ["Irmão B", 15],
    ["Irmã C", 19],
    ["Madrasta", 45],
    ["Primo", 20]
];
function alternarFrase() {
    const frase = document.getElementById('frase-secreta');
    if (frase.style.display === 'none') {
        frase.style.display = 'block'; 
        document.getElementById('btn-alternar').innerHTML = 'Ocultar Mensagem';
    } else {
        frase.style.display = 'none';
        document.getElementById('btn-alternar').innerHTML = 'Ver/Ocultar Mensagem';
    }
}
function escolherFamiliar(familiar) {
    let mensagem;
    switch (familiar) {
        case 'Pai':
            mensagem = "Pai, você é meu herói, obrigado por todos os ensinamentos!";
            break;
        case 'Mãe':
            document.getElementById('mensagem-switch').style.color = '#8B0000';
            mensagem = "Mãe, seu amor é a minha luz e minha força inesgotável!";
            break;
        case 'Irmão':
            mensagem = "Irmãos, vocês tornam a vida muito mais divertida e desafiadora!";
            break;
        case 'Madrasta':
            mensagem = "Madrasta, obrigado por fazer parte da nossa família e trazer tanta alegria!";
            break;
        case 'Primo':
            mensagem = "Primo, as melhores risadas vêm das nossas conversas!";
            break;
        default:
            mensagem = "Escolha inválida. Tente novamente.";
    }
    document.getElementById('mensagem-switch').innerText = mensagem;
    if (familiar !== 'Mãe') {
         document.getElementById('mensagem-switch').style.color = '#333333';
    }
}
function gerarListaFamiliares() {
    const lista = document.getElementById('lista-familiares-js');
    lista.innerHTML = ''; 
    for (let i = 0; i < nomesFamilia.length; i++) {
        const nome = nomesFamilia[i];
        const novoItem = document.createElement('li');
        novoItem.innerText = nome;
        lista.appendChild(novoItem);
    }
}
function contadorFatosLegais() {
    console.log("===================================");
    console.log("Iniciando Contador de Fatos Legais:");
    console.log("===================================");
    let contador = 1;
    let limite = 3;
    while (contador <= limite) {
        console.log(`[Fato ${contador}] Momentos especiais: ${momentosEspeciais[contador - 1]}`);
        contador++;
    }
    
    console.log("\nMatriz de Dados [Nome, Idade]:");
    console.log(dadosFamiliares);
}
const membroFamilia = {
    nome: "Irmã C",
    idade: 19,
    parentesco: "Irmã",
    hobby: "Desenhar",
    falar: function() {
        return `Olá, sou a ${this.nome} e adoro ${this.hobby}!`;
    }
};
function destacarArea() {
    const area = document.getElementById('area-destaque');
    area.style.backgroundColor = '#A52A2A';
    area.style.color = '#FFFFFF';
    area.innerText = 'Que legal! Você passou o mouse e a cor mudou!';
}
function resetarArea() {
    const area = document.getElementById('area-destaque');
    area.style.backgroundColor = '#EFEFEF';
    area.style.color = '#333333';
    area.innerText = 'Passe o mouse aqui! O texto e a cor de fundo vão mudar!';
}
document.addEventListener('DOMContentLoaded', (event) => {
    gerarListaFamiliares();
    contadorFatosLegais();
    console.log("\nObjeto Membro da Família:");
    console.log(membroFamilia);
    console.log(membroFamilia.falar());
});