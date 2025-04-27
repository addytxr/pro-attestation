
import Countries_Attestation from '@/app/components/Driving/Countries.Attestation'
import Countries_Apostille from '@/app/components/Driving/Countries_Apostille'
import Documents from '@/app/components/Driving/Documents'
import PersonalHeader from '@/app/components/Driving/Header'
import Intro from '@/app/components/Driving/Intro'
import Process from '@/app/components/Driving/Process'
import What_Apostille from '@/app/components/Driving/What_Apostille'
import WHY_Apostille from '@/app/components/Driving/WHY_Apostille'
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
