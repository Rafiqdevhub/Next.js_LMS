"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to Sentry
    Sentry.captureException(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center gap-4 text-center px-4">
      <Image
        src="/icons/error.svg"
        alt="Error"
        width={120}
        height={120}
        className="mb-8"
      />

      <h1 className="text-4xl font-bold">Oops! Something went wrong</h1>

      <p className="text-muted-foreground text-lg max-w-[500px] mb-4">
        We apologize for the inconvenience. Our team has been notified and is
        working to fix this issue.
      </p>

      <div className="flex gap-4">
        <button onClick={reset} className="btn-primary">
          Try again
        </button>

        <Link href="/" className="btn-primary">
          Go back home
        </Link>
      </div>

      {process.env.NODE_ENV === "development" && (
        <div className="mt-8 p-4 bg-muted rounded-lg text-left">
          <p className="text-sm font-mono mb-2">Error details:</p>
          <pre className="text-sm text-red-500 font-mono whitespace-pre-wrap">
            {error.message}
          </pre>
        </div>
      )}
    </main>
  );
}
