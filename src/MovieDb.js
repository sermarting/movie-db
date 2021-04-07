import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';

import './views/Movies/Movies.js'
import './views/Home/Home.js'
import './views/Search/Search.js'

import './components/Header/Header.js'
import './components/Footer/Footer.js'

export class MovieDb extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        --header-height: 45px;
        --footer-height: 350px;
        font-family: 'Open Sans';
        min-height: 100vh;
        display: grid;
        grid-auto-rows: var(--header-height) auto var(--footer-height);
        font-size: calc(10px + 2vmin);
      }
    `;
  }

  constructor() {
    super();
    this.title = 'Movie DB';
  }

  firstUpdated() {
    const node = this.renderRoot.querySelector('main');
    const router = new Router(node);

    router.setRoutes([
      { path: '/', component: 'view-home'},
      { path: '/movies', component: 'view-movies'},
      { path: '/search', component: 'view-search'}
    ])
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('app-search', this.handleSearch);
  }

  disconnectedCallback() {
    window.removeEventListener('app-search', this.handleSearch);
    super.disconnectedCallback();
  }

  handleSearch(event) {
    const { detail } = event;

    Router.go({
      pathname: '/search',
      search: `?query=${detail}`
    })
  }

  render() {
    return html`
      <app-header></app-header>
      <main>
        <h1>${this.title}</h1>
      </main>
      <app-footer></app-footer>
    `;
  }
}
