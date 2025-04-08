let boby = document.querySelector("body")
let tenis = document.querySelector(".imagem-nike")
let logo = document.querySelector (".logo-nike")

window.addEventListener("load", () => {
  tenis.classList.add("cairDeCima");
});


function mudarVisual(cor,imagem,) { 
   tenis.classList.add("troca-efeito")
   boby.style.background = cor
   logo.src = imagem
   setTimeout(() => {
    tenis.classList.remove("troca-efeito")
   //contador de tempo
  tenis.src = imagem
  }, 400);
//1000 milisegundos = 1segundo

  
 }