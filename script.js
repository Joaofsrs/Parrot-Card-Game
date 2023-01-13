const imagens = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];
let qcarta = 0;
let contadorJogadas = 0;
let numCartas = 0;
let tempoJogo = 0;

function randomNumber(){
    return (Math.random() - 0.5);
}

function cartaAleatoria(qtd_de_cartas){
    let vetorFoi = [];
    let vetorSaida = [];
    let valor = 0;

    for(let i = 0; i < qtd_de_cartas/2; i++){
        vetorFoi.push(0);
    }

    for(let i = 0; i < qtd_de_cartas; i++){
        if(vetorFoi[valor] !== 2){
            vetorSaida.push(imagens[valor]);
        }
        if(i%2 !== 0){
            valor++;
        }
    }
    vetorSaida.sort(randomNumber);
    return vetorSaida;
}

function geraCartas(qtd_de_cartas){
    const main = document.querySelector("main");

    const vCard = cartaAleatoria(qtd_de_cartas); 


    for(let i = 0; i < qtd_de_cartas; i++){
        main.innerHTML += `
            <div data-test="card" class="carta" onclick="viraCarta(this)">
                <div class="front-face face">
                    <img data-test="face-up-image" src="./img/${vCard[i]}">
                </div>
                <div class="back-face face">
                    <img data-test="face-down-image" src="./img/back.png">
                </div>
            </div>
        `;
    }
}

function pedeQuantidade(){
    numCartas;
    
    do{
        numCartas = prompt("Digite o numero de cartas entre 4 e 14");
        if(numCartas%2 != 0 || (numCartas<4 || numCartas>14)){
            alert("Numero de cartas invalido");
        }
    }while(numCartas%2 !== 0 || numCartas<4 || numCartas>14);

    geraCartas(numCartas);
}

function verificaVitoria(){
    const cartas = document.querySelectorAll(".flip-front");
    if(Number(cartas.length) === Number(numCartas)){
        alert(`Você ganhou em ${contadorJogadas} jogadas!  A duração do jogo foi de ${tempoJogo} segundos!`)
    }
}

function desviraCarta(){
    const cartas = document.querySelectorAll(".escolhido");
    cartas[0].classList.remove("flip-front");
    cartas[0].classList.remove("escolhido");
    cartas[1].classList.remove("flip-back");
    cartas[1].classList.remove("escolhido");
    cartas[2].classList.remove("flip-front");
    cartas[2].classList.remove("escolhido");
    cartas[3].classList.remove("flip-back");
    cartas[3].classList.remove("escolhido");
}

function verificaAcerto(){
    const cartas = document.querySelectorAll(".escolhido");
    if(cartas[0].children[0].getAttribute("src") === cartas[2].children[0].getAttribute("src")){
        cartas[0].classList.remove("escolhido");
        cartas[1].classList.remove("escolhido");
        cartas[2].classList.remove("escolhido");
        cartas[3].classList.remove("escolhido");
    }else{
        setTimeout(desviraCarta, 1000);
    }
    verificaVitoria();
}

function viraCarta(carta){
    if(carta.children[0].classList.contains("flip-front") === false){
        contadorJogadas++;
        carta.children[0].classList.add("flip-front");
        carta.children[0].classList.add("escolhido");
        carta.children[1].classList.add("flip-back");
        carta.children[1].classList.add("escolhido");
        if(qcarta === 1){
            verificaAcerto();
            qcarta = 0;
        }else{
            qcarta++;
        }
    }
}

function cronometro(){
    tempoJogo++;
    const cronometroJogo = document.querySelector(".cronometro");
    cronometroJogo.innerHTML = tempoJogo;
}

setInterval(cronometro, 1000);
pedeQuantidade();