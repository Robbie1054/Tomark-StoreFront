"use client";
import React from "react";
import { BsStars, BsBoxes } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbReceiptRefund, TbCertificate } from "react-icons/tb";

export default function OfferSection() {
  return (
    <section className="w-full py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">What We Offer</h2>
        <p className="text-lg text-center mb-10 text-gray-400"> We make it easy for users to use our platform, that's why we provide this benefit.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* First Feature */}
          <div className="flex flex-col items-start text-left p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <BsBoxes className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Purchase Components</h3>
            <p className="text-gray-600">
              We stock Current, Obsolete Hard to Find, Commercial and Military components. We have semiconductors, integrated circuits, connectors, Mosfet's, LED's, LCD's Resistors, Capacitors, fuses and more.
            </p>
          </div>

          {/* Second Feature */}
          <div className="flex flex-col items-start text-left p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-100 p-3 rounded-full mb-4">
              <LiaShippingFastSolid className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Sell Your Excess Stock</h3>
            <p className="text-gray-600">
              Easy and effective surplus electronic component management.
            </p>
          </div>

          {/* Third Feature */}
          <div className="flex flex-col items-start text-left p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 p-3 rounded-full mb-4">
              <TbReceiptRefund className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Consign Your Stock</h3>
            <p className="text-gray-600">
              Tomark Electronics market leading consignment Scheme 'Tomark Excess Solutions', With the 'T.E.C.H – Tomark Electronics Consignment Hub
            </p>
          </div>

          {/* Fourth Feature */}
          <div className="flex flex-col items-start text-left p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-orange-100 p-3 rounded-full mb-4">
              <TbCertificate className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">T.E.C.H</h3>
            <p className="text-gray-600">
              Tomark Electronics Consignment Hub - Cutting edge software to streamline the entire consignment process
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}