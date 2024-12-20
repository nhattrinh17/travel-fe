"use client";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function CruisesHeaderItem({
  image,
  name,
  detailLocations,
  slug,
  cancelNavMobile,
}: {
  name: string;
  slug: string;
  image: string;
  detailLocations: {
    name: string;
    slug: string;
  }[];
  cancelNavMobile: () => void;
}): JSX.Element {
  const route = useRouter();

  {
    return (
      <div className="w-full mb-5 lg:mb-0">
        <div
          onClick={() => {
            if (window.innerWidth < 1024) {
              cancelNavMobile();
            }
            route.push(`/destination/${slug}`);
          }}
          className="group relative w-full text-white hover:text-[var(--text-hover-default)] transition-colors duration-500 hover:image:"
        >
          <div className="w-full overflow-hidden transition-transform">
            <Image
              alt="image cruise"
              src={image}
              width={172}
              height={122}
              className="min-w-[170px] w-full h-auto object-contain group-hover:scale-110 hidden lg:block"
            />
          </div>
          <div className="lg:absolute left-0 right-0 bottom-0 text-center lg:bg-[url(/home/op50.png)]">
            <h3 className="py-0 lg:py-2 text-xs uppercase font-bold">{name}</h3>
          </div>
        </div>

        <ul>
          {detailLocations.map((item, index) => (
            <li key={`${item.name}-${index}`} className="w-full">
              <div
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    cancelNavMobile();
                  }
                  route.push(`/destination/${item.slug}`);
                }}
                className="mt-2 w-full flex justify-center lg:justify-start hover:text-[#f8d540]"
              >
                <FontAwesomeIcon icon={faAngleRight} className="w-2 mr-1" />
                <h4 className="text-xs">{item.name}</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
