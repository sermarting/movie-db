import { LitElement, html, css } from 'lit-element';

export class Movies extends LitElement {
  static get properties() {
    return {

    }
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <h3>Movies</h3>
    `;
  }
}

customElements.define('view-movies', Movies);
