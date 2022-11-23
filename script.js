"use strict";
const imagecards = [...document.querySelectorAll(".card")];
const cardcontainer = document.querySelector(".game");
class Card {
  posId;
  correctPosId;
  constructor(posId, classname) {
    this.posId = posId;
    this.classname = classname;
  }
}

class App {
  previousTabed;
  nextTabed;
  tab = 0;
  constructor() {
    this.createRandomImg.bind(this)();
    this.swapcardMathod = this.swapcard.bind(this);
    cardcontainer.addEventListener("click", this.swapcardMathod);
  }
  cards = [];
  randomArr() {
    const cardPostion = Array.from({ length: 9 }, (e, i) => (e = i + 1));
    const shuffledcards = cardPostion.sort(() => Math.random() - 0.5);
    return shuffledcards;
  }
  createRandomImg() {
    const cardArr = this.randomArr();
    cardArr.forEach((e, i) => {
      const card = new Card(e, `card--pos-${e}`);
      this.cards.push(card);
    });
    imagecards.forEach((el, i) => {
      el.classList.add(`${this.cards[i].classname}`);
    });
  }
  swapcard(e) {
    this.tab++;
    if (e.target.classList.contains("card") && this.tab === 1) {
      this.previousTabed = e.target;
      this.previousTabed.style.opacity = "0.5";
    }
    if (e.target.classList.contains("card") && this.tab === 2) {
      this.nextTabed = e.target;
      this.tab = 0;
    }
    if (this.previousTabed && this.nextTabed) {
      const a = +this.previousTabed.getAttribute("class").slice(-1);
      const b = +this.nextTabed.getAttribute("class").slice(-1);
      this.previousTabed.classList.remove(`card--pos-${a}`);
      this.previousTabed.classList.add(`card--pos-${b}`);
      this.nextTabed.classList.remove(`card--pos-${b}`);
      this.nextTabed.classList.add(`card--pos-${a}`);
      this.previousTabed.style.opacity = "1";
      this.check();
      this.previousTabed = this.nextTabed = undefined;
    }
  }
  check() {
    const win = imagecards.every((image) => {
      const id = +image.dataset.id;
      const classId = +image.getAttribute("class").slice(-1);
      return id === classId;
    });
    if (win) {
      // this.previousTabed.style.opacity = "1";
      cardcontainer.removeEventListener("click", this.swapcardMathod);
      cardcontainer.style.transform = "scale(1.5)";
    }
  }
}

const app = new App();
// console.log(app.randomNumber());
