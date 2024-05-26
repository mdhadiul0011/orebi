import Navber from '@/components/Navbar'
import Errors from '@/components/errorpage'
import Footer from '@/components/footer'
import Layout from '@/components/layout/layout'
import React from 'react'

export default function Error() {
  return (
    <div>
      <Layout>
        <Navber/>
        <Errors/>
        <Footer/>
      </Layout>
    </div>
  )
}
