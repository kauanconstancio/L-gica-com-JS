alert('Boas Vindas ao nosso Site!')

let nome = 'Lua';
let idade = 25;
let nummeroDeVedas = 50;
let saldoDisponivel = 1000;

let mensagemDeErro = 'Erro! Preencha todos os campos!';

alert(mensagemDeErro)

let nomeUsuario = prompt('Digite seu nome Por favor!');
let idadeUsuario = prompt('Digite sua Idade Por Favor!');

if (idadeUsuario >= 18) {
    alert(`Parabéns ${nomeUsuario} Você pode tirar sua Habilitação!`)
} else{ 
    alert(`${nomeUsuario} Você nào tem a idade mínima para tirar a sua habilitação!`)
}