import React from 'react';
import { useRouter } from 'next/router';

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader } from '../../components';
// Fetch data at build time
export async function getStaticProps({ params }) {
    const posts = await getCategoryPost(params.slug, params.name);
  
    return {
      props: { posts },
    };
  }
  
  // Specify dynamic routes to pre-render pages based on data.
  // The HTML is generated at build time and will be reused on each request.
  export async function getStaticPaths() {
    const categories = await getCategories();
    return {
      paths: categories.map(({ slug }) => ({ params: { slug } })),
      fallback: true,
    }
    
  }

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  const categoryName = posts[0].node.categories[0].name

  return (
    <div className="container mx-auto px-10 mb-8">
      <h1 className='text-center m-3 font-bold text-3xl text-custom-zinc'>{categoryName}</h1>
      <div className="flex flex-col">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

