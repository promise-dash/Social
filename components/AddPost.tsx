import Image from 'next/image'
import React from 'react'

const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
       <Image
        src="https://images.pexels.com/photos/9888555/pexels-photo-9888555.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      
      <div className="flex-1">
        <div className="flex gap-4">
          <textarea placeholder="What's on your mind?"
            className="flex-1 bg-slate-100 rounded-lg p-2 outline-none"
            name="desc"></textarea>
             <button>Submit</button>
        </div>

        <div className="flex items-center gap-10 mt-4 text-gray-400 flex-wrap">
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src="/addImage.png" alt='' width={20} height={20}/>
            Photo
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src="/addVideo.png" alt='' width={20} height={20}/>
            Video
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src="/addEvent.png" alt='' width={20} height={20}/>
            Event
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src="/poll.png" alt='' width={20} height={20}/>
            Poll
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost