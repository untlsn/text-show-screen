<script lang="ts" setup>
import { nanoid } from 'nanoid';

const id = ref(`input-${nanoid(4)}`);

defineProps<{
  type?: 'text' | 'textarea'
  label: string
  modelValue: string
}>();

defineEmits<{
  (emit: 'update:modelValue', value: string): void
}>();

const uniProps = {
  id: id.value,
  class: 'border-1 shadow px-1 rounded bg-white bg-opacity-5 border-white border-opacity-20'
    + ' hover:bg-opacity-15'
    + ' focus:bg-opacity-10',
};
</script>

<template>
  <div>
    <label :for="id" class="block">{{ label }}:</label>
    <textarea
      v-if="type == 'textarea'"
      v-bind="uniProps"
      class="h-30 w-60 resize-none"
      :value="modelValue"
      @input="(ev: any) => $emit('update:modelValue', ev.target.value)"
    />
    <input
      v-else
      :type="type"
      v-bind="uniProps"
      :value="modelValue"
      @input="(ev: any) => $emit('update:modelValue', ev.target.value)"
    >
  </div>
</template>
