'use client'
import { usePathname } from 'next/navigation';
import Cards from '@/components/sections/Cards';
import Exchange from '@/components/sections/Exchange';
import Hero from '@/components/sections/Hero';
import PaymentsCalculator from '@/components/sections/paymentsCalculator';
import React, { useState, useEffect } from 'react';
import useStore from '@/store';
import DynamicFormUI from '@/components/sections/detailedCalculator';
import GraphSection from '@/components/sections/graph';
import InterestedSection from '@/components/sections/interested';
import QuestionsSection from '@/components/sections/questions';
import SummarySection from '@/components/sections/summary';
import Calculator from '@/components/sections/calculator';
import Calculator2 from '@/components/sections/detailedCalculator/index4';
import PopularCountries from '@/components/sections/popularCountries';

export default function ProductPage() {
  
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);
  const countryCode = pathSegments[1]
  const hsCode = pathSegments[2]
  const [apiRes, setApiRes]  = useState({})

  const countryDetails = useStore((state)=>state.countryDetails)
  const setCountryDetails = useStore((state)=>state.setCountryDetails)

  const contentDetails = useStore((state)=>state.contentDetails)
  const setContentDetails = useStore((state)=>state.setContentDetails)
  

  const getCountryData = async () => {
    try {
      const response = await fetch('https://duty-calculator-backend-2.onrender.com/api/get_country_details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'country_code': countryCode,
        })
      });

      const data = await response.json();
      return data
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  const getDynamicData = async (country: string) => {
    
    try {
      const response = await fetch('https://duty-calculator-backend-2.onrender.com/api/post_hs_details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'hs_code': hsCode,
          'country_code': countryCode,
          'country_name':  country
        })
      });

      const data = await response.json();
      // setApiRes(data)
      return data
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const getContent = async () => {
    try {
    const data = await fetch('https://duty-calculator-backend-2.onrender.com/api/get_content', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              'country_code': countryCode,
              'hs_code': hsCode,
              'country_name': countryDetails.country_name, // Using the extracted value here
            }),
          })
        const res = await data.json()
        console.log('gc', res)
      return res
        }
        catch (error) {
          console.error('Error with api call:', error);

        }
  }

  const setSelectedCountry = useStore((state) => state.setSelectedCountry);
  const setSelectedHS = useStore((state) => state.setSelectedHS);

  useEffect(()=>{
    // setCountryDetails({})
    // setContentDetails({})
    const data = async () => {
      const countryData = await getCountryData()
      console.log('4', countryData)
      return countryData
    }
    data().then((country)=>{

      const full_data = async () => {
        const fullData = await getDynamicData(country.name)
        return fullData
      }
      full_data().then((res) => {
        setApiRes(res)
        setCountryDetails(res)
        setSelectedCountry({ code: countryCode, name: res.country_name });
        setSelectedHS({ code: hsCode, name: res.brief_description });
      })
      
    })
    
    
  }, [])

  useEffect(()=> {
    if (countryDetails.country_name) {
    const getData = async () => {
      const content_data = await getContent()
      setContentDetails(content_data)
      console.log('content_data', content_data)

    }
    getData()
  } else {
    console.log('Country Details not available.')
  }

  }, [countryDetails])

    return (
        <div 
        >
           <Hero/>
           <DynamicFormUI />
           <div 
           >
            <div 
            ></div>
            <h3 
            >
            {countryDetails?.trade_status_content?.[0]}
              </h3>
            <p 
            >
            {countryDetails?.trade_status_content?.slice(1)?.map((item: string, index:number) => (
                            item.trim().length > 0 ?
                            <p 
                            key={index}>
                                {item}</p> : <br key={index} />
                        ))}
            

                            </p>
           </div>
           <GraphSection/>

           <QuestionsSection/>
           <InterestedSection/>
           <div 
           >
                    <Calculator2 />

          </div> 

        </div>
    );
};

