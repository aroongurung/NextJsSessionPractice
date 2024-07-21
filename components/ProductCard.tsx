import Image from 'next/image';
import React from 'react'


interface propsType {
    img: string;
    title: string;
    category: string;
    price: number;
}

const ProductCard: React.FC<propsType> = ({img, title, category, price}) => {
  return (
    <>
        <div className='flex flex-col justify-center items-center text-center px-2 py-2 border border-gray-200 shadow-2xl rounded-xl min-w-[22rem] min-h-[25rem] '>
            <div>
                <Image className='inline-block w-[60%] max-h-[10rem] mb-2' src={img} width={200} height={200} alt={title} />
            </div>
            <div className='space-y-1 py-6'>
            <h2 className='text-primary font-semibold mb-4'>{title}</h2>
                <p className='text-gray-800 inline-block max-w-[150px] uppercase pt-2 '>{category}</p>         
                    <div className='font-bold flex justify-around pt-4'>
                        €{price} <del className='text-red-500 font-normal'>€{(price) + 50 }</del>
                    </div>             
            </div>
            <div className='flex justify-between gap-12 '>
                <button className='buttonsecondary min-w-[6rem]'>More Info</button>
                <button className='buttonprimary min-w-[8rem]'>Add to Basket</button>
            </div>
        </div>
    </>
  )
}

export default ProductCard