import { LitElement, html, css } from 'lit-element';

import '../Menu/Menu.js';

export class Header extends LitElement {

  static get properties() {
    return {
      logo: { type: String }
    }
  }

  constructor() {
    super();

    this.logo = 'assets/logo.png';
    this.menuItems = [
      {
        title: 'Inicio',
        url: '/'
      },
      {
        title: 'Movies',
        url: '/movies'
      }
    ]
  }

  static get styles() {
    return css`
      header {
        display: flex;
        justify-content: space-between;
        padding: 10px 25px;
        background-color: #000;
        color: #fff;
      }

      img {
        max-width: 125px;
      }
    `;
  }

  render() {
    return html`
      <header>
        <img src=${this.logo} alt="logo" />
        <app-menu .items=${this.menuItems}></app-menu>
      </header>
    `;
  }
}

customElements.define('app-header', Header);


