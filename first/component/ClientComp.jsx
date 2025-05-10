"use client"

const ClientComp = () => {

    const handelClick = ()=>{
        console.log("i am client component ");
    }

  return (
    <button  className="bg-blue-400 cursor-pointer" onClickCapture={()=>handelClick()}> click me</button>
  )
}

export default ClientComp