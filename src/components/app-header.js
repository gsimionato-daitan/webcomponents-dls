const template = document.createElement('template');

template.innerHTML = `
  <style>
    :host {
      font-family: sans-serif;
    }

    h1 {
      display: flex;
      justify-content: center;
      background-color: cyan;
      border: 2px solid black;
    }
  </style>

  <div>
    <h1>Web Components Internal Header</h1>
  </div>
`;

class AppHeader extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('app-header', AppHeader);
