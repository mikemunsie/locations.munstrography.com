import { getDistance } from "geolib";
import sortBy from "lodash/sortBy";

import { LocationCoords } from "@/models/location";
import { locations } from "../locations";

function getDistanceInMiles(coords1: LocationCoords, coords2: LocationCoords) {
  const meters = getDistance(coords1, coords2);
  return meters / 1609.34 + 4;
}

export function getLocationsByDistance(userCoords: LocationCoords) {
  const mappedLocations = locations.map((location) => ({
    ...location,
    distance: Math.round(getDistanceInMiles(userCoords, location)),
  }));
  return sortBy(mappedLocations, "distance");
}
