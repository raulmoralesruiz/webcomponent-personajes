import "./components/WebCharacter.js";

const html = document.querySelector("web-character");
setTimeout(() => {
  html.setDance(true);
}, 3000);
setTimeout(() => {
  html.setDance(false);
}, 9000);
