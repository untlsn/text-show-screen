import { mount } from '@cypress/vue';
import '$css';
import TextyArea from './index.vue';
import noop from '~/helpers/noop';

interface Props {
  value: string
  enabled: boolean
  onValue(value: string): void
  onEnabled(enabled: boolean): void
  type?: 'text'|'textarea'
}

describe('TextField', () => {
  const mountEl = ({
    value = '', enabled = true, onValue = noop, onEnabled = noop, type,
  }: Partial<Props>) => {
    const props = {
      value,
      enabled,
      type,
      'onUpdate:value': onValue,
      'onUpdate:enabled': onEnabled,
    };
    mount(() => <TextyArea {...props} />);
  };

  it('should work', () => {
    const value = ref('');
    mountEl({ value: value.value, onValue: (val) => value.value = val });

    const someType = 'some type';
    cy.get('textarea').type(someType).should('have.value', someType).then(() => {
      expect(value.value).to.equal(someType);
    });
  });
  it('should be disabled when enabled is false', () => {
    mountEl({ enabled: false });

    cy.get('textarea').should('be.disabled');
  });
  it('should run enabled event on enter', () => {
    const enabled = ref(true);
    mountEl({ enabled: enabled.value, onEnabled: (val) => enabled.value = val });

    cy.get('textarea').should('not.be.disabled').type('Some text').type('{enter}', { force: true })
      .should('be.disabled');
  });
  it('should be textarea when type is textarea', () => {
    mount;
  });
});
