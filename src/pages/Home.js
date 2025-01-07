import React from 'react'
import Layout from '../compenents/Layout'
import Menu from '../compenents/body/Menu'

const Home = () => {
   document.title = "Home"
  return (
   <>
    <Layout>
        <Menu />
    </Layout>
   </>
  )
}

export default Home