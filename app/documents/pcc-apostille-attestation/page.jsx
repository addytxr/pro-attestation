import Link from 'next/link'
import Countries_Attestation from '@/app/components/police/Countries.Attestation'
import Countries_Apostille from '@/app/components/police/Countries_Apostille'
import Documents from '@/app/components/police/Documents'
import PersonalHeader from '@/app/components/police/Header'
import Intro from '@/app/components/police/Intro'
import Process from '@/app/components/police/Process'
import What_Apostille from '@/app/components/police/What_Apostille'
import WHY_Apostille from '@/app/components/police/WHY_Apostille'
import React from 'react'

const Page = () => {
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

export default Page
