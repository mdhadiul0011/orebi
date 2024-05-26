'use client'
import React from 'react'
import { FmenuData, shopData } from './fmenuData'
import List from '../list/list'
import ListItems from '../list/listItems'

export default function Shop() {
  return (
    <div className='footer-menu'>
      <h3 className='text-base font-bold font-primaryfont'>Shop</h3>
        <List className='mt-4'>
            {
                shopData.map((item, i)=>(
                    <ListItems key={i} links={item.link} className='font-primaryFont text-[14px] sm:text-xs md:text-[14px] lg:text-base font-normal text-gray mt-1'>{item.title}</ListItems>
                ))
            }
        </List>
    </div>
  )
}