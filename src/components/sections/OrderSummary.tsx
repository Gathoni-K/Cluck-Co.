import ReusableButton from "../ui/ReusableButton";
import { useForm, type SubmitHandler } from "react-hook-form";

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

    const onSubmit: SubmitHandler<OrderForm> = async (data) => {
    try {
        console.log(data);
        
        // WhatsApp integration
        const supplierPhone = "254794371444"; 
        const message = ` NEW ORDER\n\n Name: ${data.name}\n Phone: ${data.phoneNumber}\n\n ${new Date().toLocaleString()}`;
        const whatsappURL = `https://wa.me/${supplierPhone}?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp
        window.open(whatsappURL, '_blank');
        
        reset();
        alert("Order sent successfully!");
    }
    catch(error) {
        console.error("Failed to send order", error);
        alert("Failed to send your order, please try again.");
    }
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
                <form onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-2 md:gap-4">
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
                    {errors.name && <span className="text-red-600 text-sm mt-2 block">{errors.name.message}</span>}

                    <input
                    placeholder="Enter phone number here"
                    className="px-4 py-3 border border-gray-300 transition-all
                    duration-200 rounded-lg placeholder:text-gray-400
                    focus:outline-none focus:ring-2 focus:ring-orange-600
                    shadow-md"
                    {...register("phoneNumber",
                        {required: "Number cannot be empty",
                            minLength: {
                            value: 10,
                            message: "Phone number must be at least 10 digits"
                        },
                        maxLength: {
                            value: 15,
                            message: "Phone number is too long"
                        },
                        }
                    )}
                    />
                    {errors.phoneNumber && <span className="text-red-600 text-sm mt-2 block">{errors.phoneNumber.message}</span>}

                    <ReusableButton
                type="submit"
                styling="primary"
                functionality="confirm"
                >
                    Confirm
                </ReusableButton>


                </form>

            </div>


            
        </div>
    )
}

export default OrderSummary