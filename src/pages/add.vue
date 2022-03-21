<script lang="ts" setup>
  import useStore from '~/store/useStore';

  const text = reactive({
    title: '',
    text: '',
  });

  const store = useStore();
</script>


<template>
  <div class="flex flex-col items-center justify-center min-h-screen space-y-12">
    <form 
      class="w-100 p-10 rounded-xl bg-white bg-opacity-2 orb space-y-6"
      @submit.prevent="store.addText(text)"
    >
      <TextField v-model="text.title" label="Tytuł" />
      <TextField v-model="text.text" label="Wklej tekst" type="textarea" />
      <div class="text-right pr-15">
        <Button>
          Dodaj
        </Button>
      </div>
    </form>
    <div class="flex gap-4 h-44">
      <article 
        v-for="it in store.lastTexts"
        :key="it.id"
        class="w-75 p-10 rounded-xl bg-white bg-opacity-2 orb space-y-6"
        :style="({ '--shadow-size': '50px' } as any)"
      >
        <h1 class="h-5 w-full overflow-hidden overflow-ellipsis">
          {{ it.title.slice(0, 20) }}
          <span v-if="it.text.length > 50">...</span>
        </h1>
        <p class="h-13 w-full overflow-hidden">
          {{ it.text.slice(0, 50) }}
          <span v-if="it.text.length > 50">...</span>
        </p>
      </article>
    </div>
  </div>
</template>


<style lang="scss">
body {
  @apply bg-coffie-black text-coffie-cream;
}
.orb {
  --shadow-size: 80px;
  @apply relative overflow-hidden;
  &::before {
    content: '';
    box-shadow: 0 0 var(--shadow-size) var(--shadow-size) #523019;
    @apply absolute right-0 top-20 w-1 h-1 rounded-full bg-coffie-brown;
  }
}
</style>