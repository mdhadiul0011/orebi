import Navber from '@/components/Navbar'
import CheckOutPage from '@/components/checkout'
import Footer from '@/components/footer'
import Layout from '@/components/layout/layout'
import React from 'react'

export default function Checkout() {
  return (
    <div>
      <Layout>
        <Navber/>
        <CheckOutPage/>
        <Footer/>
      </Layout>
    </div>
  )
}
