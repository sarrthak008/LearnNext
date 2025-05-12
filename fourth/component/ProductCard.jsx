"use client"

import { useState } from "react"


const ProductCard = ({product}) => {
 
    const [imageUrl, setimageUrl] = useState(product.images[0])

    const handelChnageImage=(imgArr)=>{
         let indexOfPreviousImage = imgArr.indexOf(imageUrl)
         if(indexOfPreviousImage == imgArr.length-1){
            setimageUrl(imgArr[0])
         }else{
            setimageUrl(imgArr[indexOfPreviousImage+1])
         }
    }

  return (
    <div className="min-h-[450px] w-[250px] rounded-md overflow-hidden flex flex-col items-center relative m-4">
         <div className="h-[45%] w-full bg-gradient-to-l to-purple-950 from-purple-300 " onClick={()=>{
            handelChnageImage(product.images)
         }}>
             <img src={imageUrl} className="h-full w-full object-cover" />
         </div>
         <div className="h-[56%] w-full bg-white mx-auto  rounded-md rounded-t-2xl absolute bottom-3 p-2">
             <h3 className="text-md font-bold text-gray-800 ">{product?.title}</h3>
             <div className="text-[12px] flex gap-3 mt-3">
                 <span className="border-[1px] p-0.5 border-gray-600 rounded-sm">{product?.tags[0]}</span>
                 <span className="border-[1px] p-0.5 border-gray-600 rounded-sm">{product?.tags[1] ? product?.tags[1] : "shop" }</span>
             </div>
             <p className="text-[13px] mt-2 text-gray-600 line-clamp-4">
                {product?.description}
             </p>
             <div className="mt-4 flex items-center justify-between">
                 <span className="text-xl font-bold">${product.price}</span>
                 <span className="bg-purple-900 text-white py-2 px-6 cursor-pointer rounded-md">buy now</span>
             </div>
         </div>
    </div>
  )
}

export default ProductCard