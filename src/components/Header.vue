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

const emit = defineEmits(["update:filters"]);

const filters = ref<string[]>([]);
const options = sortBy(
  Object.entries(Tags).map(([name, key]) => ({ name, key })),
  "name"
);

watchEffect(() => {
  emit("update:filters", filters.value);
});
</script>