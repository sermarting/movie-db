import { LitElement, html, css } from 'lit-element';
import 'fa-icons';

export class SearchBox extends LitElement {

  static get properties() {
    return {
      value: { type: String },
      placeholder: { type: String }
    }
  }

  static get styles() {
    return css`
      :host {
        margin: 10px;
        --search-box-color: #c9c9c9;
      }
      .search-container {
        display: inline-flex;
        border: 1px solid var(--search-box-color);
        border-radius: 50px;
        overflow: hidden;
        width: 300px;
      }
      fa-icon {
        color: var(--search-box-color);
        padding: 0.5rem 0.5rem 0.5rem 1rem;
        line-height: 15px;
      }
      #search-box {
        border: 0;
        color: var(--search-box-color);
        outline: none;
        font-size: 15px;
        width: 100%;
      }
      #search-box::placeholder {
        color: var(--serach-box-color);
      }

    `;
  }

  constructor() {
    super();
    this.value = '';
    this.placeholder = 'Busca tu película o serie';
  }

  render() {
    return html`
    <div class="search-container">
      <fa-icon class="fas fa-search" size="15px"></fa-icon>
      <input id="search-box" type="text" placeholder=${this.placeholder} .value=${this.value} @input=${this.handleInputChange} @keypress=${this.handleKeyPress} />
    </div>

    `;
  }

  handleSearch() {
    this.dispatchEvent(new CustomEvent('app-search', { detail: this.value, bubbles: true, composed: true }));
  }

  handleInputChange(e) {
    this.value = e.target.value;
  }

  handleKeyPress(e) {
    if (e.code === "Enter" && this.value && this.value.length > 0) {
      this.handleSearch();
    }
  }

}

customElements.define('app-searchbox', SearchBox);
