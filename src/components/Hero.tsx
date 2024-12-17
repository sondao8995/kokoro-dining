import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] xl:h-[1000px]">
        <Image
          src="/images/cover.jpg"
          alt="Japanese Food Selection"
          fill
          objectFit="contain"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
