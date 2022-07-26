import React, {useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

import { getRecentPosts } from '../services'

const RecentPosts = () => {
  const [recentPosts, setRecentPosts] = useState([])

  useEffect(() => {
      getRecentPosts()
      .then((result) => setRecentPosts(result))
  }, [])


  return (
    <div className='p-8 mb-8 ml-5 text-custom-zinc mt-2 grid grid-cols-1 lg:grid-cols-3'>
      {recentPosts.map((post) => (
        <div key={post.title} className='flex items-center w-full mb-4'>
          <div className='w16 flex-none'>
            <Image 
              alt={post.title}
              height='60px'
              width='60px'
              className='align-middle rounded-full'
              src={post.featuredImage.url}
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-zinc-500 font-xs'>
              {moment(post.createdAt).format('DD MMM, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecentPosts