<script lang="ts" setup>
defineProps<{
  title: string,
  text: string,
}>();
</script>

<template>
  <article
    class="w-75 p-10 rounded-xl bg-white bg-opacity-2 orb space-y-6"
  >
    <h1 class="h-5 w-full overflow-hidden overflow-ellipsis">
      {{ title.slice(0, 20) }}
      <span v-if="text.length > 50">...</span>
    </h1>
    <p class="h-13 w-full overflow-hidden">
      {{ text.slice(0, 50) }}
      <span v-if="text.length > 50">...</span>
    </p>
  </article>
</template>

<style lang="scss" scoped>
.orb {
  --shadow-size: 50px;
  @apply relative overflow-hidden;
  &::before {
    content: '';
    box-shadow: 0 0 var(--shadow-size) var(--shadow-size) #523019;
    @apply absolute right-0 top-20 w-1 h-1 rounded-full bg-coffie-brown;
  }
}
</style>
