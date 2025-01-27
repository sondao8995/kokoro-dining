import React from "react";
import Image from "next/image";

const Cover = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full h-[220px] sm:h-[350px] md:h-[500px] lg:h-[600px] xl:h-[800px]">
        <Image
          src="/images/cover.jpg"
          alt="Japanese Food Selection"
          fill
          priority
        />
      </div>
    </section>
  );
};

export default Cover;
