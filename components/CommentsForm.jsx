import React, { useState, useEffect, useRef } from 'react';
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setSuccessMessage] = useState(false)
  const commentElement = useRef()
  const nameElement = useRef()
  const emailElement = useRef()

  const handleSubmit = () => {
    setError(false)
    const { value: comment } = commentElement.current
    const { value: name } = nameElement.current
    const { value: email } = emailElement.current

    if(!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObj = { comment, name, email, slug }

      submitComment(commentObj)
        .then((res) => {
          setSuccessMessage(true)
          setTimeout(() => {
            setSuccessMessage(false)
          }, 3000)
        })
  }


  return (
    <div className='lg:border border-zinc-400 lg:p-8 pb-12 mb-8 text-custom-zinc'>
      <h3 className='text-xl mb-8 font-semibold pb-4'>I would love to read what you think about it!</h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea 
          ref={commentElement} 
          className='p-4 outline-none w-full border border-custom-zinc bg-custom-bg'
          placeholder="Leave a commenet here!"
          name='comment'
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input
          type='text' 
          ref={nameElement}
          className='py-2 px-4 outline-none w-full border border-custom-zinc bg-custom-bg'
          placeholder='Your name'
          name='name'
        />
      <input
          type='email' 
          ref={emailElement}
          className='py-2 px-4 outline-none w-full border border-custom-zinc bg-custom-bg'
          placeholder='Your email'
          name='email'
        />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
      </div>
      {error && <p className='text-xs text-red-500'>All field are required.</p>}
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <button 
          type='button' 
          onClick={handleSubmit}
          className='transition duration-700 transform hover:bg-zinc-400 inline-block hover:text-zinc-100 border border-zinc-400 text-lg font-medium cursor-pointer'
          >
            Send
        </button>
        {showSuccessMessage && <span className='text-lg float-right font-semibold mt-3 text-custom-zinc'>Comment submitted for review</span>}
      </div>

    </div>
  )

};

export default CommentsForm;