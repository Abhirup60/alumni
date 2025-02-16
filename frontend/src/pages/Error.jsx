import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex flex-col items-center'>
      <p className='text-8xl'>404</p>
      Page not found!

      <div className='btn btn-group mt-5'>
                <NavLink to='/'>
                  <button
                    type='button'
                    className='btn bg-blue-500 hover:bg-blue-700
                   text-white font-bold py-2 px-4
                     rounded-lg'
                  >
                    Goto Home
                  </button>
                </NavLink>
                <NavLink to='/contact'>
                  <button
                    className='btn bg-blue-500 hover:bg-blue-700
                   text-white font-bold py-2 px-4
                     rounded-lg ml-2'
                  >
                    Report
                  </button>
                </NavLink>
        </div>
    </div>
  )
}

export default Error
