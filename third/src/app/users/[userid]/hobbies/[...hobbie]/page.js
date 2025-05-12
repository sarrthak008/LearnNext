

const page =async  ({params}) => {

    console.log(await params)

  return (
    <div>user id is a : {params.userid} & his hobbie is a : {params.hobbie}</div>
  )
}

export default page