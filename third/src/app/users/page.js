import Link from "next/link"


function users() {
  return (
    <>
      <Link href="users/1">
          <h1>user 1</h1>
       </Link>

       <Link href="users/2">
          <h1>user 2</h1>
       </Link>


       <Link href="users/3">
          <h1>user 3</h1>
       </Link>


       <Link href="users/4">
          <h1>user 4</h1>
       </Link>

       <Link href="users/5">
          <h1>user 5</h1>
       </Link>
    </>
  )
}

export default users