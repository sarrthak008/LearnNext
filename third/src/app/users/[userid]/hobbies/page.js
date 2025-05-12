import Link from "next/link"


const page = async ({ params }) => {

    let userId = await params.userid

    return (
        <>
            <Link href={`../${userId}/hobbies/swiming`}>
                <h1>Swiming</h1>
            </Link>

            <Link href={`../${userId}/hobbies/swiming`}>
                <h1>dancing</h1>
            </Link>

            <Link href={`../${userId}/hobbies/swiming`}>
                <h1>car driving</h1>
            </Link>

            <Link href={`../${userId}/hobbies/swiming`}>
                <h1>Teaching</h1>
            </Link>

        </>
    )
}

export default page