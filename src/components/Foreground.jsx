import React, { useState } from 'react'
import Card from "./Card"


function Foreground() {
  
  const ref = React.createRef()
  const data = [
    { 
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.", 
      filesize: ".9mb", 
      close: true, 
      tag: {isOpen: true, tagTitle: "Download now", tagColor: "green" } 
    },
    { 
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.", 
      filesize: ".9mb", 
      close: true, 
      tag: {isOpen: true, tagTitle: "Download now", tagColor: "blue" } 
    },
    { 
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.", 
      filesize: ".9mb", 
      close: true, 
      tag: {isOpen: true, tagTitle: "Uplod now ", tagColor: "green" } 
    },
  ];
 
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wra p-5'>
        {data.map((item) => (
          <Card data = {item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground