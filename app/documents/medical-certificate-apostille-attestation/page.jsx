
import Countries_Attestation from '@/app/components/medical/Countries.Attestation'
import Countries_Apostille from '@/app/components/medical/Countries_Apostille'
import Documents from '@/app/components/medical/Documents'
import PersonalHeader from '@/app/components/medical/Header'
import Intro from '@/app/components/medical/Intro'
import Process from '@/app/components/medical/Process'
import What_Apostille from '@/app/components/medical/What_Apostille'
import WHY_Apostille from '@/app/components/medical/WHY_Apostille'
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
