import Link from "next/link";
import Image from "next/image";
import icon from "@/public/assets/icon.webp";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-zinc-900 text-white body-font drop-shadow-xl">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-bold items-center mb-4 md:mb-0"
        >
          <Image src={icon} alt="icon" width="40" height="40" />
          <span className="ml-3 text-xl">Yeezy</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center font-medium">
          <Link href="/" className="mr-5 hover:text-gray-300">
            Shoes
          </Link>
          <Link href="/reference" className="mr-5 hover:text-gray-300">
            Reference
          </Link>
          <Link href="/faq" className="mr-5 hover:text-gray-300">
            FAQ
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
