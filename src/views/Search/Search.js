import { LitElement, html, css } from 'lit-element';
import { IMAGE_RESIZED_PATH, IMAGE_DEFAULT } from '../../constants/paths.js';
import { search } from '../../services/index.js';

import '../../components/Card/Card.js';


export class Search extends LitElement {
  static get properties() {
    return {
      searchResults: { type: Object }
    }
  }

  constructor() {
    super();

    this.searchResults = { results: [] };
  }

  async firstUpdated() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');

    if (query) {
      const searchRes = await search(query);
      this.searchResults = searchRes;
    }
  }

  static get styles () {
    return css`
      :host {
        --min_column_size: 100px;
        display: block;
        padding: 20px 40px;
      }
      .card-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(var(--min_column_size), 1fr));
        grid-column-gap: 1em;
      }
      app-card {
        margin: 10px auto;
      }
      .search-box-container {
        display: flex;
        justify-content: center;
      }
      @media only screen and (min-width: 758px) {
        :host {
          --min_column_size: 200px;
          display: block;
          padding: 20px 40px;
        }
        .search-box-container {
          justify-content: flex-end;
        }
      }
    `
  }

  imagePath(movie) {
    return movie.poster_path ? `${IMAGE_RESIZED_PATH}${movie.poster_path}` : IMAGE_DEFAULT;
  }

  render() {
    return html`
      <div class="search-box-container">
        <app-searchbox @app-search="${this.handleSearch}"></app-searchbox>
      </div>
      <h3>Resultado de búsqueda</h3>
      ${this.searchResults.results.length === 0
      ? html `<p>No existen resultados</p>` :
        html `<div class="card-list">
        ${this.searchResults.results.map(
          (movie) =>
            html`<app-card image="${this.imagePath(movie)}" title="${movie.name}" score="${movie.vote_average}"></app-card>`
          )
        }
      </div>`}
    `;
  }

  async handleSearch(event) {
    const { detail } = event;

    event.stopPropagation();
    const searchRes = await search(detail);
    this.searchResults = searchRes;
  }
}

customElements.define('view-search', Search);
