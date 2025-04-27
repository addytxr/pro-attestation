
import Countries_Attestation from '@/app/components/birth/Countries.Attestation'
import Countries_Apostille from '@/app/components/birth/Countries_Apostille'
import Documents from '@/app/components/birth/Documents'
import PersonalHeader from '@/app/components/birth/Header'
import Intro from '@/app/components/birth/Intro'
import Process from '@/app/components/birth/Process'
import What_Apostille from '@/app/components/birth/What_Apostille'
import WHY_Apostille from '@/app/components/birth/WHY_Apostille'
import React from 'react'

const page = () => {
  return (
    <div>
      <PersonalHeader />
      <Intro />
      <What_Apostille />
      <WHY_Apostille />
      <Process />
      <Documents />
      <Countries_Apostille />
      <Countries_Attestation />
    </div>
  )
}

export default page
