import Image from "next/image";

export function BookingSuccessSection(): JSX.Element {
  return (
    <div className="bg-[var(--bg-container-color)]">
      <div className="container flex items-center justify-center py-10">
        <section className="max-w-[700px] py-4 border-[1px] bg-white rounded-md">
          <h2 className="text-xl font-bold text-[var(--text-hover-default)] text-center pb-3 border-b-[1px]">
            Thank you very much for sending us your inquiry!
          </h2>
          <div className="px-3">
            <p className="text-center pt-3 text-sm">
              We will start working on your request right now & one of our
              travel consultants will proceed your request and get back to you
              shortly with best quotation & best offers.
            </p>
            <div className="flex justify-center py-8">
              <Image
                alt="image sucess"
                src={"/booking/thank-you.png"}
                width={315}
                height={198}
                className=" object-contain"
              />
            </div>

            <div className="mx-3 px-3 py-2 border-[1px] bg-[#F1E9DD] text-black">
              <p className="text-center text-sm">
                <span className="mr-2 text-[#C31F41] font-bold">Note:</span>
                To ensure that you can receive a reply from
                <span className="text-black font-semibold mx-[2px]">
                  "thglobaltravel.com"
                </span>
                , Please kindly add the
                <span className="text-black font-semibold mx-[2px]">
                  "thglobaltravel.com"
                </span>
                domain to your e-email "safe list". If you do not receive a
                response in your "inbox" within 24 hours, check your "bulk mail"
                or "junk mail" folders. Thank you!.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
