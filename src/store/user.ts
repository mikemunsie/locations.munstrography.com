import { defineStore } from "pinia";

import { UserModel } from "@/models/user";

export const useUserStore = defineStore("user", {
  state: () => {
    return new UserModel();
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    async fetchUser() {
      this.email = "test";
    },
  },
});
