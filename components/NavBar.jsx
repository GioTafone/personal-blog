import React, { useEffect, useState } from 'react'
import { getCategories } from '../services'

import Link from 'next/link'


const NavBar = () => {
  
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])
  
  return (
    <div className='mx-auto px-10 mb-8 text-custom-zinc'>
        <div className='px-10 border-b w-full border-custom-zinc py-12'>
            <div className='flex justify-center pb-5'>
                <Link href='/'>
                    <span className='cursor-pointer text-[80px] font-Nautigal'>
                        Vivi Blog
                    </span>
                </Link>
            </div>
            <div className='flex flex-col items-center sm:justify-center sm:flex-row pr-2'>
              {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <ul className='sm:flex mt-2 ml-4 font-semibold cursor-pointer'>
                        <li className='mx-12 text-[30px]'>{category.name}</li>
                    </ul>
                </Link>
              ))}  
            </div>
        </div>
    </div>
  )
}

export default NavBar