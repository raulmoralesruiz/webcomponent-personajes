import html from "../assets/html.svg";
import leg from "../assets/leg.svg";
import js from "../assets/js.svg";
import css from "../assets/css.svg";

const CHARACTER_TYPE = { html, css, js };

const DEFAULT_CHARACTER = "html";

class WebCharacter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
      :host {
      }

      .character {
        height: 250px;
        width:180px;
        padding-left: 5px;
        padding-top: 5px;
      }

      .body {
        height: 200px;
        position: relative;
        z-index: 2;
      }

      :host(.move) .body {
        animation: move 1s infinite alternate;
      }

      :host(.dance) .body {
        animation: dance 3s infinite;
      }

      .leg {
        height: 75px;
        margin-left: -10px;
        margin-right: -10px;
      }

      .legs {
        transform: translate(30px, -45px);
      }

      @keyframes move {
        0% { transform: translateY(0); }
        100% { transform: translateY(15px); }
      }

      @keyframes dance {
        0%, 100% { transform: rotate(0); }
        25% { transform: rotate(-30deg); }
        75% { transform: rotate(30deg); }
      }
    `;
  }

  connectedCallback() {
    this.type = this.getAttribute("type") ?? DEFAULT_CHARACTER;
    this.render();
    this.shadowRoot
      .querySelector(".body")
      .addEventListener("click", () => this.setDance(true));
  }

  setMove(value = true) {
    if (value) {
      this.classList.add("move");
    } else {
      this.classList.remove("move");
    }
  }

  setDance() {
    this.classList.toggle("dance");
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${WebCharacter.styles}</style>
      <div class="character">
        <img class="body" src="${CHARACTER_TYPE[this.type]}" alt="html">
        <div class="legs">
          <img class="left leg" src="${leg}" alt="leg">
          <img class="right leg" src="${leg}" alt="leg">
        </div>
        <slot></slot>
      </div>`;
  }
}

customElements.define("web-character", WebCharacter);

// 3:23:03 / 3:44:01
