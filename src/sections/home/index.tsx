import { SliderAndSearch } from "@/components/SliderAndSearch";
import { BudgetCruise } from "@/components/home/BudgetCruise";
import { IntroduceHome } from "@/components/home/Introduce";
import { LuxuryCruise } from "@/components/home/LuxuryCruise";
import { Top10Cruise } from "@/components/home/Top10Cruise";
import { Top10DailyTour } from "@/components/home/Top10DailyTour";
import { Top10PacketTour } from "@/components/home/Top10PacketTour";

export function HomeSection(): JSX.Element {
  return (
    <div className="-mt-[var(--height-header)]">
      <SliderAndSearch />
      <IntroduceHome />
      <Top10Cruise />
      <LuxuryCruise />
      <BudgetCruise />
      <Top10PacketTour />
      <Top10DailyTour />
    </div>
  );
}
