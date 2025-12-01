import { FiShoppingCart } from "react-icons/fi";
import ReusableButton from "./ReusableButton";

const ShoppingCart = () => {
    return (
        <div className="mt-4 flex justify-end mr-8">
            <ReusableButton
            styling= "primary"
            functionality = "link"
            to="/orderreviews"
            >
                Cart
                <FiShoppingCart />
            </ReusableButton>
        </div>
    )
}

export default ShoppingCart