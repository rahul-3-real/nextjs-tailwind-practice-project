"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

import CheckIcon from "@/assets/check.svg";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <h2 className="title text-center mt-0">Pricing</h2>
          <p className="para text-center">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className={twMerge(
                `card`,
                tier.inverse && `border-black bg-black text-white`
              )}
            >
              <div className="flex justify-between">
                <h3
                  className={twMerge(
                    "text-lg font-bold text-black/50",
                    tier.inverse && "text-white/60"
                  )}
                >
                  {tier.title}
                </h3>
                {tier.popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <motion.span
                      className="bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff)] [background-size:200%] bg-clip-text text-transparent font-medium"
                      animate={{ backgroundPositionX: "-100%" }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                        duration: 2,
                      }}
                    >
                      Popular
                    </motion.span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">
                  ${tier.monthlyPrice}
                </span>
                <span className="tracking-tight font-bold text-black/50">
                  /month
                </span>
              </div>
              <button
                className={twMerge(
                  "btn btn-primary w-full mt-[30px]",
                  tier.inverse && "bg-white text-black"
                )}
              >
                {tier.buttonText}
              </button>
              <ul className="flex flex-col gap-5 mt-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="text-sm flex items-center gap-4">
                    <CheckIcon className="h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
