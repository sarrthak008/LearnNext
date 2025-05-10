"use client"
import React from 'react'

const UserBtn = ({name}) => {
    
    const PrintName =()=>{
        console.log(name);
    }

  return (
    <button className='bg-gray-500  px-6 text-white rounded-md mt-2 cursor-pointer hover:bg-gray-600 ' onClick={()=>PrintName()}>click me</button>
  )
}

export default UserBtn