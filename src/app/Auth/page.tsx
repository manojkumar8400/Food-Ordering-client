"use client"
import { Login, Register } from '@/components';
import React, { useState } from 'react';

const page = () => {

  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <div className='flex justify-center items-center h-lvh'>
      {
        isLogin ?
          <Login setIsLogin={setIsLogin}/> :
          <Register setIsLogin={setIsLogin}/>
      }
    </div>
  )
}

export default page
