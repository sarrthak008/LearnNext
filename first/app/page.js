import Link from "next/link";
import ClientComp from "../component/ClientComp";
import ServerComp from "../component/ServerComp";

const Home = () => {
  return (
    <>
     <h1>i am Home page</h1>
     <Link href="/about"> go to about page</Link>
     <Link href='/contact'> go to contact page</Link>  
     <ClientComp/>  
     <ServerComp/>
  </>
  )
}

export default Home