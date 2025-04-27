
import Countries_Attestation from '@/app/components/divorce/Countries.Attestation'
import Countries_Apostille from '@/app/components/divorce/Countries_Apostille'
import Documents from '@/app/components/divorce/Documents'
import PersonalHeader from '@/app/components/divorce/Header'
import Intro from '@/app/components/divorce/Intro'
import Process from '@/app/components/divorce/Process'
import What_Apostille from '@/app/components/divorce/What_Apostille'
import WHY_Apostille from '@/app/components/divorce/WHY_Apostille'
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
