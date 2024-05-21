import { dataHero } from '@/data/hero';
import imagePerson from '@/public/image_person.png';
import iconInstagram from "@/public/ic_instagram.png";
import iconLingkedin from "@/public/ic_linkedin.png";
import iconGithub from "@/public/ic_github.png";
import Image from "next/image";
import Link from 'next/link';
export default function Hero() {
    return (
        <div className="mt-[50px] px-5">
            <div className="flex flex-col md:flex-row-reverse justify-center items-center">
                <div className="flex flex-1 justify-center items-center">
                    <div className="absolute left-4 flex flex-col justify-center items-center gap-10
                    md:hidden">
                        <Link href={dataHero.social_media.instagram} className="flex flex-col items-center justify-center">
                            <Image src={iconInstagram} alt="person" className="h-auto w-11" />
                        </Link>
                        <Link href={dataHero.social_media.linkedin} className="flex flex-col items-center justify-center">
                            <Image src={iconLingkedin} alt="person" className="h-auto w-10" />
                        </Link>
                        <Link href={dataHero.social_media.github} className="flex flex-col items-center justify-center">
                            <Image src={iconGithub} alt="person" className="h-auto w-10" />
                        </Link>
                    </div>
                    <Image src={imagePerson} alt="person" className="h-auto w-[400px] " />
                </div>
                <div className="flex-1 grid grid-cols-10 gap-4 justify-center items-center">
                    <div className="left-4 col-span-1 flex flex-col justify-center items-center gap-10 hidden
                    md:flex">
                        <Link href={dataHero.social_media.instagram} className="flex flex-col items-center justify-center">
                            <Image src={iconInstagram} alt="person" className="h-auto w-6" />
                        </Link>
                        <Link href={dataHero.social_media.linkedin} className="flex flex-col items-center justify-center">
                            <Image src={iconLingkedin} alt="person" className="h-auto w-6" />
                        </Link>
                        <Link href={dataHero.social_media.github} className="flex flex-col items-center justify-center">
                            <Image src={iconGithub} alt="person" className="h-auto w-6" />
                        </Link>
                    </div>
                    <div className="col-span-9">
                        <h1 className='text-center md:text-left'>Hello, I am</h1>
                        <h1 className="text-2xl text-text-primary font-bold text-center md:text-left md:text-3xl">{dataHero.title}</h1>
                        <div className="flex justify-center items-center gap-4 mt-2 md:justify-start">
                            <div className="w-[100px] h-1 rounded-full bg-text-primary"></div>
                            <p className="text-center text-[#9690F5] text-nowrap">{dataHero.jobs}</p>
                            <div className="w-[100px] h-1 rounded-full bg-text-primary"></div>
                        </div>
                        <div className="mt-5">
                            <p className='text-sm text-text-secoundary '>{dataHero.description}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};
