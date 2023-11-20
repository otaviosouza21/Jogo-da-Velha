import { Card } from "./createElements.js";
export class GameSet {
    firstCard = null;
    secondCard = null;
    endgame = 0;
    winContainer = document.querySelector(".youWin");
    loseContainer = document.querySelector(".youLose");
    ContentTimer = document.querySelector(".timer");
    gridCards = document.querySelector(".jogo-cards");
    start(cardsId, level) {
        this.timer(level);
        cardsId.forEach(Id => {
            const card = new Card();
            const cardAtual = card.create(Id);
            this.gridCards?.appendChild(cardAtual);
            cardAtual.addEventListener("click", () => {
                this.revelCard(cardAtual, Id);
            });
        });
    }
    revelCard(cardAtual, Id) {
        if (cardAtual.classList.contains("active")) {
            return;
        }
        if (this.firstCard === null) {
            cardAtual.classList.add("active");
            this.firstCard = cardAtual;
        }
        else if (this.secondCard === null) {
            cardAtual.classList.add("active");
            this.secondCard = cardAtual;
            this.checkCards();
        }
    }
    checkCards() {
        const firstDataId = this.firstCard?.getAttribute("data-id");
        const secondDataId = this.secondCard?.getAttribute("data-id");
        if (firstDataId === secondDataId) {
            if (this.firstCard?.firstChild instanceof HTMLElement) {
                this.firstCard.firstChild.classList.add("disableCard");
            }
            if (this.secondCard?.firstChild instanceof HTMLElement) {
                this.secondCard.firstChild.classList.add("disableCard");
            }
            this.firstCard = null;
            this.secondCard = null;
            this.endgame++;
            this.checkEndGame();
        }
        else {
            setTimeout(() => {
                this.firstCard?.classList.remove("active");
                this.secondCard?.classList.remove("active");
                this.firstCard = null;
                this.secondCard = null;
            }, 1000);
        }
    }
    checkEndGame() {
        if (this.endgame === 9) {
            this.youWin();
        }
    }
    timer(level) {
        let minuto = 1 * +level * 2;
        let segundo = 59;
        this.setTimer(minuto, segundo);
        const interval = setInterval(() => {
            segundo--;
            if (segundo === 0) {
                minuto--;
                segundo = 59;
            }
            if (minuto === 0) {
                segundo = 0;
                minuto = 0;
                clearInterval(interval);
                this.GameOver();
            }
            this.setTimer(minuto, segundo);
        }, 500);
    }
    setTimer(minuto, segundo) {
        if (this.ContentTimer instanceof HTMLElement) {
            this.ContentTimer.innerHTML = `0${minuto}:${segundo.toString().padStart(2, '0')}`;
        }
    }
    youWin() {
        if (this.winContainer instanceof HTMLElement) {
            this.winContainer.style.display = 'flex';
            this.gridCards?.classList.add("win");
        }
    }
    GameOver() {
        if (this.loseContainer instanceof HTMLElement) {
            this.loseContainer.style.display = 'flex';
            this.gridCards?.classList.add("win");
            this.gridCards?.querySelectorAll("li").forEach((card => {
                card.style.display = 'none';
            }));
        }
    }
}
