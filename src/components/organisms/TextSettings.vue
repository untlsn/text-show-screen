<script lang="ts" setup>
import useStore from '~/store/useStore';

const props = defineProps<{
  id?: string;
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
  }
};
</script>

<template>
  <div v-if="id" class="fixed bottom-0 left-0 w-screen bg-coffie-gray shadow p-8">
    <TextyInput v-model:value="text.title" v-model:enabled="bools.title" />
    <div>
      <p class="font-bold text-lg">
        Text:
      </p>
      <TextyArea v-model:value="text.text" v-model:enabled="bools.text" />
    </div>
    <div class="text-right space-x-4">
      <Button @click="bools.title = !bools.title">
        Zmień tytuł
      </Button>
      <Button @click="bools.text = !bools.text">
        Zmień text
      </Button>
      <Button @click="remove">
        <span v-if="!bools.remove">Usuń</span>
        <span v-else>Na pewno?</span>
      </Button>
    </div>
  </div>
</template>
