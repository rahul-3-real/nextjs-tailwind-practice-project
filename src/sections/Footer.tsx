import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialIG from "@/assets/social-insta.svg";
import SocialLI from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYT from "@/assets/social-youtube.svg";

const Footer = () => {
  return (
    <footer className="py-10 bg-black text-[#bcbcbc] text-sm text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute">
          <Image
            src={logo}
            alt="Logo"
            height={40}
            width={40}
            className="relative"
          />
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <Link href="/">About</Link>
          <Link href="/">Features</Link>
          <Link href="/">Customers</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Help</Link>
          <Link href="/">Careers</Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <Link href="/" target="_blank">
            <SocialX />
          </Link>
          <Link href="/" target="_blank">
            <SocialIG />
          </Link>
          <Link href="/" target="_blank">
            <SocialLI />
          </Link>
          <Link href="/" target="_blank">
            <SocialPin />
          </Link>
          <Link href="/" target="_blank">
            <SocialYT />
          </Link>
        </div>
        <p className="mt-6">&copy; 2025 Company, Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
