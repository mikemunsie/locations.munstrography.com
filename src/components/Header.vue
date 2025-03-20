<template>
  <div class="header">
    <Multiselect
      v-model="filters"
      placeholder="Filter Locations:"
      label="name"
      track-by="key"
      :options="options"
      :multiple="true"
      :taggable="true"
    />
  </div>
</template>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background: white;
  z-index: 1000;
  border-bottom: 1px solid #ccc;
}
</style>

<script setup lang="ts">
import sortBy from "lodash/sortBy";
import { ref, watchEffect } from "vue";
import Multiselect from "vue-multiselect";

import { Tags } from "@/models/tag";
import { Users } from "@/types";

const emit = defineEmits(["update:filters"]);

const filters = ref<string[]>([]);

const tag_options = sortBy(
  Object.entries(Tags).map(([name, key]) => ({ name, key })),
  "name"
);
const user_options = sortBy(
  Object.keys(Users).map((user) => {
    return {
      name: `user: ${Users[user]}`,
      key: `user:${Users[user]}`,
    };
  }),
  "name"
);
const options = [...tag_options, ...user_options];

watchEffect(() => {
  emit("update:filters", filters.value);
});
</script>