"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDocumentCategory, setActiveDocumentCategory] = useState(null)
  const [personalMenuOpen, setPersonalMenuOpen] = useState(false)
  const [commercialMenuOpen, setCommercialMenuOpen] = useState(false)
  const [educationalMenuOpen, setEducationalMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleDocumentCategory = (category) => {
    if (activeDocumentCategory === category) {
      setActiveDocumentCategory(null)
    } else {
      setActiveDocumentCategory(category)
    }
  }

  const togglePersonalMenu = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setPersonalMenuOpen(!personalMenuOpen)
    setCommercialMenuOpen(false)
    setEducationalMenuOpen(false)
  }

  const toggleCommercialMenu = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCommercialMenuOpen(!commercialMenuOpen)
    setPersonalMenuOpen(false)
    setEducationalMenuOpen(false)
  }

  const toggleEducationalMenu = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setEducationalMenuOpen(!educationalMenuOpen)
    setPersonalMenuOpen(false)
    setCommercialMenuOpen(false)
  }

  // Close all menus when clicking outside
  const closeAllMenus = () => {
    setPersonalMenuOpen(false)
    setCommercialMenuOpen(false)
    setEducationalMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white flex items-center text-black justify-between px-4 sm:px-8 md:px-16 py-4 border-b border-gray-200 z-50">
      <div className="flex items-center gap-4 md:gap-10">
        <Link href="/">
          <Image 
            src="/hero.svg"
            alt="Pro Attestation Services Logo"
            className="rounded-2xl"
            width={125}             
            height={90}
            priority  
          />
          </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex font-semibold z-50 items-center gap-6">
          <Link href="/" className="text-lg hover:text-[#FF6A00] transition-colors">
            Home
          </Link>
          <div className="relative group">
            <div className="text-lg cursor-pointer hover:text-[#FF6A00] flex items-center transition-colors">
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </div>
            <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg p-2 min-w-[200px] z-10">
              <Link href="/services/mea-attestation" className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                MEA Attestation
              </Link>
              <Link href="/services/embassy-attestation" className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                Embassy Attestation
              </Link>
              <Link href="/services/apostille-attestation-delhi" className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                Apostille Services
              </Link>
              <Link href="/services/hrd-home-attestation" className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                Home/HRD Department
              </Link>
            </div>
          </div>
          <div className="relative group">
            <div className="text-lg cursor-pointer hover:text-[#FF6A00] flex items-center transition-colors">
                Documents
                <ChevronDown className="ml-1 h-4 w-4" />
            </div>
            <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-lg p-2 min-w-[250px] z-10">
                {/* Personal documents */}
                <div 
                  onClick={togglePersonalMenu} 
                  className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors cursor-pointer flex items-center justify-between relative"
                >
                  Personal Documents
                  <ChevronRight className="ml-1 h-4 w-4" />
                  
                  {/* Right-aligned personal documents dropdown - only shows when personalMenuOpen is true */}
                  {personalMenuOpen && (
                    <div className="absolute left-full top-0 bg-white border border-gray-200 rounded-lg shadow-lg p-2 min-w-[200px] z-20 ml-1">
                      <Link href="/documents/birth-certificate-apostille-attestation" className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                          Birth Certificate
                      </Link>
                      <Link href="/documents/death-certificate-attestation-apostille" className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                          Death Certificate
                      </Link>
                      <Link href="/documents/marriage-certificate-attestation" className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                          Marriage Certificate
                      </Link>
                      <Link href="/documents/divorce-certificate-attestation" className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                          Divorce Certificate
                      </Link>
                      <Link href="/documents/single-status-certificate-attestation" className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                          Single Status Certificate
                      </Link>
                      <Link href="/documents/pcc-apostille-attestation" className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                          Police Clearance
                      </Link>
                      <Link href="/documents/medical-certificate-apostille-attestation" className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                          Medical Certificates
                      </Link>
                      <Link href="/documents/driving-license-attestation-apostille" className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                          Driving License
                      </Link>
                      <Link href="/documents/affidavit-document-apostille-attestation" className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                          Affidavit
                      </Link>
                    </div>
                  )}
                </div>
                
                {/* Commercial documents */}
                <div 
                  onClick={toggleCommercialMenu} 
                  className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors cursor-pointer flex items-center justify-between relative"
                >
                  Commercial Documents
                  <ChevronRight className="ml-1 h-4 w-4" />
                  
                  {/* Right-aligned commercial documents dropdown */}
                  {commercialMenuOpen && (
                    <div className="absolute left-full top-0 bg-white border border-gray-200 rounded-lg shadow-lg p-2 min-w-[200px] z-20 ml-1">
                      <Link href="/documents/import-export-document-apostille" className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                          Import-Export Documents
                      </Link>
                      <Link href="/documents/company-agreement-attestation-apostille" className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                          Company Agreements
                      </Link>
                      <Link href="/documents/incorporation-documents-apostille-attestation" className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                          Incorporation Documents
                      </Link>
                      <Link href="/documents/power-of-attorney-apostille" className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                          Power of Attorney
                      </Link>
                    </div>
                  )}
                </div>
                
                {/* Educational documents */}
                <div 
                  onClick={toggleEducationalMenu} 
                  className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors cursor-pointer flex items-center justify-between relative"
                >
                  Educational Documents
                  <ChevronRight className="ml-1 h-4 w-4" />
                  
                  {/* Right-aligned educational documents dropdown */}
                  {educationalMenuOpen && (
                    <div className="absolute left-full top-0 bg-white border border-gray-200 rounded-lg shadow-lg p-2 min-w-[200px] z-20 ml-1">
                      <Link href="/documents/degree-certificate-attestation-apostille" className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                          Degree Certificates
                      </Link>
                      <Link href="/documents/transfer-certificate-apostille-attestation" className="block px-4 py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                          Transfer/Leave Certificates
                      </Link>
                    </div>
                  )}
                </div>
            </div>
          </div>
          <Link href="/countries" className="text-lg hover:text-[#FF6A00] transition-colors">
            Countries
          </Link>
          <Link href="/contact" className="text-lg hover:text-[#FF6A00] transition-colors">
            Contact Us
          </Link>
        </div>

      <div className="hidden sm:flex items-center gap-3 md:gap-4">
        <Link href="/contact" className="bg-[#FF6A00] text-sm md:text-md font-semibold text-white px-2 md:px-5 py-2 md:py-3 rounded hover:bg-[#E63C00] transition-colors whitespace-nowrap">
          Book a consultation
        </Link>
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-white z-50 border-b border-gray-200 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-4">
            <Link href="/" className="py-2 text-lg hover:text-[#FF6A00] transition-colors">
              Home
            </Link>
            
            <div className="py-2">
              <div className="flex items-center justify-between text-lg hover:text-[#FF6A00] transition-colors">
                <div>Services</div>
              </div>
              <div className="pl-4 mt-1 border-l border-gray-200">
                <Link href="/services/mea-attestation-delhi" className="block py-2 text-lg text-[#FF6A00] hover:text-[#FF6A00] transition-colors">
                  MEA Attestation
                </Link>
                <Link href="/services/embassy-attestation" className="block py-2 text-lg text-[#FF6A00] hover:text-[#FF6A00] transition-colors">
                  Embassy Attestation
                </Link>
                <Link href="/services/apostille-attestation-delhi" className="block py-2 text-lg text-[#FF6A00] hover:text-[#FF6A00] transition-colors">
                  Apostille Services
                </Link>
                <Link href="/services/hrd-home-attestation" className="block py-2 text-lg text-[#FF6A00] hover:text-[#FF6A00] transition-colors">
                  Home/HRD Department
                </Link>
              </div>
            </div>
            
            <div className="py-2">
              {/* Mobile Documents Menu */}
              <div className="flex items-center justify-between text-lg hover:text-[#FF6A00] transition-colors">
                <div>Documents</div>
              </div>
              <div className="pl-4 mt-1 border-l border-gray-200">
                {/* 3 main categories for mobile */}
                <div 
                  onClick={() => toggleDocumentCategory('mobile-personal')} 
                  className="block py-2 text-lg hover:text-[#FF6A00] transition-colors flex items-center justify-between"
                >
                  <div>Personal Documents</div>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </div>
                
                {activeDocumentCategory === 'mobile-personal' && (
                  <div className="pl-4 border-l border-gray-100">
                    <Link href="/documents/birth-certificate-apostille-attestation" className="block py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                      Birth Certificate
                    </Link>
                    <Link href="/documents/death-certificate-attestation-apostille" className="block py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                      Death Certificate
                    </Link>
                    <Link href="/documents/marriage-certificate-attestation" className="block py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                      Marriage Certificate
                    </Link>
                    <Link href="/documents/divorce-certificate-attestation" className="block py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                      Divorce Certificate
                    </Link>
                    <Link href="/documents/single-status-certificate-attestation" className="block py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                      Single Status Certificate
                    </Link>
                    <Link href="/documents/pcc-apostille-attestation" className="block py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                      Police Clearance
                    </Link>
                    <Link href="/documents/medical-certificate-apostille-attestation" className="block py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                      Medical Certificates
                    </Link>
                    <Link href="/documents/driving-license-attestation-apostille" className="block py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                      Driving License
                    </Link>
                    <Link href="/documents/affidavit-document-apostille-attestation" className="block py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                      Affidavit
                    </Link>
                  </div>
                )}
                
                <div 
                  onClick={() => toggleDocumentCategory('mobile-commercial')} 
                  className="block py-2 text-lg hover:text-[#FF6A00] transition-colors flex items-center justify-between"
                >
                  <div>Commercial Documents</div>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </div>
                
                {activeDocumentCategory === 'mobile-commercial' && (
                  <div className="pl-4 border-l border-gray-100">
                    <Link href="/documents/import-export-document-apostille" className="block py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                      Import-Export Documents
                    </Link>
                    <Link href="/documents/company-agreement-attestation-apostille" className="block py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                      Company Agreements
                    </Link>
                    <Link href="/documents/incorporation-documents-apostille-attestation" className="block py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                      Incorporation Documents
                    </Link>
                    <Link href="/documents/power-of-attorney-apostille" className="block py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                      Power of Attorney
                    </Link>
                  </div>
                )}
                
                <div 
                  onClick={() => toggleDocumentCategory('mobile-educational')} 
                  className="block py-2 text-lg hover:text-[#FF6A00] transition-colors flex items-center justify-between"
                >
                  <div>Educational Documents</div>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </div>
                
                {activeDocumentCategory === 'mobile-educational' && (
                  <div className="pl-4 border-l border-gray-100">
                    <Link href="/documents/degree-certificate-attestation-apostille" className="block py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                      Degree Certificates
                    </Link>
                    <Link href="/documents/transfer-certificate-apostille-attestation" className="block py-2 text-lg text-black hover:text-[#FF6A00] transition-colors">
                      Transfer/Leave Certificates
                    </Link>
                  </div>
                )}
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
              <Link href="/contact" className="text-center bg-[#FF6A00] text-lg text-white px-4 py-2 rounded hover:bg-[#E63C00] transition-colors">
                Book a consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}