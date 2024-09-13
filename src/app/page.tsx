import Navbar from "./_components/Navbar";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import MovingBorderButton from "./_components/MovingBorderButton";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // </main>
    <div className="min-h-screen">
      <Navbar />
      <div
        className="mx-auto px-4 flex flex-col max-w-3xl justify-center items-center text-center"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl  font-bold mb-6">
          <span className="block bg-clip-text text-transparent bg-gradient-to-br from-white to-[#71717A] mb-2">
            Unleash the power of
          </span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-br from-white to-[#71717A]">
            intuitive finance
          </span>
        </h1>
        <p className="text-textColor text-xl max-w-3xl mb-12">
          Meet the future of customer support with our intelligent AI chatbot.
          Designed to streamline communication and deliver real-time assistance.
          By integrating seamlessly with your existing systems, it reduces
          response times, improves satisfaction, and frees up valuable resources
          for more complex tasks.
        </p>
        <Link href="/home">
          <MovingBorderButton
            title="Start chat"
            css="w-[136px] h-[36px] text-textColor bg-[#09090B] py-5"
          />
        </Link>
        <Link
          href="#"
          className="mt-8 text-textColor flex items-center hover:text-white transition"
        >
          Learn more
          <ChevronRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}
