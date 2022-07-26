import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])
  

  return (
    <div className='p-8 mb-8 ml-5 pb-12 text-custom-zinc border border-zinc-400'>
      <h3 className='text-black text-xl mb-8 font-semibold border-b pb-4'>
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='cursor-pointer block pb-b mb-3'>
            {category.name}
          </span>
        
        </Link>
      ))}
    </div>
  )
}

export default Categories