import { html, fixture, expect } from '@open-wc/testing';

import '../src/movie-db.js';

describe('MovieDb', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<movie-db></movie-db>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('Movie DB');
  });
});
