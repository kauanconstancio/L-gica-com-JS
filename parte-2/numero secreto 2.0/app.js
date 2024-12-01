// como adicionar texto no html pelo JS
// document.querySelector('tagDesejada') (seleciona uma tag do HTML para modificar no JS)
// innerHTML (insere algo no HTML)

// adiciona um texto ao "h1" no HTML

// para adicionar um texto sempre dentro de '' já se for um numeral, não precisa de ''.

let numeroSecreto = gerarNumeroAleatorio();
console.log (numeroSecreto);
let tentativas = 1;

// Trabalhando com funções

function mostrarTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

mostrarTextoNaTela('h1', 'Jogo do Número secreto!');
mostrarTextoNaTela('p', 'Escolha um número entre 1 e 10!');

function verificarChute() {
    let numeroChute = document.querySelector('input').value
    if (numeroChute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`
        mostrarTextoNaTela('h1', 'Parabéns!');
        mostrarTextoNaTela('p', mensagemTentativa);
     } else {
        if (numeroChute > numeroSecreto) {
            mostrarTextoNaTela('h1', 'Tente novamente!');
            mostrarTextoNaTela('p', `O número secreto é menor que ${numeroChute}`);
        } else {
            mostrarTextoNaTela('h1', 'Tente novamente!');
            mostrarTextoNaTela('p', `O número secreto é maior que ${numeroChute}`);
            tentativas++
        }
     }
}

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * 10 + 1);
}