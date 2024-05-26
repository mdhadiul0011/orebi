import React from 'react'
import SidebarContent from './sidebarContent'
import { brand, catagory, colors, prices } from './data'

export default function ShopLeftSidebar() {
  return (
    <div>
      <SidebarContent dropDown={false} MTitle='Shop by Catagory' data={catagory}/>
      <SidebarContent dropDown={true} MTitle='Shop by Color' data={colors}/>
      <SidebarContent dropDown={true} MTitle='Shop by Brand' data={brand}/>
      <SidebarContent dropDown={true} MTitle='Shop by Price' data={prices}/>
    </div>
  )
}
