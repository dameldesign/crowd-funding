// import AuthHeader from "@/components/shared/header/AuthHeader";
import { Metadata } from "next";

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
      <div className="flex bg-gray-100">
        <section className="flex min-h-screen flex-1 flex-col justify-center items-center">
          <div className="flex w-full max-w-[480px] justify-center items-center">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Layout;
