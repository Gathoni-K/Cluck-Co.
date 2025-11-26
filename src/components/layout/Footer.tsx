import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-stone-700 flex flex-col p-6 rounded-lg mt-8 gap-6">
            
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between items-center lg:items-start gap-6">
            
                {/* Brand Section */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="flex items-center gap-3 mb-2">
                        <img src="logo3.png" className="w-12 h-12 rounded-full" />
                        <h2 className="text-white text-xl font-bold">Cluck & Co.</h2>
                    </div>
                    <h3 className="text-stone-300 italic">From our Farm To Your Table</h3>
                    
                    {/* Social Icons */}
                    <div className="flex gap-3 mt-4">
                        <FaFacebook className="text-white text-2xl hover:text-blue-400 transform hover:-translate-y-1 cursor-pointer transition-all duration-300 ease-in-out p-1 rounded" />
                        <FaLinkedin className="text-white text-2xl hover:text-blue-400 transform hover:-translate-y-1 cursor-pointer transition-all duration-300 ease-in-out p-1 rounded" />
                        <FaSquareXTwitter className= "text-2xl hover:text-black transform hover:-translate-y-1 cursor-pointer transition-all duration-300 ease-in-out p-1 bg-white rounded" />
                    </div>
                </div>

                {/* Links Section */}
                <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-8">
                    <a className="text-stone-300 hover:text-white hover:underline transition-colors duration-200 cursor-pointer font-medium">Terms of Service</a>
                    <a className="text-stone-300 hover:text-white hover:underline transition-colors duration-200 cursor-pointer font-medium">Privacy Policy</a>
                    <a className="text-stone-300 hover:text-white hover:underline transition-colors duration-200 cursor-pointer font-medium">Contact Us</a>
                    <a className="text-stone-300 hover:text-white hover:underline transition-colors duration-200 cursor-pointer font-medium">FAQ</a>
                </div>
            </div>

            {/* Bottom Section - Centered Copyright */}
            <div className="border-t border-stone-600 pt-4 mt-4">
                <p className="text-stone-400 text-center text-sm">
                    © 2025 Cluck & Co. All Rights Reserved
                </p>
            </div>

        </div>
    )
}

export default Footer