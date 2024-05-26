import React from 'react'
import ListItems from '../list/listItems'
import List from '../list/list'
import { FmenuData } from './fmenuData'

export default function Fmenu() {
  return (
    <div>
        <div className='footer-menu'>
            <h3 className='text-base font-bold font-primaryfont'>Menu</h3>
            <List className='mt-4'>
                {
                    FmenuData.map((item, i)=>(
                        <ListItems key={i} links={item.link} className='font-primaryFont text-[14px] sm:text-xs md:text-[14px] lg:text-base font-normal text-gray mt-1'>{item.title}</ListItems>
                    ))
                }
            </List>
        </div>
    </div>
  )
}
