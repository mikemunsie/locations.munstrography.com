import { SharedLocation } from "@/models/location";

export function getGoogleMapDirections(location: SharedLocation) {
  return `https://www.google.com/maps/dir//${location.latitude},${location.longitude}`;
}

export function getGoogleMapShare(location: SharedLocation) {
  return `https://www.google.com/maps/place/${location.latitude},${location.longitude}`;
}
