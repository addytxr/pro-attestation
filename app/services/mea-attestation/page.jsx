"use client"

import { useEffect, useRef } from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import MEA_Header from "../../components/MEA-Attestation/MEA_Header"
import MEA_About from "../../components/MEA-Attestation/MEA_About"
import MEA_Documents from "../../components/MEA-Attestation/MEA_Documents"
import MEA_Countries from "../../components/MEA-Attestation/MEA_Countries"
import MEA_Process from "../../components/MEA-Attestation/MEA_Process"
import MEA_Fees from "../../components/MEA-Attestation/MEA_Fees"
import MEA_WhyChooseUs from "../../components/MEA-Attestation/MEA_WhyChooseUs"
import MEA_FAQ from "../../components/MEA-Attestation/MEA_FAQ"
import MEA_CTA from "../../components/MEA-Attestation/MEA_CTA"

export default function MEAAttestationPage() {
  const sectionRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <>
      <Navbar />
      <MEA_Header />
      <div className="min-h-screen bg-[#FFF7F0] py-12">
        <MEA_About />
        <MEA_Documents />
        <MEA_Countries />
        <MEA_Process />
        <MEA_Fees />
        <MEA_WhyChooseUs />
        <MEA_FAQ />
        <MEA_CTA />
      </div>
      <Footer />
    </>
  )
}