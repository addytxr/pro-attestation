'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'MEA Attestation',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-[#FFF7F0] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">Get in touch with us for all your document attestation needs</p>
        </div>

        <div className=" flex justify-center items-center ">
          {/* Contact Information */}
          <div className="bg-white  rounded-xl shadow-lg p-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="text-[#FF6A00] h-6 w-6 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">Toll Free: 1800 123 456</p>
                  <p className="text-gray-600">Direct: +91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-[#FF6A00] h-6 w-6 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">info@proattestation.com</p>
                  <p className="text-gray-600">support@proattestation.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-[#FF6A00] h-6 w-6 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-900">Office Address</h3>
                  <p className="text-gray-600">123 Business Center</p>
                  <p className="text-gray-600">MG Road, Bangalore - 560001</p>
                  <p className="text-gray-600">Karnataka, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-[#FF6A00] h-6 w-6 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}