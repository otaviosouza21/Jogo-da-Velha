import { GameSet } from "./modules/setGame.js";


const cardsId: number[] = [0,1,2,3,4,5,6,7,8]
const cardIdDuplicado = [...cardsId,...cardsId]
const startContainer: HTMLElement | null = document.querySelector(".start")
const buttonStart: HTMLElement | null = document.querySelector(".start p")
const levelSelect: HTMLOptionElement | null = document.querySelector(".jogo-nivel")
const resetButton: NodeList | null = document.querySelectorAll(".modalButton")

function startGame(){
 if(levelSelect instanceof Element){
  const level = levelSelect.value

  const game = new GameSet
  game.start(cardIdDuplicado.sort(()=>Math.random() - 0.5),level)
 }
}


buttonStart?.addEventListener('click',()=>{
  if(startContainer instanceof HTMLElement){
  startContainer.style.display = 'none';
  startGame()
  }
})

console.log(resetButton);


resetButton.forEach((btn=>{
  btn.addEventListener('click',()=>{
    window.location.reload()
  })
}))