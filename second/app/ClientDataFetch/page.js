"use client"

import { use, useEffect, useState } from "react"

const page = () => {

     const [user, setuser] = useState([])
     
     const LoadUsers = async()=>{
         let responce = await fetch("https://jsonplaceholder.typicode.com/users")
         let usersDate =  await responce.json();
         setuser(usersDate)
     }

     useEffect(()=>{
        LoadUsers();
     },[])

     console.log(user)

  return (
    <div className="flex felx-col flex-wrap gap-4 ">
         {
             user?.map((userInfo,index)=>{
                 return(
                     <div className="bg-gray-500 h-[100px] w-[250px] p-3 rounded-md" key={index}>
                         <h3>{userInfo.name}</h3>
                         <p>{userInfo.email}</p>
                         <p>{userInfo.phone}</p>
                     </div>
                 )
             })
         }
    </div>
  )
}

export default page