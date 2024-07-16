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
