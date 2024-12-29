"use client";
import React from "react";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import { iCielBCDowntown } from "@/app/font";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("about");
  

  return (
    <section id="home" className="py-6 bg-[#feecd6] ml-10 mr-10">
        {/* Left Column: Content */}
        
          <div className="text-center max-w-3xl mx-auto mb-12">
         
            <h2
              className={`text-4xl font-bold mb-6 text-[#673110] ${iCielBCDowntown.className}`}
            >
              {t("title")}
            </h2>
            <p className="text-[#9a2424] autoshow text-justify text-sm mb-8">
              {t("content")}
            </p>
          </div>
          <div className="flex justify-center">
        <img
            src="/images/eelrice.png"
            style={{ width: "50%", height: "auto" }}
            alt="About"
            className="autorotate w-full h-full object-cover"
          />
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

        {/* Right Column: Images */}
        {/* <div className="grid gap-4 content-stretch">
          <div className="relative aspect-[4/3] h-full">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              sizes="auto"
              className="object-cover rounded-lg"
            />
          </div>
          <div className="list">
            <div className="relative aspect-square">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                sizes="auto"
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src={images[3].src}
                alt={images[3].alt}
                fill
                sizes="auto"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div> */}
    </section>
  );
};

export default About;
