import Navber from '@/components/Navbar'
import ShopArea from '@/components/Shops/shop'
import Footer from '@/components/footer'
import Layout from '@/components/layout/layout'
import React from 'react'

export default function Shop() {
  return (
    <div>
      <Layout>
        <Navber/>
        <ShopArea/>
        <Footer/>
      </Layout>
    </div>
  )
}