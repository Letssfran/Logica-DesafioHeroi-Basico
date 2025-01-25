//Desafio definindo o nível do Heroi
//Curso lógica de programação - DIO
//Dificuldade - Básico
//Enquanto o jogador estiver rodando 



let Username = "Thor123"
let estaJogando = true
let resultadoDaJogada = false
const pontosPorJogadaGanha = 1000
const pontosPorJogadaPerdida = -200
let nivel = "Vazio"
let pontuacao = 0

while (estaJogando == true) {
    let resultadoAleatorio = Math.random() >= 0.5
    let opcaodeEscolhaAleatoria = Math.random() >= 0.5

    resultadoDaJogada = resultadoAleatorio
    console.log ("Partida ganha? " + resultadoDaJogada)
        if(resultadoDaJogada == true){
            pontuacao = pontuacao + pontosPorJogadaGanha
            console.log ("Pontuação Atual: " + pontuacao)
        }
        else {
            pontuacao = pontuacao + pontosPorJogadaPerdida
            console.log ("Pontuação Atual: " + pontuacao)
        }
        estaJogando = opcaodeEscolhaAleatoria
        console.log ("Continuar jogando? " + estaJogando)
   
}

if (pontuacao < 1000) {
    nivel = "Ferro";
} else if (pontuacao < 2000) {
    nivel = "Bronze";
} else if (pontuacao < 5000) {
    nivel = "Prata";
} else if (pontuacao < 7000) {
    nivel = "Ouro";
} else if (pontuacao < 8000) {
    nivel = "Platina";
} else if (pontuacao < 9000) {
    nivel = "Ascendente";
} else if (pontuacao < 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

if (pontuacao <0) {
    console.log ("O herói " + username + " não fez pontos! Tente novamente")
}else {
        console.log ("O herói " + username + " fez " + pontuacao + " pontos. Se tornando um heroi " + nivel)
    }
