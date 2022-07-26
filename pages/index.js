import Head from 'next/head'
import { PostCard, Categories, PostWidget, Author, RecentPosts } from '../components'
import { getPosts } from '../services'

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts
    }
  }
}



export default function Home({ posts }) {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Vivi Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col'>
        <RecentPosts />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap 12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
              <PostCard key={post.title} post={post.node} />
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>
              <Author post={posts[0]} />
              {posts[0].node.slug ? [] : <PostWidget />}
            </div>
        </div>
      </div>
    </div>
  )
}
