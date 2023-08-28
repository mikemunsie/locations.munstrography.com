import { SharedLocation } from "@/models/location";

export function getGoogleMapDirections(location: SharedLocation) {
  return `https://www.google.com/maps/dir//${location.latitude},${location.longitude}`;
}
