import HomeHeader from '@/components/HomeHeader';
import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />

      {/* Body */}

      <div className='flex flex-col items-center mt-24'>
        <Image
          src='/Google_2015_logo.svg'
          alt='Google logo'
          width='300'
          height='100'
        />
        <HomeSearch />
      </div>
    </>
  );
}
