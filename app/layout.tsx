import type { Metadata } from "next";
import { Outfit, Rajdhani } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Tech and Solution Pvt. Ltd.",
  description: "Powering Nepal's Digital Future One Solution at a Time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${rajdhani.variable} scroll-smooth antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col font-outfit font-light relative bg-dark text-text">
        <Toaster
          position="top-center"
          toastOptions={{
            className: "bg-dark2 text-text border border-primary/20",
          }}
        />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
