
import Countries_Attestation from '@/app/components/transfer-leave/Countries.Attestation'
import Countries_Apostille from '@/app/components/transfer-leave/Countries_Apostille'
import Documents from '@/app/components/transfer-leave/Documents'
import PersonalHeader from '@/app/components/transfer-leave/Header'
import Intro from '@/app/components/transfer-leave/Intro'
import Process from '@/app/components/transfer-leave/Process'
import What_Apostille from '@/app/components/transfer-leave/What_Apostille'
import WHY_Apostille from '@/app/components/transfer-leave/WHY_Apostille'
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
