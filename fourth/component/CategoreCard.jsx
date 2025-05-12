"use client"

import Link from "next/link"


const CategoreCard = ({iteam}) => {
  return (
   <Link href={`${iteam}`}>
      <div className="h-[80px] w-[150px] bg-blue-300 cursor-pointer hover:h-[90px] transition-all rounded-xl flex flex-col items-center justify-center hover:bg-blue-500 shadow-gray-600 shadow-2xl">
        {iteam}
     </div>
   </Link>
  )
}

export default CategoreCard