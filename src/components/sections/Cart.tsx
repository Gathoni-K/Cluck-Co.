/*
On clicking 'Add to Cart', the items are added as a list to the container.
-Each item has a delete button.
So clicking the button, adds content directly to this page.


*/

import { useCart } from "../../context/CartContext";
import ReusableButton from "../ui/ReusableButton";

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    if (cart.length === 0) {
        return (
        <div className="bg-stone-50 md:ml-24 p-6">
            <h2 className="text-xl font-semibold
            text-emerald-900">Your cart is empty</h2>
        </div>
        );
    }

    return (
        <div className="bg-stone-50 md:ml-24 p-6 min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <ul className="space-y-4">
            {cart.map(item => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                <div>
                <p className="font-semibold">{item.description}</p>
                <p>KES {Number(item.price).toFixed(2)} x {item.quantity}</p>
                </div>

                <div className="mr-4 ml-4">
                <ReusableButton
                styling="danger"
                type="button"
                functionality="delete"
                onClick={() => removeFromCart(item.id)}
                >
                Delete
                </ReusableButton>
                </div>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default Cart;
