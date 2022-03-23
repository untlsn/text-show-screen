import { nanoid } from 'nanoid';

interface TextRoot {
  title: string,
  text: string,
}

interface Text extends TextRoot {
  id: string,
  create: number,
}

const useStore = defineStore('store', {
  state: () => ({
    texts: {} as Record<string, Text>,
  }),
  getters: {
    lastTexts: (store) => Object.values(store.texts).sort((a, b) => b.create - a.create).slice(0, 3),
    textesArray: (store) => Object.values(store.texts),
  },
  actions: {
    addText(text: TextRoot) {
      const id = nanoid(4);
      const create = new Date().valueOf();
      this.texts[id] = {
        id,
        create,
        ...text,
      };
    },
  },
});

export default useStore;