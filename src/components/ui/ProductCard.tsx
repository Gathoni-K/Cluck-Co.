import AddToCartButton from "./AddToCartButton";
import InputField from "./InputField";
import { useState } from "react";
import type { ProductType } from "../../data/products";


/*
Parent component managing our state.
-One state handling our UI.

*/
interface ProductCardProps {
  product: ProductType;
  onAddToCart: (product: ProductType, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product,
  onAddToCart 
}) => {
  const [quantity, setQuantity] = useState<number>(0);

  // Handle when "Add to Cart" button is clicked
  function handleAddToCart() {
    setQuantity(1);
    onAddToCart(product, 1);
  }
  // sets our default quantity to 1

  // Handle increment
  function handleIncrement() {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onAddToCart(product, newQuantity);
  }

  // Handle decrement
  function handleDecrement() {
    const newQuantity = quantity - 1;
    if (newQuantity <= 0) {
      setQuantity(0);
    } else {
      setQuantity(newQuantity);
      onAddToCart(product, newQuantity);
    }
  }

  // Handle direct input change
  function handleQuantityChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    if (value <= 0) {
      setQuantity(0);
    } else {
      setQuantity(value);
      onAddToCart(product, value);
    }
  }

  // Calculate the price
  const calculatePrice = () => {
    if (typeof product.price === 'number') {
      const totalPrice = quantity > 0 ? product.price * quantity : product.price;
      return `KES ${totalPrice.toFixed(2)}`;
    }
    return product.price; 
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 bg-white shadow-lg rounded-lg p-4 md:p-6">      
      <div id={String(product.id)}>
        {/* image content */}
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
            <h3 className="text-lg font-semibold mb-2">Description: {product.description}</h3>
            <h4 className="text-xl font-bold text-green-600">Price: {calculatePrice()}</h4>
          </div>

          {/* Conditional rendering: Show Add to Cart button OR Quantity selector */}
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