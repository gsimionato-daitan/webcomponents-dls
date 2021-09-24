class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener('click', (event => {
      if (!confirm('Are you sure?')) {
        event.preventDefault();
      }
    }));
  }
}

customElements.define('confirm-link', ConfirmLink, { extends: 'a' });


