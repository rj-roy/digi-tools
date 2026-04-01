import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Card = ({product, selectedProducts, setSelectedProducts}) => {

    const handleBuyNow = () =>{
        console.log('kdld');
        setSelectedProducts([...selectedProducts, product]);
    }
    
    return (
        <div className='border border-amber-100 p-4 rounded-xl space-y-3'>
            <div className={`${product.badge === "Best Seller" ? "bg-yellow-50 text-yellow-600" : product.badge === "Popular" ? "bg-purple-50 text-purple-600" : "bg-green-50 text-green-600"} font-medium rounded-full p-1 px-2 flex w-25 text-sm text-center ml-auto items-center justify-center`}>
                {product.badge}
            </div>
            <img src={product.icon} alt="" />
            <h3 className='text-xl md:text-2xl font-bold'>{product.title}</h3>
            <p>{product.description}</p>
            <h4>
                <span className='text-xl md:text-2xl font-bold'>
                    {product.price}
                </span>
                <span>
                    /{product.billing}
                </span>
            </h4>

            <div>
                {
                    product.features.map(feature => {
                        return (
                            <ul key={feature} className='list-none'>
                                <li className='flex items-center gap-1'>
                                    <FaCheck className='text-green-700' /><span>{feature}</span>
                                </li>                                
                            </ul>
                        )
                    })
                }
            </div>

            <div>
                <button
                    onClick={handleBuyNow}                    
                className="buy-now btn cursor-pointer bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full p-2 px-3 text-white w-full hover:from-purple-600 hover:to-purple-800 transition-colors duration-300">
                    Buy Now
                </button>
            </div>
        </div>
    )
};

export default Card;