<script lang="ts" setup>
const props = defineProps<{
  value: string;
  enabled: boolean;
}>();

defineEmits<{
  (emit: 'update:value', value: string): void;
  (emit: 'update:enabled', value: boolean): void;
}>();

const inputRef = ref<HTMLInputElement>();

watchEffect(() => {
  if (props.enabled) {
    setTimeout(() => {
      inputRef.value?.focus();
    }, 5);
  }
});
</script>

<template>
  <textarea
    :ref="ref => inputRef = (ref as any)"
    :disabled="!enabled"
    :value="value"
    class="bg-transparent text-2xl font-bold mb-6 rounded focus:underline"
    @keydown.enter="$emit('update:enabled', !enabled)"
    @input="(ev: any) => $emit('update:value', ev.target.value)"
  />
</template>
