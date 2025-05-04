
import Countries_Attestation from '@/app/components/degree/Countries.Attestation'
import Countries_Apostille from '@/app/components/degree/Countries_Apostille'
import Documents from '@/app/components/degree/Documents'
import PersonalHeader from '@/app/components/degree/Header'
import Intro from '@/app/components/degree/Intro'
import Process from '@/app/components/degree/Process'
import What_Apostille from '@/app/components/degree/What_Apostille'
import WHY_Apostille from '@/app/components/degree/WHY_Apostille'
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
