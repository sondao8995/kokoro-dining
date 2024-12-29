"use client";
import React from "react";
import { Carousel } from "antd";
import { iCielBCDowntown } from "@/app/font";
interface MenuProps {
  images: string[];
  title: string;
  id: string;
}

const Menu: React.FC<MenuProps> = ({ images, title, id }) => {
  return (
    <section id={id}>
      <h2
        className={`text-4xl font-bold text-center text-[#673110] mt-4 ${iCielBCDowntown.className}`}
      >
        {title}
      </h2>
      <div className="autoshow flex items-center justify-center py-8">
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
