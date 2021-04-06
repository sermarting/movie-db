import { LitElement, html, css } from 'lit-element';

import 'fa-icons';

export class Menu extends LitElement {

  static get properties() {
    return {
      items: { type: Array },
      isOpen: { type: Boolean }
    }
  }

  constructor() {
    super();

    this.items = [];
    this.isOpen = false;
  }

  static get styles() {
    return css`
      :host {
        align-self: center;
      }

      #menu-content {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top:-100%;
        left:0;
        text-align: center;
        z-index: 1;
        background-color: rgba(0,0,0,0.9);
        transition: 0.5s;
      }

      #menu-content.open {
        transform: translateY(100%);
      }

      #menu-content nav {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        width: 100vw;
      }

      #menu-content nav ul {
        list-style-type: none;
        padding: 0;
      }

      #menu-content nav ul li {
        font-size: 25px;
        padding: 15px;
      }

      #menu-content nav ul li a {
        color: #818181;
        transition: 0.3s;
        text-decoration: none;
        cursor: pointer;
      }

      #menu-content nav ul li a.active {
        color: #f1f1f1;
      }

      #menu-content nav ul li a:hover{
        color: #f1f1f1;
      }

      @media only screen and (min-width: 758px) {
        .close-button {
          position: absolute;
          top: 75px;
          right: 75px;
        }
      }
    `
  }

  render() {
    return html`
      <div id="menu">
        <fa-icon class="fas fa-bars" size="1.5em" @click="${this.openMenu}"></fa-icon>
        <div id="menu-content" class="${this.isOpen ? 'open' : ''}">
          <nav>
            <ul>
              ${this.items.map(
                (item) => html`
                    <li>
                      <a href="${item.url}" title="${item.title}" class="${this.isActive(item.url) ? 'active' : ''}" @click="${this.closeMenu}">
                        ${item.title}
                      </a>
                    </li>
                  `
                )
              }
            </ul>
          </nav>
          <fa-icon class="fas fa-times-circle close-button" size="3em" @click="${this.closeMenu}"></fa-icon>
        </div>
      </div>
    `;
  }

  openMenu() {
    this.isOpen = true;
  }

  closeMenu() {
    this.isOpen = false;
  }

  isActive(url) {
    return url === window.location.pathname;
  }
}

customElements.define('app-menu', Menu);
