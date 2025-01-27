"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import { loadImageShape } from "@tsparticles/shape-image";
const SnowParticle = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      await loadSlim(engine);
      await loadImageShape(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          options={{
            fullScreen: {
              enable: true,
              zIndex: 9999,
            },
            particles: {
              color: {
                value: "#fff",
              },
              number: {
                value: 10,
              },
              opacity: {
                value: { min: 0.3, max: 1 },
              },
              shape: {
                type: "image",
                options: {
                  image: { src: "/images/redleaf.png"},
                },
              },
              size: {
                value: { min: 10, max: 15 },
              },
              move: {
                direction: "bottom-right",
                enable: true,
                speed: { min: 1, max: 3 },
                straight: true,
              },
            },
          }}
        />
      )}
    </>
  );
};

export default SnowParticle;
