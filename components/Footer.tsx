import iconInstagram from "@/public/ic_instagram.png";
import iconLingkedin from "@/public/ic_linkedin.png";
import iconGithub from "@/public/ic_github.png";
import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/data/footer";
export default function Footer() {
  return (
    <div className="mt-[140px] px-5">
      <div className="flex items-center justify-center gap-8 ">
        <Link
          href="https://www.instagram.com/nasrlfahmi/"
          className="flex flex-col items-center justify-center"
        >
          <Image src={iconInstagram} alt="person" className="w-8 h-auto" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/nasrul-fahmi-1015191b1/"
          className="flex flex-col items-center justify-center"
        >
          <Image src={iconLingkedin} alt="person" className="h-auto w-7" />
        </Link>
        <Link
          href="https://github.com/NasFahmi"
          className="flex flex-col items-center justify-center"
        >
          <Image src={iconGithub} alt="person" className="h-auto w-7" />
        </Link>
      </div>
      <h1 className="mt-6 mb-[50px] pb-[50px] text-center text-text-primary">
        {footerData.copyright}
      </h1>
    </div>
  );
}
