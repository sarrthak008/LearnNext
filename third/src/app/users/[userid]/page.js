import Link from 'next/link'
import React from 'react'

function page({params}) {
    console.log(params)
  return (
    <>
    <div>helloo i am user  {params.userid}</div>
    <Link href={`./${params.userid}/hobbies`}>  go to  {params.userid} users  hobbies page</Link>

    </>
  )
}

export default page