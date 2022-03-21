<script lang="ts" setup>

</script>


<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="w-100 p-10 rounded-xl bg-white bg-opacity-2 orb space-y-6">
      <TextField label="Tytuł" />
      <TextField label="Wklej tekst" type="textarea" />
      <div class="text-right pr-15">
        <Button>
          Dodaj
        </Button>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
body {
  @apply bg-coffie-black text-coffie-cream;
}
.orb {
  @apply relative overflow-hidden;
  &::before {
    --shadow-size: 80px;
    content: '';
    box-shadow: 0 0 var(--shadow-size) var(--shadow-size) #523019;
    @apply absolute right-0 top-20 w-1 h-1 rounded-full bg-coffie-brown;
  }
}
</style>