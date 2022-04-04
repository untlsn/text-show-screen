import { mount } from '@cypress/vue';
import '$css';
import KeyInput from './index.vue';

describe('KeyInput', () => {
  beforeEach(() => {
    const value = ref('');
    mount(() => <KeyInput
      modelValue={value.value}
      onUpdate:modelValue={(newValue) => {
        value.value = newValue;
      }
      }
    />);
  });

  it('should work', () => {});
  it('should have "brak" when no key is defined', () => {
    cy.get('input').should('have.value', 'brak');
  });
  it('should handle letters and numbers', () => {
    const valueCheck = (char: string) => {
      cy.get('input').type(char).should('have.value', char);
    };

    valueCheck('a');
    valueCheck('u');
    valueCheck('b');
    valueCheck('6');
    valueCheck('9');
  });
  it('should handle non char keys like Enter, Ctrl', () => {
    cy.get('input').type('{enter}').should('have.value', 'Enter');
    cy.get('input').type('{ctrl}').should('have.value', 'Control');
  });
  it('should clear input on space', () => {
    cy.get('input').type(' ').should('have.value', 'brak');
  });
});
