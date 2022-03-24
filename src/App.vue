<script setup lang="ts">
import useStore from './store/useStore';

useHead({
  title: 'Vitesse',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
});

const store = useStore();
if (localStorage) {
  store.$patch(JSON.parse(localStorage.getItem(store.$id)!));
  store.$subscribe(() => {
    localStorage.setItem(store.$id, JSON.stringify({
      textes: store.textes,
    }));
  });
}

</script>

<template>
  <RouterView />
</template>

<style>
body {
  @apply bg-coffie-black text-coffie-cream;
}
</style>