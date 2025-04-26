"use client";
import React, { useEffect, useRef, useState } from "react";
import { iCielBCDowntown } from "@/app/font";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper'; // Import Swiper type
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

export interface Category {
  title: string;
  image: string;
  startIndex: number;
  endIndex: number;
}

interface MenuProps {
  images: string[];
  title: string;
  id: string;
  categories: Category[];
}

gsap.registerPlugin(ScrollTrigger);

const FoodMenu: React.FC<MenuProps> = ({ images, title, id, categories }) => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const menuSwiperRef = useRef<SwiperType|null>(null);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  useEffect(() => {
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
      <style jsx>{`
        .category-slide {
          width: 60px;
          height: 100px;
          padding: 5px;
        }
        .category-slide img {
          width: 50px;
          height: 50px;
          object-fit: cover;
        }
        @media (min-width: 1024px) {
          .category-slide {
            width: 100px;
            height: 140px;
            padding: 7px;
          }
          .category-slide img {
            width: 90px;
            height: 80px;
          }
        }
      `}</style>

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

      {/* Category Carousel */}
      <div className="flex items-center justify-center py-4">
        <div className="w-full max-w-4xl px-4 sm:px-6 md:px-8">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={5}
            breakpoints={{
                640: {
                  slidesPerView: 7,
                },
                768: {
                    slidesPerView:9
                },
                820:{
                    slidesPerView:10
                },
                1024:{
                    slidesPerView:8
                }
            }}
            navigation
            style={{
                "--swiper-navigation-color": "#673110",
                "--swiper-navigation-size": "15px",                
              }as React.CSSProperties}
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index}>
                <div
                  className="category-slide"
                  onClick={() => {
                    if (menuSwiperRef.current) {
                      menuSwiperRef.current.slideTo(category.startIndex);
                    }
                  }}
                  style={{
                    cursor: 'pointer',
                    border: index === activeCategoryIndex ? '2px solid orange' : 'none',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    textAlign: 'center',
                  }}
                >
                  <img
                    src={category.image}
                    alt={category.title}
                  />
                  <p className='text-gray-500 text-sm'>{category.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Menu Pages Swiper */}
      <div className="flex items-center justify-center py-8">
        <div className="w-full max-w-4xl min-h-[50vh] px-4 sm:px-6 md:px-8 overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => { menuSwiperRef.current = swiper; }}
            onSlideChange={(swiper) => {
              const currentIndex = swiper.activeIndex;
              const activeCatIndex = categories.findIndex(cat => currentIndex >= cat.startIndex && currentIndex <= cat.endIndex);
              setActiveCategoryIndex(activeCatIndex);
            }}
            style={{
                '--swiper-pagination-color': '#673110',
                '--swiper-pagination-bullet-inactive-color': '#d1d5db',
                '--swiper-pagination-bullet-inactive-opacity': '0.5',
                '--swiper-pagination-bullet-size': '10px',
              }as React.CSSProperties}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Page ${index + 1}`}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
                  style={{ margin: "auto", display: "block" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;