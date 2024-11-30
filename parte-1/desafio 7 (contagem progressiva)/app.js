let numeroDeEscolha = prompt('Digite um numero até 10 para iniciar a contagem regressiva!');


alert('Contagem regressiva iniciada');

while (numeroDeEscolha >= 0) {
    if( numeroDeEscolha >= 0){
        console.log(numeroDeEscolha);
        numeroDeEscolha--;
    } else {
        console.log(numeroDeEscolha);
        numeroDeEscolha++;
    }
}

console.log('Contagem finalizada!')