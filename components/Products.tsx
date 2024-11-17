'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

interface propsType {
    image: string;
    title: string;
    category: string;
    price: number;
}

const Products = () => {
    const [productData, setProductData] = useState([])

    console.log(productData)

    useEffect(() => {
        async function getDataFromAPI() {
            const data = await fetch("https://fakestoreapi.com/products")
            setProductData(await data.json())
        }
        getDataFromAPI()

    }, [])

    return (
        <>
            <div className="container pt-16 mt-20">
                {/* Header Section */}
                <div className="flex flex-col justify-between items-center mb-6">
                    <div>
                        <h2 className="font-medium text-2xl text-center">New Products</h2>
                    </div>
                    <div className="text-center w-[60%] flex justify-center items-center gap-4 sm:gap-6 sm:w-[80%] mt-4">
                        <select className="text-gray-500 text-xl border-2 border-zinc-400 outline-night sm:w-48 w-full">
                            <option value="latest">Latest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                        <select className="text-gray-500 text-xl border-2 border-zinc-400 outline-night sm:w-48 w-full">
                            <option value="cheaper">Cheapest</option>
                            <option value="expensive">Most Expensive</option>
                        </select>
                    </div>

                </div>

                {/* Product Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 place-items-center">
                    {
                        productData.map((product: propsType, index: number) => (
                            <ProductCard
                                key={index}
                                img={product.image}
                                title={product.title}
                                category={product.category}
                                price={product.price}
                            />
                        ))
                    }
                </div>
            </div>





        </>
    )
}

export default Products