import bgFrame from "@/public/bg-frame.png";
import iconArrowUp from "@/public/ic_arrow_up.png";
import Image from "next/image";
import { dataContact } from "@/data/contact";
export default function GetInTouch() {
  return (
    <div className="mt-[100px] px-5">
      <div
        className=""
        style={{
          backgroundImage: `url(${bgFrame.src})`,
          backgroundPosition: "center",
          backgroundSize: "fill",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-3xl font-semibold text-center text-text-primary">
          {dataContact.title}
        </h1>
        <h1 className="mb-20 text-center text-text-secoundary">
          {dataContact.subtitle}
        </h1>
        <h1 className="mb-8 text-center text-text-secoundary">
          {dataContact.heading}
        </h1>
        <form>
          <div className="flex flex-col items-center justify-center gap-6 mb-6">
            <div className="w-full md:max-w-[512px]">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-text-primary "
              >
                {dataContact.name_section.title}
              </label>
              <input
                type="text"
                id="name"
                className="bg-btn-primary border border-stroke-btn text-text-secoundary text-sm rounded-lg focus:ring-btn-primary-hover focus:border-btn-secoundary-hover block w-full p-2.5 "
                placeholder={dataContact.name_section.placeholder}
                required
              />
            </div>
            <div className="w-full md:max-w-[512px]">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-text-primary"
              >
                {dataContact.email_section.title}
              </label>
              <input
                type="email"
                id="email"
                className="bg-btn-primary border border-stroke-btn text-text-secoundary text-sm rounded-lg focus:ring-btn-primary-hover focus:border-btn-secoundary-hover block w-full p-2.5 "
                placeholder={dataContact.email_section.placeholder}
                required
              />
            </div>
            <div className="w-full md:max-w-[512px]">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-text-primary"
              >
                {dataContact.project_section.title}
              </label>
              <textarea
                id="message"
                rows={4}
                className="bg-btn-primary border border-stroke-btn text-text-secoundary text-sm rounded-lg focus:ring-btn-primary-hover focus:border-btn-secoundary-hover block w-full p-2.5 "
                placeholder={dataContact.project_section.placeholder}
              ></textarea>
            </div>
            <div className="flex items-center justify-center w-full py-3 duration-300 ease-in-out rounded-lg cursor-pointer bg-btn-primary md:max-w-80 hover:bg-btn-primary-hover">
              <p>{dataContact.btn_title}</p>
              <Image src={iconArrowUp} alt="arrowUp" className="w-5 h-auto" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
