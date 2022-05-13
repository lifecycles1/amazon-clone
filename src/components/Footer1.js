import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

function Footer1() {
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div>
      <div className="bg-[#3a495a] hover:opacity-95">
        <button
          className="flex-grow w-full h-12 text-[#f1f1f1] text-sm font-medium"
          onClick={scrollToTop}
        >
          Back to top
        </button>
      </div>
      <div className="flex space-x-28 justify-center bg-[#232f3e] pt-10 pb-24">
        <div className="space-y-2 text-[#DDDDDD]">
          <h1 className="font-bold text-[#FFFFFF]">Get to Know Us</h1>
          <p className="text-sm hover:underline cursor-pointer">Careers</p>
          <p className="text-sm hover:underline cursor-pointer">Blog</p>
          <p className="text-sm hover:underline cursor-pointer">About</p>
          <p className="text-sm hover:underline cursor-pointer">
            Investor Relations
          </p>
        </div>
        <div className="space-y-2 text-[#DDDDDD]">
          <h1 className="font-bold text-[#FFFFFF]">Make Money with Us</h1>
          <p className="text-sm hover:underline cursor-pointer">
            Sell products
          </p>
          <p className="text-sm hover:underline cursor-pointer">Sell apps</p>
          <p className="text-sm hover:underline cursor-pointer">
            Become an Affiliate
          </p>
          <p className="text-sm hover:underline cursor-pointer">
            Advertise Your Products
          </p>
          <p className="text-sm hover:underline cursor-pointer">Host a Hub</p>
          <p className="text-sm hover:underline cursor-pointer">
            See more Make Money with Us
          </p>
        </div>
        <div className="space-y-2 text-[#DDDDDD]">
          <h1 className="font-bold text-[#FFFFFF]">Payment Products</h1>
          <p className="text-sm hover:underline cursor-pointer">
            Business Card
          </p>
          <p className="text-sm hover:underline cursor-pointer">
            Shop with Points
          </p>
          <p className="text-sm hover:underline cursor-pointer">
            Reload Your Balance
          </p>
          <p className="text-sm hover:underline cursor-pointer">
            Currency Converter
          </p>
        </div>
        <div className="space-y-2 text-[#DDDDDD]">
          <h1 className="font-bold text-[#FFFFFF]">Let Us Help You</h1>
          <p className="text-sm hover:underline cursor-pointer">COVID-19</p>
          <p className="text-sm hover:underline cursor-pointer">Your Account</p>
          <p className="text-sm hover:underline cursor-pointer">Your Orders</p>
          <p className="text-sm hover:underline cursor-pointer">
            Shipping Rates &#38; Policies
          </p>
          <p className="text-sm hover:underline cursor-pointer">
            Returns and Replacements
          </p>
          <div className="text-sm hover:underline cursor-pointer">
            <p>Manage Your </p>
            <p>Content and Devices</p>
          </div>
        </div>
      </div>
      <div className="flex bg-[#13171f] py-10 justify-center">
        <Image
          onClick={() => router.push("/")}
          src="https://i.imgur.com/z3mFdF0.png"
          width={150}
          height={40}
          objectFit="cover"
          className="cursor-pointer"
          alt=""
        />
      </div>
    </div>
  );
}

export default Footer1;
