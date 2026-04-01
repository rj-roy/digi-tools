import CartItems from "./CartItems";

const Cart = ({ selectedProducts }) => {

    return (
        <div>
            <div className="mx-auto p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">Your Cart</h2>

                <CartItems selectedProducts={selectedProducts} />

                <div className="flex justify-between items-center mt-6 border-t pt-4">
                    <span className="font-medium">Total:</span>
                    <span className="text-lg font-bold">55</span>
                </div>

                <button className="mt-6 w-full py-3 bg-linear-to-r from-purple-500 to-purple-700 text-white font-semibold rounded-lg hover:opacity-90 transition">
                    Proceed To Checkout
                </button>
            </div>

        </div>
    )

};

export default Cart;