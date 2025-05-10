"use client"
import {useState} from "react"

export default function Counter() {

     let [Counter, setCounter] = useState(0)

     const handelCount =(ope)=>{
        ope === "+" ? setCounter(Counter + 1) : setCounter(Counter - 1);
     }

  return (
    <div className="h-screen w-scrren flex items-center justify-center flex-col gap-4 ">
      <button onClick={()=>handelCount("-")} className=" px-[40px] bg-blue-600 cursor-pointer ">- </button>
       <h1 className="text-4xl">{Counter}</h1>
       
       <button onClick={()=>handelCount("+")} className=" px-[40px] bg-blue-600 cursor-pointer">+ </button>
    </div>
  )
}
