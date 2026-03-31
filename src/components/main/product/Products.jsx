import React, { use } from 'react';
import AvailableProducts from './AvailableProducts';

const Products = ({ productPromise }) => {
    const product = use(productPromise).products;
    return (
        <section>
            <div className='space-y-4 grid place-items-center'>
                <div className='space-y-2 text-center'>
                    <h1 className='text-5xl'>Premium Digital Tools</h1>
                    <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                </div>
                <div className='gap-3 flex'>
                    <button className='text-xl md:text-xl bg-linear-to-b from-[#4f39f6] to-[#9514fa] rounded-full p-2 px-3 text-white'>
                        Products
                    </button>
                    <button className='text-xl md:text-xl bg-linear-to-b from-[#4f39f6] to-[#9514fa] rounded-full p-2 px-3 text-white'>
                        Cart <span>(0)</span>
                    </button>
                </div>
            </div>
            <div>
                <AvailableProducts pro = {product}/>
            </div>
        </section>
    );
};

export default Products;