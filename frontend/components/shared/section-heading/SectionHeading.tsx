import React from 'react';

interface SectionHeadingProps {
  text: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ text }) => {
  return (
    <div className="h-auto py-2  justify-center  items-center flex w-full bg-[#FFFFFFB3] rounded-[10px] ">
      <div className=' w-full '><h1 className="lg:text-[34.84px] text-[#0A1429] text-[22px] leading-[23.94px] font-bold lg:leading-[37.91px] mb-2 text-left">{text}</h1></div>
    </div>
  );
};

export default SectionHeading;