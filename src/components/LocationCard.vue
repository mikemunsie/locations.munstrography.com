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
      <div class="ml-auto">
        <button
          @click="getDirections"
          class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Directions
        </button>
      </div>
    </div>
    <div
      class="img"
      :style="`background-image: url('${publicPath}locations/${location.name}.jpg')`"
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
import { SharedLocationWithDistance } from "@/models/location";
import { getGoogleMapDirections } from "../utils/googleMaps";

const publicPath = import.meta.env.BASE_URL;

const props = defineProps<{
  location: SharedLocationWithDistance;
}>();

function getDirections() {
  window.gtag("event", "directions", {
    location: props.location.name,
  });
  window.location.href = getGoogleMapDirections(props.location);
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
    height: 50vh;
    background-position: center;
    background-size: cover;
  }
}
</style>