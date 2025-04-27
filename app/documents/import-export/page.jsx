
import Countries_Attestation from '@/app/components/import-export/Countries.Attestation'
import Countries_Apostille from '@/app/components/import-export/Countries_Apostille'
import Documents from '@/app/components/import-export/Documents'
import PersonalHeader from '@/app/components/import-export/Header'
import Intro from '@/app/components/import-export/Intro'
import Process from '@/app/components/import-export/Process'
import What_Apostille from '@/app/components/import-export/What_Apostille'
import WHY_Apostille from '@/app/components/import-export/WHY_Apostille'
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
