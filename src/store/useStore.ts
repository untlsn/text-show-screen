import { nanoid } from 'nanoid';

interface TextRoot {
  title: string,
  text: string,
}

interface Text extends TextRoot {
  id: string,
  create: number,
  shortcut?: string,
}

const useStore = defineStore('store', {
  state: () => ({
    textes: {} as Record<string, Text>,
  }),
  getters: {
    lastTexts: (store) => Object.values(store.textes)
      .sort((a, b) => b.create - a.create).slice(0, 3),
    textesArray: (store) => Object.values(store.textes),
    includes: (store) => (id: string) => Object.keys(store.textes).includes(id),
  },
  actions: {
    addText(text: TextRoot) {
      const id = nanoid(4);
      const create = new Date().valueOf();
      this.textes[id] = {
        id,
        create,
        ...text,
      };
    },
  },
});

export default useStore;
