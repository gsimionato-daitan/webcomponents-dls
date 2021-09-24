const template = document.createElement('template');
 
template.innerHTML = `
  <style>
    .container {
      padding: 8px;
    }
 
    button {
      display: block;
      overflow: hidden;
      position: relative;
      padding: 0 16px;
      font-size: 16px;
      font-weight: bold;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      outline: none;
 
      width: 100%;
      height: 40px;
 
      box-sizing: border-box;
      border: 1px solid #a1a1a1;
      background: #ffffff;
      box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.05), 0 2px 8px 0 rgba(161,161,161, 0.4);
      color: #363636;
      cursor: pointer;
    }
  </style>
 
  <div class="container">
    <button>Label</button>
  </div>
`;

class CustomButton extends HTMLElement {
  constructor() {
    super(); // always call super
 
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    // the button inside the template
    this._button = this._shadowRoot.querySelector('button');
  }
 
  get label() {
    return this.getAttribute('label');
  }
 
  set label(value) {
    this.setAttribute('label', value);
  }

  get data() {
    return this.getAttribute('data')
  }

  set data(value) {
    this.setAttribute('data', value)
  }
 
  // which attributes the attributeChangedCallback will change for
  static get observedAttributes() {
    return ['label', 'test', 'data'];
  }

  connectedCallback() {
    // triggers when component is connected to the DOM
    console.log('\'custom-button\' added to page.');
  }

  disconnectedCallback() {
    // triggers when component is removed from the DOM
    console.log('\'custom-button\' removed from page.');
  }
 
  attributeChangedCallback(name, oldVal, newVal) {
    // triggers every time a attribute in "observedAttributes" changes
    console.log(`Attribute ${name} changed from ${oldVal} to ${newVal}`)
    this.render();
  }
 
  render() {
    // custom render function (not a HTML Element lifecylce hook)
    this._button.innerHTML = this.label;
  }
}
 
window.customElements.define('custom-button', CustomButton);
