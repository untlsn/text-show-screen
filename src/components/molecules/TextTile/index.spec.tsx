import { mount } from '@cypress/vue';
import '$css';
import TextTile from './index.vue';

describe('TextTile', () => {
  it('should work', () => {
    mount(() => (
      <div class="bg-coffie-black text-white h-screen flex items-center justify-center">
        <TextTile title="title" text="text" />
      </div>
    ));

    cy.get('h1').should('contain.text', 'title');
    cy.get('p').should('contain.text', 'text');
  });
});
