import React from "react";
import Image from "next/image";

const Cover = () => {
  return (
    <section className="relative w-full overflow-hidden flex justify-center z-20">
      <div className="relative w-full max-w-[1920px] h-[220px] sm:h-[350px] md:h-[500px] lg:h-[600px] xl:h-[800px]">
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
