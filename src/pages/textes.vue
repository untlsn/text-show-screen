<script lang="ts" setup>
  import useStore from '~/store/useStore';
  const store = useStore();

</script>


<template>
  <div class="flex items-center justify-center">
    <div class="grid p-24 gap-8 grid-cols-4">
      <TextTile
        v-for="(textProps, i) in store.textesArray"
        :key="textProps.id"
        v-bind="textProps"
        :style="{ '--top': `-${Math.floor(i/4) * 120}%`, '--left': `-${i%4 * 110}%` }"
        class="transition-transform tile hover:(cursor-pointer)"
      />
    </div>
  </div>
</template>

<style lang="scss">
  @keyframes move-from {
    from {
      transform: translate(var(--left), var(--top));
      opacity: 0;
    }
    70% {
      transform: translate(0);
      opacity: .5;
    }
    to {
      opacity: 1;
    }
  }

  .tile {
    --top: '0%';
    --left: '0%';
    animation: move-from 2s;

    &:hover {
      transform: scale(115%);
    }
  }
</style>