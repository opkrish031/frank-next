import Header from '@/app/Component/Header'
import React from 'react'
import Background from './HomeComponent/Background'
import StaticImg from './HomeComponent/StaticImg'
import SliderCarousel from './HomeComponent/SliderCarousel'

export default function page() {
  return (
    <div>
      <Header/>
      <Background/>
      <StaticImg/>
      <SliderCarousel/>
    </div>
  )
}
