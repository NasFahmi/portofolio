import imageSafeSchool from "@/public/image_safeschools.png";
import imagePawonKoe from "@/public/image_pawonkoe.png";
import icTailwind from "@/public/ic_tailwind.png";
import icLaravel from "@/public/ic_laravel.png";
import icMyql from "@/public/ic_mysql.png";
import icHTML from "@/public/ic_html.png";
import icCSS from "@/public/ic_css.png";
import icJS from "@/public/ic_js.png";
import icFlutter from "@/public/ic_flutter.png";
import imageEoffice from "@/public/image_eoffice.png";
import imageSkini from "@/public/image_skini.png";
import imagePuspadaya from "@/public/image_puspadaya.png";

export const dataProject = {
  title: "Project",
  subtitle: "Most Recent Work",
  card_project: [
    {
      image: imagePuspadaya.src,
      githubLink: "https://github.com/PuspaDaya-Apps/Mobile-Puspadaya",
      title: "Puspadaya",
      subtitle:
        "Mobile-Based Platform for Empowering Posyandu Cadres",
      tech: [
        {
          tech_name: "Flutter",
          tech_logo: icFlutter,
        },
      ],
    },
    {
      image: imageSkini.src,
      githubLink: "https://github.com/codelabs-poliwangi/skinsense-MobileApps",
      title: "Skini",
      subtitle:
        "Mobile App for Identifying Problematic Skin Types and Suggesting Appropriate Skincare Products",
      tech: [
        {
          tech_name: "Flutter",
          tech_logo: icFlutter,
        },
      ],
    },

    {
      image: imageSafeSchool.src,
      githubLink: "https://github.com/Osas997/pbl-surveyBullying",
      title: "SafeSchools",
      subtitle:
        "Anti-Bullying Survey Website for Junior High Schools: Creating a Safe Learning Environment ",
      tech: [
        {
          tech_name: "laravel",
          tech_logo: icLaravel,
        },
        {
          tech_name: "Tailwind",
          tech_logo: icTailwind,
        },
        {
          tech_name: "HTML",
          tech_logo: icHTML,
        },
        {
          tech_name: "CSS",
          tech_logo: icCSS,
        },
        {
          tech_name: "Javascript",
          tech_logo: icJS,
        },
        {
          tech_name: "Mysql",
          tech_logo: icMyql,
        },
      ],
    },
    {
      image: imagePawonKoe.src,
      githubLink: "https://github.com/NasFahmi/AdminPawonkoe",
      title: "Company Profile UMKM Pawonkoe",
      subtitle:
        "Web Application for the Company Profile of the Pawonkoe MSME, Equipped with Point of Sales (POS) Features",
      tech: [
        {
          tech_name: "laravel",
          tech_logo: icLaravel,
        },
        {
          tech_name: "Tailwind",
          tech_logo: icTailwind,
        },
        {
          tech_name: "HTML",
          tech_logo: icHTML,
        },
        {
          tech_name: "CSS",
          tech_logo: icCSS,
        },
        {
          tech_name: "Javascript",
          tech_logo: icJS,
        },
        {
          tech_name: "Mysql",
          tech_logo: icMyql,
        },
      ],
    },
    {
      image: imageEoffice.src,
      githubLink: "https://github.com/codelabs-poliwangi/eoffice-poliwangi",
      title: "E-Office Politeknik Negeri Banyuwangi",
      subtitle:
        "Web-Based Incoming and Outgoing Mail Management System for the State Polytechnic of Banyuwangi",
      tech: [
        {
          tech_name: "laravel",
          tech_logo: icLaravel,
        },
        {
          tech_name: "Tailwind",
          tech_logo: icTailwind,
        },
        {
          tech_name: "HTML",
          tech_logo: icHTML,
        },
        {
          tech_name: "CSS",
          tech_logo: icCSS,
        },
        {
          tech_name: "Javascript",
          tech_logo: icJS,
        },
        {
          tech_name: "Mysql",
          tech_logo: icMyql,
        },
      ],
    },

  ],
  source: {
    link: "Github LInk",
    heading: "Check Source",
  },
};
