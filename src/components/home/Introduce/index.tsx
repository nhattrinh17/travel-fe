import Image from "next/image";

export function IntroduceHome(): JSX.Element {
  return (
    <section className="bg-[#f9f9f9] pt-14 pb-10 ">
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="relative bg-white border-2 mb-5 lg:mb-0 border-[#bbe6dd] px-4 pt-8 pb-4 rounded-lg flex flex-col items-center">
          <Image
            alt="introduce "
            src={"/home/introduce/icon_why_cruise.svg"}
            width={50}
            height={50}
            className="absolute -top-6"
          />
          <h2 className="text-[#00a680] text-[18px] font-bold text-center">
            Official Halong Bay Cruise and Tour Website
          </h2>
          <p className="text-sm text-[#666] text-center">
            Your Trusted Halong Bay Cruise and Tour Agency
            <br></br> 10 Years of Expertise in Cruises and Tour Packages
          </p>
        </div>
        <div className="relative bg-white border-2 mb-5 lg:mb-0 border-[#bbe6dd] px-4 pt-8 pb-4 rounded-lg flex flex-col items-center">
          <Image
            alt="introduce "
            src={"/home/introduce/icon_why_reviews.png"}
            width={156}
            height={73}
            className="absolute -top-9"
          />
          <h2 className="text-[#00a680] text-[18px] font-bold text-center">
            Customer Care Support 24/7
          </h2>
          <p className="text-sm text-[#666] text-center">
            We are local experts, always here to help you <br></br> Fast
            Response & Friendly Support from the team
          </p>
        </div>
        <div className="relative bg-white border-2 mb-5 lg:mb-0 border-[#bbe6dd] px-4 pt-8 pb-4 rounded-lg flex flex-col items-center">
          <Image
            alt="introduce "
            src={"/home/introduce/icon-price.svg"}
            width={50}
            height={50}
            className="absolute -top-6"
          />
          <h2 className="text-[#00a680] text-[18px] font-bold text-center">
            Best Price Guarantee Policy
          </h2>
          <p className="text-sm text-[#666] text-center">
            The Best Value + Best Price Guarantee <br></br>
            Great value for money regardless of your budget
          </p>
        </div>
      </div>
    </section>
  );
}
