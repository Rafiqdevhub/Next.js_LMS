import Link from "next/link";
import NavItems from "./NavItems";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar backdrop-blur-sm bg-white/75 sticky top-0 z-50 border-b border-black/5 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_10px_-2px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto flex items-center justify-between max-w-7xl px-4">
        <Link href="/" className="relative group">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <div className="absolute -inset-2 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300" />
              <Image
                src="/images/icons.png"
                alt="EduSpark"
                width={48}
                height={48}
                className="relative object-contain transform group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <span className="font-bold text-xl hidden sm:block bg-clip-text text-transparent bg-gradient-to-r from-black to-black/70 group-hover:to-primary/80 transition-all duration-300">
              EduSpark
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <NavItems />
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton>
                <button className="btn-signin hover:bg-black/5 hover:shadow-md transition-all duration-300 active:scale-95 transform">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox:
                      "w-10 h-10 ring-2 ring-primary/10 hover:ring-primary/20 transition-all duration-300 hover:shadow-md",
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
