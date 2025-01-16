"use client";

import { useRef } from "react";
import Link from "next/link";

import { motion, useScroll, useTransform } from "framer-motion";

import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";

const CallToAction = () => {
  const ctaRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={ctaRef}
      className="py-24 bg-gradient-to-b from-white to-[#d2dcff] overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[680px] mx-auto relative">
          <h2 className="title text-center mt-0">Sign up for free today</h2>
          <p className="para text-center">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <div className="flex justify-center items-center gap-2 mt-10">
            <Link href="/" className="btn btn-primary">
              Get for free
            </Link>
            <Link href="/" className="btn btn-text gap-1">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <motion.img
            src={starImage.src}
            alt="Star Image"
            width={360}
            height={360}
            className="hidden md:block absolute -left-[370px] -top-[120px]"
            style={{ translateY }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring Image"
            width={360}
            height={360}
            className="hidden md:block absolute -right-[331px] -top-[19px]"
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
