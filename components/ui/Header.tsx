import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              {/* <div className="w-8 h-8 rounded-full bg-[#FF6633]" />
            <span className="font-semibold">Fingerprint</span> */}
              <Image src={"/logo.png"} alt="logo" width={120} height={35} />
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Product
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Use Cases
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Developers
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Resources
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Demo
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Login
            </Button>
            <Button variant="ghost" className="hidden md:inline-flex">
              Contact Sales
            </Button>
            <Button className="bg-[#FF6633] text-white hover:bg-[#CC522A]/90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
