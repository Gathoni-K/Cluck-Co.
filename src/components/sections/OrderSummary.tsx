import ReusableButton from "../ui/ReusableButton";
import { useForm } from "react-hook-form";

interface OrderForm{
    name: string;
    phoneNumber: string;
}

const OrderSummary = () => {

    const {
        register,
        handleSubmit,
        formState:{errors},
        reset,
    } = useForm<OrderForm>();

    const onSubmit = (data:OrderForm) => {
        console.log(data);
    }
    return (
        <div className="bg-stone-50 mx-auto px-4
        md:px-6 lg:px-8 items-center justify-center flex flex-col 
        p-6 md:p-8 rounded-lg">
            <h1 className="font-bold text-xl">
                Your Order
            </h1>


            {/* input field for user to input their number and phone number */}
            <div className="mt-4 md:mt-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                    placeholder="Enter Name here"
                    className="px-4 py-3 border border-gray-300 transition-all
                    duration-200 rounded-lg placeholder:text-gray-400
                    focus:outline-none focus:ring-2 focus:ring-orange-600
                    shadow-md"
                    {...register("name",
                        {required: "Name cannot be empty"}
                    )}
                    />

                    <input
                    placeholder="Enter phone number here"
                    className="px-4 py-3 border border-gray-300 transition-all
                    duration-200 rounded-lg placeholder:text-gray-400
                    focus:outline-none focus:ring-2 focus:ring-orange-600
                    shadow-md"
                    {...register("phoneNumber",
                        {required: "Number cannot be empty",
                            
                        }
                    )}
                    />

                </form>

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