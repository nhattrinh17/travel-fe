import { SliderAndSearch } from "@/components/SliderAndSearch";
import { IntroduceHome } from "@/components/home/Introduce";
import { Top10Cruise } from "@/components/home/Top10Cruise";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function HomeSection(): JSX.Element {
  return (
    <div className="-mt-[var(--height-header)]">
      <SliderAndSearch />
      <IntroduceHome />
      <Top10Cruise />
    </div>
  );
}
