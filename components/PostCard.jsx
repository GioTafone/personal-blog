import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

const PostCard = ({ post }) => {
  return (
    <div className='border border-custom-zinc m-2 mb-10 text-custom-zinc'>
      <div className='p-0 lg:p-8 pb-12 mb-8 m-12'>
          <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
            <Image 
              src={post.featuredImage.url}
              alt={post.title}
              className='object-top absolute h-80 w-full object-cover'
              layout='fill'
            />
          </div>
          <h1 className='transition duration-700 text-center mb-8 cursor-pointer hover:text-zinc-500 text-3xl font-semibold'>
            <Link href={`/post/${post.slug}`}>
              {post.title}
            </Link>
          </h1>
          <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
            <div className='font-medium text-zinc-400'>
              <span>
                {moment(post.createdAt).format('DD MMM, YYYY')}
              </span>
            </div>
          </div>
          <p className='text-center text-lg text-zinc-400 font-normal px-4 lg:px-20 mb-8'>{post.excerpt}</p>
          <div className='text-center py-10'>
            <Link href={`/post/${post.slug}`}>
              <span className='transition duration-700 transform hover:bg-zinc-400 hover:text-zinc-100 inline-block border border-zinc-400 text-lg font-medium px-8 py-3 cursor-pointer'>Continue Reading</span>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default PostCard