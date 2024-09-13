import Link from "next/link";
import MovingBorderButton from "./MovingBorderButton";

export default function () {
  return (
    <header className="container px-4 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-xl font-semibold text-white">AI Chatbot</span>
      </div>
      <nav>
        <ul className="flex justify-center items-center space-x-6">
          {/* <li>
            <Link
              href="#"
              className="text-textColor hover:text-white transition"
            >
              Blog
            </Link>
          </li> */}
          <li>
            <Link
              href="#"
              className="text-textColor hover:text-white transition"
            >
              <MovingBorderButton
                title="Sign up"
                css="w-[136px] py-1 text-textColor bg-[#09090B]"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
