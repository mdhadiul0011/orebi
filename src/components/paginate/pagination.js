'use client'
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Arrivals_3 from '../newarrivals/newArrivals_3';
import Images from '../newarrivals/img';
import Badge from '../badge';
import Hover from '../newarrivals/hover';
import BottomText from '../newarrivals/bottomtext';
import Flex from '../Flex';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
            <div className='w-[100%] md:w-[50%] lg:w-[33%]'>
                <div className='max-w-[370px] mr-8'>
                    <div className=' relative group overflow-y-hidden'>
                        <Images src='./imgs/arraivals 6.png' alt='arrivals_1'/>
                        <Badge title='50%' badge={true}/>
                        <Hover/>
                    </div>
                    <BottomText/>
                </div>
            </div>
        ))}
    </>
  );
}

export default function Pagination({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    };

  
    return (
      <>
      <div className='w-[100%] flex  flex-wrap justify-end'>
        <Items currentItems={currentItems} />
      </div>
        
        <ReactPaginate
          breakLabel="..."
          breakClassName="mt-[14px]"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
          previousClassName="hidden"
          nextClassName="hidden"
          containerClassName="flex flex-wrap gap-x-3.5 gap-y-2 md:gap-y-0 mt-12"
          activeClassName="active bg-black text-white"
          pageClassName="page-item"
          pageLinkClassName="inline-block border border-solid border-[#f0f0f0] py-2 px-3 font-primary font-normal text-sm"
        />
        <p className='lg:absolute lg:bottom-0 lg:right-0 mt-3 lg:mt-0 font-primaryFont font-normal text-[#767676] text-sm'>
            Products from {itemOffset} to {itemOffset + itemsPerPage} of {items.length}
        </p>
      </>
    );
}
