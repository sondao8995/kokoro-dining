"use client";
import React from "react";
import { Carousel } from "antd";
import { iCielBCDowntown } from "@/app/font";
interface MenuProps {
  images: string[];
  title: string;
  id: string;
}

const TwoPagesMenu: React.FC<MenuProps> = ({ images, title, id }) => {
  // Split images into pairs of left and right pages
  const pairedImages = [];
  for (let i = 0; i < images.length; i += 2) {
    pairedImages.push([images[i], images[i + 1]]);
  }

  return (
    <section id={id}>
      <h2
        className={`text-3xl font-bold text-center text-[#673110] mt-4 ${iCielBCDowntown.className}`}
      >
        {title}
      </h2>
      <div className="flex items-center justify-center py-8">
        {/* Flipbook Carousel */}
        <div className="w-full max-w-4xl min-h-[50vh] px-4 sm:px-6 md:px-8 overflow-hidden">
          <Carousel autoplay arrows className="h-full">
            {pairedImages.map((pair, index) => (
              <div
                key={index}
                className="h-full flex items-center justify-center bg-[#feecd6]"
              >
                <div className="flex w-full max-w-4xl space-x-4">
                  {/* Left Page */}
                  <div className="flex-1 h-[50vh] bg-[#feecd6]  flex items-center justify-center">
                    {pair[0] ? (
                      <img
                        src={pair[0]}
                        alt={`Page ${index * 2 + 1}`}
                        className="max-h-full max-w-full object-contain "
                      />
                    ) : (
                      <div className="text-gray-500">No Content</div>
                    )}
                  </div>
                  {/* Right Page */}
                  <div className="flex-1 h-[50vh] bg-[#feecd6] flex items-center justify-center">
                    {pair[1] ? (
                      <img
                        src={pair[1]}
                        alt={`Page ${index * 2 + 2}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <div className="text-gray-500">No Content</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TwoPagesMenu;
