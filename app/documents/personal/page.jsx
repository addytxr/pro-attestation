
import Countries_Attestation from '@/app/components/personal/Countries.Attestation'
import Countries_Apostille from '@/app/components/personal/Countries_Apostille'
import Documents from '@/app/components/personal/Documents'
import PersonalHeader from '@/app/components/personal/Header'
import Intro from '@/app/components/personal/Intro'
import Process from '@/app/components/personal/Process'
import What_Apostille from '@/app/components/personal/What_Apostille'
import WHY_Apostille from '@/app/components/personal/WHY_Apostille'
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
