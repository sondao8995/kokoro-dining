"use client";
import React, { useState } from "react";
import { Carousel } from "antd";
const images = [
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
const FlipBook: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleBeforeChange = (from: number, to: number) => {
    setCurrentIndex(to);
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-center text-[#673110] mt-12">
        Menu
      </h2>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-4xl mx-4 sm:mx-6 md:mx-8">
          <Carousel autoplay beforeChange={handleBeforeChange} arrows>
            {images.map((src, index) => (
              <div
                key={index}
                className={`flex items-center justify-center ${
                  currentIndex === index ? "scale-105 transition-transform" : ""
                }`}
              >
                <img
                  src={src}
                  alt={`Page ${index + 1}`}
                  className="max-h-[80vh] mx-auto rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default FlipBook;
