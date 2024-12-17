"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const dishes = [
  {
    src: "/images/dish1.jpg",
    alt: "Japanese rice bowl with special sauce and side soup",
  },
  {
    src: "/images/dish2.jpg",
    alt: "Fresh sushi platter on crystal plate with wasabi",
  },
  {
    src: "/images/dish3.jpg",
    alt: "Traditional sake set with decorative bottle",
  },
  {
    src: "/images/dish4.jpg",
    alt: "Tempura dish with bamboo basket presentation",
  },
  { src: "/images/dish5.jpg", alt: "Modern Japanese fusion dish presentation" },
  { src: "/images/dish6.jpg", alt: "Modern Japanese fusion dish presentation" },
  { src: "/images/dish7.jpg", alt: "Modern Japanese fusion dish presentation" },
  { src: "/images/dish8.jpg", alt: "Modern Japanese fusion dish presentation" },
];

const ImageSliderWithPreview = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(dishes.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const previousPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleDishes = React.useMemo(() => {
    const start = currentPage * itemsPerPage;
    return dishes.slice(start, start + itemsPerPage);
  }, [currentPage]);

  return (
    <section className="ml-16 mr-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#673110]">
        MÓN ĂN NỔI BẬT
      </h2>

      {/* Grid Layout for Horizontal Images */}
      <div className="grid grid-cols-4 gap-4">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="relative aspect-[3/4] bg-[#f5d0a9] rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setPreviewImage(dish.src)}
          >
            <Image
              src={dish.src}
              alt={dish.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button
            className="absolute top-8 right-8 text-white hover:text-gray-300"
            onClick={() => setPreviewImage(null)}
          >
            <X size={32} />
          </button>
          <div className="relative w-[90%] md:w-[70%] lg:w-[50%] h-auto">
            <Image
              src={previewImage}
              alt="Preview"
              width={800}
              height={600}
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageSliderWithPreview;
