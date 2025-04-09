import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer"; // Adjust the path if necessary

const inter = Inter({
  subsets: ["latin"],
  // weights: [400, 700], // specify if you want normal + bold
  // display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WeCare Walk-In Clinic and Pharmacy",
  description: "Your All-In-One Medical Stop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
