import Navber from '@/components/Navbar'
import CartPage from '@/components/cart'
import Footer from '@/components/footer'
import Layout from '@/components/layout/layout'
import React from 'react'

export default function Cart() {
  return (
    <div>
      <Layout>
        <Navber/>
        <CartPage/>
        <Footer/>
      </Layout>
    </div>
  )
}
