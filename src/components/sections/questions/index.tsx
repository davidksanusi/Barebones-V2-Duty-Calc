import { questionsData } from "@/constants";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import useStore from '@/store';


const QuestionsSection = () => {
  const faq_content = useStore((state)=> state.contentDetails)

  return (
    <div className="my-[100px] lg:my-[200px] w-full max-w-[873px] mx-auto px-4 lg:px-0">
      {/* header */}
      <div className="w-full">
        <h1 className="text-2xl md:text-[48px] font-bold leading-[63px] text-center">
          Questions Looks Here
        </h1>
        <p className="max-w-[568px] mx-auto text-base text-[#636D79] text-center mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the{" "}
        </p>
      </div>
      {/* questions data container */}
      <div className="w-full mt-10 lg:mt-14 grid md:grid-cols-2 gap-4">


{
  faq_content?.faq_message?.slice(1).map((item: string, index: number) => (
    index % 2 === 0 && faq_content.faq_message.length > index + 1 ? (
      // Assuming even indices are questions and odd indices are answers
      <div className="w-full p-4 rounded-md bg-transparent hover:bg-[#F6F6F6] transition-all duration-200" key={index}>
        <div className="w-full flex items-start justify-between text-[#636D79]">
          <h1 className="text-base font-medium ">{item}</h1> {/* Question */}
          <div className="w-fit h-fit shrink">
            {/* Potentially an icon or button to expand/collapse the answer */}
          </div>
        </div>
        <p className="text-[#A2A9B0] text-base mt-2.5 md:mt-4">
          {faq_content.faq_message.slice(1)[index + 1]} {/* Answer */}
        </p>
      </div>
    ) : null // Skip rendering for odd indices
  ))
}



        {/* {questionsData?.map((data) => (
          <div className="w-full p-4 rounded-md bg-transparent hover:bg-[#F6F6F6] transition-all duration-200" key={data?.id}>
            <div className="w-full flex items-start justify-between text-[#636D79]">
              <h1 className="text-base font-medium ">{data?.title}</h1>
              <div className="w-fit h-fit shrink">
              </div>
            </div>
            <p className="text-[#A2A9B0] text-base mt-2.5 md:mt-4">
              {data?.answer}
            </p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default QuestionsSection;
