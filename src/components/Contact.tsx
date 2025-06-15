"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface Restaurant {
  id: number;
  image: string;
  title: string;
  address: string;
  hours: string;
  hotline: string;
  deliveryk?: string;
  shopee?: string;
  be?: string;
  ggmap?:string; 
}
interface Logo {
  src: string;
  key: keyof Pick<Restaurant, "shopee" | "deliveryk" | "be"| "ggmap">;
}
const Contact = () => {
  
const t = useTranslations("contact");

// Sample data for the restaurants
const restaurants: Restaurant[] = [  {
    id: 1,
    image: "/images/yn.jpg",
    title: "Yên Ninh",
    address: t("store1"),
    hours: "10:00 - 14:00, 17:00 - 21:00",
    hotline: "0828 826 299",
    deliveryk: "https://www.deliveryk.com/shops/10148",
    shopee: "https://shopeefood.vn/ha-noi/kokoro-com-ngon-nhat-ban-yen-ninh",
    be: "https://begroup.onelink.me/n83F/odzekkwr",
    ggmap:"https://www.google.com/maps/dir//KOKORO+Japanese+Dining+30+P.+Y%C3%AAn+Ninh+Tr%C3%BAc+B%E1%BA%A1ch+Ba+%C4%90%C3%ACnh,+H%C3%A0+N%E1%BB%99i+100000/@21.0432104,105.8443565,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3135abd20652cdd3:0x445a95a1eabdc9b5!2m2!1d105.8443565!2d21.0432104?entry=ttu&g_ep=EgoyMDI1MDQyMS4wIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D",
},
  {
    id: 2,
    image: "/images/ld.jpg",
    title: "Linh Đàm",
    address:  t("store2"),
    hours: "10:00 - 14:00, 17:00 - 21:00",
    hotline: "0332 689 299",
    shopee: "https://shopeefood.vn/u/5eH4Cri",
    be: "https://be.com/5eH4Cri",
    deliveryk: "https://www.deliveryk.com/shops/11169",
    ggmap:"https://www.google.com/maps/dir//Kokoro+Japanese+Dining+Linh+%C4%90%C3%A0m,+B%C3%A1n+%C4%90%E1%BA%A3o+Linh+%C4%90%C3%A0m,+Khu+%C4%91%C3%B4+th%E1%BB%8B+Linh+%C4%90%C3%A0m,+Ho%C3%A0ng+Li%E1%BB%87t,+Ho%C3%A0ng+Mai,+Hanoi/@21.0432104,105.8443565,16z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3135ad0067586a67:0xb7287fe2c3f7de8d!2m2!1d105.8324404!2d20.9627545?entry=ttu&g_ep=EgoyMDI1MDQyMS4wIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D"
},
  {
    id: 3,
    image: "/images/ngd.jpg",
    title: "Ngoại Giao Đoàn",
    address: t("store3"),
    hours: "10:00 - 14:00, 17:00 - 21:00",
    hotline: "0828 838 299",
    be:"https://begroup.onelink.me/n83F/6tiecvb0",
    shopee:"https://shopeefood.vn/u/YUrgNuq",
    ggmap:"https://www.google.com/maps/dir//KOKORO+Japanese+Dining+-+Ngo%E1%BA%A1i+giao+%C4%91o%C3%A0n,+Ph%E1%BB%91+Nguy%E1%BB%85n+Duy+Th%C3%AC,+p,+Xu%C3%A2n+T%E1%BA%A3o,+B%E1%BA%AFc+T%E1%BB%AB+Li%C3%AAm,+H%C3%A0+N%E1%BB%99i/@21.0432104,105.8443565,16z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3135abe8a78f65f3:0x67cf806a54787358!2m2!1d105.8004115!2d21.0653665?entry=ttu&g_ep=EgoyMDI1MDQyMS4wIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D"
  },
  {
    id: 4,
    image: "/images/sc.jpg",
    title: "Smart City",
    address: t("store4"),
    hours: "10:00 - 14:00, 17:00 - 21:00",
    hotline: "0344 089 299",
    be: "https://be.com/5eH4Cri",
    shopee: "https://shopeefood.vn/u/YUrgNuq",
    deliveryk: "https://www.deliveryk.com/shops/11169",
    ggmap: "https://www.google.com/maps/dir//KOKORO+Japanese+Dining+-+Ngo%E1%BA%A1i+giao+%C4%91o%C3%A0n,+Ph%E1%BB%91+Nguy%E1%BB%85n+Duy+Th%C3%AC,+p,+Xu%C3%A2n+T%E1%BA%A3o,+B%E1%BA%AFc+T%E1%BB%AB+Li%C3%AAm,+H%C3%A0+N%E1%BB%99i/@21.0432104,105.8443565,16z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3135abe8a78f65f3:0x67cf806a54787358!2m2!1d105.8004115!2d21.0653665?entry=ttu&g_ep=EgoyMDI1MDQyMS4wIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D"
    
  }
];
const logos: Logo[] = [
  { src: "/images/ggmap.png",key:"ggmap"},
  { src: "/images/shopee.png", key: "shopee" },
  { src: "/images/deliveryk.png", key: "deliveryk" },
  { src: "/images/be.png", key: "be" }
];
  return (
    <div className="w-full max-w-5xl mx-auto py-8">
       
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        style={{
          '--swiper-pagination-color': '#673110',
          '--swiper-pagination-bullet-inactive-color': '#d1d5db',
          '--swiper-pagination-bullet-inactive-opacity': '0.5',
          '--swiper-pagination-bullet-size': '10px',
        }as React.CSSProperties}
      >
        {restaurants.map((restaurant) => (
          <SwiperSlide key={restaurant.id}>
            <div className="rounded-lg shadow-md overflow-hidden">
            <Image
                src={restaurant.image}
                alt={restaurant.title}
                width={400}
                height={300}
                className="w-full max-h-[200px] object-cover swiper-lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
             <div className="p-4 h-36 bg-white flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 line-clamp-1">{restaurant.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2"> {restaurant.address}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-1">{restaurant.hours}</p>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-1"> {restaurant.hotline}</p>
                </div>
                <div className="absolute bottom-30 right-4 flex space-x-2">
                  {logos.map((logo, index) => (
                   <a key={index} href={restaurant[logo.key]}>
                   <Image
                        src={logo.src}
                        alt={`${logo.key} logo`}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain swiper-lazy"
                        loading="lazy"
                      /></a>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Contact;