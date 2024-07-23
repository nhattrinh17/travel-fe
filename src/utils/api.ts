import { BaseAxios } from "@/lib";

export const fetchUserInfo = () => {
  const axios = new BaseAxios();
  return axios.get("auth/userInfo");
};

export const getAllSpecialOffer = (page: number, limit: number) => {
  const axios = new BaseAxios();
  let url = "special-offer?";
  if (page) url += "page=" + page;
  if (limit) url += "&limit=" + limit;
  return axios.get(url);
};

export const getAllAccompaniedService = (page: number, limit: number) => {
  const axios = new BaseAxios();
  let url = "accompanied-service?";
  if (page) url += "page=" + page;
  if (limit) url += "&limit=" + limit;
  return axios.get(url);
};

export const getAllDestination = (page: number, limit: number) => {
  const axios = new BaseAxios();
  let url = "destination?seeDetail=1&";
  if (page) url += "page=" + page;
  if (limit) url += "&limit=" + limit;
  return axios.get(url);
};

export const getAllPacketTour = (page: number, limit: number) => {
  const axios = new BaseAxios();
  let url = "packet-tour?";
  if (page) url += "page=" + page;
  if (limit) url += "&limit=" + limit;
  return axios.get(url);
};

export const getAllDetailLocation = (
  page: number,
  limit: number,
  idDestination: number
) => {
  const axios = new BaseAxios();
  let url = "detail-location?";
  if (page) url += "page=" + page;
  if (limit) url += "&limit=" + limit;
  if (idDestination) url += "&destinationId=" + idDestination;
  return axios.get(url);
};

export const getAllCruise = (
  page: number,
  limit: number,
  sort: string,
  typeSort: string,
  destinationId?: number,
  detailLocationId?: number,
  search?: string
) => {
  const axios = new BaseAxios();
  let url = "cruise?";
  if (page) url += "page=" + page;
  if (limit) url += "&limit=" + limit;
  if (search) url += "&search=" + search;
  if (destinationId && destinationId > 0)
    url += "&destinationId=" + destinationId;
  if (detailLocationId && detailLocationId > 0)
    url += "&detailLocationId=" + detailLocationId;
  if (sort) url += "&sort=" + sort;
  if (typeSort) url += "&typeSort=" + typeSort;
  return axios.get(url);
};

export const getAllCruiseSort = (
  page: number,
  limit: number,
  sort: string,
  typeSort: string
) => {
  const axios = new BaseAxios();
  let url = "cruise?";
  if (page) url += "page=" + page;
  if (limit) url += "&limit=" + limit;
  if (sort) url += "&sort=" + sort;
  if (typeSort) url += "&typeSort=" + typeSort;

  return axios.get(url);
};

export const getAllRoomCruise = (idCruise: number) => {
  const axios = new BaseAxios();
  return axios.get(`cruise/${idCruise}/room`);
};

export const getAllItinerariesCruise = (idCruise: number) => {
  const axios = new BaseAxios();
  return axios.get(`cruise/${idCruise}/itineraries`);
};

export const getAllTour = (
  packetTourId: number | undefined,
  search: string,
  sort: string,
  typeSort: string
) => {
  const axios = new BaseAxios();
  let url = "tour?page=1&limit=100";

  if (packetTourId) url += "&packetTourId=" + packetTourId;
  if (search) url += "&search=" + search;
  if (sort) url += "&sort=" + sort;
  if (typeSort) url += "&typeSort=" + typeSort;
  return axios.get(url);
};

export const getAllTourSort = (
  page: number,
  limit: number,
  sort: string,
  typeSort: string
) => {
  const axios = new BaseAxios();
  let url = "tour?";
  if (page) url += "page=" + page;
  if (limit) url += "&limit=" + limit;
  if (sort) url += "&sort=" + sort;
  if (typeSort) url += "&typeSort=" + typeSort;

  return axios.get(url);
};

export const getTopTourDaily = (
  page: number,
  limit: number,
  sort: string,
  typeSort: string
) => {
  const axios = new BaseAxios();
  let url = "tour?type=1&";
  if (page) url += "page=" + page;
  if (limit) url += "&limit=" + limit;
  if (sort) url += "&sort=" + sort;
  if (typeSort) url += "&typeSort=" + typeSort;

  return axios.get(url);
};

export const getAllTourNav = () => {
  const axios = new BaseAxios();
  let url = "tour/nav";
  return axios.get(url);
};

export const getTourBySlug = (slug: string) => {
  const axios = new BaseAxios();
  let url = `tour/${slug}`;
  return axios.get(url);
};

export const getAllItinerariesTour = (idTour: number) => {
  const axios = new BaseAxios();
  return axios.get(`tour/${idTour}/itineraries`);
};

export const getCruiseBySlug = (slug: string) => {
  const axios = new BaseAxios();
  let url = `cruise/${slug}`;
  return axios.get(url);
};

export const bookingCruise = (data: any) => {
  const axios = new BaseAxios();
  let url = `cruise/booking`;
  return axios.post(url, data);
};

export const bookingTour = (data: any) => {
  const axios = new BaseAxios();
  let url = `tour/booking`;
  return axios.post(url, data);
};

export const getAllReview = (
  page: number,
  limit: number,
  cruiseId: number,
  tourId: number
) => {
  const axios = new BaseAxios();
  let url = "review?";
  if (page) url += "page=" + page;
  if (limit) url += "&limit=" + limit;
  if (cruiseId) url += "&cruiseId=" + cruiseId;
  if (tourId) url += "&tourId=" + tourId;
  return axios.get(url);
};
