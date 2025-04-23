"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";

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
}
interface Logo {
  src: string;
  key: keyof Pick<Restaurant, "shopee" | "deliveryk" | "be">;
}
const Contact = () => {
  
const t = useTranslations("contact");

// Sample data for the restaurants
const restaurants: Restaurant[] = [  {
    id: 1,
    image: "/images/yn.jpg",
    title: "Cơ sở số 1",
    address: t("store1"),
    hours: "10:00 - 14:00, 17:00 - 21:00",
    hotline: "0828 826 299",
    deliveryk: "https://www.deliveryk.com/shops/10148",
    shopee: "https://shopeefood.vn/ha-noi/kokoro-com-ngon-nhat-ban-yen-ninh",
    be: "https://begroup.onelink.me/n83F/odzekkwr",
},
  {
    id: 2,
    image: "/images/ld.jpg",
    title: "Cơ sở số 2",
    address:  t("store2"),
    hours: "10:00 - 14:00, 17:00 - 21:00",
    hotline: "0332 689 299",
    shopee: "https://shopeefood.vn/u/5eH4Cri",
    be: "https://be.com/5eH4Cri",
    deliveryk: "https://www.deliveryk.com/shops/11169",
},
  {
    id: 3,
    image: "/images/ngd.jpg",
    title: "Cơ sở số 3",
    address: t("store3"),
    hours: "10:00 - 14:00, 17:00 - 21:00",
    hotline: "0828 838 299",
  }
];
const logos: Logo[] = [
  { src: "/images/shopee.png", key: "shopee" },
  { src: "/images/deliveryk.png", key: "deliveryk" },
  { src: "/images/be.png", key: "be" },
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
        className="mySwiper"
      >
        {restaurants.map((restaurant) => (
          <SwiperSlide key={restaurant.id}>
            <div className="rounded-lg shadow-md overflow-hidden">
              <img
                src={restaurant.image}
                alt={restaurant.title}
                className="w-full max-h-[200px] object-cover"
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
                   <img
                      key={index}
                      src={logo.src}
                      alt={`Logo ${index + 1}`}
                      className="w-6 h-6 object-contain"
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