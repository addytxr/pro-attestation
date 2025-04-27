
import Countries_Attestation from '@/app/components/company-agreements/Countries.Attestation'
import Countries_Apostille from '@/app/components/company-agreements/Countries_Apostille'
import Documents from '@/app/components/company-agreements/Documents'
import PersonalHeader from '@/app/components/company-agreements/Header'
import Intro from '@/app/components/company-agreements/Intro'
import Process from '@/app/components/company-agreements/Process'
import What_Apostille from '@/app/components/company-agreements/What_Apostille'
import WHY_Apostille from '@/app/components/company-agreements/WHY_Apostille'
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
