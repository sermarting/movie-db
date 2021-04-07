import { LitElement, html, css } from 'lit-element';
import { getNews } from '../../services/index.js';
import { IMAGE_RESIZED_PATH } from '../../constants/paths.js';

import '../../components/Card/Card.js';
import '../../components/SearchBox/SearchBox.js';

export class Home extends LitElement {
  static get properties() {
    return {
      movieList: { type: Array },
      serieList: { type: Array }
    }
  }

  constructor() {
    super();

    this.movieList = [];
    this.serieList = [];
  }

  async firstUpdated() {
    const movies = await getNews('movie');
    const series = await getNews('tv');

    this.getLists(movies.results, series.results);
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
        .search-box-container {
          justify-content: flex-end;
        }
      }
    `
  }

  render() {
    return html`
      <div class="search-box-container">
        <app-searchbox></app-searchbox>
      </div>
      <h3>Novedades peliculas</h3>
      <div class="card-list">
        ${this.movieList.map(
          (movie) =>
            html`<app-card image="${IMAGE_RESIZED_PATH}${movie.poster_path}" title="${movie.title}" score="${movie.vote_average}"></app-card>`
          )
        }
      </div>


      <h3>Novedades series</h3>
      <div class="card-list">
        ${this.serieList.map(
          (serie) =>
            html`<app-card image="${IMAGE_RESIZED_PATH}${serie.poster_path}" title="${serie.name}" score="${serie.vote_average}"></app-card>`
          )
        }
      </div>
    `;
  }

  getLists(movies = [], series = []) {
    this.movieList = movies.slice(0, 5);
    this.serieList = series.slice(0, 5);
  }
}

customElements.define('view-home', Home);
