import Layout from "../components/layout/Layout";
import Cart from "../components/sections/Cart";
import OrderSummary from "../components/sections/OrderSummary";

const OrderReviewPage = () => {
    return (
        <div>
            <Layout>
                
                {/* header section */}
                <div className="container flex items-center justify-center
                bg-stone-50 p-6 mt-6 md:mt-8 w-[70%] max-w-[1200px] mx-auto
                relative rounded-lg text-orange-600">
                    <h1 className="text-4xl font-bold">
                        Your Shopping Cart
                    </h1>
                </div>

                {/* container for all our products */}
                <div className="flex md:flex-row flex-col gap-8 md:gap-24 items-center 
                justify-evenly mt-8 md:mt-12 ">
                    <Cart />
                    <OrderSummary />
                </div>

            </Layout>
        </div>
    )
}

export default OrderReviewPage