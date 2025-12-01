import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-around gap-4 p-4 bg-green-950 items-center rounded-lg lg:justify-around">

            <div className="flex items-center gap-2">
                <img src="logo3.png" className="w-12 h-12 rounded-full" />
                <h1 className="font-bold text-white">Cluck & Co.</h1>
            </div>

            <div className="flex gap-3 md:flex-row md:gap-6">
                <Link to="/" className="text-white hover:text-red-600 font-medium py-2 
                    lg:py-0 transition-all duration-300 ease-in-out 
                    cursor-pointer transform hover:-translate-y-0.5">
                    Home
                </Link>
                <Link to="/about" className="text-white hover:text-red-600 font-medium py-2 
                    lg:py-0 transition-all duration-300 ease-in-out 
                    cursor-pointer transform hover:-translate-y-0.5">
                    About Us
                </Link>
                <Link to="/products"  className="text-white hover:text-red-600 font-medium py-2 
                    lg:py-0 transition-all duration-300 ease-in-out 
                    cursor-pointer transform hover:-translate-y-0.5">
                    Products
                </Link>
                <Link to="/contact"  className="text-white hover:text-red-600 font-medium py-2 
                    lg:py-0 transition-all duration-300 ease-in-out 
                    cursor-pointer transform hover:-translate-y-0.5">
                    Contact
                </Link>
            </div>

        </div>
    )
}

export default NavBar