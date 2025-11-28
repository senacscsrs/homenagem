const nomesFamilia = ["Arthur", "Gabriel", "Marcia", "Thiago"];

const momentosEspeciais = [
    "Viagem para Orlando",
    "Viagem para Porto Seguro",
    "Viagem para Natal"
];

const matrizFamilia = [
    ["Arthur", 16],
    ["Gabriel", 20],
    ["Thiago", 44],
    ["Marcia", 43]
];

console.log("=== MATRIZ DA FAMÍLIA ===");
console.log(matrizFamilia);

const arthur = {
    nome: "Arthur",
    idade: 16,
    hobby: "Programar",
    personalidade: "Gente Boa"
};

console.log("=== OBJETO ARTHUR ===");
console.log(arthur);

function preencherListaMembros() {
    const listaMembros = document.getElementById("lista-membros");
    
    for (let i = 0; i < nomesFamilia.length; i++) {
        const li = document.createElement("li");
        li.innerText = nomesFamilia[i];
        listaMembros.appendChild(li);
    }
}

function preencherMomentos() {
    const listaMomentos = document.getElementById("lista-momentos");
    
    for (let i = 0; i < momentosEspeciais.length; i++) {
        const li = document.createElement("li");
        li.innerText = momentosEspeciais[i];
        listaMomentos.appendChild(li);
    }
}

function mostrarFatosNoConsole() {
    console.log("=== 3 FATOS LEGAIS SOBRE MINHA FAMÍLIA ===");
    
    let contador = 1;
    
    while (contador <= 3) {
        if (contador === 1) {
            console.log(`${contador}. Somos uma família unida`);
        } else if (contador === 2) {
            console.log(`${contador}. Gostamos de viajar juntos`);
        } else {
            console.log(`${contador}. Valorizamos o respeito`);
        }
        contador++;
    }
}

function toggleMensagem() {
    const mensagem = document.getElementById("mensagem-especial");
    
    if (mensagem.classList.contains("visible")) {
        mensagem.classList.remove("visible");
        mensagem.classList.add("hidden");
    } else {
        mensagem.classList.remove("hidden");
        mensagem.classList.add("visible");
    }
}

function mostrarMensagemFamiliar() {
    const select = document.getElementById("select-familiar");
    const mensagemDiv = document.getElementById("mensagem-familiar");
    const escolha = select.value;
    
    let mensagem = "";
    
    switch (escolha) {
        case "Arthur":
            mensagem = "🎮 Arthur é um jovem que adora programar!";
            break;
        case "Gabriel":
            mensagem = "🌟 Gabriel tem 20 anos e é um membro especial da nossa família!";
            break;
        case "Marcia":
            mensagem = "❤️ Marcia é uma mãe maravilhosa";
            break;
        case "Thiago":
            mensagem = "💪 Thiago é um pai incrível!";
            break;
        default:
            mensagem = "";
    }
    
    mensagemDiv.innerText = mensagem;
    
    if (mensagem) {
        mensagemDiv.classList.add("active");
    } else {
        mensagemDiv.classList.remove("active");
    }
}

function mostrarDadosArthur() {
    const dadosDiv = document.getElementById("dados-arthur");
    
    dadosDiv.innerHTML = `
        <div class="profile-header">
            <h4>${arthur.nome}</h4>
        </div>
        <div class="profile-details">
            <div class="profile-item">
                <span class="profile-label">Idade:</span>
                <span class="profile-value">${arthur.idade} anos</span>
            </div>
            <div class="profile-item">
                <span class="profile-label">Hobby:</span>
                <span class="profile-value">${arthur.hobby}</span>
            </div>
            <div class="profile-item">
                <span class="profile-label">Personalidade:</span>
                <span class="profile-value">${arthur.personalidade}</span>
            </div>
        </div>
    `;
    
    dadosDiv.classList.add("active");
}

let coresAlternativas = false;

function trocarCores() {
    const body = document.body;
    const sections = document.querySelectorAll("section");
    const grupos = document.querySelectorAll(".interactive-card");
    const tabelas = document.querySelectorAll("table");
    const cabecalhosTabela = document.querySelectorAll("table th");
    const linhasTabela = document.querySelectorAll("table tr");
    
    if (coresAlternativas) {
        body.style.backgroundColor = "#f8f9fa";
        body.style.color = "#1a1a2e";
        
        sections.forEach((sec) => {
            sec.style.backgroundColor = "white";
            sec.style.color = "#1a1a2e";
        });

        grupos.forEach((grupo) => {
            grupo.style.backgroundColor = "#ffffff";
            grupo.style.borderColor = "#e0e0e0";
        });

        cabecalhosTabela.forEach((th) => {
            th.style.backgroundColor = "#6366f1";
            th.style.color = "white";
        });

        linhasTabela.forEach((tr, index) => {
            if (index === 0) return;
            if (index % 2 === 0) {
                tr.style.backgroundColor = "#f8f9fa";
            } else {
                tr.style.backgroundColor = "white";
            }
            tr.style.color = "#1a1a2e";
        });

        tabelas.forEach((tabela) => {
            tabela.style.borderColor = "#e0e0e0";
        });

        coresAlternativas = false;
    } else {
        body.style.backgroundColor = "#1a1a2e";
        body.style.color = "#e0e0e0";
        
        sections.forEach((sec) => {
            sec.style.backgroundColor = "#16213e";
            sec.style.color = "#e0e0e0";
        });

        grupos.forEach((grupo) => {
            grupo.style.backgroundColor = "#0f3460";
            grupo.style.borderColor = "#533483";
        });

        cabecalhosTabela.forEach((th) => {
            th.style.backgroundColor = "#533483";
            th.style.color = "#e0e0e0";
        });

        linhasTabela.forEach((tr, index) => {
            if (index === 0) return;
            if (index % 2 === 0) {
                tr.style.backgroundColor = "#1a1a2e";
            } else {
                tr.style.backgroundColor = "#16213e";
            }
            tr.style.color = "#e0e0e0";
        });

        tabelas.forEach((tabela) => {
            tabela.style.borderColor = "#533483";
        });

        coresAlternativas = true;
    }
}

function mudarTextoHover() {
    const texto = document.getElementById("texto-hover");
    
    texto.innerText = "🎉 Surpresa! Nossa família é incrível! 🎉";
    texto.style.transform = "scale(1.1)";
}

function restaurarTextoHover() {
    const texto = document.getElementById("texto-hover");
    
    texto.innerText = "Passe o mouse aqui para ver uma surpresa!";
    texto.style.transform = "scale(1)";
}

function criarTabelaFamilia() {
    const container = document.getElementById("tabela-container");
    
    const table = document.createElement("table");
    table.classList.add("family-table");
    
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    
    const thNome = document.createElement("th");
    thNome.innerText = "Nome";
    const thIdade = document.createElement("th");
    thIdade.innerText = "Idade";
    
    headerRow.appendChild(thNome);
    headerRow.appendChild(thIdade);
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    const tbody = document.createElement("tbody");
    
    for (let i = 0; i < matrizFamilia.length; i++) {
        const row = document.createElement("tr");
        
        const tdNome = document.createElement("td");
        tdNome.innerText = matrizFamilia[i][0];
        
        const tdIdade = document.createElement("td");
        tdIdade.innerText = matrizFamilia[i][1];
        
        row.appendChild(tdNome);
        row.appendChild(tdIdade);
        tbody.appendChild(row);
    }
    
    table.appendChild(tbody);
    container.appendChild(table);
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("=== SITE DA FAMÍLIA CARREGADO ===");
    
    preencherListaMembros();
    preencherMomentos();
    mostrarFatosNoConsole();
    criarTabelaFamilia();
    
    console.log("Todos os elementos foram carregados com sucesso!");
});
