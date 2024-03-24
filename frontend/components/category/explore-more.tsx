
import Link from "next/link";
import SectionHeading from "@/components/shared/section-heading/SectionHeading";
import { exploreNavigationLinks } from "@/constants/home";

export default function ExploreMore(){

    const column1 = exploreNavigationLinks.slice(0, 3);
    const column2 = exploreNavigationLinks.slice(3, 6);
    const column3 = exploreNavigationLinks.slice(6, 9);
    const column4 = exploreNavigationLinks.slice(9, 12);
    const column5 = exploreNavigationLinks.slice(12, 15);
    const column6 = exploreNavigationLinks.slice(15, 19);

    return (
        <section className="w-full  flex flex-col pb-8">
        <div>
          <SectionHeading text="Explore more near you" />
        </div>
  
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(170px,_1fr))] gap-10 mt-2 w-full ">
          <div className="flex flex-col gap-y-1.5">
            {column1.map((link) => (
              <Link key={link.label} href={link.route}>
                <div className="text-sm md:text-base font-normal text-[#6C727F] no-underline">
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
  
          <div className="flex flex-col gap-y-1.5">
            {column2.map((link) => (
              <Link key={link.label} href={link.route}>
                <div className="text-sm md:text-base font-normal text-[#6C727F] no-underline">
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
  
          <div className="flex flex-col gap-y-1.5">
            {column3.map((link) => (
              <Link key={link.label} href={link.route}>
                <div className="text-sm md:text-base font-normal text-[#6C727F] no-underline">
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
  
          <div className="flex flex-col gap-y-1.5">
            {column4.map((link) => (
              <Link key={link.label} href={link.route}>
                <div className="text-sm md:text-base font-normal text-[#6C727F] no-underline">
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
  
          <div className="flex flex-col gap-y-1.5">
            {column5.map((link) => (
              <Link key={link.label} href={link.route}>
                <div className="text-sm md:text-base font-normal text-[#6C727F] no-underline">
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-y-1.5">
            {column6.map((link) => (
              <Link key={link.label} href={link.route}>
                <div className="text-sm md:text-base font-normal text-[#6C727F] no-underline">
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    )
}