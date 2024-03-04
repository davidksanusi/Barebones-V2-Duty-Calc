import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import useStore from '@/store';
// Assuming Popup, Image components, and icons are imported correctly


interface FullHsDetails {
  req_inputs?: { [key: string]: string }; // Optional property
  // Add other properties of fullHsDetails here as needed
}


const DynamicFormUI = () => {

    const [formData, setFormData] = useState<Record<string, any>>({});
    const fullHsDetails = useStore<FullHsDetails>((state)=> state.countryDetails)
    

    const [tariffs, setTariffs] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (Object.keys(formData).length > 0) {
            console.log("This is form data: ", formData)
            try {
                const updatedDetails = {
                    ...fullHsDetails,
                    final_res: formData, // Add formData under 'final_res' key
                };
          const response = await fetch('https://duty-calculator-backend-2.onrender.com/api/postres', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedDetails),
          });
    
          const data = await response.json();
          setTariffs(data)
          setFormSubmitted(true);

          
          console.log(data); // Process the response data as needed
        } catch (error) {
          console.error('Error submitting form:', error);
        }
        finally {
            if (fullHsDetails.req_inputs) {
                const resetData = Object.keys(fullHsDetails.req_inputs).reduce((acc: Record<string, string>, key) => {
                  acc[key] = '';
                  return acc;
                }, {});
                setFormData({});        
            }
      };
    } else {
        console.log('Form empty.')
    }
}



      const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value,
        })
        );
      };


  return (
    <div
    >
      <div 
      >
        <h1 
        >
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <p 
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magn mod duo.
        </p>
        <div 
        >
        <div 
        >
                <Image
                  src={"/icons/info-circle.svg"}
                  alt="info icon"
                  width={16}
                  height={16}
                  className="cursor-pointer"
                />
                {/* tooltip */}
                <div 
                >
                  <div 
                  >
                    <h3 
                    >
                      Exchange rate at 14:00 GMT.
                    </h3>
                    <p 
                    >
                      Live rates vary minute to minute. The quotes you receive
                      here will differ to your final trade amount.
                    </p>
                    <p 
                    >
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
          <div 
          >
            <p 
            >
              Looking to send a large amount?
            </p>
            <p 
            >
              Check out our{" "}
              <span 
              >
                wholesale price calculator.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Second column for dynamic form */}
      <div 
      >
        < form onSubmit={handleSubmit} 
        >
          {/* {fullHsDetails ?? (
            <div>
              l
            </div>
          )} */}
          {fullHsDetails?.req_inputs && Object.entries(fullHsDetails?.req_inputs).map(([key, value]) => (
            <div key={key} 
            >
              <label htmlFor={key} 
              >{value}</label>
              <input
                type="number"
                id={key}
                name={key}
                className="mt-1 focus:ring-fr-primary focus:border-fr-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={formData[key] || ''}
                onChange={handleFormChange}
              />
            </div>
          ))}
          <button type="submit" 
          >Submit</button>
        </form>
      </div>
    </div>
  );
};

export default DynamicFormUI;
