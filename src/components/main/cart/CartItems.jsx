import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const CartItems = ({ selectedProducts, handleClickRemove }) => {
    return (
        <div className='space-y-3'>
            {
                selectedProducts.map(product => {
                    return (
                        <div key={product.id} className="space-y-3">
                            <div
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                        <img src={product.icon} alt="" />
                                    </div>
                                    <div>
                                        <p className="font-medium">{product.title}</p>
                                        <p className="text-gray-500">$-{product.price}</p>
                                    </div>
                                </div>
                                <button
                                type="button"
                                onClick={() => handleClickRemove(product.id)}
                                className="text-pink-500 hover:text-pink-600 flex items-center gap-1">
                                    <FaTrashAlt size={14} />
                                    Remove
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default CartItems;