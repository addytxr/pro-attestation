
import Countries_Attestation from '@/app/components/affidavit/Countries.Attestation'
import Countries_Apostille from '@/app/components/affidavit/Countries_Apostille'
import Documents from '@/app/components/affidavit/Documents'
import PersonalHeader from '@/app/components/affidavit/Header'
import Intro from '@/app/components/affidavit/Intro'
import Process from '@/app/components/affidavit/Process'
import What_Apostille from '@/app/components/affidavit/What_Apostille'
import WHY_Apostille from '@/app/components/affidavit/WHY_Apostille'
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
