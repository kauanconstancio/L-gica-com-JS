alert('Boas Vindas ao Jogo do Número Secreto!');

let numeroMaximo = 1000
let numeroSecreto = parseInt(Math.random() *numeroMaximo +1);
let chuteUsuario;
let tentativas = 1;


while ( chuteUsuario != numeroSecreto){
    chuteUsuario = prompt(`Escolha um Número entre 1 e ${numeroMaximo}`);
    
    if (chuteUsuario == numeroSecreto) {
        break;
    }
    
    else {
        if (chuteUsuario > numeroSecreto){
            alert(`O número secreto é menor que ${chuteUsuario}`);
        } else{
            alert(`O número secreto é maior que ${chuteUsuario}`);
        }
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você Acertou o Número Secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);

// if (tentativas > 1) {
//     alert(`Parabéns! Você Acertou o Número Secreto ${numeroSecreto} com ${tentativas} tentativas!`);
// } else {
//     alert(`Parabéns! Você Acertou o Número Secreto ${numeroSecreto} com ${tentativas} tentativa!`);
// }

// if = se
// else = senão
// while = enquanto 