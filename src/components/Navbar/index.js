'use client'
import Logo from '@/svg/logo'
import React, { useEffect, useRef, useState } from 'react'
import Flex from '../Flex'
import { menudData } from './menudata'
import List from '../list/list'
import ListItems from '../list/listItems'
import Topbar from './topbar'
import { FaBars } from 'react-icons/fa6';
import useClickOutside from '@/helpers'

export default function Navber() {
    const [show, setShow] = useState(true)
    const nav_ref = useRef();

    useEffect(()=>{
        const scrollWidth = () => {
            if (window.innerWidth < 1024) {
                setShow(false);
            }
            else{
                setShow(true);
            }
        }
        scrollWidth();

        window.addEventListener('resize', scrollWidth)
    }, [])



    useClickOutside(nav_ref, ()=>{
        setShow(false)
    })


    return (
        <>
            <div className='container py-8'>
                <Flex className="items-center justify-between relative">
                    <div className='w-1/3'>
                        <Logo />
                    </div>
                    <div className='w-[67%]' ref={nav_ref}>
                        <FaBars onClick={()=>setShow(!show)} className='lg:hidden absolute top-0 right-0 cursor-pointer'/>
                      
                      <div className='lg:block hidden'>
                      <List className="lg:flex lg:gap-x-10 lg:justify-end absolute top-12 lg:top-0 right-8 lg:right-0  lg:bg-transparent px-6 lg:px-0 py-2 lg:py-0 z-50">
                                    { 
                                        menudData.map((item, i) => (
                                            <ListItems key={i} links={item.link} className=" text-gray font-normal text-sm p-2 lg:p-0 hover:font-bold hover:text-black">{item.title}</ListItems>
                                        ))
                                    }
                            </List>
                      </div>
                        {
                            show && 
                            <List className="lg:hidden w-[170px] absolute top-12 lg:top-0 right-8 lg:right-0 bg-white shadow-md lg:bg-transparent px-6 lg:px-0 py-2 lg:py-0 z-50">
                                {
                                    menudData.map((item, i) => (
                                        <ListItems key={i} links={item.link} className=" text-gray font-normal text-sm p-2 lg:p-0 hover:font-bold hover:text-black">{item.title}</ListItems>
                                    ))
                                }
                             </List>
                        }
                    </div>
                </Flex>
            </div>
    <div>
        <Topbar/>
    </div>
    </>
  )
}
