import Layout from "../components/layout/Layout";
import DropdownButton from "../components/sections/DropDownButton";
import ProductGrid from "../components/sections/ProductsGrid";

const Products = () => {
  return (

    <div className="">

      <Layout>
      

        {/* products dropdown section */}
        <div className="mt-4 ml-8">
          <DropdownButton />
        </div>

        {/* actual products display */}
        <div className="pt-8 md:pt-10">
          <ProductGrid />
        </div>

        

      </Layout>

    </div>
  )
}

export default Products