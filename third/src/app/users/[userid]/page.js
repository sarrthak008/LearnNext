import React from 'react'

function page({params}) {
    console.log(params)
  return (
    <div>helloo {params.userid}</div>
  )
}

export default page