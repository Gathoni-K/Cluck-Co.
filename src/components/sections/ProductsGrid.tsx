import ProductCard from "../ui/ProductCard";
import { products } from "../../data/products";

const ProductsGrid = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
