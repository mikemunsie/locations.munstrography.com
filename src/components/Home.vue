<template>
  <div v-if="geoLocationStatus === 'none'">
    <h1>DFW Car Spots</h1>
    <div style="text-align: left; padding: 15px">
      <p>
        Ready to find some neat locations for car photography in the DFW area?
        Click the button below to begin!
      </p>
      <div class="text-center">
        <button
          @click="init"
          class="mt-7 mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          style="width: 100%"
        >
          Let's Begin!
        </button>
      </div>
      <p style="margin-top: 7.5px; margin-bottom: 15px; font-size: 12px">
        <strong>Note:</strong> We have to ask your permission for geolocation so
        we can find locations near you.
      </p>
      <div style="display: flex; justify-content: center">
        <img class="img" :src="`${publicPath}screenshot.png`" />
      </div>
      <div style="margin-top: 15px"></div>
      <div
        style="border-top: 1px solid #ccc; padding-top: 15px; font-size: 10px"
      >
        <div>&copy; {{ new Date().getFullYear() }} Michael Munsie</div>
        <div>
          For questions or location submission, send me a message on
          <a href="https://www.instagram.com/munstrography">instagram</a>.
        </div>
      </div>
    </div>
  </div>
  <div v-if="geoLocationStatus === 'loading'">
    <h1>Locations</h1>
    <div style="text-align: left; padding: 15px; padding-bottom: 7.5px">
      <p><i>Just a moment as we request permissions...</i></p>
    </div>
    <div style="text-align: left; padding-left: 15px; font-size: 12px">
      <p>
        <i
          >If this doesn't work, don't panic, I'll just place you in the middle
          of DFW in 5 seconds...</i
        >
      </p>
    </div>
  </div>
  <div v-else-if="geoLocationStatus === 'fail'">
    <h1 class="mb-3">Welp.</h1>
    <div style="text-align: left">
      <p class="mb-5">
        Looks like we have an error. Did you open this in Instagram / Discord /
        some other app? Try opening this link in a browser. If that doesn't
        work, look into adjusting your security settings.
      </p>
      <button
        @click="onCopySite"
        class="mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Copy link to site
      </button>
      <div v-if="isSafari">
        <p><strong>For safari:</strong></p>
        <ul class="mb-3" style="text-align: left">
          <li>On your phone, proceed to settings -> privacy.</li>
          <li>Goto Location Services.</li>
          <li>Goto Safari Websites and allow location access.</li>
        </ul>
        <img :src="`${publicPath}/safari_help.jpg`" />
      </div>
    </div>
  </div>
  <div v-else-if="geoLocationStatus === 'success'" class="home">
    <Header v-model:filters="filters" />
    <div class="displayingLocations mb-2">
      Found <strong>{{ filteredLocations.length }}</strong> awesome locations.
    </div>
    <LocationCard
      v-for="location in filteredLocations"
      :key="location.name"
      :filters="filters"
      :location="location"
    />
  </div>
</template>

<style lang="scss">
.home {
  margin-top: 80px;
}
.displayingLocations {
  font-size: 12px;
  text-align: left;
  display: block;
}
</style>

<script setup lang="ts">
import { computed, Ref, ref, watchEffect } from "vue";
import { copyText } from "vue3-clipboard";

import { SharedLocationWithDistance } from "@/models/location";
import { getLocationsByDistance } from "../utils/sharedLocation";
import {
  geoLocationStatus,
  updateUserLocation,
  userCoords,
} from "../utils/userCoords";
import Header from "./Header.vue";
import LocationCard from "./LocationCard.vue";

const publicPath = import.meta.env.BASE_URL;
const filters = ref<{ name: string; key: string }[]>([]);
const locationsByDistance: Ref<SharedLocationWithDistance[]> = ref([]);
const filterValues = computed(() => filters.value.map((filter) => filter.key));
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const hasInit = ref(false);

function onCopySite() {
  copyText("https://locations.munstrography.com", undefined, (error) => {
    if (error) {
      alert("Can not copy url");
    } else {
      alert("Site url copied!");
    }
  });
}

async function init() {
  hasInit.value = true;
  await updateUserLocation();
  locationsByDistance.value = await getLocationsByDistance(userCoords.value);
  window.scrollTo(0, 0);
}

const filteredLocations = computed(() => {
  if (!filterValues.value.length) return locationsByDistance.value;
  return locationsByDistance.value.filter((sharedLocation) => {
    return filterValues.value.every((filter) => {
      return sharedLocation.tags.includes(filter);
    });
  });
});

watchEffect(() => {
  filterValues.value;
  window.scrollTo(0, 0);
});
</script>