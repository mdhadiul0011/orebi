import Navber from '@/components/Navbar'
import Footer from '@/components/footer'
import Layout from '@/components/layout/layout'
import Log from '@/components/login'
import React from 'react'

export default function Login() {
  return (
    <div>
    <Layout>
        <Navber/>
        <Log/>
        <Footer/>
    </Layout>
    </div>
  )
}
