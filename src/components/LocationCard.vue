<template>
  <div class="locationCard">
    <div class="flex items-center mb-2">
      <div class="mr-2" style="width: 200px">
        <h3>{{ location.name }}</h3>
        <div class="security" :class="location.security">
          {{ friendlySecurityName(location.security) }}
        </div>
        <div v-if="location.accessFee" class="distance">
          <strong>${{ location.accessFee }} access fee</strong>
        </div>
        <div class="distance">{{ location.distance }} miles away</div>
      </div>
      <div class="ml-auto flex items-center">
        <button
          class="share mr-4 rounded"
          :class="{ 'has-shared': has_shared }"
          @click="handle_share"
        >
          <span
            class="fa fa-regular"
            :class="{
              'fa-copy': !has_shared,
              'fa-solid fa-check': has_shared,
            }"
          ></span>
        </button>
        <button
          @click="getDirections"
          class="directions bg-blue-500 text-white rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        >
          Directions
        </button>
      </div>
    </div>
    <img
      class="img"
      loading="lazy"
      :src="`${publicPath}locations/${location.name}.jpg`"
    />

    <div class="flex items-center">
      <div class="tags">
        <strong>Tags:</strong> {{ location.tags.join(", ") }}
      </div>
      <span class="tags ml-auto"
        >Submitted by:
        <a
          target="_blank"
          :href="`http://instagram.com/${location.instagram_username}`"
          >{{ location.instagram_username }}</a
        ></span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { SharedLocationWithDistance } from "@/models/location";
import { getGoogleMapDirections, getGoogleMapShare } from "../utils/googleMaps";

const publicPath = import.meta.env.BASE_URL;

const props = defineProps<{
  location: SharedLocationWithDistance;
}>();

const has_shared = ref(false);

function handle_share() {
  try {
    navigator.clipboard.writeText(getGoogleMapShare(props.location));
    has_shared.value = true;
    setTimeout(() => {
      has_shared.value = false;
    }, 1000);
  } catch (e) {
    alert("Couldn't copy to clipboard. Try clicking directions instead.");
  }
}

function getDirections() {
  window.gtag("event", "directions", {
    location: props.location.name,
  });
  window.open(getGoogleMapDirections(props.location), "_blank");
}

function friendlySecurityName(securityName: string) {
  if (securityName === "None") return "Chill spot to shoot.";
  if (securityName === "Low") return "Security on site, but chill.";
  if (securityName === "High") return "Highly Secure. Can't stay long.";
  if (securityName === "Dragon") return "IT'S A F**N DRAGON! 🔥🔥";
}
</script>

<style scoped lang="scss">
.locationCard {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 7.5px;
  padding: 15px;
  margin-bottom: 15px;
  text-align: left;
  .directions {
    font-size: 12px;
    height: 30px;
    padding: 0 10px;
    font-weight: bold;
  }
  .share {
    border: 1px solid #ccc;
    height: 30px;
    padding: 0 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    &.has-shared {
      background: limegreen;
      border: 1px solid limegreen;
    }
  }
  .tags {
    font-size: 10px;
  }
  .security {
    font-size: 11px;
    font-weight: bold;
    &.Dragon {
      color: orangered;
    }
    &.None {
      color: green;
    }
    &.Low {
      color: orange;
    }
    &.High {
      color: red;
    }
  }
  .distance,
  .submittedBy {
    font-size: 13px;
    line-height: 17px;
    font-weight: 400;
  }
  h3 {
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
  }
  p {
    font-size: 14px;
    margin: 0;
  }
  .img {
    cursor: pointer;
    margin: auto;
    margin-bottom: 7.5px;
    width: 100%;
    height: var(--image-height);
    object-fit: cover;
    object-position: center;
  }
}
</style>