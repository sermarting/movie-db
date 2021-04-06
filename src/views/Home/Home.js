import { LitElement, html, css } from 'lit-element';

export class Home extends LitElement {
  static get properties() {
    return {

    }
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <h3>Home</h3>
    `;
  }
}

customElements.define('view-home', Home);
