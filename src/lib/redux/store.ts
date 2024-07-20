import { configureStore } from "@reduxjs/toolkit";
import destinationReduce from "./app/destination.slice";
import cruiseReduce from "./app/cruise.slice";
import packetTourReduce from "./app/packetTour.slice";
import tourReduce from "./app/tour.slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      destination: destinationReduce,
      cruise: cruiseReduce,
      packetTour: packetTourReduce,
      tour: tourReduce,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
