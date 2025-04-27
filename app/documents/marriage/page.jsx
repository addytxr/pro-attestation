
import Countries_Attestation from '@/app/components/marriage/Countries.Attestation'
import Countries_Apostille from '@/app/components/marriage/Countries_Apostille'
import Documents from '@/app/components/marriage/Documents'
import PersonalHeader from '@/app/components/marriage/Header'
import Intro from '@/app/components/marriage/Intro'
import Process from '@/app/components/marriage/Process'
import What_Apostille from '@/app/components/marriage/What_Apostille'
import WHY_Apostille from '@/app/components/marriage/WHY_Apostille'
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
