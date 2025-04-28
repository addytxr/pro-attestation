import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Document Attestation & Apostille Services in India | Pro Attestation",
  description: "Pro Attestation offers fast, reliable certificate attestation, apostille, and embassy legalization services across India. MEA attestation, HRD, and visa support for UAE, Saudi, Qatar, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-[72px]`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
