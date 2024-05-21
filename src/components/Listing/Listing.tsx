import React from 'react';
import Image from 'next/image';
import biryani from '../../icons/brg.jpg';


export const Listing = () => {
  return (
    <div>
      <div className='w-fit m-auto text-center p-16'>
        <h2 className='text-5xl font-bold italic'>Romato</h2>
        <p>
          Discover the best food & drinks in Delhi</p>
      </div>
      {/* Search bar */}
      <div className='flex justify-center items-center gap-4 bg-white w-fit m-auto p-4 rounded-lg'>
        <div>
          <select className="text-black p-2 border-2" name="" id="">
            <option value="delhi">delhi</option>
            <option value="delhi">delhi</option>
            <option value="delhi">delhi</option>
            <option value="delhi">delhi</option>
            <option value="delhi">delhi</option>
            <option value="delhi">delhi</option>
          </select>
        </div>
        <div><input className='p-1 border-2' type="text" /></div>
      </div>

      <div>
        <h3>What's on your mind?</h3>
        <div className='flex gap-5 overflow-hidden'>
          <div className='w-full'><Image className='w-60 ' src={biryani} alt="closeIcon" /></div>
          <div className='w-full'><Image className='w-60 ' src={biryani} alt="closeIcon" /></div>
          <div className='w-full'><Image className='w-60 ' src={biryani} alt="closeIcon" /></div>
          <div className='w-full'><Image className='w-60 ' src={biryani} alt="closeIcon" /></div>
          <div className='w-full'><Image className='w-60 ' src={biryani} alt="closeIcon" /></div>
          <div className='w-full'><Image className='w-60 ' src={biryani} alt="closeIcon" /></div>
          <div className='w-full'><Image className='w-60 ' src={biryani} alt="closeIcon" /></div>
          <div className='w-full'><Image className='w-60 ' src={biryani} alt="closeIcon" /></div>
          <div className='w-full'><Image className='w-60 ' src={biryani} alt="closeIcon" /></div>
          <div className='w-full'><Image className='w-60 ' src={biryani} alt="closeIcon" /></div>
          <div className='w-full'><Image className='w-60 ' src={biryani} alt="closeIcon" /></div>
        </div>
      </div>
    </div>
  )
}