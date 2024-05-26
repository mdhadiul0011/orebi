import Navber from '@/components/Navbar'
import Header from '@/components/about'
import Footer from '@/components/footer'
import Layout from '@/components/layout/layout'
import React from 'react'

export default function About() {
  return (
    <div>
      <Layout>
        <Navber/>
        <Header/>
        <Footer/>
      </Layout>
    </div>
  )
}
