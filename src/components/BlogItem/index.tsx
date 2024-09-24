import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import Image from "next/image";

interface BlogItemDto {
  id: number;
  name: string;
  description: string;
  image: string;
  content: string;

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
}: BlogItemDto): JSX.Element {
  return (
    <div className="w-full bg-white rounded-xl">
      <figure className="relative pt-[67%] overflow-hidden rounded-t-[inherit]">
        <Image
          className="absolute overflow-hidden top-0 left-0 right-0 bottom-0 object-cover rounded-t-[inherit] hover:scale-125 peer transition-all duration-1000"
          alt="image news"
          src={image}
          fill
        />
      </figure>
      <div className="p-3">
        <h2 className="text-lg font-bold leading-tight mb-2">{name}</h2>
        <p className="text-gray-700 text-sm mb-2 line-clamp-4 py-1">
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
