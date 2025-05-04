<template>
  <div v-if="geoLocationStatus === 'none'">
    <img
      src="/logo.png"
      style="max-width: 200px; margin: auto; margin-top: 30px"
      class="img"
    />
    <div style="text-align: left; padding: 15px">
      <p>
        Ready to find some neat locations for car photography in the DFW area?
        Click the button below to begin!
      </p>
      <div class="text-center">
        <button
          @click="init"
          class="mt-7 mb-3 bg-blue-500 hover:bg-blue-400 text-black font-bold py-2 px-4 rounded"
          style="width: 100%"
        >
          Let's Begin!
        </button>
      </div>
      <div class="text-center">or</div>
      <div class="text-center">
        <button
          @click="submit_spot"
          class="mt-3 mb-5 bg-fuchsia-800 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded"
          style="width: 100%"
        >
          Submit a Spot
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
    <div
      style="
        text-align: left;
        padding-left: 15px;
        padding-right: 15px;
        font-size: 12px;
      "
    >
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
      <div style="text-align: center">
        <button
          @click="onCopySite"
          style="width: 100%"
          class="mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Copy link to site
        </button>
        <div class="mb-3">Or</div>

        <button
          @click="onUseWithoutGPS"
          style="width: 100%"
          class="mb-5 bg-fuchsia-300 hover:bg-fuchsia-400 text-black font-bold py-2 px-4 rounded"
        >
          Continue to use without GPS
        </button>
      </div>
      <div v-if="isSafari">
        <p><strong>For safari:</strong></p>
        <ul class="mb-3" style="text-align: left">
          <li>On your phone, proceed to settings -> privacy.</li>
          <li>Goto Location Services.</li>
          <li>Goto Safari Websites and allow location access.</li>
        </ul>
        <img :src="`/safari_help.jpg`" />
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
      @update_starting_location="handle_update_starting_location"
      :starting_location="starting_location"
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
import { getDistance, convertDistance } from "geolib";

import { SharedLocationWithDistance } from "@/models/location";
import { getLocationsByDistance } from "../utils/sharedLocation";
import {
  geoLocationStatus,
  updateUserLocation,
  use_default_coords,
  userCoords,
} from "../utils/userCoords";
import Header from "./Header.vue";
import LocationCard from "./LocationCard.vue";
import { sortBy } from "lodash";

const publicPath = import.meta.env.BASE_URL;
const filters = ref<{ name: string; key: string }[]>([]);
const locationsByDistance: Ref<SharedLocationWithDistance[]> = ref([]);
const filterValues = computed(() => filters.value.map((filter) => filter.key));
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const hasInit = ref(false);
const starting_location = ref<SharedLocationWithDistance>();

function handle_update_starting_location(location) {
  starting_location.value = location;
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100)
}

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

async function onUseWithoutGPS() {
  use_default_coords();
  locationsByDistance.value = await getLocationsByDistance(userCoords.value);
}

function submit_spot() {
  window.location.href = "https://instagram.com/munstrography";
}

const filteredLocations = computed(() => {
  const filtered_locations = locationsByDistance.value.filter((sharedLocation) => {
    return filterValues.value.every((filter) => {
      if (filter.indexOf("user:") > -1) {
        return sharedLocation.instagram_username === filter.slice(5);
      }
      if (filter.indexOf("city:") > -1) {
        return sharedLocation.city === filter.slice(6);
      }
      if (filter.indexOf("tag:") > -1) {
        return sharedLocation.tags.find((tag) => {
          return tag.toLowerCase().replaceAll(" ", "") === filter.slice(5).toLowerCase();
        });
      }
    });
  });
  if (starting_location.value) {
    let sorted_locations = filtered_locations.map(location => ({
      ...location,
      distance: Math.floor(convertDistance(getDistance(location, starting_location.value!), "mi"))
,    }))
    sorted_locations = sorted_locations.filter(location => {
      return location.distance < 10 && location.name !== starting_location.value!.name
    });
    sorted_locations = sortBy(sorted_locations, location => location.distance);
    return [
      starting_location.value!,
      ...sorted_locations
    ]
  }
  return filtered_locations;
});

watchEffect(() => {
  filterValues.value;
  window.scrollTo(0, 0);
});
</script>