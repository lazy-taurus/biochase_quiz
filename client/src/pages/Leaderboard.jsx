import React from 'react'
import { DefaultTable } from '../components/Table'
import { Nav } from '../components/Navbar'

const Leaderboard = () => {
  return (
    <div>
      <div className='mb-10'>
        <Nav />
      </div>
    <div className='m-auto w-[90%]'>
      <DefaultTable />
    </div>
    </div>
  )
}

export default Leaderboard