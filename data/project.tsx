import imageSafeSchool from "@/public/image_safeschools.png";
import imagePawonKoe from "@/public/image_pawonkoe.png";
import icTailwind from "@/public/ic_tailwind.png";
import icLaravel from "@/public/ic_laravel.png";
import icMyql from "@/public/ic_mysql.png";
import icHTML from "@/public/ic_html.png";
import icCSS from "@/public/ic_css.png";
import icJS from "@/public/ic_js.png";

export const dataProject = {
  title: "Project",
  subtitle: "Most Recent Work",
  card_project: [
    {
      image: imageSafeSchool.src,
      title: "SafeSchools",
      subtitle:
        "Website Survei Anti-Bullying untuk Sekolah Menengah Pertama: Mewujudkan Lingkungan Belajar yang Aman ",
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
      title: "Company Profile UMKM Pawonkoe",
      subtitle:
        "Web Apps untuk Profil Perusahaan UMKM Pawonkoe, lengkap dengan fitur Point of Sales (POS)",
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
