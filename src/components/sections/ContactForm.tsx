import contactImage from "../../assets/contactImage.png";
import { useForm  } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import Button from "../ui/ReusableButton";



interface ContactForm {
    name: string,
    email: string,
    phone: string,
    message: string,
}

const ContactForm = () => {

    const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
} = useForm<ContactForm>();

    const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    try {
        console.log(data);
        // await sendEmail(data);  // Your API call
        
        reset();  
        // Only reset if submission succeeds
        alert("Message sent successfully!");
    } catch (error) {
        console.error("Failed to send message", error);
        alert("Failed to send message. Please try again.");
    }
};

    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8
        grid grid-cols-1 md:grid-cols-2 gap-7 mt-8 bg-white rounded-2xl p-7">
            
            {/* image div */}
            <div>
                <img src={contactImage} 
                className="rounded-2xl"/>
            </div>

            {/* actual contact form */}
            <div className="flex flex-col gap-3">

                <h2 className="text-center font-bold text-orange-600
                tracking-wide mb-3">
                    We'd love to Hear from You!
                </h2>

                <h3 className="text-emerald-900 text-center font-bold">
                    Get in touch:
                </h3>

                <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>

                    <label>Name</label> <br></br>
                    <input
                    type="text"
                    placeholder="Enter Name here:"
                    {...register("name",{
                        required: "Please input your name"
                    })}
                    className="mb-2 px-4 py-3 focus:ring-2 border border-gray-300 rounded-lg shadow-md
                    placeholder:text-gray-400 focus:outline-none focus:ring-orange-600 w-90"
                    />
                    {errors.name && <span className="text-red-700">{errors.name.message}</span>}

                    <label>Email</label> <br></br>
                    <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    {...register("email", {
                        required: "Email cannot be empty",
                        pattern:{
                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                            message: "Enter a valid email"
                        }
                    })}
                    className="mb-2 px-4 py-3 focus:ring-2 border border-gray-300 rounded-lg shadow-md
                    placeholder:text-gray-400 focus:outline-none focus:ring-orange-600 w-90"
                    />
                    {errors.email && <span className="text-red-700">{errors.email.message}</span>}

                    <label>Phone</label> <br></br>
                    <input
                    type="tel"
                    placeholder="Enter phone here:"
                    {...register("phone", {
                        required: "Phone number cannot be empty",
                        minLength:{
                            value: 10,
                            message: "Enter a valid phone number"
                        },
                        maxLength:{
                            value: 13,
                            message: "Enter a valid phone number"
                        }
                    })}
                    className="mb-2 px-4 py-3 border border-gray-300 rounded-lg shadow-md
                    transition duration-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 w-90"
                    />
                    {errors.phone && <span className="text-red-700">{errors.phone.message}</span>}

                    <label>Your Message</label> <br></br>
                    <textarea 
                    placeholder="Enter message here:"
                    {...register("message", {
                        required: "Message cannot be empty"
                    })}
                    className="mb-2 w-full px-4 py-3 border border-gray-300
                    rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 transition duration-200 resize-y"
                    >
                    </textarea>
                    {errors.message && <span className="text-red-700">{errors.message.message}</span>}

                    <Button
                    type="submit"
                    styling="primary">
                        Submit
                    </Button>

                        

                </form>

            </div>

        </div>
    )
}

export default ContactForm