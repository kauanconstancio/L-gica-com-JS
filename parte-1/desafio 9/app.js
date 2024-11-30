let nota = 7;
let nome = prompt('Qual o seu nome?')
let notaUsuario = prompt('Qual foi a sua nota de 0 a 10?')

if (notaUsuario >= nota) {
    alert(`Parabéns ${nome} você passou!`)
} else {
    alert(`Que pena ${nome} você não passou.`)
}