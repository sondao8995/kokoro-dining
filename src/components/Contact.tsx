"use client";

import { Phone } from "lucide-react";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { iCielBCDowntown } from "@/app/font";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    // Check if window exists (ensure client-side execution)
    if (typeof window === "undefined") return;

    const chars = textRef.current?.querySelectorAll(".char");
    if (chars) {
      gsap.fromTo(
        chars,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);
  const t = useTranslations("contact");
  const locations = [
    {
      address: t("store1"),
      hotline: "0828 826 299",
      deliveryk: "https://www.deliveryk.com/shops/10148",
      shopee: "https://shopeefood.vn/ha-noi/kokoro-com-ngon-nhat-ban-yen-ninh",
      be: "https://begroup.onelink.me/n83F/odzekkwr",
    },
    {
      address: t("store2"),

      hotline: "0332 689 299",
      shopee: "https://shopeefood.vn/u/5eH4Cri",
      be: "https://be.com/5eH4Cri",
      deliveryk: "https://www.deliveryk.com/shops/11169",
    },
  ];

  return (
    <section id="contact">
      <h2
        ref={textRef}
        className={`animated text-3xl font-bold text-center mb-2 text-[#673110] ${iCielBCDowntown.className}`}
      >
        {t("title")
          .split("")
          .map((char, index) => (
            <span
              key={index}
              className="char"
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
      </h2>
      <section className="py-8 mx-4 sm:mx-8">
        {/* First Column: Google Map 1 */}
        <div className="bg-[#feecd6] autoshow overflow-hidden">
          {/* Address Text Above Map */}
          <p className="font-medium text-xl text-center text-[#673110] font-semibold mb-2">
            {locations[0].address}
          </p>

          <div className="flex items-center justify-center">
            <Phone size={16} />
            <a
              href={`tel:${locations[0].hotline.replace(/\s/g, "")}`}
              className="text-red-600 font-semibold !text-xl mb-2"
            >
              Hotline: {locations[0].hotline}
            </a>
          </div>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD_w76cHgCjtM2XS_Z9oy0AGm55_gbsk4k&q=Kokoro+Dining,Yen+Ninh"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="max-w-5xl mx-auto"
          ></iframe>
          <p className="font-medium text-center text-[#673110] font-semibold mb-2 mt-2">
            {t("available")}
          </p>
          <div className="flex gap-8 mt-2 justify-center">
            <a href={locations[0].shopee} target="_blank">
              <Image
                src="/images/shopee.png"
                alt="Shopee Food"
                width={50}
                height={50}
              />
            </a>
            <a href={locations[0].be} target="_blank">
              <Image src="/images/be.png" alt="Be" width={50} height={50} />
            </a>
            <a href={locations[0].deliveryk} target="_blank">
              <Image
                src="/images/deliveryk.png"
                alt="Delivery K"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>

        {/* Second Column: Google Map 2 */}
        <div className="bg-[#feecd6] autoshow overflow-hidden mt-10">
          {/* Address Text Above Map */}
          <p className="font-medium text-xl text-center text-[#673110] font-semibold mb-2">
            {locations[1].address}
          </p>
          <div className="flex items-center justify-center">
            <Phone size={16} />
            <a
              href={`tel:${locations[1].hotline.replace(/\s/g, "")}`}
              className="text-red-600 font-semibold !text-xl mb-2"
            >
              Hotline: {locations[1].hotline}
            </a>
          </div>
          <iframe
            title="Google Map 2"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD_w76cHgCjtM2XS_Z9oy0AGm55_gbsk4k&q=Kokoro+Dining,Linh+Đàm"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="max-w-5xl mx-auto"
          ></iframe>
          <p className="font-medium text-center text-[#673110] font-semibold mb-2 mt-2">
            {t("available")}
          </p>
          <div className="flex gap-8 mt-2 justify-center">
            <a href={locations[1].shopee} target="_blank">
              <Image
                src="/images/shopee.png"
                alt="Shopee Food"
                width={50}
                height={50}
              />
            </a>
            <a href={locations[1].be} target="_blank">
              <Image src="/images/be.png" alt="Be" width={50} height={50} />
            </a>
            <a href={locations[1].deliveryk} target="_blank">
              <Image
                src="/images/deliveryk.png"
                alt="Delivery K"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
