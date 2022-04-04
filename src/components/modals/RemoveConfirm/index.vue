<script lang="ts" setup>import { nanoid } from 'nanoid';

defineEmits<{
  (type: 'close'): void
  (type: 'remove'): void
}>();

const randomText = nanoid(8);
const confirmText = ref('');

const textSame = computed(() => randomText == confirmText.value);
</script>

<template>
  <div class="bg-black bg-opacity-30 fixed-full-center text-white">
    <div class="p-10 rounded-xl bg-coffie-gray orb space-y-4">
      <div>
        <p>Jesteś pewien, że chcesz usunąć wszystko?</p>
        <p>Tej akcji nie można cofnąć!</p>
      </div>
      <div>
        <strong>{{ randomText }}</strong>
        <TextField v-model="confirmText" label="Wpisz powyższy tekst by usunąć" />
      </div>
      <div class="space-x-4 text-right">
        <button class="btn" @click="$emit('close')">
          Anuluj
        </button>
        <div class="inline-block relative">
          <div
            class="h-full w-full absolute inset-0 bg-coffie-gray bg-opacity-70"
            :class="{ 'hidden': textSame }"
          />
          <button
            :disabled="!textSame"
            class="btn font-bold"
            :class="{ 'text-red-500': textSame }"
            @click="$emit('remove'); $emit('close')"
          >
            Usuń
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.fixed-full-center {
  @apply fixed top-0 left-0 h-screen w-screen flex items-center justify-center;
}
</style>
