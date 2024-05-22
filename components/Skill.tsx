import { dataskill } from "@/data/skill";
import icVerified from "@/public/ic_verified.png";
import Image from "next/image";
export default function Skill() {
  return (
    <div className="mt-[100px] px-5" id="skill">
      <h1 className="text-3xl font-semibold text-center text-text-primary">
        {dataskill.title}
      </h1>
      <h1 className="text-center text-text-secoundary">{dataskill.subtitle}</h1>
      <div className="mt-[50px] flex justify-center items-center flex-col gap-10 md:flex-row md:items-start">
        <div className="w-full md:h-[280px] p-6 h-auto bg-bg-primary border-stroke-btn rounded-2xl">
          <div className="mb-7">
            <h1 className="text-center md:text-sm">Frontend Developer</h1>
          </div>
          <div className="grid grid-cols-2 gap-3 ">
            {dataskill.frontend.map((item, index) => (
              <div
                key={index}
                className="flex items-start justify-start gap-3 ml-8 md:ml-2"
              >
                <Image
                  src={icVerified}
                  alt="verified"
                  width={16}
                  height={16}
                  className="mt-1"
                />
                <div>
                  <h1 className="text-base text-text-primary md:text-sm">
                    {item.tech}
                  </h1>
                  <p className="text-sm text-text-secoundary md:text-xs">
                    {item.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:h-[280px] p-6 h-auto bg-bg-primary border-stroke-btn rounded-2xl">
          <div className="mb-7">
            <h1 className="text-center md:text-sm">Backend Developer</h1>
          </div>
          <div className="grid grid-cols-2 gap-3 ">
            {dataskill.backend.map((item, index) => (
              <div
                key={index}
                className="flex items-start justify-start gap-3 ml-8 md:ml-2"
              >
                <Image
                  src={icVerified}
                  alt="verified"
                  width={16}
                  height={16}
                  className="mt-1"
                />
                <div>
                  <h1 className="text-base text-text-primary md:text-sm">
                    {item.tech}
                  </h1>
                  <p className="text-sm text-text-secoundary md:text-xs">
                    {item.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:h-[280px] p-6 h-auto bg-bg-primary border-stroke-btn rounded-2xl">
          <div className="mb-7">
            <h1 className="text-center md:text-sm">Other Tech</h1>
          </div>
          <div className="grid grid-cols-2 gap-3 ">
            {dataskill.other_tech.map((item, index) => (
              <div
                key={index}
                className="flex items-start justify-start gap-3 ml-8 md:ml-2"
              >
                <Image
                  src={icVerified}
                  alt="verified"
                  width={16}
                  height={16}
                  className="mt-1"
                />
                <div>
                  <h1 className="text-base text-text-primary md:text-sm">
                    {item.tech}
                  </h1>
                  <p className="text-sm text-text-secoundary md:text-xs">
                    {item.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
