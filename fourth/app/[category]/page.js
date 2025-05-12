import ProductCard from "@/component/ProductCard";

const loadProductByCategory = async (product) => {
    let response = await fetch(`https://dummyjson.com/products/category/${product}`);
    let data = await response.json();
    return data?.products

}

const page = async ({ params }) => {
    let products = await loadProductByCategory(params.category);
    // console.log(products)
    return (
        <div className="flex flex-wrap justify-center items-center gap-10 min-h-screen w-screen  bg-gray-300">
            {

                products.length == 0 ? <h1 className="text-red-500">something went wrong</h1> :

                    products.map((product,index) => (
                       <ProductCard key={index} product={product}/>
                    ))

            }
        </div>
    )
}

export default page