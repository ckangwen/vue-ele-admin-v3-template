import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user", // required 且唯一
  state: () => {
    return {
      name: "",
    };
  },
  actions: {
    updateName(name: string) {
      this.name = name;
    },
  },
});
