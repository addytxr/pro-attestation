'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Image 
              src="/hero.svg"
              alt="Pro Attestation Services Logo"
              width={150}             
              height={100}
              className="mb-6"
              priority
            />
            <p className="text-gray-400 mb-6">
              Pro Attestation provides comprehensive document attestation, apostille, and embassy legalization services across India. We ensure secure and efficient processing for all your document verification needs.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="bg-[#FF6A00] text-white px-6 py-2 rounded hover:bg-[#E63C00] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Personal Documents */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Personal Documents</h3>
            <ul className="space-y-2">
              <li><Link href="/documents/birth" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Birth Certificate</Link></li>
              <li><Link href="/documents/death" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Death Certificate</Link></li>
              <li><Link href="/documents/marriage" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Marriage Certificate</Link></li>
              <li><Link href="/documents/divorce" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Divorce Certificate</Link></li>
              <li><Link href="/documents/single" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Single Status</Link></li>
              <li><Link href="/documents/police" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Police Clearance</Link></li>
              <li><Link href="/documents/medical" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Medical Certificates</Link></li>
              <li><Link href="/documents/transfer-leave" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Transfer/Leave</Link></li>
            </ul>
          </div>

          {/* Commercial Documents */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Commercial Documents</h3>
            <ul className="space-y-2">
              <li><Link href="/documents/import-export" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Import-Export</Link></li>
              <li><Link href="/documents/company-agreements" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Company Agreements</Link></li>
              <li><Link href="/documents/incorporation" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Incorporation</Link></li>
              <li><Link href="/documents/attorny" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Power of Attorney</Link></li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-4">Educational Documents</h3>
            <ul className="space-y-2">
              <li><Link href="/documents/degree" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Degree Certificates</Link></li>
              <li><Link href="/documents/driving" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Driving License</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/mea-attestation" className="text-gray-400 hover:text-[#FF6A00] transition-colors">MEA Attestation</Link></li>
              <li><Link href="/services/embassy-attestation" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Embassy Attestation</Link></li>
              <li><Link href="/services/apostille" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Apostille Services</Link></li>
              <li><Link href="/services/home-hrd" className="text-gray-400 hover:text-[#FF6A00] transition-colors">Home/HRD Department</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pro Attestation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}