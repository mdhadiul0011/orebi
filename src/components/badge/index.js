import React from 'react'

export default function Badge({title, badge}) {
  return (
    <div>
      {
        badge &&
        <span className='py-2 px-8 text-white bg-black inline-block absolute top-5 left-5 text-sm font-bold font-primaryFont'>{title}</span>
      }
    </div>
  )
}
