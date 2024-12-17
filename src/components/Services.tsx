"use client";
import React from "react";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
const Services = () => {
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
    <section className="py-16 bg-white ml-16 mr-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center h-full">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#673110]">
              KHÔNG GIAN QUÁN
            </h2>
            <p className="text-gray-400 mb-8">
              Khác biệt với những tông màu quen thuộc khi nghĩ tới nhà hàng Nhật
              Bản truyền thống, Kokoro Dining mang tới thế hiện đại, tối giản
              nhưng vẫn đơn cùng xã trang nhã. Nơi bạn chắc chắn cảm thấy thoải
              mái và vui vẻ dùng bữa cùng gia đình và bạn bè.
            </p>
            <button className="border border-red-500 w-full h-16 text-black text-sm font-roboto text-red-500">
              TÌM HIỂU THÊM VỀ CHÚNG TÔI
            </button>
          </div>
          <div className="flex gap-4 mb-8 justify-center">
            <a
              href="https://www.facebook.com/kokoro30yenninh"
              className="text-blue-600 hover:text-blue-700"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://instagram.com/kokorodiningvn"
              className="text-pink-600 hover:text-pink-700"
            >
              <Instagram size={24} />
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

export default Services;
