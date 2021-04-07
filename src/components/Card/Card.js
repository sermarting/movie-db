import { LitElement, html, css } from 'lit-element';

import '../Rating/Rating.js';

export class Card extends LitElement {

  static get properties() {
    return {
      image: { type: String },
      title: { type: String },
      score: { type: String }
    }
  }

  constructor() {
    super();
  }

  static get styles () {
    return css`
      img {
        width: 100%;
        border-radius: 10px;
      }
      .title {
        display: none;
      }
      .score {
        margin: 10px auto;
        display: flex;
        justify-content: space-between;
      }
      @media only screen and (min-width: 758px) {
        .title {
          display: block;
          font-weight: bolder;
          font-size: 18px;
        }
      }
    `;
  }

  render() {
    return html`
      <img src=${this.image} alt="${this.title}" />
      <div class="title">${this.title}</div>
      <div class="score">
        <span>${this.score}</span>
        <app-rating score="${this.score}"></app-rating>
      </div>`;
  }
}

customElements.define('app-card', Card);
