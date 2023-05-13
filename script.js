var button = document.getElementById("not-button")
var text = document.getElementById("text")
buttonYes = document.getElementById("yes-button")

const larguraJanela = window.innerWidth -100;
const alturaJanela = window.innerHeight -100;


button.addEventListener("mouseenter", function(){
    const novaPosicaoX = Math.floor(Math.random() * larguraJanela);
    const novaPosicaoY = Math.floor(Math.random() * alturaJanela);
    
    // Define a nova posição do botão usando as propriedades "left" e "top"
    button.style.position = 'absolute';
    button.style.left = novaPosicaoX + 'px';
    button.style.top = novaPosicaoY + 'px';
})

buttonYes.addEventListener("click", function(){
    text.style.opacity = 1
    console.log('clicou')
})

