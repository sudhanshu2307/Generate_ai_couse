import React from 'react'
import YouTube from 'react-youtube'
import ReactMarkdown from 'react-markdown'
import { Button } from '@/components/ui/button';

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 0,
  },
}

function ChapterContent({ chapter, content }) {
  console.log("Chapter:", chapter);
  console.log("Content:", content);
  
  // Check if content.applications is an array
  const contentItems = Array.isArray(content?.content) ? content.content : [];

  console.log("Content Items:", contentItems);

  return (
    <div className='p-10'>
      <h2 className='font-medium text-2xl'>{chapter?.name}</h2>
      <p className='text-gray-500'>{chapter?.about}</p>
    
      <div className='flex my-6 justify-center'>
        <YouTube videoId={content?.videoId} opts={opts}></YouTube>
      </div>
      <div>
        {contentItems.map((item, index) => (
          <div key={index} className='p-5 bg-sky-50 mb-3 rounded-lg'>
            <h2 className='font-medium text-lg'>{item.title}</h2>
            <ReactMarkdown>{item?.description}</ReactMarkdown>

            {item.codeExample && (
              <div className='p-4 bg-black text-white rounded-md mt-3'>
                <pre>
                  <code>{item.codeExample}</code>
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
   
    </div>
  )
}

export default ChapterContent
