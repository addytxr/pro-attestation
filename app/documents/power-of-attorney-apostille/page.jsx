
import Countries_Attestation from '@/app/components/attorny/Countries.Attestation'
import Countries_Apostille from '@/app/components/attorny/Countries_Apostille'
import Documents from '@/app/components/attorny/Documents'
import PersonalHeader from '@/app/components/attorny/Header'
import Intro from '@/app/components/attorny/Intro'
import Process from '@/app/components/attorny/Process'
import What_Apostille from '@/app/components/attorny/What_Apostille'
import WHY_Apostille from '@/app/components/attorny/WHY_Apostille'
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
