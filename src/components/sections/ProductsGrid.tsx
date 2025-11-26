import { useState } from "react";
import ProductCard from "../ui/ProductCard";
import { products } from "../../data/products";
import type{ ProductType } from "../../data/products";

const ProductsGrid = () => {
  // Cart state: holds an array of products with quantities
  const [cart, setCart] = useState<ProductType[]>([]);

  // Handler for adding a product to the cart
  const handleAddToCart = (product: ProductType, quantity: number) => {
    const existingIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingIndex >= 0) {
      // Product already in cart, update quantity
      const newCart = [...cart];
      const currentQty = typeof newCart[existingIndex].quantity === 'number' 
        ? newCart[existingIndex].quantity 
        : 0;
      newCart[existingIndex] = {
        ...newCart[existingIndex],
        quantity: currentQty + quantity
      };
      setCart(newCart);
    } else {
      // Add new product to cart
      setCart([...cart, { ...product, quantity }]);
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;