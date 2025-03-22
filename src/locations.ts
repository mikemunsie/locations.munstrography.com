import { SharedLocation } from "./models/location";
import { Security } from "./models/security";
import { Tags } from "./models/tag";
import { Users } from "./types";

// See: https://www.latlong.net/convert-address-to-lat-long.html

const locations: SharedLocation[] = [
  {
    name: "Gulf Gas Station",
    latitude: 33.624488,
    longitude: -97.1411259,
    instagram_username: "christianpizzarelli",
    city: "Gainesville",
    security: Security.none,
    tags: [Tags.day, Tags.night, Tags.group, Tags.gasStation],
  },
  {
    name: "Collin College Stem Campus",
    latitude: 33.12788,
    longitude: -96.71334,
    instagram_username: Users.lundPhotos,
    city: "Little Elm",
    security: Security.low,
    tags: [Tags.day, Tags.group, Tags.clean, Tags.night],
  },
  {
    name: "Tree Tunnel",
    latitude: 33.19446,
    longitude: -96.94256,
    instagram_username: Users.lundPhotos,
    city: "Little Elm",
    security: Security.none,
    tags: [Tags.day, Tags.group, Tags.clean],
  },
  {
    name: "Legacy West Garage 2",
    latitude: 33.08128,
    longitude: -96.82537,
    instagram_username: Users.lundPhotos,
    city: "Plano",
    security: Security.low,
    tags: [Tags.night, Tags.group, Tags.clean],
  },
  {
    name: "Industrial Machinery",
    latitude: 32.72058,
    longitude: -97.32724,
    instagram_username: Users.snapperSociety,
    city: "Fort Worth",
    security: Security.none,
    tags: [Tags.industrial, Tags.day, Tags.cyberpunk],
  },
  {
    name: "Parking Garage Tents",
    latitude: 32.933868,
    longitude: -96.982941,
    instagram_username: Users.munstrography,
    city: "Irving",
    security: Security.high,
    tags: [Tags.day, Tags.clean],
  },
  {
    name: "Dipert Technical Center",
    latitude: 32.710629,
    longitude: -97.083054,
    instagram_username: Users.stellerVisuals,
    city: "Arlington",
    security: Security.low,
    tags: [Tags.night, Tags.day, Tags.clean, Tags.cyberpunk],
  },
  {
    name: "Coopers Market",
    latitude: 32.7699,
    longitude: -96.83564,
    instagram_username: Users.arzolasVisuals,
    city: "Dallas",
    security: Security.none,
    tags: [Tags.night, Tags.clean],
  },
  {
    name: "Fort Worth Public Market",
    latitude: 32.74442,
    longitude: -97.33756,
    instagram_username: Users.dallasInBlack,
    city: "Fort Worth",
    security: Security.none,
    tags: [Tags.industrial, Tags.day],
  },
  {
    name: "UNT Health West 7th",
    latitude: 32.7488963,
    longitude: -97.3677746,
    instagram_username: Users.bensCarPics,
    city: "Fort Worth",
    security: Security.low,
    tags: [Tags.clean, Tags.night],
  },
  {
    name: "Highway Overpass",
    latitude: 33.0037945,
    longitude: -96.7020869,
    instagram_username: Users.dallasInBlack,
    city: "Plano",
    security: Security.none,
    tags: [Tags.clean, Tags.day, Tags.night],
  },
  {
    name: "Airplane Lookout 1",
    latitude: 32.8348805,
    longitude: -96.8304577,
    instagram_username: Users.srikar,
    city: "Dallas",
    security: Security.low,
    tags: [Tags.clean, Tags.day, Tags.night],
  },
  {
    name: "Adriatica Village",
    latitude: 33.196792,
    longitude: -96.705321,
    instagram_username: Users.dallasInBlack,
    city: "McKinney",
    security: Security.none,
    tags: [Tags.clean, Tags.day, Tags.night],
  },
  {
    name: "Irving Highway Overpass",
    latitude: 32.912731,
    longitude: -96.9422681,
    instagram_username: Users.dallasInBlack,
    city: "Irving",
    security: Security.none,
    tags: [Tags.clean, Tags.day, Tags.night],
  },
  {
    name: "Corporate Tour",
    latitude: 32.8630516,
    longitude: -96.8111969,
    instagram_username: Users.dallasInBlack,
    city: "Dallas",
    security: Security.low,
    tags: [Tags.clean, Tags.night, Tags.cyberpunk],
  },
  {
    name: "Bishop Arts Lights",
    latitude: 32.693772,
    longitude: -96.805955,
    instagram_username: Users.mayitoShoots,
    city: "Dallas",
    security: Security.none,
    tags: [Tags.clean, Tags.night],
  },
  {
    name: "Terrace Southlake",
    latitude: 32.9813613,
    longitude: -97.1743064,
    instagram_username: Users.munstrography,
    city: "Southlake",
    security: Security.high,
    tags: [Tags.clean, Tags.night, Tags.cyberpunk, Tags.day],
  },
  {
    name: "Las Colinas Building A",
    latitude: 32.863353,
    longitude: -96.9405258,
    instagram_username: Users.munstrography,
    city: "Irving",
    security: Security.low,
    tags: [Tags.clean, Tags.night, Tags.retro, Tags.day],
  },
  {
    name: "Little Italy",
    latitude: 32.9848986,
    longitude: -97.176638,
    instagram_username: Users.munstrography,
    city: "Southlake",
    security: Security.none,
    tags: [Tags.clean, Tags.night, Tags.day],
  },
  {
    name: "West 7th Lights",
    latitude: 32.7548818,
    longitude: -97.3530062,
    instagram_username: Users.bensCarPics,
    city: "Fort Worth",
    security: Security.none,
    tags: [Tags.night, Tags.day],
  },
  {
    name: "Burleson Feed Mill",
    latitude: 32.543959,
    longitude: -97.3203787,
    instagram_username: Users.munstrography,
    city: "Burleson",
    security: Security.none,
    tags: [Tags.night, Tags.day, Tags.industrial],
  },
  {
    name: "Airplane Lookout 2",
    latitude: 32.9117456,
    longitude: -97.0625364,
    instagram_username: Users.splitMedia,
    city: "Dallas",
    security: Security.low,
    tags: [Tags.night, Tags.day, Tags.clean],
  },
  {
    name: "Discount Liquor",
    latitude: 32.7706281,
    longitude: -96.7999462,
    instagram_username: Users.noah,
    city: "Dallas",
    security: Security.low,
    tags: [Tags.night, Tags.day, Tags.industrial],
  },
  {
    name: "West 7th Ring",
    latitude: 32.7492933,
    longitude: -97.3581834,
    instagram_username: Users.snapperSociety,
    city: "Fort Worth",
    security: Security.low,
    tags: [Tags.night, Tags.cyberpunk, Tags.clean],
  },
  {
    name: "Saint Roccos New York Italian",
    latitude: 32.7791928,
    longitude: -96.8279544,
    instagram_username: Users.brian,
    city: "Dallas",
    security: Security.low,
    tags: [Tags.night, Tags.clean],
  },
  {
    name: "Common Desk",
    latitude: 32.998319,
    longitude: -96.7074061,
    instagram_username: Users.brian,
    city: "Richardson",
    security: Security.high,
    tags: [Tags.night, Tags.clean, Tags.cyberpunk],
  },
  {
    name: "Rolex",
    latitude: 32.7923199,
    longitude: -96.8071366,
    instagram_username: Users.noah,
    city: "Dallas",
    security: Security.high,
    tags: [Tags.night, Tags.clean],
  },
  {
    name: "Luna Industrial",
    latitude: 32.9416593,
    longitude: -96.9251772,
    instagram_username: Users.munstrography,
    city: "Dallas",
    security: Security.none,
    tags: [Tags.night, Tags.clean, Tags.industrial, Tags.group],
  },
  {
    name: "Cyber Car Wash",
    latitude: 32.91997,
    longitude: -96.994267,
    instagram_username: Users.munstrography,
    city: "Irving",
    security: Security.none,
    tags: [Tags.night, Tags.cyberpunk, Tags.gasStation],
  },
  {
    name: "Crime Alley",
    latitude: 32.7805975,
    longitude: -96.8002937,
    instagram_username: Users.munstrography,
    city: "Dallas",
    security: Security.low,
    tags: [Tags.night, Tags.industrial],
  },
  {
    name: "Jury Visitor Parking",
    accessFee: 6,
    latitude: 32.7786104,
    longitude: -96.8146353,
    instagram_username: Users.brian,
    city: "Dallas",
    security: Security.low,
    tags: [Tags.night, Tags.group, Tags.industrial],
  },
  {
    name: "Ferris Wheel",
    latitude: 33.073884,
    longitude: -96.862698,
    instagram_username: Users.munstrography,
    city: "The Colony",
    security: Security.low,
    tags: [Tags.night, Tags.clean, Tags.cyberpunk],
  },
  {
    name: "Hertz Garage",
    latitude: 32.783159,
    longitude: -96.803509,
    accessFee: 6,
    instagram_username: Users.munstrography,
    city: "Dallas",
    security: Security.high,
    tags: [Tags.night, Tags.cyberpunk, Tags.group],
  },
  {
    name: "Baylor Hospital",
    latitude: 32.788349,
    longitude: -96.7789121,
    instagram_username: Users.munstrography,
    city: "Dallas",
    security: Security.low,
    tags: [Tags.night, Tags.cyberpunk, Tags.clean],
  },
  {
    name: "Cyber Bridge",
    latitude: 32.759396,
    longitude: -97.3457789,
    instagram_username: Users.bensCarPics,
    city: "Fort Worth",
    security: Security.none,
    tags: [Tags.night, Tags.cyberpunk],
  },
  {
    name: "Legacy West Garage",
    latitude: 33.0833077,
    longitude: -96.8251348,
    instagram_username: Users.munstrography,
    city: "Plano",
    security: Security.low,
    tags: [Tags.night, Tags.group, Tags.cyberpunk],
  },
  {
    name: "DRAGON",
    latitude: 32.9453469,
    longitude: -97.1185076,
    instagram_username: Users.munstrography,
    city: "Southlake",
    security: Security.dragon,
    tags: [Tags.night, Tags.day, Tags.cyberpunk],
  },
  {
    name: "Cinemark McKinney",
    latitude: 33.2155667,
    longitude: -96.663776,
    instagram_username: Users.snowzilla,
    city: "McKinney",
    security: Security.none,
    tags: [Tags.night, Tags.group, Tags.cyberpunk],
  },
  {
    name: "Dallas Alley",
    latitude: 32.785175,
    longitude: -96.79797,
    instagram_username: Users.rakkzo,
    city: "Dallas",
    security: Security.none,
    tags: [Tags.night, Tags.clean],
  },
  {
    name: "Sabre",
    latitude: 32.9826257,
    longitude: -97.1618326,
    instagram_username: Users.brmPhotos,
    city: "Southlake",
    security: Security.low,
    tags: [Tags.clean, Tags.day, Tags.industrial],
  },
  {
    name: "Solana",
    latitude: 32.9835923,
    longitude: -97.1756888,
    instagram_username: Users.brmPhotos,
    city: "Westlake",
    security: Security.high,
    tags: [Tags.clean, Tags.day, Tags.industrial],
  },
  {
    name: "Dallas Streets",
    latitude: 32.7715443,
    longitude: -96.8105837,
    instagram_username: Users.brmPhotos,
    city: "Dallas",
    security: Security.none,
    tags: [Tags.day, Tags.group],
  },
  {
    name: "Live Oak",
    latitude: 32.7876431,
    longitude: -96.7948549,
    instagram_username: Users.brmPhotos,
    city: "Dallas",
    security: Security.none,
    tags: [Tags.day, Tags.clean, Tags.industrial],
  },
  {
    name: "Fort Worth Silos",
    latitude: 32.721219,
    longitude: -97.328525,
    instagram_username: Users.brmPhotos,
    city: "Fort Worth",
    security: Security.none,
    tags: [Tags.day, Tags.group, Tags.industrial],
  },
  {
    name: "Fabrication Yard",
    latitude: 32.7766642,
    longitude: -96.8361403,
    instagram_username: Users.brmPhotos,
    city: "Dallas",
    security: Security.none,
    tags: [Tags.day, Tags.group, Tags.industrial],
  },
  {
    name: "Grandscape Garage",
    latitude: 33.0743734,
    longitude: -96.8635013,
    instagram_username: Users.brmPhotos,
    city: "The Colony",
    security: Security.low,
    tags: [Tags.day, Tags.clean],
  },
  {
    name: "7 Eleven Fort Worth",
    latitude: 32.9428185,
    longitude: -97.3120124,
    instagram_username: Users.brmPhotos,
    city: "Forth Worth",
    security: Security.none,
    tags: [Tags.day, Tags.gasStation, Tags.night, Tags.clean],
  },
  {
    name: "Corbett Water Technologies",
    latitude: 32.7056788,
    longitude: -97.3125578,
    instagram_username: Users.brmPhotos,
    city: "Forth Worth",
    security: Security.none,
    tags: [Tags.day, Tags.industrial, Tags.group],
  },
  {
    name: "Hillwood Properties",
    latitude: 32.9188337,
    longitude: -97.3135806,
    instagram_username: Users.brmPhotos,
    city: "Forth Worth",
    security: Security.none,
    tags: [Tags.day, Tags.clean, Tags.night],
  },
  {
    name: "411 North Main Street",
    latitude: 32.7606247,
    longitude: -97.3386312,
    instagram_username: Users.brmPhotos,
    city: "Forth Worth",
    security: Security.none,
    tags: [Tags.day, Tags.industrial],
  },
  {
    name: "Texaco Haltom City",
    latitude: 32.7821614,
    longitude: -97.2945655,
    instagram_username: Users.brmPhotos,
    city: "Haltom City",
    security: Security.none,
    tags: [Tags.day, Tags.gasStation],
  },
  {
    name: "Reunion Tower",
    latitude: 32.7755347,
    longitude: -96.8081282,
    instagram_username: Users.brmPhotos,
    city: "Dallas",
    security: Security.none,
    tags: [Tags.day, Tags.night, Tags.clean],
  },
  {
    name: "606 Young",
    latitude: 32.7755347,
    longitude: -96.8081282,
    instagram_username: Users.brmPhotos,
    city: "Dallas",
    security: Security.none,
    tags: [Tags.day, Tags.industrial],
  },
  {
    name: "3800 Maple",
    latitude: 32.804926,
    longitude: -96.8168327,
    instagram_username: Users.brmPhotos,
    city: "Dallas",
    security: Security.none,
    tags: [Tags.night, Tags.industrial, Tags.cyberpunk],
  },
  {
    name: "Roanoke Road",
    latitude: 32.9855759,
    longitude: -97.2336687,
    instagram_username: Users.brmPhotos,
    city: "Westlake",
    security: Security.none,
    tags: [Tags.day, Tags.clean],
  },
  {
    name: "Cyber Building",
    latitude: 32.8989919,
    longitude: -96.9597708,
    instagram_username: Users.munstrography,
    city: "Irving",
    security: Security.none,
    tags: [Tags.night, Tags.cyberpunk],
  },
  {
    name: "Overhead Airplanes",
    latitude: 32.9242165,
    longitude: -97.0289413,
    instagram_username: Users.munstrography,
    city: "Irving",
    security: Security.none,
    tags: [Tags.day, Tags.clean],
  },
];

export { locations };
