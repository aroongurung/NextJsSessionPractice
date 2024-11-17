import Image from 'next/image';
import React from 'react';

interface PropsType {
    img: string;
    title: string;
    category: string;
    price: number;
}

const ProductCard: React.FC<PropsType> = ({ img, title, category, price }) => {
    const originalPrice = (price + 50).toFixed(2); // Ensure two decimal places for the original price

    return (
        <div className="flex flex-col justify-between items-center text-center px-2 py-4 border border-gray-200 shadow-xl rounded-xl w-full h-[30rem] max-w-[20rem]">

            {/* Product Image */}
            <div className="flex justify-center mb-4">
                <Image
                    className="inline-block w-[60%] h-[6rem] object-contain"
                    src={img}
                    width={130}
                    height={130}
                    alt={title}
                />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between space-y-4 h-full">

                {/* Product Title and Category */}
                <div className="space-y-2">
                    <h2 className="text-primary text-xs sm:text-2xl">{title}</h2>
                    <p className="text-gray-600 uppercase text-sm sm:text-base">{category}</p>
                </div>

                {/* Pricing Information */}
                <div className="font-bold flex justify-between items-center pt-2">
                    <span className="text-xl sm:text-2xl">€{price.toFixed(2)}</span>
                    <del className="text-red-500 font-normal text-xl sm:text-2xl">€{originalPrice}</del>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between gap-2 mt-4">
                    <button className="bg-primary text-white cursor-pointer w-32 h-12 text-[1rem] border-2 rounded-xl px-2 hover:bg-night">More Info</button>
                    <button className="bg-night text-white cursor-pointer w-32 h-12 text-[1rem] border-2 rounded-xl px-2 hover:bg-primary">Add to Basket</button>
                </div>
            </div>

        </div>


    );
};

export default ProductCard;
