import React from "react";
import Image from "next/image";

export default function Header() {
    return (
        <header className="border-b-[1px] py-4 bg-white">
            <nav>
                <div className="container grid grid-cols-[1fr_auto_1fr] mx-auto items-center">
                    <ul className="flex flex-wrap lg:space-x-6">
                        <li>
                            <a
                                className="text-sm text-gray-400 hover:text-gray-500"
                                href="#"
                            >
                                Start
                            </a>
                        </li>
                    </ul>
                    <a className="text-3xl font-bold leading-none" href="#">
                        <img
                            className="h-16"
                            src="/logo.svg"
                            alt=""
                            width="auto"
                        />
                    </a>
                    <ul className="flex flex-wrap justify-end lg:space-x-6">
                        <li>
                            <a
                                className="text-sm text-gray-400 hover:text-gray-500"
                                href="#"
                            >
                                Start
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
