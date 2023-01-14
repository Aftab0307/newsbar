import React from 'react'
import Hero from '../components/Hero'
import FetchData from '../components/FetchData'

const Home = () => {
  return (
    <div style={{minHeight: '100vh'}}>
      <Hero/>
      <FetchData/>
    </div>
  )
}

export default Home