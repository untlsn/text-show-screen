import { mount } from '@cypress/vue';
import '$css';
import TextField from './index.vue';
import noop from '~/helpers/noop';

interface Props {
  type?: 'text' | 'textarea',
  label: string,
  value: string,
  onChange(str: string): void
}

describe('TextField', () => {
  const mountEl = ({
    type, label = 'label', value = '', onChange = noop,
  }: Partial<Props>) => {
    mount(() => (
      <TextField
        type={type}
        label={label}
        modelValue={value}
        onUpdate:modelValue={onChange}
      />
    ));
  };

  it('should work', () => {
    const value = ref('');
    mountEl({ value: value.value, onChange: (val) => value.value = val });
    const typeValue = 'some worlds';
    cy.get('input').type(typeValue).should('have.value', typeValue);
  });
  it('should add label into label with colon', () => {
    const customLabel = 'custom label';
    mountEl({ label: customLabel });

    cy.get('label').should('contain.text', `${customLabel}:`);
  });
  it('should be textarea when type is textarea', () => {
    mountEl({ type: 'textarea' });

    cy.get('textarea');
  });
});
