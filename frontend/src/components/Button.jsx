import React from 'react'

const Button = () => {
  return (
    <div>
      <div className='btn btn-group mt-5'>
                <a href='/contact'>
                  <button
                    type='button'
                    className='btn bg-blue-500 hover:bg-blue-700
                   text-white font-bold py-2 px-4
                     rounded-lg'
                  >
                    connect now
                  </button>
                </a>
                <a href='/service'>
                  <button
                    className='btn bg-blue-500 hover:bg-blue-700
                   text-white font-bold py-2 px-4
                     rounded-lg ml-2'
                  >
                    Learn more
                  </button>
                </a>
        </div>
    </div>
  )
}

export default Button
