"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 text-center px-4">
      <div className="relative">
        <Image
          src="/images/logo.svg"
          alt="EduSpark Logo"
          width={120}
          height={120}
          className="opacity-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-8xl font-bold text-primary">404</span>
        </div>
      </div>

      <div className="flex flex-col gap-4 max-w-[500px]">
        <h1 className="text-4xl font-bold">Page Not Found</h1>
        <p className="text-muted-foreground text-lg">
          Oops! It seems like you&apos;ve ventured into uncharted territory. The
          page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>

      <div className="flex gap-4">
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
        <Link href="/companions" className="btn-primary">
          Explore Companions
        </Link>
      </div>
    </main>
  );
}
