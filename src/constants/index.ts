import {
  IconDefinition,
  faBanSmoking,
  faBicycle,
  faChildReaching,
  faHotTubPerson,
  faKitchenSet,
  faPeopleGroup,
  faUtensils,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

export const languageList = [
  { name: "en", positionY: -4 },
  { name: "fr", positionY: -30 },
  { name: "ko", positionY: -151 },
  { name: "zh-CN", positionY: -200 },
  { name: "ja", positionY: -176 },
  { name: "de", positionY: -78 },
];

export const mapServiceIcons: { [key: string]: IconDefinition } = {
  allMeals: faUtensils,
  spa: faHotTubPerson,
  cookingClass: faKitchenSet,
  taiChiClass: faChildReaching,
  cyCling: faBicycle,
  familyRoom: faPeopleGroup,
};

export const mapAmenitiesIcons: { [key: string]: IconDefinition } = {
  banSmoking: faBanSmoking,
  airConditioning: faWind,
};

export const TypeOtherServiceBooking = {
  other: 0,
  transfer: 1,
};

export * from "./message";
export * from "./country";
