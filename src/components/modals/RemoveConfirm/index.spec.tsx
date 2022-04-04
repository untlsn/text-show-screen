import { mount } from '@cypress/vue';
import '$css';
import RemoveConfirm from './index.vue';
import noop from '~/helpers/noop';

interface Props {
  onClose(): void
  onRemove(): void
}

describe('RemoveConfirm', () => {
  const mountEl = (props: Partial<Props>) => {
    mount(() => (
      <RemoveConfirm
        onClose={props.onClose || noop}
        onRemove={props.onRemove || noop}
      />
    ));
  };

  it('should run close event on Anuluj', () => {
    let clicked = false;
    mountEl({ onClose: () => clicked = true });

    cy.get('button').first().click().then(() => {
      expect(clicked).to.be.true;
    });
  });
  describe('second button', () => {
    beforeEach(() => {
      mountEl({});
    });
    it('should be disabled when text is invalid', () => {
      cy.get('strong').invoke('text').then((text) => {
        cy.get('input').type(`${text} invalid`);
        cy.get('button').last().should('be.disabled');
      });
    });
    it('should not be disabled when text is valid', () => {
      cy.get('strong').invoke('text').then((text) => {
        cy.get('input').type(text);
        cy.get('button').last().should('not.be.disabled');
      });
    });
  });
});
