import React from "react";
import Image from "next/image";
import { ICard } from "@/types/";

export default function Card(props: ICard) {
    const { title, desc, imgAlt, imgSrc } = props;
    return (
        <div className="py-6 pl-6 pr-4 mb-8 bg-white rounded-lg shadow">
            <span className="inline-flex items-center justify-center p-3 mb-4 bg-green-100 rounded">
                <Image src={imgSrc} alt={imgAlt} width={30} height={30} />
            </span>
            <h4
                className="mb-2 text-2xl font-bold font-heading"
                data-config-id="header3"
            >
                {title}
            </h4>
            <p className="leading-loose text-gray-500" data-config-id="desc3">
                {desc}
            </p>
        </div>
    );
}
