import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
  metadataBase: new URL('https://proattestation.com'),
  title: "Document Attestation Services for All Countries | Pro Attestation",
  description: "Professional document attestation and apostille services for UAE, Saudi Arabia, Qatar, Kuwait & other countries. Fast & reliable service across India.",
  robots: "index, follow",
  openGraph: {
    title: "International Document Attestation Services | Pro Attestation",
    description: "Get your documents attested for any country. Expert attestation services for UAE, KSA, Qatar & more. Trusted by thousands across India.",
    url: "https://proattestation.com/countries",
    type: "website",
  },
  alternates: {
    canonical: "https://proattestation.com/countries"
  }
};

export default function CountriesLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
