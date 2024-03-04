"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoMdArrowDropdown } from 'react-icons/io';
import Popup from 'react-popupkit';
import Calculator from '../calculator';

interface CalculatorProps {
  selectedCountry: {name: string, code: string};
  setSelectedCountry: React.Dispatch<React.SetStateAction<{name: string, code: string}>>;
  selectedHS: {name: string, code: string};
  setSelectedHS: React.Dispatch<React.SetStateAction<{name: string, code: string}>>;
}

const PaymentsCalculator = (
  // { selectedCountry, setSelectedCountry, selectedHS, setSelectedHS }: CalculatorProps
  ) => {

    return (
        <div
          
        >
          <h1 
          >
          Make fast and affordable international business payments
          </h1>
          <p className="mt-[30px] text-fr-dark text-base leading-[24px]">
            Send secure international business payments in{" "}
            <span className="font-bold">XX</span> currencies, all at competitive
            rates with no hidden fees.
          </p>

          <Calculator />
        
        </div>
    );
};

export default PaymentsCalculator;