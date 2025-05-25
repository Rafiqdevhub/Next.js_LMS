"use client";

import Image from "next/image";

const LoadingPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <div className="relative animate-pulse">
        <Image
          src="/images/icons.png"
          alt="EduSpark Logo"
          width={80}
          height={80}
          className="animate-bounce"
          priority
        />
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="h-2 w-48 rounded-full bg-muted animate-pulse" />
        <div className="h-2 w-36 rounded-full bg-muted/50 animate-pulse delay-150" />
      </div>

      <div className="fixed bottom-0 left-0 right-0">
        <div className="bg-primary h-1">
          <div className="bg-primary/50 h-full w-1/3 animate-[loading_1s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }
      `}</style>
    </main>
  );
};

export default LoadingPage;
