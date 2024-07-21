
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
    const[productData, setProductData] = useState([])

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
        <div className='container pt-16'>
            <div className='flex justify-between items-center px-2 pt-2 mb-2 '>
                <h2 className='font-medium text-2xl pb-4'>New Products</h2>
                <select className='text-gray-500 text-[0.75rem] w-[4.8rem] outline-night ml-[70rem]
                    name="timemode"
                    id= "timemode"
                '>
                    <option value="latest">Latest</option>
                    <option value="oldest">Oldest</option>
                </select>
                <select className='text-gray-500 text-[0.75rem] w-[4.8rem] outline-night
                    name="valuemode"
                    id= "valuemode"
                '>
                    <option value="cheaper">Highest</option>
                    <option value="expensive">Lowest</option>
                </select>
            </div>


        <div className='grid grid-cols-1 place-items-center justify-items-center  sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                gap-10 xl:gap-x-20 xl:gap-y-10'>
            {
                productData.map((product:propsType, index:number) => (
                    <ProductCard
                        key= {index}
                        img= {product.image}
                        title= {product.title}
                        category ={product.category}
                        price= {product.price}

                    
                    />


                ))


            }
            

            
        </div>
        </div>
    
    </>
  )
}

export default Products