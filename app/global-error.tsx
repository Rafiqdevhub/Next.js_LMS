"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en" className={bricolage.variable}>
      <body className="bg-background font-bricolage">
        <main className="flex min-h-screen flex-col items-center justify-center gap-4 text-center px-4">
          <Image
            src="/icons/error.svg"
            alt="Error"
            width={180}
            height={180}
            className="mb-8"
          />

          <h1 className="text-4xl font-bold">Critical Error</h1>

          <p className="text-muted-foreground text-lg max-w-[500px] mb-4">
            We encountered a serious problem. Our team has been notified and is
            working to fix this issue.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-white rounded-xl cursor-pointer px-4 py-2 flex items-center gap-2"
            >
              Refresh page
            </button>

            <Link
              href="/"
              className="bg-primary text-white rounded-xl cursor-pointer px-4 py-2 flex items-center gap-2"
            >
              Go back home
            </Link>
          </div>

          {process.env.NODE_ENV === "development" && (
            <div className="mt-8 p-4 bg-muted rounded-lg text-left max-w-[800px]">
              <p className="text-sm font-mono mb-2">Critical error details:</p>
              <pre className="text-sm text-red-500 font-mono whitespace-pre-wrap">
                {error.message}
                {"\n"}
                {error.stack}
              </pre>
            </div>
          )}
        </main>
      </body>
    </html>
  );
}
