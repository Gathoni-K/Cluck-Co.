import Layout from "../components/layout/Layout";
import ProductGrid from "../components/sections/ProductsGrid";
import ShoppingCart from "../components/ui/ShoppingCart";

const Products = () => {
  return (

    <div className="">

      <Layout>
        {/* actual products display */}
        <ShoppingCart />
        <div className="pt-8 md:pt-10">
          <ProductGrid />
        </div>

        

      </Layout>

    </div>
  )
}

export default Products