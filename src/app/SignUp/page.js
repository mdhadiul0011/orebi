import Navber from '@/components/Navbar'
import Signup from '@/components/Regigtration'
import Footer from '@/components/footer'
import Layout from '@/components/layout/layout'
import React from 'react'

export default function SignUp() {
  return (
    <div>
        <Layout>
            <Navber/>
            <Signup/>
            <Footer/>
        </Layout>
    </div>
  )
}
