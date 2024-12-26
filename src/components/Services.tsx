"use client";
import React from "react";
import Image from "next/image";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import { iCielBCDowntown } from "@/app/font";


const About = () => {
 
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
              ĐÔI LỜI TỪ KOKORO
            </h2>
            <p className="text-[#9a2424] text-justify text-sm mb-8">
              &quot;Món ăn ngon đến từ trái tim&quot; – đó chính là triết lý ẩm
              thực mà KOKORO muốn gửi gắm đến thực khách. Chúng tôi mong muốn
              tạo nên một không gian ấm cúng, thân thuộc như chính ngôi nhà của
              bạn, nơi bạn có thể thưởng thức những món ăn Nhật Bản đậm đà hương
              vị, được chế biến từ những nguyên liệu tươi ngon nhất. <br />
              Với KOKORO, ẩm thực không chỉ là việc ăn uống mà còn là sự kết nối
              giữa con người với con người. Mỗi món ăn tại đây đều được chế biến với tất cả tâm
              huyết, mang đến cho bạn những trải nghiệm ẩm thực tuyệt vời nhất. <br />
              Chúng tôi mong rằng quý khách sẽ có những giây phút thật vui vẻ và đáng nhớ tại KOKORO. Hãy đến và cùng chúng tôi khám phá thế giới ẩm thực Nhật Bản nhé!
            </p>
          </div>
          <h2
            className={`text-4xl font-bold mb-6 text-[#673110] text-center ${iCielBCDowntown.className}`}
          >
            KẾT NỐI CÙNG KOKORO
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
