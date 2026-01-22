/* src/app/_components/Header.tsx */
"use client";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/70 backdrop-blur-md">
      <div className="mx-4 flex max-w-4xl items-center justify-between py-4 md:mx-auto">
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-black text-transparent">
          <Link href="/" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faFish} className="text-indigo-600" />
            TERUKI BLOG
          </Link>
        </div>
        <nav className="flex items-center gap-6 font-bold text-slate-600">
          <Link href="/" className="transition-colors hover:text-indigo-600">
            Home
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-1 transition-colors hover:text-indigo-600"
          >
            <FontAwesomeIcon icon={faUserCircle} />
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
