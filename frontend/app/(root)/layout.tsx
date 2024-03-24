// import Navbar from '@/components/common/Navbar';
import Image from "next/image";
import Footer from "../../components/Footer";
import Navbar from "../../components/shared/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-white relative isolate w-full h-full">
      <div className=" absolute  isolate -z-10  inset-0">
        <Image
          className=" w-full h-full object-cover object-[70%,85%]"
          src={"/assets/images/Bg_Line.png"}
          alt="cover picture"
          width={328}
          height={216}
        />
      </div>

      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
