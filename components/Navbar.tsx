"use client";
import { useState, useEffect } from "react";
import { dataNavbar } from "@/data/navbar";
import Link from "next/link";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(0);

  useEffect(() => {
    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = dataNavbar.findIndex(
            (item) => item.toLowerCase() === entry.target.id.toLowerCase()
          );
          if (index !== -1) {
            setActiveMenu(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1,
    });

    dataNavbar.forEach((item) => {
      const section = document.getElementById(item.toLowerCase());
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      dataNavbar.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-col px-5">
      <div className="sticky top-0 z-50 flex items-center justify-center w-full">
        <div className="px-[2px] py-[2px] bg-gradient-to-br from-gradient-btn-light to-gradient-btn-dark border-1 rounded-xl mt-5">
          <div className="relative px-8 py-6 bg-btn-primary rounded-xl">
            <ul className="flex items-center justify-center gap-5 font-medium">
              {dataNavbar.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center justify-center"
                  onClick={() => setActiveMenu(index)}
                >
                  <Link href={`#${item.toLowerCase()}`}>
                    <p
                      className={` ${
                        activeMenu === index
                          ? "text-text-primary"
                          : "text-text-secoundary"
                      }`}
                    >
                      {item}
                    </p>
                  </Link>
                  {activeMenu === index && (
                    <div className="absolute w-2 h-2 transition-opacity rounded-full bottom-4 bg-text-primary"></div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
