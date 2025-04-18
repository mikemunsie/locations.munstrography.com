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
import uniqBy from "lodash/uniqBy";
import { ref, watchEffect, computed } from "vue";
import Multiselect from "vue-multiselect";

import { Tags } from "@/models/tag";
import { Users } from "@/types";
import { locations } from "@/locations";

const emit = defineEmits(["update:filters"]);

const filters = ref<any[]>([]);

const tag_options = sortBy(
  Object.entries(Tags).map(([name, key]) => ({ 
    name: `tag: ${name}`,
    key: `tag: ${name}`
  })),
  tag => tag.name.toLowerCase()
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

let city_options = sortBy(
  locations.map((location) => {
    return {
      name: `city: ${location.city}`,
      key:  `city: ${location.city}`
    }
  }),
  location => location.name.toLowerCase().replace("the", "").replace("city:", "").trim()
);
city_options = uniqBy(city_options, "name");


const options = computed(() => {
  const options_raw = [...tag_options];
  const filters_used = filters.value.map(filter => filter.key);
  if (!filters_used.find(filter => filter.indexOf("city:") > -1)) {
    options_raw.push(...city_options);
  }
  options_raw.push(...user_options);
  return options_raw;
})

watchEffect(() => {
  emit("update:filters", filters.value);
});
</script>