"use client";

import { useRef } from "react";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";

import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

const ProductShowcase = () => {
  const productRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={productRef}
      className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[680px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="title text-center">
            A more effective way to track progress
          </h2>
          <p className="text-center para">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>

        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            className="hidden md:block absolute -right-36 -top-32"
            height={262}
            width={262}
            style={{ translateY }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube Image"
            className="hidden md:block absolute bottom-24 -left-36"
            height={248}
            width={248}
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
