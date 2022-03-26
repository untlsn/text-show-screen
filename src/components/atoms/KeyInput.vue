<script lang="ts" setup>

defineProps<{
  modelValue?: string;
}>();

defineEmits<{
  (type: 'update:modelValue', value: string): void
}>();

</script>

<template>
  <button
    @click="ev => (ev.target as HTMLButtonElement).focus()"
    @keydown.prevent="ev => $emit('update:modelValue', ev.key)"
  >
    {{ modelValue }}
  </button>
</template>

<style scoped>
button {
  @apply bg-transparent text-2xl font-bold mb-6 rounded-lg
    border-2 border-transparent p-1 min-w-1/2 text-left;
}
button:focus {
  @apply border-coffie-cream outline-none;
}
</style>
