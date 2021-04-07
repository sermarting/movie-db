import { html, fixture, expect } from '@open-wc/testing';

import '../src/components/Card/Card.js';

describe('Card', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<app-card title="test" score=${5.5} image="null"></app-card>`);
  });

  it('renders title and score', () => {
    const title = element.shadowRoot.querySelector('.title');
    const score = element.shadowRoot.querySelector('.score');
    expect(title).to.exist;
    expect(title.textContent).to.equal('test');
    expect(score.querySelector('span').textContent).to.equal('5.5');
  });

  it('renders rating component', () => {
    const rating = element.shadowRoot.querySelector('app-rating');
    expect(rating).to.exist;
  });

});
