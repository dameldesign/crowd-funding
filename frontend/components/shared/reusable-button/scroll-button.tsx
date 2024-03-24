'use client';

import React from "react";
import { ArrowRight } from "lucide-react";

interface SliderNavigationButtonsProps {
  onClickPrev: () => void;
  onClickNext: () => void;
}

const SliderNavigationButtons: React.FC<SliderNavigationButtonsProps> = ({
  onClickPrev,
  onClickNext,
}) => {
  return (
    <div className="hidden gap-6 absolute z-10 right-56  max-w-[1556px]   [@media(min-width:999px)]:flex">


      <button
        onClick={onClickNext}
        className="rounded-full text-white bg-black/10 hover:bg-primary-base border border-gray-200/50 flex items-center justify-center w-[40px] h-[40px] "
      >
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default SliderNavigationButtons;