"use client";
import React, { useEffect, useRef } from "react";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import { iCielBCDowntown } from "@/app/font";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const t = useTranslations("about");
  const textRefTitle = useRef<HTMLHeadingElement>(null);
  const textRefConnect = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    // Check if window exists (ensure client-side execution)
    if (typeof window === "undefined") return;

    const charsTitle = textRefTitle.current?.querySelectorAll(".char");
    if (charsTitle) {
      gsap.fromTo(
        charsTitle,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRefTitle.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
    const charsConnect = textRefConnect.current?.querySelectorAll(".char");
    if (charsConnect) {
      gsap.fromTo(
        charsConnect,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRefConnect.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);
  return (
    <section id="home" className="py-6 bg-[#feecd6] ml-10 mr-10">
      {/* Left Column: Content */}

      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2
          ref={textRefTitle}
          className={`animated text-4xl font-bold mb-6 text-[#673110] ${iCielBCDowntown.className}`}
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
        <p className="text-[#9a2424] autoshow text-justify text-sm mb-8">
          {t("content")}
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src="/images/eelrice.png"
          style={{ width: "200px", height: "auto" }}
          alt="About"
          className="autorotate w-full h-full object-cover"
        />
      </div>
      <h2
        ref={textRefConnect}
        className={`animated text-4xl font-bold mb-6 text-[#673110] text-center ${iCielBCDowntown.className}`}
      >
        {t("connect")
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
