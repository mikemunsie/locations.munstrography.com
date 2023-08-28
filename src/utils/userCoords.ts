import { Ref, ref } from "vue";

import { LocationCoords } from "@/models/location";

export const geoLocationStatus = ref("none");

export const userCoords = ref({
  latitude: 0,
  longitude: 0,
});

export function updateUserLocation(): Promise<Ref<LocationCoords>> {
  geoLocationStatus.value = "loading";
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      function ({ coords }) {
        userCoords.value.latitude = coords.latitude;
        userCoords.value.longitude = coords.longitude;
        geoLocationStatus.value = "success";
        resolve(userCoords);
      },
      (err) => {
        geoLocationStatus.value = "fail";
        reject(err.message);
      },
      { enableHighAccuracy: true, maximumAge: 10000 }
    );
  });
}
