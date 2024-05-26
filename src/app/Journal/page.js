import Navber from '@/components/Navbar'
import Footer from '@/components/footer'
import Head from '@/components/journal/journalHead/head'
import Layout from '@/components/layout/layout'
import React from 'react'

export default function Journal() {
  return (
    <div>
      <Layout>
        <Navber/>
        <Head/>
        <Footer/>
      </Layout>
    </div>
  )
}