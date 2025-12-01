import { useState } from "react";
import ProductCard from "../ui/ProductCard";
import { products } from "../../data/products";
import type{ ProductType } from "../../data/products";

const ProductsGrid = () => {
  // Cart state: holds an array of products with quantities
  const [cart, setCart] = useState<ProductType[]>([]);

  // Handler for adding a product to the cart
  const handleAddToCart = (product: ProductType, quantity: number) => {
    //our function accepts two variables, product and quantity
    const existingIndex = cart.findIndex(item => item.id === product.id);
    // creates a variable that will help us determine whether to update the existing cart entry.
    // works by comparing id's of the current product and that of the product being clicked.
    
    if (existingIndex >= 0) {
      // Product already in cart, update quantity
      const newCart = [...cart];
      // is a copy of our cart array
      //creates a new variable and stores items previously in the cart
      const currentQty = typeof newCart[existingIndex].quantity === 'number' 
      // creates  a variable that checks if the existing cart's quantity is a number
        ? newCart[existingIndex].quantity 
        // if it is a number it returns the said number
        : 0;
        // else it defaults to 0
      newCart[existingIndex] = {
        // gets the cart items at the index where the product is found
        ...newCart[existingIndex],
        // copies all the fields of our newCart so that we can be able to change our quantity property only.
        quantity: currentQty + quantity
        // line updating our quantity
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