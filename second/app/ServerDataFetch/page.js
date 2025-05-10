//fetch code in server side 
// we add client component in server component for that we create another client component

import UserBtn from "@/component/UserBtn"

const fetchData = async ()=>{
     let responce = await fetch('https://jsonplaceholder.typicode.com/users')
     responce = await responce.json()
     return responce

}

const page = async() => {
    let data = await fetchData()

    return (
        <div className="flex felx-col flex-wrap gap-4 ">
             {
                 data?.map((userInfo,index)=>{
                     return(
                         <div className="bg-gray-800 h-[130px] w-[250px] p-3 rounded-md text-gray-400" key={index}>
                             <h3>{userInfo.name}</h3>
                             <p>{userInfo.email}</p>
                             <p>{userInfo.phone}</p>
                             <UserBtn name={userInfo.name}/>
                         </div>
                     )
                 })
             }
        </div>
      )

   
}

export default page