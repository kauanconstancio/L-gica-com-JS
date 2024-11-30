// como adicionar texto no html pelo JS
// document.querySelector('tagDesejada') (seleciona uma tag do HTML para modificar no JS)
// innerHTML (insere algo no HTML)

// adiciona um texto ao "h1" no HTML

// para adicionar um texto sempre dentro de '' já se for um numeral, não precisa de ''.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto!';

let paragrafo = document.querySelector('.texto__paragrafo');
paragrafo.innerHTML = 'Escolha um número entre 1 a 10!'

// Trabalhando com funções

function verificarChute() {
    alert('Voce chutou!')
}