        let nomes = ["Michele (mãe)", "Alexandre (pai)", "Thiago (irmão)"];
        let momentos = ["Viagem", "Aniversário", "Domingo em família"];

    
        let lista = document.getElementById("listaFamilia");
        for (let i = 0; i < nomes.length; i++) {
            let li = document.createElement("li");
            li.innerText = nomes[i];
            lista.appendChild(li);
        }

        let familiares = [
            ["Michele", null],
            ["Alexandre", null],
            ["Thiago", null]
        ];
        console.log("Matriz da família :", familiares);

        let pessoa = {
            nome: "Michele",
            hobby: "Cuidar da família"
        };
        console.log("Objeto pessoa:", pessoa);

        let contador = 1;
        while (contador <= 3) {
            console.log("Fato legal nº " + contador);
            contador++;
        }

        function mostrarMensagem() {
            let msg = document.getElementById("msg");
            if (msg.style.display === "none") {
                msg.style.display = "block";
            } else {
                msg.style.display = "none";
            }
        }

        function escolherMensagem() {
            let nome = prompt("Escolha: Michele, Alexandre ou Thiago");

            let texto = "";

            switch (nome) {
                case "Michele":
                    texto = "Mãe, você é aquela presença que transforma qualquer dia em um lugar seguro. Seu sorriso me dá calma, sua voz me orienta e seu amor me acolhe mesmo quando o mundo parece grande demais.Obrigada por cada cuidado, cada abraço e cada palavra que me ensinou a seguir em frente.Você é a minha melhor lembrança do passado, a minha força no presente e a minha inspiração para o futuro.Tudo fica mais bonito porque você existe, mãe.";
                    break;
                case "Alexandre":
                    texto = "Pai, você é o exemplo silencioso que sempre me guiou. A sua maneira de ensinar, de proteger e de mostrar o mundo me acompanha em cada passo que dou.Obrigada por acreditar em mim quando eu ainda nem sabia como acreditar em mim mesma. A sua força e sua sabedoria são luzes que iluminam o meu caminho.Tenho orgulho de tudo o que aprendi com você e gratidão eterna por cada esforço que fez por mim.";
                    break;
                case "Thiago":
                    texto = "Irmão, crescer ao seu lado foi um dos maiores presentes que a vida me deu. Compartilhamos risadas, segredos, brigas bobas e momentos que guardo com carinho no coração.";
                    break;
                default:
                    texto = "Nome não encontrado!";
            }

            document.getElementById("msgFamiliar").innerText = texto;
        }

     
        function trocarTexto() {
            document.getElementById("hoverArea").innerText = "♡";
        }

        function voltarTexto() {
            document.getElementById("hoverArea").innerText = "Passe o mouse aqui!";
        }