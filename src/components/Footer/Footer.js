import { LitElement, html, css } from 'lit-element';

import 'fa-icons';

export class Footer extends LitElement {
  static get properties() {
    return {
      logo: { type: String}
    }
  }

  constructor() {
    super();

    this.logo = 'assets/logo.png';
  }

  static get styles() {
    return css`
      :host {
        display: none;
      }

      @media only screen and (min-width: 758px) {
        :host {
          display: block;
          color: #fff;
          font-size: 0.7em;
        }

        footer {
          height: 100%;
          background-color: #000;
        }

        .content {
          width: 65%;
          height: 100%;
          margin: auto;
          display: flex;
          flex-direction: column;
        }

        .title {
          font-size: 1.3em;
          font-weight: bold;
          margin: 30px 0;
        }

        .footer__main {
          display: flex;
          justify-content: space-between;
        }

        .footer__main nav {
          display: flex;
          flex-direction: column;
        }

        .footer__main nav a {
          font-size: 0.8em;
          color: #f1f1f1;
          text-decoration: none;
          padding: 5px;
        }

        .footer__bottom {
          display: flex;
          justify-content: space-between;
          margin: 30px 0;
        }

        .footer__bottom img {
          width: 100px;
        }

        .footer__bottom-links {
          display: flex;
        }

        .social-media {
          margin-right: 30px;
        }

        .social-media a {
          margin: auto 5px;
        }

        .social-media a fa-icon {
          background: #fff;
          color: #000;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          text-align: center;
          line-height: 30px;
        }

        #language-selector {
          font-size: 0.8em;
        }

        #language-selector span {
          font-weight: bolder;
        }
      }
    `
  }

  render() {
    return html`
      <footer>
        <div class="content">
          <p class="title"> ¿Preguntas? Llama al 900442233 </p>
          <div class="footer__main">
            <nav>
              <a href="#" title="Preguntas frecuentes">Preguntas frecuentes</a>
              <a href="#" title="Inversores">Inversores</a>
              <a href="#" title="Formas de ver">Formas de ver</a>
              <a href="#" title="Información corporativa">Información corporativa</a>
              <a href="#" title="Originales de Netflix">Originales de Netflix</a>
            </nav>
            <nav>
              <a href="#" title="Centro de ayuda">Centro de ayuda</a>
              <a href="#" title="Empleo">Empleo</a>
              <a href="#" title="Términos de uso">Términos de uso</a>
              <a href="#" title="Contáctanos">Contáctanos</a>
            </nav>
            <nav>
              <a href="#" title="Cuenta">Cuenta</a>
              <a href="#" title="Canjear tarjetas regalo">Canjear tarjetas regalo</a>
              <a href="#" title="Privacidad">Privacidad</a>
              <a href="#" title="Prueba de velocidad">Prueba de velocidad</a>
            </nav>
            <nav>
              <a href="#" title="Zona de prensa">Zona de prensa</a>
              <a href="#" title="Comprar tarjetas regalo">Comprar tarjetas regalo</a>
              <a href="#" title="Preferencias de cookies">Preferencias de cookies</a>
              <a href="#" title="Avisos legales">Avisos legales</a>
            </nav>
          </div>
          <div class="footer__bottom">
            <img src="${this.logo}" alt="logo" />
            <div class="footer__bottom-links">
              <div class="social-media">
                <a href="#" title="twitter"> <fa-icon class="fab fa-twitter"></a>
                <a href="#" title="instagram"> <fa-icon class="fab fa-instagram"></a>
                <a href="#" title="facebook"> <fa-icon class="fab fa-facebook-f"></a>
                <a href="#" title="youtube"> <fa-icon class="fab fa-youtube"></a>
                <a href="#" title="rss"> <fa-icon class="fas fa-rss"></a>
              </div>
              <div id="language-selector">
                <span>Español</span> | English
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-footer', Footer);
