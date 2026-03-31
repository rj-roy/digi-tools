import React from 'react';
import { FaCheck } from 'react-icons/fa';

const AvailableProducts = ({ pro }) => {
    console.log(pro)
    return (
        <div className='grid space-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                pro.map(product => {
                    return (
                        <div key={product.id} className='border border-amber-100 p-4 rounded-xl'>
                            <div className={`${product.badge === "Best Seller" ? "bg-yellow-50 text-yellow-600" : product.badge === "Popular"? "bg-purple-50 text-purple-600" : "bg-green-50 text-green-600"} font-medium rounded-full p-1 px-2 flex w-25 text-sm text-center ml-auto items-center justify-center`}>
                                {product.badge}
                            </div>
                            <img src={product.icon} alt="" />
                            <div>
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                            </div>
                            <h4>
                                {product.price}
                                <span>
                                    /{product.billing}
                                </span>
                            </h4>

                            

                            {
                                product.features.map(feature =>{
                                   return (
                                    <ul className='list-none'>
                                        <li key={feature} className='flex items-center gap-1'>
                                            <FaCheck className='text-green-700'/><span>{feature}</span>
                                        </li>
                                    </ul>
                                   )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
};

export default AvailableProducts;