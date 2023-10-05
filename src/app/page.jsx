import React from 'react'

import { Header } from '@/components/Header'
import { Carousel } from '@/components/Carousel'
import { Aside } from '@/components/Aside'
import { Sectionone } from '@/components/Sectionone'
import { Footer } from '@/components/Footer'
const page = () => {
  return (
    <div>
      <Header/>
      <Carousel/>
      <Aside/>
      <Sectionone/>}
      <Footer/>
    </div>
  )
}

export default page
