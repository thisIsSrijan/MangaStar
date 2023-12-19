import React from 'react'
import { Hero } from '../Component/Hero/Hero'
import { TopSeller } from '../Component/TopSeller/TopSeller'
import { Offer } from '../Component/Offers/Offer'
import { NewRelease } from '../Component/NewRelease/NewRelease'
import { NewsLetter } from '../Component/NewsLetter/NewsLetter'

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <TopSeller/>
      <Offer/>
      <NewRelease/>
      <NewsLetter/>
    </div>
  )
}
