import { FaTrashAlt } from "react-icons/fa";

const Cart = ({ selectedProducts }) => {

    console.log(selectedProducts);
    return (
        <div>
            {
                selectedProducts.map(product => {
                    return (
                        <div className="mx-auto p-6 bg-white rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-4">Your Cart</h2>

                            <div className="space-y-3">
                                <div
                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                            <img src={product.icon} alt="" />
                                        </div>
                                        <div>
                                            <p className="font-medium">{product.title}</p>
                                            <p className="text-gray-500">{product.price}</p>
                                        </div>
                                    </div>
                                    <button className="text-pink-500 hover:text-pink-600 flex items-center gap-1">
                                        <FaTrashAlt size={14} />
                                        Remove
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-6 border-t pt-4">
                                <span className="font-medium">Total:</span>
                                <span className="text-lg font-bold">55</span>
                            </div>

                            <button className="mt-6 w-full py-3 bg-linear-to-r from-purple-500 to-purple-700 text-white font-semibold rounded-lg hover:opacity-90 transition">
                                Proceed To Checkout
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )

};

export default Cart;