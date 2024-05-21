import React from 'react'
// import closeIcon from '../../icons/close.png';
// import Image from 'next/image';

interface LoginProps {
  setIsLogin: (isLogin: boolean) => void;
}

export const Login: React.FC<LoginProps> = ({setIsLogin }) => {
  return (
    <div className="rounded-lg h-fit  bg-white text-black max-w-xl mx-auto p-5 flex justify-center items-center flex-col">
      <div className='flex items-center justify-between w-full'>
        <h1 className='text-3xl font-bold'>Login</h1>
        {/* <button className='bg-warning-default p-2 rounded-lg'><Image className='w-3 ' src={closeIcon} alt="closeIcon" /></button> */}
      </div>
      <div className='mt-5 grid gap-3'>
        <div>
          <label htmlFor="">Email</label><input className='border-2 text-black' type="text" />
        </div>
        <div>
          <label htmlFor="">Password</label><input className='border-2 text-black' type="text" />
        </div>
      </div>
      <button className='w-full border-2 text-black m-4'>Login account</button>
      <div className='flex gap-2 mt-4'>
        <p>
          New to Zomato?  </p> <p className='cursor-pointer underline' onClick={() => setIsLogin(false)}>Create account</p>
      </div>
    </div>
  )
}
