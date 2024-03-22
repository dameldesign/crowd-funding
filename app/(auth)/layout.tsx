// import AuthHeader from "@/components/shared/header/AuthHeader";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  // title: "ConnectNigeria Onboarding",
  // description:
  //   "Explore a world of opportunities with ConnectNigeria – your one-stop destination for business listings, car deals, real estate options, job openings, exciting events, and exclusive deals. Discover a platform designed to connect you with the best in business, cars, properties, careers, events, and savings. Join ConnectNigeria today and experience the ultimate hub for success and discovery!",
  // icons: {
  //   icon: "/assets/icons/cn-icon.svg",
  // },
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      {/* <AuthHeader /> */}
      <div className=" absolute  isolate -z-10  inset-0">
        <Image
          className=" w-full h-full object-cover object-[70%,85%]"
          src={"/assets/images/Bg_Line.png"}
          alt="cover picture"
          width={328}
          height={216}
        />
      </div>
      <div className="flex ">
        <section className="flex min-h-screen flex-1 flex-col justify-center items-center">
          <div className="flex w-full  max-w-[480px] justify-center items-center">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Layout;
