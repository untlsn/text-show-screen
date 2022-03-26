<script lang="ts" setup>
import useStore from '~/store/useStore';

const props = defineProps<{
  id?: string;
}>();

const emit = defineEmits<{
  (type: 'update:id', value: ''): void
}>();

const store = useStore();

const text = computed(() => store.textes[props.id!]);

const bools = reactive({
  remove: false,
  title: false,
  text: false,
});

const remove = () => {
  if (!bools.remove) {
    bools.remove = true;
    setTimeout(() => {
      bools.remove = false;
    }, 3000);
  } else {
    delete store.textes[props.id!];
    emit('update:id', '');
  }
};
</script>

<template>
  <div
    v-if="id"
    class="fixed top-0 right-0 h-screen bg-coffie-gray shadow p-8"
    @click.stop
  >
    <TextyInput v-model:value="text.title" v-model:enabled="bools.title" />
    <div>
      <p class="font-bold text-lg">
        Text:
      </p>
      <TextyArea v-model:value="text.text" v-model:enabled="bools.text" />
    </div>
    <div>
      <p>
        <strong class="text-lg">Skrót klawiszowy:</strong>
        <small class="pl-6">Spacja usuwa skrót</small>
      </p>
      <KeyInput v-model="text.shortcut" />
    </div>
    <div class="text-right space-x-4 fixed bottom-8 right-8">
      <button class="btn" @click="bools.title = !bools.title">
        Zmień tytuł
      </button>
      <button class="btn" @click="bools.text = !bools.text">
        Zmień text
      </button>
      <button class="btn" @click="remove">
        <span v-if="!bools.remove">Usuń</span>
        <span v-else>Na pewno?</span>
      </button>
    </div>
  </div>
</template>
