// class WebComponent extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: "open" });
//   }

//   static get styles() {
//     return `
//       :host {

//       }
//     `;
//   }

//   connectedCallback() {
//     this.render();
//   }

//   render() {
//     this.shadowRoot.innerHTML = `
//       <style>${WebComponent.styles}</style>
//       <div></div>`;
//   }
// }

// customElements.define("web-character", WebComponent);
