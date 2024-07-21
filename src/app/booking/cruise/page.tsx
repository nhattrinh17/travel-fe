import { BookingCruiseSection } from "@/sections/booking/BookingCruise";
import { Suspense } from "react";

export default function BookingCruise(): JSX.Element {
  return (
    <Suspense>
      <BookingCruiseSection />
    </Suspense>
  );
}
