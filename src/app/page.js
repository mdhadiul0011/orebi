import Hero from '@/components/Hero'
import Navber from '@/components/Navbar'
import Ads from '@/components/ads_2'
import Footer from '@/components/footer'
import Layout from '@/components/layout/layout'
import Arrivals from '@/components/newarrivals'
import Arrivals_2 from '@/components/newarrivals/newArrials2'
import Arrivals_3 from '@/components/newarrivals/newArrivals_3'
import Sale from '@/components/sale'
import Warrenty from '@/components/warrenty'
import React from 'react'

export default function page() {
  return (
    <Layout>
        <Navber/>
        <Hero/>
        <Warrenty/>
        <Sale/>
        <Arrivals/>
        <Arrivals_2/>
        <Ads/>
        <Arrivals_3/>
        <Footer/>
    </Layout>
  )
}
