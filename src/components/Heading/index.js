import React from 'react'

export default function Heading({children}) {
  return (
    <h3 className='text-[39px] font-primaryFont text-black font-bold mb-12'>
      {children}
    </h3>
  )
}
