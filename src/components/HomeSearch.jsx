'use client';

import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

export default function HomeSearch() {
  const [input, setInput] = useState('');
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();

  const handleSumbit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch('https://random-word-api.herokuapp.com/word');
    const data = await response.json()[0];
    if (!response.ok) return;
    router.push(`/search/web?searchTerm=${data}`);
    setRandomSearchLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSumbit}
        className='flex w-full mt-5 mx-auto max-w-[90] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus:shadow-md transition-shadow duration-200 sm:max-w-xl lg:max-w-2xl'
      >
        <AiOutlineSearch className='text-xl text-gray-500 mr-3' />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type='text'
          className='flex-grow focus:outline-none'
        />
        <BsFillMicFill className='text-lg' />
      </form>

      <div className='flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row mt-8'>
        <button onClick={handleSumbit} className='btn'>
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className='btn flex items-center justify-center disabled:placeholder-opacity-80'
        >
          {randomSearchLoading ? (
            <img
              src='/spinner.svg'
              alt='loading...'
              className='h-6 text-center'
            />
          ) : (
            "I'm Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
