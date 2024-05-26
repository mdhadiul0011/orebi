'use client'
import React, { useRef, useState } from 'react'
import Flex from '../Flex'
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2';
import { AiOutlineSearch, AiFillCaretDown } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs';
import ListItems from '../list/listItems';
import List from '../list/list';
import useClickOutside from '../../helpers';
import { UserData, catagory } from './menudata';
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';


export default function Topbar() {
    const clickOuterMenu = useRef(null);
    const [showDropMenu, setShowDropMenu] = useState(false)
    const SearchRef = useRef(null)
    const [search, setSearch] = useState(false)
    const userRef = useRef(null)
    const [user, setUser] = useState(false)
    const [cartMenu, setCartMenu] = useState(false)
    const cartRef = useRef(null)

    useClickOutside(clickOuterMenu, ()=>{
        setShowDropMenu(false)
    })

    const handleShowDropDown = () => {
        setShowDropMenu(true)
    }

    useClickOutside(SearchRef, ()=>{
        setSearch(false)
    })

    const handleSearch = () => {
        setSearch(true)
    }

    useClickOutside(userRef, ()=> {
        setUser(false)
    });

    const handleUserClick = () => {
        setUser(true)
    }

    useClickOutside(cartRef, ()=> {
        setCartMenu(false)
    });

    const handleCartMenu= () => {
        setCartMenu(true)
    }

  return (
    <div  className='p-[25px] bg-light'>
        <div className='container'>
            <Flex className='items-center justify-between gap-3'>
                <div className='w-[30%] relative cursor-pointer' onClick={handleShowDropDown}>
                    <Flex className='items-center gap-2'>
                        <div><HiOutlineBars3BottomLeft/></div>
                        <div>
                            <p className='font-normal text-sm text-black sm:block hidden'>Shop by Catagory</p>
                        </div>
                    </Flex>
                 {
                    showDropMenu && 
                    <div className='z-50 lg:w-45 w-[200px] bg-black shadow-md absolute top-[40px] left-0' ref={clickOuterMenu}>
                    <List className='w-full'>
                        {
                            catagory.map((item, i)=>(
                                <ListItems links={item.link} key={i} className='font-primaryFont last:border-b-0 font-normal text-sm text-gray hover:text-white hover:font-bold py-4 px-2 border-b border-solid hover:pl-3 transition-all duration-150 ease-in border-gray'>{item.title}</ListItems>
                            ))
                        }
                    </List>
                </div>
                 }
                </div>
                <div  className='w-[45%] relative'>
                    <div className='w-full sm:bg-white bg-transparent p-2'>
                        <Flex className='items-center justify-between'>
                            <div className='w-[90%]'>
                                 <input type='text' placeholder='Search product...' className=' sm:block hidden outline-none sm:w-[65%] w-[60%] px-[20px]'/>
                            </div>
                            <div className='px-5'>
                                <AiOutlineSearch className='cursor-pointer' onClick={handleSearch}/>
                            </div>
                        </Flex>
                    </div>
                    {
                        search && 
                        <div className='z-50 absolute top-[40px] left-[10px]' ref={SearchRef}>
                            <input type='text' placeholder='Search product...' className=' sm:hidden block outline-none p-[8px]'/>
                        </div>
                    }
                </div>
                <div  className='sm:w-[18%] w-[25%] relative'>
                    <Flex className='items-center justify-end gap-8'>
                        <div onClick={handleUserClick}>
                            <Flex className='items-center cursor-pointer'>
                                <div>
                                    <FaUserAlt/>
                                </div>
                                <div>
                                    <AiFillCaretDown/>
                                </div>
                            </Flex>
                        </div>
                        <div className='cursor-pointer' onClick={handleCartMenu}>
                            <BsFillCartFill/>
                        </div>
                    </Flex>

                    {
                    user && 
                        <div className='z-50 w-[190px] bg-black shodow-md  absolute top-12 right-0' ref={userRef}>
                            <List>
                            {
                                UserData.map((item, i)=> (
                                    <ListItems links={item.link}  className='font-primaryFont last:border-b-0 font-normal text-sm text-gray hover:text-white hover:font-bold py-4 px-2 border-b border-solid hover:pl-3 transition-all duration-150 ease-in border-gray'>{item.title}</ListItems>
                                ))
                            }
                            </List>
                        </div>
                    }

                    {
                    cartMenu && 
                        <div className='z-50 w-[332px] bg-white shodow-md absolute top-12 right-0 pb-4' ref={cartRef}>
                            <div className='bg-[#F1f1f1] p-8'>
                                <Flex className='justify-between'>
                                    <div className='w-[80px] h-[80px] rounded-[50%] border-none overflow-hidden'>
                                        <img src='./imgs/offers_1.png' alt='offers' className='object-cover'/>
                                    </div>
                                    <div>
                                        <h3 className='text-base font-primaryFont font-semibold text-black mt-[16px] ml-[-30px]'>Golden Tea Table</h3>
                                        <p className='text-base font-primaryFont font-semibold text-black mt-[8px] ml-[-30px]'>$44.00</p>
                                    </div>
                                    <div >
                                        <RxCross2 className='mt-[35px] text-lg font-bold text-black cursor-pointer'/>
                                    </div>
                                </Flex>
                            </div>
                            <div className='py-4 px-6'>
                                <span className='text-gray font-primaryFont font-regular text-[16px] font-medium'>SubTotal:</span> <span className='text-black font-primaryFont text-[16px] font-bold'>$44.00</span>

                                <div className='mt-4'>
                                    <Link href='/Cart'>
                                        <button className='py-4 px-6 text-black hover:text-white transition-all duration-400 ease-in-out bg-white hover:bg-black mr-[24px] border border-solid border-black'>
                                            <h3 className=' font-primaryFont text-base font-regular'>View to cart</h3>
                                        </button>
                                    </Link>
                                    <button className='py-4 px-6 text-black hover:text-white bg-white transition-all duration-400 ease-in-ou hover:bg-black border border-solid border-black'>
                                        <Link href='/CheckOut'>
                                            <h3 className=' font-primaryFont text-base font-regular'>Check Out</h3>
                                        </Link>
                                    </button>
                                </div>
                            </div>

                        </div>
                    }
                </div>
            </Flex>
        </div>
    </div>
  )
}
