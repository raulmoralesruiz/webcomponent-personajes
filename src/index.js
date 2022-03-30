import "./components/WebCharacter.js";

const html = document.querySelector("web-character");
setTimeout(() => {
  html.setDance(true);
}, 3000);
setTimeout(() => {
  html.setDance(false);
}, 9000);

const container = document.querySelector(".container");
container.addEventListener("INFO", (event) => {
  console.log(event);
  const data = event.detail;
  const board = document.querySelector(".board");
  board.textContent = data;
});
