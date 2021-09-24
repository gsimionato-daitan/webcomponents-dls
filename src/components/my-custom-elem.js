// you can also extend other element types
class MyCustomElem extends HTMLElement {
  constructor() {
    super();

    // initialization logic
    this.innerHTML = "<p>My own custom element!!!</p>"
  }

  connectedCallback() {
    // triggers when component is connected to the DOM
    console.log('\'my-custom-elem\' added to page.');
  }

  disconnectedCallback() {
    // triggers when component is removed from the DOM
    console.log('\'my-custom-elem\' removed from page.');
  }
}

// tell the DOM that "my-custom-elem" is a valid HTML tag
window.customElements.define('my-custom-elem', MyCustomElem);
