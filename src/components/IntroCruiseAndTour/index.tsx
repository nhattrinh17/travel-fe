import Image from "next/image";

export function IntroCruiseAndTour({
  description,
  title,
}: {
  title: string;
  description: string;
}): JSX.Element {
  return (
    <section className="bg-[#f1f1f1]">
      <div className="container py-3">
        <Image
          alt="100%"
          src={"/home/top10Cruise/best-price-2.png"}
          width={110}
          height={81}
          className="mx-auto mt-4"
        />

        <h2 className="my-3 text-2xl font-bold text-[var(--secondary-color)] w-full text-center relative line-text">
          {title}
        </h2>
        <div
          className="text-[#666] text-sm text-center px-0 lg:px-12"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
    </section>
  );
}
