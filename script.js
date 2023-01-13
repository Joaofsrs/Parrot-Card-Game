let imagens = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];
let vCard = [];
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
    console.log(vetorSaida);
    console.log(imagens);
    vCard = vetorSaida;
}

function geraCartas(qtd_de_cartas){
    const main = document.querySelector("main");

    cartaAleatoria(qtd_de_cartas); 

    console.log(vCard);

    for(let i = 0; i < qtd_de_cartas; i++){
        main.innerHTML += `
            <div class="carta">
                <div class="front-face face">
                    <img src="./img/${vCard[i]}">
                </div>
                <div class="back-face face">
                    <img src="./img/back.png">
                </div>
            </div>
        `;
    }
}

function pedeQuantidade(){
    let numCartas;
    
    do{
        numCartas = prompt("Digite o numero de cartas entre 4 e 14");
        if(numCartas%2 != 0 || (numCartas<4 || numCartas>14)){
            alert("Numero de cartas invalido");
        }
    }while(numCartas%2 !== 0 || numCartas<4 || numCartas>14);

    geraCartas(numCartas);
}

pedeQuantidade();