import Navber from '@/components/Navbar'
import ContactPage from '@/components/contacts/contct'
import Footer from '@/components/footer'
import Layout from '@/components/layout/layout'
import React from 'react'

export default function Contact() {
  return (
    <div>
      <Layout>
        <Navber/>
        <ContactPage/>
        <Footer/>
      </Layout>
    </div>
  )
}
