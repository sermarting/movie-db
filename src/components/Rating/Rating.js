import { LitElement, html, css } from 'lit-element';
import 'fa-icons';

export class Rating extends LitElement {
  static get properties() {
    return {
      score: { type: Number }
    }
  }

  constructor() {
    super();

    this.score = 0;
  }

  firstUpdated() {
    this.stars = []

    //No es la mejor manera de hacerlo, pero es un ejemplo para ver el this.update
    for(let i = 0; i<5; i++) {
      this.stars.push(html`<fa-icon class="fa fa-star ${this.setActive(i)}" size="1em"></fa-icon>`);
    }
    //Fuerza renderizado manual
    this.update();
  }

  static get styles () {
    return css`
      fa-icon {
        color: #ffc400;
        filter: grayscale(100%);
      }
      .active {
        opacity: 1;
        filter: none;
      }
    `;
  }

  render() {
    return html`
      ${this.stars}
    `;
  }

  setActive(index) {
    const rate = Math.trunc(this.score / 2);
    return index < rate ? 'active' : '';
  }
}

customElements.define('app-rating', Rating);
