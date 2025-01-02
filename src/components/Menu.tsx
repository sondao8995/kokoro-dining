"use client";
import React, { useEffect, useRef } from "react";
import { Carousel } from "antd";
import { iCielBCDowntown } from "@/app/font";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

interface MenuProps {
  images: string[];
  title: string;
  id: string;
}

gsap.registerPlugin(ScrollTrigger);

const Menu: React.FC<MenuProps> = ({ images, title, id }) => {
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

  return (
    <section id={id}>
      <h2
        ref={textRef}
        className={`animated-text text-4xl font-bold text-center text-[#673110] mt-4 ${iCielBCDowntown.className}`}
      >
        {title.split("").map((char, index) => (
          <span
            key={index}
            className="char"
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>
      <div className="flex items-center justify-center py-8">
        {/* Carousel Container with Fixed Dimensions */}
        <div className="w-full max-w-4xl min-h-[50vh] px-4 sm:px-6 md:px-8 overflow-hidden">
          <Carousel autoplay arrows className="h-full">
            {images.map((src, index) => (
              <div
                key={index}
                className="h-full flex items-center justify-center bg-[#feecd6]"
              >
                <img
                  src={src}
                  alt={`Page ${index + 1}`}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
                  style={{ margin: "auto", display: "block" }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Menu;
