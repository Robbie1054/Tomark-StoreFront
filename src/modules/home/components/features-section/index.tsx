"use client";
import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsBoxes } from "react-icons/bs";
import { TbReceiptRefund } from "react-icons/tb";



export default function FeaturesSection() {
  return (
    <>
      <section
        className="mx-auto w-[75%] lg:w-[60%] bg-[#22263e] relative rounded-2xl overflow-hidden"
      >
        <div
          className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.9),rgba(3, 196, 255, 0.8))] sm:mx-0 sm:rounded-2xl overflow-hidden"
          style={{
            boxShadow:
              "0 10px 32px rgba(5, 109, 255, 0.25), 0 1px 1px rgba(0, 119, 255, 0.1), 0 0 0 1px rgba(0, 106, 255, 0.1), 0 4px 6px rgba(34, 42, 53, 0.15), 0 24px 108px rgba(123, 139, 255, 0.2)",
          }}
        >
          <div className="h-full px-2 py-12 sm:px-10">
            <Noise />
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white h-full">
              <div className="hidden md:flex flex-1 w-full text-center md:text-left flex-col">
                <h2 className="text-2xl sm:text-4xl font-bold mb-4">
                  What We Offer
                </h2>
                <p className="text-lg mb-4">
                  We are an independent stocking distributor of electronic components. We specialize in selling new, unused and original electronic components online! All of our components are stored in and shipped from our UK warehouse.
                </p>
                <button 
                  className="flex items-center justify-center gap-2 bg-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors bg-opacity-25 hover:cursor-pointer w-fit relative z-[60]"
                >
                  View Our Stock
                  <BsStars className="w-4 h-4 text-white" />
                </button>
              </div>
              
              
              <div className="flex-1 flex flex-col gap-4 w-full">
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-800 bg-opacity-40 p-2 rounded-lg flex items-center justify-center">
                      <BsBoxes className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="font-bold">Broad Stock Range</h2>
                      <h2>We stock Current, Obsolete Hard to Find, Commercial and Military components.</h2>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-800 bg-opacity-40 p-2 rounded-lg flex items-center justify-center">
                      <LiaShippingFastSolid className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="font-bold">World Wide Shipping</h2>
                      <h2>All orders placed before noon GMT ship same day.</h2>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-800 bg-opacity-40 p-2 rounded-lg flex items-center justify-center">
                      <TbReceiptRefund className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="font-bold">30 Day Money Back Guarantee</h2>
                      <h2>All orders come with a 30 Day money back guarantee.</h2>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="md:hidden w-full mt-auto">
                <button 
                  className="flex items-center justify-center gap-2 bg-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors bg-opacity-25 w-full relative z-[60]"
                >
                  Get Started
                  <BsStars className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const Noise = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full transform opacity-50 hidden md:block"
      style={{
        backgroundImage: "url('/bgtest.svg')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        mixBlendMode: "overlay",
      }}
    />
  );
};