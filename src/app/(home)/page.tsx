"use client";

import DutyCalculator from "@/components/sections/dutyCalculator";
import Explore from "@/components/sections/explore";
import Notify from "@/components/sections/notify";
import PopularCountries from "@/components/sections/popularCountries";
import React, {useState} from 'react'
import useStore from "@/store";


export default function Home() {



  const setSelectedCountry = useStore((state) => state.setSelectedCountry);
  const setSelectedHS = useStore((state) => state.setSelectedHS);

  setSelectedCountry({ code: 'MX', name: 'Mexico' });
  setSelectedHS({ code: '01061300', name: 'Boxes, cardboard rubbish' });

  return (
    <div className="w-full">
      <DutyCalculator />
      {/* <Explore/> */}
      <PopularCountries />
      <Notify />
    </div>
    
  );
}
