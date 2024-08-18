import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row text-red-500">
      {/* PRODUCTS CONTAINER */}
      <div className="flex-1 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex items-center justify-between mb-4">
            <Image src="/temporary/p1.png" alt="" width={100} height={100} />
            <div>
              <h1 className="uppercase text-xl font-bold">sicilian</h1>
              <span>Large</span>
            </div>
            <h2 className="font-bold">$79.90</h2>
            <span className="cursor-pointer">X</span>
          </div>
        ))}
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="flex-1 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span>Subtotal (3 items)</span>
          <span>$81.70</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span>TOTAL(INCL. VAT)</span>
          <span className="font-bold">$81.70</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-full lg:w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
