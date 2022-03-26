<script lang="ts" setup>

const props = defineProps<{
  modelValue?: string;
}>();

defineEmits<{
  (type: 'update:modelValue', value: string): void
}>();

const value = computed(() => props.modelValue?.trim?.() || 'brak');

</script>

<template>
  <input
    :value="value"
    @keydown.prevent="ev => $emit('update:modelValue', ev.key.trim())"
  >
</template>

<style scoped>
input {
  @apply bg-transparent text-2xl font-bold rounded-lg
    border-2 border-transparent p-1 min-w-1/2 text-left
    capitalize;
}
input:focus {
  @apply border-coffie-cream outline-none;
}
</style>
