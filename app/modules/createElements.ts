
export class Card{

  constructor(){
    
  }

  public create(Id: number){
    const card: HTMLElement = document.createElement("li");
    const front: HTMLElement = document.createElement("div");
    front.style.background = `url('../dist/img/${Id}.png') no-repeat center center `

    
    const back:HTMLElement = document.createElement("div");
    const backContent: HTMLElement = document.createElement("p")
    backContent.innerHTML = "<p>?</p>"
    back.appendChild(backContent)
    
    card.setAttribute("data-id",`${Id}`)

    card.className = "card"
    front.className = "face front"
    back.className = "face back"

    card.appendChild(front)
    card.appendChild(back)

    
   return card   
  }



 
}