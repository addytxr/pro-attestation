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
  metadataBase: new URL('https://proattestation.com'),
  title: "Document Apostille & Attestation Services in India | Fast MEA & Embassy Legalization",
  description: "Get quick, reliable apostille and attestation services for birth, degree, marriage certificates & more. Doorstep pickup across India. MEA, Embassy & HRD verified.",
  robots: "index, follow",
  openGraph: {
    title: "Apostille & Attestation Services in India | Verified & Fast Processing",
    description: "We provide end-to-end document legalization for Apostille, MEA, Embassy, HRD, and Home Department attestation. Trusted by 50,000+ clients across India.",
    url: "https://proattestation.com/",
    type: "website",
  },
  alternates: {
    canonical: "https://proattestation.com/"
  }
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
