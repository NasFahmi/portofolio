import { dataProject } from "@/data/project";
import CardProject from "./CardProject";

export default function Project() {
  return (
    <div className="mt-[100px] px-5" id="project">
      <h1 className="text-3xl font-semibold text-center text-text-primary">
        {dataProject.title}
      </h1>
      <h1 className="text-center text-text-secoundary">
        {dataProject.subtitle}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:px-20 gap-10 mt-[50px]">
        {dataProject.card_project.map((item, index) => (
          <CardProject
            key={index}
            title={item.title}
            description={item.subtitle}
            githubLink=""
            imageSrc={item.image}
            tech={item.tech} // Pass the tech array
          />
        ))}
      </div>
    </div>
  );
}
