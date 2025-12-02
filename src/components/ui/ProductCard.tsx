import AddToCartButton from "./AddToCartButton";
import InputField from "./InputField";
import { useState } from "react";
import type { ProductType } from "../../data/products";
import { useCart } from "../../context/CartContext";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState<number>(0);

  // Handle Add to Cart
  function handleAddToCart() {
    setQuantity(1);
    addToCart(product);
  }

  // Handle increment
  function handleIncrement() {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(product.id, newQuantity);
  }

  // Handle decrement
  function handleDecrement() {
    const newQuantity = quantity - 1;
    if (newQuantity <= 0) {
      setQuantity(0);
      updateQuantity(product.id, 0);
    } else {
      setQuantity(newQuantity);
      updateQuantity(product.id, newQuantity);
    }
  }

  // Handle direct input change
  function handleQuantityChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    setQuantity(value <= 0 ? 0 : value);
    updateQuantity(product.id, value);
  }

  // Calculate the price
  const calculatePrice = () => {
    if (typeof product.price === "number") {
      const totalPrice =
        quantity > 0 ? product.price * quantity : product.price;
      return `KES ${totalPrice.toFixed(2)}`;
    }
    return product.price;
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 bg-white shadow-lg rounded-lg p-4 md:p-6">
      <div id={String(product.id)}>
        {/* image */}
        <div>
          <img
            src={product.image}
            alt={product.description}
            className="w-full h-48 object-contain rounded-lg shadow-sm mb-4"
          />
        </div>

        <div>
          {/* Product description */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">
              Description: {product.description}
            </h3>
            <h4 className="text-xl font-bold text-green-600">
              Price: {calculatePrice()}
            </h4>
          </div>

          {/* Conditional rendering */}
          <div className="mt-4">
            {quantity === 0 ? (
              <AddToCartButton onClick={handleAddToCart} />
            ) : (
              <InputField
                value={quantity}
                onChange={handleQuantityChange}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
