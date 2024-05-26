import React from 'react'
import Container from '../container'
import { FiSearch } from "react-icons/fi";
import Link from 'next/link';

export default function Errors() {
  return (
    <div className='mt-28'>
      <Container>
        <div>
            <h1 className='font-primaryFont font-bold text-black text-[200px]'>404</h1>
            <p className='w-[50%] font-primaryFont font-normal text-gray text-base'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
            <div className='w-[50%] mt-28 flex justify-between items-center border border-solid border-[#f0f0f0]'>
                <input className='w-[90%] font-primaryFont font-normal text-gray text-base outline-none p-2' type='text' placeholder='Type to Search'/>
                <div className='pr-2 text-gray'>
                    <FiSearch/>
                </div>
            </div>
            <Link href='/'>
                <button className='bg-black border border-solid border-black px-20 py-5 text-white font-primaryFont font-bold text-sm mt-16'>Back to Home</button>
            </Link>
        </div>
      </Container>
    </div>
  )
}
