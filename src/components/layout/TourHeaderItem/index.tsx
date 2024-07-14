// "use client";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export function TourHeaderItem({
  image,
  like,
  name,
  slug,
  typeTour,
}: {
  typeTour: string;
  name: string;
  image: string;
  slug: string;
  like: number;
}): JSX.Element {
  return (
    <div className="relative group w-full h-full text-white hover:text-[var(--text-hover-default)] transition-colors duration-500">
      <Link href={`/tour?name=${slug}&type=${typeTour}`} className="">
        <div className="w-full h-full overflow-hidden transition-transform">
          <Image
            alt="image tour"
            src={image}
            width={172}
            height={122}
            className="hidden lg:block w-full h-full object-cover group-hover:scale-110 "
          />
        </div>
        <div className="lg:absolute left-0 right-0 bottom-0 w-full text-center bg-[#ffffff12] lg:bg-[url(/home/op50.png)]">
          <h3 className="py-2 text-xs uppercase font-bold">{name}</h3>
        </div>
        <div className="hidden lg:flex absolute top-1 right-1 items-center ">
          <span className="text-sm mr-1">{like}</span>
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </Link>
    </div>
  );
}
