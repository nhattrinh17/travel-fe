"use client";

import { ShowRoomAndBookCruise } from "@/components/ShowRoomAndBookCruise";
import { useCruiseDetail } from "@/utils/handleCruise";
import { useSearchParams } from "next/navigation";

export function BookingCruiseSection(): JSX.Element {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const cruiseDetail = useCruiseDetail(name);

  return (
    <div className="bg-[var(--bg-container-color)]">
      <div className="container">
        <ShowRoomAndBookCruise bookingPage />
      </div>
    </div>
  );
}
