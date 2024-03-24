import React, { useEffect, useRef } from "react";
import SponsorConnectCard from "@/components/cards/SponsorConnectCard";
import SliderNavigationButtons from "@/components/shared/reusable-button/scroll-button";
import { popularJobs } from "@/constants/home";

export default function JobsSponsorComponent() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the next item
  const scrollToNext = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const scrollWidth = containerRef.current.scrollWidth;
      const clientWidth = containerRef.current.clientWidth;

      // Check if the scroll position is at the end
      if (scrollLeft + clientWidth >= scrollWidth) {
        // Reset scroll position to the start
        containerRef.current.scrollLeft = 0;
      } else {
        // Scroll to the next item
        // Adjust the scroll increment based on the width of your items
        // For example, if each item is 300px wide, you might set this to 300
        const scrollIncrement = 200; // Adjust this value based on your content's width
        containerRef.current.scrollLeft += scrollIncrement;
      }
    }
  };

  // Set up an interval to scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(scrollToNext, 2000); // 5000 milliseconds = 5 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <section className="w-[75vw] flex flex-col py-6">
      <div className="flex flex-row justify-between item-start">
        <h1 className="text-base mb-4 text-black font-semibold">
          Recently Invested
        </h1>
        <button className="mx-auto w-[25%] lg:w-[5%]"></button>
      </div>

      <SliderNavigationButtons
        onClickPrev={() => {
          if (containerRef.current) {
            const scrollLeft = containerRef.current.scrollLeft;
            const clientWidth = containerRef.current.clientWidth;

            // Check if the scroll position is at the start
            if (scrollLeft <= 0) {
              // Scroll to the last item
              containerRef.current.scrollLeft =
                containerRef.current.scrollWidth - clientWidth;
            } else {
              // Scroll to the previous item
              // Adjust the scroll increment based on the width of your items
              // For example, if each item is 300px wide, you might set this to 300
              const scrollIncrement = 30; // adjust this value based on the width of your items
              containerRef.current.scrollLeft -= scrollIncrement;
            }
          }
        }}
        onClickNext={scrollToNext}
      />

      <div
        ref={containerRef}
        className="w-full relative max-w-[1556px] flex gap-[32px] overflow-x-scroll cursor-pointer mb-3 scrollbar-hide flex-row"
      >
        {popularJobs.flatMap((popular, index) => [
          <SponsorConnectCard
            key={`${index}-1`}
            slug={`/jobs/${popular.slug}`}
            title={popular.label}
            body="Full-time"
            imageUrl={popular.imgURL}
            company={popular.company}
            jobsFees={popular.jobsFees}
          />,
          <SponsorConnectCard
            key={`${index}-2`}
            slug={`/jobs/${popular.slug}`}
            title={popular.label}
            body="Full-time"
            imageUrl={popular.imgURL}
            company={popular.company}
            jobsFees={popular.jobsFees}
          />,
        ])}
      </div>
    </section>
  );
}
