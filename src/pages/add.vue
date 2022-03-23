<script lang="ts" setup>
  import useStore from '~/store/useStore';
  import TextTile from '~/components/molecules/TextTile.vue';

  const text = reactive({
    title: '',
    text: '',
  });

  const store = useStore();
</script>


<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
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
    <div v-if="store.lastTexts.length">
      <p class="py-6">
        Ostatnio dodane:
      </p>
      <div class="flex gap-4">
        <TextTile 
          v-for="(textProps, i) in store.lastTexts" 
          :key="textProps.id"
          v-bind="textProps"
          :style="{ '--left': i == 0 ? '115%' : i == 2 ? '-115%' : '0' }"
          class="move-x"
        />
      </div>
      <p class="text-right pr-12 pt-4">
        <RouterLink to="/textes">
          Więcej...
        </RouterLink>
      </p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.orb {
  --shadow-size: 80px;
  @apply relative overflow-hidden;
  &::before {
    content: '';
    box-shadow: 0 0 var(--shadow-size) var(--shadow-size) #523019;
    @apply absolute right-0 top-20 w-1 h-1 rounded-full bg-coffie-brown;
  }
}
@keyframes move-x-anim {
  from {
    transform: translateX(var(--left));
    opacity: 0;
  }
  70% {
    transform: translateX(0);
    opacity: .5;
  }
  to {
    opacity: 1;
  }
}

.move-x {
  --left: 0;
  animation: move-x-anim 1s;
}
</style>
