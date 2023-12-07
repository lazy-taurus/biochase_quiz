import React from 'react'
import { Nav } from '../components/Navbar'
import { CarouselDefault } from '../components/Carousel'

const Home = () => {
  return (
    <div className='bg-black'>
      <div className='w-[100vw] absolute z-10'>
      <Nav />
      </div>
      <div className='w-[100vw] overflow-x-hidden'>
      <CarouselDefault />
      </div>
    </div>
  )
}

export default Home