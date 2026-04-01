import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const EmptyCart = () => {

    return (
        <div className="bg-slate-300 rounded-2xl py-16 flex flex-col items-center justify-center text-center">

            <FaShoppingCart className="text-5xl text-gray-600 mb-4" />

            <h2 className="text-xl font-semibold text-gray-700">
                Your Cart is empty
            </h2>

        </div>
    );
};

export default EmptyCart;