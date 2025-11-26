import AddToCartButton from "./AddToCartButton";
import InputField from "./InputField";
import { useState } from "react";
import type { ProductType } from "../../data/products";

interface ProductCardProps {
  product: ProductType;
  onAddToCart: (product: ProductType, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product,
  onAddToCart 
}) => {
  const [amount, setAmount] = useState<number>(1);

  // State to handle the quantity user inputs
  function handleQuantityChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAmount(Number(e.target.value));
  }

  // Calculate the price
  const calculatePrice = () => {
    if (typeof product.price === 'number') {
      return `KES ${(product.price * amount).toFixed(2)}`;
    }
    return product.price; 
    // Return the string price as is (e.g., "750 per kg")
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 bg-white shadow-lg rounded-lg p-4 md:p-6">      
      {/* card content */}
      <div id={String(product.id)}>
        {/* image content */}
        <div>
          <img src={product.image} alt={product.description} className="w-full h-48 object-contain rounded-lg shadow-sm mb-4"/>
        </div>
        <div>
          {/* imported components section */}
          <div>
            <InputField value={amount} onChange={handleQuantityChange} />
            <AddToCartButton onClick={() => onAddToCart(product, amount)} />
          </div>
          {/* product description */}
          <div>
            <h3>Description: {product.description}</h3>
            <h4>Price: {calculatePrice()}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;