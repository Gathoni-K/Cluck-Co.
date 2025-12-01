import ReusableButton from "../ui/ReusableButton";

const OrderSummary = () => {
    return (
        <div className="bg-stone-50 mx-auto px-4
        md:px-6 lg:px-8 items-center justify-center flex flex-col 
        p-6 md:p-8 rounded-lg">
            <h1 className="font-bold text-xl">
                Your Order
            </h1>

            <div className="md:mt-6 mt-4">
                <h4>
                    Total: 

                </h4>
                <p></p>
            </div>

            <div className="mt-6 md:mt-8 lg:mt-10">
                <ReusableButton
                type="button"
                styling="primary"
                functionality="confirm"
                >
                    Confirm
                </ReusableButton>
            </div>

            
        </div>
    )
}

export default OrderSummary