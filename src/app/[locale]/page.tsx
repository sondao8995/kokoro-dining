"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { utma } from "@/app/font";
import { useTranslations } from "next-intl";
import { Header } from "@/components/Header";
const Cover = dynamic(() => import("../../components/Cover"), {
  loading: () => <div className="h-64 bg-gray-200" />,
});
const About = dynamic(() => import("../../components/About"), {
  loading: () => <div className="h-64 bg-gray-200" />,
});
const Footer = dynamic(() => import("../../components/Footer"), {
  loading: () => <div className="h-32 bg-gray-200" />,
});
const Menu = dynamic(() => import("@/components/Menu"), {
  loading: () => <div className="h-64 bg-gray-200" />,
});
const FoodMenu = dynamic(() => import("@/components/FoodMenu"), {
  ssr: false, // Disable SSR for Swiper/GSAP
  loading: () => <div className="h-96 bg-gray-200" />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="h-64 bg-gray-200" />,
});
const SnowParticle = dynamic(() => import("@/components/SnowParticle"), {
  ssr: false, // Likely client-side animation
  loading: () => <div />,
});
const Advertisement = dynamic(() => import("@/components/Advertisement"), {
  loading: () => <div className="h-48 bg-gray-200" />,
});

const Home = () => {
  const t = useTranslations("common");
  const menuImages = [
    "/images/book-back.jpg",
    "/images/book-cover.jpg",
    "/images/page2.jpg",
    "/images/page3.jpg",
    "/images/page4.jpg",
    "/images/page5.jpg",
    "/images/page6.jpg",
    "/images/page7.jpg",
    "/images/page8.jpg",
    "/images/page9.jpg",
    "/images/page10.jpg",
    "/images/page11.jpg",
    "/images/page12.jpg",
    "/images/page13.jpg",
    "/images/page14.jpg",
    "/images/page15.jpg",
  ];
  const promotionImages = [
    "/images/promotion1.jpg",
    "/images/promotion2.jpg",
    "/images/promotion3.jpg",
    "/images/promotion4.jpg",
  ];
  const speacialImages = [
    "/images/special2.png",
    "/images/special3.png",
    "/images/special4.png",
    "/images/special5.png",
    "/images/special6.png",
  ];
  const categories = [
    {
      title: "Khai vị",
      image: "/images/007.jpg",
      startIndex: 3,
      endIndex: 3,
    },
    {
      title: "Ăn nhẹ",
      image: "/images/011.jpg",
      startIndex: 4,
      endIndex: 5,
    },
    {
      title: "Mì udon",
      image: "/images/751.jpg",
      startIndex: 6,
      endIndex: 6,
    },
    {
      title: "Cơm lươn",
      image: "/images/652.jpg",
      startIndex: 7,
      endIndex: 7,
    },
    {
      title: "Cơm natto",
      image: "/images/851.jpg",
      startIndex: 8,
      endIndex: 8,
    },
    {
      title: "Cơm Gyudon",
      image: "/images/252.jpg",
      startIndex: 9,
      endIndex: 9,
    },
    {
      title: "Cơm Karubi",
      image: "/images/154.jpg",
      startIndex: 10,
      endIndex: 10,
    },
    {
      title: "Cơm gà",
      image: "/images/451.jpg",
      startIndex: 11,
      endIndex: 11,
    },
    {
      title: "Cơm cà ri",
      image: "/images/353.jpg",
      startIndex: 12,
      endIndex: 12,
    },
    {
      title: "Cơm heo",
      image: "/images/551.jpg",
      startIndex: 13,
      endIndex: 13,
    },
    {
      title: "Tráng miệng",
      image: "/images/995.jpg",
      startIndex: 14,
      endIndex: 14,
    },
  ];

  return (
    <div className={`${utma.className}`}>
      <SnowParticle />
      <Header />
      <main>
        {/* <Advertisement /> */}
        <Cover />
        <About />
        <Contact />
        {/* Container for sushi and udon images */}
        <div className="fixed inset-0 grid grid-cols-2 place-items-center z-1 opacity-30 pointer-events-none">
          <Image
            src="/images/sushi.png"
            alt="Sushi"
            width={384} // max-w-md (lg) = 384px
            height={384}
            className="max-w-xs md:max-w-sm lg:max-w-md"
            sizes="(max-width: 640px) 288px, (max-width: 768px) 336px, 384px"
          />
          <Image
            src="/images/udon.png"
            alt="Udon"
            width={384}
            height={384}
            className="max-w-xs md:max-w-sm lg:max-w-md"
            sizes="(max-width: 640px) 288px, (max-width: 768px) 336px, 384px"
          />
        </div>
        <FoodMenu images={menuImages} title={t("menu")} id="menu" categories={categories} />
        <Menu images={promotionImages} title={t("promotions")} id="promotions" />
        <Menu images={speacialImages} title={t("special")} id="special" />
      </main>
      <Footer />
    </div>
  );
};

export default Home;