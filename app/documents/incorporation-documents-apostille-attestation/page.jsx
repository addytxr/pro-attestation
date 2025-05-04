
import Countries_Attestation from '@/app/components/incorporation/Countries.Attestation'
import Countries_Apostille from '@/app/components/incorporation/Countries_Apostille'
import Documents from '@/app/components/incorporation/Documents'
import PersonalHeader from '@/app/components/incorporation/Header'
import Intro from '@/app/components/incorporation/Intro'
import Process from '@/app/components/incorporation/Process'
import What_Apostille from '@/app/components/incorporation/What_Apostille'
import WHY_Apostille from '@/app/components/incorporation/WHY_Apostille'
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
