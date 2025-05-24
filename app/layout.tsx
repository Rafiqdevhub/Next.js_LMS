import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | EduSpark",
    default: "EduSpark - Your Learning Companion",
  },
  description:
    "EduSpark is an interactive learning platform with AI companions to help you master various subjects.",
  keywords: [
    "education",
    "learning",
    "AI companions",
    "tutoring",
    "online learning",
    "LMS",
  ],
  authors: [{ name: "EduSpark" }],
  creator: "EduSpark",
  publisher: "EduSpark",
};

export const viewport: Viewport = {
  themeColor: "#fe5933",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bricolage.variable} font-bricolage antialiased bg-background text-foreground`}
      >
        <main className="min-h-screen flex flex-col">{children}</main>
      </body>
    </html>
  );
}
