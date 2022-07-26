
import Image from 'next/image';

const Author = ({ post }) => {


  const { name, photo, bio } = post.node.author
  
  return(
    <div>
        <div className="text-center p-8 m-2 lg:ml-5 relative text-custom-zinc border border-zinc-400">
            <Image
              alt={name}
              height="100px"
              width="100px"
              className="align-middle rounded-full"
              src={photo.url}
            />
          <h3 className="mt-4 mb-4 text-xl font-bold text-left">{name}</h3>
          <p className="text-ls text-left">{bio}</p>
        </div> 
    </div>
  );
}

export default Author;
