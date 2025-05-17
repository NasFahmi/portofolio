import Image from "next/image";
import Link from "next/link";
import iconArrowUp from "@/public/ic_arrow_up.png";
import { StaticImageData } from "next/image";

interface Tech {
  tech_name: string;
  tech_logo: StaticImageData;
}

interface CardProjectProps {
  title: string;
  description: string;
  githubLink: string;
  imageSrc: string;
  tech: Tech[];
}

export default function CardProject({
  title,
  description,
  githubLink,
  imageSrc,
  tech,
}: CardProjectProps) {
  return (
    <div className="px-[1px] py-[1px] bg-gradient-to-br from-gradient-btn-light to-gradient-btn-dark border-1 rounded-xl mt-5">
      <div className="px-4 py-5 bg-gradient-to-br from-gradient-card-dark to-gradient-card-light rounded-xl">
        <div className="w-full h-[220px] rounded-lg relative overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h1 className="mt-6 text-lg text-text-primary">{title}</h1>
        <p className="mb-2 text-sm line-clamp-2 text-text-secoundary">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <TechPin tech={tech} />
          </div>
          <Link href={githubLink} className="flex items-center justify-center">
            <p className="text-xs text-text-primary">Github Link</p>
            <Image src={iconArrowUp} alt="arrowUp" width={12} height={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function TechPin({ tech }: { tech: Tech[] }) {
  return (
    <div className="flex">
      {tech.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-8 h-8 border rounded-full bg-gradient-to-tr from-gradient-card-dark to-gradient-card-light border-stroke-btn"
        >
          <Image
            src={item.tech_logo}
            alt={item.tech_name}
            width={14}
            height={14}
          />
        </div>
      ))}
    </div>
  );
}
