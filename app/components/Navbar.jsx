"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className="flex items-center text-black justify-between px-4 sm:px-8 md:px-16 py-4 border-b border-gray-200 relative">
      <div className="flex items-center gap-4 md:gap-10">
        <Image 
          src="/hero.svg"
          alt="Pro Attestation Services Logo"
          className="rounded-2xl"
          width={100}             
          height={80}
          priority  
        />

        
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex font-normal z-50 items-center gap-6">
          <Link href="/" className="text-lg hover:text-[#FF6A00] transition-colors">
            Home
          </Link>
          <div className="relative group">
            <Link href="/services" className="text-lg hover:text-[#FF6A00] flex items-center transition-colors">
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg p-2 min-w-[200px] z-10">
              <Link href="/services/mea-attestation" className="block px-4 py-2 text-lg hover:text-[#FF6A00] transition-colors">
                MEA Attestation
              </Link>
              <Link href="/services/embassy-attestation" className="block px-4 py-2 text-lg hover:text-[#FF6A00] transition-colors">
                Embassy Attestation
              </Link>
              <Link href="/services/home-hrd" className="block px-4 py-2 text-lg hover:text-[#FF6A00] transition-colors">
              Apostille Services
              </Link>
              <Link href="/services/home-hrd" className="block px-4 py-2 text-lg hover:text-[#FF6A00] transition-colors">
                Home/HRD Department
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Link href="/documents" className="text-lg hover:text-[#FF6A00] flex items-center transition-colors">
              Documents
              <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg p-2 min-w-[200px] z-10">
              <Link href="/documents/personal" className="block px-4 py-2 text-lg hover:text-[#FF6A00] transition-colors">
              Degree Certificate Apostille
              </Link>
              <Link href="/documents/commercial" className="block px-4 py-2 text-lg hover:text-[#FF6A00] transition-colors">
              Birth Certificate Apostille
              </Link>
              <Link href="/documents/educational" className="block px-4 py-2 text-lg hover:text-[#FF6A00] transition-colors">
              Marriage Certificate Apostille
              </Link>
              <Link href="/documents/educational" className="block px-4 py-2 text-lg hover:text-[#FF6A00] transition-colors">
              Police Clearance Certificate
              </Link>
              <Link href="/documents/educational" className="block px-4 py-2 text-lg hover:text-[#FF6A00] transition-colors">
              Single Certificate Apostille
              </Link>
              <Link href="/documents/educational" className="block px-4 py-2 text-lg hover:text-[#FF6A00] transition-colors">
              GST Certificate Apostille
              </Link>
              <Link href="/documents/educational" className="block px-4 py-2 text-lg hover:text-[#FF6A00] transition-colors">
              Power Attorney Apostille
              </Link>
              <Link href="/documents/educational" className="block px-4 py-2 text-lg hover:text-[#FF6A00] transition-colors">
              Driving License Apostille
              </Link>
            </div>
          </div>
          <Link href="/countries" className="text-lg hover:text-[#FF6A00] transition-colors">
            Countries
          </Link>
          <Link href="/contact" className="text-lg hover:text-[#FF6A00] transition-colors">
            Contact Us
          </Link>
        </div>

      {/* Desktop CTA Buttons */}
      <div className="hidden sm:flex items-center gap-3 md:gap-4">
        <a href="tel:1800123456" className="text-sm md:text-md border border-gray-300 px-2 md:px-4 py-2 rounded hover:border-[#FF6A00] transition-colors whitespace-nowrap">
          Call us 1800 123 456
        </a>
        <button className="bg-[#FF6A00] text-sm md:text-md text-white px-2 md:px-4 py-2 rounded hover:bg-[#E63C00] transition-colors whitespace-nowrap">
          Book a consultation
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button onClick={toggleMobileMenu} className="md:hidden">
        {mobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white z-50 border-b border-gray-200 shadow-lg">
          <div className="flex flex-col p-4">
            <Link href="/" className="py-2 text-lg hover:text-[#FF6A00] transition-colors">
              Home
            </Link>
            
            <div className="py-2">
              <div className="flex items-center justify-between text-lg hover:text-[#FF6A00] transition-colors">
                <Link href="/services">Services</Link>
              </div>
              <div className="pl-4 mt-1 border-l border-gray-200">
                <Link href="/services/mea-attestation" className="block py-2 text-lg hover:text-[#FF6A00] transition-colors">
                  MEA Attestation
                </Link>
                <Link href="/services/embassy-attestation" className="block py-2 text-lg hover:text-[#FF6A00] transition-colors">
                  Embassy Attestation
                </Link>
                <Link href="/services/home-hrd" className="block py-2 text-lg hover:text-[#FF6A00] transition-colors">
                Apostille Services
                </Link>
                <Link href="/services/home-hrd" className="block py-2 text-lg hover:text-[#FF6A00] transition-colors">
                  Home/HRD Department
                </Link>
              </div>
            </div>
            
            <div className="py-2">
              <div className="flex items-center justify-between text-lg hover:text-[#FF6A00] transition-colors">
                <Link href="/documents">Documents</Link>
              </div>
              <div className="pl-4 mt-1 border-l border-gray-200">
                <Link href="/documents/personal" className="block py-2 text-lg hover:text-[#FF6A00] transition-colors">
                Degree Certificate Apostille
                </Link>
                <Link href="/documents/commercial" className="block py-2 text-lg hover:text-[#FF6A00] transition-colors">
                Birth Certificate Apostille
                </Link>
                <Link href="/documents/educational" className="block py-2 text-lg hover:text-[#FF6A00] transition-colors">
                Marriage Certificate Apostille
                </Link>
                <Link href="/documents/educational" className="block py-2 text-lg hover:text-[#FF6A00] transition-colors">
                Police Clearance Certificate
                </Link>
                <Link href="/documents/educational" className="block py-2 text-lg hover:text-[#FF6A00] transition-colors">
                Single Certificate Apostill
                </Link>
                <Link href="/documents/educational" className="block py-2 text-lg hover:text-[#FF6A00] transition-colors">
                GST Certificate Apostille
                </Link>
                <Link href="/documents/educational" className="block py-2 text-lg hover:text-[#FF6A00] transition-colors">
                Power Attorney Apostille
                </Link>
                <Link href="/documents/educational" className="block py-2 text-lg hover:text-[#FF6A00] transition-colors">
                Driving License Apostille
                </Link>
              </div>
            </div>
            
            <Link href="/countries" className="py-2 text-lg hover:text-[#FF6A00] transition-colors">
              Countries
            </Link>
            <Link href="/contact" className="py-2 text-lg hover:text-[#FF6A00] transition-colors">
              Contact Us
            </Link>
            
            <div className="flex flex-col gap-3 mt-4">
              <a href="tel:1800123456" className="text-center text-lg border border-gray-300 px-4 py-2 rounded hover:border-[#FF6A00] transition-colors">
                Call us 1800 123 456
              </a>
              <button className="text-center bg-[#FF6A00] text-lg text-white px-4 py-2 rounded hover:bg-[#E63C00] transition-colors">
                Book a consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}