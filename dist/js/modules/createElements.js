export class Card {
    constructor() {
    }
    create(Id) {
        const card = document.createElement("li");
        const front = document.createElement("div");
        front.style.background = `url('../dist/img/${Id}.png') no-repeat center center `;
        const back = document.createElement("div");
        const backContent = document.createElement("p");
        backContent.innerHTML = "<p>?</p>";
        back.appendChild(backContent);
        card.setAttribute("data-id", `${Id}`);
        card.className = "card";
        front.className = "face front";
        back.className = "face back";
        card.appendChild(front);
        card.appendChild(back);
        return card;
    }
}
