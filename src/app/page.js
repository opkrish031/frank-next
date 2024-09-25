import Header from '@/app/Component/Header'
import React from 'react'
import Background from './HomeComponent/Background'
import StaticImg from './HomeComponent/StaticImg'

export default function page() {
  return (
    <div>
      <Header/>
      <Background/>
      <StaticImg/>
    </div>
  )
}
