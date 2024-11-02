import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

interface BlogItemDto {
  id: number;
  name: string;
  description: string;
  image: string;
  content: string;
  slug: string;
  view: number;
  createdAt: string;
}

export function BlogItem({
  name,
  description,
  image,
  content,
  view,
  createdAt,
  slug,
}: BlogItemDto): JSX.Element {
  return (
    <div className="w-full bg-white rounded-xl shadow-lg">
      <figure className="relative pt-[60%] overflow-hidden rounded-t-[inherit]">
        <Link
          href={`/blog/${slug}`}
          className="absolute overflow-hidden top-0 left-0 right-0 bottom-0"
        >
          <Image
            className=" object-cover  hover:scale-125 peer transition-all duration-1000"
            alt="image news"
            src={image}
            fill
          />
        </Link>
      </figure>
      <div className="p-3">
        <Link href={`/blog/${slug}`}>
          <h2 className="text-lg font-bold leading-tight mb-2 text-black">
            {name}
          </h2>
        </Link>
        <p className="text-gray-700 text-sm mb-2 line-clamp-6 py-1">
          {description}
        </p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 text-[var(--text-color-default)]">
            <FontAwesomeIcon icon={faCalendar} />
            <span>{moment(createdAt).format("LL")}</span>
          </div>
          <div className="flex items-center gap-1 text-[var(--text-color-default)]">
            <FontAwesomeIcon icon={faEye} />
            <span>{view}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
