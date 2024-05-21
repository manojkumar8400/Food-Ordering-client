import React from 'react'

export const Navigation = () => {
  return (
    <div className='flex justify-between py-4 px-5 bg-white text-black'>
      <div>
        <h3 className='font-bold'>Romato</h3>
      </div>
      <div className='flex gap-6'>
        <p>Add restaurant</p>
        <p>Login</p>
        <p>Signup</p>
      </div>
    </div>
  )
}