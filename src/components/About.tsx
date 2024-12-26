"use client";
import React from "react";
import Image from "next/image";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import { iCielBCDowntown } from "@/app/font";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("about");
  const images = [
    {
      src: "/images/space1.jpg",
      alt: "Private dining room with traditional Japanese style seating",
    },
    {
      src: "/images/space2.jpg",
      alt: "Modern Japanese restaurant interior",
    },
    {
      src: "/images/space3.jpg",
      alt: "Comfortable dining area with wooden furniture",
    },
    {
      src: "/images/space4.jpg",
      alt: "Contemporary Japanese dining space",
    },
  ];

  return (
    <section id="home" className="py-6 bg-[#feecd6] ml-10 mr-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center h-full">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2
              className={`text-4xl font-bold mb-6 text-[#673110] ${iCielBCDowntown.className}`}
            >
              {t("title")}
            </h2>
            <p className="text-[#9a2424] text-justify text-sm mb-8">
              {t("content")}
            </p>
          </div>
          <h2
            className={`text-4xl font-bold mb-6 text-[#673110] text-center ${iCielBCDowntown.className}`}
          >
            {t("connect")}
          </h2>
          <div className="flex gap-4 mb-8 justify-center">
            <a
              href="https://www.facebook.com/kokoro30yenninh"
              className="text-blue-600 hover:text-blue-700"
            >
              <FacebookOutlined style={{ fontSize: 50 }} />
            </a>
            <a
              href="https://instagram.com/kokorodiningvn"
              className="text-pink-600 hover:text-pink-700"
            >
              <InstagramOutlined style={{ fontSize: 50 }} />
            </a>
          </div>
          {/* Google Map */}
        </div>

        {/* Right Column: Images */}
        <div className="grid gap-4 content-stretch">
          <div className="relative aspect-[4/3] h-full">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="relative aspect-square">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src={images[3].src}
                alt={images[3].alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
