"use client";
import Image from "next/image";
import React, {useState, useEffect} from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import Popup from "react-popupkit";
import Link from 'next/link';
import useStore from '../../../store/index.js'
import { HiNoSymbol } from "react-icons/hi2";

interface DutyCalculatorProps {
  selectedCountry: {name: string, code: string};
  setSelectedCountry: React.Dispatch<React.SetStateAction<{name: string, code: string}>>;
  selectedHS: {name: string, code: string};
  setSelectedHS: React.Dispatch<React.SetStateAction<{name: string, code: string}>>;
}


const Calculator = ({/*{ selectedCountry, setSelectedCountry, selectedHS, setSelectedHS }: DutyCalculatorProps*/}) => {
  const [countryPopup, setCountryPopup] = useState(false);
  const [hsPopup, setHsPopup] = useState(false);
  const [hsCodes, setHsCodes] = useState([]);
  const [countryList, setCountryList] = useState([]);

  const { selectedCountry, setSelectedCountry, selectedHS, setSelectedHS } = useStore();


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

  const handleSelectCountry = (countryName: {alpha_2: string, name: string}) => {
    setSelectedCountry({
      code: countryName.alpha_2,
      name: countryName.name
    });
    setCountryPopup(false); // Hide popup after selection
  };

  const hs_products = [
    { code: '01020304', name: 'Boxes, cardboard rubbish' },
    { code: '10203240', name: 'Fish, sea animals' },
    { code: '15038909', name: 'Clothes, sewn garments' },
  ]
  const handleSelectHSProducts = (hsProduct: { hs8: string, hsName: string }) => {
    setSelectedHS({
      code: hsProduct.hs8,
      name: hsProduct.hsName
    });
    setHsPopup(false); // Hide popup after selection
  };

  const get_countries = async function countryData() {
    const countries =  await fetch('https://duty-calculator-backend-2.onrender.com/api/get_countries').then(res => res.json())
    setCountryList(countries)
    
}

const get_hs = async function hsData() {
  const codes =  await fetch('https://duty-calculator-backend-2.onrender.com/api/hscodes').then(res => res.json())
  setHsCodes(codes.hscodes.slice(0,500))
  
}
  useEffect(() => {
    get_hs()
    get_countries()

}, [])

  return (
    <div>
        {/* calculate container */}
        <div
        >

          
          {/* dropdown box */}
          <div 
          >
            <Popup 
            >
              <Popup.Button 
              onClick={() => setCountryPopup(!countryPopup)}
              >
              <div 
              >
                <p 
                >Country</p>
                <div 
                >
                  <img src={`https://flagcdn.com/16x12/${selectedCountry.code.toLowerCase()}.png`} />
                  <p 
                  >{selectedCountry.name}</p>
                </div>
              </div>
                <div 
                >
                  Select
                  <IoMdArrowDropdown />
                </div>
              </Popup.Button>
              {countryPopup && (
                <div 
                >
                  {countryList.map((country: {alpha_2: string, name: string}) => (
                    <div key={country.alpha_2} 
                    onClick={() => handleSelectCountry(country)}>
                      <img src={`https://flagcdn.com/16x12/${country.alpha_2.toLowerCase()}.png`} />
                      {country.name}
                    </div>
                  ))}
                </div>
        )}
            </Popup>
            <Image
              src={"/icons/arrow.svg"}
              alt="arrow"
              width={22}
              height={20}
            />
            <Popup 
            >
              <Popup.Button 
              onClick={() => setHsPopup(!hsPopup)}>
              <div 
              >
                <p 
                >H.S Product</p>
                <p 
                >{`${selectedHS.code} - ${selectedHS.name?.slice(0,10)}...`}</p>
              </div>
                <div 
                >
                  Select
                  <IoMdArrowDropdown />
                </div>
              </Popup.Button>

              {hsPopup && (
                <div 
                >
                  {hsCodes?.map((product: {hs8:string, hsName: string}) => (
                    <div key={product.hs8} 
                    onClick={() => handleSelectHSProducts(product)}>
                      {product.hs8} - {product.hsName}
                    </div>
                  ))}
                </div>
        )}

            </Popup>
          </div>
          {/* bottom part */}
          <div 
          >
            <div 
            >
              <p 
              >
                Consult a professional
              </p>
              <div 
              >
                <Image
                  src={"/icons/info-circle.svg"}
                  alt="info icon"
                  width={16}
                  height={16}
                  className="cursor-pointer"
                />
               
              </div>
            </div>
            <Link 
            href={`/tariff/${selectedCountry.code.toLowerCase()}/${selectedHS.code}`}>
              <div

              >
                Calculate duty
              </div>
            </Link>
          </div>
        </div>
        </div>
  );
};

export default Calculator;
