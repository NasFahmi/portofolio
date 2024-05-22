import { dataHero } from "@/data/hero";
import imagePerson from "@/public/image_person.png";
import iconInstagram from "@/public/ic_instagram.png";
import iconLingkedin from "@/public/ic_linkedin.png";
import iconGithub from "@/public/ic_github.png";
import iconArrowUp from "@/public/ic_arrow_up.png";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="mt-[50px] px-5" id="home">
      <div className="flex flex-col items-center justify-center md:flex-row-reverse">
        <div className="flex items-center justify-center flex-1">
          <div className="absolute flex flex-col items-center justify-center gap-10 left-4 md:hidden">
            <Link
              href="https://www.instagram.com/nasrlfahmi/"
              className="flex flex-col items-center justify-center"
            >
              <Image src={iconInstagram} alt="person" className="h-auto w-11" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nasrul-fahmi-1015191b1/"
              className="flex flex-col items-center justify-center"
            >
              <Image src={iconLingkedin} alt="person" className="w-10 h-auto" />
            </Link>
            <Link
              href="https://github.com/NasFahmi"
              className="flex flex-col items-center justify-center"
            >
              <Image src={iconGithub} alt="person" className="w-10 h-auto" />
            </Link>
          </div>
          <Image src={imagePerson} alt="person" className="h-auto w-[400px] " />
        </div>
        <div className="items-center justify-center flex-1 md:grid md:grid-cols-10 md:gap-4">
          <div className="flex flex-col items-center justify-center hidden gap-8 left-4 md:col-span-1 md:flex">
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
          <div className="md:col-span-9">
            <h1 className="text-center md:text-left">Hello, I am</h1>
            <h1 className="text-2xl font-bold text-center text-text-primary md:text-left md:text-3xl">
              {dataHero.title}
            </h1>
            <div className="flex items-center justify-center gap-4 mt-2 md:justify-start">
              <div className="w-[100px] h-1 rounded-full bg-text-primary"></div>
              <p className="text-center text-[#9690F5] text-nowrap">
                {dataHero.jobs}
              </p>
              <div className="w-[100px] h-1 rounded-full bg-text-primary"></div>
            </div>
            <div className="mt-5">
              <p className="text-sm text-text-secoundary ">
                {dataHero.description}
              </p>
            </div>
            <Link href={"#project"}>
              <div className=" w-full px-[1px] py-[1px] bg-gradient-to-br from-gradient-btn-light to-gradient-btn-dark border-1 rounded-lg mt-5 md:max-w-80">
                <div className="flex items-center justify-center w-full py-3 duration-300 ease-in-out rounded-lg bg-btn-primary md:max-w-80 hover:bg-btn-primary-hover">
                  <p className="text-sm">{dataHero.cta_project}</p>
                  <Image
                    src={iconArrowUp}
                    alt="arrowUp"
                    className="w-5 h-auto"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
