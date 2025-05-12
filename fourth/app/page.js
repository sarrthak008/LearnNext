import CategoreCard from '@/component/CategoreCard';
import React from 'react'

const loadProductList = async () => {
  let response = await fetch('https://dummyjson.com/products/category-list')
  let data = await response.json()
  return data;
}

const page = async () => {
  let data =await loadProductList()
  return (
    <>
    <h1 className='text-center text-5xl font-bold capitalize'>products  category  list</h1>
      <div className='h-screen w-screen flex items-center justify-center gap-[15px] flex-wrap'>
          {data?.leght == 0 ? <h2>SERVER PROBLEM PLEASE WAIT</h2>:
              data.map((iteam,index)=>(
                <CategoreCard iteam={iteam} key={index}/>
              ))
          }
      </div>
    
    </>
  )
}

export default page