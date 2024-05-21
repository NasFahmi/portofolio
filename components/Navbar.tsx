'use client'
import { useState } from "react";
import { dataNavbar } from "@/data/navbar";
import Link from "next/link";

export default function Navbar() {
    // State untuk menyimpan menu yang aktif
    const [activeMenu, setActiveMenu] = useState(0);

    return (
        <div className="flex flex-col px-5">
            <div className="flex justify-center items-center">
                <div className="px-[2px] py-[2px] bg-gradient-to-br from-gradient-btn-light to-gradient-btn-dark border-1 rounded-xl mt-5">
                    <div className="px-8 py-6 bg-btn-primary rounded-xl relative">
                        <ul className="flex justify-center items-center gap-5 font-medium">
                            {dataNavbar.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex justify-center flex-col items-center"
                                    // Tambahkan onClick untuk mengatur menu aktif
                                    onClick={() => setActiveMenu(index)}
                                >
                                    <Link href={`#${item}`}>
                                        {item}
                                    </Link>
                                    {/* Hanya tampilkan lingkaran jika menu ini aktif */}
                                    {activeMenu === index && (
                                        <div className="transition-opacity absolute bottom-4 w-2 h-2 bg-text-primary rounded-full"></div>
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
