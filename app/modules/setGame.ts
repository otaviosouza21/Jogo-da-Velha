import { Card } from "./createElements.js"

export class GameSet{
 
 private firstCard: HTMLElement | null = null;
 private secondCard: HTMLElement | null = null;
 private endgame: number = 0; 
 private winContainer: HTMLElement | null = document.querySelector(".youWin")
 private loseContainer: HTMLElement | null = document.querySelector(".youLose")
 private ContentTimer: HTMLElement | null = document.querySelector(".timer")
 private gridCards:  HTMLElement | null = document.querySelector(".jogo-cards")


  start(cardsId: number[],level: string){
      this.timer(level)
      cardsId.forEach(Id=>{
      const card = new Card()
      const cardAtual = card.create(Id)
      this.gridCards?.appendChild(cardAtual)
      cardAtual.addEventListener("click",()=>{
        this.revelCard(cardAtual,Id)
      })
    })

  }


  revelCard(cardAtual: HTMLElement,Id: number){   
    if(cardAtual.classList.contains("active")){
      return
    } 
    if(this.firstCard === null){
      cardAtual.classList.add("active")
      this.firstCard = cardAtual 
    } else if(this.secondCard === null){
      cardAtual.classList.add("active")
      this.secondCard = cardAtual
      this.checkCards()
    }
    
  }


  checkCards(){
    const firstDataId = this.firstCard?.getAttribute("data-id") 
    const secondDataId = this.secondCard?.getAttribute("data-id")
    if(firstDataId === secondDataId){
      
      if(this.firstCard?.firstChild instanceof HTMLElement){
        this.firstCard.firstChild.classList.add("disableCard")
      }
      if(this.secondCard?.firstChild instanceof HTMLElement){
        this.secondCard.firstChild.classList.add("disableCard")
      }

      this.firstCard = null;
      this.secondCard = null;
      this.endgame ++
      this.checkEndGame()
    } else{
       
        setTimeout(()=> {
          this.firstCard?.classList.remove("active")
          this.secondCard?.classList.remove("active")
          this.firstCard = null;
          this.secondCard = null
        },1000)
    }
  }


  checkEndGame(){
    if(this.endgame === 9){
      this.youWin()
    }
  }

  timer(level:string){

    let minuto = 1 * +level *2
    let segundo = 59

    this.setTimer(minuto,segundo)
    const interval = setInterval(()=>{
    segundo--
    if(segundo === 0){
      minuto --
      segundo = 59
    }
    if(minuto === 0){
      segundo = 0
      minuto = 0
      clearInterval(interval)
      this.GameOver()
    }
    this.setTimer(minuto,segundo)
    },500)
  }
    
  setTimer(minuto:number,segundo:number){
    if(this.ContentTimer instanceof HTMLElement){
      this.ContentTimer.innerHTML = `0${minuto}:${segundo.toString().padStart(2, '0')}`
    }
  }

  youWin(){
    if(this.winContainer instanceof HTMLElement){
    this.winContainer.style.display = 'flex'
    this.gridCards?.classList.add("win")
    }
  }

  GameOver(){
    if(this.loseContainer instanceof HTMLElement){
     this.loseContainer.style.display = 'flex'
     this.gridCards?.classList.add("win")
      this.gridCards?.querySelectorAll("li").forEach((card=>{
        card.style.display = 'none'
        
      }))

    }
  }




  }
