
import Countries_Attestation from '@/app/components/single/Countries.Attestation'
import Countries_Apostille from '@/app/components/single/Countries_Apostille'
import Documents from '@/app/components/single/Documents'
import PersonalHeader from '@/app/components/single/Header'
import Intro from '@/app/components/single/Intro'
import Process from '@/app/components/single/Process'
import What_Apostille from '@/app/components/single/What_Apostille'
import WHY_Apostille from '@/app/components/single/WHY_Apostille'
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
