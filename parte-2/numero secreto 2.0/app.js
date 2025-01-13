// como adicionar texto no html pelo JS
// document.querySelector('tagDesejada') (seleciona uma tag do HTML para modificar no JS)
// innerHTML (insere algo no HTML)

// adiciona um texto ao "h1" no HTML

// para adicionar um texto sempre dentro de '' já se for um numeral, não precisa de ''.






// Lista para armazenar os números sorteados
let listaNumerosSorteados = [];
// Limite máximo para o número secreto
let numeroLimite = 10;
// Gera o número secreto inicial
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto); // Exibe o número secreto no console para depuração
// Contador de tentativas
let tentativas = 1;

// Função para mostrar texto em uma tag específica na tela
function mostrarTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); // Seleciona o elemento HTML pela tag
    campo.innerHTML = texto; // Define o conteúdo HTML do elemento selecionado
}

// Função para mostrar a mensagem inicial do jogo
function mostrarMensagemInicial() {
    mostrarTextoNaTela('h1', 'Jogo do Número secreto!'); // Mostra o título do jogo
    mostrarTextoNaTela('p', 'Escolha um número entre 1 e 10!'); // Mostra a instrução do jogo
}

// Chama a função para mostrar a mensagem inicial
mostrarMensagemInicial();

// Função para verificar o chute do jogador
function verificarChute() {
    let numeroChute = document.querySelector('input').value; // Obtém o valor do input do jogador
    if (numeroChute == numeroSecreto) { // Verifica se o chute é igual ao número secreto
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // Define a palavra correta para tentativas
        let mensagemTentativa = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`; // Cria a mensagem de sucesso
        mostrarTextoNaTela('h1', 'Parabéns!'); // Mostra a mensagem de parabéns
        mostrarTextoNaTela('p', mensagemTentativa); // Mostra a mensagem de tentativas
        document.getElementById('reiniciar').removeAttribute('disabled'); // Habilita o botão de reiniciar
    } else {
        if (numeroChute > numeroSecreto) { // Verifica se o chute é maior que o número secreto
            mostrarTextoNaTela('h1', 'Tente novamente!'); // Mostra a mensagem de tentativa
            mostrarTextoNaTela('p', `O número secreto é menor que ${numeroChute}`); // Mostra a dica
        } else {
            mostrarTextoNaTela('h1', 'Tente novamente!'); // Mostra a mensagem de tentativa
            mostrarTextoNaTela('p', `O número secreto é maior que ${numeroChute}`); // Mostra a dica
            tentativas++; // Incrementa o contador de tentativas
        }
        limparCampo(); // Limpa o campo de input
    }
}

// Função para gerar um número aleatório
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); // Gera um número aleatório entre 1 e o limite
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length; // Obtém a quantidade de números sorteados

    if (quantidadeDeElementosNaLista == 10) { // Verifica se a lista está cheia
        listaNumerosSorteados = []; // Reseta a lista de números sorteados
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) { // Verifica se o número já foi sorteado
        return gerarNumeroAleatorio(); // Gera um novo número se já foi sorteado
    } else {
        listaNumerosSorteados.push(numeroEscolhido); // Adiciona o número à lista de sorteados
        return numeroEscolhido; // Retorna o número sorteado
    }
}

// Função para limpar o campo de input
function limparCampo() {
    let chute = document.querySelector('input'); // Seleciona o campo de input
    chute.value = ''; // Limpa o valor do campo de input
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(); // Gera um novo número secreto
    limparCampo(); // Limpa o campo de input
    tentativas = 1; // Reseta o contador de tentativas
    mostrarMensagemInicial(); // Mostra a mensagem inicial
    document.getElementById('reiniciar').setAttribute('disabled', true); // Desabilita o botão de reiniciar
}