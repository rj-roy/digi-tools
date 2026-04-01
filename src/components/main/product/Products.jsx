import React, { use, useState } from 'react';
import AvailableProducts from './AvailableProducts';
import Cart from '../cart/Cart';
import EmptyCart from '../cart/EmptyCart';

const Products = ({ productPromise }) => {
    const product = use(productPromise).products;
    const [selected, setSelected] = useState("available");

    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleClickRemove = (id) => {
        setSelectedProducts(
            selectedProducts.filter(item => item.id !== id)
        );
    };

    return (
        <section id='products' className='space-y-5 mb-25'>
            <div className='space-y-4 grid place-items-center'>
                <div className='space-y-2 text-center'>
                    <h1 className='text-5xl'>Premium Digital Tools</h1>
                    <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                </div>
                <div className='gap-3 flex'>
                    <button
                        onClick={() => setSelected("available")}
                        className={`cursor-pointer text-xl md:text-xl ${selected === "available" ? "bg-purple-600" : "bg-white"} rounded-full p-2 px-3 ${selected === "available" ? "text-white" : "text-black"}`}>
                        Products
                    </button>
                    <button
                        onClick={() => setSelected("selected")}
                        className={`cursor-pointer text-xl md:text-xl ${selected === "selected" ? "bg-purple-600" : "bg-white"} rounded-full p-2 px-3 ${selected === "selected" ? "text-white" : "text-black"}`}>
                        Cart <span>({selectedProducts.length})</span>
                    </button>
                </div>
            </div>

            {
                selected === "available" ?
                    <div>
                        <AvailableProducts
                            pro={product}
                            selectedProducts={selectedProducts}
                            setSelectedProducts={setSelectedProducts}
                        />
                    </div> :
                    <div>
                        {
                            selectedProducts.length == "0" ?
                                <EmptyCart /> :
                                <Cart 
                                selectedProducts={selectedProducts}
                                handleClickRemove={handleClickRemove}
                                />
                        }
                    </div>
            }
        </section>
    );
};

export default Products;