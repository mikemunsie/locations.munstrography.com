import { Ref, ref } from "vue";

import { LocationCoords } from "@/models/location";

export const geoLocationStatus = ref("none");

export const userCoords = ref({
  latitude: 0,
  longitude: 0,
});

export function use_default_coords() {
  userCoords.value.latitude = 32.7859214;
  userCoords.value.longitude = -97.0589091;
  geoLocationStatus.value = "success";
}

export function updateUserLocation(): Promise<Ref<LocationCoords>> {
  geoLocationStatus.value = "loading";
  return new Promise((resolve, reject) => {
    const location_timeout = setTimeout(() => {
      userCoords.value.latitude = 32.7859214;
      userCoords.value.longitude = -97.0589091;
      geoLocationStatus.value = "success";
      resolve(userCoords);
    }, 4000);

    navigator.geolocation.getCurrentPosition(
      function ({ coords }) {
        userCoords.value.latitude = coords.latitude;
        userCoords.value.longitude = coords.longitude;
        geoLocationStatus.value = "success";
        clearTimeout(location_timeout);
        resolve(userCoords);
      },
      (err) => {
        geoLocationStatus.value = "fail";
        clearTimeout(location_timeout);
        reject(err.message);
      },
      { enableHighAccuracy: true, maximumAge: 10000 }
    );
  });
}
