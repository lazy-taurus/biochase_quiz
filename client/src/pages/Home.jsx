import React from 'react'
import { Nav } from '../components/Navbar'
import { CarouselDefault } from '../components/Carousel'
import About from '../components/About'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'

const Home = () => {
  return (
    <div className=''>
      <div className='w-[100vw] '>
      <Nav />
      </div>
      <div className=' overflow-x-hidden m-10'>
      <CarouselDefault />
      </div>
      <div className='mt-40'>
        <About />
      </div>
      <div className='w-[80vw] m-auto mt-40'>
        <FAQ />
      </div>
      <div className='mt-40'>
        <Footer /> 
      </div>
    </div>
  )
}

export default Home