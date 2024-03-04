"use client";
import Image from "next/image";
import React, {useState} from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import Popup from "react-popupkit";
import Link from 'next/link';
import Calculator from "../calculator";


const DutyCalculator = () => {

  const countries = [
    { code: 'CA', name: 'Canada' }, // U.S.'s largest trade partner
    { code: 'MX', name: 'Mexico' }, // Significant trade due to USMCA
    { code: 'CN', name: 'China' }, // A major source of imports and exports
    { code: 'JP', name: 'Japan' }, // Key partner in technology and automobiles
    { code: 'DE', name: 'Germany' }, // Europe's largest economy
    { code: 'GB', name: 'United Kingdom' }, // Historical and substantial trade relations
    { code: 'KR', name: 'South Korea' }, // Important in technology and automotive sectors
    { code: 'IN', name: 'India' }, // Growing trade partner
    { code: 'FR', name: 'France' }, // Significant in aerospace and defense
    { code: 'IT', name: 'Italy' }, // Partner in luxury goods, machinery
    { code: 'BR', name: 'Brazil' }, // Largest trade partner in South America
    { code: 'NL', name: 'Netherlands' }, // Gateway to Europe
    { code: 'TW', name: 'Taiwan' }, // Critical in semiconductors and electronics
    { code: 'SG', name: 'Singapore' }, // Strategic trade and investment partner
    { code: 'AU', name: 'Australia' }, // Key ally and trade partner in Oceania
    { code: 'BE', name: 'Belgium' } // Important for pharmaceuticals and diamonds
  ];


  const hs_products = [
    { code: '01020304', name: 'Boxes, cardboard rubbish' },
    { code: '10203240', name: 'Fish, sea animals' },
    { code: '15038909', name: 'Clothes, sewn garments' },
  ]

  return (
    <div >
      <div >
        <h1 >
          Import Duty Calculator
        </h1>
        <p >
          Need to import a product from overseas? Take a look at our live duty
          caluclations.
        </p>
        <Calculator/>
      </div>
    </div>
  );
};

export default DutyCalculator;
