
import Countries_Attestation from '@/app/components/death/Countries.Attestation'
import Countries_Apostille from '@/app/components/death/Countries_Apostille'
import Documents from '@/app/components/death/Documents'
import PersonalHeader from '@/app/components/death/Header'
import Intro from '@/app/components/death/Intro'
import Process from '@/app/components/death/Process'
import What_Apostille from '@/app/components/death/What_Apostille'
import WHY_Apostille from '@/app/components/death/WHY_Apostille'
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
