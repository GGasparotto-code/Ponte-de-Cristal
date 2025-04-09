function jogar() {
    let rodada =1; // Inicializa a variável rodada com 1
    const maxRodadas = 10; // Define o número máximo de rodadas como 10

    alert("Bem-vindo ao Jogo da Ponte de Cristal!"); // Exibe um alerta de boas-vindas

    // Loop que continua enquanto a rodada for menor ou igual ao número máximo de rodadas
    while (rodada <= maxRodadas) {
        let escolhaJogador = prompt(
            "Nível " + rodada + ": Escolha o vidro (1, 2 ou 3):"
        ); // Solicita ao jogador que escolha um vidro
            

        // Tratamento de entrada do jogador
        if (escolhaJogador === null || escolhaJogador.trim() === "") {
            // Verifica se o jogador cancelou o prompt ou inseriu uma string vazia
            alert("Você desistiu do jogo. Fim de jogo!"); // Exibe um alerta de desistência
            return; // Encerra a função jogar(), terminando o jogo
        }

        const escolhaNum = parseInt(escolhaJogador); // Converte a entrada do jogador para um número inteiro

        // Verifica se a entrada não é um número ou está fora do intervalo válido (1 a 3)
        if (isNaN(escolhaNum) || escolhaNum < 1 || escolhaNum > 3) {
            alert("Entrada inválida! Escolha apenas entre 1, 2 ou 3. Rodada será reiniciada."); // Exibe um alerta de entrada inválida
            continue; // Retorna ao inicio do loop, pedindo a escolha novamente
        }

        const pisoQuebrado = Math.floor(Math.random() * 3) + 1; // Gera um número aleatório entre 1 e 3 para representar o vidro quebrado

        // Verifica se o jogador escolheu o vidro quebrado
        if (escolhaNum === pisoQuebrado) {
            alert("Vidro quebrou! Fim de jogo para você na rodada " + rodada + "."); // Exibe um alerta de fim de jogo
            return; // Encerra o jogo
        } else {
            alert("Passou! Piso quebrado estava na ponte " + pisoQuebrado); // Exibe um alerta de sucesso
        }

        rodada++; // Incrementa o número da rodada
    }

    // Verifica se o jogador completou todas as rodadas
    if (rodada > maxRodadas) {
        alert("Você venceu o jogo, passando por " + maxRodadas + "rodadas! Parabéns!"); // Exibe um alerta de vitória
    }
}