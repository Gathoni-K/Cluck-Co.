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
                <div className="flex flex-col md:flex-row gap-8 md:gap-8 mt-8 md:mt-12">
                    <div className="w-full md:w-2/3">
                        <Cart />
                    </div>
                    <div className="w-full md:w-1/3 mr-4">
                        <OrderSummary />
                    </div>
                    </div>

            </Layout>
        </div>
    )
}

export default OrderReviewPage