"use client";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiMinusCircle } from "react-icons/fi";
import { IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";
import { LuCircleEqual, LuDivideCircle } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";
import Popup from "react-popupkit";

const SummarySection = () => {
  return (
    <div
      className="w-full max-w-[900px] my-[96px] rounded-lg p-5 md:p-7 lg:p-10 mx-auto bg-white grid md:grid-cols-2 gap-10 lg:gap-14"
      style={{ boxShadow: "0px 20px 50px 2px rgba(26, 26, 26, 0.10)" }}
    >
      <div className="w-full h-full">
        <h1 className="text-[32px] font-bold text-fr-dark">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <p className="mt-5 text-base ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magn mod duo.
        </p>
        <div className="mt-[32px] w-full bg-[#F0F5FF] px-3 py-6 flex items-center rounded">
        <div className="w-fit h-fit relative group">
                <Image
                  src={"/icons/info-circle.svg"}
                  alt="info icon"
                  width={16}
                  height={16}
                  className="cursor-pointer"
                />
                {/* tooltip */}
                <div className="w-[330px] h-[297px] p-5 bg-[#F0F5FF] absolute bottom-full mb-[22px] rounded -left-8 hidden group-hover:inline-block">
                  <div className="relative w-full h-full text-start  flex flex-col justify-between">
                    <h3 className="text-[#3D55DD] font-bold text-base">
                      Exchange rate at 14:00 GMT.
                    </h3>
                    <p className="text-[#3D55DD] text-base">
                      Live rates vary minute to minute. The quotes you receive
                      here will differ to your final trade amount.
                    </p>
                    <p className="text-[#3D55DD] text-base">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit mod
                      duo sed eiusmod lorem ipsum dolor sit amet consectetur
                      adipiscing elit mod duo.
                    </p>
                    {/* polygon */}
                    <Image
                      src={"/icons/polygon.svg"}
                      alt="polygon"
                      width={31}
                      height={21}
                      className="absolute -bottom-[35px] left-1"
                    />
                  </div>
                </div>
              </div>
          <div className="ml-3 md:ml-5">
            <p className="text-base text-[#3D55DD] ">
              Looking to send a large amount?
            </p>
            <p className="text-base text-[#3D55DD] ">
              Check out our{" "}
              <span className="font-bold underline">
                wholesale price calculator.
              </span>
            </p>
          </div>
        </div>
      </div>



      <form  className="w-full">
        
        <div className="w-full flex items-center h-14 gap-[29px]">
          
          
          
          <Popup className="w-auto grow relative">
            <Popup.Button className="w-full border rounded h-full flex justify-between">
              <div className=" px-5 text-start h-14 flex items-center flex-col">
                <p className="leading-[10px] mt-3 text-sm text-start">Send</p>
                <p className="mt-1 font-bold">10,000</p>
              </div>
              <div className="border-l h-14 w-[30%] text-center flex items-center justify-center px-5 gap-1">
                USD
                <IoMdArrowDropdown />
              </div>
            </Popup.Button>
            
            
            
            <Popup.Body className="absolute top-full w-full bg-white text-start p-3 border mt-2 rounded-lg z-[999]">
              <div className="w-full cursor-pointer border-b flex items-center gap-2">
                <div className="pb-1 shrink-0">
                  <CiSearch className="size-4 text-[#C6C6C6] " />
                </div>
                <input
                  type="text"
                  className="w-auto grow outline-none text-sm pb-1"
                  placeholder="Search..."
                />
              </div>
              <div className="pb-5 pt-8 text-center">
                <p className="italic text-xs text-[#C6C6C6]">No data found!</p>
              </div>
            </Popup.Body>
          </Popup>
        </div>


        <div className="w-full h-fit mt-4 space-y-2.5">


          <div className="w-full flex items-center justify-between">
            <div className="w-fit flex items-center gap-2.5">
              <FiMinusCircle className="size-5 text-[#8D8D8D]" />
              <p className="text-base text-fr-dark">Payment Fee</p>
            </div>
            <input type="number" className="text-fr-dark font-bold " />
          </div>


          <div className="w-full flex items-center justify-between">
            <div className="w-fit flex items-center gap-2.5">
              <LuCircleEqual className="size-5 text-[#8D8D8D]" />
              <p className="text-base text-fr-dark">We’ll convert</p>
            </div>
            <p className="text-fr-dark font-bold ">10,000 USD</p>
          </div>


          <div className="w-full flex items-center justify-between">

            <div className="w-fit flex items-center gap-2.5">
              <LuDivideCircle className="size-5 text-[#8D8D8D]" />
              <p className="text-base text-fr-dark">Your Margin</p>
            </div>
            <div className="text-fr-dark font-bold flex items-center gap-1">
              0.3% <IoIosArrowDown className="font-semibold text-fr-dark" />
            </div>

          </div>

          <div className="w-full flex items-center justify-between">

            <div className="w-fit flex items-center gap-2.5">
              <RxCrossCircled className="size-5 text-[#8D8D8D]" />
              <div className="text-base text-fr-dark flex items-center gap-1.5">
                Exchange rate
                <div className="w-fit h-fit relative group">
                <Image
                  src={"/icons/info-circle.svg"}
                  alt="info icon"
                  width={16}
                  height={16}
                  className="cursor-pointer"
                />
                {/* tooltip */}
                <div className="w-[330px] h-[297px] p-5 bg-[#F0F5FF] absolute bottom-full mb-[22px] rounded -left-8 hidden group-hover:inline-block">
                  <div className="relative w-full h-full text-start  flex flex-col justify-between">
                    <h3 className="text-[#3D55DD] font-bold text-base">
                      Exchange rate at 14:00 GMT.
                    </h3>
                    <p className="text-[#3D55DD] text-base">
                      Live rates vary minute to minute. The quotes you receive
                      here will differ to your final trade amount.
                    </p>
                    <p className="text-[#3D55DD] text-base">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit mod
                      duo sed eiusmod lorem ipsum dolor sit amet consectetur
                      adipiscing elit mod duo.
                    </p>
                    {/* polygon */}
                    <Image
                      src={"/icons/polygon.svg"}
                      alt="polygon"
                      width={31}
                      height={21}
                      className="absolute -bottom-[35px] left-1"
                    />
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="text-fr-dark font-bold  flex items-center gap-1.5">
              1 USD = 0.66539 GBP{" "}
              <Image
                src={"/icons/arrows-h.svg"}
                alt="arrows"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex items-center h-14 mt-[20px] gap-[29px]">
          <Popup className="w-auto grow relative">
            <Popup.Button className="w-full border rounded h-full flex justify-between">
              <div className=" px-5 text-start h-14 flex items-center flex-col">
                <p className="leading-[10px] mt-3 text-sm text-start">
                  Receive
                </p>
                <p className="mt-1 font-bold">6,653.98</p>
              </div>
              <div className="border-l h-14 w-[30%] text-center flex items-center justify-center px-5 gap-1">
                GBP
                <IoMdArrowDropdown />
              </div>
            </Popup.Button>
            <Popup.Body className="absolute top-full w-full bg-white text-start p-3 border mt-2 rounded-lg z-[999]">
              <div className="w-full cursor-pointer border-b flex items-center gap-2">
                <div className="pb-1 shrink-0">
                  <CiSearch className="size-4 text-[#C6C6C6] " />
                </div>
                <input
                  type="text"
                  className="w-auto grow outline-none text-sm pb-1"
                  placeholder="Search..."
                />
              </div>
              <div className="pb-5 pt-8 text-center">
                <p className="italic text-xs text-[#C6C6C6]">No data found!</p>
              </div>
            </Popup.Body>
          </Popup>
        </div>
        <button className="text-base font-medium text-white w-full py-[13px] bg-fr-primary rounded mt-5">
          Get started
        </button>
      </form>




    </div>
  );
};

export default SummarySection;
